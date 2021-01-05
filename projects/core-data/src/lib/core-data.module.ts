import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'projects/material/src/public-api';
import { AuthService } from './auth/auth.service';

@NgModule({
  providers: [AuthService],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports:[CommonModule]
})
export class CoreDataModule {}
