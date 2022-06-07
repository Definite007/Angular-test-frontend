import { Component, Input, OnInit } from '@angular/core';
import { EmpService } from "src/app/emp.service";

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:EmpService) { }

  @Input() emp:any;
  EmployeeId!:number
  EmployeeName!: string
  DepartmentName!:string
  DateOfJoining!:string

  DepartmentsList = ['IT','BPM','Support','ETRX','CS']

  ngOnInit(): void {
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                DepartmentName:this.DepartmentName,
                DateOfJoining:this.DateOfJoining};
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.emp.EmployeeId,
                EmployeeName:this.EmployeeName,
                DepartmentName:this.DepartmentName,
                DateOfJoining:this.DateOfJoining};
    this.service.updateEmp(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
