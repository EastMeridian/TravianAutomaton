const reduceSum = (acc, next) => acc + next;

const isBuildable = (buildingCost, ressources) => ressources.wood >= buildingCost.wood
&& ressources.clay >= buildingCost.clay
&& ressources.iron >= buildingCost.iron
&& ressources.food >= buildingCost.food;

const comparePrice = (
  a, b,
) => Object.values(a).reduce(reduceSum) - Object.values(b).reduce(reduceSum);

const compareResultPrice = (a, b) => comparePrice(a.result, b.result);

module.exports = {
  isBuildable,
  comparePrice,
  compareResultPrice,
};
