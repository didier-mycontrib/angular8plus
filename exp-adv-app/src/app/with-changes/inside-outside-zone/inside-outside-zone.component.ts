import { Component, OnInit , NgZone, ViewChild, ElementRef , ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-inside-outside-zone',
  templateUrl: './inside-outside-zone.component.html',
  styleUrls: ['./inside-outside-zone.component.scss']
})
export class InsideOutsideZoneComponent implements OnInit {

  public cpt : number = -1;

  @ViewChild('e_cpt', { static: true }) 
        e_cpt: ElementRef<HTMLElement>

  constructor(private zone: NgZone, private applicationRef: ApplicationRef) { }

  public recursIncrCpt(doneCallback: () => void){
    this.cpt++;
    console.log(`Current cpt: ${this.cpt}`);

  if (this.cpt < 10) {
    window.setTimeout(() => {
      this.recursIncrCpt(doneCallback);
    }, 100);
  } else {
    doneCallback();
  }
  }

  public recursIncrCptWithExplicitTick(doneCallback: () => void){
    this.cpt++;
    this.applicationRef.tick(); //explicit global check/detection of changes to display
    console.log(`Current cpt: ${this.cpt}`);

  if (this.cpt < 10) {
    window.setTimeout(() => {
      this.recursIncrCptWithExplicitTick(doneCallback);
    }, 100);
  } else {
    doneCallback();
  }
  }

  public onIncrCpt(){
    this.recursIncrCpt(() => console.log('inside Done!'));
  }

  public onResetCpt(){
    this.cpt = 0;
  }

  public onIncrCptOutsideWithExplicitTick(){
    this.zone.runOutsideAngular(() => {
      this.recursIncrCptWithExplicitTick( () => {
                    console.log('outside Done with explicit ticks !'); //indirectly update UI (to final 10)
               });
    });//end of this.zone.runOutsideAngular
  }
  
  public onIncrCptOutsideDirectDisplay(){
    this.zone.runOutsideAngular(() => {
      this.recursIncrCpt( () => {
                    console.log('initial innerText:' + this.e_cpt.nativeElement.innerText);
                    this.e_cpt.nativeElement.innerText = ""+this.cpt;
                    //BUG : cannot reset after , connot restore automatic update
                    console.log('outside Done with direct display !'); //indirectly update UI (to final 10)
               });
    });//end of this.zone.runOutsideAngular
  }

  public onIncrCptOutside(){
    this.zone.runOutsideAngular(() => {
      //this.recursIncrCpt(() => console.log('Done!')); //no display final 10
      this.recursIncrCpt( 
        () =>  this.zone.run(() => {
                    console.log('outside Done!'); //indirectly update UI (to final 10)
               })
      );
    });//end of this.zone.runOutsideAngular
    
  } //end of onIncrCptOutside

  

  ngOnInit(): void {
    setTimeout(() => {
      this.cpt = 0;
    }, 1000);
  }

}

/*
runOutsideAngular() pour exécuter du code en dehors de la détection de changements Angular.
run() exécute du code dans une zone Angular. La détection de changements sera exécutée.
runTask() permet d’exécuter du code dans une zone Angular de façon asynchrone. La détection de changements sera exécutée
*/

/*
pour approfondir le sujet :
https://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html
https://cdiese.fr/angular-change-detection/
https://cdiese.fr/angular-customize-change-detection/
*/