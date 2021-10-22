"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infoMessage = (...params) => {
    console.log(...params);
};
const errorMessage = (...params) => {
    console.error(...params);
};
exports.default = {
    infoMessage,
    errorMessage,
};
