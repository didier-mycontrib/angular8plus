import { Component, OnInit } from '@angular/core';
import { changeDivSizeTrigger } from 'src/app/common/animation/changeDivSizeTrigger';
import { enterLeaveTrigger } from 'src/app/common/animation/enterLeaveTrigger';
import { fadeInOutTrigger } from 'src/app/common/animation/fadeInOutTrigger';

@Component({
  selector: 'app-with-animations',
  templateUrl: './with-animations.component.html',
  styleUrls: ['./with-animations.component.scss'],
  animations: [ changeDivSizeTrigger , enterLeaveTrigger, fadeInOutTrigger ]
})
export class WithAnimationsComponent implements OnInit {

  myToggleValue : boolean = false;
  ulOrTable : string ="ul";
  myList : string[] = [ "item1" , "item2"];
  lastItemNumber : number = 2;

  onAddItem(){
     this.lastItemNumber++;
     this.myList.push(`item${this.lastItemNumber}`);
  }

  onRemoveItem(){
    if(this.lastItemNumber>0){
      this.lastItemNumber--;
      this.myList.splice(this.lastItemNumber,1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
