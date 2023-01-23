import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private requestService: RequestService) { }

  getEvents(): any {
    return this.http.get(this.requestService.url + 'api/event/getAll');
  }
}
