class Timer {
  constructor(name) {
    this.name = name;
    this.times = {};
  }

  start(name) {
    this.times[name] = {};
    this.times[name].startDate = Date.now();
  }

  stop(name) {
    this.times[name].stopDate = Date.now();
    this.times[name].delta = this.times[name].stopDate - this.times[name].startDate;
  }

  getData() {
    let total = 0;
    let result = '';
    result += `> Timer ${this.name} data\n`;

    Object.keys(this.times).forEach((key) => {
      const { delta } = this.times[key];
      total += delta;
      result += `- ${key}: ${delta} ms\n`;
    });
    result += `total: ${total} ms\n`;
    return result;
  }
}

const createTimer = ({ name }) => new Timer(name);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const randomSleep = (ms, variance) => {
  const randomNumber = Math.random();
  const randomVariance = variance * randomNumber;
  const randomMs = randomNumber > 0.5 ? ms + randomVariance : ms - randomVariance;
  return sleep(randomMs);
};

module.exports = { createTimer, sleep, randomSleep };
