/* tslint:disable:no-unused-variable */
import { add } from './index';

describe('My program', () => {
  it('should add', () => {
    const testObject = add(3, 4);
    expect(testObject).toBe(7);
  });
});
