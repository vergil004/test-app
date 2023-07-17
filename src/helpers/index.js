export const filterTag = (tags, filterSlug) => {
  const tagsArr = JSON.parse(JSON.stringify(tags));
  return tagsArr.filter((item) => item.slug === filterSlug);
};
