const { User } = require("../models/");

exports.list = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

exports.add = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    //vvalidate input
    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "One or more required fields are missing" });
    }

    //check for username duplication
    const existUsername = await User.findOne({ where: { username: username } });
    if (existUsername) {
      return res
        .status(400)
        .json({ message: "This username is already taken" });
    }

    //check for invalid email
    const isEmail = email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (!isEmail) {
      return res.status(400).json({ message: "Invalid Email Format." });
    }

    //check for email duplication
    const existEmail = await User.findOne({
      where: { email: email },
    });
    if (existEmail) {
      return res.status(400).json({ message: "this email is already in use" });
    }

    await User.create({ username, email });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};
