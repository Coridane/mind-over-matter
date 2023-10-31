const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: context =>  {
    // allows token to be sent via  req.query or headers
    const { req } = context ;

    // ["Bearer", "<tokenvalue>"]
    const token = req.headers.authorization || req.body.token || req.query.token;

    if (!token) {
      return req
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ userName, _id }) {
    const payload = { userName, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};