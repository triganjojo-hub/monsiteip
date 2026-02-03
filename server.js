const express = require("express");
const app = express();

// Railway fournit le port automatiquement
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    console.log("Visiteur IP :", ip);
    res.send("Bienvenue sur le site — IP enregistrée");
});

app.listen(PORT, () => {
    console.log("Serveur lancé sur le port", PORT);
});