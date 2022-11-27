declare global {
  interface Array<T> {
    /**
     * @description
     * Groups an array, based on the property defined in the callback function
     *
     * @param callBack the callback function used to define the property to group by
     *
     * @usageNotes
     *
      ```typescript
      type Inventory = {
          name: string;
          type: InventoryTypes;
          quantity: number;
          address: { state: string; country: string };
      };

      type InventoryTypes = 'vegetables' | 'fruit' | 'meat';

      type GroupedByInventoryTypes = Record<InventoryTypes, Inventory[]>;

      const inventory: Inventory[] = [
          {
              name: 'asparagus',
              type: 'vegetables',
              quantity: 5,
              address: { state: 'CA', country: 'USA' }
          },
          { name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } },
          { name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } },
          { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } },
          { name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }
      ];

      const groupedByType = inventory.groupBy((g) => g.type);
      ```

      The expected result fromt "inventory.groupBy((g) => g.type)" , will be equal to the following:

      ```ts
      const expectedGroup: GroupedByInventoryTypes = {
          vegetables: [
              {
                  name: 'asparagus',
                  type: 'vegetables',
                  quantity: 5,
                  address: { state: 'CA', country: 'USA' }
              }
          ],
          fruit: [
              { name: 'bananas', type: 'fruit', quantity: 0, address: { state: 'TX', country: 'USA' } },
              { name: 'cherries', type: 'fruit', quantity: 5, address: { state: 'TX', country: 'USA' } }
          ],
          meat: [
              { name: 'goat', type: 'meat', quantity: 23, address: { state: 'AL', country: 'USA' } },
              { name: 'fish', type: 'meat', quantity: 22, address: { state: 'CA', country: 'USA' } }
          ]
      };
      ```
     *
     * @returns An object grouped by the choosen PropertyKey
     */
    groupBy(callBack: (value: T, index: number) => PropertyKey): Record<PropertyKey, Array<T>>;
  }
}

Array.prototype.groupBy = function <T>(callBack: (value: T, index: number) => PropertyKey) {
  return this.reduce<Record<PropertyKey, Array<T>>>(
    (previousValue: Record<PropertyKey, Array<T>>, currentValue: T, currentIndex: number) => {
      const key = callBack(currentValue, currentIndex);
      const value: T[] = previousValue[key] || [];
      previousValue[key] = value.concat([currentValue]);
      return previousValue;
    },
    {}
  );
};

export {};
