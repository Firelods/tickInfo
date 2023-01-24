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
    this.http.post<any>(this.requestService.url + 'api/event/participate', { email, surname, name, bde, idEvent }).subscribe((data) => {
      if (data[0].id != null) {
        alert("Etudiant ajouté avec succès");
      }
    });
  }
}
