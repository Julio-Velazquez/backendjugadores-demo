const Jugador = require("../models/Jugadores");

const getPlayers = async (_, res) => {
  try {
    const players = await Jugador.find();
    res.status(200).json({
      ok: true,
      players,
    });
    console.log(players);
  } catch (error) {
    console.log(error);
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = new Jugador(req.body);
    await player.save();
    res.status(200).json({
      ok: true,
      player,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPlayers, createPlayer };