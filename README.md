# Perchwell

Frontend React App for MLS Listings with Tailwind CSS configured with Vite as the build tool.

## Requirements

1. NodeJS
2. Yarn

## Vite
Vite is a build tool that significantly improves the front-end development experience. It is similar to weback with more features and has excellent HMR(Hot Module Replacement). https://vitejs.dev/

## Tailwind CSS

Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. https://tailwindcss.com

## Running the app

1. Clone the repo :

`git clone https://github.com/kshitizkc/perchwell-takehome.git`

2. Install dependency packages:

`yarn`

3. Run the application:

`yarn dev`

## Checking Linting Issues and Fixing

The app uses eslint along with prettier for checking linting issues and applying auto fixes.

To check linting issues run:

`yarn lint`

To autofix applicable linting issues:

`yarn lint:fix`

## Testing

The app uses jest and react-testing-library as the frontend testing framework.

To run tests use command:

`yarn test`

## Husky Precommit Hooks

The app is configured with husky for pre-commit hooks along with lint-staged. Currently linting issues are checked and fixed for the staged files and the app should pass all the tests before anything is commited to the repo. 

Note: If there is an emergency and you are not able to resolve linting issues, pass tests then you can use `--force` flag while pushing your changes.

