'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Entry = models.entry;
const Page = models.page;

const authenticate = require('./concerns/authenticate');
const multer = require('./concerns/multer.js');

const index = (req, res, next) => {
  Entry.find()
    .then(entries => res.json({ entries }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => entry ? res.json({ entry }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let entry = Object.assign(req.body, {
    _userId: req.currentUser._id,
  });
  Entry.create(entry)
    .then(entry => {
      Page.findByIdAndUpdate(req.body._pageId, {$addToSet: {"_entries": entry._id}}, {safe: true, upsert: true, new : true}, function(err, numAffected) {
        if(err) {console.error(err)}
        else {console.log(numAffected)}
      });
      return entry;
    })
    .then(entry => res.json({ entry }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  Entry.findOne(search)
    .then(entry => {
      if (!entry) {
        return next();
      }

      delete req.body._userId;  // disallow owner reassignment.
      return entry.update(req.body)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  // let searchb = { _id: req.params.id};

  console.log(search);
  Entry.findOne(search)
    .then(entry => {
      console.log(entry);
      if (!entry) {
        return next();
      }

      return entry.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['index', 'show'], },
  { method: multer.single(), except: ['index', 'show', 'destroy'], },
], });
