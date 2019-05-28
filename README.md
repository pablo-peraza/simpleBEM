# SimpleBEM

Basic UI css framework. It adds a lot of pure css common components using BEM naming conventions.
This framework also doesn't add any "default" styles so any HTML element without a class will be 
rendered with your browser's default styles.

## Documentation

https://piousp.github.io/simpleBEM/

## Building
This project uses NPM as a build tool. Simply do

```bash
npm install
```

after cloning to start coding.

The defined tasks are:
* npm run build: for building and linting the code
* npm run lint: for linting the code
* npm run watch: watches for changes and builds the code (using nodemon)
* npm run browser: starts up a HTTP server for the documentation (using browsersync)
* npm run debug: runs both the `watch` and the `browser` tasks.


## Libs
* Postcss Utilities: https://github.com/ismamz/postcss-utilities
* Typebase: https://github.com/devinhunt/typebase.css/


## Other CSS that you might be interested in
* Minireset: https://jgthms.com/minireset.css/
* Gutenberg: https://matejlatin.github.io/Gutenberg/
* Normalize: https://necolas.github.io/normalize.css/
* Normalize opentype: https://kennethormandy.com/journal/normalize-opentype-css/
