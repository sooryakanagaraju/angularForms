import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseCardComponent} from './course-card/course-card.component';
import {COURSES, titles} from './db-data';
import {Course} from './models/course';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses = COURSES;
  angularCourse:Course = COURSES[0];
  rxjsCourse:Course = COURSES[1];
  ngrxCourse:Course = COURSES[2];

  onCourseSelected(course:Course) {
    console.log('this is the card selected in the app component', course);
  }
}
