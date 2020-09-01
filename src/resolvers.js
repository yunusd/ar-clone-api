const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async allUsers(root, args, { models }) {
      return models.User.findAll();
    },
  },
  Mutation: {
    async createUser(root, { firstName, lastName, email }, { models }) {
      return models.User.create({
        firstName,
        lastName,
        email,
      });
    },
  },
};

module.exports = resolvers;
