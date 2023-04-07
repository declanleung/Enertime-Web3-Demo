//Game Scene
var gameState = 'start';
var CharSel = false;

// limit the number of times the user can send tokens
var sendTokenCount = 0;

//Reset Var
var reSet = false;

//Sprites Var
var playersGroup, player1, player2, player3, player4;
var player = 1;
var p1 = false;
var p2 = false;
var p3 = false;
var p4 = false;
var aniB;
var aniM;
var aniT;
var ani2;
var ani3;
var floor;
var floor1;

//For Variation Monkeys
var mA = false;
var mB = false;
var mC = false;
var mD = false;
var mE = false;
var mF = false;
var mG = false;
var aB;
var aM;
var aT;
var bB;
var bM;
var bT;
var cB;
var cM;
var cT;
var dB;
var dM;
var dT;
var eB;
var eM;
var eT;
var fB;
var fM;
var fT;
var gB;
var gM;
var gT;
var stump;
var tStump;

//For Variation Wojak
var wA = false;
var wB = false;
var wC = false;
var wD = false;
var wE = false;
var wF = false;
var wG = false;
var wAni;
var wBni;
var wCni;
var wDni;
var wEni;
var wFni;
var wGni;

//Question Marks && Help
var qMark;
var Q;
var distance;

//Background Var
var ground;
var groundImage;
var bgm;
var spd = 4;
var startPg;
var startBg;
var startBgm;
var vol = 0.1;

//End Var
var endScene;
var endPage1;
var endPage2;
var endBg1;
var endBg2;
var e1 = true;
var e2 = false

//Obstacles Var
var obstaclesGroup,
  obstacle,
  obstacle1,
  obstacle2,
  obstacle3,
  obstacle4,
  obstacle5,
  obstacle6;
var bRock;
var rock;
var rand;
var death;

//Gravity Var
var Grav = true;
var GravSound;

//Score Var
var highscore;
var score = 0;
var finalScore;

//Coin Var
var coinScore = 0;
var totalCoin;
var coinsGroup, coin, coinSpin;
var coinSound;

