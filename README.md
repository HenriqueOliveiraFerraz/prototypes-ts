# Prototypes in typescript

> Extensions of strings, arrays and numbers prototypes

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
    - [Serving the distribution version](#serving-the-distribution-version)
  - [API](#api)
    - [useBasicFetch](#usebasicfetch)
      - [Options](#options)
    - [fetchData](#fetchdata)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

To install and set up the library, run:

```sh
$ npm install -D prototypes-ts
```

## API

### import prototypesConfiguration function to setup the locale

```ts
import { prototypesConfiguration } from 'prototypes-ts';

prototypesConfiguration('pt-BR');
```

### then use any of the functions from the exported interface

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