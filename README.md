# es2015-nodejs-exercices

## ESLINT Préambule :

### Installer le package linter-eslint dans atom

https://atom.io/packages/linter-eslint

### Pour créer le eslintrc
(c'est dejà fait pour ce projet mais on supprime le eslintrc et on en refait un autre)

```
eslint --init
```

### Pour pouvoir faire des console.log, ajouter la règle suivante :

```
"rules" : {
  ...,
  "no-console": 0
}
```

# Démarrage du projet

## installer nodemon en global

```
npm i -g nodemon
```

## installer toutes les dependences du projet

```
npm install
```

## demarrer le projet

```
npm start
```

## infos sur le projet

Le projet utilise Express pour le server et Ejs pour le rendu des pages (templating)

* http://expressjs.com/fr
* http://ejs.co/

## Les tutos de références :
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
* https://coligo.io/templating-node-and-express-apps-with-ejs/

## Exercice :

* Step 1 :
* Step 2 : [user.model.js] Ecrire une methode  getName() qui retourne une string comportant le nom et le prénom avec la premiere lettre en Majuscule. ex. Albert Enstein
* Step 3 : [index.ejs] Ecrire le resultat de la methode getName() pour chaque element de la liste (à la place de <%= user.firstName %> <%= user.lastName %>)
* Step 4 : [smart.user.model.js] écrire le contenu de smart.user.model.js. SmartUserModel hérite de UserModel. Il ajoute les methodes suivantes :
  * getSmartSentence() // retourne une phrase qui dit "I am smart and I am [role de la personne]. My name is [Prenom] [Nom]".
  * getBirthSentence() // retourne une phrase qui dit "[Prenom] [Nom] est né il y a [XX] année"
  * getRole() // retourne le rôle de la personnalité
  * getUrl() // retourne l'url de la page de la personnalité
* Step 5 : [user.list.js] Utiliser SmartModel à la place de UserModel
* Step 6 : [index.ejs et user.ejs]  Ecrire le resultat des methodes getSmartSentence() getBirthSentence() getRole() getUrl() dans les 2 templates
* Step 7 : [creation.ejs] Faire un formulaire de creation de personnalité avec comme method POST et comme action '/creation'
* Step 8 : [created.ejs] Faire un message de succès avec le nom de la personnalité et un lien vers sa page
*
