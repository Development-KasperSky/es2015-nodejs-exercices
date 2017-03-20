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

## 
