import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHightlight]'
})
export class RendererHightlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green')
      
  }

}
