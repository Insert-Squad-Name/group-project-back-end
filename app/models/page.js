'use strict';

const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  _entriesIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entry',
  }]
}, {
  timestamps: true,
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
