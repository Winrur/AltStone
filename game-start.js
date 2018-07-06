    var cardP1Ref = document.getElementsByClassName("card-p1");
    cardP1Ref[0].setAttribute("visible", false); 
    cardP1Ref[1].setAttribute("visible", false);
    cardP1Ref[2].setAttribute("visible", false);
    cardP1Ref[3].setAttribute("visible", false);
    cardP1Ref[4].setAttribute("visible", false);
    var p1Cards = [];
    var cardP2Ref = document.getElementsByClassName("card-p2");
    cardP2Ref[0].setAttribute("visible", false); 
    cardP2Ref[1].setAttribute("visible", false);
    cardP2Ref[2].setAttribute("visible", false);
    cardP2Ref[3].setAttribute("visible", false);
    cardP2Ref[4].setAttribute("visible", false);
    var p2Cards = [];
    var cardPlaceP1 = document.getElementsByClassName("card-place-p1");
    cardPlaceP1[0].setAttribute("visible", false); 
    cardPlaceP1[1].setAttribute("visible", false);
    cardPlaceP1[2].setAttribute("visible", false);
    cardPlaceP1[3].setAttribute("visible", false);
    cardPlaceP1[4].setAttribute("visible", false);   
    var cardPlaceP2 = document.getElementsByClassName("card-place-p2");
    cardPlaceP2[0].setAttribute("visible", false); 
    cardPlaceP2[1].setAttribute("visible", false);
    cardPlaceP2[2].setAttribute("visible", false);
    cardPlaceP2[3].setAttribute("visible", false);
    cardPlaceP2[4].setAttribute("visible", false);
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
    function gameStartStuff () {
    var userId;
    var p1Id;
    var p2Id;
    altspace.getUser().then(function(user){
      userId = user.userId;
    })
    console.log(userId);
    fbRef.doc("Player 1").get().then(function(doc){
      p1Id = doc.data().userid;
      console.log(p1Id);
    })
    fbRef.doc("Player 2").get().then(function(doc){
      p2Id = doc.data().userid;
      console.log(p2Id);
    })
    fbRef.doc("States").get().then(function(doc){
      var data = doc.data();
      if (data.gamestarted == true) {
          for (var i = 0; i <= 2; i++){
              manaP1[i].setAttribute("visible", true);
              manaP2[i].setAttribute("visible", true);
          }
          for (var i = 0; i <= 1; i++){
              endTurnP1[i].setAttribute("visible", true);
              endTurnP2[i].setAttribute("visible", true);
          }
         for(var i = 0; i <= 4; i++){
          cardP1Ref[i].setAttribute("src", "#card-back");
          cardP2Ref[i].setAttribute("src", "#card-back");
          if (p1Id == userId) {
              console.log("test");
              cardP1Ref[i].setAttribute("src", p1Deck[i].img);
          } if (p2Id == userId) {
            console.log("test");
              cardP2Ref[i].setAttribute("src", p2Deck[i].img);
          }
         }  
         for(var i = 0; i <= 4; i++){
              cardP1Ref[i].setAttribute("visible", true);
              cardP2Ref[i].setAttribute("visible", true);
         }     

      }
    })
  for (var i = 0; i <= 28; i++) {
    console.log(p1Deck[i].cardType);
    if (p1Deck[i].cardType != "Spell") {
  fbRef.doc("Player 1").collection("Cards").doc(i.toString()).set({
    cardid: i,
    name: p1Deck[i].cardName,
    cost: p1Deck[i].cost,
    health: p1Deck[i].health,
    attack: p1Deck[i].attack     
  }) 
} else {
  fbRef.doc("Player 1").collection("Cards").doc(i.toString()).set({
    cardid: i,
    name: p1Deck[i].cardName,
    cost: p1Deck[i].cost,
  })
  } 
    if (p2Deck[i].cardType != "Spell") {
  fbRef.doc("Player 2").collection("Cards").doc(i.toString()).set({
    cardid: i,
    name: p2Deck[i].cardName,
    cost: p2Deck[i].cost,
    health: p2Deck[i].health,
    attack: p2Deck[i].attack     
  }) 
} else {
  fbRef.doc("Player 2").collection("Cards").doc(i.toString()).set({
    cardid: i,
    name: p2Deck[i].cardName,
    cost: p2Deck[i].cost,
  })
  } 
}
    }