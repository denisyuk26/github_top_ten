This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About app

App builded with help React, Redux, Github Api V3. It get ten users from Kyiv city, and render some info about users, such as: 
***user photo
 ***login name(link to user acc page, opened in new page), 
 ***user name
 *** user location
 *** count of user followers
 *** global count of all user repositories stars 

 GitHub has Rate-Limit, u can read more on [Rate-Limit Github Api](https://developer.github.com/v3/rate_limit/)
 So when rate limit is over app render error, for user