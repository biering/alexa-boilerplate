# Alexa-Boilerplate

> Boilerplate project to create a simple alexa skill with ES6 syntax features

## To Use

1. Clone This repo.
2. Run `npm install`.
3. Run `gulp build`. This will create a file called `package.zip` in the `./builds` dictionary.
4. Upload `package.zip` to your Lambda.
5. Edit `action` files as needed to make it your own.

## Files

#### `index.js`
This is the base file that is loaded when the Lambda first loads. This file determines the Request type and routes accordingly.
