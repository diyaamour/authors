const express = require("express");
const { 
  handleCreateAuthor, 
  handleGetAllAuthors ,
  handleGetAuthorById,
  handleUpdateAuthorByid,
  handleDeleteAuthorById
} = require("../controllers/author.controller");
const router = express.Router();
router.post("/", handleCreateAuthor);
router.get("/", handleGetAllAuthors);
router.get("/:id", handleGetAuthorById);
router.put("/:id", handleUpdateAuthorByid);
router.delete('/:id', handleDeleteAuthorById);
module.exports = {
  authorRouter: router,
};
