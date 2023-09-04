var express = require('express');
//const {Sequelize,QueryTypes } = require('sequelize');
  var router = express.Router();
const { sequelizeModels } = require('../models');
  /* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
  const cliente = require('../models').cliente;
const pedido = require('../models').pedido; // Asegúrate de importar el modelo Pedido
const clientepedido = require('../models').cliente_pedido; // Asegúrate de importar el modelo ClientePedido
pedido.hasMany(clientepedido);

router.get('/findAllPedidosByClientId/:id/json', function(req, res, next) { 
 
    const { rol } = req.user;

    if (rol !== 'admin') {
        return res.sendStatus(403);
    }
	let id = req.params.id;
pedido.findAll({
  include: [
    {
      model: clientepedido,
required: true,
where: {
      cliente_idcliente: id
    },
     
    },
  ],

})
          .then(instancia => {
            if(instancia) {
              res.status(200).json(instancia);
            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))

    });

module.exports = router;
