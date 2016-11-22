function openSignUp(){
	window.location="signup.html";
	return true;
}

function openSignIn(){
	window.location="signin.html";
	return false;
}

function openSongPage(){
	window.location="songpage.html";
	return false;
}

function openMoodPage(){
	window.location = document.moods_form.moods.value + "Page.html";
	return false;
}

function verifySignUp(){
	if(!verifyPassword()){
		alert("Invalid password. Password must contain at least 6 characters, 1 capital letter and 1 special symbol");
		return false;
	}
	if(!verifyConfirmPassword()){
		alert("Password confirmation does not match");
		return false;
	}
	if(!verifyDate()){
		alert("Invalid date");
		return false;
	}
	if(!verifyAge()){
		alert("You must be 18+ to sign up");
		return false;
	}
	if(!verifyCaptcha()){
		alert("Incorrect captcha");
		return false;
	}
		
	var ret = createUser();
	if(ret != "ok"){
		if(ret == "Username") alert(ret + " aready taken");
		if(ret == "Email") alert(ret + " already used");
		return false;
	}
	alert("Successfully subscribed!");
	return openSignIn();
}


function verifyDate(){
	var month = document.sign_up_form.month.value;
	var day = parseInt(document.sign_up_form.day.value);
	var year = parseInt(document.sign_up_form.year.value);
	if(["november","april","june","september"].indexOf(month) >= 0 && day > 30) return false;
	else if(month == "february"){
		if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			if (day > 29) return false;
		}
		else {
			if (day > 28) return false;
		}	
	}
	return true;	
}

function verifyPassword(){
	var pass = document.sign_up_form.password.value;
	if (pass.match(/[A-Z]/) != null && pass.match(/[!"£$%&/()=@#_-]/) != null) return true;
	return false;
}

function verifyConfirmPassword(){
	var pass = document.sign_up_form.password.value;
	var conf = document.sign_up_form.confirm_password.value;
	return (pass == conf);
}

function verifyCaptcha(){
	var cap = document.sign_up_form.captcha.value;
	return (cap.toLowerCase() == "v4xbg");
}

function verifyAge(){
	var today = new Date();
	
	var month = document.sign_up_form.month.value;
	var day = document.sign_up_form.day.value;
	var year = document.sign_up_form.year.value;
	var birthDate = new Date(month +  " " + day + ", " + year);
	
	var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return (age >= 18);   
}

function createUser(){
	var f = document.sign_up_form.first_name.value;
	var l = document.sign_up_form.last_name.value;
	var u = document.sign_up_form.username.value;
	var p = document.sign_up_form.password.value;
	var d = document.sign_up_form.day.value;
	var m = document.sign_up_form.month.value;
	var y = document.sign_up_form.year.value;
	var e = document.sign_up_form.email.value;
	var t = document.sign_up_form.tel.value;
	var user = {
			firstName: f,
			lastName: l,
			username: u,
			password: p,
			day: d,
			month: m,
			year: y,
			email: e,
			tel: t 
			};
	return checkUser(user);
}

function initLocalStorage(){
	localStorage.clear();
	localStorage.setItem("users", "[]");
	
	var sadSong1 = {
			title: "Universe in a Crayon",
			artist: "David Maxim Micic",
			url: "songs/sad/sad1.ogg",
			cover: "images/covers/sad/sad1.png"
	};
	
	var sadSong2 = {
			title: "Universe in a Crayon",
			artist: "David Maxim Micic",
			url: "songs/sad/sad2.ogg",
			cover: "images/covers/sad/sad2.png"
	};
	
	var sadSong3 = {
			title: "Universe in a Crayon",
			artist: "David Maxim Micic",
			url: "songs/sad/sad3.ogg",
			cover: "images/covers/sad/sad3.png"
	};
	
	localStorage.setItem("sad", JSON.stringify([sadSong1,sadSong2,sadSong3]));
}

function checkUser(user){
	var user_username = user.username;
	var user_email = user.email;
	
	var other_users = JSON.parse(localStorage.getItem("users"));
	for(var i = 0; i < other_users.length; i++){
		if(other_users[i].username == user_username) return "Username";
		if(other_users[i].email == user_email) return "Email";
	}
	other_users.push(user);
	localStorage.setItem("users", JSON.stringify(other_users));
	
	return "ok";
}

function printDB(){


	//for(var i in localStorage) {
	//    console.log(i + ' = ' + localStorage[i]);
	//}


	//typeof(Storage != undefined)
	var s = "";
	var users = JSON.parse(localStorage.getItem("users"));
	for(var i = 0; i < users.length; i++) s += JSON.stringify(users[i]) + "<BR>";
	document.getElementById("utenti").innerHTML = s;
}

function printSongs(){


	//for(var i in localStorage) {
	//    console.log(i + ' = ' + localStorage[i]);
	//}


	//typeof(Storage != undefined)
	var s = "";
	var users = JSON.parse(localStorage.getItem("sad"));
	for(var i = 0; i < users.length; i++) s += JSON.stringify(users[i]) + "<BR>";
	document.getElementById("utenti").innerHTML = s;
}

function checkCredentials(){
	var login_user = document.sign_in.username.value;
	//alert()
	var login_pass = document.sign_in.password.value;
	//alert(login_pass);
	var users = JSON.parse(localStorage.getItem("users"));
	for(var i = 0; i < users.length; i++){
		if(users[i].username == login_user && users[i].password == login_pass){
			localStorage.setItem("currentUser", JSON.stringify(users[i]));
			return openSongPage();
		}
	}
	alert("Invalid credentials");
	return false;
}

function playSong(mood){
	var songs = JSON.parse(localStorage.getItem(mood));
	var rnd = Math.floor(3*Math.random());
	var song = songs[rnd];
	var riprod = new Audio(song.url);
	riprod.play();
}
