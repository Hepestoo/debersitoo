"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figura_1 = require("./figura");
const cuadrado_1 = require("./cuadrado");
const triangulo_1 = require("./triangulo");
const triangulo = new triangulo_1.Triangulo();
triangulo.lado = 10;
console.log(triangulo.calcularArea());
const cuadrado = new cuadrado_1.Cuadrado();
triangulo.lado = 10;
console.log(cuadrado.calcularArea());
const figura = new figura_1.Figura();
console.log(figura.calcularArea());
