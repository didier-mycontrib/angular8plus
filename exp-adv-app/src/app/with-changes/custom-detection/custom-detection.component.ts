import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-custom-detection',
  templateUrl: './custom-detection.component.html',
  styleUrls: ['./custom-detection.component.scss']
})
export class CustomDetectionComponent implements OnInit {

  public counter : number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  disableChangeDetection(): void {
    this.changeDetectorRef.detach();
 }

 enableChangeDetection(): void {
    this.changeDetectorRef.reattach();
 }

}

/*
Désactiver l’exécution automatique de la détection : ChangeDetectorRef.detach(),
Ré-activer la détection automatique  :  ChangeDetectorRef.reattach(),
Forcer l’exécution de la détection : ChangeDetectorRef.detectChanges(),
Vérifier si des changements sont détectés  :  ChangeDetectorRef.checkNoChanges() 
Marquer la vue du composant pour que la détection de changements soit effectuée  :  ChangeDetectorRef.markForCheck()
*/

/*
NB: on peut aussi définitivement désactiver l’exécution automatique de la détection
sur un composant via
@Component({
    selector: ...,
    templateUrl: ...,
    changeDetection: ChangeDetectionStrategy.OnPush
})
mais c'est moins souple !!!
*/

/*
pour approfondir le sujet :
https://cdiese.fr/angular-customize-change-detection/
*/
