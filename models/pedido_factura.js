const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido_factura', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factura_idfactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'factura',
        key: 'idfactura'
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
    tableName: 'pedido_factura',
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
        name: "fk_table1_factura1_idx",
        using: "BTREE",
        fields: [
          { name: "factura_idfactura" },
        ]
      },
      {
        name: "fk_table1_pedido4_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};
