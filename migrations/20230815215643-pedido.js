'use strict';

/* IMPORTE El ARCHIVO CON EL MODELO */
  const handler = require('../models').pedido;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
      await handler.sync()
  },

  async down (queryInterface, Sequelize) {
   /* ELIMINACIÓN LA TABLA */
      await queryInterface.dropTable('pedido');
  }
};
