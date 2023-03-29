const express = require("express");

const router = express.Router();

const { hashingPassword } = require("./middleware/auth");
const { login, logout } = require("./controllers/authController");
const rolesCheck = require("./middleware/rolesCheck");

const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const favoriteControllers = require("./controllers/favoriteControllers");
const categoryControllers = require("./controllers/categoryControllers");
const authorization = require("./middleware/authorization");
const userControllers = require("./controllers/userControllers");

// const verifyUser = require("./middleware/verifyUser");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// router.get("/videos", videoControllers.browse);
router.get("/videos", videoControllers.browseByCategory);
router.get("/videos/:id", videoControllers.readVideoById);
router.put("/videos/:id", videoControllers.edit);
router.post("/add-videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.put("/sign-up", userControllers.updateUser);
router.post("/sign-up", hashingPassword, userControllers.addUser);

router.post("/sign-in", login);
router.get("/profile", authorization, userControllers.getOneUser);
router.get("/log-out", logout, userControllers.getUserByEmail);
router.delete("/account-delete", userControllers.deleteUser);
router.get("/admin", rolesCheck, userControllers.getUserByEmail);

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/favorites", favoriteControllers.browse);
router.get("/favorites/:id", favoriteControllers.read);
router.put("/favorites/:id", favoriteControllers.edit);
router.post("/favorites", favoriteControllers.add);
router.delete(
  "/favorites/:id",
  authorization,
  // verifyUser,
  favoriteControllers.destroy
);

module.exports = router;
