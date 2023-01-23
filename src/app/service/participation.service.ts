import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(private http: HttpClient, private loginService: LoginService, private requestService: RequestService) { }
  participate(email: string, surname: string, name: string, idEvent: string) {
    if (this.loginService.getUser() === null) {
      return;
    }
    var bde = this.loginService.getUser().bde;
    this.http.post(this.requestService.url + 'api/event/participate', { email, surname, name, bde, idEvent }).subscribe((data) => {
      console.log(data);
    });
  }
}
