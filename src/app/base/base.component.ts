import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  name:any=""
  password:any=""
  email:any=""
  constructor() { }

  ngOnInit(): void {
  }
  submit(data:any){
    console.log(data.value)
  }

}
