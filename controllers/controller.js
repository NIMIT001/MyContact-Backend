const asyncHandler = require("express-async-handler"); // yeh try catch ka work kr detaa h
const Contact = require("../models/contactModel");

//@desc Get all Contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler(async (req, res) => {
  const connects = await Contact.find({ user_id: req.user.id });
  res.status(200).json(connects);
});
//@desc Get all Contacts
//@route GET /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is  :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const connects = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(connects);
});
//@desc Create New Contacts
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async (req, res) => {
  // for individual contact

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }

  res.status(200).json(contact);
});
//@desc Get Contact
//@route GET /api/contacts
//@access private
const putContact = asyncHandler(async (req, res) => {
  // for update an individual

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't allow to update others contacts");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateContact);
});

//@desc delete Contacts
//@route GET /api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  // Delete the contact by ID
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't allow to delete others contacts");
  }

  // Respond with the deleted contact or a success message
  res.status(200).json({ message: "Contact deleted successfully", contact });
});

module.exports = {
  getContact,
  getContacts,
  createContact,
  putContact,
  deleteContact,
};
