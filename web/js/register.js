
function register(){

  var userEmail = document.getElementById("txtEmail").value;
  var userPass = document.getElementById("txtClave").value;
  
firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
 
}

 function registrarDermatologo(){
//                var id = firebase.database().ref().child('dermatologos').push().key;
                var _cmp = document.getElementById('txtCMP').value.toString();
                var _nombres = document.getElementById('txtNombres').value.toString();
                var _apelllidos = document.getElementById('txtApellidos').value.toString();
                var _hospital = document.getElementById('txtHospital').value.toString();
                var _telefono = document.getElementById('txtTeléfono').value.toString();
                var _email = document.getElementById('txtEmail').value.toString();
                var _usuario = document.getElementById('txtUsuario').value.toString();
                var _clave = document.getElementById('txtClave').value.toString();
                
                var data = {
                    cmp: _cmp,
                    nombre: _nombres,
                    apellidos: _apelllidos,
                    hospital: _hospital,
                    telefono: _telefono,
                    email: _email,
                    usuario: _usuario,
                    clave: _clave
                };
                
                db.collection("dermatologos").doc(_email).set(data);
                
//                db.collection("dermatologos").doc(_email.toString()).set(data)
//                .then(function(){
//                    console.log("Document written");
//                })
//                .catch(function(error){
//                    console.error("Error adding document: ", error);
//                });
                console.log(_email);
//                var updates = {};
//                updates['/dermatologos/' + id] = data;
//                firebase.database().ref().update(updates);
                
                window.location.reload();
            };