function preload() {
  //Player 1 Animation
  aniB = loadAnimation("/Monkey Skins/Original Monkey/Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  aniM = loadAnimation("/Monkey Skins/Original Monkey/Change.png", {
    size: [50, 50],
    frames: 4,
  });
  aniT = loadAnimation("/Monkey Skins/Original Monkey/Up.png", {
    size: [50, 50],
    frames: 11,
  });

  //Player 1 Variation Animation
  aB = loadAnimation("/Monkey Skins/Yellow Monkey/Yellow Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  aM = loadAnimation("/Monkey Skins/Yellow Monkey/Yellow Change.png", {
    size: [50, 50],
    frames: 4,
  });
  aT = loadAnimation("/Monkey Skins/Yellow Monkey/Yellow Up.png", {
    size: [50, 50],
    frames: 11,
  });
  bB = loadAnimation("/Monkey Skins/Green Monkey/Green Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  bM = loadAnimation("/Monkey Skins/Green Monkey/Green Change.png", {
    size: [50, 50],
    frames: 4,
  });
  bT = loadAnimation("/Monkey Skins/Green Monkey/Green Up.png", {
    size: [50, 50],
    frames: 11,
  });
  cB = loadAnimation("/Monkey Skins/Blue Monkey/Blue Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  cM = loadAnimation("/Monkey Skins/Blue Monkey/Blue Change.png", {
    size: [50, 50],
    frames: 4,
  });
  cT = loadAnimation("/Monkey Skins/Blue Monkey/Blue Up.png", {
    size: [50, 50],
    frames: 11,
  });
  dB = loadAnimation("/Monkey Skins/White Monkey/White Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  dM = loadAnimation("/Monkey Skins/White Monkey/White Change.png", {
    size: [50, 50],
    frames: 4,
  });
  dT = loadAnimation("/Monkey Skins/White Monkey/White Up.png", {
    size: [50, 50],
    frames: 11,
  });
  eB = loadAnimation("/Monkey Skins/Purple Monkey/Purple Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  eM = loadAnimation("/Monkey Skins/Purple Monkey/Purple Change.png", {
    size: [50, 50],
    frames: 4,
  });
  eT = loadAnimation("/Monkey Skins/Purple Monkey/Purple Up.png", {
    size: [50, 50],
    frames: 11,
  });
  fB = loadAnimation("/Monkey Skins/Red Monkey/Red Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  fM = loadAnimation("/Monkey Skins/Red Monkey/Red Change.png", {
    size: [50, 50],
    frames: 4,
  });
  fT = loadAnimation("/Monkey Skins/Red Monkey/Red Up.png", {
    size: [50, 50],
    frames: 11,
  });
  gB = loadAnimation("/Monkey Skins/Black Monkey/Black Ground.png", {
    size: [50, 43],
    frames: 5,
  });
  gM = loadAnimation("/Monkey Skins/Black Monkey/Black Change.png", {
    size: [50, 50],
    frames: 4,
  });
  gT = loadAnimation("/Monkey Skins/Black Monkey/Black Up.png", {
    size: [50, 50],
    frames: 11,
  });

  //Player 2,3,4 Animation
  ani2 = loadAnimation("/Characters/Second Character/New Char Demo.png", {
    size: [48, 96],
    frames: 4,
  });

  ani3 = loadAnimation("/Characters/Wojak/Wojak.png", {
    size: [48, 38],
    frames: 4,
  });
  //Player 3 Variation Animation
  wAni = loadAnimation("/Characters/Wojak/McDonald Wojak.png", {
    size: [48, 44],
    frames: 4,
  });
  wBni = loadAnimation("/Characters/Wojak/Broke Wojak.png", {
    size: [48, 40],
    frames: 4,
  });
  wCni = loadAnimation("/Characters/Wojak/Wojak Friend.png", {
    size: [48, 42],
    frames: 4,
  });
  wDni = loadAnimation("/Characters/Wojak/Angry Wojak.png", {
    size: [48, 42],
    frames: 4,
  });
  wEni = loadAnimation("/Characters/Wojak/Withered Wojak.png", {
    size: [48, 38],
    frames: 4,
  });

  ani4 = loadAnimation("/Characters/Chick/Chick.png", {
    size: [48, 48],
    frames: 6,
  });

  tStump = loadImage("/Background/Others/Stump.png");
  Q = loadImage("/Background/Others/Question.png");

  //Background
  groundImage = loadImage("/Background/InGame/Background.png");
  startBg = loadImage("/Background/StartPage/StartPage.png");
  endBg1 = loadImage("/Background/EndPage/endPage1.png");
  endBg2 = loadImage("/Background/EndPage/endPage2.png");

  //Obstacle Animation
  obstacle1 = loadAnimation("/Obstacles/h1.png", { size: [48, 48], frames: 4 });
  obstacle2 = loadAnimation("/Obstacles/h2.png", { size: [48, 48], frames: 4 });
  obstacle3 = loadAnimation("/Obstacles/h3.png", { size: [48, 48], frames: 4 });
  obstacle4 = loadAnimation("/Obstacles/h4.png", { size: [200, 48], frames: 4 });
  obstacle5 = loadImage("/Obstacles/h5.png");
  obstacle6 = loadImage("/Obstacles/h6.png");
  bRock = loadImage("/Obstacles/Rock.png");

  //Coin
  coinSpin = loadAnimation("/Background/Others/Coin.png", { size: [48, 48], frames: 8 });

  //Sound
  gStart = loadSound("/Sounds/SFX/Game Start.mp3");
  bgm = loadSound("/Sounds/BGM/Game.mp3");
  death = loadSound("/Sounds/BGM/die.wav");
  GravSound = loadSound("/Sounds/SFX/Gravity.wav");
  startBgm = loadSound("/Sounds/BGM/start2.mp3");
  coinSound = loadSound("/Sounds/SFX/coinSound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Groups
  obstaclesGroup = createGroup();
  coinsGroup = createGroup();
  playersGroup = createGroup();

  //Start Background
  startScene = createSprite(windowWidth / 2, windowHeight / 2, "none");
  startScene.width = windowWidth;
  startScene.height = windowHeight;
  startScene.addImage("startbg", startBg);

  //In-game Background  
  ground = createSprite(windowWidth / 2, windowHeight / 2, "none");
  ground.width = windowWidth;
  ground.height = windowHeight;

  //Tree Stump
  stump = createSprite(windowWidth / 2, (windowHeight / 50) * 29, "none");
  stump.width = windowWidth / 4;
  stump.height = windowHeight / 4;
  stump.addImg("whole", tStump);

  //Question Mark
  qMark = createSprite(windowWidth / 2, windowHeight / 2, 50, 50, "none");
  qMark.addImage("Q", Q);
  qMark.scale = 0.03;

  //Top,Bottom Boundary
  floor = new Sprite(windowWidth / 2, 0, windowWidth, windowHeight / 20, "static");
  floor1 = new Sprite(windowWidth / 2, windowHeight, windowWidth, windowHeight / 20, "static");
  var c = color(130, 97, 70);
  floor.color = c;
  floor1.color = c;

  //Rock
  rock = createSprite(-100, windowHeight / 2, "none");

  //Coin
  coin = createSprite(windowWidth, windowHeight, 48, 48);
  coin.addAni("coin", coinSpin);

  //Player 1
  player1 = createSprite(windowWidth / 2, windowHeight / 2, 50, 50);
  player1.rotation = 0;
  player1.scale = 2;
  player1.bounciness = 0;
  player1.drag = 5
  if (p1 == true) {
    player1.visible = true;
  } else {
    player1.visible = false;
  }

  //Player 2
  player2 = new Sprite(windowWidth / 2, windowHeight / 2, 48, 96);
  player2.addAni(ani2);
  player2.rotation = 0;
  player2.bounciness = 0;
  player2.drag = 5
  if (p2 == true) {
    player2.visible = true;
  } else {
    player2.visible = false;
  }

  //Player 3
  player3 = new Sprite(windowWidth / 2, windowHeight / 2, 48, 48);
  player3.rotation = 0;
  player3.scale = 2;
  player3.bounciness = 0;
  player3.drag = 5
  if (p3 == true) {
    player3.visible = true;
  } else {
    player3.visible = false;
  }

  //Player 4
  player4 = new Sprite(windowWidth / 2, windowHeight / 2, 48, 48);
  player4.addAni(ani4);
  player4.rotation = 0;
  player4.scale = 2;
  player4.bounciness = 0;
  player4.drag = 5
  if (p4 == true) {
    player4.visible = true;
  } else {
    player4.visible = false;
  }

  endScene = createSprite(windowWidth / 2, windowHeight / 2, "none");
  endScene.width = windowWidth;
  endScene.height = windowHeight;
  endScene.addImage("End1", endBg1);

  groundImage.resize(windowWidth * 2, windowHeight);
  startBg.resize(windowWidth, windowHeight);
  endBg1.resize(windowWidth, windowHeight);
  endBg2.resize(windowWidth, windowHeight);
  bRock.resize(windowHeight, windowHeight);
  tStump.resize(windowWidth / 4, windowHeight / 3);

  //this was SO nessessary omg
  highscore = 0;
  totalCoin = 0;

  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  if (gameState === 'start') {
    startScene.visible = true;
    stump.visible = true;
    qMark.visible = true;

    StartPage();

    //Start BGM
    if (!startBgm.isPlaying()) {
      startBgm.setVolume(vol);
      startBgm.play();
    }

    //End BGM off
    if (death.isPlaying()) {
      death.stop();
    }
  } else {
    startScene.visible = false;
    stump.visible = false;
    qMark.visible = false;
  }

  if (gameState === 'game') {
    ground.visible = true;
    rock.visible = true;
    floor.visible = true;
    floor1.visible = true;

    InGame();

    ScoreCount();
    OutofBoundDetection();
    DeathDetection();
    BgMove();
    SwitchGrav();

    //Start Scene BGM off
    if (startBgm.isPlaying()) {
      startBgm.stop();
    }
    //In-game BGM
    if (!bgm.isPlaying()) {
      bgm.setVolume(vol);
      bgm.play();
    }
  } else {
    ground.visible = false;
    rock.visible = false;
    floor.visible = false;
    floor1.visible = false;
  }

  if (gameState === 'end') {
    reSet = false;
    endScene.visible = true;

    GameOver();
    leaderBoard();
    Results();

    //Send Token to user wallet
    if (sendTokenCount < 1) {
      send_token(coinScore);
      sendTokenCount++;
    }

    //In-Game BGM off
    if (bgm.isPlaying()) {
      bgm.stop();
    }
  } else {
    endScene.visible = false;
  }
}

