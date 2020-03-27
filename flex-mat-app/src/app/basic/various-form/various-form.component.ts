import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/common/service/setting.service';
import { Person } from 'src/app/common/data/person';
import { Observable , of} from 'rxjs';
import { map , startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-various-form',
  templateUrl: './various-form.component.html',
  styleUrls: ['./various-form.component.scss']
})
export class VariousFormComponent implements OnInit {
  listeKind = [ "Male" , "Female"];
  //myControl = new FormControl();//if reactiveForm and autocomplete
  countries = [ "France" , "Finlande" , "Allemagne" , "Autriche" , "Italie" , "Espagne" , "..."];
  filteredCountries: Observable<string[]>;
  myCountryControl = new FormControl();

  person : Person = new Person();
  constructor(public settingService: SettingService) { }

  adjustfilteredCountries() {
    this.filteredCountries = of(this.countries)
     .pipe(
        map(listCountries => this._filterCountriesIgnoreCase(listCountries,this.person.country))
      );
  }

  ngOnInit(){

  }

  private _filterCountriesIgnoreCase(listCountries:string[],value: string): string[] {
    const filterValue = value.toLowerCase();
    return listCountries.filter(c => c.toLowerCase().includes(filterValue));
  }
}
