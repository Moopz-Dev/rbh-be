const { Op, Sequelize } = require("sequelize");
const { Card, User, Comment } = require("../models");

exports.add = async (req, res, next) => {
  try {
    const { text, userId, cardId } = req.body;

    if (!text || !userId || !cardId) {
      return res
        .status(400)
        .json({ message: "One or more required fields are missing" });
    }

    const existsUser = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (!existsUser) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const existsCard = await Card.findOne({
      where: {
        id: cardId,
      },
    });
    if (!existsCard) {
      return res.status(400).json({
        message: "Card does not exist or has been previously deleted",
      });
    }

    const comment = await Comment.create({ text, userId, cardId });
    res.status(201).json({ message: "comment created" });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    if (!text || !text.trim(" ")) {
      return res.status(400).json({ message: "Text is empty or missing " });
    }

    //check comment exist
    let comment = await Comment.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      return res.status(400).json({ message: "Comment does not exist" });
    }

    comment = await comment.update({ text });
    res.status(200).json({ message: "update successful" });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      return res.status(400).json({ message: "Comment does not exist" });
    }

    await comment.destroy();
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
