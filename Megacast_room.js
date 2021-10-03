
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD_yKW5FrSsalWfHsMk7jvlyc38NneQ4E4",
      authDomain: "mogacast-faa20.firebaseapp.com",
      databaseURL: "https://mogacast-faa20-default-rtdb.firebaseio.com",
      projectId: "mogacast-faa20",
      storageBucket: "mogacast-faa20.appspot.com",
      messagingSenderId: "387805808105",
      appId: "1:387805808105:web:4f60021ddb4701a1f7f778"
    };
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML= 'Welcome ' + user_name ;

     function addroom(){
           room_name= document.getElementById("room_name").value ;
           console.log(room_name);
           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room_name" , room_name);
           window.location="Megacast_Chat.html";

     }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='RedirectToTheRoomName(this.id)'> "+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();
function RedirectToTheRoomName(name){
      console.log(name+"Is CLICKED I GUESS......");
      localStorage.setItem("room_name", name);
      window.location="Megacast_Chat.html";
      
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
