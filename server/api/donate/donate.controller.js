'use strict';

var _ = require('lodash');
var Donate = require('./donate.model');

// Get list of donates
exports.index = function(req, res) {
  Donate.find(function (err, donates) {
    if(err) { return handleError(res, err); }
    return res.json(200, donates);
  });
};

// Get a single donate
exports.show = function(req, res) {
  Donate.findById(req.params.id, function (err, donate) {
    if(err) { return handleError(res, err); }
    if(!donate) { return res.send(404); }
    return res.json(donate);
  });
};

// Creates a new donate in the DB.
exports.create = function(req, res) {
  Donate.create(req.body, function(err, donate) {
    if(err) { return handleError(res, err); }
    return res.json(201, donate);
  });
};

// Updates an existing donate in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Donate.findById(req.params.id, function (err, donate) {
    if (err) { return handleError(res, err); }
    if(!donate) { return res.send(404); }
    var updated = _.merge(donate, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, donate);
    });
  });
};

// Deletes a donate from the DB.
exports.destroy = function(req, res) {
  Donate.findById(req.params.id, function (err, donate) {
    if(err) { return handleError(res, err); }
    if(!donate) { return res.send(404); }
    donate.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}