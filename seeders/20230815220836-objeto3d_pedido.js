'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
  /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
      await queryInterface.bulkInsert('objeto3d_pedido', [
	     
       /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
       {
       	objeto3d_idobjeto3d: 5,
       	pedido_idpedido: 5,
       
       }
       ], {});
    },

    async down (queryInterface, Sequelize) {
	    
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('objeto3d_pedido', null, {});
    }
};
