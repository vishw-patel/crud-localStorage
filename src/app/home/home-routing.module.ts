import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component/parent/parent.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:"" , component:HomeComponent
  },
  {
    path : "parent" , component : ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
