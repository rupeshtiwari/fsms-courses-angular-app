import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'projects/material/src/public-api';
import { UiToolbarComponent } from './ui-toolbar.component';

@NgModule({
  declarations: [UiToolbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [UiToolbarComponent],
})
export class UiToolbarModule {}
