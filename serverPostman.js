const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(cors());

// Tableau pour stocker les bons de livraison
let bonsLivraison = [];

// Route pour récupérer les bons de livraison
app.get('/api/bons-livraison', (req, res) => {
    res.json(bonsLivraison); // Envoie le tableau de bons de livraison
});

// Route pour ajouter un bon de livraison
app.post('/api/bons-livraison', (req, res) => {
    const newBons = req.body; // Récupère les données envoyées
    if (Array.isArray(newBons)) { // Vérifie si les données sont un tableau
        bonsLivraison = [...bonsLivraison, ...newBons]; // Ajoute les nouveaux bons au tableau existant
        res.status(201).json({ message: 'Bons de livraison ajoutés avec succès', bonsLivraison });
    } else {
        res.status(400).json({ message: 'Les données doivent être un tableau' });
    }
});

// Démarre le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});



