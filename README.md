##EXAMEN REACT
This project was made with create-react-app and Typescript template.
You can access the application with the following credentials, the form makes a basic validation for credentials:

user: test@test
password: test

SignUp ----> is not functional

Once inside the application, you will see a list of users loaded from an API, and a form in wich you'll be able to post a new user to that API. The form has basic validations with javascript and pagination for user's table.

In the upload page you will be able to drag and drop one or multiple images at once and see a preview.
*Carrousel of images is not functional
*Saving image to a storage is not functional

Public Routes:
path='/login'

Protected Routes:
path='/employees'
path='/upload'

If you are not signed in you wont be able to see the protected routes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
