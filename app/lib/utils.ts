export function truncateString(str: string) {
  if (str.length <= 24) {
    return str;
  } else {
    return str.slice(0, 20) + "...";
  }
}
