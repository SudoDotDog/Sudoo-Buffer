# Sudoo-Buffer

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Buffer/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Buffer/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Buffer/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Buffer)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fbuffer.svg)](https://badge.fury.io/js/%40sudoo%2Fbuffer)
[![downloads](https://img.shields.io/npm/dm/@sudoo/buffer.svg)](https://www.npmjs.com/package/@sudoo/buffer)

:hibiscus: Immutable buffers for JS

## Install

```sh
yarn add @sudoo/buffer
# Or
npm install @sudoo/buffer --save
```

## Usage

This package provide more feature than the following descriptions.  
The usage documents are still working in progress. See source code for more details.

### Array Buffer

```ts
import { ArrayBuffer } from "@sudoo/buffer";
const buffer: ArrayBuffer<string> = ArrayBuffer.create();
buffer.add(chance.string());
buffer.length; // 1
```

### Number Buffer

```ts
import { NumberBuffer } from "@sudoo/buffer";
const buffer: NumberBuffer = NumberBuffer.create();
buffer.add();
buffer.value; // 1
```

### Object Buffer

```ts
import { ObjectBuffer } from "@sudoo/buffer";
const buffer: ObjectBuffer = ObjectBuffer.create();
buffer.add('key', 'value');
buffer.add('addIfExist', undefined);
buffer.build(); /* {
    key: 'value',
} */
```

### String Buffer

```ts
import { StringBuffer } from "@sudoo/buffer";
const buffer: StringBuffer = StringBuffer.create();
buffer.add('foo');
buffer.add('bar');
buffer.flush(); // foobar
```
