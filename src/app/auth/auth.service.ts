import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponse } from './auth.interafce';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'; 
  
  token: string | null = null 
  refresh_tokem : string | null = null 
  http = inject(HttpClient); 
  cookieService= inject(CookieService); 


  get isAuth() {
    if(!this.token)
    {
      this.token = this.cookieService.get('token')
    }
    return !!this.token
  }
    login(payload: {username: string, password:string })
  {
    const fd = new FormData(); 
    
    fd.append('username', payload.username); 
    fd.append('password', payload.password); 
    return this.http.post<TokenResponse>(`${this.baseApiUrl}token`, 
      fd
    ).pipe(
      tap(val => {
        this.token = val.access_token
        this.refresh_tokem = val.refresh_token

        this.cookieService.set('token', this.token)
        this.cookieService.set('refresh_token', this.refresh_tokem)
      })
    )
  }
}
