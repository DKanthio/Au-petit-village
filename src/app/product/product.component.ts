import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam !== null) {
      this.productsService.getProductById(parseInt(productIdParam)).then((resp)=>{
        this.product= resp;
      })
    }
  }
}