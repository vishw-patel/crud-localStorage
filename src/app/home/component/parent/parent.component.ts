import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childCompObj: ChildComponent
  @ViewChildren('trForviewchidren') trForviewchidren: QueryList<ElementRef>
  constructor() { }
  count: any
  countplusone() {
    this.count = this.childCompObj.incrisebyone()
  }
  countminusone() {
    this.count = this.childCompObj.decreasebyone()
    console.log(typeof (this.count))
  }
  ngOnInit(): void {
  }

  alertme() {
    this.trForviewchidren.forEach((item) =>{
    alert(item.nativeElement.value) })
  }

  test1(){
    alert("hello")
  }
}
