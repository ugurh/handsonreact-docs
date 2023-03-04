import test from 'node:test';
import { add } from './math';

test('add numbers', () => {
  expect(add(1, 1)).toEqual(2);
  expect(add(2, 2)).toEqual(4);
});