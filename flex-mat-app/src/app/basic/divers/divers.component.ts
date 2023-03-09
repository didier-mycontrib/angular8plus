import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent implements OnInit {
  pending : boolean = true;
  animal: string;
  name: string;

  valeurChoisie="";
  options = [ "un" , "deux" , "trois"];
  filteredOptions: string[];


onValueChanged(){
  console.log("new value="+this.valeurChoisie);
  this.filteredOptions = this._filter(this.valeurChoisie);
}

  ngOnInit() {
    this.onValueChanged();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    /*
 entryComponents: [ExampleDialogComponent],
 must be added in @NgModule()
*/
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


 

}
