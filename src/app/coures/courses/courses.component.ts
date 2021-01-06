import { Component, OnInit } from '@angular/core';
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
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> | undefined;
  students$: Observable<Student[]> | undefined;
  private _currentCourse$: BehaviorSubject<Course> = new BehaviorSubject<Course>(
    emptyCourse
  );

  constructor(
    private readonly coursesService: CoursesService,
    private readonly customerService: StudentsService,
    private readonly ns: NotificationsService
  ) {}

  ngOnInit() {
    this.getCourses();
    this.getStudents();
    this.resetCurrentCourse();
  }

  get currentCourse$() {
    return this._currentCourse$.asObservable();
  }

  resetCurrentCourse() {
    this._currentCourse$.next(emptyCourse);
  }

  selectCourse(course: any) {
    this._currentCourse$.next(course);
  }

  cancel(course: any) {
    this.resetCurrentCourse();
  }

  getStudents() {
    this.students$ = this.customerService.all();
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
    this.coursesService.create(course).subscribe(() => {
      this.ns.emit('Course created!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  updateCourse(course: any) {
    this.coursesService.update(course).subscribe(() => {
      this.ns.emit('Course saved!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  deleteCourse(course: any) {
    this.coursesService.delete(course).subscribe(() => {
      this.ns.emit('Course deleted!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }
}
