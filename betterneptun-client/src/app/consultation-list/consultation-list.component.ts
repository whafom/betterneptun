import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.css']
})
export class ConsultationListComponent{

  private consultations : Observable<any>;

  constructor(private consultationsService: ConsultationsService) { }

  ngOnInit() {
    this.consultations = this.consultationsService.findAll();
  }

}
