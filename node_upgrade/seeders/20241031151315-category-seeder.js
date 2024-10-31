'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'NodeJs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'VueJS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ReactJS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ReactNative',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laravel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flutter',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories',{}, null);
  }
};
