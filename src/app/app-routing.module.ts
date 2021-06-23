import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageUserModule } from './manage-user/manage-user.module';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "users",
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  // {
  //   path: "manage-user",
  //   loadChildren: () => import('./manage-user/manage-user.module').then(m => m.ManageUserModule)
  // },
  {
    path:"manage-user/:id" , 
    loadChildren: () => import('./manage-user/manage-user.module').then(m => m.ManageUserModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
