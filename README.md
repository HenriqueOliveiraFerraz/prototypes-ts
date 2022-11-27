# Prototypes in typescript

> Extensions of strings, arrays and numbers prototypes

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To install and set up the library, run:

```sh
$ npm install -D prototypes-ts
```

## Usage

### Import prototypesConfiguration function in the root file of your project to setup the locale

```ts
import { prototypesConfiguration } from 'prototypes-ts';

prototypesConfiguration(locale: Locale);
```

```ts
type Locale = 'pt-BR' | undefined;
```

### Then use any of the functions from the exported interfaces

```ts
declare global {
  interface Number {
    numberInFull(): string;
    zerosAfterFirstNumber(): number;
    getNumberGroups(): string[];
  }
}

declare global {
  interface String {
    hasOnlyLetters(): boolean;
    capitalizeFirstLetter(): string;
  }
}

declare global {
  interface Array<T> {
    groupBy(callBack: (value: T, index: number) => PropertyKey): Record<PropertyKey, Array<T>>;
  }
}
```

### Examples

#### Array.prototype.groupBy

```ts
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

#### Number.prototype.numberInFull

```ts
prototypesConfiguration('pt-BR');

const threeHundredEightyNine = 389;
const expectedResult = threeHundredEightyNine.numberInFull();

console.log(expectedResult);

'trezentos e oitenta e nove'
```

#### String.prototype.capitalizeFirstLetter

```ts
console.log('carl'.capitalizeFirstLetter());

'Carl'
```