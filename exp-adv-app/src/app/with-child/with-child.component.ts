import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AChildComponent } from './a-child/a-child.component';

@Component({
  selector: 'app-with-child',
  templateUrl: './with-child.component.html',
  styleUrls: ['./with-child.component.scss']
})
export class WithChildComponent implements OnInit {

  message:string="";
  messageV2:string="";

  @ViewChild(AChildComponent) 
  first_achild: AChildComponent;

  @ViewChild('c2', { static: true })
  achild_c2: AChildComponent;

  @ViewChildren(AChildComponent)
  allchilds: QueryList<AChildComponent>;

  @ViewChildren('p', { read: ElementRef }) pList: QueryList<ElementRef>;
  @ViewChild('p1', { read: ElementRef }) p1 : ElementRef;

  ngAfterViewInit() {
    // call method .sayHello() of child sub component
    let msgChild1= this.first_achild?this.first_achild.sayHello():"";

    let msgChild2= this.achild_c2?this.achild_c2.sayHello():"";
    let allMsg =  msgChild1 + " " + msgChild2;

    let allMsgV2 = "";
    for(let c of this.allchilds){
      allMsgV2 = allMsgV2+" " + c.sayHello();
    }

    for(let p of this.pList){
      allMsgV2 = allMsgV2+" " + p.nativeElement.innerText;
    }

    //this.message= allMsg;//-->ExpressionChangedAfterItHasBeenCheckedError"
    setTimeout(()=> {
      this.message=allMsg;
      this.messageV2=allMsgV2;
    }, 0);
    console.log(allMsg); 
    console.log("in p1:" + this.p1.nativeElement.innerHTML);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
