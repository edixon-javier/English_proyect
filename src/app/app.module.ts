import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnglishComponent } from './components/english/english.component';
import { CourseA1FirstComponent } from './components/A1/course-a1-first/course-a1-first.component';
import { CourseA1SecondComponent } from './components/A1/course-a1-second/course-a1-second.component';
import { EnglishA1Component } from './components/A1/english-a1/english-a1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    EnglishComponent,
    CourseA1FirstComponent,
    CourseA1SecondComponent,
    EnglishA1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
