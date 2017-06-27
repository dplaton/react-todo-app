import firebase from 'firebase'

try {
    var config = {
        apiKey: "AIzaSyD3Tr-XEWUNvu-81xUajVfZ8qxcTjhedBQ",
        authDomain: "dplaton-todo-app.firebaseapp.com",
        databaseURL: "https://dplaton-todo-app.firebaseio.com",
        projectId: "dplaton-todo-app",
        storageBucket: "dplaton-todo-app.appspot.com",
        messagingSenderId: "965654118899"
    };
    firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;