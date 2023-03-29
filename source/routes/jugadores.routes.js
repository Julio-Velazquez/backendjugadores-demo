const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
  deletePlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/julio", getPlayers);
router.post("/julio", createPlayer);
router.delete("/julio/:id", deletePlayer);

module.exports = router;
