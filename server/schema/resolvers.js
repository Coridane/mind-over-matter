const {User} = require('../model')

const resolvers = {
    Mutation: {
        updateHighScore: async (parent, args) => {
            const score = await User.find(highScore);
            return score;
        },
        createUser: async (parent, args) => {
            const User = await  ;
            return User;
        },

    },
},

module.exports = resolvers;