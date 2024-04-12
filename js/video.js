var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to '+ video.autoplay);
	console.log('loop is set to '+ video.loop);

});



var video = document.querySelector("#player1");

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
});

var video = document.querySelector("#player1");
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

 });

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime - video.duration < 10){
		video.currentTime = 0;
		console.log("Current time is " + video.currentTime);
	}
	else{
		video.currentTime += 10;
		console.log("Current time is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		console.log("Unmuted");
	}
	else{
		video.muted = true;
		console.log("Muted");
	}
});