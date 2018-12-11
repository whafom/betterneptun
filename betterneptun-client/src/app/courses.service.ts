import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type Course = {
  courseNo: number,
  name: string,
  room: string,
  timeDay: string,
  timeHour: string,
  maxSpace: number,
  type: string,
};

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private apiService: ApiService) { }

  findAll(): Observable<Course[]> {
    return this.apiService.findAll<Course[]>('/course');
  }

  findBycourseNo(courseNo): Observable<Course> {
    return this.apiService.findByNo<Course>('/course', courseNo);
  }

  deleteBycourseNo(courseNo): Observable<void> {
    return this.apiService.deleteByNo('/course', courseNo);
  }

  save(courseNo, course): Observable<Course> {
    return this.apiService.putByNo('/course', courseNo, course);
  }
}
