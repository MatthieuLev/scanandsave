# Scan&Save


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

Lance les tests unitaires de la librairie Jest.
```
npm run test:unit
```
