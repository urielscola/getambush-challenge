import { truncateString } from './truncateString';

describe('[UTILS] truncateString', () => {
  it('Should truncate a string', () => {
    expect(truncateString('some string', 5)).toBe('some ...');
  });

  it('Should not truncate a string', () => {
    expect(truncateString('some string', 99)).toBe('some string');
  });
});
