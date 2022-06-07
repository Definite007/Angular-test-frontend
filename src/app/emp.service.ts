import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpService {
readonly APIUrl = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  getEmpList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'employee');
  }

  addEmployee(val: any){
    return this.http.post(this.APIUrl + 'employee', val);
  }

  updateEmp(val: any){
    return this.http.put(this.APIUrl + 'employee', val);
  }

  deleteEmp(val: any){
    return this.http.delete<any[]>(this.APIUrl + 'employee/'+val);
  }
}
