import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prodId : string = null;

  constructor(route: ActivatedRoute) { 
    this.prodId = route.snapshot.params['id'];// .../prod-details/:id
  }

  ngOnInit() {
  }

}
