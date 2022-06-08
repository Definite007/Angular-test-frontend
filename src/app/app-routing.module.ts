import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from "./employee/employee.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login',component:LoginComponent },
  {path: 'register', component: RegisterComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'logout', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
