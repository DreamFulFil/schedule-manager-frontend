import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  tasks = [
    {no: '1', cronExpression: 'a', enabled: 'true',  taskParamters: '{}'},
    {no: '2', cronExpression: 'a', enabled: 'false', taskParamters: '{}'},
    {no: '3', cronExpression: 'a', enabled: 'true',  taskParamters: '{}'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
