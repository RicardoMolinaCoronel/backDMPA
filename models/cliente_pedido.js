const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_pedido', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    },
    pedidoIdpedido: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
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
          { name: "pedidoIdpedido" },
        ]
      },
    ]
  });
};
