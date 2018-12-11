import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent{

  @Input() private courses: Observable<Course[]>;
}
