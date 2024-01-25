import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().then((resp)=>{
      this.products= resp;
    })
  }

  sortProducts(order: 'asc' | 'desc'): void {
    this.sortOrder = order;  
    this.products = this.productService.sortProductsByPrice(this.products, order);
  }

  get filteredProducts(): any[] {
    return this.productService.filterProductsByName(this.products, this.searchTerm);
  }
}