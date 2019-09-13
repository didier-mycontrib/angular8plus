import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/common/service/product.service';
import { Product } from 'src/app/common/data/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products  : Product[]= [];

  fetchProductsByCategorie() {
    this.productService.getProductsByCategoryObservable(this.categorie)
         .subscribe( (productList:Product[])=> { this.products = productList; },
                     (err)=>{console.log(err); } );
  }

  categorie : string =null;

  constructor(private productService: ProductService,private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.categorie = params['category']; 
        //.../prodList/:category
        this.fetchProductsByCategorie();
        }
        );
   }

  ngOnInit() {
  }

}
