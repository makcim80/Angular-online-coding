import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCardBg]',
})
export class CardBgDirective implements OnInit {
  @Input('appCardBg') gender!: string;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    if (this.gender === 'male') {
      this.renderer.addClass(this.element.nativeElement, 'blue');
    } else {
      this.renderer.addClass(this.element.nativeElement, 'pink');
    }
  }
}
