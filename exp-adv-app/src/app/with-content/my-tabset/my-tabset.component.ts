import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { MyTabComponent } from '../my-tab/my-tab.component';

@Component({
  selector: 'app-my-tabset',
  templateUrl: './my-tabset.component.html',
  styleUrls: ['./my-tabset.component.scss']
})
export class MyTabsetComponent implements OnInit , AfterContentInit {

  selectedTabContent : string ="";

  @ContentChildren(MyTabComponent) 
  tabs: QueryList<MyTabComponent>

  onSelectionChange(newSelectedTab : MyTabComponent ){
    this.tabs.forEach(tab => { 
                               tab.selected=(tab==newSelectedTab);  
                              if(tab == newSelectedTab )
                                 this.selectedTabContent = newSelectedTab.tabContentAsString();
                              })
  }
 
 ngAfterContentInit() {
   let lastTab = this.tabs.last;
   this.tabs.forEach(tab => { console.log(tab.title); 
                              tab.selectionChange.subscribe(
                                  (evt)=>{ this.onSelectionChange(evt.value); }
                              );
                              tab.title=tab.title.toUpperCase();
                              tab.selected=(tab==lastTab);
                            })
    this.selectedTabContent = lastTab.tabContentAsString();
 }

  constructor() { }

  ngOnInit(): void {
  }

}
