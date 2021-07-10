## Documentacion

### Uso

```shell
npm i
node .
Go to http://localhost:3000 
```
### Syntaxis

La sintaxis de este lenguaje de programacion es basicamente la misma sintaxis que Javascript, simplemente que al momento de generar el codigo intermedio este no entiende sentencias muy complejas solo las mas basicas, sin embargo, el analisis sintactico, lexico y semantico puede comprender cualquier tipo de sentencia escrita en javascript. Ej:

```js
var x = 10;
var y = 20;

var result = x + y;
```

#### Declaracion de variable

```js
var x = 10;
let y = 20;
const z = 30;
```

#### Asignacion de variables

```js
x = 10;
```

#### Operaciones

```js
var result = x + y;
var result = x - y;
var result = x * y;
```

#### Condiciones

```js
if (x > 20) {
    console.log(20);
}
```

#### Ciclos
```js
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

### Analisis Semantico

El analisis semantico puede detectar los siguientes errores:
- Variables no declaradas
```js
const x = 20;
const result = x + y; // y no esta declarada
```

- Re-declaracion de variables
```js
const x = 20;
const x = 10; // La variable x ya esta declarada
```

- Re-asignacion de constantes

```js
const x = 20;
x = 20; // La variable x es una constante no se pude reasignar.
```