import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'projects/material/src/public-api';
import { FormsModule } from '@angular/forms';
import { CoreDataModule } from 'projects/core-data/src/public-api';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseDetailsComponent],
  imports: [CommonModule, MaterialModule, FormsModule, CoreDataModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
