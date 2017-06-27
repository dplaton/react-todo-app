

firebaseRef.set({
  app: {
    name: 'React TODO App',
    version: '0.9'
  },
  isRunning: true,
  user: {
    name: 'Tom',
    age: 6
  }
});

var notesRef = firebaseRef.child('notes');


notesRef.on('child_added', (snapshot) => {
  console.log('Child added: ', snapshot.key, snapshot.val());
})

notesRef.on('child_changed', (snapshot) => {
  console.log('Child changed: ', snapshot.key, snapshot.val());
})

notesRef.on('child_removed', (snapshot) => {
  console.log('Child removed: ', snapshot.key, snapshot.val());
})

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Something'
})

newNoteRef = notesRef.push({
  text: 'Do something!'
})
