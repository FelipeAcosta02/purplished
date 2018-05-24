## Hello Developer!

My name is Felipe Acosta and i would love to show you around our beatufil project.
As you might know now, you've become a member of the development team behind Purplished. (If not the case please leave or find out how to become involved! PS, tell us how yo found us). Contact me [here](MAILTO:acosta_jf@icloud.com).

First things first. As of May the 23rd 2018, we are using a particular folder structure and Create React App development setup i will introduce you to very quickly.

## The Tools

This app uses Redux for state management, Antd for the UI, CSS modules for styling, and Enzyme for testing.

## The Development setup

This app was created with Create React App, and to avid ejecting, we make use of the `react-app-rewired` scripts package. The setp currently allows for the import of [ant.design](ant.design)'s via the syntax
```js
import { Button } from 'antd';
```
which makes use of the `config-overrides.js` as made clear by this [tutorial](https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import).

Along with this, the `config-overrides.js` is also used to enable CSS modules that can be used via the `*.module.css`, `*.module.scss`, or `*.module.sass` file extensions. Meanshile, `*.css`, `*.scss`, and `*.sass`, remain globally-scoped styles.
We remain agnostic to weather you prefer css, scss or sass.

The setup also makes it available to import files both using absolute file paths from the `/src` folder, (For example `app/routes`), or relative file paths (For example `../../assets`).

## The App Architecture

* At top level, there's the `index.js` that mounts to the DOM.
* Next comes the `App.js`, where all the routing happens and the whole App resides.
* After come the pages stored in the `/views` folder. These contain all the necessary componenets to be a full page on their own and are directly added to `routes.js`.
* At the end, the building blocks are components, which are self contained magical things that are the smallest unit of any given foundational feature that makes the app awesome. They are stored in `/components`.

Also, quick sidenote. We always use stateful compnents. 
**Why?** To get access to lifecycle hooks, state and other amazing things.
**Doesn't it make it less efficient?** We always had this idea but as beautifully illustrated [here](https://www.youtube.com/watch?v=KnKVANnl9V0) you gain close to nothing by forcing yourself to use stateless.

## The Folder Structure

Our folder structure goes the feature approach. We dont group our code by function, rather by feature (our favorite article on the topic can be found [here](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)).
We chose this pattern because we believe it would bring about the best developer experience and scalability.

The src folder opens as follows:

```
src
├── app
├── components
├── global
├── views
├── index.js
└── registerServiceWorker.js
```

## `/app`

**The `/app` directory centralizes all the application's major components and building blocks with their respective test.js files.**

```
src
├── app
│   ├── App.js
│   ├── App.test.js
│   ├── reducers.js
│   ├── reducers.test.js
│   ├── routes.js
│   ├── routes.test.js
└── components
```

It must be said that the tests are not all that necessary, for example in routes.js, but we've decided it would be a nice standar to have.
All imports to `/app` should be absolute unless they are from within.

## `/components`

**In `/compenent` the following self-explanatory strcuture is followed in order to create components that self-enclose all the styes, data and tests and other components.**

```
src
├── compnents
│   ├── ComponentName
│   │   ├── ComponentName.js
│   │   ├── ComponentName.test.js
│   │   ├── ComponentName.module.scss
│   │   ├── ComponentNameActions.js
│   │   ├── ComponentNameReducer.js
│   │   ├── SubComponent
│   │   │   ├── SubComponentName.js
│   │   │   ├── SubComponentName.test.js
│   │   │   └── SubComponentName.module.scss
└── global
```

Every file and folder inside `/components` should be named using PascalCase.

Every imports toward a component that come from files inside that component root directory should be managed using relative imports.
Every import that comes from `/global` should use absolute imports. There shouldn't be need to import anything form any other directory. 

There's only one test.js which should contain all the neccessary tests for every js file that is at its level.
For obvious reasons, the reducer and actions files are not neccessary unless there's a need for data storage through redux.

## `/global`

**The `/global` folder is the place for all code that is to be global accross many components.**

```
src
├── global
│   ├── assets
│   │   ├── index.js
│   ├── hoc
│   │   ├── index.js
│   ├── services
│   │   ├── index.js
│   ├── UI
│   │   ├── index.js
│   ├── utilities
│   │   ├── index.js
└── views
```

Every directory contains an index.js that centralizes all exports.
Every file created in any of these directories should be named using camelCase.
The convention for importing from `/global` is using the absolute path. 

* `/assests` is intended for images and icons that might be used through a multitude of components.
* `/hoc` is intended for higher order componenets
* `/services` is intended for API
* `/UI` is intended for general propuse User Interface components
* `/utilities` is intended for general porpuse or common-use functions and methods

This setup is so that all imports to be made from these files can be made by using `import { x, y, z} from 'global/whatever'`.

## /views

**In `/views` we storee the actual pages that are to be rendered to the site.**

```
src
├── views
│   ├── PageOne.js
│   ├── PageTwo.js
│   ├── PageThre.js
│   ├── PageFour.js
│   ├── PageFive.js
└── index.js
```

Here components from `/components` and UI from `/global/UI` are put together to form a page.
They generally contain no logic and the only state they possess is purely UI-related, since the functional data is supposed to be controlled from every single component.

Files here follow PascalCasing because they contain jsx and thier name is the name of the page as in the URL or is descriptive of the content it contains.
This is so in the `app/routes` all pages to be routed can be imported neatly in the same format.

## Happy Hacking!

We hope this short file was enough to show you around the project, and we hope you find this organization as versitile as we do, and remeber that it is not set in stone and it's just the best we could think of right now. We are of the belief that code and the dev setup should work for the developer and not the other way around, feel free to comment on it and tweak it a little bit just so it remain manageable. 

We thank you so much and hope for the best.
Now, how about we start building the future?