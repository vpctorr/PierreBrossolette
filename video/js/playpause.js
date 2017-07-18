function vidplay() {
	var video = document.getElementById("pierrebrossolettevideo");
	var button = document.getElementById("playbtn");
	if (video.paused) {
		video.play();
		button.innerHTML = '<img src="img/icons/pause.png" alt="Pause"/>';
	} else {
		video.pause();
		button.innerHTML = '<img src="img/icons/play.png" alt="Play"/>';
	}
}

function restart() {
	var video = document.getElementById("pierrebrossolettevideo");
	var button = document.getElementById("playbtn");
	video.currentTime = 0;
	if (video.paused) {
		video.play();
	}
	button.innerHTML = '<img src="img/icons/pause.png" alt="Pause"/>';
}