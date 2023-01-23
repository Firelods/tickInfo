import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(username :string, password:string){
    return this.http.post('https://firelods-silver-parakeet-vgq9qrxq4gj3w96v-8081.preview.app.github.dev/api/auth/signin', {username:username, password:password});
  }
}
