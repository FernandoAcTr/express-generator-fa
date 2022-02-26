# DEPRECATED

This package is deprecated and it will not receive maintenance. Please consider use this package instead: https://github.com/FernandoAcTr/node-express-cli

This package generate a basic structure of express proyect.

You only have to execute

1. npm init
2. npm i -g express-generator-fa
3. express-generator-fa init

This will generate an express proyect with hbs as view engine.

Opcionally you can exec

`express-generator-fa init --typescript true`

or

`express-generator-fa init -t true`

if you want to use typescript as your base language

And now additionaly to --typescript option you can exec
`express-generator-fa init --api-only`

if you only want a structure for an API

Note: You must configure by your hand tsconfig.json and set the next properties

- "outDir": "./build"
- "rootDir": "./src"

aditionally if you want to use TypeORM, just in the documemntation of them, you need to set the next properties
- "target": "es6"
- "lib": ["ES5","ES6"]
- "strictPropertyInitialization": false
- "experimentalDecorators": true
- "emitDecoratorMetadata": true
