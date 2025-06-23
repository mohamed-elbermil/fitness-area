// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send('Message enregistré avec succès');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de l’enregistrement');
  }
});

module.exports = router;
