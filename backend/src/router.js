const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/video", videoControllers.browse);
router.get("/video/:id", videoControllers.read);
router.put("/video/:id", videoControllers.edit);
router.post("/video", videoControllers.add);
router.delete("/video/:id", videoControllers.destroy);

module.exports = router;
