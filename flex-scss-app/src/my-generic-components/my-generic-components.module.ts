import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MgcTogglePanelComponent } from './mgc-toggle-panel/mgc-toggle-panel.component';
import { MgcTabComponent } from './mgc-tab/mgc-tab.component';
import { MgcTabSetComponent } from './mgc-tab-set/mgc-tab-set.component';


@NgModule({
  imports: [
    CommonModule , FormsModule , RouterModule 
  ],
  exports: [
    MgcTogglePanelComponent , MgcTabComponent, MgcTabSetComponent
  ],
  declarations: [ 
     MgcTogglePanelComponent, MgcTabComponent, MgcTabSetComponent
  ]
})
export class MyGenericComponentsModule { }
