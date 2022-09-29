import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IuserData } from '../../../interfaces/iuser';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

 // sendUser(user:IuserData){
   // this.semdUserFromchild.emit(user);
 // }

  @Input() dataUser!: IuserData[];
  @Output() sendUserFromChild:EventEmitter<IuserData> = new EventEmitter<IuserData>();
  user!: IuserData;

  userColumn: string [] = ['id','name','send'];
    
  constructor() { }

  ngOnInit(): void { }

  sendUser = (user: IuserData) => {
    console.log(user);
    this.sendUserFromChild.emit(user);
  }

}
