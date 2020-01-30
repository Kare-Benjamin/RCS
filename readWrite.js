function writeData() {
    firebase.database().ref("data").set({
        Identifier: document.getElementById("identifierField").value,
        State: document.getElementById("stateField").value
    });

    getData();
}

function getData() {
    firebase.database().ref('/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['Identifier'] + ", " + childData['State'];
        })
    })
}

