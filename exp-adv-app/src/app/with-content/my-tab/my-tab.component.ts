import { Component, OnInit, Input, AfterContentInit, ContentChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.scss']
})
export class MyTabComponent implements OnInit, AfterContentInit {

  @Input() title:string="defaultTabTitle";

  @Input() selected:boolean=false;

  @Output()
  public selectionChange : EventEmitter<{value:MyTabComponent}> = new EventEmitter<{value:MyTabComponent}>();

  @ContentChild("tabContent") 
  contentElementRef: ElementRef ; // refer to elt with #tab_content

  onClick(){
      this.selected=!this.selected;
      if(this.selected)
          this.selectionChange.emit({value:this});
  }

  constructor() { }
  ngAfterContentInit(): void {
     console.log(this.contentElementRef.nativeElement.innerText)
  }

  public tabContentAsString(){
    if(this.contentElementRef==undefined) 
       return "";
    else 
      return this.contentElementRef.nativeElement.innerText
  }

  ngOnInit(): void {
  }

}
