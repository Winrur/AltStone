  var turnCounter = 0
  var cardArr = [];
  var cardData;
  fbRef.doc("Player 1 Cards").set({
    testVal: "testVal"
  })
  fbRef.doc("Player 2 Cards").set({
    testVal: "testVal"
  })
  for(var i = 53; i <= 220; i++){
    var currentCard = cardList.Basic[i]
    console.log(i);
    cardArr[i] = new Card( currentCard.name,
                           currentCard.type,
                           currentCard.playerClass,
                           currentCard.cost,
                           currentCard.attack,
                           currentCard.health,
                           currentCard.dbfId,
                           currentCard.imgGold,
                           "https://raw.githubusercontent.com/schmich/hearthstone-card-images/master/rel/" + currentCard.dbfId + ".png");
  };
  console.log(cardArr);
  var p1Deck = [ cardArr[57], //Innervate
                    cardArr[57], //Innervate
                    cardArr[68], //Claw
                    cardArr[68], //Claw
                    cardArr[126], //Mark of the Wild
                    cardArr[126], //Mark of the Wild
                    cardArr[141], //Wild Growth
                    cardArr[141], //Wild Growth
                    cardArr[187], //Swipe
                    cardArr[187], //Swipe
                    cardArr[211], //Starfire
                    cardArr[211], //Starfire
                    cardArr[219], //Ironbark Protector
                    cardArr[219], //Ironbark Protector
                    cardArr[106], //Acidic Swamp Ooze
                    cardArr[106], //Acidic Swamp Ooze
                    cardArr[109], //Bloodfen Raptor
                    cardArr[109], //Bloodfen Raptor
                    cardArr[165], //Shattered Sun Cleric 
                    cardArr[171], //Chillwind Yeti
                    cardArr[171], //Chillwind Yeti
                    cardArr[175], //Gnomish Inventor
                    cardArr[175], //Gnomish Inventor
                    cardArr[185],//Sen'jin Shieldmasta
                    cardArr[185],//Sen'jin Shieldmasta
                    cardArr[196],//Darkscale Healer
                    cardArr[206],//Boulderfist Ogre
                    cardArr[186], //Stormwind Champion
                    cardArr[186] //Stormwind Champion
                  ];
  var p2Deck = [ cardArr[57], //Innervate
                    cardArr[57], //Innervate
                    cardArr[68], //Claw
                    cardArr[68], //Claw
                    cardArr[126], //Mark of the Wild
                    cardArr[126], //Mark of the Wild
                    cardArr[141], //Wild Growth
                    cardArr[141], //Wild Growth
                    cardArr[187], //Swipe
                    cardArr[187], //Swipe
                    cardArr[211], //Starfire
                    cardArr[211], //Starfire
                    cardArr[219], //Ironbark Protector
                    cardArr[219], //Ironbark Protector
                    cardArr[106], //Acidic Swamp Ooze
                    cardArr[106], //Acidic Swamp Ooze
                    cardArr[109], //Bloodfen Raptor
                    cardArr[109], //Bloodfen Raptor
                    cardArr[165], //Shattered Sun Cleric 
                    cardArr[171], //Chillwind Yeti
                    cardArr[171], //Chillwind Yeti
                    cardArr[175], //Gnomish Inventor
                    cardArr[175], //Gnomish Inventor
                    cardArr[185],//Sen'jin Shieldmasta
                    cardArr[185],//Sen'jin Shieldmasta
                    cardArr[196],//Darkscale Healer
                    cardArr[206],//Boulderfist Ogre
                    cardArr[186], //Stormwind Champion
                    cardArr[186] //Stormwind Champion
                  ];

  function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
function setupGame(){
  turnCounter = 0;
  shuffle(p1Deck);
  shuffle(p2Deck);
};
setupGame();