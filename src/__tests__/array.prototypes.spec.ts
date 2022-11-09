import '../array-prototypes/array.prototypes';

describe('groupBy', () => {
  type Inventory = {
    name: string;
    type: string;
    quantity: number;
  };

  test('should groupBy inventory type', () => {
    const inventory: Inventory[] = [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ];

    const groupedByType = inventory.groupBy((g) => g.type);

    expect(groupedByType.vegetables).toEqual([{ name: 'asparagus', type: 'vegetables', quantity: 5 }]);
    expect(groupedByType.vegetables.length).toEqual(1);

    expect(groupedByType.fruit).toEqual([
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'cherries', type: 'fruit', quantity: 5 }
    ]);
    expect(groupedByType.fruit.length).toEqual(2);

    expect(groupedByType.meat).toEqual([
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ]);
    expect(groupedByType.meat.length).toEqual(2);
  });

  test('should groupBy inventory quantity', () => {
    const inventory: Inventory[] = [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ];

    const groupedByType = inventory.groupBy((g) => g.quantity);

    expect(groupedByType[5]).toEqual([
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'cherries', type: 'fruit', quantity: 5 }
    ]);
    expect(groupedByType[5].length).toEqual(2);

    expect(groupedByType[0]).toEqual([{ name: 'bananas', type: 'fruit', quantity: 0 }]);
    expect(groupedByType[0].length).toEqual(1);

    expect(groupedByType[22]).toEqual([{ name: 'fish', type: 'meat', quantity: 22 }]);
    expect(groupedByType[22].length).toEqual(1);

    expect(groupedByType[23]).toEqual([{ name: 'goat', type: 'meat', quantity: 23 }]);
    expect(groupedByType[23].length).toEqual(1);
  });

  test('should groupBy inventory based on a condition with a custom string', () => {
    const inventory: Inventory[] = [
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'cherries', type: 'fruit', quantity: 5 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ];

    const groupedByType = inventory.groupBy((g) => {
      return g.quantity > 5 ? 'ok' : 'restock';
    });

    expect(groupedByType.ok).toEqual([
      { name: 'goat', type: 'meat', quantity: 23 },
      { name: 'fish', type: 'meat', quantity: 22 }
    ]);
    expect(groupedByType.ok.length).toEqual(2);

    expect(groupedByType.restock).toEqual([
      { name: 'asparagus', type: 'vegetables', quantity: 5 },
      { name: 'bananas', type: 'fruit', quantity: 0 },
      { name: 'cherries', type: 'fruit', quantity: 5 }
    ]);
    expect(groupedByType.restock.length).toEqual(3);
  });
});
