import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './../display/display.component';
import { EditComponent } from './../edit/edit.component';
import { AddComponent } from './../add/add.component';

let routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'home', component: DisplayComponent},
  { path:'',pathMatch:'full', redirectTo:'/home'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
