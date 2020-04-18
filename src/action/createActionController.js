
const reduceActions = (acc, next) => ({ ...acc, [next.type]: next });

const createActionController = ({ actions, pageController }) => {
  const actionStore = actions.reduce(reduceActions, {});
  console.log('actionStore', actionStore);

  return ({
    consume: async ({ type, payload }) => {
      const page = await pageController.request(payload);
      actionStore[type].run(page, payload);
    },
  });
};

module.exports = createActionController;
