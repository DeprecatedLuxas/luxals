<h1 align="center">@luxass/luxals-number</h1>

<p align="center">✨ A collection of TypeScript number utilities ✨</p>
<br/>
<br/>

## 📦 Install

```shell
$ npm install @luxass/luxals-number
```

## 🪄 Usage

```ts
import { clamp, isNegative, isPositive } from "@luxass/luxals-number";

const negative = isNegative(1); // false
const positive = isPositive(1); // true

const clamped = clamp(1, 0, 2); // 1
```
