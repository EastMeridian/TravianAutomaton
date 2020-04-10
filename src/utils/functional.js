const pipe = (f, g) => (...args) => g(f(...args));
const pipeAsync = (result, next) => async (...args) => next(await result(...args));
const compose = (...fns) => fns.reduce(pipe);
const composeAsync = (...fns) => fns.reduce(pipeAsync);
const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

module.exports = {
  pipe,
  pipeAsync,
  compose,
  composeAsync,
  trace,
};
