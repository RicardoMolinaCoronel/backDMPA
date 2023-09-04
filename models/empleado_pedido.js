const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado_pedido', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleado_idempleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empleado',
        key: 'idempleado'
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
    tableName: 'empleado_pedido',
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
        name: "fk_table1_empleado1_idx",
        using: "BTREE",
        fields: [
          { name: "empleado_idempleado" },
        ]
      },
      {
        name: "fk_table1_pedido3_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};
