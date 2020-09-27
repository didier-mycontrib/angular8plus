import { Component, OnInit , OnChanges  } from '@angular/core';
import { MyData } from '../../common/data/my-data';


@Component({
  selector: 'basic-in-out-life-cycle',
  templateUrl: './in-out-life-cycle.component.html',
  styleUrls: ['./in-out-life-cycle.component.css']
})
export class InOutLifeCycleComponent implements OnInit , OnChanges {
	
  public counter :number = 1;
  public msg :string ="msg";  
  public data : MyData = new MyData(1,"label");

  constructor() { }

  ngOnInit() {
	  console.log("ngOnInit()" + this.detailString());
  }
  
  ngOnChanges() {
	  console.log("ngOnChanges()" + this.detailString());
  }
  
  onMessageEvent(evt: any){
	  console.log("onMessageEvent , evt.value="+evt.value);
	  this.msg = evt.value;
  }
  
  private detailString():string{ return " in InOutLifeCycleComponent :" + this.counter + " "+ this.msg 
        + " ("+this.data.num + "," + this.data.label + ")";
  }

}
