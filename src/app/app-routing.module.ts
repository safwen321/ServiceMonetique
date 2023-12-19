import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./data/data.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'data', component : DataComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
