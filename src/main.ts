export class MyApi {
  public getName(): string {
    return '';
  }
}

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

const t = 10;
console.log(t);
