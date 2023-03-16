export const formatKm = (value: number) => {
  const km = Number(value);
  if (isNaN(km)) {
    return value;
  }

  const kmString = km.toString();
  const kmLength = kmString.length;
  const groups = Math.floor((kmLength - 1) / 3);

  let formatted = kmString.slice(0, kmLength - 3 * groups);
  for (let i = 1; i <= groups; i++) {
    formatted +=
      (formatted.length > 0 ? "." : "") +
      kmString.slice(kmLength - i * 3, kmLength - (i - 1) * 3);
  }

  return formatted;
};
