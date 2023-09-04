'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
      await queryInterface.bulkInsert('cliente', [
	     
       /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
       {
       	idcliente: 1,
       	nombre: 'Ricardo Molina',
       	direccion: 'Guayaquil',
	correo: 'ricardom23@gmail.com',
telefono: '0987654321'
       },
{
       	idcliente: 2,
       	nombre: 'Roberto Nuñez',
       	direccion: 'Guayaquil',
	correo: 'rn2ww@gmail.com',
telefono: '0982356472'
       },
{
       	idcliente: 5,
       	nombre: 'Camila Cortez',
       	direccion: 'Guayaquil',
	correo: 'camico23@gmail.com',
telefono: '0954673652'
       }
       ], {});
    },

    async down (queryInterface, Sequelize) {
	    
      /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
      await queryInterface.bulkDelete('cliente', null, {});
    }
};
