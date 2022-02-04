'use strict';

let data = require('../shirts.json');
data.forEach((e) => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shirts', data, {});
    /**
     * Add seed commands here.
     *
     * Example:
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shirts', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
