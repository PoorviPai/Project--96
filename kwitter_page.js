var firebaseConfig = {
    apiKey: "AIzaSyBKBKKkck_tZCav1ygkOc1xRgcpBY_YEiY",
    authDomain: "kwitter-1-7f21c.firebaseapp.com",
    databaseURL: "https://kwitter-1-7f21c-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-7f21c",
    storageBucket: "kwitter-1-7f21c.appspot.com",
    messagingSenderId: "735510015144",
    appId: "1:735510015144:web:83102c3e6362846499a69d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
