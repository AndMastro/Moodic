
/*Server functions*/

function initLocalStorage(){
	localStorage.clear();
	localStorage.setItem("users", "[]");
	localStorage.setItem("currentUser","");
	localStorage.setItem("currentSong","");
	var moods = ["angry", "happy", "relaxed", "sad", "weird","xmas"];
	localStorage.setItem("moods", JSON.stringify(moods));

	var sadSong1 = {
			title: "Universe In A Crayon",
			artist: "David Maxim Micic",
			url: "songs/sad/sad1.wav",
			cover: "images/covers/sad/sad1.jpg",
			lyrics: "lyrics/sad/sad1.htm"
	};

	var sadSong2 = {
			title: "The Curse Of The Sad Mummy",
			artist: "League of Legends OST",
			url: "songs/sad/sad2.wav",
			cover: "images/covers/sad/sad2.jpg",
			lyrics: "lyrics/sad/sad2.htm"
	};

	var sadSong3 = {
			title: "Obstacles",
			artist: "Syd Matters",
			url: "songs/sad/sad3.wav",
			cover: "images/covers/sad/sad3.jpg",
			lyrics: "lyrics/sad/sad3.htm"
	};

	var happySong1 = {
			title: "Ain't It Fun",
			artist: "Paramore",
			url: "songs/happy/happy1.wav",
			cover: "images/covers/happy/happy1.png",
			lyrics: "lyrics/happy/happy1.htm"
	};

	var happySong2 = {
			title: "Happy",
			artist: "Pharrell Williams",
			url: "songs/happy/happy2.wav",
			cover: "images/covers/happy/happy2.jpg",
			lyrics: "lyrics/happy/happy2.htm"
	};

	var happySong3 = {
			title: "Walking on Sunshine",
			artist: "Katrina & The Waves",
			url: "songs/happy/happy3.wav",
			cover: "images/covers/happy/happy3.jpg",
			lyrics: "lyrics/happy/happy3.htm"
	};

	var angrySong1 = {
			title: "MAKE TOTAL DESTROY",
			artist: "Periphery",
			url: "songs/angry/angry1.wav",
			cover: "images/covers/angry/angry1.jpg",
			lyrics: "lyrics/angry/angry1.htm"
	};

	var angrySong2 = {
			title: "Totla Mad",
			artist: "Periphery",
			url: "songs/angry/angry2.wav",
			cover: "images/covers/angry/angry2.png",
			lyrics: "lyrics/angry/angry2.htm"
	};

	var angrySong3 = {
			title: "The Uncollective",
			artist: "Monuments",
			url: "songs/angry/angry3.wav",
			cover: "images/covers/angry/angry3.jpg",
			lyrics: "lyrics/angry/angry3.htm"
	};

	var relaxedSong1 = {
			title: "Same Destiny",
			artist: "KISNOU",
			url: "songs/relaxed/relaxed1.wav",
			cover: "images/covers/relaxed/relaxed1.jpg",
			lyrics: "lyrics/relaxed/relaxed1.htm"
	};

	var relaxedSong1 = {
			title: "Same Destiny",
			artist: "KISNOU",
			url: "songs/relaxed/relaxed1.wav",
			cover: "images/covers/relaxed/relaxed1.jpg",
			lyrics: "lyrics/relaxed/relaxed1.htm"
	};

	var relaxedSong2 = {
			title: "Frozen Tides",
			artist: "Electus & Michael St Laurent",
			url: "songs/relaxed/relaxed2.wav",
			cover: "images/covers/relaxed/relaxed2.jpeg",
			lyrics: "lyrics/relaxed/relaxed2.htm"
	};

	var relaxedSong3 = {
			title: "Waiting for you",
			artist: "Jacoo",
			url: "songs/relaxed/relaxed3.wav",
			cover: "images/covers/relaxed/relaxed3.jpeg",
			lyrics: "lyrics/relaxed/relaxed3.htm"
	};

	var weirdSong1 = {
			title: "Damaged Wig",
			artist: "Igorrr",
			url: "songs/weird/weird1.wav",
			cover: "images/covers/weird/weird1.jpg",
			lyrics: "lyrics/weird/weird1.htm"
	};

	var weirdSong2 = {
			title: "Child Protective Services Theme Song",
			artist: "Nero's Day At Disneyland",
			url: "songs/weird/weird2.wav",
			cover: "images/covers/weird/weird2.jpg",
			lyrics: "lyrics/weird/weird2.htm"
	};

	var weirdSong3 = {
			title: "Barbecue",
			artist: "Igorrr & Ruby My Dear",
			url: "songs/weird/weird3.wav",
			cover: "images/covers/weird/weird3.jpeg",
			lyrics: "lyrics/weird/weird3.htm"
	};

	var xmasSong1 = {
			title: "Jingle Bell Rock",
			artist: "Glee",
			url: "songs/xmas/xmas1.wav",
			cover: "images/covers/xmas/xmas1.jpg",
			lyrics: "lyrics/xmas/xmas1.htm"
	};

	var xmasSong2 = {
			title: "Last Christmas",
			artist: "WHAM!",
			url: "songs/xmas/xmas2.wav",
			cover: "images/covers/xmas/xmas2.jpg",
			lyrics: "lyrics/xmas/xmas2.htm"
	};

	var xmasSong3 = {
			title: "All I Want for Christmas is You",
			artist: "Mariah Carey",
			url: "songs/xmas/xmas3.wav",
			cover: "images/covers/xmas/xmas3.jpg",
			lyrics: "lyrics/xmas/xmas3.htm"
	};

	var xmasSong4 = {
			title: "Shake Up Christmas",
			artist: "Train",
			url: "songs/xmas/xmas4.wav",
			cover: "images/covers/xmas/xmas4.jpg",
			lyrics: "lyrics/xmas/xmas4.htm"
	};

	localStorage.setItem("sad", JSON.stringify([sadSong1,sadSong2,sadSong3]));
	localStorage.setItem("happy", JSON.stringify([happySong1,happySong2,happySong3]));
	localStorage.setItem("angry", JSON.stringify([angrySong1,angrySong2,angrySong3]));
	localStorage.setItem("relaxed", JSON.stringify([relaxedSong1,relaxedSong2,relaxedSong3]));
	localStorage.setItem("weird", JSON.stringify([weirdSong1,weirdSong2,weirdSong3]));
	localStorage.setItem("xmas", JSON.stringify([xmasSong1,xmasSong2,xmasSong3, xmasSong4]));

}

