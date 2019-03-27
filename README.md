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

Vous devez installer le plugin SonarLint sur Intelij (Configure -> Settings -> plugins -> "sonarLint" dans la barre de recherche -> install)

Vous pouvez installer aussi le plugin vue.js sur Intelij (Configure -> Settings -> plugins -> "vue" dans la barre de recherche -> install)

### Optionnel : Installation de SourceTree
Pour tous ceux qui ne sont pas à l'aise sur le terminal de commande et avec Git

https://www.sourcetreeapp.com/

Il vaut mieux utiliser un compte bitbucket (on peut s'inscrire avec compte google) et n'installer que Git (pas Mercurial)

## Commandes
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
