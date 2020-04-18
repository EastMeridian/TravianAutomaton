const { BUILD_FIELD } = require('../../orders');
const { compareResultPrice, isBuildable } = require('../../utils/costUtils');

const maxQueue = 1;

module.exports = {
  orderType: BUILD_FIELD,
  requiredData: ['fields', 'buildingQueue', 'resources'],
  run([fields, buildingQueue, resources]) {
    if (buildingQueue.length >= maxQueue) return false;
    const sortedArray = fields.sort(compareResultPrice);
    const buildableField = sortedArray.find((field) => isBuildable(field.result, resources));
    if (!buildableField) return false;
    this.updatePayload(buildableField.name);
    return true;
  },
};