function printDB(){
	var s = "<br>";
	var users = JSON.parse(localStorage.getItem("users"));
	s += "<table>";
	s += "<tr>";
	s += "<th>First Name</th>";
	s += "<th>Last Name</th>";
	s += "<th>Username</th>";
	s += "<th>Password</th>";
	s += "<th>Birth Day</th>";
	s += "<th>Birth Month</th>";
	s += "<th>Birth Year</th>";
	s += "<th>Mail</th>";
	s += "<th>Tel</th>";
	s += "</tr>";
	for(var i = 0; i < users.length; i++){
		s += "<tr>";
		var elem = users[i];
		for (var property in elem) {
	    	if (elem.hasOwnProperty(property)) {
	        	s += "<td>" + elem[property] + "</td>";
	   	 	}
		}
		s += "</tr>";
	}
	s += "</table>"
	document.getElementById("dbArea").innerHTML = s;
}

function printSongs(){
	var s = "";
	var moods = JSON.parse(localStorage.getItem("moods"));

	for (var i = 0; i < moods.length; i++){
		s += "<h2>" + moods[i] + "</h2>";
		s += "<table>";
		s += "<tr>";
		s += "<th>Title</th>";
		s += "<th>Artist</th>";
		s += "<th>URL</th>";
		s += "<th>Cover</th>";
		s += "<th>Lyrics</th>";

		var tracks = JSON.parse(localStorage.getItem(moods[i]));
		for (var j = 0; j < tracks.length; j++){
			s += "<tr>";
			var elem = tracks[j];
			for (var property in elem) {
		    	if (elem.hasOwnProperty(property)) {
		        	s += "<td>" + elem[property] + "</td>";
		   	 	}
			}
			s += "</tr>";
		}
		s += "</table> <br>";
	}

	document.getElementById("dbArea").innerHTML = s;
}



/*Client functions*/

//User functions

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
		alert("Invalid password. Password must contain at least 6 characters, 1 capital letter, 1 number and 1 special symbol");
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

