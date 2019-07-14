const mongoose = require("mongoose");
const User = require("./../../models/User");

const resolvers = {
  Query: {
    users: () => {
      return User.find({});
    },
    user: (root, args, context, info) => {
      console.log(args);
      return User.findById(args.id);
    }
  }
};

module.exports = resolvers;
