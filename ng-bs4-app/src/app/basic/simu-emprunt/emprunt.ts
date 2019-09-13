export class Emprunt {
     nbMois : number = 60; //60 mois = 5 ans (par défaut)
     tauxAnnuel : number = 0; //2% par defaut
     montant : number = 12000; //par défaut, à préciser
     mensualite : number=200; //à recalculer
     avecAssurance : boolean =false;
     tauxAssurance : number = 0; //1% de mensualite par defaut
     mensualiteAssurance : number = 0; //à recalculer

     calculerMensualite(){
         let tauxMensuel = this.tauxAnnuel / 12 / 100;
         this.mensualite = tauxMensuel ==0 ? this.montant / this.nbMois : (this.montant * tauxMensuel) / (1 - Math.pow(1+tauxMensuel,-this.nbMois));
         console.log("mensualite="+this.mensualite);
     }
     calculerAssurance(){
         this.calculerMensualite();
         if(this.avecAssurance){
             this.mensualiteAssurance = this.mensualite * this.tauxAssurance / 100;
             console.log("mensualiteAssurance="+this.mensualiteAssurance);
         }else {
             this.tauxAssurance=0;
             this.mensualiteAssurance = 0;
         }
     }
}