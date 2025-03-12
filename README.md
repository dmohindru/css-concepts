# CSS Concepts

This project contains list of small exercises cover some of the major concepts of css. Refer to this [index readme](./css-concepts/README.md) file for more. Following topics are covered in this project

1. [Selector](./css-concepts/01-selector/README.md)
2. [Box Model](./css-concepts/02-box-model/README.md)
3. [Layout technique](./css-concepts/03-layout-techniques/README.md)
4. [Typography](./css-concepts/04-typography/README.md)
5. [Responsive design](./css-concepts/05-responsive-design/README.md)
6. [Animation Transitions](./css-concepts/06-animation-transitions/README.md)
7. [Color Background](./css-concepts/07-color-background/README.md)
8. [Pseudo Element content manipulation](./css-concepts/08-pseudo-element-content-manipulation/README.md)
9. [CSS Variables](./css-concepts/09-css-variables/README.md)
10. [CSS functions](./css-concepts/10-css-functions/README.md)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {~
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
