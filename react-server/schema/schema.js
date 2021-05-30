const graphQl = require('graphql');
const sequelize = require('../database/database');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } = graphQl

const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    courseId: {type: GraphQLString},
    courseName: {type: GraphQLString},
    courseDetail: {type: GraphQLString},
    courseImage: {type: GraphQLString},
    courseMrp: {type: GraphQLString},
    coursePrice: {type: GraphQLString},
    courseDuration: {type: GraphQLString},
    courseLevel: {type: GraphQLString},
    courseStatus: {type: GraphQLString},
    expiry: {type: GraphQLString},
    trainer: {
      type: TrainerType,
      resolve(parent, args) {
        return (models.trainers.findOne({
          where: {
            trainerId: parent.trainerId
          }
        }))
      }
    },
    lessons: {
      type: new GraphQLList(LessonType),
      resolve(parent, args) {
        return (models.lesson.findAll({
          where: {
            courseId: parent.courseId
          }
        }))
      }
    }
  })
})

const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: () => ({
    trainerId: {type: GraphQLString},
    trainerName: {type: GraphQLString},
    trainerDegree: {type: GraphQLString},
    trainerBio: {type: GraphQLString},
    trainerStatus: {type: GraphQLString},
  })
})

const LessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    lessonId: {type: GraphQLString},
    lessonTitle: {type: GraphQLString},
    lessonImageUrl: {type: GraphQLString},
    lessonVideoUrl: {type: GraphQLString},
    lessonDetail: {type: GraphQLString},
    lessonPdf: {type: GraphQLString},
  })
})

const BannerType = new GraphQLObjectType({
  name: 'Banner',
  fields: () => ({
    bannerId: {type: GraphQLString},
    bannerTitle: {type: GraphQLString},
    bannerUrl: {type: GraphQLString},
    status: {type: GraphQLString},
  })
})

const HealthTipType = new GraphQLObjectType({
  name: 'HealthTip',
  fields: () => ({
    tipId: {type: GraphQLString},
    tipTitle: {type: GraphQLString},
    tipImageUrl: {type: GraphQLString},
    tipDetail: {type: GraphQLString},
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
    orderId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    orderAmount: {type: GraphQLString},
    discount: {type: GraphQLString},
    totalAmount: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parent, args){
        return (models.users.findOne({
          userId: parent.userId
        }))
      }
    },
    course: {
      type: CourseType,
      resolve(parent, args){
        return (models.course.findOne({
          where: {
            courseId: parent.courseId
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
            courseId: args.id
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
        return (models.healthTips.findAll())
      }
    },
    myOrder: {
      type: new GraphQLList(MyOrderType),
      args: {userId: {type: GraphQLID}},
      resolve(parent, args){
        return (models.myOrder.findAll({
          where: {
            userId: args.userId
          }
        }))
      }
    }
  }
})

module.exports = new graphQl.GraphQLSchema({
  query: RootQuery
})