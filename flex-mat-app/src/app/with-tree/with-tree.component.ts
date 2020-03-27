import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { GeoDataNode } from '../common/data/country';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { GeoService } from '../common/service/geo.service';

@Component({
  selector: 'app-with-tree',
  templateUrl: './with-tree.component.html',
  styleUrls: ['./with-tree.component.scss']
})
export class WithTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<GeoDataNode>(node => node.children());
  dataSource = new MatTreeNestedDataSource<GeoDataNode>();

  constructor(private geoService : GeoService) {
  }

  
  ngOnInit() {
    this.geoService.getContinents().subscribe(
      (continents)=>{this.dataSource.data = continents}
    );
  }

  hasChild = (_: number, node: GeoDataNode) => !!node.children() && node.children().length > 0;

  


}
