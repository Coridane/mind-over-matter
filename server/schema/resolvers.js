const {User} = require('../model')
const {signToken} = require('../utils/auth');
// login mutation using JWT authentication
const resolvers = { 
    Query: {
        me: async(parent, context, args) => {
            console.log("this gets the user who is logged in")
        }
    },
    Mutation: {
        // updateHighScore: async (parent, args) => {
        //     const score = await User.find(highScore);
        //     return score;
        // },
        createUser: async (parent, args) => {
            const userData = await  User.create(args);
            const token = signToken(userData)
            return {userData, token};
        },
        // login mutation that finds single user by userName
        login: async (parent, { userName, password }) => {
                const user = await User.findOne({ userName });
          
                if (!user) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const correctPw = await user.isCorrectPassword(password);
          
                if (!correctPw) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                const token = signToken(user);
                return { token, user };
              },
        
        // createPaymentMethod: async ()
    }
};

module.exports = resolvers;