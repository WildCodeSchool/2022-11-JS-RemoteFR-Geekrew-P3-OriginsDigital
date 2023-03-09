const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const favoriteControllers = require("./controllers/favoriteControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// router.get("/video", videoControllers.browse);
router.get("/video", videoControllers.browseByCategory);
router.get("/video/:id", videoControllers.readVideoById);
router.put("/video/:id", videoControllers.edit);
router.post("/video", videoControllers.add);
router.delete("/video/:id", videoControllers.destroy);

router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.put("/category/:id", categoryControllers.edit);
router.post("/category", categoryControllers.add);
router.delete("/category/:id", categoryControllers.destroy);

router.get("/favorite", favoriteControllers.browse);
router.get("/favorite/:id", favoriteControllers.read);
router.put("/favorite/:id", favoriteControllers.edit);
router.post("/favorite", favoriteControllers.add);
router.delete("/favorite/:id", favoriteControllers.destroy);
module.exports = router;
