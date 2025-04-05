const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Définir le dossier contenant les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Route pour servir la page principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`TOUS SUR http://localhost:${PORT}  MA GUEULE`);
});