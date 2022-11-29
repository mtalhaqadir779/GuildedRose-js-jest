const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose update Quality Unit tests", function() {
  it("No items in shop should return no items", function(){
    const gildedRose = new Shop([]);
    const items = gildedRose.updateQuality();
    expect(items.length).toBe(0);
  });

  it("When the item is of new Category: Conjured", function() {
    const guildedRose = new Shop([new Item("Conjured Mana Cake", 3, 9)]);
    const items = guildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
    expect(items[0].sellIn).toBe(2);
  });

  it("Quality can not be less than 0", function() {
    const guildedRose = new Shop([new Item("+5 Dexterity Vest", 3, 0)]);
    const items = guildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(2);
  });

  it("Quality can not be greater than 50", function() {
    const guildedRose = new Shop([new Item("Aged Brie", 3, 50)]);
    const items = guildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(2);
  });


});
