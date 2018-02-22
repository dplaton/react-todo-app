# React TODO App

Part of the course on Udemy - ["The Complete React Web Developer Course"](https://www.udemy.com/the-complete-react-web-app-developer-course) - I highly recommend it if you want to learn how to React. It's a bit on the newbie side of things as far as web development goes, but you may skip through the whole GitHub/CSS/Heroku part.

## What it takes to run this locally

### Prerequisites

1. The application uses [Firebase](https://firebase.google.com/) to store data so make sure you create a Firebase project and database

2. Users authenticate using their Github account. To allow Github authentication you must first follow these steps:
    1. Create a Github application by going to your Github profile and, on the "Developer settings" -> "Oauth applications" click on the "New Oauth App" button
    2. On Firebase go to the "Develop" -> "Authentication" tab in your project console and enable the Github authentication. Provide the Client ID and Client Secret for the Github application created above
    3. From the same popup as above copy the "Authorization callback URL" from Firebase and paste it into the Github OAuth application you just created

### Installing the application

1. Clone the repository
2. Run `npm install`
3. Create the environment variables to connect to Firebase. On Linux / Mac just fill in the attached `.environment.model` file and then do a `source .environment.model` to load them. On Windows just create the variables using whatever method windows users use. To get the values for these variables go to your Firebase project console then click the big "Add Firebase to your web app" button. You'll get a popup with some code that initializes the variables, you just need to get the values.
4. Run `npm run-script build && npm start`
5. Go to your browser at http://localhost:3000 and enjoy