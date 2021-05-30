const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainers', {
    trainerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'trainer_id'
    },
    trainerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'trainer_name'
    },
    trainerDegree: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'trainer_degree'
    },
    trainerBio: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'trainer_bio'
    },
    trainerStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'trainer_status'
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
    tableName: 'trainers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trainer_id" },
        ]
      },
    ]
  });
};
