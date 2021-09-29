import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {

  categories = [ "divers" , "CD" , "DVD" , "livres" ];
  selectedCategory = this.categories[0];//by default
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigateByCategory(category:string):void {
    this.selectedCategory=category;
    let link = ['/ngr-browse-products/prodList', this.selectedCategory];
    console.log("selectedCategorie="+this.selectedCategory);
    this.router.navigate(link);
    }

}
