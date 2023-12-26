
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDO_rSaTK7xzExwHcalQCSARlkJQVU3Ze8",
      authDomain: "kwitter-e4d39.firebaseapp.com",
      projectId: "kwitter-e4d39",
      storageBucket: "kwitter-e4d39.appspot.com",
      messagingSenderId: "364683092322",
      appId: "1:364683092322:web:02364074fe1bc4d4a68c3b",
      measurementId: "G-RV02C1Y4NP"
    };
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      firebase_message_id = childKey;
      message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + message + "</h4>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById('room_name').value;

      firebase.database().ref('/').child(room_name).update({
            purpose: 'adding room name'
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}
function redirectToRoomName(){
      console.log(name);
      localStorage.setItem('room_name', name);
      window.location = "kwitter_page.html"
}

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}