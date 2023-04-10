import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: string, ...keywords: string[]) { 
    if (
      !value || value.length === 0 || !searchText || !keywords || keywords.length === 0
    ) {
      return value;
    }

    searchText = searchText.toLowerCase();
    const result:any = [];

    for (let item of value) {
      for(let keyword of keywords) {

        if (typeof item[keyword] === 'string' && item[keyword]?.toLocaleLowerCase().includes(searchText)) {
          result.push(item);
        }

        if (typeof item[keyword] === 'number' && item[keyword] == searchText) {
          result.push(item);
        }

      }
    }

    const filteredResult = result.filter((value:any, index:number) => {
      return result.indexOf(value) === index;
    })

    return filteredResult;
  }

}
