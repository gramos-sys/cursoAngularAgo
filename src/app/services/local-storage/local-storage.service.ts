import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  typeEnviroment='';
  constructor() { 
    if(environment.production){
      this.typeEnviroment='production';
    }
  }

  setUserSession(json:User):void{
    const encrypt = this.encrypt(JSON.stringify(json));
    localStorage.setItem(`${this.typeEnviroment}-u-angularCurso`,encrypt);
  }
  
  getUserSession():any{
    const storage= localStorage.getItem(`${this.typeEnviroment}-u-angularCurso`);
    let user=null;
    if(storage){
      const descrypt=this.decrypt(storage);
      user=new User(descrypt);
    }
    return storage ? user : null;
  }

  removeUserSession():void{
    localStorage.removeItem(`${this.typeEnviroment}-u-angularCurso`);
  }

  setMode(mode:string){
    localStorage.setItem(`${this.typeEnviroment}-m-angularCurso`,mode);
  }

  getMode():string{
    return localStorage.getItem(`${this.typeEnviroment}-m-angularCurso`)as string;
  }

  removeModeSession():void{
    localStorage.removeItem(`${this.typeEnviroment}-m-angularCurso`);
  }

  clear(){
    localStorage.clear();
  }

  encrypt(value:any){
    const encrypt = CryptoJS.AES.encrypt(value,'encriptado').toString();
    return encrypt;
  }

  decrypt(value:any){
    var bytes = CryptoJS.AES.decrypt(value,'encriptado');
    var decrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypt;
  }

}
