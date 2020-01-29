var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");

function submitClick(){
    var firebaseRef = firebase.database().ref();

    firebaseRef.child("Text").set("Some Value");
}
