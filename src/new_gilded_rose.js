class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

class Shop {
	constructor(items = []) {
		this.items = items;
	}

	updateQuality(items) {
		for (let i = 0; i < this.items.length; i++) {
			this.updateItem(items[i]);
		}
	}

	isAgedBrie(item) {
		return 'Aged Brie' == item.name;
	}

	increaseQuality(item) {
		item.quality += 1;
	}

	decreaseSellIn(item) {
		item.sellIn -= 1;
	}

	updateItem(item) {
		if (item.name == 'Aged Brie') {
			this.increaseQuality(item);
			this.decreaseSellIn(item);
		}
	}
}
