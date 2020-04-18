const pipe = (f, g) => (...args) => g(f(...args));

const pipeAsync = (result, next) => async (...args) => next(await result(...args));

const compose = (...fns) => fns.reduce(pipe);

const composeAsync = (...fns) => fns.reduce(pipeAsync);

const trace = (label) => (value) => {
  // eslint-disable-next-line no-console
  console.log(`${label}: ${value}`);
  return value;
};

const findAsync = async (array, callback) => {
  let result;
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const isFound = await callback(array[i], i, array);
    if (isFound) {
      result = array[i];
      break;
    }
  }
  return result;
};

module.exports = {
  pipe,
  pipeAsync,
  compose,
  composeAsync,
  trace,
  findAsync,
};
