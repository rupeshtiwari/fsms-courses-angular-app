import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/core-data/src/lib/auth/auth.service';

@Component({
  selector: 'lib-ui-login',
  templateUrl: './ui-login.component.html',
})
export class UiLoginComponent implements OnInit {
  userLogin = { email: '', password: '' };


  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    // Store the token
    this.authService.setToken('you_are_logged_in');
    // Redirect to home
    this.router.navigate(['']);

    // If we really wanted to log in...
    // this.authService.login(email, password)
    //   .subscribe(result => {
    //     // Store the token
    //     this.authService.setToken(result['access_token']);
    //     // Redirect to home
    //     this.router.navigate(['']);
    //   });
  }
}
