var cardArr = [];
  var cardData;
  for(var i = 53; i <= 220; i++){
    var currentCard = cardList.Basic[i]
    console.log(i);
    cardArr[i] = new Card( currentCard.name,
                           currentCard.type,
                           currentCard.playerClass,
                           currentCard.cost,
                           currentCard.attack,
                           currentCard.health,
                           currentCard.img,
                           currentCard.imgGold );
  };
  console.log(cardArr);
  var druidDeck = [ cardArr[57], //Innervate
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
class Hero {
	constructor(name, deck) {
		this.name = name;
		this.deck = deck;
	}
	shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
}
