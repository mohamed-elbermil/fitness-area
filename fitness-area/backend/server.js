// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect('mongodb+srv://mohameddu69780:wS3OA9xBDWNZgFZB@fitness-area.ta0ul63.mongodb.net/?retryWrites=true&w=majority&appName=fitness-area', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api', contactRoutes);


// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
});
