const createConsumer = require('./createConsumer');

const createAutomate = () => {
  console.log('createAutomate');

  const ressourcesConsumer = createConsumer({ name: 'ressources' });
  const buildingQueueConsumer = createConsumer({ name: 'buildingQueue' });
  const fieldsConsumer = createConsumer({ name: 'fields' });

  return ({
    consume: ({ ressources, buildingList, fields }) => {
      ressourcesConsumer.consume(ressources);
      buildingQueueConsumer.consume(buildingList);
      fieldsConsumer.consume(fields);
    },
    display: () => {
      ressourcesConsumer.display();
      buildingQueueConsumer.display();
      fieldsConsumer.display();
    },
  });
};

module.exports = createAutomate;
