var album1 = document.querySelector("#album1");
var album2 = document.querySelector("#album2");
var album3 = document.querySelector("#album3");
var album4 = document.querySelector("#album4");

var startbutton = document.querySelector("#startbutton");

var roundCounter = 1;

var playerCount = 1;

var playerScore1 = 0;
var playerScore2 = 0;


document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "You won!";
});



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
};
