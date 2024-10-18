import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnglishComponent } from './components/english/english.component';
import { CourseA1FirstComponent } from './components/A1/course-a1-first/course-a1-first.component';
import { EnglishA1Component } from './components/A1/english-a1/english-a1.component';
import { CourseA1SecondComponent } from './components/A1/course-a1-second/course-a1-second.component';

export const routes: Routes = [
  {
    path: 'English',
    component: EnglishComponent,
    title: 'English',
  },
  {
    path: 'englishA1',
    title: 'course A1 First',
    component: EnglishA1Component,
    children: [
      {
        path: 'courseA1First',
        component: CourseA1FirstComponent,
        title: 'courseA1First',
      },
      {
        path: 'couseA1Second',
        component: CourseA1SecondComponent,
        title: 'couseA1Second',
      },
    ],
  },
  { path: '', redirectTo: '/English', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
