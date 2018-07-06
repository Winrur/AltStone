    var cardP1Ref = document.getElementsByClassName("card-p1");
    var p1Cards = [];
    var cardP2Ref = document.getElementsByClassName("card-p2");
    var p2Cards = [];
    var cardPlaceP1 = document.getElementsByClassName("card-place-p1");
    var cardPlaceP2 = document.getElementsByClassName("card-place-p2");
    var manaP1 = document.getElementsByClassName("mana-p1");
    var manaP2 = document.getElementsByClassName("mana-p2");
    function gameStartStuff () {
    fbRef.doc("States").get().then(function(doc){
      var data = doc.data();
      if (data.gamestarted == true) {
          for (var i = 0; i <= 3; i++){
              manaP1[i].setAttribute("material", "opacity", 1);
              manaP2[i].setAttribute("material", "opacity", 1);
          }
         for(var i = 0; i <= 5; i++){
              cardP1Ref[i].setAttribute("src", druidDeck[i].img);
              cardP2Ref[i].setAttribute("src", druidDeck[i].img);
         }       

      }
    })
    }