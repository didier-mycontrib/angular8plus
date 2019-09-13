export class Publication /* news publication/post */{
    _id? : string ;
    titre : string ; // 'titre du post"
    fichier_image_name : string; // éventuelle image
    resume : string; // "texte court avec balises html simples"

    //l'un  des 3 attributs suivants est souvent non null de manière exclusive :
    fichier_details_name : string; //"details_xy.pdf"
    texte_complet : string; // texte long avec balises html simples
    lien_externe : string; // "http://partie_autre_site.html"

    date: string; // "2018-06-25"

    selection? : boolean ; //selection locale seulement
}

/*
publication = { categorie : "" , titre : "" , 
                 fichier_image_name : null ,  resume : "" , 
                 fichier_details_name : null , texte_complet : null , 
                  lien_externe : null , date : "2018-06-01", 
                  };
*/