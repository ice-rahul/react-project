const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course', {
    course_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    course_detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    course_image: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    course_mrp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    course_price: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    course_duration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    course_level: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trainers',
        key: 'trainer_id'
      }
    },
    course_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    expiry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "in days"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'course',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
      {
        name: "FK_COURSE_TRAINER",
        using: "BTREE",
        fields: [
          { name: "trainer_id" },
        ]
      },
    ]
  });
};
