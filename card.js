class Card {
	constructor(cardName, cardType, playerClass, cost, attack, health, dbfId, imgGold, img) {
		this.cardName = cardName;
		this.cardType = cardType;
		this.playerClass = playerClass;
		this.cost = cost;
		this.attack = attack;
		this.health = health;
		this.img = img;
		this.imgGold = imgGold;
		this.mechanics = {};
		this.onField = false;
		this.dbfId = dbfId;
	}
	played() {
		this.onField = true;
		console.log(`${this.cardName} is on the field!`);
	}
	deathrattle(effect) {
		if(this.health <= 0 && "deathrattle" in this.mechanics) {
			effect();
		}
	}
	battlecry(effect) {
		if(this.onField == true && "battlecry" in this.mechanics) {
			effect();
		}
	}
}