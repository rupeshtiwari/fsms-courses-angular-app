import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreDataModule } from 'projects/core-data/src/public-api';
import { MaterialModule } from 'projects/material/src/public-api';
import { UiLoginComponent } from './ui-login.component';

@NgModule({
  declarations: [UiLoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    RouterModule,
  ],
  exports: [UiLoginComponent],
  entryComponents: [UiLoginComponent],
})
export class UiLoginModule {}
