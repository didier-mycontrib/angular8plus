import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  myCarrouselDefs=[
    { image : "assets/images/emprunt.jpg" , text : "tva, emprunts" , path:"/ngr/basic" }, 
    { image: "assets/images/news.jpg" , text : "news" , path:"/ngr/news" },
    { image : "assets/images/achats.jpg", text : "achats"  , path:"/ngr/browse-products" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
