// Configuración servidor HTTPS
import express from "express";
import https from "https";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor HTTPS funcionando 🔐");
});

const options = {
  pfx: fs.readFileSync("cert.pfx"),
  passphrase: "1234"
};

https.createServer(options, app).listen(8080, () => {
  console.log("Servidor en https://localhost:8080");
});
