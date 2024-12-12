//Se crea asi: ng g d domains/shared/directives/highlight
//las directivas son para crear o hacer cambios en el dom de forma directa.

import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = "red";
  }
}
