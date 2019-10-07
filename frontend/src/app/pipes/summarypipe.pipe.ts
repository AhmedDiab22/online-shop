import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarypipe'
})
export class SummarypipePipe implements PipeTransform {

  transform(value: string , limit:number): any {
    
    if(!value) return null;
    let actualLimit = (limit) ? limit : 20
    return value.substr(0 , actualLimit) + ' ....'

  }

}
