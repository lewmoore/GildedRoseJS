// describe('Regular Item Class', function() {
// 	it('should increase quality by 1', function() {
// 		item = new Item('Aged Brie', 10, 10);
// 		const plainItem = new AgedBrie(item);
// 		console.log(plainItem.changeQuality());
// 		expect(plainItem.quality).toEqual(11);
// 	});
// });

var items = [new Item('Aged Brie', 10, 10)];
var shop = new Shop(items);

describe('Item is Aged Brie', function() {
	it('Should increase quality by 1', function() {
		shop.updateQuality(items);
		expect(items[0].quality).toEqual(11);
	});

	it('Should decrease SellIn by 1', function() {
		shop.updateItem(items);
		expect(items[0].sellIn).toEqual(9);
	});
});
