# Sudoo-Buffer

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Buffer.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Buffer)
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

## Array Buffer

```ts
import { ArrayBuffer } from "@sudoo/buffer";
const buffer: ArrayBuffer<string> = ArrayBuffer.create();
buffer.add(chance.string());
buffer.length; // 1
```

## Number Buffer

```ts
import { NumberBuffer } from "@sudoo/buffer";
const buffer: NumberBuffer = NumberBuffer.create();
buffer.add();
buffer.value; // 1
```
