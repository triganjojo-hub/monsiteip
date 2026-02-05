<<<<<<< HEAD
const express = require("express");
const app = express();

// Railway / Render fournit le port automatiquement
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  console.log("Visiteur IP :", ip);

  let bgColor = "#111";
  if (ip.startsWith("88.")) bgColor = "#1e90ff";
  if (ip.startsWith("192.")) bgColor = "#8e44ad";

  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Bienvenue</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          background: ${bgColor};
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: Arial, sans-serif;
        }
        .box {
          background: rgba(0,0,0,0.4);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Bienvenue 👋</h1>
        <p>Page personnalisée</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
=======
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
>>>>>>> db895f025da60e1f9d0f5139e8a97d525c75bc11
});