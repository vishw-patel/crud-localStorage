import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { ManageUserComponent } from './manage-user.component';



@NgModule({
  declarations: [
     ManageUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManageUserRoutingModule
  ],
  providers:[UserServiceService]
})
export class ManageUserModule { }
