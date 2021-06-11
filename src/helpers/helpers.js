export const firstWord = (name) => {
  const ind = name.indexOf(" ");
  return name.substring(0, ind);
};
