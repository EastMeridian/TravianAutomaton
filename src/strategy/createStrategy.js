const createStrategy = ({
  orderType = 'NO_TYPE',
  requiredData = [],
  run = () => false,
} = {}) => {
  const order = {
    type: orderType,
    payload: null,
  };
  return ({
    run,
    updatePayload: (payload) => { order.payload = payload; },
    getOrder: () => order,
    getRequiredData: () => requiredData,
  });
};

module.exports = createStrategy;
