export function parseFood(food) {
  const foodSplit = food.split("+");
  const foodTitle = foodSplit[0];
  const foodDetail =
    "+ " +
    foodSplit
      .splice(1)
      .join(" + ")
      .replace(/\([^)]*\)/g, "");
  return { foodTitle, foodDetail };
}
