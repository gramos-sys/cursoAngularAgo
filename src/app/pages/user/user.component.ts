import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IuserData } from 'src/app/interfaces/iuser';
import { UserService } from '../../services/user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users:IuserData[];
  getU:Subscription = new Subscription();
  user!: IuserData;

  totalResgistros = 0;
  paginaActual = 0;
  totalPorPagina = 3;
  pageSizeOptions:number[] = [ 3, 5, 10, 20, 50];

  dataSource!:MatTableDataSource<IuserData> //MatTable
  @ViewChild(MatPaginator,{static:true}) paginador!:MatPaginator
  constructor(private userService:UserService) {
    this.users = []
    console.log('Contructor')
   }

  ngOnInit(): void {
    // console.log('onInit')
    this.getUsers()
  }

  paginar(event:PageEvent){
    this.paginaActual = event.pageIndex
    this.totalPorPagina = event.pageSize
    this.getUsers()
  }

  getUser(event: IuserData){
    this.user = event;
  }

  getUsers(){
   this.getU = this.userService.getUsers$(this.paginaActual.toString(),this.totalPorPagina.toString()).subscribe(
      {
        next:(value) => {
          this.users = value.data as IuserData[]
          this.totalResgistros = value.total as number
          this.dataSource = new MatTableDataSource<IuserData>(this.users)
        },
        error:(err) => {
          console.log(err)
        },
        complete:() => {
          console.log('compplete()')
        },
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Por aqui paso onDestroy')
    this.getU.unsubscribe()
  }
}
