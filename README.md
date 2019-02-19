# Front-End Test for Caravelo
https://caravelo-test.netlify.com

## Requirements
Create an app for users with a validated airplane ticket to bid on meals for their trip. The user flow is:

1. The user accesses the app.
2. The system shows, for each and every flight, the meal package options and bid price range allowed.
3. The user selects its desired bid amount for its preferred meal package.
4. The system shows a pretty printed JSON object with the selection made as specified in the ​Output JSON​ structure.

## Spec
The app is developed with VueJS, using Scss as a CSS Preprocessor and is deployed in Netlify. The components are `.vue` files but the CSS is imported from a separate file for better maintainability and scalability. 

## Install and Run Project Locally
The project uses Node 10.15.0, be sure to have it installed.

### Project Setup
Inside the console and where you want your project, do the following command sequence:
- Clone the repo with `git clone git@github.com:Zenemig/caravelo.git`
- Go to the project folder with `cd caravelo`
- Install dependancies with `npm install`

### Compiles and Hot-Reloads for Development
```
npm run serve
```

### Compiles and Minifies for Production
```
npm run build
```

### Run Tests
```
npm run test
```

### Lints and Fixes Files
```
npm run lint
```

### Run Unit Tests
```
npm run test:unit
```
