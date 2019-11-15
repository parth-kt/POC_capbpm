import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChecklistComponent} from './component/checklist/checklist.component';

const routes: Routes = [
  {
    path: '',
    component: ChecklistComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
