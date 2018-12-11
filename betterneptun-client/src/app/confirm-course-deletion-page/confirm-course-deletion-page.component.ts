import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService, Course } from '../courses.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-course-deletion-page',
  templateUrl: './confirm-course-deletion-page.component.html',
  styleUrls: ['./confirm-course-deletion-page.component.css']
})
export class ConfirmCourseDeletionPageComponent implements OnInit {

  private course: Observable<Course>;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.course = this.activatedRoute.paramMap
      .pipe(mergeMap(paramMap =>
        this.coursesService.findBycourseNo(paramMap.get('courseNo'))));
  }

  confirm(courseNo) {
    const subscription = this.coursesService.deleteBycourseNo(courseNo)
      .subscribe(() =>
        this.router.navigateByUrl('/home').then(() =>
          subscription.unsubscribe()));
  }

}