function StartPage() {
  //Clean up
  startScene.draw();
  startScene.addImage("start", startBg);
  startScene.position.x = windowWidth / 2;
  startScene.position.y = windowHeight / 2;

  stump.draw();
  stump.addImage(tStump);
  stump.position.x = windowWidth / 2;
  stump.position.y = (windowHeight / 50) * 29;

  playerSelect();

  //Instructions Button
  stroke(255, 0, 0, 150);
  strokeWeight(10);
  fill(255, 150);
  ellipse(windowWidth / 10, windowHeight / 2, 80);
  distance = dist(mouseX, mouseY, windowWidth / 10, windowHeight / 2);
  if (distance < 40) {
    help();
    stump.visible = false;
  } else {
    stump.visible = true;
  }
  qMark.draw();
  qMark.position.x = windowWidth / 10;
  qMark.position.y = windowHeight / 2;

  stroke(0);
  strokeWeight(3);
}

function help() {
  //Pop-up Window
  stroke(0);
  strokeWeight(3);
  fill(255, 172, 109, 150);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth / 2.4,
    windowHeight / 1.2
  );

  //Instructions
  fill(255);
  textSize(50);
  text("How to Play", windowWidth / 2, windowHeight / 6);
  textSize(20);
  text(
    "Score : Number of Obstacles Passed",
    windowWidth / 2,
    (windowHeight / 30) * 7
  );
  text("Coin : Used for Buying ?", windowWidth / 2, (windowHeight / 30) * 8);
  text("Controls:", windowWidth / 3, windowHeight / 3);
  text("W", windowWidth / 2, (windowHeight / 30) * 11);
  text("Next Skin", windowWidth / 2, (windowHeight / 30) * 12);
  text(
    "A                                        D",
    windowWidth / 2,
    windowHeight / 2
  );
  text(
    "Previous                                  Next",
    (windowWidth / 100) * 49.5,
    (windowHeight / 30) * 16
  );
  text(
    "Character                              Character",
    windowWidth / 2,
    (windowHeight / 30) * 17
  );
  text("S", windowWidth / 2, (windowHeight / 30) * 19);
  text("Character Collection", windowWidth / 2, (windowHeight / 30) * 20);
  text(
    "Space: Choose / Switch Gravity",
    windowWidth / 2,
    (windowHeight / 30) * 23
  );
  text(
    "During the Game, Only Space is Needed",
    windowWidth / 2,
    (windowHeight / 30) * 25
  );
}

