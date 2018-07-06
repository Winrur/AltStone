    var p1Id;
    var p2Id;

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
    function gameStartStuff () {
    altspace.getUser().then(function(user){
      currentUserId = user.userId;
      fbRef.doc("Player 1").get().then(function(doc){
        var data = doc.data();
        p1Id = data.userid;
        console.log(p1Id);
      fbRef.doc("Player 2").get().then(function(doc){
        var data = doc.data();
        p2Id = data.userid;
      console.log(p1Id);
      console.log(p1Id);
         for(var i = 0; i <= 9; i++){
          cardP1Ref[i].setAttribute("src", "#card-back");
          cardP2Ref[i].setAttribute("src", "#card-back");
          if (p1Id == currentUserId) {
              cardP1Ref[i].setAttribute("src", p1Deck[i].img);
              cardP1Ref[i].setAttribute("rotation", "270 180");
              p2ChooseInsText.setAttribute("visible", true);
              p2ChooseCardsText.setAttribute("visible", false);
              endTurnP1[0].setAttribute("visible", true);
              endTurnP1[1].setAttribute("visible", true);
          } else if (p2Id == currentUserId) {
              cardP2Ref[i].setAttribute("src", p2Deck[i].img);
              cardP2Ref[i].setAttribute("rotation", "270 0");
              p1ChooseInsText.setAttribute("visible", true);
              p1ChooseCardsText.setAttribute("visible", false);
              endTurnP2[0].setAttribute("visible", true);
              endTurnP2[1].setAttribute("visible", true);
            }
            }
            })
      })
    fbRef.doc("States").get().then(function(doc){
      var data = doc.data();
      if (data.gamestarted == true) {
          for (var i = 0; i <= 2; i++){
              manaP1[i].setAttribute("visible", true);
              manaP2[i].setAttribute("visible", true);
          }
          for (var i = 0; i <= 1; i++){
          }
         for(var i = 3; i <= 6; i++){
              cardP1Ref[i].setAttribute("visible", true);
              cardP1Ref[i].object3D.addEventListener("cursordown", function(){
                if(this.el.getAttribute("src") != "#card-back" && this.el.getAttribute("material", "color") != "grey"){
                var el = this.el;
                el.setAttribute("material", "color", "grey");
                }
         endTurnP1[0].object3D.addEventListener("cursordown", function(){
          console.log("test");
            for (var i = 3; i <=6; i++){
              if (cardP1Ref[i].getAttribute("material", "color") == "grey"){
                cardP1Ref[i].setAttribute("visible", false);
              }
            }
         });
              })

              cardP2Ref[i].setAttribute("visible", true);
              cardP2Ref[i].object3D.addEventListener("cursordown", function(){
                if(this.el.getAttribute("src") != "#card-back" && this.el.getAttribute("material", "color") != "grey"){
                var el = this.el;
                el.setAttribute("material", "color", "grey");
                }
         endTurnP2[0].object3D.addEventListener("cursordown", function(){
          console.log("test");
            for (var i = 3; i <=6; i++){
              if (cardP2Ref[i].getAttribute("material", "color") == "grey"){
                cardP2Ref[i].setAttribute("visible", false);
              }
            }
         });
              })
         }    

      }
    })

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