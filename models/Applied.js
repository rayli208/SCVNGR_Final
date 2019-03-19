// Initiate mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppliedSchema = new Schema({

  company: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  link: {
    type: String,
    required: false
  },
  salary: {
    type: Number,
    required: false
  },
  location: {
    type: String,
    required: false,
    default: ""
  },
  info: {
    type: String,
    required: false,
    default: ""
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  positionId: {
    type: Number,
    required: true,
    default: 1
  }

});

const Applied = mongoose.model('Applied', AppliedSchema);

module.exports = Applied;