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
    authToken: {type: GraphQLString},
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
    },
    user: {
      type: UserType,
      args: { 
        authToken: {type: GraphQLID},
        mobile: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString}, 
      },
      async resolve(parent, args){
        let user = await models.users.findOne({
          where: {
            authToken: args.authToken,
          }
        });
        if(!user) {
          user = await models.users.create({
            authToken: args.authToken,
            mobile: args.mobile
          })
        } else {
          await models.users.update({
            name: args.name ? args.name : user.name,
            email: args.email ? args.email : user.email,
            mobile: args.mobile ? args.mobile : user.mobile
          }, {
            where: {
              authToken: args.authToken,
            }
          })
          user = await models.users.findOne({
            where: {
              authToken: args.authToken,
            }
          });
        }
        return user;
      }
    },
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    banner: {
      type: BannerType,
      args: {
        bannerTitle: {type: GraphQLString},
        bannerUrl: {type: GraphQLString}
      },
      async resolve(parent, args){
        await models.banner.create({
          bannerTitle: args.bannerTitle,
          bannerUrl: args.bannerUrl
        })
        return models.banner.findAll()
      }
    },
    healthTip: {
      type: HealthTipType,
      args: {
        tipTitle: {type: GraphQLString},
        tipDetail: {type: GraphQLString},
        tipImageUrl: {type: GraphQLString}
      },
      async resolve(parent, args){
        await models.healthTips.create({
          tipTitle: args.tipTitle,
          tipDetail: args.tipDetail,
          tipImageUrl: args.tipImageUrl
        })
        return models.healthTips.findAll()
      }
    }
  }
})

module.exports = new graphQl.GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})