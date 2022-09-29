import { Injectable } from '@angular/core';
import { Iuser, IuserData } from '../interfaces/iuser';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user!:Iuser

  constructor(private http:HttpClient) { }

  setUser( user:Iuser ){
    return this.user = user
  }
  
  getUser(){
    return this.user
  }

  getUsers$(page:string,size:string):Observable<any>{

    page = (+page + 1).toString()

    const params = new HttpParams()
    .set('page', page)
    .set('per_page', size);

    return this.http.get<any>(`https://reqres.in/api/users`,{ params })
  }

  setUserSession(user:Iuser){
    if(user){
      this.user=user;
    }
  }

  getUserSession():Iuser{
    return this.user;
  }

}
