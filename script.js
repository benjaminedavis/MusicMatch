
var albumImages = ["https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
                  "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/d/d4/We_sweat_blood.gif",
                  "https://upload.wikimedia.org/wikipedia/en/6/67/Dj_SIE_btr96_sm.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/b/ba/Red_Fang-Red_Fang.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/3/3f/Spoon_Gimme_Fiction.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/c/ca/Secretmachinesnowhereisnowhere.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/b/ba/The_Hold_Steady_-_Separation_Sunday_cover.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/d/d4/Lovebox_cover.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/8/80/Feed_the_Animals.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
                  "https://upload.wikimedia.org/wikipedia/en/5/5c/Licensed_to_ill.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/0/07/BeastieBoysPaul%27sBoutique.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/0/09/Uncut_Dope.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/8/80/Len_-_You_Can%27t_Stop_The_Bum_Rush_Album_300px.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Death_From_Above_The_Physical_World_album_art.jpg/1280px-Death_From_Above_The_Physical_World_album_art.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/7/7f/SmashingPumpkins-Gish.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/4/4c/Chicago_-_Chicago_VI.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/3/3e/UFO_album_Phenomenon.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png",
                  "https://upload.wikimedia.org/wikipedia/en/7/7d/Turbonegro-ApocalypseDudes.jpg",
                  "https://upload.wikimedia.org/wikipedia/en/7/79/King_of_the_Road_%28album%29.jpg",];

var songFiles = ["https://www.youtube.com/watch?v=-crgQGdpZR0",
                 "https://www.youtube.com/watch?v=3fIqq5XVFKQ",
                 "https://www.youtube.com/watch?v=mrZRURcb1cM",
                 "https://www.youtube.com/watch?v=XTUi9l84fRw",
                 "https://www.youtube.com/watch?v=gREtMOpY2u8",
                 "https://www.youtube.com/watch?v=l9vVlZ978kU",
                 "https://www.youtube.com/watch?v=G6gQrCVHbv4",
                 "https://www.youtube.com/watch?v=OUpP02enWgU",
                 "https://www.youtube.com/watch?v=GV__2dftHmQ",
                 "https://www.youtube.com/watch?v=QFx5tP8JdPI",
                 "https://www.youtube.com/watch?v=Vh6qu9cAGf4",
                 "https://www.youtube.com/watch?v=324darD4SRs",
                 "https://www.youtube.com/watch?v=p3vovAWG5MM",
                 "https://www.youtube.com/watch?v=gqwuGTOs1jo",
                 "https://www.youtube.com/watch?v=07Y0cy-nvAg",
                 "https://www.youtube.com/watch?v=xhlX1Piko1o",
                 "https://www.youtube.com/watch?v=6IJCFc_qkHw",
                 "https://www.youtube.com/watch?v=E1fzJ_AYajA",
                 "https://www.youtube.com/watch?v=qCGbfjuG5dA",
                 "https://www.youtube.com/watch?v=qTrIrqoZu-A",
                 "https://www.youtube.com/watch?v=4PvN7ujfj2w",
                 "https://www.youtube.com/watch?v=aP5ikQpTR3c",
                 "https://www.youtube.com/watch?v=zo-x4PU8S6g",
                 "https://www.youtube.com/watch?v=Y7Z85NkN6v0",
                 "https://www.youtube.com/watch?v=_Zko7pBeHkk",];

function shuffleAlbum(){
        var randomNumber = Math.floor(Math.random()*25);
        var url = albumImages[randomNumber];
        return url;
    };

function shuffleSong(){
         var randomNumber = Math.floor(Math.random()*25);
         var url = songFiles[randomNumber];
         return url;
    };

var albumPos1 = document.querySelector("#album1");
var albumPos2 = document.querySelector("#album2");
var albumPos3 = document.querySelector("#album3");
var albumPos4 = document.querySelector("#album4");
var startButton = document.querySelector("#startbutton");

startButton.addEventListener('click', function(){

  for (i=o;i<3;i++){
    albumArray.push(shuffleAlbum());
  }

  function checkDupeAlbum(){
  var albumArray = [];
    if(  !=== )
    albumPos1.setAttribute("src", albumArray[0]);
    albumPos2.setAttribute("src", albumArray[1]);
    albumPos3.setAttribute("src", albumArray[2]);
    albumPos4.setAttribute("src", albumArray[3]);
  });
}


// function hideInstructions();
// function hideStartButton();
// function startSong();
// function selectImage();
// function displayCorrectWrong();
// function logPoint();
// function showPlayAgain();

var roundCounter = 1; //might need to start at 0
var playerCount = 1;
var player1Score = 0;
var player2Score = 0;
var gameOver = false;

function getWinner() {
  if (gameOver === true && player1Score > player2Score){
  document.write("<p class='showscore'>Player 1 Wins!</p>");
}   else if (gameOver === true && player2Score > player1Score){
  document.write("<p class='showscore'>Player 2 Wins!</p>");
}   else if (gameOver === true){
    document.write("<p class='showscore'>It's A Tie!</p>");
  }
};
getWinner();
