import { Component, Input, Output , EventEmitter, OnInit , OnChanges , AfterContentInit , AfterViewInit, SimpleChanges } from '@angular/core';
import { MyData } from '../../common/data/my-data';

@Component({
  selector: 'basic-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit , OnChanges {
	
  //NB: @Input avec () meme si vide	
	
  @Input() //synchronized value (new instance in child on write : may become not synchronized)
  public compteur : number = 0; //primitive immutable value(new number instance on write)
  
  @Input() //synchronized value (new instance in child on write : may become not synchronized)
  public message : string ="#"; //primitive immutable value(new string instance on write)
  
  @Input() //synchronized reference (same instance in child on write : always synchronized)
  public donnees : MyData = new MyData(0,"#"); //mutable object (shared instance on write)
  
  @Output()
  public messageEvent : EventEmitter<{value:string}> = new EventEmitter<{value:string}>();
  
  @Output()
  public messageChange : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }
  
  public riseMessageEvent(){
      this.messageChange.emit(this.message); //.emit() or .next()
	  this.messageEvent.emit({value:this.message}); //.emit() or .next()
  }
  
  public detailString():string{ return " in MyChildComponent :" + this.compteur + " "+ this.message 
        + " ("+this.donnees.num + "," + this.donnees.label + ")";
  }

  ngOnInit() {
	  console.log("myChild - ngOnInit" + this.detailString());
  }
  
  ngOnChanges(changes: SimpleChanges){
  
    console.log("myChild - ngOnChanges" + this.detailString()
               + "changes=" + JSON.stringify(changes));
  }

}
