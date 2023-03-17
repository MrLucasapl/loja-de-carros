export const accentRemover = (text: string) => {
  return text.normalize("NFD").replace(/[^A-Za-z0-9]+/g, "");
};
