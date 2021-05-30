const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lesson', {
    lesson_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lesson_image_url: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    lesson_video_url: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    lesson_detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lesson_pdf: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'course_id'
      }
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
    tableName: 'lesson',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lesson_id" },
        ]
      },
      {
        name: "FK_LESSON_COURSE",
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
    ]
  });
};
