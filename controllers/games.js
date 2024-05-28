// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

// Файл controllers/games.js

const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Игра обновлена" });
};

// Файл controllers/games.js

const sendGameDeleted = (req, res) => {
  // Объект игры отправляем в формате JSON
  res.setHeader("Content-Type", "application/json");
  // Отправляем на клиент найденный и удалённый элемент из базы данных
  res.end(JSON.stringify(req.game));
};

module.exports = {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
};
