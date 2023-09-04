'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
   /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
      await queryInterface.bulkInsert('pedido', [
	     
       /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
              {
       idpedido: 1,
       	fechahora: '2021-01-02 00:00:00',
       	estado: 'finalizado',
       },
       {
       idpedido: 2,
       	fechahora: '2023-04-01 00:00:00',
       	estado: 'finalizado',
       },
       {
       idpedido: 3,
       	fechahora: '2021-01-01 00:00:00',
       	estado: 'en proceso',
       },
       {
       idpedido: 4,
       	fechahora: '2021-01-01 00:00:00',
       	estado: 'finalizado',
       },
       {
       idpedido: 5,
       	fechahora: '2021-01-01 00:00:00',
       	estado: 'en entrega',
       },
       {
       idpedido: 6,
       	fechahora: '2021-01-01 00:00:00',
       	estado: 'en proceso',
       },
	{
       idpedido: 7,
       	fechahora: '2021-01-01 00:00:00',
       	estado: 'en proceso',
       }
       ], {});
    },

    async down (queryInterface, Sequelize) {
	    
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('pedido', null, {});
    }
};
