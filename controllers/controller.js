const asyncHandler = require("express-async-handler");// yeh try catch ka work kr detaa h 

//@desc Get all Contacts 
//@route GET /api/contacts
//@access public 


const getContacts = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get the contacts" });
});
//@desc Get all Contacts 
//@route GET /api/contacts
//@access public 
const createContact = asyncHandler((req, res) => {
    console.log("The request body is  :" , req.body);
    const {name,email,number} = req.body;
    if(name || email || number)
    {
        res.status(400);
        throw new Error("All fields are mandatory !");
        
    }
    
  res.status(201).json({ message: "Create contacts" });
});
//@desc Create New Contacts 
//@route GET /api/contacts
//@access public 
const getContact = asyncHandler((req, res) => {
  // for individual contact
  res.status(200).json({ message: `Get  contact for ${req.params.id} ` });
});
//@desc Get Contact
//@route GET /api/contacts
//@access public 
const putContact = asyncHandler((req, res) => {
  // for update an individual
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete Contacts 
//@route GET /api/contacts
//@access public 
const deleteContact = asyncHandler( (req, res) => {
  // for delete an individual
  res.status(200).json({ message: `Delete contact for ${req.params.id} ` });
});

module.exports = {
  getContact,
  getContacts,
  createContact,
  putContact,
  deleteContact,
};
