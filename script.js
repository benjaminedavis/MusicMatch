var song1Id = https://www.youtube.com/watch?v=-crgQGdpZR0;
var album1Id = https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg;

var song2Id = https://www.youtube.com/watch?v=3fIqq5XVFKQ;
var album2Id = https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg;

var song3Id = https://www.youtube.com/watch?v=mrZRURcb1cM;
var album3Id = https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG;

var song4Id = https://www.youtube.com/watch?v=XTUi9l84fRw;
var album4Id = https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg;

var albumpos1 = document.querySelector("#album1");
var albumpos2 = document.querySelector("#album2");
var albumpos3 = document.querySelector("#album3");
var albumpos4 = document.querySelector("#album4");

var startbutton = document.querySelector("#startbutton");

var roundCounter = 1;
var playerCount = 1;
var playerScore1 = 0;
var playerScore2 = 0;

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "You won!";
// });
// function hideInstructions();
// function hideStartButton();
// function startSong();

document.getElementsById('album1').addEventListener('click', function selectAlbum);

selectAlbum(){

}

document.getElementById('startbutton').addEventListener('click', function playSong);

playSong(){

}


function getWinner() {
  if (player1Score > player2Score){
  console.log("Player 1 Wins!");
}   else if (player2Score > player1Score){
  console.log("Player 2 Wins!");
}   else {
    console.log(It's A Tie!);
  }
}
