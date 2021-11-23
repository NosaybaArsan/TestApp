import { Component, OnInit } from '@angular/core';
import EmployeeService from '../shared/api/employee.service';
import Employee from '../shared/models/employee';

import { MatDialog } from '@angular/material/dialog';
import { AssignJobDialogModalComponent } from '../assign-job-dialog-modal/assign-job-dialog-modal.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	

  employees: Array<Employee>;
  title = 'angular-material-tree-tutorial';

  dialogValue: string;
  sendValue: string;

  constructor(private employeeService: EmployeeService,    public dialog: MatDialog
) {
}

  ngOnInit() {
    this.employeeService.getAll().subscribe((data: any ) => {
      this.employees = data;
    });
  }
  
    openDialog(): void {
    const dialogRef = this.dialog.open(AssignJobDialogModalComponent, {
      width: '250px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: this.employees }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }
}