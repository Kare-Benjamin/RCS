// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJHccYdfOYyVcLoEGagSRL6A3Xd2Fpdmg",
    authDomain: "frbasewebapprlcrowdsolutions20.firebaseapp.com",
    databaseURL: "https://frbasewebapprlcrowdsolutions20.firebaseio.com",
    projectId: "frbasewebapprlcrowdsolutions20",
    storageBucket: "frbasewebapprlcrowdsolutions20.appspot.com",
    messagingSenderId: "1083675423222",
    appId: "1:1083675423222:web:a349963c03c2c66f8797d7",
    measurementId: "G-YL5CSTDPEH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

console.log("Welcome to our IoT Console!");
