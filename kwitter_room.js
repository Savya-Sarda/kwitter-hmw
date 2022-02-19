
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAdRSakrx3Gc-QZ4Zs9oRZwS5cdvN9F6tc",
      authDomain: "kwitter-55.firebaseapp.com",
      databaseURL: "https://kwitter-55-default-rtdb.firebaseio.com",
      projectId: "kwitter-55",
      storageBucket: "kwitter-55.appspot.com",
      messagingSenderId: "886304295938",
      appId: "1:886304295938:web:fc6b5fc6226f624d76ab1b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function logout(){
      
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";


}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}