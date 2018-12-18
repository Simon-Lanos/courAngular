import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filtered = [];

    if(!args || !value) return value;

    let hasProperty = false;
    for(let prop in args) {
      if(args[prop] && args[prop] != "") {
        hasProperty = true;
      }
    }
    if(!hasProperty) return value;

    for(let el of value) {
      for(let property in el) {
        let field = el[property] + "";
        if(typeof args == 'string' && field.indexOf(args) != -1) {
          filtered.push(el);
          break;
        }

        if(typeof args === 'object'
            && typeof(args[property]) != 'undefined'
            && field.indexOf(args[property]) != -1
            ) {
          filtered.push(el);
          break;
        }
      }

    }

    return filtered;
  }

}
