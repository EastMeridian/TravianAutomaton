module.exports = {
  name: 'adventures',
  pageId: 'adventures',
  selector: 'tr',
  adapter: (elements) => elements.slice(1).map((element) => {
    const result = element.children;
    return ({
      id: element.getAttribute('id'),
      time: result[2].innerText,
      reminingTime: result[4].innerText,
    });
  }),
  toArray: true,
};
