const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../../src/models/user.model");

const password = "password1";
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  _id: mongoose.Types.ObjectId(),
  firstName: "Leon",
  lastName: "Kennedy",
  emailAddress: "leon.kennedy@resident.com",
  password,
};

const userTwo = {
  _id: mongoose.Types.ObjectId(),
  firstName: "Ada",
  lastName: "Wong",
  emailAddress: "ada.wong@resident.com",
  password,
};

const insertUsers = async (users) => {
  await User.insertMany(
    users.map((user) => ({ ...user, password: hashedPassword }))
  );
};

module.exports = {
  userOne,
  userTwo,
  insertUsers,
};
