import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string = '';
  count: number = 0;
  constructor() { }

  // @ContentChild('hello') div: ElementRef
  @ContentChildren ('hello') div : QueryList <ElementRef>
  @ViewChild ('ParentComponent') ParentComponent : ParentComponent

  incrisebyone() {
    this.count = this.count +1;
    this.message = "count :" + this.count
  }
  decreasebyone() {
    this.count = this.count - 1;
    this.message = "count :" + this.count
  }

  ngOnInit(): void {
  }

  alertforparent() {
    alert("this is from child")
  }

  forcontentchild() {
    // alert(this.div.nativeElement.innerHTML)
    this.div.forEach
  }
  
  test(){
    this.ParentComponent.test1();
  }

}
