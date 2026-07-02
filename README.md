# <img src="src/assets/images/SaboreaMexico.png" alt="Saborea Mexico" width="100"/> — Saborea México

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Parcel](https://img.shields.io/badge/Parcel-E7A93D?style=for-the-badge&logo=parcel&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

<sub>🗓️ Developed in April 2026</sub>

This project is a **website** dedicated to **Mexican gastronomy and its recipes**.

---

## ✅ Features

- **Home Page**: landing page presenting featured recipes and information about several regions of Mexico.
- **Recipes Page**: a collection of 4 typical Mexican recipes.
- **Tacos Page**: a dedicated page covering the history of **tacos**, their ingredients, and how to prepare them.
- **Nachos Page**: a dedicated page covering the history of **nachos**, their ingredients, and how to prepare them.
- **Sources Page**: documentation and links to the sources consulted throughout the project's development.

---

## 🛠 Installation & Setup

### a0. Prerequisites
Make sure you have installed:
- **[Node.js](http://nodejs.org/) 20.x** or higher

Check the version:
```bash
node -v
```

### a1. Clone the repository
```bash
git clone https://github.com/marcturu/saboreamexico.git
cd saboreamexico
```

### a2. Install dependencies
```bash
npm install
```

### a3. Run locally
```bash
npm run start
```
The app will be available at **http://localhost:1234**, with live reload enabled.

### b1. Try the website
You can try the deployed version directly in the browser:

- **Netlify (browser testing):**
  WebApp: [https://saboreamexico.netlify.app/](https://saboreamexico.netlify.app/)

> ℹ️ **Deployment details:**
> The project is deployed on [Netlify](https://netlify.com) from the `main` branch.
> - **Build command:** `npm run build`
> - **Publish directory:** `dist`

---

## 🧩 Methodology

- **ITCSS** — style architecture (settings, tools, generic, elements, objects, components, utilities)
- **BEM** — CSS class naming convention
- **OOCSS** — reusable object classes (`o-container`, `o-section`)
- Responsive, *mobile-first* design

---

## 🧰 Built With

### Core

| Technology | Purpose |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Bundler — development server, production build, asset pipeline |
| [Sass/SCSS](https://sass-lang.com) | CSS preprocessor — variables, nesting, functions, mixins, partials (`@parcel/transformer-sass`) |
| [PostHTML](https://github.com/posthtml/posthtml) | HTML partials via `posthtml-include` |
| [Stylelint](https://stylelint.io/) | SCSS linting with custom BEM and SCSS rules (`stylelint-config-prettier-scss`, `stylelint-config-recommended-scss`, `stylelint-scss`), configured in `.stylelintrc` |

### Optimization (production build)

| Technology | Purpose |
| --- | --- |
| [`lightningcss`](https://github.com/parcel-bundler/lightningcss) | CSS minification and optimization (`@parcel/optimizer-css`) |
| [`htmlnano`](https://github.com/posthtml/htmlnano) | HTML minification (`@parcel/optimizer-htmlnano`) |
| [SWC](https://swc.rs/) | JavaScript minification (`@parcel/optimizer-swc`) |
| [`sharp`](https://sharp.pixelplumbing.com/) | Image transformation and WebP conversion (`@parcel/transformer-image`) |

### Dependencies

| Dependency | Purpose |
| --- | --- |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Icons `"@fortawesome/fontawesome-free": "^7.2.0"` |

---

## 📜 Commands

| Command | Description |
| --- | --- |
| `npm run start` | Starts the development server at http://localhost:1234 with live reload |
| `npm run build` | Compiles and optimizes the files for production into `dist/` |
| `npm run clean` | Removes the `dist/` folder and caches |
| `npm run stylelint` | Validates the SCSS files against the configured rules |

---

## 📂 Project Structure

```
src/
├── index.html
├── categoria.html
├── det1.html
├── det2.html
├── links.html
├── views/                  # PostHTML partials
│   ├── partials/
│   ├── home/
│   ├── categoria/
│   ├── det1/
│   ├── det2/
│   └── links/
├── assets/
│   ├── fonts/              # Self-hosted fonts (Unbounded, DM Sans)
│   ├── images/
│   ├── scripts/
│   │   ├── app.js
│   │   └── modules/        # JS modules (aos and header)
│   └── styles/
│       ├── main.scss
│       ├── _dependencies.scss
│       ├── settings/       # Variables, fonts
│       ├── tools/          # Functions, mixins
│       ├── generic/        # Reset
│       ├── elements/       # Base styles
│       ├── objects/        # OOCSS objects
│       ├── components/     # BEM components
│       └── utilities/      # Utility classes
```
