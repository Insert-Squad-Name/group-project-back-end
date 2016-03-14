'use strict';

let mongoose = require('mongoose');


const entrySchema = new mongoose.Schema({
  content: {
      title: {
        type: String,
        required: true
    },
      body: {
        type: String,
        required: true
    }
  },
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    _pageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Page',
      required: true,
  }
}, {
  timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
