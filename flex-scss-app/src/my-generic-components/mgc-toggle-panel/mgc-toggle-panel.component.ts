import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mgc-toggle-panel',
  templateUrl: './mgc-toggle-panel.component.html',
  styleUrls: ['./mgc-toggle-panel.component.scss']
})
export class MgcTogglePanelComponent implements OnInit {

  toggleP : boolean =false;

  @Input()
  title : string = 'default panel title';

  constructor() { }

  ngOnInit() {
  }

}

/*
exemple d'utilisation:

<mgc-toggle-panel [title]="'panel1'" >
		<app-part1></app-part1> ou ...
	</mgc-toggle-panel>
	  
	<mgc-toggle-panel [title]="'panel2'" >
		<div>contenu du paneau 2</div>
	</mgc-toggle-panel>

*/
