function writeData() {
    firebase.database().ref("data").set({
        name: document.getElementById("nameField").value,
        age: document.getElementById("ageField").value
    });

    getData();
}

function getData() {
    firebase.database().ref('/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['name'] + ", " + childData['age'];
        })
    })
}

