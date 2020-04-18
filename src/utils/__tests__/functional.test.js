const {
  findAsync,
} = require('../functional');

const {
  sleep,
} = require('../time');

describe('findAsync function', () => {
  it('should return 4 as found', async () => {
    const array = [1, 2, 3, 4, 5];
    const found = await findAsync(array, async (item) => {
      await sleep(5);
      return item === 4;
    });

    expect(found).toBe(4);
  });
});
