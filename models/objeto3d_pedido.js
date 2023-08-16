const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('objeto3d_pedido', {
    objeto3d_idobjeto3d: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'objeto3d',
        key: 'idobjeto3d'
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
    tableName: 'objeto3d_pedido',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_objeto3d1_idx",
        using: "BTREE",
        fields: [
          { name: "objeto3d_idobjeto3d" },
        ]
      },
      {
        name: "fk_table1_pedido2_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_idpedido" },
        ]
      },
    ]
  });
};
