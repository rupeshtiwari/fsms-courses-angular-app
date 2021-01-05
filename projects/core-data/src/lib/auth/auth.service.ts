import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  model = 'auth/login';
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.setToken(this.token);
  }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  login(email: string, password: string) {
    return this.http.post(this.getUrl(), { email, password });
  }

  logout() {
    this.setToken('');
  }

  // TOKEN
  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isAuthenticated$.next(token !== ''); // Could be more Robust
  }

  get token(): string {
    return localStorage.getItem('token') as string;
  }
}
