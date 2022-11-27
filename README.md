# Prototypes in typescript

> Extensions of strings, arrays and numbers prototypes

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Serving the app](#serving-the-app)
- [Running the tests](#running-the-tests)
- [Building a distribution version](#building-a-distribution-version)
- [Serving the distribution version](#serving-the-distribution-version)
- [API](#api)
- [useBasicFetch](#usebasicfetch)
    - [Options](#options)

## Installation

To install and set up the library, run:

```sh
$ npm install -D prototypes-ts
```

## API

### import prototypesConfiguration function to setup the locale

```ts
import { prototypesConfiguration } from 'prototypes-ts';

prototypesConfiguration(locale: Locale);
```

```ts
type Locale = 'pt-BR' | undefined;
```

### then use any of the functions from the exported interfaces

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