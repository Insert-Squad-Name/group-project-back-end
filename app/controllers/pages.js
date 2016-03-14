'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Page = models.page;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Page.find()
    .then(pages => res.json({ pages }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Page.findById(req.params.id).populate('_entriesIds')
    .then(pages => pages ? res.json({ pages }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  console.log(req.body);
  let pages = Object.assign(req.body, {
    _userId: req.currentUser._id,
  });
  console.log(Page);
  Page.create(pages)
    .then(pages => res.json({ pages }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  Page.findOne(search)
    .then(pages => {
      if (!pages) {
        return next();
      }

      delete req.body._userId;  // disallow userId reassignment.
      return pages.update(req.body)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  Page.findOne(search)
    .then(pages => {
      if (!pages) {
        return next();
      }

      return pages.remove()
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
  { method: authenticate, except: ['index', 'show'] },
], });
