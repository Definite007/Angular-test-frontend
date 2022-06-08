import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  authenticated= false;

  constructor() { }

  

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = true;
      }
    );
  }


}
