import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type Consultation = {
  consultationNo: number,
  name: string,
  room: string,
  timeDay: string,
  timeHour: string,
};

@Injectable({
  providedIn: 'root'
})
export class ConsultationsService {

  constructor(private apiService: ApiService) { }

  findAll(): Observable<Consultation[]> {
    return this.apiService.findAll<Consultation[]>('/consultation');
  }

  findByconsultationNo(consultationNo): Observable<Consultation> {
    return this.apiService.findByNo<Consultation>('/consultation', consultationNo);
  }

  deleteByconsultationNo(consultationNo): Observable<void> {
    return this.apiService.deleteByNo('/consultation', consultationNo);
  }

  save(consultationNo, consultation): Observable<Consultation> {
    return this.apiService.putByNo('/consultation', consultationNo, consultation);
  }
}