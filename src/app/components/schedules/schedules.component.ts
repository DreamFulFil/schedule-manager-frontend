import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Schedule } from 'src/app/interface/schedule';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'app-schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

    tasks: Schedule[] = [];
    displayedColumns: string[] = ['actions', 'no', 'expr', 'enabled', 'params'];

    constructor(
        private http: HttpClient,
        public taskDialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.loadTasks();
    }

    loadTasks() : void {
        this.http
            .get<Schedule[]>('http://localhost:20000/task/george_chou')
            .subscribe(response => {
                this.tasks = response;
        });
    }

    addTask(): void {
        this.taskDialog.open(TaskDialogComponent, {
            data: {

            }
        });
    }

}
