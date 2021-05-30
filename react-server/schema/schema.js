const graphQl = require('graphql');
const sequelize = require('../database/database');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } = graphQl

const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    course_id: {type: GraphQLString},
    course_name: {type: GraphQLString},
    course_detail: {type: GraphQLString},
    course_image: {type: GraphQLString},
    course_mrp: {type: GraphQLString},
    course_price: {type: GraphQLString},
    course_duration: {type: GraphQLString},
    course_level: {type: GraphQLString},
    expiry: {type: GraphQLString},
    trainer: {
      type: TrainerType,
      resolve(parent, args) {
        return (models.trainers.findOne({
          where: {
            trainer_id: parent.trainer_id
          }
        }))
      }
    },
    lessons: {
      type: new GraphQLList(LessonType),
      resolve(parent, args) {
        return (models.lesson.findAll({
          where: {
            course_id: parent.course_id
          }
        }))
      }
    }
  })
})

const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: () => ({
    trainer_id: {type: GraphQLString},
    trainer_name: {type: GraphQLString},
    trainer_degree: {type: GraphQLString},
    trainer_bio: {type: GraphQLString},
    trainer_status: {type: GraphQLString},
  })
})

const LessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    lesson_id: {type: GraphQLString},
    lesson_title: {type: GraphQLString},
    lesson_image_url: {type: GraphQLString},
    lesson_video_url: {type: GraphQLString},
    lesson_detail: {type: GraphQLString},
    lesson_pdf: {type: GraphQLString},
  })
})

const BannerType = new GraphQLObjectType({
  name: 'Banner',
  fields: () => ({
    banner_id: {type: GraphQLString},
    banner_title: {type: GraphQLString},
    banner_url: {type: GraphQLString},
    status: {type: GraphQLString},
  })
})

const HealthTipType = new GraphQLObjectType({
  name: 'HealthTip',
  fields: () => ({
    tip_id: {type: GraphQLString},
    tip_title: {type: GraphQLString},
    tip_image_url: {type: GraphQLString},
    tip_detail: {type: GraphQLString},
    status: {type: GraphQLString},
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    mobile: {type: GraphQLString},
    status: {type: GraphQLString},
  })
})

const MyOrderType = new GraphQLObjectType({
  name: 'MyOrder',
  fields: () => ({
    order_id: {type: GraphQLString},
    payment_id: {type: GraphQLString},
    order_amount: {type: GraphQLString},
    discount: {type: GraphQLString},
    total_amount: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parent, args){
        return (models.users.findOne({
          user_id: parent.user_id
        }))
      }
    },
    course: {
      type: CourseType,
      resolve(parent, args){
        return (models.course.findOne({
          where: {
            course_id: parent.course_id
          }
        }))
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args){
        return (models.course.findAll())
      }
    },
    course: {
      type: CourseType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args){
        return (models.course.findOne({
          where: {
            course_id: args.id
          }
        }))
      }
    },
    banner: {
      type: new GraphQLList(BannerType),
      resolve(parent, args){
        return (models.banner.findAll())
      }
    },
    healthTips: {
      type: new GraphQLList(HealthTipType),
      resolve(parent, args){
        return (models.health_tips.findAll())
      }
    },
    myOrder: {
      type: new GraphQLList(MyOrderType),
      args: {user_id: {type: GraphQLID}},
      resolve(parent, args){
        return (models.my_order.findAll({
          where: {
            user_id: args.user_id
          }
        }))
      }
    }
  }
})

module.exports = new graphQl.GraphQLSchema({
  query: RootQuery
})