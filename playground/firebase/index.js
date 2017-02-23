import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBWkoRfPSsQ12LpXjWLrdwDmaNtF7gxYvg",
  authDomain: "jp-todo-app-b4b43.firebaseapp.com",
  databaseURL: "https://jp-todo-app-b4b43.firebaseio.com",
  storageBucket: "jp-todo-app-b4b43.firebaseapp.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