function playerSelect() {
  //Character Selection
  fill(255, 172, 109);
  textSize(40);

  if (CharSel == false) {
    //Display & Choose Characters on Selection
    switch (player) {
      case 1:
        player1.draw();
        //If chosen variation
        if (mA == true) {
          player1.addAni("whole", aB);
          // text("Yellow Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mB == true) {
          player1.addAni("whole", bB);
          // text("Green Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mC == true) {
          player1.addAni("whole", cB);
          // text("Blue Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mD == true) {
          player1.addAni("whole", dB);
          // text("White Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mE == true) {
          player1.addAni("whole", eB);
          // text("Purple Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mF == true) {
          player1.addAni("whole", fB);
          // text("Red Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (mG == true) {
          player1.addAni("whole", gB);
          // text("Black Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        }
        //If chosen Original
        else {
          player1.addAni("whole", aniB);
          //text("Monkey", windowWidth / 2, (windowHeight / 15) * 14);
        }
        player1.position.x = windowWidth / 2;
        player1.position.y = windowHeight / 2;
        player1.rotation = 0;
        p1 = true;
        p2 = false;
        p3 = false;
        p4 = false;
        break;
      case 2:
        player2.draw();
        player2.position.x = windowWidth / 2;
        player2.position.y = windowHeight / 2;
        player2.rotation = 0;
        p1 = false;
        p2 = true;
        p3 = false;
        p4 = false;
        //text("Fairy Tail Lolz", windowWidth / 2, (windowHeight / 15) * 14);
        break;
      case 3:
        player3.draw();

        //If chosen variation
        if (wA == true) {
          player3.addAni("whole", wAni);
          //text("McDonald Wojak", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (wB == true) {
          player3.addAni("whole", wBni);
          //text("Unemployed Wojak", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (wC == true) {
          player3.addAni("whole", wCni);
          //text("Wojak Friend", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (wD == true) {
          player3.addAni("whole", wDni);
          //text("Angry Wojak", windowWidth / 2, (windowHeight / 15) * 14);
        } else if (wE == true) {
          player3.addAni("whole", wEni);
          //text("Withered Wojak", windowWidth / 2, (windowHeight / 15) * 14);
        }
        //If chosen Original
        else {
          player3.addAni("whole", ani3);
          //text("Wojak", windowWidth / 2, (windowHeight / 15) * 14);
        }

        player3.position.x = windowWidth / 2;
        player3.position.y = windowHeight / 2;
        player3.rotation = 0;
        p1 = false;
        p2 = false;
        p3 = true;
        p4 = false;

        break;
      case 4:
        player4.draw();
        player4.position.x = windowWidth / 2;
        player4.position.y = windowHeight / 2;
        player4.rotation = 0;
        p1 = false;
        p2 = false;
        p3 = false;
        p4 = true;
        //text("Chick", windowWidth / 2, (windowHeight / 15) * 14);
        break;
      default:
    }

    //By pressing a/d, switch case to next or previous
    if (kb.pressed("a")) {
      player -= 1;
      if (player < 1) {
        player = 4;
      }
      GravSound.play();
      GravSound.setVolume(vol);
    }
    if (kb.pressed("d")) {
      player += 1;
      if (player > 4) {
        player = 1;
      }
      GravSound.play();
      GravSound.setVolume(vol);
    }
    //For Variation Selection Next
    if (kb.pressed("w")) {
      if (p1 == true) {
        if (
          mA == false &&
          mB == false &&
          mC == false &&
          mD == false &&
          mE == false &&
          mF == false &&
          mG == false
        ) {
          mA = true;
          mB = false;
        } else if (mA == true && mB == false) {
          mA = false;
          mB = true;
        } else if (mB == true && mC == false) {
          mB = false;
          mC = true;
        } else if (mC == true && mD == false) {
          mC = false;
          mD = true;
        } else if (mD == true && mE == false) {
          mD = false;
          mE = true;
        } else if (mE == true && mF == false) {
          mE = false;
          mF = true;
        } else if (mF == true && mG == false) {
          mF = false;
          mG = true;
        } else if (mG == true && mA == false) {
          mG = false;
        }
      }
      if (p3 == true) {
        if (wA == false && wB == false && wC == false && wD == false && wE == false) {
          wA = true;
        } else if (wA == true && wB == false) {
          wA = false;
          wB = true;
        } else if (wB == true && wC == false) {
          wB = false;
          wC = true;
        } else if (wC == true && wD == false) {
          wC = false;
          wD = true;
        } else if (wD == true && wE == false) {
          wD = false;
          wE = true;
        } else if (wE == true && wA == false) {
          wE = false;
        }
      }
      GravSound.play();
      GravSound.setVolume(vol);
    }
  }
  //For Variation Selection Menu
  if (kb.pressing("s")) {
    CharSel = true;
    CharSelection();
  } else {
    CharSel = false;
  }
}

function CharSelection() {
  //Character Selection Pop-up
  strokeWeight(10);
  stroke(60, 40, 30);
  fill(255, 172, 109, 150);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth * 0.8,
    windowHeight * 0.9
  );
  strokeWeight(3);

  //Small rectangles
  fill(255, 150);

  //For x position loop
  for (var i = 0; i < 8; i++) {
    //For y position loop
    for (var j = 0; j < 4; j++) {
      //Color for First Rows
      if (i == 0 && j == 0) {
        fill(97, 61, 36);
      } else if (i == 1 && j == 0) {
        fill(255, 255, 0);
      } else if (i == 2 && j == 0) {
        fill(255);
        // } else if (i == 3 && j == 0) {
        //   fill(255, 255, 0);
      } else if (i == 4 && j == 0) {
        fill(255);
      } else if (i == 5 && j == 0) {
        fill(255, 0, 0);
      } else if (i == 6 && j == 0) {
        fill(255, 255, 0);
      }
      //Second Row
      else if (i == 0 && j == 1) {
        fill(0, 255, 0);
      } else if (i == 1 && j == 1) {
        fill(0, 0, 255);
      } else if (i == 4 && j == 1) {
        fill(100);
      } else if (i == 5 && j == 1) {
        fill(203, 129, 94);
      }
      //Third Row
      else if (i == 0 && j == 2) {
        fill(255);
      } else if (i == 1 && j == 2) {
        fill(198, 0, 255);
      } else if (i == 4 && j == 2) {
        fill(255, 0, 0);
      } else if (i == 5 && j == 2) {
        fill(50);
      }
      //Fourth Row
      else if (i == 0 && j == 3) {
        fill(255, 0, 0);
      } else if (i == 1 && j == 3) {
        fill(0);
      }
      //Fill the rest with Question Marks
      else {
        qMark.draw();
        qMark.position.x = windowWidth / 7.5 + (windowWidth / 9.6) * i;
        qMark.position.y = windowWidth / 4.8 + (windowWidth / 15) * j;
        qMark.rotation = 0;
        fill(100, 150);
      }

      //Small Rect
      rect(
        windowWidth / 7.5 + (windowWidth / 9.6) * i,
        windowWidth / 4.8 + (windowWidth / 15) * j,
        windowWidth / 24,
        windowWidth / 24
      );
      fill(255);
      //Big Rect
      rect(
        windowWidth / 5.4 + (windowWidth / 4.8) * j,
        windowWidth / 8,
        windowWidth / 12,
        windowWidth / 12
      );

      player1.draw();
      player1.position.x = windowWidth / 5.4;
      player1.position.y = windowWidth / 8;
      player1.rotation = 0;

      player2.draw();
      player2.position.x = windowWidth / 5.4 + windowWidth / 4.8;
      player2.position.y = windowWidth / 8;
      player2.rotation = 0;

      player3.draw();
      player3.position.x = windowWidth / 5.4 + windowWidth / 2.4;
      player3.position.y = windowWidth / 8;
      player3.rotation = 0;

      player4.draw();
      player4.position.x = windowWidth / 5.4 + windowWidth / 1.6;
      player4.position.y = windowWidth / 8;
      player4.rotation = 0;
    }
  }
}

