import { NgModule } from '@angular/core';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
    imports: [
        MatTabsModule, 
        MatCardModule,MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,MatSlideToggleModule,
        MatRadioModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDatepickerModule,MatNativeDateModule,
        MatAutocompleteModule,
        MatBadgeModule,MatProgressSpinnerModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatTreeModule,
        MatStepperModule,
        MatSortModule,
        MatPaginatorModule
        ],
    exports:[
        MatTabsModule, 
        MatCardModule,MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,MatSlideToggleModule,
        MatRadioModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDatepickerModule,MatNativeDateModule,
        MatAutocompleteModule,
        MatBadgeModule,MatProgressSpinnerModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatTreeModule,
        MatStepperModule,
        MatSortModule,
        MatPaginatorModule
    ]
  })
  export class ImportMaterialModule { }