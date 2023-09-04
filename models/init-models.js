var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _cliente_factura = require("./cliente_factura");
var _cliente_pedido = require("./cliente_pedido");
var _empleado = require("./empleado");
var _empleado_pedido = require("./empleado_pedido");
var _factura = require("./factura");
var _objeto3d = require("./objeto3d");
var _objeto3d_pedido = require("./objeto3d_pedido");
var _pedido = require("./pedido");
var _pedido_factura = require("./pedido_factura");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var cliente_factura = _cliente_factura(sequelize, DataTypes);
  var cliente_pedido = _cliente_pedido(sequelize, DataTypes);
  var empleado = _empleado(sequelize, DataTypes);
  var empleado_pedido = _empleado_pedido(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var objeto3d = _objeto3d(sequelize, DataTypes);
  var objeto3d_pedido = _objeto3d_pedido(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var pedido_factura = _pedido_factura(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);

  cliente_factura.belongsTo(cliente, { as: "cliente_idcliente_cliente", foreignKey: "cliente_idcliente"});
  cliente.hasMany(cliente_factura, { as: "cliente_facturas", foreignKey: "cliente_idcliente"});
  cliente_pedido.belongsTo(cliente, { as: "cliente_idcliente_cliente", foreignKey: "cliente_idcliente"});
  cliente.hasMany(cliente_pedido, { as: "cliente_pedidos", foreignKey: "cliente_idcliente"});
  empleado_pedido.belongsTo(empleado, { as: "empleado_idempleado_empleado", foreignKey: "empleado_idempleado"});
  empleado.hasMany(empleado_pedido, { as: "empleado_pedidos", foreignKey: "empleado_idempleado"});
  cliente_factura.belongsTo(factura, { as: "factura_idfactura_factura", foreignKey: "factura_idfactura"});
  factura.hasMany(cliente_factura, { as: "cliente_facturas", foreignKey: "factura_idfactura"});
  pedido_factura.belongsTo(factura, { as: "factura_idfactura_factura", foreignKey: "factura_idfactura"});
  factura.hasMany(pedido_factura, { as: "pedido_facturas", foreignKey: "factura_idfactura"});
  objeto3d_pedido.belongsTo(objeto3d, { as: "objeto3d_idobjeto3d_objeto3d", foreignKey: "objeto3d_idobjeto3d"});
  objeto3d.hasMany(objeto3d_pedido, { as: "objeto3d_pedidos", foreignKey: "objeto3d_idobjeto3d"});
  cliente_pedido.belongsTo(pedido, { as: "pedidoIdpedido_pedido", foreignKey: "pedidoIdpedido"});
  pedido.hasMany(cliente_pedido, { as: "cliente_pedidos", foreignKey: "pedidoIdpedido"});
  empleado_pedido.belongsTo(pedido, { as: "pedido_idpedido_pedido", foreignKey: "pedido_idpedido"});
  pedido.hasMany(empleado_pedido, { as: "empleado_pedidos", foreignKey: "pedido_idpedido"});
  objeto3d_pedido.belongsTo(pedido, { as: "pedido_idpedido_pedido", foreignKey: "pedido_idpedido"});
  pedido.hasMany(objeto3d_pedido, { as: "objeto3d_pedidos", foreignKey: "pedido_idpedido"});
  pedido_factura.belongsTo(pedido, { as: "pedido_idpedido_pedido", foreignKey: "pedido_idpedido"});
  pedido.hasMany(pedido_factura, { as: "pedido_facturas", foreignKey: "pedido_idpedido"});

  return {
    cliente,
    cliente_factura,
    cliente_pedido,
    empleado,
    empleado_pedido,
    factura,
    objeto3d,
    objeto3d_pedido,
    pedido,
    pedido_factura,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
