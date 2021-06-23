import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../appPipes/filter.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
