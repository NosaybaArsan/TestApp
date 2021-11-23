import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Routes, RouterModule } from '@angular/router';
import EmployeeService from './shared/api/employee.service';
import { AssignJobDialogModalComponent } from './assign-job-dialog-modal/assign-job-dialog-modal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AssignJobDialogModalComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	MaterialModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
