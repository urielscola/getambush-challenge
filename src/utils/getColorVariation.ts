import { Theme } from 'assets/styles';

export function getColorVariation(theme: Theme, index: number): string {
  switch (index % 10) {
    case 1:
      return theme.colors.blue;
    case 2:
      return theme.colors.purple;
    case 3:
      return theme.colors.pink;
    case 4:
      return theme.colors.salmon;
    case 5:
      return theme.colors.gold;
    case 6:
      return theme.colors.yellow;
    case 7:
      return theme.colors.lemon;
    case 8:
      return theme.colors.cyan;
    case 9:
      return theme.colors.bg1Light;
    default:
      return theme.colors.blue;
  }
}