function InGame() {
  //Clean Up
  Reeset();

  ground.draw();
  ground.addImage("InGame", groundImage);

  SpawnCoins();
  SpawnObstacles();

  rock.draw();
  rock.addImage(bRock);
  rock.rotationSpeed = 1;
  //Rock Rotation
  rock.rotation += rock.rotationSpeed;
  rock.rotationSpeed += 0.0002;
  //Limit Speed to 15
  if (rock.rotationSpeed > 15) {
    rock.rotationSpeed = 15;
  }

  //Characters Spawn
  if (p1 == true) {
    player1.draw();
    player1.rotation = 0;

    player2.position.x = -windowWidth / 3;
    player3.position.x = -windowWidth / 3;
    player4.position.x = -windowWidth / 3;

    if (player1.position.y > (windowHeight / 10) * 8.5) {
      //When Variation is true
      if (mA == true) {
        player1.addAni("whole", aB);
      } else if (mB == true) {
        player1.addAni("whole", bB);
      } else if (mC == true) {
        player1.addAni("whole", cB);
      } else if (mD == true) {
        player1.addAni("whole", dB);
      } else if (mE == true) {
        player1.addAni("whole", eB);
      } else if (mF == true) {
        player1.addAni("whole", fB);
      } else if (mG == true) {
        player1.addAni("whole", gB);
      }
      //When Original Monkey
      else if (
        mA == false &&
        mB == false &&
        mC == false &&
        mD == false &&
        mE == false &&
        mF == false &&
        mG == false
      ) {
        player1.addAni("whole", aniB);
      }
    } else if (player1.position.y < windowHeight / 9) {
      if (mA == true) {
        player1.addAni("whole", aT);
      } else if (mB == true) {
        player1.addAni("whole", bT);
      } else if (mC == true) {
        player1.addAni("whole", cT);
      } else if (mD == true) {
        player1.addAni("whole", dT);
      } else if (mE == true) {
        player1.addAni("whole", eT);
      } else if (mF == true) {
        player1.addAni("whole", fT);
      } else if (mG == true) {
        player1.addAni("whole", gT);
      } else {
        player1.addAni("whole", aniT);
      }
    } else {
      if (mA == true) {
        player1.addAni("whole", aM);
      } else if (mB == true) {
        player1.addAni("whole", bM);
      } else if (mC == true) {
        player1.addAni("whole", cM);
      } else if (mD == true) {
        player1.addAni("whole", dM);
      } else if (mE == true) {
        player1.addAni("whole", eM);
      } else if (mF == true) {
        player1.addAni("whole", fM);
      } else if (mG == true) {
        player1.addAni("whole", gM);
      } else {
        player1.addAni("whole", aniM);
      }
    }
  } else if (p2 == true) {
    player2.draw();
    player2.rotation = 0;

    player1.position.x = -windowWidth / 3;
    player3.position.x = -windowWidth / 3;
    player4.position.x = -windowWidth / 3;

    //Trying to flip the character when at top
    // if (player2.position.y < windowHeight / 2) {
    //   player2.scale = -4;
    // } else {
    //   player2.scale = 4;
    // }
  } else if (p3 == true) {
    player3.draw();
    player3.rotation = 0;

    player1.position.x = -windowWidth / 3;
    player2.position.x = -windowWidth / 3;
    player4.position.x = -windowWidth / 3;

    //Trying to flip the character when at top
    // if (player3.position.y < windowHeight / 2) {
    //   player3.scale = (2, -2);
    // } else {
    //   player3.scale = 2;
    // }
  } else if (p4 == true) {
    player4.draw();
    player4.rotation = 0;

    player1.position.x = -windowWidth / 3;
    player2.position.x = -windowWidth / 3;
    player3.position.x = -windowWidth / 3;
  }
}

