const boscode = require('boscode');

export class MyApi {
  public getName(): string {
    return 'tsnodebase';
  }
}

process.argv.forEach((val, index, array) => {
  console.log(index + ': ' + val);
});

const t = 15;
console.log(t);

const a = '2'; //boscode.get();''
boscode.display('a = ', a);
