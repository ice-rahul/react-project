var DataTypes = require("sequelize").DataTypes;
var _banner = require("./banner");
var _course = require("./course");
var _health_tips = require("./health_tips");
var _lesson = require("./lesson");
var _my_order = require("./my_order");
var _subscription = require("./subscription");
var _trainers = require("./trainers");
var _users = require("./users");

function initModels(sequelize) {
  var banner = _banner(sequelize, DataTypes);
  var course = _course(sequelize, DataTypes);
  var health_tips = _health_tips(sequelize, DataTypes);
  var lesson = _lesson(sequelize, DataTypes);
  var my_order = _my_order(sequelize, DataTypes);
  var subscription = _subscription(sequelize, DataTypes);
  var trainers = _trainers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  lesson.belongsTo(course, { as: "course", foreignKey: "course_id"});
  course.hasMany(lesson, { as: "lessons", foreignKey: "course_id"});
  my_order.belongsTo(course, { as: "course", foreignKey: "course_id"});
  course.hasMany(my_order, { as: "my_orders", foreignKey: "course_id"});
  subscription.belongsTo(course, { as: "course", foreignKey: "course_id"});
  course.hasMany(subscription, { as: "subscriptions", foreignKey: "course_id"});
  subscription.belongsTo(my_order, { as: "order", foreignKey: "order_id"});
  my_order.hasMany(subscription, { as: "subscriptions", foreignKey: "order_id"});
  course.belongsTo(trainers, { as: "trainer", foreignKey: "trainer_id"});
  trainers.hasMany(course, { as: "courses", foreignKey: "trainer_id"});
  my_order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(my_order, { as: "my_orders", foreignKey: "user_id"});
  subscription.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(subscription, { as: "subscriptions", foreignKey: "user_id"});

  return {
    banner,
    course,
    health_tips,
    lesson,
    my_order,
    subscription,
    trainers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
