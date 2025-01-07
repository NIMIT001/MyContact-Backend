const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  putContact,
  deleteContact,
} = require("../controllers/controller");
const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router;