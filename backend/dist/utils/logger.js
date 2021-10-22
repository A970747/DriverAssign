"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infoMessage = (...params) => {
    // tslint-disable-next-line no-console
    console.log(...params);
};
const errorMessage = (...params) => {
    // tslint-disable-next-line no-console
    console.error(...params);
};
exports.default = {
    infoMessage,
    errorMessage,
};
