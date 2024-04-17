import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  // private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private htmlElement?: HTMLElement;
  private _color: string = 'red';

  @Input()
  set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef.nativeElement;
    this.htmlElement.textContent = 'Custom Label';
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement.style.color = this._color;
  }
}
