const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course', {
    courseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'course_id'
    },
    courseName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'course_name'
    },
    courseDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'course_detail'
    },
    courseImage: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'course_image'
    },
    courseMrp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'course_mrp'
    },
    coursePrice: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'course_price'
    },
    courseDuration: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'course_duration'
    },
    courseLevel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'course_level'
    },
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trainers',
        key: 'trainer_id'
      },
      field: 'trainer_id'
    },
    courseStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: 'course_status'
    },
    expiry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "in days"
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
