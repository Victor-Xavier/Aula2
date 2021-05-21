import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasNgifComponent } from './diretivas/diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgforComponent } from './diretivas/diretivas-ngfor/diretivas-ngfor.component';
import { DiretivasNgswitchComponent } from './diretivas/diretivas-ngswitch/diretivas-ngswitch.component';

const routes: Routes = [
  {path:'ngif', component:DiretivasNgifComponent},
  {path:'ngfor', component:DiretivasNgforComponent},
  {path:'ngswitch', component:DiretivasNgswitchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
