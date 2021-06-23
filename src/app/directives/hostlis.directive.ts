import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlis]'
})
export class HostlisDirective implements OnInit {
  @Input('appHostlis') defaultColor:string = "grey"
  @Input() heighlightColor : string = "yellow"

  constructor(private element: ElementRef, private renderer: Renderer2) { }
@HostBinding('style.background-color') color: string
  ngOnInit() {

   }
  // @HostListener('mouseenter') onmouseEnter (event: Event) {
  //   this.renderer.setStyle(
  //     this.element.nativeElement,
  //     'background-color',
  //     'yellow')
  // }

  @HostListener('mouseenter') onmouseEnter (event: Event) {
    this.color = this.heighlightColor
  }

  @HostListener('mouseleave') onmouseleave (event: Event) {
    this.color = this.defaultColor
  }
  @HostListener('click') onclick(event: Event) {
    this.color = 'pink'
  }

}