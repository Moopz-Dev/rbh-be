const express = require("express");
const router = express.Router();

//controller
const {
  list,
  getOneCard,
  update,
  remove,
  add,
} = require("../controllers/card");

//routes
router.get("/cards/", list);
router.get("/card/:id", getOneCard);
router.post("/card", add);
router.put("/card/:id", update);
router.delete("/card/:id", remove);

module.exports = router;
