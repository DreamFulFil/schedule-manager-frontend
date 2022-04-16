import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit(): void {

    }

    addTask() {
        console.log('Add Task clicked');
    }

}
