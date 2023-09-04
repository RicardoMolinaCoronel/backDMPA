const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_factura', {
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
    factura_idfactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'factura',
        key: 'idfactura'
      }
    }
  }, {
    sequelize,
    tableName: 'cliente_factura',
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
        name: "fk_table1_cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "cliente_idcliente" },
        ]
      },
      {
        name: "fk_table1_factura2_idx",
        using: "BTREE",
        fields: [
          { name: "factura_idfactura" },
        ]
      },
    ]
  });
};
