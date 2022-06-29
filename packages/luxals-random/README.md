<h1 align="center">@luxass/luxals-random</h1>

<p align="center">✨ A collection of random utilities ✨</p>
<br/>
<br/>

## 📦 Install

```shell
$ npm install @luxass/luxals-random
```

## 🪄 Usage

```ts
import { MersenneTwister, timeSeed } from "@luxass/luxals-random";

const m = new MersenneTwister(); // default seed is timeSeed()
// const m = new MersenneTwister(someRandomSeed);

const random = m.int(); // Some random integer
```
