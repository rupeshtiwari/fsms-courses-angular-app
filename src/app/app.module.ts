import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from 'projects/core-data/src/public-api';
import { MaterialModule } from 'projects/material/src/public-api';
import { UiLoginModule } from 'projects/ui-login/src/public-api';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreDataModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
