import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getUser() {
        return localStorage.getItem("key")
  }



}
