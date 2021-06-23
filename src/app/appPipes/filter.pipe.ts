import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, serachUname: any): any {   

    return value.filter(
      function (search) {
      return search.username.toLowerCase().indexOf(serachUname.toLowerCase()) > -1
    });
  }

}
