

//navbar JavaScript
      function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//      end of navbar JavaScript

var music = document.getElementById('music'); // id for audio element
var pButton = document.getElementById('pButton'); // play button


// play button event listenter
pButton.addEventListener("click", play);


//Play and Pause image change
function play() {
		// start music
		if (music.paused) {
			music.play();
			// remove play, add pause
			pButton.className = "";
			pButton.className = "pause";
//			healthCheckerInterval = setInterval(healthChecker,100);
		} else { // pause music
			music.pause();
			// remove pause, add play
			pButton.className = "";
			pButton.className = "play";
			clearInterval(healthCheckerInterval);
		}
	}
var volumeSlider;

  
volumeSlider = document.getElementById("volume-slider");    



      
volumeSlider.addEventListener("mousemove", setVolume)     
      
function setVolume() {
    music.volume = volumeSlider.value / 100
}      
      

      
      
// Get Track Info


	updateInfo();
	setInterval(updateInfo, 10000);

	function updateInfo() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				info = JSON.parse(this.responseText);
				document.getElementById('artist').innerHTML = titleCase(info.artist);
				document.getElementById('song-title').innerHTML = titleCase(info.title);

			}
		};
		xhttp.open("GET", "http://3.18.101.247/status", true);
		xhttp.send();      
	}

      
//   -----------  Change Volume Images ---------
  var val = document.getElementById("volume-slider").value;
      
      
      
function changeVolumeIcon() {
if (document.getElementById("volume-slider").value == 0) {
    document.getElementById("volume-icon").src = "img/volume0.png"
    } else if (0 < document.getElementById("volume-slider").value && document.getElementById("volume-slider").value < 25) {
    document.getElementById("volume-icon").src = "img/volume1.png"
    } else if ( 25 <= document.getElementById("volume-slider").value && document.getElementById("volume-slider").value < 50) {
    document.getElementById("volume-icon").src = "img/volume1.png" 
    } else if ( 50 <= document.getElementById("volume-slider").value && document.getElementById("volume-slider").value < 100) {
    document.getElementById("volume-icon").src = "img/volume2.png" 
    } else if (document.getElementById("volume-slider").value == 100) {
    document.getElementById("volume-icon").src = "img/volume3.png"
    }
}


 
// Title Case Function 
      
function titleCase(title) {


var minorWords = ['a','an','and','as','at','but','by','en','for','if','in','nor','of','on','or','per','the','to','v.','vs.','via', 'is'];
    
var lowerCaseArr = title.toLowerCase().split(' ');
      
  for (var i = 0; i < lowerCaseArr.length; i++) {
    if (minorWords.includes(lowerCaseArr[i]) == false) {
    lowerCaseArr[i] = lowerCaseArr[i].charAt(0).toUpperCase() + lowerCaseArr[i].slice(1); 
    }
  }
  var joinedSentence = lowerCaseArr.join(' ');
  return joinedSentence.charAt(0).toUpperCase() + joinedSentence.slice(1);
};

console.log(titleCase("yo moma is a ho"));
      
//Hamburger

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
       if (this.classList.contains('is-active')){
      openNav();
    } else {
      closeNav();
    }
  });

// About Overlay

function openOverlay() {
  document.getElementById("myNav").style.height = "100%";
}

function closeOverlay() {
  document.getElementById("myNav").style.height = "0%";
}

//Selectors Overlay
 function openOverlay2() {
  document.getElementById("myNav2").style.height = "100%";
}

function closeOverlay2() {
  document.getElementById("myNav2").style.height = "0%";
}   

// AI
	function healthChecker(){
		if(music.paused){
			music.load();
			music.play();
			console.log("I had to do smth!");
		}
	}



function positiveReinforcemnt(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	}
	xhttp.open("GET", "http://18.217.169.216:3000/reinforce", true);
	xhttp.send();      

}

setInterval(positiveReinforcemnt, 60000);

function negativeReinforcemnt(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	}
	xhttp.open("GET", "http://18.217.169.216:3000/negative-reinforce", true);
	xhttp.send();      

}

window.onbeforeunload = function(){
	negativeReinforcemnt();
}
      