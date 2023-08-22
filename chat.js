var firebaseConfig = {
    apiKey: "AIzaSyBlRpf76Oy_sFR8M74XdZg5opVZAfk624g",
    authDomain: "kwitter-608b7.firebaseapp.com",
    databaseURL: "https://kwitter-608b7-default-rtdb.firebaseio.com",
    projectId: "kwitter-608b7",
    storageBucket: "kwitter-608b7.appspot.com",
    messagingSenderId: "504627534840",
    appId: "1:504627534840:web:cd701f1a974e1722ec140d"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user_name"
    })
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



