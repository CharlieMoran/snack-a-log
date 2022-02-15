const db = require("../db/dbConfig.js");

const getSnacksAll = async () => {
  try {
    let allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};



module.exports = {
  getSnacksAll,
};