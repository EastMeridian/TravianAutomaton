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
      const delta = this.times[key].delta / 60000;
      total += delta;
      result += `- ${key}: ${delta.toFixed(5)} minutes\n`;
    });
    result += `total: ${total.toFixed(5)} minutes\n`;
    return result;
  }
}

const createTimer = ({ name }) => new Timer(name);

export { createTimer };
