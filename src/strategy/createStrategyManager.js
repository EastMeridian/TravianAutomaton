const { findAsync } = require('../utils/functional');

const createStrategyManager = ({ strategies, providersManager }) => ({
  run: () => findAsync(strategies, async (strategy) => {
    const requiredData = strategy.getRequiredData();
    const data = await providersManager.request(requiredData);
    return strategy.run(data);
  }),
});

module.exports = createStrategyManager;
