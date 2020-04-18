const {
  comparePrice,
  compareResultPrice,
  isBuildable,
} = require('../costUtils');

describe('comparePrice function', () => {
  const building1 = {
    wood: 2, clay: 3, iron: 1, food: 5,
  };

  const building2 = {
    wood: 4, clay: 2, iron: 6, food: 7,
  };

  const building3 = {
    wood: 1, clay: 4, iron: 1, food: 2,
  };

  const buildingArray = [building1, building2, building3];

  it('should return 1 when b is Price than a', () => {
    expect(comparePrice(building1, building2)).toBe(-8);
  });

  it('should sort and array of building from Price to the most expensive', () => {
    const expectedArray = [
      {
        wood: 1, clay: 4, iron: 1, food: 2,
      },
      {
        wood: 2, clay: 3, iron: 1, food: 5,
      },
      {
        wood: 4, clay: 2, iron: 6, food: 7,
      },
    ];

    const sortedArray = buildingArray.sort(comparePrice);
    expect(sortedArray).toStrictEqual(expectedArray);
  });
});


describe('compareResultPrice function', () => {
  const building1 = {
    result: {
      wood: 2, clay: 3, iron: 1, food: 5,
    },
  };

  const building2 = {
    result: {
      wood: 4, clay: 2, iron: 6, food: 7,
    },
  };

  const building3 = {
    result: {
      wood: 1, clay: 4, iron: 1, food: 2,
    },
  };

  const buildingArray = [building1, building2, building3];

  it('should return 1 when b is Price than a', () => {
    expect(compareResultPrice(building1, building2)).toBe(-8);
  });

  it('should sort and array of building from Price to the most expensive', () => {
    const expectedArray = [
      {
        result: {
          wood: 1, clay: 4, iron: 1, food: 2,
        },
      },
      {
        result: {
          wood: 2, clay: 3, iron: 1, food: 5,
        },
      },
      {
        result: {
          wood: 4, clay: 2, iron: 6, food: 7,
        },
      },
    ];

    const sortedArray = buildingArray.sort(compareResultPrice);
    expect(sortedArray).toStrictEqual(expectedArray);
  });
});

describe('isBuildable function', () => {
  it('should return false if one of the resources lack', () => {
    const buildingCost = {
      wood: 1, clay: 4, iron: 1, food: 2,
    };
    const ressources = {
      wood: 1, clay: 4, iron: 1, food: 1,
    };

    expect(isBuildable(buildingCost, ressources)).toBe(false);
  });

  it('should return true if enough ressources', () => {
    const buildingCost = {
      wood: 1, clay: 4, iron: 1, food: 2,
    };
    const ressources = {
      wood: 1, clay: 4, iron: 1, food: 3,
    };

    expect(isBuildable(buildingCost, ressources)).toBe(true);
  });
});
