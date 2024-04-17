import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  // private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private htmlElement?: HTMLElement;
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef.nativeElement;
    console.log(this.htmlElement);

    this.htmlElement.textContent = 'Custom Label';
  }
  ngOnInit(): void {
    console.log('CustomLabelDirective ngOnInit');
  }
}
