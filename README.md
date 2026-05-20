# Projet Portfolio ^-^

*Un projet conçu pour expérimenter, progresser et transformer une idée en solution fonctionnelle, tout en renforçant mes compétences techniques.*

---

## Structure du projet 
```src
├── App.jsx
├── assets
│   ├── Célia-ML-CV.pdf
│   └── Image.jpeg
├── components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── LiquidEther.css
│   ├── LiquidEther.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── index.css
└── main.jsx
```

---

## Aperçu Portfolio

![alt text](<memory_portfolio/Capture d’écran du 2026-05-17 22-25-38.png>)

---

## Technologies utilisées

- **React Vite**
- **JavaScript**
- **HTML / CSS**
- **API GitHub**
- **ReactBit**
- **Formspree**

---

## Installation & Lancement

1. **Clone le dépôt**
```bash
git clone git@GitHub.com:celiacml/celia_portfolio.git
``` 

2. **Installer les dépendances**

```npm create vite@latest memory_portfolio -- --template react```

```bash
cd memory_portfolio
npm install ...
```

3. **Accéder aux dépendances**

Commande pour créer le fichier .txt : `pip freeze > requirements.txt`
Voir les dépendances via le fichier : `requirements.txt`

4. **Lancement Portfolio**

```bash 
cd memory_portfolio
npm run dev
```

5. **Accéder à l'application**

Ouvrez votre navigateur à l'adresse : `http://localhost:5173/`

6. **Déployer le portfolio**

* **Étape 1** -> Configurer vite.config.js -> base: "/celia_portfolio/",

* **Étape 2** -> Installer le package gh-pages -> `npm install gh-pages --save-dev`

* **Étape 3** -> Ajouter dans package.json -> dans scripts -> `{ "deploy": "gh-pages -d dist" }`

* **Étape 4** -> Build le projet -> `npm run build`

* **Étape 5** -> Déployer le projet -> `npm run deploy`

* **Étape 6** -> Push les modifications -> `git add . puis git commit -m "deploy" puis git push`

* **Étape 7** -> Sur GitHub -> Settings -> Pages -> sélectionner gh-pages & /(root)

**Pour chaque modification du site -> refaire :**
```bash
npm run build
npm run deploy
git push
```
**⚠️ Toujours lancer les commandes à la racine du projet (là où il y a package.json) et pas dans src**

---

## Gestion de projet 
- **Git** - Version control
- **GitHub** - Hébergement et collaboration
- **GitHub Pages** - Déployer le portfolio

---

## Liens utiles

- **Dépôt en ligne** : ```https://celiacml.GitHub.io/celia_portfolio/```
- **Repo GitHub** : ```git@GitHub.com:celiacml/celia_portfolio.git```
- **Portfolio en local** : ```http://localhost:5173/```

---

## Auteur 
Ce projet a été réalisé par Apiqueen ^-^