import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetExamComponent } from './set-exam/set-exam.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes = [
  {
    path: '', 
    component: SetExamComponent
  }
   
];


@NgModule({
  declarations: [SetExamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  ,
    FormsModule
  ]
})
export class SetExamModule { }
