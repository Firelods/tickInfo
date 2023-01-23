import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): any {
    return this.http.get('https://firelods-silver-parakeet-vgq9qrxq4gj3w96v-8081.preview.app.github.dev/api/event/getAll');
  }
}
