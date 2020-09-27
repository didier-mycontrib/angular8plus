import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { disablePub, enablePub , togglePub} from '../pub.actions';
import { TimeCounterService } from '../time-counter.service';

@Component({
  selector: 'my-lazy2-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  count_value : number;
  pub$: Observable<boolean>
 
  constructor(private store: Store<{ count: number ,
                                     pub : boolean }>,
             private timeCounterService :  TimeCounterService) {
    this.count$ = store.pipe(select('count'));
    this.count$.subscribe((c)=>{this.count_value=c})
    this.pub$ = store.pipe(select('pub'));

    //reception reguliere de timeInfo toutes les 5s : 
    timeCounterService.getPeriodicTimeInfo().subscribe(
      (timeInfo)=>{ console.log(timeInfo + " " + new Date(timeInfo).toLocaleTimeString()); this.store.dispatch(increment()); }
    )
  }

  setClasses(){
    return {
      "positif" : this.count_value >= 0 ,
      "negatif" : this.count_value < 0  
    }
  }
 
  // dispatch actions onEvents :
  onIncrement() {  this.store.dispatch(increment());  }
  onDecrement() {  this.store.dispatch(decrement());  }
  onReset() {  this.store.dispatch(reset());  }

  // dispatch actions onEvents :
  onDisablePub() {  this.store.dispatch(disablePub());  }
  onEnablePub() {  this.store.dispatch(enablePub());  }
  onTogglePub() {  this.store.dispatch(togglePub());  }

  ngOnInit(): void {  }

}
