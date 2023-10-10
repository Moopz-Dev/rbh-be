const express = require("express");
const router = express.Router();

//controller
const { list, add } = require("../controllers/user");

//routes
router.get("/users/", list);
// router.get("/user/:id", read);
router.post("/user", add);
// router.put("/user/:id", update);
// router.delete("/user/:id", remove);

module.exports = router;
