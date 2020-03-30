import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment';
import { User }from '../Components/login/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiUrl=environment.Apiurl;

  constructor(private _http:HttpClient) 
  { 
    
  }

loginuser()
{
  return this._http.get<User[]>(this.ApiUrl);
}



}
