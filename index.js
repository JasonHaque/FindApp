firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("sign_up").style.display = "none";
    document.getElementById("searchDiv").style.display="none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("sign_up").style.display = "none";
    document.getElementById("searchDiv").style.display="none";
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function signupview(){
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("sign_up").style.display = "block";
  document.getElementById("searchDiv").style.display="none";
}

function loginview(){
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
  document.getElementById("sign_up").style.display = "none";
  document.getElementById("searchDiv").style.display="none";
}
function logout(){
  firebase.auth().signOut();
}

function signUp(){
  var userEmail = document.getElementById("sign_email_field").value;
  var userPass = document.getElementById("sign_password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function searchview(){
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("sign_up").style.display = "none";
  document.getElementById("searchDiv").style.display="block";
}

function search(){
  var db=firebase.firestore();
  para = document.getElementById("App_rating");
  search_term = document.getElementById("search_field").value;
  db.collection('App').where("Name", "==", search_term).get().
  then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        var dat = doc.data();
        console.log(dat.Rating);
        para.innerHTML="App Name "+doc.id +"<br> App Info: "+dat.Review+" <br> Rating----->"+dat.Rating;
    });
});
}

function userView(){
  document.getElementById("user_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("sign_up").style.display = "none";
  document.getElementById("searchDiv").style.display="none";
  para = document.getElementById("App_rating");
  para.innerHTML="";
}
