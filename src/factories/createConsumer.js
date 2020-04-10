/* eslint-disable no-console */
const createConsumer = ({ name }) => {
  let state;

  return ({
    name,
    consume: (nextState) => { state = nextState; },
    display: () => {
      console.log('#', name);
      console.log(state);
    },
    getState: () => state,
  });
};

module.exports = createConsumer;
