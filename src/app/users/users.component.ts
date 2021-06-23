import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  namesearch :string =''
  users: any;
  constructor(private router: Router) { }


  ngDoCheck() {
    this.users = JSON.parse(localStorage.getItem("key"))
    console.log( "ng do check "+this.users)
  }
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("key"))
  }
  updateUser(user) {
    console.log(user)
    localStorage.setItem("tempUdata", JSON.stringify(user))
    this.router.navigate(["./manage-user/" + user.id])
  }
  deleteUser(thisUser) {
    var tempUser = JSON.parse(localStorage.getItem("key"))
    tempUser.forEach((element, index) => {
      if (element.id == thisUser.id) tempUser.splice(index, 1);
      console.log("final" + JSON.stringify(tempUser))
      localStorage.setItem("key", JSON.stringify(tempUser))
    });
  }


}
