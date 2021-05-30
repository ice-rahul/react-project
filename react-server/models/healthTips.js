const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthTips', {
    tipId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tip_id'
    },
    tipTitle: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'tip_title'
    },
    tipImageUrl: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'tip_image_url'
    },
    tipDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tip_detail'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'health_tips',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tip_id" },
        ]
      },
    ]
  });
};
