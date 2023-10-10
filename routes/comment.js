const express = require("express");
const router = express.Router();

//controller
const { add, update, remove } = require("../controllers/comment");

//routes
router.post("/comment", add);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

module.exports = router;
