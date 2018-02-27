describe('Gilded Rose Regular Item', function() {
	it('should decrease sellIn of a regular item by 1', function() {
		const plainItem = new Shop([new Item('plainItem', 10, 10)]);
		const item = plainItem.updateQuality();
		expect(item[0].sellIn).toEqual(9);
	});

	it('should decrease quality of a regular item by 1', function() {
		const plainItem = new Shop([new Item('plainItem', 10, 10)]);
		const item = plainItem.updateQuality();
		expect(item[0].quality).toEqual(9);
	});
});

describe('Gilded Rose Aged Brie', function() {
	it('should increase quality of Aged Brie by 1', function() {
		const agedBrie = new Shop([new Item('Aged Brie', 10, 10)]);
		const item = agedBrie.updateQuality();
		expect(item[0].quality).toEqual(11);
	});
});
