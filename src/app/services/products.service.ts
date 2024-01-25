import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  async getProducts() : Promise<any[]> {
    var products = await fetch("http://localhost:3000/products");    
    return products.json();
  }

 sortProductsByPrice(products: any[], order: 'asc' | 'desc'){
    return products.sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

  filterProductsByName(products: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return products;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(lowerCaseSearchTerm));
  }

  async getProductById(id : number) : Promise<any[]> {
    let product = await fetch(`http://localhost:3000/products/${id}`);    
    return product.json();
  }
}