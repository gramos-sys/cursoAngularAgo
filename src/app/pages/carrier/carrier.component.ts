import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  formCarrier: FormGroup
  carriers:any[] 



  constructor( private formBuilder:FormBuilder ) { 
    this.carriers = []

    this.formCarrier = this.formBuilder.group({
      name:['',[
        Validators.required,
        Validators.maxLength(20),
        Validators.min(4),
      ]],
      lastName:['',[
        Validators.required,
        Validators.maxLength(30),
        Validators.min(4),
      ]],
    })
  }

  ngOnInit(): void {

  }

  onSubmitArrow = () => {}

  onSubmit(){
    this.carriers.push(this.formCarrier.getRawValue())
    console.log(this.formCarrier.getRawValue())
  }
}
