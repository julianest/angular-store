//Se crea asi: ng g p domains/shared/pipes/reverse
//los pipes son para transformar informacion.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
