import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class NotificationsService {
  constructor(private snackbar: MatSnackBar) {}

  emit(notification: string) {
    this.snackbar.open(notification, 'OK', { duration: 3000 });
  }
}
