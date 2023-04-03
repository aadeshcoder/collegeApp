import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acronym'
})
export class AcronymPipe implements PipeTransform {

  transform(value: string): string { //TODO: check null | undefined
    if(!value) {
      return value;
    }
    const words = value.split(' ');
    if (words.length === 1) { return value };
    const acronymWord = words.map((item, ind) => item.charAt(0)).join('');
    return acronymWord.toLocaleUpperCase();
  }
}
