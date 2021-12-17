import { getColorVariation } from './getColorVariation';
import { theme } from 'assets/styles';

describe('[UTILS] getColorVariation', () => {
  it('Should return blue', () => {
    expect(getColorVariation(theme, 1)).toBe(theme.colors.blue);
  });
  it('Should return purple', () => {
    expect(getColorVariation(theme, 2)).toBe(theme.colors.purple);
  });
  it('Should return pink', () => {
    expect(getColorVariation(theme, 3)).toBe(theme.colors.pink);
  });
  it('Should return salmon', () => {
    expect(getColorVariation(theme, 4)).toBe(theme.colors.salmon);
  });
  it('Should return gold', () => {
    expect(getColorVariation(theme, 5)).toBe(theme.colors.gold);
  });
  it('Should return yellow', () => {
    expect(getColorVariation(theme, 6)).toBe(theme.colors.yellow);
  });
  it('Should return lemon', () => {
    expect(getColorVariation(theme, 7)).toBe(theme.colors.lemon);
  });
  it('Should return cyan', () => {
    expect(getColorVariation(theme, 8)).toBe(theme.colors.cyan);
  });
  it('Should return bg1Light', () => {
    expect(getColorVariation(theme, 9)).toBe(theme.colors.bg1Light);
  });
  it('Should return the default value', () => {
    expect(getColorVariation(theme, 10)).toBe(theme.colors.blue);
  });
});
