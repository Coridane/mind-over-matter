const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
      },
    password: {
        type: String,
        required: true,
        // regex for low security pw
    },
    highScore: {
      type: INT
    }
  });

const User = model('User', userSchema);

module.exports = User;