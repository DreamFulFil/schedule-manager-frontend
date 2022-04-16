import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './components/schedules/schedules.component';

const routes: Routes = [
  { path: '', component: SchedulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
