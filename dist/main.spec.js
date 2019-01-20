"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
describe('MyApi getName function return value', () => {
    it('Should be defined.', () => {
        const myapi = new main_1.MyApi();
        expect(myapi.getName()).toBeDefined('The function getName() should be defined.');
    });
    it("Should't return blank.", () => {
        const myapi = new main_1.MyApi();
        expect(myapi.getName()).not.toMatch('', 'The function getName() should return the name.');
    });
    it("Should return 'MyName'", () => {
        const myapi = new main_1.MyApi();
        expect(myapi.getName()).toMatch('MyName1');
    });
});
//# sourceMappingURL=main.spec.js.map