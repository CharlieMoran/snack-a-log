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
  
  const createSnack = async (snack) => {
    let { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    try {
      let newSnack = await db.one(
        "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
        [name, fiber, protein, added_sugar, is_healthy, image]
      );
      return newSnack;
    } catch (error) {
      return error;
    }
  };
  
  const deleteSnack = async (id) => {
    try {
      let snackDeleted = await db.one(
        "DELETE FROM snacks WHERE id=$1 RETURNING *",
        id
      );
      return snackDeleted;
    } catch (error) {
      return error;
    }
  };
  

  


module.exports = {
  getSnacksAll,
  getSnack,
  createSnack,
  deleteSnack,
};