export function truncateString(string: string, maxSize = 25): string {
  if (string.length > maxSize) {
    return string.slice(0, maxSize) + '...';
  }

  return string;
}
