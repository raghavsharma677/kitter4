

//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyCf6sOddpp1fIoYDCpQf_DQC2e30X0wWC4",
  authDomain: "kwitter-54276.firebaseapp.com",
  databaseURL: "https://kwitter-54276-default-rtdb.firebaseio.com",
  projectId: "kwitter-54276",
  storageBucket: "kwitter-54276.appspot.com",
  messagingSenderId: "1010891336878",
  appId: "1:1010891336878:web:690b31a69932f8876e113f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
