var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  password: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  user_id: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  user_friends: {
    type: String,
    default: '',
    trim: true
  }
});

module.exports = mongoose.model('User', User);


