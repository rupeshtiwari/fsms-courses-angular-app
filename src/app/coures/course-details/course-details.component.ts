import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'projects/core-data/src/lib/courses/course.model';
import { Student } from 'projects/core-data/src/lib/students/student.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  originalTitle: string | undefined;
  selectedCourse: Course | undefined;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() students: Student[] | undefined;

  @Input() set course(value: Course) {
    if (value) {
      this.originalTitle = value.title;
    }
    this.selectedCourse = Object.assign({}, value);
  }
}
