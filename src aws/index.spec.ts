import { AWSPost } from './index';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(true).toBe(true);
  });
});

describe('AWSPost', () => {
  it('RequestPost', (done) => {

Promise.resolve().then(() => {
  return AWSPost.RequestPost();
}).then(() => {
  console.log('ready');
  done();
});


  });
});
