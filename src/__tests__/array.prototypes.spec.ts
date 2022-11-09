import '../array-prototypes/array.prototypes';

describe('groupBy', () => {
  type Inventory = {
    name: string;
    type: InventoryTypes;
    quantity: number;
    address: { state: string; country: string };
  };

  type InventoryTypes = 'vegetables' | 'fruit' | 'meat';
  type InventoryStates = 'CA' | 'TX' | 'AL';
  type InventoryQuantities = 0 | 5 | 22 | 23;

  type GroupedByInventoryTypes = Record<InventoryTypes, Inventory[]>;
  type GroupedByInventoryStates = Record<InventoryStates, Inventory[]>;
  type GroupedByInventoryQuantities = Record<InventoryQuantities, Inventory[]>;

  const inventory: Inventory[] = [
    { name: 'asparagus', type: 'vegetables', quantity: 5, address: { state: 'CA', country: 'USA' } },
    { name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } },
    { name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } },
    { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } },
    { name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }
  ];

  test('should groupBy inventory type', () => {
    const groupedByType = inventory.groupBy((g) => g.type);
    const expectedGroup: GroupedByInventoryTypes = {
      vegetables: [{ name: 'asparagus', type: 'vegetables', quantity: 5, address: { state: 'CA', country: 'USA' } }],
      fruit: [
        { name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } },
        { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } }
      ],
      meat: [
        { name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } },
        { name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }
      ]
    };

    expect(groupedByType).toStrictEqual(expectedGroup);

    expect(groupedByType.vegetables).toEqual(expectedGroup.vegetables);
    expect(groupedByType.vegetables.length).toEqual(expectedGroup.vegetables.length);

    expect(groupedByType.fruit).toEqual(expectedGroup.fruit);
    expect(groupedByType.fruit.length).toEqual(expectedGroup.fruit.length);

    expect(groupedByType.meat).toEqual(expectedGroup.meat);
    expect(groupedByType.meat.length).toEqual(expectedGroup.meat.length);
  });

  test('should groupBy inventory addresses', () => {
    const groupedByType = inventory.groupBy((g) => g.address.state);
    const expectedGroup: GroupedByInventoryStates = {
      CA: [
        { name: 'asparagus', type: 'vegetables', quantity: 5, address: { state: 'CA', country: 'USA' } },
        { name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }
      ],
      TX: [
        { name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } },
        { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } }
      ],
      AL: [{ name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } }]
    };

    expect(groupedByType).toStrictEqual(expectedGroup);

    expect(groupedByType.CA).toEqual(expectedGroup.CA);
    expect(groupedByType.CA.length).toEqual(expectedGroup.CA.length);

    expect(groupedByType.TX).toEqual(expectedGroup.TX);
    expect(groupedByType.TX.length).toEqual(expectedGroup.TX.length);

    expect(groupedByType.AL).toEqual(expectedGroup.AL);
    expect(groupedByType.AL.length).toEqual(expectedGroup.AL.length);
  });

  test('should groupBy inventory quantity', () => {
    const groupedByType = inventory.groupBy((g) => g.quantity);
    const expectedGroup: GroupedByInventoryQuantities = {
      0: [{ name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } }],
      5: [
        {
          name: 'asparagus',
          type: 'vegetables',
          quantity: 5,
          address: { state: 'CA', country: 'USA' }
        },
        { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } }
      ],
      22: [{ name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }],
      23: [{ name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } }]
    };

    expect(groupedByType).toStrictEqual(expectedGroup);

    expect(groupedByType[0]).toEqual(expectedGroup[0]);
    expect(groupedByType[0].length).toEqual(expectedGroup[0].length);

    expect(groupedByType[5]).toEqual(expectedGroup[5]);
    expect(groupedByType[5].length).toEqual(expectedGroup[5].length);

    expect(groupedByType[22]).toEqual(expectedGroup[22]);
    expect(groupedByType[22].length).toEqual(expectedGroup[22].length);

    expect(groupedByType[23]).toEqual(expectedGroup[23]);
    expect(groupedByType[23].length).toEqual(expectedGroup[23].length);
  });

  // test('should groupBy inventory based on a condition with a custom string', () => {
  //   const inventory: Inventory[] = [
  //     { name: 'asparagus', type: 'vegetables', quantity: 5 },
  //     { name: 'bananas', type: 'fruit', quantity: 0 },
  //     { name: 'goat', type: 'meat', quantity: 23 },
  //     { name: 'cherries', type: 'fruit', quantity: 5 },
  //     { name: 'fish', type: 'meat', quantity: 22 }
  //   ];

  //   const groupedByType = inventory.groupBy((g) => {
  //     return g.quantity > 5 ? 'ok' : 'restock';
  //   });

  //   expect(groupedByType.ok).toEqual([
  //     { name: 'goat', type: 'meat', quantity: 23 },
  //     { name: 'fish', type: 'meat', quantity: 22 }
  //   ]);
  //   expect(groupedByType.ok.length).toEqual(2);

  //   expect(groupedByType.restock).toEqual([
  //     { name: 'asparagus', type: 'vegetables', quantity: 5 },
  //     { name: 'bananas', type: 'fruit', quantity: 0 },
  //     { name: 'cherries', type: 'fruit', quantity: 5 }
  //   ]);
  //   expect(groupedByType.restock.length).toEqual(3);
  // });
});
