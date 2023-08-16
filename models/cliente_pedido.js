const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_pedido', {
    cliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    },
    pedido_idpedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedido',
        key: 'idpedido'
      }
    }
  }, {
    sequelize,
    tableName: 'cliente_pedido',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_cliente_idx",
        using: "BTREE",
        fields: [
          { name: "cliente_idcliente" },
        ]
      },
      {
        name: "fk_table1_pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};
