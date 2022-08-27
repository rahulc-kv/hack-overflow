# hack-overflow

Web application that helps in crypto taxation

The UI is built using:

- react: https://facebook.github.io/react/
- redux-toolkit: https://redux-toolkit.js.org/
- react-router: https://github.com/reactjs/react-router
- tailwindCss: https://tailwindcss.com/

## Development/Local running

To start developing this UI you there are some prerequisites:

- node.js ~ 16.13.2 `nvm use(16.13.2)`
- yarn ~ 1.22.15

To develop/run the ui locally execute the following steps:

1. Install the prereqs mentioned above.
2. Check out the project from Github [hackoverflow](https://github.com/rahulc-kv/hack-overflow.git)
3. Run `yarn install`
4. To run the local server (in dev mode) run `yarn dev` or `yarn run dev`

### yarn tasks

- `yarn test` runs tests with Jest
- `yarn run eslint` runs `eslint`
- `yarn run storybook` creates a storybook in `.storybook`
- `yarn run dev` runs a development server on port 3000 : [http://localhost:3000]

### Precommit Hooks

`lint-staged` is run as a precommit hook

## Deployment

Deployment can be done as a Web App.

### Deployment as Web App

`yarn run build` generates an index.html with the js bundle, css bundle and all assets which can be deployed directly on a web server. The js and css bundles are hashed for setting a long cache.

## Development Guidelines

### Components

- Move business logic to hooks, utils
- Move static content to constants
- Replace prop drilling with context, store or children props
- Use translation
- Take font-size, colors via themeing
- API call function to be defined in the associated container's `api.ts` file
- While writing imports always start with `library imports` grouped together then leave a line break
  and continue with custom imports starting with named imports and then default imports.
- Use aliasing if you are accessing files from a folder in src.

### Folder Structure

hack-overflow/
  |-src/
    |-assets/
    |-components/
    |-constants/
    |-containers/
      |-`container-folder-name`/
        |-components/
        |-api.ts
        |-slice.ts
        |-`comtainerName.tsx`
        |-types.ts
    |-hooks/ ​
    |-pages/
    |-reducers/
      |-commonReducer.ts
      |-index.ts ​
    |-routes/
      |-RouteLayout.tsx
      |-RotuesPath.ts
      |-index.ts
    |-services/
      |-api.ts
    |-store/
      |-store.ts
      |-reducers.ts
    |-styles/
      |-global.css
      |-reset.css
    |-test
  |-App.tsx
  |-index.tsx
  |-tailwind.config.js
  |-tsconfig.paths.json

### Coding rules and standards

- Follow Airbnb React/JSX Style Guide
  ​
  For reference - https://airbnb.io/javascript/react/

- Follow aliasing for using folders in `src` add the alias in the `tsconfig.paths.json` accordingly.

