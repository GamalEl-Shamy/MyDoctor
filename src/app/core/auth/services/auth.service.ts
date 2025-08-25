import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  registerForm(data: Object): Observable<any> {
    return this.httpClient.post('http://localhost:5006/api/users', data)
  }

  // loginForm(data:Object):Observable<any>{
  //   return this.httpClient.post('localhost:5006/api/users', data)
  // }
}
