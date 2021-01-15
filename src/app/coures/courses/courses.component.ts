import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { emptyCourse } from 'projects/core-data/src/lib/courses';
import { Course } from 'projects/core-data/src/lib/courses/course.model';
import { CoursesService } from 'projects/core-data/src/lib/courses/courses.service';
import { NotificationsService } from 'projects/core-data/src/lib/notifications/notification.service';
import { Student } from 'projects/core-data/src/lib/students/student.model';
import { StudentsService } from 'projects/core-data/src/lib/students/students.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = new Observable();
  students$: Observable<Student[]> = new Observable();
  private currentCourseSubject: BehaviorSubject<Course> = new BehaviorSubject<Course>(
    emptyCourse
  );

  constructor(
    private readonly coursesService: CoursesService,
    private readonly studentService: StudentsService,
    private readonly notification: NotificationsService
  ) {}

  ngOnInit() {
    this.getCourses();
    this.getStudents();
    this.resetCurrentCourse();
  }

  get currentCourse$() {
    return this.currentCourseSubject.asObservable();
  }

  resetCurrentCourse() {
    this.currentCourseSubject.next(emptyCourse);
  }

  selectCourse(course: any) {
    this.currentCourseSubject.next(course);
  }

  cancel(course: any) {
    this.resetCurrentCourse();
  }

  getStudents() {
    this.students$ = this.studentService.all();
  }

  getCourses() {
    this.courses$ = this.coursesService.all();
  }

  saveCourse(course: any) {
    if (!course.id) {
      this.createCourse(course);
    } else {
      this.updateCourse(course);
    }
  }

  createCourse(course: any) {
    course = { ...course, createDate: new Date() };
    this.coursesService.create(course).subscribe(() => {
      this.notification.show('Course created!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  updateCourse(course: any) {
    this.coursesService.update(course).subscribe(() => {
      this.notification.show('Course saved!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  deleteCourse(course: any) {
    this.coursesService.delete(course).subscribe(() => {
      this.notification.show('Course deleted!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }
}
