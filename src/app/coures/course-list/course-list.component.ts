import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'projects/core-data/src/lib/courses/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter<Course>();
  @Output() deleted = new EventEmitter<Course>();

  constructor() {}

  trackCourse(index: any, course: Course) {
    return course.id;
  }

  ngOnInit(): void {}
}
