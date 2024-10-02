const express = require('express')
const router = express.Router()

const Auth = require("../controllers/app.authController.js");
const registerValidation = require("../validators/registerValidation");
const loginValidation = require("../validators/loginValidation");
router.post("/register", registerValidation, Auth.register);
router.post("/login", loginValidation, Auth.login);

const Commitment = require("../controllers/app.commitmentController.js");
const commitmentStoreValidation = require("../validators/commitmentValidation");

router.post("/commitment/store", commitmentStoreValidation, Commitment.store);
router.get("/commitment/index", Commitment.index);
router.get("/commitment/details/:id", Commitment.details);
router.put("/commitment/update/:id", commitmentStoreValidation, Commitment.update);

module.exports = router;

