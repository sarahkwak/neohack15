'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  title: String,
  image: String,
  pitch: String,
  progress_bar: Number,
  amt_raised: Number
});

module.exports = mongoose.model('Campaign', CampaignSchema);