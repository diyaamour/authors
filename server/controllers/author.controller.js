const { Author } = require("../models/author.model");
const handleCreateAuthor = async (req, res) => {
    console.log('controller: handleCreateAuthor', req.body);

    try {
        const author = await Author.create(req.body);
        return res.json(author);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
const handleGetAllAuthors = async (req, res) => {
    console.log('controller: handleGetAllAuthors');

    try {
        const authors = await Author.find();
        return res.json(authors);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
const handleGetAuthorById = async (req, res) => {
    console.log('controller: handleGetAuthorById', req.params);

    try {
        const author = await Author.findById(req.params.id);
        return res.json(author);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
const handleUpdateAuthorByid = async (req, res) => {
    console.log('controller: handleUpdateAuthorByid', req.params, req.body);

    try{
        const author = await Author.findByIdAndUpdate(req.params.id, req.body,
            {
                runValidators: true,
                new: true
            });
        return res.json(author);
    } catch (error) {
        return res.status(400).json({...error, message: error.message});
    }
};
const handleDeleteAuthorById = async (req, res) => {
    console.log('controller: handleDeleteAuthorById', req.params);

    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        return res.json(author);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};
console.log("Author controller created");
module.exports = {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleUpdateAuthorByid,
    handleDeleteAuthorById
}