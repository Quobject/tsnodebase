"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boscode = require('boscode');
class MyApi {
    getName() {
        return 'tsnodebase';
    }
}
exports.MyApi = MyApi;
process.argv.forEach((val, index, array) => {
    console.log(index + ': ' + val);
});
const t = 15;
console.log(t);
const a = '2'; //boscode.get();''
boscode.display('a = ', a);
//# sourceMappingURL=main.js.map