function Reeset() {
  if (reSet == false) {
    //Reset all Variables to Default    
    death.stop();
    gStart.play();
    gStart.setVolume(vol);
    Grav = true;
    player1.position.x = windowWidth / 3;
    player1.position.y = windowHeight / 2;
    player2.position.x = windowWidth / 3;
    player2.position.y = windowHeight / 2;
    player3.position.x = windowWidth / 3;
    player3.position.y = windowHeight / 2;
    player4.position.x = windowWidth / 3;
    player4.position.y = windowHeight / 2;
    score = 0;
    coinScore = 0;
    spd = 4;
    rock.rotationSpeed = 1;

    //If dead again, End Scene start with "Restart"
    e1 = true;
    e2 = false;

    reSet = true;
    sendTokenCount = 0;
  }
}

function ScoreCount() {
  //Display Scores during In-Game
  textSize(30);
  fill(192, 227, 43);
  text("Highscore: " + highscore, windowWidth / 2, windowHeight / 12);
  text("Score: " + score, (windowWidth / 12) * 9, windowHeight / 12);
  text("Coins: " + coinScore, (windowWidth / 10) * 9, windowHeight / 12);
}

function SpawnCoins() {

  drawSprites(coinsGroup);

  if (frameCount % 50 === 0) {
    //Coin Spawn
    coin = createSprite(windowWidth, random(1, windowHeight), 48, 48, "static");
    coin.addAni(coinSpin);
    coinsGroup.add(coin);
  }

  //Coin Moving
  for (let i = 0; i < coinsGroup.length; i++) {
    spd += 0.0002;
    //Limit Speed to 15
    if (spd > 15) {
      spd = 15;
    }
    coinsGroup[i].position.x -= spd;

    //Coin Collecting
    if (player1.collide(coinsGroup[i]) && p1 == true) {
      coinScore++;
      totalCoin++;
      coinSound.play();
      //Remove when collected
      coinsGroup[i].remove();
    } else if (player2.collide(coinsGroup[i]) && p2 == true) {
      coinScore++;
      totalCoin++;
      coinSound.play();
      coinsGroup[i].remove();
    } else if (player3.collide(coinsGroup[i]) && p3 == true) {
      coinScore++;
      totalCoin++;
      coinSound.play();
      coinsGroup[i].remove();
    } else if (player4.collide(coinsGroup[i]) && p4 == true) {
      coinScore++;
      totalCoin++;
      coinSound.play();
      coinsGroup[i].remove();
    }
  }
}

