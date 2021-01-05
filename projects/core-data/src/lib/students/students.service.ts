import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  model = 'students';

  constructor(private http: HttpClient) {}

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Student[]>(this.getUrl());
  }

  load(id: string) {
    return this.http.get<Student>(this.getUrlForId(id));
  }

  create(student: Student) {
    return this.http.post(this.getUrl(), student);
  }

  update(student: Student) {
    return this.http.patch(this.getUrl(), student);
  }

  delete(student: Student) {
    return this.http.delete(this.getUrlForId(student.id));
  }
}
