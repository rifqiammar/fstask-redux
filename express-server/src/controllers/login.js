const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const errorhandling = require("../helpers/errorhandling");

const secret_key = "!s5c1737tcert";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const usr = await User.findOne({ where: { username: username } });

    if (!usr) {
      throw new Error(`${username} Tidak di Temukan`);
    }

    const match = await bcrypt.compare(password, usr.password);

    if (!match) {
      throw new Error(`${username} Password Salah`);
    }

    const token = jwt.sign({ nama: usr.nama, createdat: usr.createdat }, secret_key, { expiresIn: "1d" });

    res.status(200).json(errorhandling(200, "Selamat Anda Berhasil Login", { token, usrId: usr.id }));
  } catch (error) {
    res.status(400).json(errorhandling(400, error.message));
  }
};

// Pengecekan Token Untuk Akses Api | Middleware
const cekToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Gagal");
    }

    jwt.verify(authorization, secret_key);

    next();
  } catch (error) {
    res.send(errorhandling(400, error.message));
  }
};

module.exports = {
  login,
  cekToken,
};
