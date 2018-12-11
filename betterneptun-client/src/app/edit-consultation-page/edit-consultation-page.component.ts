import { Component, OnInit } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Consultation } from '../consultations.service';

@Component({
  selector: 'app-edit-consultation-page',
  templateUrl: './edit-consultation-page.component.html',
  styleUrls: ['./edit-consultation-page.component.css']
})
export class EditConsultationPageComponent implements OnInit {

  private consultation: Consultation;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private consultationsService: ConsultationsService, private router: Router) {
    this.consultation = {
		consultationNo: 0,
		name: '',
		room: '',
		timeDay: '',
		timeHour: '',
    };
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap
      .pipe(mergeMap(paramMap =>
        this.consultationsService.findByconsultationNo(paramMap.get('consultationNo'))))
      .subscribe(consultation => {
        this.consultation = {
	    consultationNo: consultation.consultationNo,
		name: consultation.name,
		room: consultation.room,
		timeDay: consultation.timeDay,
		timeHour: consultation.timeHour,
        };
      })
  }

  handleSubmit(form) {
    if (form.valid) {
      this.subscription.unsubscribe();

      this.activatedRoute.paramMap.subscribe(paramMap => {
        const consultation = {
		name: this.consultation.name,
		room: this.consultation.room,
		timeDay: this.consultation.timeDay,
		timeHour: this.consultation.timeHour,
        };
        
        const subscription = this.consultationsService.save(paramMap.get('consultationNo'), consultation)
          .subscribe(() =>
            this.router.navigateByUrl('/consultation').then(() =>
              subscription.unsubscribe()));
      });
    }
  }

}
