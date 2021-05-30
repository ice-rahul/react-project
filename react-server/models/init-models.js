var DataTypes = require("sequelize").DataTypes;
var _banner = require("./banner");
var _course = require("./course");
var _healthTips = require("./healthTips");
var _lesson = require("./lesson");
var _myOrder = require("./myOrder");
var _subscription = require("./subscription");
var _trainers = require("./trainers");
var _users = require("./users");

function initModels(sequelize) {
  var banner = _banner(sequelize, DataTypes);
  var course = _course(sequelize, DataTypes);
  var healthTips = _healthTips(sequelize, DataTypes);
  var lesson = _lesson(sequelize, DataTypes);
  var myOrder = _myOrder(sequelize, DataTypes);
  var subscription = _subscription(sequelize, DataTypes);
  var trainers = _trainers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  lesson.belongsTo(course, { as: "course", foreignKey: "courseId"});
  course.hasMany(lesson, { as: "lessons", foreignKey: "courseId"});
  myOrder.belongsTo(course, { as: "course", foreignKey: "courseId"});
  course.hasMany(myOrder, { as: "myOrders", foreignKey: "courseId"});
  subscription.belongsTo(course, { as: "course", foreignKey: "courseId"});
  course.hasMany(subscription, { as: "subscriptions", foreignKey: "courseId"});
  subscription.belongsTo(myOrder, { as: "order", foreignKey: "orderId"});
  myOrder.hasMany(subscription, { as: "subscriptions", foreignKey: "orderId"});
  course.belongsTo(trainers, { as: "trainer", foreignKey: "trainerId"});
  trainers.hasMany(course, { as: "courses", foreignKey: "trainerId"});
  myOrder.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(myOrder, { as: "myOrders", foreignKey: "userId"});
  subscription.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(subscription, { as: "subscriptions", foreignKey: "userId"});

  return {
    banner,
    course,
    healthTips,
    lesson,
    myOrder,
    subscription,
    trainers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
