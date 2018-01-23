# Motivate

## Overview
Our app allows users to achieve their goals in a timely manner by providing them with tools to break goals down into manageable tasks. We also added an element of playfulness by gamifying the process of achieving one’s goals. Users can create avatars to base their progress on by adding gear such as a sword and armor. 

## Inspiration
In an age where immediate gratification is expected in every aspect of our lives, we are in dire need of an efficient and playful mechanism to keep us on track to achieve the goals we have in life. Our motivation for creating this app was to provide users with the mechanism to plan incremental steps and track their progress on their goals. Goal setting and executing has never been easier. Join our movement today.

## Usage
* Access the app [here](https://goalie-teamgb.herokuapp.com/)
* Login with your Google account; the app then uses session to remember who you are in the short term
* Click 'Create Goal' to get started
  * Provide due dates for your goal and also the related tasks of that goal
* Click 'See goal' to complete a goal or individual task
* The Dashboard displays the user's avatar image, main goal, and subtasks to accomplish that goal. The information rendered is being pulled from the database (mongoDB).  As each task is completed, the user's avatar levels up and is given new gear.
* Once all tasks are completed, the user sees the success component on the website and is directed to create a new goal.

## Built With

This app is built on a MERN stack: MongoDB, Express, React, Node and deployed on Heroku

###Front-end
* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/)
* [Bootstrap](http://getbootstrap.com/docs/3.3/)
* [Google Calender API](https://developers.google.com/google-apps/calendar/)
* [Google Fonts](https://fonts.google.com/)
* [Axios](https://github.com/axios/axios): Promise based AJAX client

###Back-end
* [Express/cookie-session/cookie-parser](https://expressjs.com/)
* [Passport](http://www.passportjs.org/): Authentification middleware for Node
* [Google Oauth 2.0](https://developers.google.com/identity/protocols/OAuth2)
* [Mongoose.js](http://mongoosejs.com/): ODM for MongoDB

### Deployment
* [Heroku](https://www.heroku.com/): App hosting
  * [mLab](https://elements.heroku.com/addons/mongolab): MongoDB hosting

## Authors

* [**Brian Huston**](https://briandhus.github.io/Portfolio/) 
* [**Chi Jen Lu**](chijenlu.com) 
* [**Dylan Ishihara**](https://dylanishihara.com/) 
* [**Eri Nagase**](https://nagaseri.github.io/Responsive-Portfolio/) 
* [**Roper Macaraeg**](http://www.ropermacaraeg.com/) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

