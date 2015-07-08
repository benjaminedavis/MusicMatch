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

function shuffleAlbum(){
        var randomNumber = Math.floor(Math.random()*25);
        var randomAlbum = albumImages[randomNumber];
        return randomAlbum;
   };

var albumPos1 = document.querySelector("#album1");
var albumPos2 = document.querySelector("#album2");
var albumPos3 = document.querySelector("#album3");
var albumPos4 = document.querySelector("#album4");

var startButton = document.querySelector("#startbutton");
var albumArray = [];

startButton.addEventListener('click', function(){
  createRandomAlbumArray();
  console.log(albumArray);
  if ((albumArray[0] != albumArray[1]) && (albumArray[1] != albumArray[2]) &&
  (albumArray[2] != albumArray[3])){
    albumPos1.setAttribute("src", albumArray[0]);
    albumPos2.setAttribute("src", albumArray[1]);
    albumPos3.setAttribute("src", albumArray[2]);
    albumPos4.setAttribute("src", albumArray[3]);
}else{
  albumArray = [];
  createRandomAlbumArray();
}
});

function createRandomAlbumArray(){

      for (var i=0; i<=3 ;i++){
        albumArray.push(shuffleAlbum());
      };

};



var songFiles = ["audio/Death Grips - Get Got.mp3",
                 "audio/Death Grips - Guillotine.mp3",
                 "audio/Death Grips - I've Seen Footage.mp3",
                 "audio/Death Grips - Takyon (Death Yon).mp3",
                 "audio/Death Grips - The Fever (Aye Aye).mp3",];

function shuffleSong(){
         var randomNumber = Math.floor(Math.random()*5);
         var randomSong = songFiles[randomNumber];
         return randomSong;
    };

var songPlay = document.querySelector("#audioplayer");



var roundCount = 1;
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
