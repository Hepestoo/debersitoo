"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figura = void 0;
class Figura {
    constructor() {
        this._area = 0;
        this._lado = 0;
        this._base = 0;
        this._altura = 0;
    }
    get area() {
        return this._area;
    }
    set area(value) {
        this._area = value;
    }
    get lado() {
        return this._area;
    }
    set lado(value) {
        this._lado = value;
    }
    get base() {
        return this._base;
    }
    set base(value) {
        this._base = value;
    }
    get altura() {
        return this._area;
    }
    set altura(value) {
        this._altura = value;
    }
    calcularArea() {
        this._area = this._lado * this._lado;
        return this._area;
    }
}
exports.Figura = Figura;
