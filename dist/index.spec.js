"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
const index_1 = require("./index");
describe('My program', () => {
    it('should add', () => {
        const testObject = index_1.add(3, 4);
        expect(testObject).toBe(7);
    });
});
