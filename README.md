## 📋 Índice

- [Requisitos](#requisitos)
- [Instalando a Função](#instalando-a-função)
- [Como Utilizar](#como-usar)

## 🚀 Requisitos

Para executar a função, é necessário utilizar a versão LTS do Node.js, que atualmente é a [20.10.0](https://nodejs.org/en/).

## 💻 Instalando a Função

_Clone o repositório e acesse sua pasta_

```bash
$ git clone https://github.com/iamthepoe/escribo-desafio-01

$ cd escribo-desafio-01
```

_Execute os testes_

```bash
$ npm run test
```

## 🤔 Como Utilizar

A função está no arquivo `sum.js`, na pasta `src`.

```javascript
export default function createSumOfDivisibles(number) {
  if (number < 0) throw new Error("The number should be positive.");

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}
```

Para executá-la, basta acessar o arquivo `index.js`, onde a função foi importada. Após isso, poderá ser executada como preferir:

```javascript
import createSumOfDivisibles from "./sum.js";

console.log(createSumOfDivisibles(10), createSumOfDivisibles(11));
```

Os testes automatizados estão em `test/sum.test.js`, e poderão ser executados utilizando o comando `npm run test`:

```javascript
import { it, describe } from "node:test";
import assert from "node:assert";
import createSumOfDivisibles from "../src/sum.js";

describe("createSumOfDivisibles", () => {
  it("should be defined", () => assert.ok(createSumOfDivisibles));

  it("should throw an error, if number is negative", () => {
    assert.throws(() => createSumOfDivisibles(-1), Error);
  });

  it("should return 23, if number is 10", () => {
    assert.strictEqual(createSumOfDivisibles(10), 23);
  });

  it("should return 33, if number is 11", () => {
    assert.strictEqual(createSumOfDivisibles(11), 33);
  });
});
```

<hr>

<div align=center>Feito por Luca Poe.</div>
