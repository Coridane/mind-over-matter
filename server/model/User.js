const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },    
    password: {
        type: String,
        required: true,
        min: [6, 'Your password must be at least 6 characters']
        
        // regex for low security pw
    },
    highScore: {
      type: INT
    }
  });

const User = model('User', userSchema);

module.exports = User;