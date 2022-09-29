import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLogin } from 'src/app/utils/userData';
import { UserService } from '../../../services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formlogin: FormGroup;
  userTest = userLogin

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private userService:UserService,
    private storageService:LocalStorageService
    ) {
    this.formlogin = this.formBuilder.group({
      // email: ['', [
      //   Validators.required,
      //   Validators.maxLength(30),
      //   Validators.minLength(3),
      //   //Validators.email
      // ]],
      userName: ['', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
        //Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]]
    })
   }

  ngOnInit(): void {
    if(this.storageService.getUserSession()){
      console.info('Local Storage Recuperado Exitosamente - Login',this.storageService.getUserSession);
      this.router.navigate(['/pages']);
    }
  }
  submit = () => {

    if(this.userTest.userName === this.formlogin.getRawValue().userName && this.userTest.password === this.formlogin.getRawValue().password)

    {
      this.userService.setUser(this.formlogin.getRawValue())
      this.userService.setUserSession(this.userTest);
      this.storageService.setUserSession(this.userService.getUserSession());
      console.info("Local Storage: ",this.storageService.getUserSession());
      this.router.navigate(['/pages']);
    }
    else
    console.log('Credenciales incorrectas');
  }

}
