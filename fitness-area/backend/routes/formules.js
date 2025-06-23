const express = require('express');
const router = express.Router();
const Formule = require('../models/Formule');

router.get('/', async (req, res) => {
  try {
    const formules = await Formule.find();
    res.json(formules);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
