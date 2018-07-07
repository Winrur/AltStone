    var p1Id;
    var p2Id;
    var arrayOfCards = [];
    var timeout;
    var checkForAnimation;
    var p1DeckBox = document.getElementById("p1-deck-box");
    var p1DeckBoxRef = p1DeckBox.getAttribute("position");
    p1DeckBoxPos = `${p1DeckBoxRef.x} ${p1DeckBoxRef.y} ${p1DeckBoxRef.z}`;
    console.log(p1DeckBoxPos);
    var p2DeckBox = document.getElementById("p2-deck-box");
    var p2DeckBoxRef = p2DeckBox.getAttribute("position");
    p2DeckBoxPos = `${p2DeckBoxRef.x} ${p2DeckBoxRef.y} ${p2DeckBoxRef.z}`;
    console.log(p2DeckBoxPos);
    var p1ChooseInsText = document.getElementById("choose-ins-p1-text");
    p1ChooseInsText.setAttribute("visible", false);
    var p1ChooseCardsText = document.getElementById("choose-cards-p1-text");
    p1ChooseCardsText.setAttribute("visible", false);
    var p2ChooseInsText = document.getElementById("choose-ins-p2-text");
    p2ChooseInsText.setAttribute("visible", false);
    var p2ChooseCardsText = document.getElementById("choose-cards-p2-text");
    p2ChooseCardsText.setAttribute("visible", false);
    var cardP1Ref = document.getElementsByClassName("card-p1");
    cardP1Ref[0].setAttribute("visible", false); 
    cardP1Ref[1].setAttribute("visible", false);
    cardP1Ref[2].setAttribute("visible", false);
    cardP1Ref[3].setAttribute("visible", false);
    cardP1Ref[4].setAttribute("visible", false);
    cardP1Ref[5].setAttribute("visible", false); 
    cardP1Ref[6].setAttribute("visible", false);
    cardP1Ref[7].setAttribute("visible", false);
    cardP1Ref[8].setAttribute("visible", false);
    cardP1Ref[9].setAttribute("visible", false);
    var p1Cards = [];
    var cardP2Ref = document.getElementsByClassName("card-p2");
    cardP2Ref[0].setAttribute("visible", false); 
    cardP2Ref[1].setAttribute("visible", false);
    cardP2Ref[2].setAttribute("visible", false);
    cardP2Ref[3].setAttribute("visible", false);
    cardP2Ref[4].setAttribute("visible", false);
    cardP2Ref[5].setAttribute("visible", false); 
    cardP2Ref[6].setAttribute("visible", false);
    cardP2Ref[7].setAttribute("visible", false);
    cardP2Ref[8].setAttribute("visible", false);
    cardP2Ref[9].setAttribute("visible", false);
    var p2Cards = [];
    var cardPlaceP1 = document.getElementsByClassName("card-place-p1");
    cardPlaceP1[0].setAttribute("visible", false); 
    cardPlaceP1[1].setAttribute("visible", false);
    cardPlaceP1[2].setAttribute("visible", false);
    cardPlaceP1[3].setAttribute("visible", false);
    cardPlaceP1[4].setAttribute("visible", false);  
    cardPlaceP1[5].setAttribute("visible", false);
    cardPlaceP1[6].setAttribute("visible", false); 
    var cardPlaceP2 = document.getElementsByClassName("card-place-p2");
    cardPlaceP2[0].setAttribute("visible", false); 
    cardPlaceP2[1].setAttribute("visible", false);
    cardPlaceP2[2].setAttribute("visible", false);
    cardPlaceP2[3].setAttribute("visible", false);
    cardPlaceP2[4].setAttribute("visible", false);
    cardPlaceP2[5].setAttribute("visible", false);
    cardPlaceP2[6].setAttribute("visible", false);
    var manaP1 = document.getElementsByClassName("mana-p1");
    manaP1[0].setAttribute("visible", false);
    manaP1[1].setAttribute("visible", false);
    manaP1[2].setAttribute("visible", false);
    var manaP2 = document.getElementsByClassName("mana-p2");
    manaP2[0].setAttribute("visible", false);
    manaP2[1].setAttribute("visible", false);
    manaP2[2].setAttribute("visible", false);
    var endTurnP1 = document.getElementsByClassName("end-turn-p1");
    endTurnP1[0].setAttribute("visible", false);
    endTurnP1[1].setAttribute("visible", false);
    var endTurnP2 = document.getElementsByClassName("end-turn-p2");
    endTurnP2[0].setAttribute("visible", false);
    endTurnP2[1].setAttribute("visible", false);
    var currentUserId;
    console.log(p1Deck);
    function gameStartStuff () {
 for (var i = 0; i <= 28; i++) {
    if (p1Deck[i].cardType != "Spell") {
  database.ref("Player 1/Cards" + i.toString()).set({
    cardid: i,
    name: p1Deck[i].cardName,
    cost: p1Deck[i].cost,
    health: p1Deck[i].health,
    attack: p1Deck[i].attack,
    anim: false 
  }) 
} else {
  database.ref("Player 1/Cards" + i.toString()).set({
    cardid: i,
    name: p1Deck[i].cardName,
    cost: p1Deck[i].cost,
    anim: false 
  })
  } 
    if (p2Deck[i].cardType != "Spell") {
  database.ref("Player 2/Cards" + i.toString()).set({
    cardid: i,
    name: p2Deck[i].cardName,
    cost: p2Deck[i].cost,
    health: p2Deck[i].health,
    attack: p2Deck[i].attack,
    anim: false     
  }) 
} else {
  database.ref("Player 2/Cards" + i.toString()).set({
    cardid: i,
    name: p2Deck[i].cardName,
    cost: p2Deck[i].cost,
    anim: false 
  })
  } 
}
      coinFlip();
    altspace.getUser().then(function(user){
      currentUserId = user.userId;
      database.ref("Player 1").once("value").then(function(doc){
        var data = doc.val();
        p1Id = data.userid;
      database.ref("Player 2").once("value").then(function(doc){
        var data = doc.val();
        p2Id = data.userid;
         for(var i = 0; i <= 9; i++){
          cardP1Ref[i].setAttribute("material", "src", "#card-back");
          cardP2Ref[i].setAttribute("material", "src", "#card-back");
          if (p1Id == currentUserId) {
              cardP1Ref[i].setAttribute("material", "src", p1Deck[i].img);
              cardP1Ref[i].setAttribute("rotation", "270 180");
              p2ChooseInsText.setAttribute("visible", true);
              p2ChooseCardsText.setAttribute("visible", false);
              endTurnP1[0].setAttribute("visible", true);
              endTurnP1[1].setAttribute("visible", true);
          } else if (p2Id == currentUserId) {
              cardP2Ref[i].setAttribute("material", "src", p2Deck[i].img);
              cardP2Ref[i].setAttribute("rotation", "270 0");
              p1ChooseInsText.setAttribute("visible", true);
              p1ChooseCardsText.setAttribute("visible", false);
              endTurnP2[0].setAttribute("visible", true);
              endTurnP2[1].setAttribute("visible", true);
            }
            }
            })
      })
    database.ref("States").once("value").then(function(doc){
      var data = doc.val();
      if (data.gamestarted == true) {
          for (var i = 0; i <= 2; i++){
              manaP1[i].setAttribute("visible", true);
              manaP2[i].setAttribute("visible", true);
          }
          console.log(i);
          endTurnP1[0].object3D.addEventListener("cursordown", function(){
              var card1P1 = cardP1Ref[3].getAttribute("material").opacity;
              var card2P1 = cardP1Ref[4].getAttribute("material").opacity;
              var card3P1 = cardP1Ref[5].getAttribute("material").opacity;
              var card4P1 = cardP1Ref[6].getAttribute("material").opacity;
            if(card1P1 == "0.5") {
              cardP1Ref[3].setAttribute("animation", "dir", "normal");
              cardP1Ref[3].emit("move-card-3-p1");
              cardP1Ref[3].addEventListener("animationcomplete", function(anim){
                console.log(anim);
                cardP1Ref[3].setAttribute("visible", false);
                endTurnP1[1].setAttribute("visible", false);
              });
            }
            if(card2P1 == "0.5") {
              cardP1Ref[4].setAttribute("animation", "dir", "normal");
              cardP1Ref[4].emit("move-card-4-p1");
              cardP1Ref[4].addEventListener("animationcomplete", function(){
                cardP1Ref[4].setAttribute("visible", false);
                endTurnP1[1].setAttribute("visible", false);
              });
            }
            if(card3P1 == "0.5") {
              cardP1Ref[5].setAttribute("animation", "dir", "normal");
              cardP1Ref[5].emit("move-card-5-p1");
              cardP1Ref[5].addEventListener("animationcomplete", function(){
                cardP1Ref[5].setAttribute("visible", false);
                endTurnP1[1].setAttribute("visible", false);
              });
            }
            if(card4P1 == "0.5") {
              cardP1Ref[6].setAttribute("animation", "dir", "normal");
              cardP1Ref[6].emit("move-card-6-p1");
              cardP1Ref[6].addEventListener("animationcomplete", function(){
                cardP1Ref[6].setAttribute("visible", false);
                endTurnP1[1].setAttribute("visible", false);
              });
            }
                  database.ref("Player 1/Cards" + i.toString()).update({
                    anim: true
                  })   
         });
          endTurnP2[0].object3D.addEventListener("cursordown", function(){
              var card1P2 = cardP2Ref[3].getAttribute("material").opacity;
              var card2P2 = cardP2Ref[4].getAttribute("material").opacity;
              var card3P2 = cardP2Ref[5].getAttribute("material").opacity;
              var card4P2 = cardP2Ref[6].getAttribute("material").opacity;
            if(card1P2 == "0.5") {
              database.ref("Player 2/Cards" + i.toString()).on("value", function(snap){
                var val = snap.val();
              cardP2Ref[3].setAttribute("animation", "dir", "normal");
              cardP2Ref[3].emit("move-card-3-p2");
              cardP2Ref[3].addEventListener("animationcomplete", function(anim){
                console.log(anim);
                cardP2Ref[3].setAttribute("visible", false);
                endTurnP2[1].setAttribute("visible", false);
              });
            })
            if(card2P2 == "0.5") {
              database.ref("Player 2/Cards" + i.toString()).on("value", function(snap){
                var val = snap.val();
              cardP2Ref[4].setAttribute("animation", "dir", "normal");
              cardP2Ref[4].emit("move-card-4-p2");
              cardP2Ref[4].addEventListener("animationcomplete", function(){
                cardP2Ref[4].setAttribute("visible", false);
                endTurnP2[1].setAttribute("visible", false);
              });
            })
            if(card3P2 == "0.5") {
              database.ref("Player 2/Cards" + i.toString()).on("value", function(snap){
                var val = snap.val();
              cardP2Ref[5].setAttribute("animation", "dir", "normal");
              cardP2Ref[5].emit("move-card-5-p2");
              cardP2Ref[5].addEventListener("animationcomplete", function(){
                cardP2Ref[5].setAttribute("visible", false);
                endTurnP2[1].setAttribute("visible", false);
              });
            })
            if(card4P2 == "0.5") {  
              cardP2Ref[6].setAttribute("animation", "dir", "normal");
              cardP2Ref[6].emit("move-card-6-p2");
              cardP2Ref[6].addEventListener("animationcomplete", function(){
                cardP2Ref[6].setAttribute("visible", false);
                endTurnP2[1].setAttribute("visible", false);
              });
            }
            }
          for(var i = 3; i < 7; i++){
              database.ref("Player 1/Cards" + i.toString()).on("value", function(snap){
                var val = snap.val();
                if(val.anim == true){
                  cardP1Ref[i].emit("move-card-" + i + "-p1");
                    database.ref("Player 1/Cards" + i.toString()).update({
                      anim: false
                    })
                }     
              })
              database.ref("Player 2/Cards" + i.toString()).on("value", function(snap){
                var val = snap.val();
                if(val.anim == true){
                  cardP2Ref[i].emit("move-card-" + i + "-p2");
                    database.ref("Player 2/Cards" + i.toString()).update({
                      anim: false
                    })
                }     
              })
              cardP1Ref[i].setAttribute("visible", "true");
              cardP2Ref[i].setAttribute("visible", "true");
              cardP1Ref[i].setAttribute("animation", "to", p1DeckBoxPos);
              cardP2Ref[i].setAttribute("animation", "to", p2DeckBoxPos);
              cardP1Ref[i].setAttribute("animation", "dir", "reverse");
              cardP2Ref[i].setAttribute("animation", "dir", "reverse");
              database.ref("Player 1/Cards" + i.toString()).update({
                anim: true
              })
              database.ref("Player 2/Cards" + i.toString()).update({
                anim: true
              })
              }
    }
    }

    })
              //P1
              var toggleP1 = [];
              var toggleP2 = [];
              var currentIndexP1;
              var currentIndexP2;
              for (i = 3; i <= 6; i++) {
                checkForAnimation = setInterval(animCheck, 2000);
                toggleP1[i] = false;
                currentIndexP1 = toggleP1[i];
              cardP1Ref[i].object3D.addEventListener("cursordown", function(snap){
                var el = this.el;
                if(el.getAttribute("src") != "#card-back" && currentIndexP1 == false) {
                  el.setAttribute("material", "opacity", 0.5);
                  toggleP1[i] = true;
                  currentIndexP1 = toggleP1[i];
                } else if(el.getAttribute("src") != "#card-back" && currentIndexP1 == true) {
                  el.setAttribute("material", "opacity", 1);
                  toggleP1[i] = false;
                  currentIndexP1 = toggleP1[i];
                }
              })
              }
              //P2
              for (i = 3; i <= 6; i++) {
                toggleP2[i] = false;
                currentIndexP2 = toggleP2[i];
              cardP2Ref[i].object3D.addEventListener("cursordown", function(){
                var el = this.el;
                if(el.getAttribute("src") != "#card-back" && currentIndexP2 == false) {
                  el.setAttribute("material", "opacity", 0.5);
                  toggleP2[i] = true;
                  currentIndexP2 = toggleP2[i];
                } else if(el.getAttribute("src") != "#card-back" && currentIndexP2 == true){
                  el.setAttribute("material", "opacity", 1);
                  toggleP2[i] = false;
                  currentIndexP2 = toggleP2[i];
                }
              })
              }

function coinFlip () {
  var p1Flip;
  var p2Flip;
  database.ref("Player 1").once("value").then(function(snap){
    var val = snap.val();
    p1Flip = val.userid;
  database.ref("Player 2").once("value").then(function(snap){
    var val = snap.val();
    p2Flip = val.userid;
var flip = Math.floor(Math.random() * 2);
console.log(flip);
if (flip == 0) {
  console.log(p1Flip + " goes first!");
  database.ref("Player 1").update({
    goesFirst: true
  })
  database.ref("Player 2").update({
    goesFirst: false
  })
} else {
  console.log(p2Flip + " goes first!");
  database.ref("Player 2").update({
    goesFirst: true
  })
  database.ref("Player 1").update({
    goesFirst: false
  })
}
  })
})
}
}
})
})
}
function animCheck () {
  for (var i = 0; i <= 28; i++) {
  database.ref("Player 1/Cards" + i.toString()).once("value").then(function(snap){
    var val = snap.val();
    if(val.anim == true){
      cardP1Ref[i].emit("move-card-" + i + "-p1");
   }  
})
  database.ref("Player 2/Cards" + i.toString()).once("value").then(function(snap){
    var val = snap.val();
    if(val.anim == true){
      cardP1Ref[i].emit("move-card-" + i + "-p2");
   }  
})
}
}
