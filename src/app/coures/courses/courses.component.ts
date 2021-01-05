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
  customers$: Observable<Student[]> | undefined;
  currentCourse$: BehaviorSubject<Course> = new BehaviorSubject<Course>(
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

  resetCurrentCourse() {
    this.currentCourse$.next(emptyCourse);
  }

  selectCourse(course: Course) {
    this.currentCourse$.next(course);
  }

  cancel(course: Course) {
    this.resetCurrentCourse();
  }

  getStudents() {
    this.customers$ = this.customerService.all();
  }

  getCourses() {
    this.courses$ = this.coursesService.all();
  }

  saveCourse(course: Course) {
    if (!course.id) {
      this.createCourse(course);
    } else {
      this.updateCourse(course);
    }
  }

  createCourse(course: Course) {
    this.coursesService.create(course).subscribe(() => {
      this.ns.emit('Course created!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  updateCourse(course: Course) {
    this.coursesService.update(course).subscribe(() => {
      this.ns.emit('Course saved!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }

  deleteCourse(course: Course) {
    this.coursesService.delete(course).subscribe(() => {
      this.ns.emit('Course deleted!');
      this.getCourses();
      this.resetCurrentCourse();
    });
  }
}
