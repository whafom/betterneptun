import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export type User = {
  name: string,
  password: string,
};

export type User2 = {
  email: string,
  password: string,
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  signIn(user: User): Observable<User> {
    return this.apiService.post<User>('/user/sign-in', user, user);
  }
  
  findByusereNo(): Observable<User2> {
    return this.apiService.findByNo<User2>('/user', '');
  }
  
  deleteByconsultationNo(): Observable<void> {
    return this.apiService.deleteByNo('/user', '');
  }

  save(user: User2): Observable<User2> {
    return this.apiService.putByNo('/user', '', user);
 }
 
}
