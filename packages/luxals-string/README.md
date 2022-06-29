<h1 align="center">@luxass/luxals-string</h1>

<p align="center">✨ A collection of string utilities ✨</p>
<br/>
<br/>

## 📦 Install

```shell
$ npm install @luxass/luxals-string
```

## 🪄 Usage

```ts
import { concat } from "@luxass/luxals-string";

const isAllowed = true;

const classname = concat("w-full h-full bg-green-700 border", {
  "border-yellow-500": isAllowed,
  "border-red-500": !isAllowed
});
// isAllowed: "w-full h-full bg-green-700 border border-yellow-700"
```
