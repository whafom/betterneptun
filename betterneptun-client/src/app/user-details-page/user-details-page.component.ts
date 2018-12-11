import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user.service';
import { User2 } from './user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent{

  private user : Observable<User2>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.findByusereNo;
  }

}
