import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string;
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api';
    this.headers = new HttpHeaders({
      'Authorization': 'Basic',
      'Content-Type': 'application/json',
    });
  }

  findAll<T>(namespace): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + namespace, {
      headers: this.headers
    });
  }

  findByNo<T>(namespace, no): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + namespace + '/' + no, {
      headers: this.headers
    });
  }

  deleteByNo(namespace, no): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + namespace + '/' + no, {
      headers: this.headers
    });
  }

  putByNo<T>(namespace, no, model): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + namespace + '/' + no, model, {
      headers: this.headers
    });
  }
  
  postByNo<T>(namespace, model): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + namespace, model, {
      headers: this.headers
    });
  }

  handleError() {
    return throwError('WRONG_CREDENTIALS');
  }

  post<T>(namespace, model, user: User = null): Observable<T> {

    if (user) {
      this.headers = this.headers.set('Authorization', 'Basic ' + btoa(user.name + ':' + user.password));
    }
	
	let headers = this.headers;
    
    return this.httpClient.post<T>(this.baseUrl + namespace, model, { headers })
      .pipe(catchError(this.handleError));
  }
}