function OutofBoundDetection() {
  //If y position is smaller than 0 or bigger than windowHeight, place characters back inside
  if ((windowHeight / 10) * 9.5 < player1.position.y && p1 == true) {
    player1.position.y = (windowHeight / 10) * 9.5 - 1;
  } else if (player1.position.y < windowHeight / 12) {
    player1.position.y = windowHeight / 12 + 1;
  }
  if ((windowHeight / 10) * 9.5 < player2.position.y && p2 == true) {
    player2.position.y = (windowHeight / 10) * 9.5 - 1;
  } else if (player2.position.y < windowHeight / 12) {
    player2.position.y = windowHeight / 12 + 1;
  }
  if ((windowHeight / 10) * 9.5 < player3.position.y && p3 == true) {
    player3.position.y = (windowHeight / 10) * 9.5 - 1;
  } else if (player3.position.y < windowHeight / 12) {
    player3.position.y = windowHeight / 12 + 1;
  }
  if ((windowHeight / 10) * 9.5 < player4.position.y && p4 == true) {
    player4.position.y = (windowHeight / 10) * 9.5 - 1;
  } else if (player4.position.y < windowHeight / 12) {
    player4.position.y = windowHeight / 12 + 1;
  }
}

function clearSprites(obj) {
  //For clearing sprites before restart
  for (let i = 0; i < obj.length; i++) {
    obj[i].remove();
  }
}

function DeathDetection() {
  //If player x position is smaller than 0, Game ends
  if (player1.position.x < 0 && p1 == true) {
    gameState = 'end';
  }
  if (player2.position.x < 0 && p2 == true) {
    gameState = 'end';
  }
  if (player3.position.x < 0 && p3 == true) {
    gameState = 'end';
  }
  if (player4.position.x < 0 && p4 == true) {
    gameState = 'end';
  }
}

