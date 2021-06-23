import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive ({
    selector : 'highlighttext',
    
})
export class HighlightTextDirective implements  OnInit {
    constructor( private element : ElementRef ){
    }
    ngOnInit () {
        (<HTMLElement>(this.element.nativeElement)).style.backgroundColor = 'red';
        (this.element.nativeElement as HTMLElement).style.opacity = ".5"
    }
}