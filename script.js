
var randomAlbumandSongs = [];//this will be an array of randomly selected objects

var allObjects = {
  selections: [
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg",
      songs:["audio/Death Grips - Get Got.mp3"],
      artist: 'ABBA'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      songs:["audio/Death Grips - Guillotine.mp3"],
      artist: 'Nirvana'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      songs:["audio/Death Grips - Ive Seen Footage.mp3"],
      artist: 'Fleetwood Mac'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
      songs:["audio/Death Grips - Takyon (Death Yon).mp3"],
      artist: 'The Beatles'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/d/d4/We_sweat_blood.gif",
      songs:["audio/Death Grips - The Fever (Aye Aye).mp3"],
      artist: 'Danko Jones'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Dj_SIE_btr96_sm.jpg",
      songs:["audio/Death Grips - Get Got.mp3"],
      artist: 'Danko Jones'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Red_Fang-Red_Fang.jpg",
      songs:["audio/Death Grips - Guillotine.mp3"],
      artist: 'Red Fang'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/3/3f/Spoon_Gimme_Fiction.jpg",
      songs:["audio/Death Grips - Ive Seen Footage.mp3"],
      artist: 'Spoon'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/c/ca/Secretmachinesnowhereisnowhere.jpg",
      songs:["audio/Death Grips - Takyon (Death Yon).mp3"],
      artist: 'Secret Machines'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/The_Hold_Steady_-_Separation_Sunday_cover.jpg",
      songs:["audio/Death Grips - The Fever (Aye Aye).mp3"],
      artist: 'The Hold Steady'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/d/d4/Lovebox_cover.jpg",
      songs:["audio/Death Grips - Get Got.mp3"],
      artist: 'Groove Armada'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg",
      songs:["audio/Death Grips - Guillotine.mp3"],
      artist: 'Foo Fighters'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/8/80/Feed_the_Animals.jpg",
      songs:["audio/Death Grips - Ive Seen Footage.mp3"],
      artist: 'Girl Talk'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
      songs:["audio/Death Grips - Takyon (Death Yon).mp3"],
      artist: 'AC DC'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Licensed_to_ill.jpg",
      songs:["audio/Death Grips - The Fever (Aye Aye).mp3"],
      artist: 'Beastie Boys'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/07/BeastieBoysPaul%27sBoutique.jpg",
      songs:["audio/Death Grips - Get Got.mp3"],
      artist: 'Beastie Boys'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/09/Uncut_Dope.jpg",
      songs:["audio/Death Grips - Guillotine.mp3"],
      artist: 'Geto Boys'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/8/80/Len_-_You_Can%27t_Stop_The_Bum_Rush_Album_300px.jpg",
      songs:["audio/Death Grips - Ive Seen Footage.mp3"],
      artist: 'LEN'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Death_From_Above_The_Physical_World_album_art.jpg/1280px-Death_From_Above_The_Physical_World_album_art.jpg",
      songs:["audio/Death Grips - Takyon (Death Yon).mp3"],
      artist: 'Death From Above 1979'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/7f/SmashingPumpkins-Gish.jpg",
      songs:["audio/Death Grips - The Fever (Aye Aye).mp3"],
      artist: 'Smashing Pumpkins'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/4/4c/Chicago_-_Chicago_VI.jpg",
      songs:["audio/Death Grips - Get Got.mp3"],
      artist: 'Chicago'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/UFO_album_Phenomenon.jpg",
      songs:["audio/Death Grips - Guillotine.mp3"],
      artist: 'UFO'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png",
      songs:["audio/Death Grips - Ive Seen Footage.mp3"],
      artist: 'Weezer'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/Turbonegro-ApocalypseDudes.jpg",
      songs:["audio/Death Grips - Takyon (Death Yon).mp3"],
      artist: 'Turbonegro'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/79/King_of_the_Road_%28album%29.jpg",
      songs:["audio/Death Grips - The Fever (Aye Aye).mp3"],
      artist: 'Fu Manchu'
    }
  ]
};

function shuffleAlbum(){
        var randomNumber = Math.floor(Math.random()*25);
        var randomAlbum = allObjects.selections[randomNumber].albumImage;
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
});

function createRandomAlbumArray(){
      var allAlbumImages = [];
      for(var i = 0;i<allObjects.selections.length;i+=1){
        allAlbumImages.push(allObjects.selections[i])
}
      console.log(allAlbumImages);
      console.log("The number of album imgs: " + allAlbumImages.length);

      //research how to shuffle an array in javascript
      //after you shuffle you can just take whatever 4 elements
      //from the array. everytime you shuffle you're guaranteed
      //to get a new order

      return allAlbumImages;//returns all images regardless of length
};

// for(var i=0;i<4;i++){
// arr[i].songs;
// console.log(arr[i].songs);
// }
//this for loop will grab the songs from the fake 'arr' array



// function shuffleSong(){
//          var randomNumber = Math.floor(Math.random()*4);
//          var randomSong = songFiles[randomNumber];
//          return randomSong;
//     };
//
// var songPlay = document.querySelector("#audioplayer");
// audioplayer.setAttribute("src", randomSong());

var player1Score = 0;
var player2Score = 0;
var gameOver = false;

// function answerMessage() {
//   if (answer is right){
//   document.write("<p class='correctwrong'>Correct Answer!</p>");
// }   else {
//   document.write("<p class='correctwrong'>Wrong Answer!</p>");
// }
// }:

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
