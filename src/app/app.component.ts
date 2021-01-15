import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/core-data/src/lib/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fullstack Master Courses';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn = false;

  links = [{ path: '/courses', icon: 'work', label: 'courses' }];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn$.subscribe((loggedIn) => {
      const path = loggedIn ? '' : 'login';
      this.isLoggedIn = loggedIn;
      this.router.navigate([path]);
    });
  }

  logout() {
    this.authService.logout();
  }

  isSidenaveOpen(component: any, isLoggedIn: boolean) {
    return component.opened && isLoggedIn;
  }
}
