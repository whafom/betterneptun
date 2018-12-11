import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Course } from '../courses.service';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {

  private course: Course;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService, private router: Router) {
    this.course = {
		courseNo: 0,
		name: '',
		room: '',
		timeDay: '',
		timeHour: '',
		maxSpace: 0,
		type: ''
    };
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap
      .pipe(mergeMap(paramMap =>
        this.coursesService.findBycourseNo(paramMap.get('courseNo'))))
      .subscribe(course => {
        this.course = {
	    courseNo: course.courseNo,
		name: course.name,
		room: course.room,
		timeDay: course.timeDay,
		timeHour: course.timeHour,
		maxSpace: course.maxSpace,
		type: course.type  
        };
      })
  }

  handleSubmit(form) {
    if (form.valid) {
      this.subscription.unsubscribe();

      this.activatedRoute.paramMap.subscribe(paramMap => {
        const course = {
		name: this.course.name,
		room: this.course.room,
		timeDay: this.course.timeDay,
		timeHour: this.course.timeHour,
		maxSpace: this.course.maxSpace,
		type: this.course.type  
        };
        
        const subscription = this.coursesService.save(paramMap.get('courseNo'), course)
          .subscribe(() =>
            this.router.navigateByUrl('/home').then(() =>
              subscription.unsubscribe()));
      });
    }
  }

}
