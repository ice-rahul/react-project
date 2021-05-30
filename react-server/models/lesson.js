const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lesson', {
    lessonId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'lesson_id'
    },
    lessonTitle: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'lesson_title'
    },
    lessonImageUrl: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'lesson_image_url'
    },
    lessonVideoUrl: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'lesson_video_url'
    },
    lessonDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'lesson_detail'
    },
    lessonPdf: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'lesson_pdf'
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'course_id'
      },
      field: 'course_id'
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
