import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  constructor(private snackbar: MatSnackBar) {}

  show(notification: string) {
    this.snackbar.open(notification, 'OK', { duration: 3000 });
  }
}