function verifyPassword(){
	var pass = document.sign_up_form.password.value;
	if (pass.match(/[A-Z]/) != null && pass.match(/[!"£$%&/()=@#_-]/) != null && pass.match(/[0-9]/) != null) return true;
	return false;
}

function verifyConfirmPassword(){
	var pass = document.sign_up_form.password.value;
	var conf = document.sign_up_form.confirm_password.value;
	return (pass == conf);
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

function checkCredentials(){
	var login_user = document.sign_in.username.value;
	var login_pass = document.sign_in.password.value;
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

function logout(){
	localStorage.setItem("currentUser", "");
	window.location="homepage.html";
}




//Song functions

var rnd;
var songs;
var riprod;

function playSong(mood){
	songs = JSON.parse(localStorage.getItem(mood));
	rnd = Math.floor(songs.length*Math.random());
	var song = songs[rnd];
	localStorage.currentSong = JSON.stringify(song);
	riprod = new Audio(song.url);
	riprod.play();
	riprod.onended = function(){
    	playNext();
	};
}

function playNext(){
	var newSong = songs[(++rnd)%songs.length];
	localStorage.currentSong = JSON.stringify(newSong);
	var coverPath = newSong.cover;
	var artist = newSong.artist;
	var title = newSong.title;
	var lyricsPath = newSong.lyrics;
	riprod.pause();
	riprod = new Audio(newSong.url);
	riprod.play();
	if($(".showDetails").html() == "Hide details"){
		$(".divDetails").fadeOut("slow",function(){
			//$(".divDetails").hide();
			$(".divDetails").html("<img src="+coverPath+" class='cover'></img><div class='authorName'>"+artist+"</div><div class='songTitle'>"+title+"</div><div class='downloadSong'><a class='downloadLink' href='"+newSong.url+"' download='"+title+" - "+artist+".wav'>Download song</a></div>");
			$(".divDetails").fadeIn("slow");
		});
	}
	else {
		$(".divDetails").html("<img src="+coverPath+" class='cover'></img><div class='authorName'>"+artist+"</div><div class='songTitle'>"+title+"</div><div class='downloadSong'><a class='downloadLink' href='"+newSong.url+"' download='"+title+" - "+artist+".wav'>Download song</a></div>");
	}
	if($(".showLyrics").html() == "Hide lyrics"){
		$(".divLyrics").fadeOut("slow",function(){
			//$(".divLyrics").hide();
			$(".divLyrics").load(lyricsPath, function(responseTxt, statusTxt, xhr){
				//if(statusTxt == "success") alert("Caricamento terminato");
				if(statusTxt == "error") alert("Error. Cannot load lyrics. " + xhr.status + ":" + xhr.statusText);
			});
			$(".divLyrics").fadeIn("slow");
		});
	}
	else {
		$(".divLyrics").load(lyricsPath, function(responseTxt, statusTxt, xhr){
			//if(statusTxt == "success") alert("Caricamento terminato");
			if(statusTxt == "error") $(".divLyrics").html("Error. Cannot load lyrics. " + xhr.status + ":" + xhr.statusText);
		});
	}
	$(".playButton").html("Pause");
	riprod.onended = function(){
    	playNext();
	};
}



//JQuery functions

$(document).ready(function(){

	if(localStorage.getItem("currentUser") != ""){
		$(".userArea").css("visibility","visible");
		$(".homeLogged").attr("href","songpage.html");
		$(".usernameArea").html("Welcome, " + JSON.parse(localStorage.getItem("currentUser")).username);
	}

	$(".playButton").click(function(){
		if($(this).html() == "Pause"){
			riprod.pause();
			$(this).html("Resume");
		} else {
			riprod.play();
			$(this).html("Pause");
		}
	});

	$(".showLyrics").click(function() {
		if($(this).html() == "Show lyrics"){
			$(this).html("Hide lyrics");
			$(".divDetails").animate({right: "30%"},"slow");
			var song = JSON.parse(localStorage.getItem("currentSong"));
			var lyricsPath = song.lyrics;
			$(".divLyrics").hide(); //per evitare la comparsa immediata del testo la prima volta
			if($(".divLyrics").html() == "") {
				$(".divLyrics").load(lyricsPath, function(responseTxt, statusTxt, xhr){
					//if(statusTxt == "success") alert("Caricamento terminato");
					if(statusTxt == "error") $(".divLyrics").html("Error. Cannot load lyrics. " + xhr.status + ":" + xhr.statusText);
				});
			}
			$(".divLyrics").css("visibility","visible");
			$(".divLyrics").fadeIn();
		} else {
			$(this).html("Show lyrics");
			$(".divLyrics").fadeOut();
			$(".divDetails").animate({right: "50%"},"slow");
		}
	});

	$(".showDetails").click(function() {
		if($(this).html() == "Show details"){
			$(this).html("Hide details");
			$(".divLyrics").animate({left: "28%"},"slow");
			var song = JSON.parse(localStorage.getItem("currentSong"));
			var coverPath = song.cover;
			var artist = song.artist;
			var title = song.title;
			$(".divDetails").hide(); //per evitare la comparsa immediata del testo la prima volta
			$(".divDetails").html("<img src="+coverPath+" class='cover'></img><div class='authorName'>"+artist+"</div><div class='songTitle'>"+title+"</div><div class='downloadSong'><a class='downloadLink' href='"+song.url+"' download='"+title+" - "+artist+".wav'>Download song</a></div>");
			$(".divDetails").css("visibility","visible");
			$(".divDetails").fadeIn();
		} else {
			$(this).html("Show details");
			$(".divDetails").fadeOut();
			$(".divLyrics").animate({left: "50%"},"slow");
		}

	});

	$(".nextButton").click(playNext);
});
