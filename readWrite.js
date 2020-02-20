function writeData() {
    //firebase.database().ref("data").set({
        firebase.database().ref("Test").set({
        //Identifier: document.getElementById("identifierField").value,
        //State: document.getElementById("stateField").value
        State: document.getElementById("Arnes").value
    });

    getData();
}

function getData() {
    firebase.database().ref('/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            //document.getElementById("data").innerHTML = childData['Arnes'] + ", " + childData['State'];
            document.getElementById("Test").innerHTML = childData['Arnes'];
        })
    })
}

