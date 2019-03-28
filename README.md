# Scan&Save

## Installation de l'environnement

### Installation de Google Chrome
https://www.google.com/chrome/

Optionnel : l'extension chrome de vue.js

https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

### Installation de Node.js et NPM
NPM c'est le gestionnaire de paquets de node.js, il permet d'installer des librairies facilement. C'est largement utilisé dans le monde javascript.

https://nodejs.org/fr/

Pour vérifier que l'installation a bien fonctionnée, vous pouvez tapper dans un terminal de commande :

`node --version` doit renvoyer le numéro de version comme v10.15.3

`npm --version` doit renvoyer le numéro de version comme v6.4.1

Exemple d'utilisation de npm pour installer une librairie qui créé un QRCode comme https://www.npmjs.com/package/qrcode

Il suffit de tapper dans un terminal de commande à la racine du projet :

`npm install qrcode` Lorsque vous faites ça, la librairie est installée dans le dossier /node-modules/ et elle doit apparaitre dans le fichier package.json si elle est utilisée par le projet

### Optionnel : Installation de Intelij Idea
Vous pouvez installer l'éditeur que vous voulez pour coder (Atom, Notepad, Eclipse)

Néanmoins quand vous êtes étudiant vous avez la chance de pouvoir utiliser gratuitement les logiciels de Jetbrains et surtout Intelij IDEA, qui est le meilleur de très loin je trouves (et la majorité des devs)

Création d'un compte étudiant : 

https://www.jetbrains.com/shop/eform/students

Installation de l'IDE :

https://www.jetbrains.com/idea/download/#section=windows

Vous devez installer le plugin **SonarLint** sur Intelij (Configure -> Settings -> plugins -> "sonarLint" dans la barre de recherche -> install)

Vous pouvez installer aussi le plugin **Vue.js** sur Intelij (Configure -> Settings -> plugins -> "vue" dans la barre de recherche -> install)

### Optionnel : Installation de SourceTree
Pour tous ceux qui ne sont pas à l'aise sur le terminal de commande et avec Git

https://www.sourcetreeapp.com/

Il vaut mieux utiliser un compte bitbucket (on peut s'inscrire avec compte google) et n'installer que Git (pas Mercurial)

### Récupérer le projet avc Git
Pour cloner le projet il faut utiliser sourceTree que vous venez d'installer. Lancer le logiciel et faite "Cloner"

Copier le lien https://gitlab.com/scan-and-save/scan-and-save.git dans le champ Source Url

Dans le champ Destination vous définissez l'endroit où sera enregistré le projet. Il faut préciser le dossier dans le chemin (ex : C:\Users\Matthieu\Desktop\scan-and-save)

Puis vous clonez, git va vous demander votre mail et votre mot de passe gitlab

**/!\ Si vous vous êtes inscrit sur Gitlab avec votre compte Google, demandez à Matthieu**

## Commandes à lancer dans le terminal à la racine du projet
Installe l'ensemble des dépendances, il faut le faire après avoir cloner le projet
```
npm install
```

Compiles le projet pour le développement, votre projet est accessible à l'adresse http://localhost:8080 et recharge les modifications "à chaud"
```
npm run serve
```

Compile pour la production, optimise le code en "minifiant" c'est à dire qu'on réduit sa taille pour qu'il soit plus rapidement téléchargé sur les navigateurs des utilisateurs
```
npm run build
```

Lance les tests
```
npm run test
```

Lance une analyse statique du code qui produit un rapport de failles / optimisations possibles
```
npm run lint
```

Lance les tests de bout en bout de la librairie Nightwatch.js
```
npm run test:e2e
```

Lance les tests unitaires de la librairie Jest
```
npm run test:unit
```
