const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/julio", getPlayers);
router.post("/julio", createPlayer);

module.exports = router;