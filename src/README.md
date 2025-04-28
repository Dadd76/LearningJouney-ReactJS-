# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


#### Event / SyntheticEvent

1. Avec (event: SyntheticEvent) => { ... }
onIncrement = (event: SyntheticEvent) => {
  console.log(event);
  this.updateEnthusiasm(1);
};

Ici, ta fonction attend explicitement un argument qui est un événement React (SyntheticEvent).

Tu peux utiliser cet event si tu veux accéder :
À la source de l'événement (event.target)
À ses propriétés (event.preventDefault(), event.stopPropagation(), etc.)
TypeScript type cet événement → meilleure auto-complétion et sécurité.
Obligatoire si tu veux manipuler l'événement directement.

2. Sans paramètre ( ) => { ... }
onIncrement = () => {
  this.updateEnthusiasm(1);
};

Ici, la fonction n’attend pas de paramètre.

Elle ignore complètement l'événement qui a déclenché l'appel.
Très bien si tu n’as pas besoin de l'event.
Plus simple, plus propre quand tu n'utilises que des actions internes (comme updateEnthusiasm).

🎯 Quand choisir l'un ou l'autre ?

Cas	Solution idéale
Tu veux accéder à event.target, faire preventDefault(), etc.	(event: SyntheticEvent) => {...}
Tu veux juste réagir sans utiliser l'event	() => {...}


