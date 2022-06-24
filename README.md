React Project Template
------------------------------

Sets up React, taildwindcss and swc by default

How to Use
----------

## Intialize

`npx degit sivteck/react-swc-tailwind-template my-react-project-name`


`npm install` in `./client` folder to install devDependencies (swc, nodemon)

## Development

`npm start` in `./client` for development. Outputs build artifacts to `./client/devBuild` folder with development versions of React and nodemon triggers rebuild when `js`/`css` files are changed.

## Production (no minification or bundling as of now)

`npm run build` in `./client` folder to output build artifacts to `./client/build` folder

## What is bad?

1. Not being able to use ES Modules yet.

# TODO

1. Setup tests
2. Use postcss
3. SSR
4. Deploy to Cloudflare Workers and Heroku
