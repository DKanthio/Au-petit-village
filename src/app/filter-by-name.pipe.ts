import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return products;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(lowerCaseSearchTerm));
  }
}