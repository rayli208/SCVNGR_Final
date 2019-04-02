// Initiate mongoose, schema and passport local strategy
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;

// Create user schema to take in first name, last name, email address, and password
const UserSchema = new Schema ({

  first_name: {
    type: String,
    trim: true,
    required: false
  },
  last_name: {
    type: String,
    trim: true,
    required: false
  },
  user_created: {
    type: Date,
    default: Date.now
  },
  applied: [
    {
      type: Schema.Types.ObjectId,
      ref: "Applied"
    }
  ],
  heardback: [
    {
      type: Schema.Types.ObjectId,
      ref: "HeardBack"
    }
  ],
  offer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Offer"
    }
  ]

});

// Use passport-local-mongoose to hash user password
UserSchema.plugin(passportLocalMongoose);

// Create user model from the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;