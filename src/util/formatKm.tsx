export const formatKm = (value: number) => {
  if (isNaN(value)) {
    return value;
  }

  const kmString = value.toString();
  return kmString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
