import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLoggedIn : boolean = true
  power = 5;
  factor = 1;
  userForPipe :any = "vishw"
  public users: any
  a : boolean = false
  currentCustomer :any
  isavailable : boolean = false
  testPipe = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("username is received")
    },3000)
  })
  constructor(private _users: UserServiceService) { }

  testforoutput(){
        alert ("hello vishw")
  }
  ngOnInit(): void {
    this.users = JSON.parse(this._users.getUser());
    console.log(this.users)
    this.currentCustomer = {id :1 , name : "vishw" } 
  }
  public date = new Date()
  username :string = "welcome user";
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  object1: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  b = JSON.stringify(this.object1)
 
}
