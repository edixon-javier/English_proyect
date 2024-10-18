import { Component } from '@angular/core';

@Component({
  selector: 'app-course-a1-first',
  templateUrl: './course-a1-first.component.html',
  styleUrls: ['./course-a1-first.component.css']
})
export class CourseA1FirstComponent {
  lessons = [
    'Personal Information in English',
    'Spelling Your Name in English',
    'Numbers in English',
    'Ask and Answer Your Age in English',
    'Occupations in English',
    'Days of the Week in English',
    'Use "is" or "are" in Descriptions',
    'Personal Introduction in English',
    'Describe People Using "his", "her", "their"',
    'Use "who" in Questions and Answers',
    'Make Descriptions Using "there is" and "there are"',
    'Introduce Yourself in English'
  ];

  selectedLesson: number = 0;

  selectLesson(index: number): void {
    this.selectedLesson = index;
  }

}
