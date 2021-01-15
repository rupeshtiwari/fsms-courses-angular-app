import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreDataModule } from 'projects/core-data/src/public-api';
import { MaterialModule } from 'projects/material/src/public-api';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, CoreDataModule],
  declarations: [CoursesComponent, CourseListComponent, CourseDetailsComponent],

  exports: [CoursesComponent, CourseListComponent, CourseDetailsComponent],
})
export class CoursesModule {}
