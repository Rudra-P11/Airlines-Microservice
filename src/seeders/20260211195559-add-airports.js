'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Mumbai",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kempegowda International Airport",
        address: "Bengaluru",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hyderabad International Airport",
        address: "Hyderabad",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bengaluru International Airport",
        address: "Bengaluru",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indira Gandhi International Airport",
        address: "New Delhi",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
