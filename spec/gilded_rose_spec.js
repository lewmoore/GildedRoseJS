describe('Gilded Rose', function() {
	it('should decrease sellIn by 1 each day', function() {
		const plainItem = new Shop([new Item('plainItem', 10, 10)]);
		const item = plainItem.updateQuality();
		expect(item[0].sellIn).toEqual(9);
	});
});
