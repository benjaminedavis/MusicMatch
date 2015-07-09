var randomAlbumandSongs = [];

var allObjects = {
  selections: [
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg",
      songs:["audio/ABBA/03 Take a Chance on Me.mp3"],
      artist: 'ABBA',
      songName: 'Take A Chance On Me',
      album: 'ABBA The Album'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      songs:["audio/Nirvana/08 Drain You.mp3"],
      artist: 'Nirvana',
      songName: 'Drain You',
      album: 'Nevermind'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      songs:["audio/FleetwoodMac/09 Dreams.mp3"],
      artist: 'Fleetwood Mac',
      songName: 'Dreams',
      album: 'Rumours'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
      songs:["audio/TheBeatles/14 Golden Slumbers.mp3"],
      artist: 'The Beatles',
      songName: 'Golden Slumbers',
      album: 'Abbey Road'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/d/d4/We_sweat_blood.gif",
      songs:["audio/DankoJones/05 I Want You.mp3"],
      artist: 'Danko Jones',
      songName: 'I Want You',
      album: 'We Sweat Blood'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Dj_SIE_btr96_sm.jpg",
      songs:["audio/DankoJones/01 Sticky Situation.mp3"],
      artist: 'Danko Jones',
      songName: 'Sticky Situation',
      album: 'Sleep Is The Enemy'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Red_Fang-Red_Fang.jpg",
      songs:["audio/RedFang/01 Prehistoric Dog.m4a"],
      artist: 'Red Fang',
      songName: 'Prehistoric Dog',
      album: 'Red Fang'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/3/3f/Spoon_Gimme_Fiction.jpg",
      songs:["audio/Spoon/03 I Turn My Camera On.mp3"],
      artist: 'Spoon',
      songName: 'I Turn My Camera On',
      album: 'Gimme Fiction'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/c/ca/Secretmachinesnowhereisnowhere.jpg",
      songs:["audio/SecretMachines/02 Sad And Lonely.mp3"],
      artist: 'Secret Machines',
      songName: 'Sad And Lonely',
      album: 'Now Here is Nowhere'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/The_Hold_Steady_-_Separation_Sunday_cover.jpg",
      songs:["audio/TheHoldSteady/01 Hornets! Hornets!.mp3"],
      artist: 'The Hold Steady',
      songName: 'Hornets! Hornets!',
      album: 'Separation Sunday'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/d/d4/Lovebox_cover.jpg",
      songs:["audio/GrooveArmada/01 Purple Haze.mp3"],
      artist: 'Groove Armada',
      songName: 'Purple Haze',
      album: 'Lovebox'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg",
      songs:["audio/FooFighters/11 Everlong.mp3"],
      artist: 'Foo Fighters',
      songName: 'Everlong',
      album: 'The Colour And The Shape'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/8/80/Feed_the_Animals.jpg",
      songs:["audio/GirlTalk/02 Shut The Club Down.mp3"],
      artist: 'Girl Talk',
      songName: 'Shut The Club Down',
      album: 'Feed The Animals'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG",
      songs:["audio/ACDC/08 If You Want Blood (You've Got It).mp3"],
      artist: 'AC DC',
      songName: 'If You Want Blood (Youve Got It)',
      album: 'Highway To Hell'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Licensed_to_ill.jpg",
      songs:["audio/BeastieBoys/08 No Sleep Till Brooklyn.mp3"],
      artist: 'Beastie Boys',
      songName: 'No Sleep Till Brooklyn',
      album: 'Licensed To Ill'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/07/BeastieBoysPaul%27sBoutique.jpg",
      songs:["audio/BeastieBoys/05 High Plains Drifter.mp3"],
      artist: 'Beastie Boys',
      songName: 'High Plains Drifter',
      album: 'Pauls Boutique'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/0/09/Uncut_Dope.jpg",
      songs:["audio/GetoBoys/07 Damn It Feels Good To Be A Gangster.mp3"],
      artist: 'Geto Boys',
      songName: 'Damn It Feels Good To Be A Gangster',
      album: 'Uncut Dope'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/8/80/Len_-_You_Can%27t_Stop_The_Bum_Rush_Album_300px.jpg",
      songs:["audio/LEN/01 Steal My Sunshine.mp3"],
      artist: 'LEN',
      songName: 'Steal My Sunshine',
      album: 'You Cant Stop The Bum Rush'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/6/63/You%27re_a_Woman%2C_I%27m_a_Machine.jpg",
      songs:["audio/DeathFromAbove1979/02 Romantic Rights.mp3"],
      artist: 'Death From Above 1979',
      songName: 'Romantic Rights',
      album: 'Youre a Woman, Im a Machine'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/7f/SmashingPumpkins-Gish.jpg",
      songs:["audio/SmashingPumpkins/01 I Am One.mp3"],
      artist: 'Smashing Pumpkins',
      songName: 'I Am One',
      album: 'Gish'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/4/4c/Chicago_-_Chicago_VI.jpg",
      songs:["audio/Chicago/1-13 Feelin' Stronger Every Day.mp3"],
      artist: 'Chicago',
      songName: 'Feelin Stronger Every Day',
      album: 'Chicago VI'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/3/3e/UFO_album_Phenomenon.jpg",
      songs:["audio/UFO/01 Rock Bottom.mp3"],
      artist: 'UFO',
      songName: 'Rock Bottom',
      album: 'Phenomenon'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png",
      songs:["audio/Weezer/07 Say It Ain't So.mp3"],
      artist: 'Weezer',
      songName: 'Say It Aint So',
      album: 'Weeer Blue Album'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/Turbonegro-ApocalypseDudes.jpg",
      songs:["audio/Turbonegro/07 Zillion Dollar Sadist.mp3"],
      artist: 'Turbonegro',
      songName: 'Zillion Dollar Sadist',
      album: 'Apocalypse Dudes'
    },
    {
      albumImage: "https://upload.wikimedia.org/wikipedia/en/7/79/King_of_the_Road_%28album%29.jpg",
      songs:["audio/FuManchu/04 King of the Road.mp3"],
      artist: 'Fu Manchu',
      songName: 'King Of The Road',
      album: 'King Of The Road'
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
var audioSource = document.querySelector("#audiosource");
var startButton = document.querySelector("#startbutton");
var currentSong = Math.floor((Math.random() * 3) + 1);
var correctWrong = document.querySelector("#correctwrong");
var albumArray = [];
var playerRound = 0;
var player1Score = 0;
var player2Score = 0;

startButton.addEventListener('click', function(){
  randomAlbumArray();
});

function randomAlbumArray(){
      var allAlbumImages = [];
      for(var i = 0;i<allObjects.selections.length;i+=1){
        allAlbumImages.push(allObjects.selections[i])
}
function shuffle(randomAlbumArray) {
    var copy = [], n =randomAlbumArray.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(randomAlbumArray.splice(i, 1)[0]);
  }
  copy = copy.slice(0,4);
  albumPos1.setAttribute("src", copy[0].albumImage);
  albumPos2.setAttribute("src", copy[1].albumImage);
  albumPos3.setAttribute("src", copy[2].albumImage);
  albumPos4.setAttribute("src", copy[3].albumImage);

  audioSource.setAttribute("src", copy[currentSong].songs[0]);
};
shuffle(allAlbumImages);
};

function albumClick(indexNumbers) {
  if ((currentSong === indexNumbers) && (playerRound <9)){
    correctWrong.innerHTML = "Correct Answer!";
    playerRound = playerRound +1;
    randomAlbumArray();
  } else if ((currentSong !== indexNumbers) && (playerRound <9)){
    correctWrong.innerHTML = "Wrong Answer!";
    playerRound = playerRound +1;
    randomAlbumArray();
  } else if ((currentSong === indexNumbers) && (playerRound =9)){
    correctWrong.innerHTML = "Correct Answer - Game Over!";
  } else if ((currentSong !== indexNumbers) && (playerRound =9)){
    correctWrong.innerHTML = "Wrong Answer - Game Over!";
  }
};


//   correctWrong.innerHTML = "Player 1 Wins!"
//   correctWrong.innerHTML = "Player 2 Wins!"
//   correctWrong.innerHTML = "It's A Tie!"
