import { Injectable } from '@angular/core';
import { Stat } from '../data/stat';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private memStatList : Stat[] = 
  [
   { _id : "s2010" , year : 2010 , month: null, value : 140  },
   { _id : "s2011" , year : 2011 , month: null, value : 160  },
   { _id : "s2012" , year : 2012 , month: null, value : 180  },
   { _id : "s2013" , year : 2013 , month: null, value : 170  },
   { _id : "s2014" , year : 2014 , month: null, value : 200  },
   { _id : "s2015" , year : 2015 , month: null, value : 230  },
   { _id : "s2016" , year : 2016 , month: null, value : 200  },
   { _id : "s2017" , year : 2017 , month: null, value : 250  },
   { _id : "s2018" , year : 2018 , month: null, value : 270  },
  ];

  getStatsObservable():Observable<Stat[]>{
    return of(this.memStatList);          
  }

  constructor() { }
}
