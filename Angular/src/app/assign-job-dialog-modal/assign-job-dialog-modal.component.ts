import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Employee from '../shared/models/employee';

@Component({
  selector: 'app-assign-job-dialog-modal',
  templateUrl: './assign-job-dialog-modal.component.html',
  styleUrls: ['./assign-job-dialog-modal.component.css']
})
export class AssignJobDialogModalComponent implements OnInit {

  employees: Array<Employee>;

  dialogValue: string;
  fromDialog: string;

  constructor(
      public dialogRef: MatDialogRef<AssignJobDialogModalComponent>,

      @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    console.log('data', data);
	this.employees = data.pageValue;
  }

  ngOnInit() {
  }

  closeDialog() {
	      this.dialogRef.close({ event: 'close', data: this.fromDialog });

  }
  saveDialog(){
	  
	this.dialogRef.close({ event: 'close', data: this.fromDialog });
	      console.log('test');

  }

}