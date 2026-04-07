const express = require("express");
const router = express.Router();
const UserController = require("../controller/authController");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/roleCheck");


//register as a user
router.post("/register", UserController.register);
//login as a user
router.post("/login", UserController.login);
// logout
router.post("/logout", UserController.logout);
// get all users
router.get("/users", auth, roleMiddleware("admin"), UserController.getAllUsers);
// delete user by id
router.delete("/:id", auth, roleMiddleware("admin"), UserController.deleteUser);
module.exports = router;
