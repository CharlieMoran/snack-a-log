const db = require("../db/dbConfig.js");

const getSnacksAll = async () => {
  try {
    let allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
    try {
      let snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
      return snack;
    } catch (error) {
      return error;
    }
  };
  
  



module.exports = {
  getSnacksAll,
  getSnack,
};