const errorhandling = require("../helpers/errorhandling.js");
const { User, Posts } = require("../../models");

const getPosts = async (req, res) => {
  try {
    const result = await Posts.findAll();

    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const createPost = async (req, res) => {
  try {
    const { UserId, posting_status, title, content } = req.body;

    // set slug
    const slug = title.toLowerCase().split(" ").join("-");

    // // Insert Into DB
    const result = await Posts.create({ UserId, posting_status, title, content, slug });

    // // Send Data With Api
    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Posts.findByPk(id);
    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Posts.destroy({ where: { id } });

    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

module.exports = { getPosts, createPost, getPostById, deletePost };
