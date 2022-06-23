Minimal React Project Template
------------------------------

Sets up React, React-DOM and taildwindcss by default


Uses swc to compile JSX to JS

How to Use
----------

## Intialize

`npx degit sivteck/minimal-react-template my-react-project-name`


`npm install` in `./client` folder to install devDependencies (swc, nodemon)

## Development

`npm start` in `./client` for development. Outputs build artifacts to `./client/devBuild` folder with development versions of React and nodemon triggers rebuild when `js`/`css` files are changed.

## Production (no minification or bundling as of now)

`npm run build` in `./client` folder to output build artifacts to `./client/build` folder
