import { Component, OnInit } from '@angular/core';
import { ComputeService } from '../common/service/compute.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {

  price_excluded_of_tax:number;
  v_a_tax_rate_pct:number;
  price_inclusive_of_tax:number;

  constructor(private computeService: ComputeService) { }

  ngOnInit() {
  }

  onRefresh (evt : KeyboardEvent){
    this.price_inclusive_of_tax = Number(this.price_excluded_of_tax)
       + Number(this.computeService.vat(this.price_excluded_of_tax, 
                                         this.v_a_tax_rate_pct));
  }

}
