import { trigger, state, style, transition, animate } from '@angular/animations';

export const changeDivSizeTrigger = 
    trigger('changeDivSize', [
      state('smaller', style({
        backgroundColor: 'lightgreen',
        transform: 'scale(0.9)'
      })),
      state('normal', style({
        backgroundColor: 'green',
        transform: 'scale(1.0)'
      })),
      transition('smaller=>normal', animate('800ms')),
      transition('normal=>smaller', animate('400ms'))
    ]);

    /*
    exemple d'utilisation:
    
    @Component({...,
      animations: [ changeDivSizeTrigger , ... ]
    })

    <div [@changeDivSize]="taux<20?'smaller':'normal'">essai animation 
       avec [@xyTrigger]="stateXorY", taux={{taux}}</div>

    */