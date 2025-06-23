const mongoose = require('mongoose');

const formuleSchema = new mongoose.Schema({
  location: String,       // "paris" ou "hors_paris"
  plan: String,           // "liberte" ou "express"
  weekly: Number,
  monthly: Number,
  description: String,
  expressHoursText: String,
  exclusiveOfferText: String,
  // ...autres champs si besoin
});

module.exports = mongoose.model('Formule', formuleSchema);
