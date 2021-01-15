import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NotificationsService } from '../notifications/notification.service';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Course[]>(this.getUrl());
  }

  load(id: string) {
    return this.http.get<Course>(this.getUrlForId(id));
  }

  loadByStudent(studentId: string) {
    return this.http
      .get<Course[]>(this.getUrl(), { params: { studentId } })
      .pipe(
        switchMap((courses) => {
          if (courses.length) {
            return of(courses);
          } else {
            return throwError(
              `No courses exist for student with ID ${studentId}`
            );
          }
        }),
        catchError((error) => {
          this.notificationsService.show(error);

          return throwError(error);
        })
      );
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: Course) {
    return this.http.patch(this.getUrlForId(course.id), course);
  }

  delete(course: Course) {
    return this.http.delete(this.getUrlForId(course.id));
  }
}