function SpawnObstacles() {
  if (frameCount % 75 === 0) {
    //generate random obstacles between 1 to 6 obstacles
    rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle = createSprite(
          windowWidth,
          random(48, windowHeight - 48),
          48,
          48,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addAni(obstacle1);
        break;
      case 2:
        obstacle = createSprite(
          windowWidth,
          random(windowHeight / 2, windowHeight - 48),
          48,
          48,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addAni(obstacle2);
        break;
      case 3:
        obstacle = createSprite(
          windowWidth,
          random(48, windowHeight / 2),
          48,
          48,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addAni(obstacle3);
        break;
      case 4:
        obstacle = createSprite(
          windowWidth,
          (windowHeight / 10) * 9,
          200,
          48,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addAni(obstacle4);
        break;
      case 5:
        obstacle = createSprite(
          windowWidth,
          random(100, windowHeight - 100),
          48,
          100,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle = createSprite(
          windowWidth,
          random(100, windowHeight - 100),
          100,
          100,
          "static"
        );
        obstacle.scale = 2;
        obstacle.addImage(obstacle6);
        break;
      default:
        break;
    }
    obstaclesGroup.push(obstacle);
  }

  //Obstacle Moving
  for (let i = 0; i < obstaclesGroup.length; i++) {
    spd += 0.0002;
    //Limit Speed to 15
    if (spd > 15) {
      spd = 15;
    }
    obstaclesGroup[i].position.x -= spd;

    //Scoring
    if (obstaclesGroup[i].position.x < -50) {
      score += 1;
      obstaclesGroup[i].remove();
    }
  }
}

function BgMove() {
  //Background Moving Speed Gradually Increase
  spd += 0.0002;
  //Limit Speed to 15 (Bug issues)
  if (spd > 15) {
    spd = 15;
  }
  //Move Background
  ground.position.x -= spd;
  //Repeat Background
  if (ground.position.x < 0) {
    ground.x = windowWidth;
  }
}

function SwitchGrav() {
  //Normal Gravity
  if (Grav == true) {
    world.gravity.y = 60;
  }
  //Switched Gravity
  if (Grav == false) {
    world.gravity.y = -60;
  }
}

function GameOver() {
  //Clean up & Update Results
  clearSprites(obstaclesGroup);
  clearSprites(coinsGroup);

  //Play Song
  if (!death.isPlaying()) {
    death.setVolume(vol);
    death.play();
  }

  //GameOver Background
  endScene.draw();
  if (e1 == true) {
    endScene.addImage("End1", endBg1);
  } else if (e2 == true) {
    endScene.addImage("End2", endBg2);
  }
  endScene.position.x = windowWidth / 2;
  endScene.position.y = windowHeight / 2;

  if (kb.pressed("s")) {
    //Swap to "Quit"
    GravSound.play();
    GravSound.setVolume(vol);
    e1 = false;
    e2 = true;
  } else if (kb.pressed("w")) {
    //Swap to "Restart"
    GravSound.play();
    GravSound.setVolume(vol);
    e1 = true;
    e2 = false;
  }
}

function leaderBoard() {
  //Update Highscore
  finalScore = score;
  if (highscore < finalScore) {
    highscore = finalScore;
  }
}

function Results() {
  fill(255, 172, 109, 150);
  rect(windowWidth / 2, windowHeight / 2.1, windowWidth / 2, windowHeight / 2.5);
  textSize(30);
  fill(255, 0, 0);
  text(
    "Your Highscore is " + highscore + "!",
    windowWidth / 2,
    (windowHeight / 10) * 4
  );
  fill(255);
  text("Your Score is " + score + "!", windowWidth / 2, windowHeight / 2);
  fill(255, 255, 0);
  text(
    "You Earned " + coinScore + " Coins!",
    windowWidth / 2,
    (windowHeight / 10) * 6
  );

  //Total Coin Display at top left corner
  coin.visible = true;
  coin.draw();
  coin.addAni("coin", coinSpin);
  coin.position.x = windowWidth / 30;
  coin.position.y = windowHeight / 15;
  textSize(30);
  fill(255, 255, 0);
  text(totalCoin, windowWidth / 14, windowHeight / 11);
}

function keyPressed() {
  if (gameState === "start") {
    if (keyCode === 32) { // spacebar

      gameState = 'game';
    }
  } else if (gameState === "game") {
    if (keyCode === 13) { // enter key

      gameState = 'end';
    }

    if (kb.pressing(" ")) {
      if (Grav == true) {
        //Switch Gravity
        Grav = false;
        GravSound.play();
        GravSound.setVolume(vol);
      } //Down
      else if (Grav == false) {
        //Normal Gravity
        Grav = true;
        GravSound.play();
        GravSound.setVolume(vol);
      }
    }
  } else if (gameState === 'end') {
    if (e1 == true && keyCode === 32) { // spacebar
      gameState = 'game';
    }
    else if (e2 == true && keyCode === 32) { // spacebar
      gameState = 'start';
    }
  }
}