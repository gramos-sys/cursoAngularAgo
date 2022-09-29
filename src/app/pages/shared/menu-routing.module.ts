import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component:MenuComponent,
    children:[
      {
        path: 'carrier', 
        loadChildren: () => import('../carrier/carrier.module').then(m => m.CarrierModule)
     },
      {
        path: 'user', 
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
     },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
