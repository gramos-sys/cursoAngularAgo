import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../app/models/user';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user!:User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
      private router: Router,
      private userService:UserService,
      private storageService: LocalStorageService
      ) {}


  ngOnInit(): void {
    //this.userService.getUser() ? console.log(this.userService.getUser()) : console.log('Vacio')
    if (this.storageService.getUserSession() ){
      console.info('Local Storage Recuperado Exitosamente - Pages', this.storageService.getUserSession())
      this.user = this.storageService.getUserSession()
    }else{
      this.router.navigate(['/login']);
    }
  }

  logOut(){
    this.userService.setUserSession(new User());
    this.storageService.removeUserSession();
    this.storageService.removeModeSession();
    this.router.navigate(['/login']);
    console.info('Destruyendo Local Storage')
  }

}
