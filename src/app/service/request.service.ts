import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = isDevMode() ? 'http://localhost:8081/' : 'https://ticket-api.seinksansdoozebank.engineer/';
  constructor() { }
}
