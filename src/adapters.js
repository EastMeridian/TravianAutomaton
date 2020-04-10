const innerText = (element) => parseInt(element.innerText.replace(/\s/g, ''), 10);

module.exports = {
  innerText,
};
