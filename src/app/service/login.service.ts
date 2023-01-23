import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { RequestService } from './request.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  constructor(private http: HttpClient, private router: Router, private requestService: RequestService) { }
  login(username: string, password: string) {
    this.http.post<{ accessToken: string }>(this.requestService.url + 'api/auth/signin', { email: username, password: password }).pipe().subscribe((data: { accessToken: string }) => {
      if (data.accessToken != null) {
        localStorage.setItem('token', data.accessToken);
        this.isLoggedIn = true;
        this.router.navigate(['/gestion'])
      }

    });

  }
  getUser(): any {
    //get user from token
    const token = localStorage.getItem('token');
    if (token == null) {
      this.router.navigate(['/login'])
      return {};

    }
    var user = jwtDecode(token);
    if (user == null) {
      this.router.navigate(['/login'])
      return {};
    }
    return user;
  }
}
