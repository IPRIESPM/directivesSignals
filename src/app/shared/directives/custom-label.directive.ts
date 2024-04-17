import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  // private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private htmlElement?: HTMLElement;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessages();
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

  setErrorMessages(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.textContent = 'No hay errores';
      return;
    }
    const errors = Object.keys(this._errors);
    this.htmlElement.textContent = errors.join(', ');

    if (errors.includes('required')) {
      this.htmlElement.textContent = 'Campo requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      const message = `El mínimo de caracteres es ${min}, actualmente tienes ${current}`;
      this.htmlElement.textContent = message;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.textContent = 'No tiene formato de email';
    }
  }
}
