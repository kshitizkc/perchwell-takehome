# Perchwell

Frontend React App with Tailwind CSS configured with Vite as the build tool

## Requirements

1. NodeJS
2. Yarn

## Running the app

1.Clone the repo :

### git clone GIT_URL_FOR_THIS_APP

2.Install all the dependent packages:

### yarn

3. Run the application:

### yarn dev

## Checking Linting Issues and Fixing

The app uses eslint along with prettier for checking linting issues and applying auto fix

5. To check the linting issues:

### yarn lint

6. To autofix applicable linting issues:

### yarn lint:fix

## Testing

The app uses jest and react-testing-library as the frontend testing framework.

7. To run tests use command:

### yarn test

## Other dependencies

The app is configured with husky for pre-commit hooks along with lint-staged. Currently linting issues are checked and fixed for the staged files and the app should pass all the tests before anything is commited to
the repo.
