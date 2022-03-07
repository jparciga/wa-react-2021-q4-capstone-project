import Categories from "../mocks/en-us/product-categories.json";

function getCategories() {
  const cats = [];
  for (let i in Categories.results) {
    let cat = Categories.results[i];

    cats.push({
      name: cat.data.name,
      id: cat.id,
      selected: false,
    });
  }
  return cats;
}

export { getCategories };
