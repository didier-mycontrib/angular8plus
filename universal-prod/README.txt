ce mini projet node/npm
a pour but d'itentifier les dépendances minimales
de angular-universal en prod
______________________________
on copie/colle ce qui est généré par
npm start build:ssr et on le fait executer ici
_______________________________
--> aucune dépendance
    car npm run build:ssr 
    génère dist/.../server/main.js via WEBPACK !!!
---------------------
aucun besoin de npm install .
node dist/universal-app/server/main.js est suffisant 
