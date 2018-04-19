import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: any, args?: any): any {
    let result = '';
    for (const key in address) {
      if (address[key].Name) {
        result = result + address[key].Name;
      }
    }
    return result;
  }

}
