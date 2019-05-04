firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    //window.open('dashboard.html','_self',false)
    
    var user = firebase.auth().currentUser;

    if(user != null){
        alert("Usuario");
      var email_id = user.email;
       window.open('dashboard.html','_self',false)
       document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
    alert(userEmail);
    alert(userPass);
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {
       // Success 
       alert("hola");
        alert(firebaseUser.email);
   })
  .catch(function(error) {
       // Error Handling
       alert("No se logeo");
  });
   alert("hola2");       
 var user = firebase.auth().currentUser;
 
}



function logout(){
  firebase.auth().signOut();
}
