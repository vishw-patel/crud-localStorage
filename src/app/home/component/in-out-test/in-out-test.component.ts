import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-in-out-test',
  templateUrl: './in-out-test.component.html',
  styleUrls: ['./in-out-test.component.css']
})
export class InOutTestComponent implements OnInit {

  @Input() loggedIn  : boolean ;

  @Output() newItemEvent = new EventEmitter();
  constructor() { }
 
  ngOnInit(): void {
    
  }
  callParenttestforoutput(){
   
      this.newItemEvent.emit();

    }
}
