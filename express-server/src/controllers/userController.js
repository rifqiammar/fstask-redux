const bcrypt = require("bcrypt");
const errorhandling = require("../helpers/errorhandling.js");
const { User, Post } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

// Get Users And Post
const getUserPosts = async (req, res) => {
  try {
    const result = await User.findAll({
      include: [Post],
    });

    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, nama, email, role } = req.body;
    // Password Hashing
    const salt = bcrypt.genSaltSync(10);
    const passhash = bcrypt.hashSync(password, salt);

    console.log(passhash);

    // Insert Into DB
    const result = await User.create({ username, password: passhash, nama, email, role });

    // Send Data With Api
    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id);
    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });

    res.status(200).json(errorhandling(200, "success", result));
  } catch (error) {
    res.status(500).json(errorhandling(500, error.message));
  }
};

module.exports = { getUsers, createUser, getUserPosts, getUserById, deleteUser };
