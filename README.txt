Exemples (de base)
------------------
basic-app = application simple (mais avec tests unitaires , ...)
my-app = exemple de point de d�part pour TP (sans bootstrap ni material , juste flex-layout)
ng-bs4-app = exemple bas� sur ngx-bootstrap et bootstrap 4
flex-mat-app = exemple bas� sur @angular-material et flex-layout
flex-scss-app = exemple unisquement bas� sur flex-layout et styles (.scss) "maison"

structure classique:
app
  - header (with nav bar)
  - welcome (with carrousel)
            or basic(tva,simuEmprunt,...) 
            or news,admin_news(crud,ws) 
            or login(token,for_admin_news)
	    or browseProducts (with sub-routes & categories )
	    or stats (with graph , ....)
  - footer (with welcome_link , global_settings , ...)

NB: dans service , analyse d'un booleen (en localStorage si existant)
    pour que l'appli puisse si besoin utiliser les donn�es "json" locales
    sans backend REST .

backend-REST:
   - news_api (avec partie securis�e via token JWT sans Oauth2)
     elle-meme fonctionnant avec ou sans base(mongoDb ou autre)
   - ...

autres applis � th�me:
--------------
deviseApp = petite application (conversion de monnaie)
spectacleApp = appli pour reservation de spectacle
---
