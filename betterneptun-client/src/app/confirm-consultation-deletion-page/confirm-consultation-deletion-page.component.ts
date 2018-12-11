import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationsService, Consultation } from '../consultations.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-consultation-deletion-page',
  templateUrl: './confirm-consultation-deletion-page.component.html',
  styleUrls: ['./confirm-consultation-deletion-page.component.css']
})
export class ConfirmConsultationDeletionPageComponent implements OnInit {

  private consultation: Observable<Consultation>;

  constructor(private activatedRoute: ActivatedRoute, private consultationsService: ConsultationsService, private router: Router) { }

  ngOnInit() {
    this.consultation = this.activatedRoute.paramMap
      .pipe(mergeMap(paramMap =>
        this.consultationsService.findByconsultationNo(paramMap.get('consultationNo'))));
  }

  confirm(consultationNo) {
    const subscription = this.consultationsService.deleteByconsultationNo(consultationNo)
      .subscribe(() =>
        this.router.navigateByUrl('/consultation').then(() =>
          subscription.unsubscribe()));
  }

}

