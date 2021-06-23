import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  selectedID: any
  myreactiveForm: FormGroup;
  genders = [{ id: '1', value: 'Male' }, { id: '2', value: 'Female' }];
  temp :any
  tempUdata:any
  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute) {
      debugger;

    // this.route.params.subscribe(data => {
    //   debugger;
    //   console.log("============")
    //   console.log(data);
    //   this.selectedID = data.id;
    // })

    // debugger; 
    // let id = parseInt(this.route.snapshot.paramMap.get('userid'))
    // this.selectedID = id;
    let id = parseInt(this.route.snapshot.params.id)
    //let id = this.route.params
    
    console.log(id)
    this.selectedID = id;
    this.initialzeForm();
  }

  initialzeForm() {
    
        this.myreactiveForm = this.fb.group({
      'id': new FormControl(),
      'username': new FormControl('', [Validators.required]),
      'email': new FormControl(),
      'courses': new FormControl(),
    })
     
    
    const formvalue = {
      'username': '',
      'email': '',
      'courses':''
    }
    
    console.log( 'this is selected id '+this.selectedID)
    // this.myreactiveForm.setValue(formvalue);
    
     if (this.selectedID > 0 ) {
      this.temp = JSON.parse(localStorage.getItem("tempUdata"))
      this.tempUdata = {
        'username': this.temp.username,
        'email': this.temp.email,
        'courses': this.temp.courses
      }
      console.log("greater than zero") 
      this.myreactiveForm.patchValue(this.tempUdata);
            
    } else if (this.selectedID != undefined) { 
      this.myreactiveForm.patchValue(formvalue);
    }
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.selectedID = null
    console.log("ondestroy  " + this.selectedID)
    localStorage.removeItem("tempUdata")
  }
  max = 0
  onSubmit() {

    this.router.navigate(['/users']);
    let users: any = [];
    
    if (JSON.parse(localStorage.getItem("key")) == null) {
      this.myreactiveForm.value["id"] = 1;
      users.push(this.myreactiveForm.value);
      localStorage.setItem("key", JSON.stringify(users));
    } else if (JSON.parse(localStorage.getItem("key")) != null) {
      if (this.selectedID > 0) {
        users = JSON.parse(localStorage.getItem("key"));
        for (let i = 0; i < users.length; i++) {
          if (users[i].id == this.selectedID) {
            console.log("matched" + JSON.stringify(users[i]));
            this.myreactiveForm.value["id"] = users[i].id
            console.log("and this" + " " + JSON.stringify(this.myreactiveForm.value))
            users[i] = this.myreactiveForm.value
            localStorage.setItem("key", JSON.stringify(users));
          }
        }
      } else {
        users = JSON.parse(localStorage.getItem("key"));
        // this.myreactiveForm.value["id"] += 1;
        for (let i = 0; i < users.length; i++) {
          if (users[i].id > this.max) { this.max = users[i].id }
        }
        this.myreactiveForm.value["id"] = ++this.max;
        users.push(this.myreactiveForm.value);
        localStorage.setItem("key", JSON.stringify(users));
      }
    }
    // } else {
    //   users = JSON.parse(localStorage.getItem("key"));
    //   for (let i = 0; i < users.length; i++) {
    //     if (users[i].id == this.selectedID) {
    //       console.log("matched" + JSON.stringify(users[i]));
    //       debugger;
    //       this.myreactiveForm.value["id"] = users[i].id
    //       console.log("and this" + " " + JSON.stringify(this.myreactiveForm.value))
    //       users[i] = this.myreactiveForm.value
    //       localStorage.setItem("key", JSON.stringify(users));

    //     }
    //   }
    // }


  }
  addUser() {

  }
}

