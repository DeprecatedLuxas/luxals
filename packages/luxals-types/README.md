<h1 align="center">@luxass/luxals-types</h1>

<p align="center">✨ A collection of TypeScript types ✨</p>
<br/>
<br/>

## 📦 Install

```shell
$ npm install @luxass/luxals-types
```

## 🪄 Usage

```ts
import type { UnionLiteral } from "@luxass/luxals-types";

type Options = UnionLiteral<string, "a" | "b">;
// You will get auto-completion for `a` and `b` literals.
```
