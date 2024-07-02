export const removeSpacesAndGaps = (name: any) => {
  const encodedName = encodeURIComponent(name)
    .replace(/%20/g, "-")
    .replace(/&/g, "and")
    .replace(/%26/g, "and")
    .replace(/%25/g, "%")
    .toLowerCase()
    .trim();

  return encodedName;
};
