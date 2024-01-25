import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: 'asc' | 'desc'): any[] {
    return products.slice().sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}