const { Card, User, Comment } = require("../models");

exports.add = async (req, res, next) => {
  try {
    const { text, userId, cardId } = req.body;

    if (!text || !userId || !cardId) {
      return res
        .status(400)
        .json({ message: "One or more required fields are missing" });
    }

    //check for empty text
    if (!text.trim(" ")) {
      return res.status(400).json({ message: "Text cannot be empty" });
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

    await Comment.create({ text, userId, cardId });
    res.status(201).json({ message: "comment created" });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text, userId } = req.body;

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

    if (comment.userId != userId) {
      return res.status(403).json({
        message: "The given userId is not the owner of the comment.",
      });
    }

    await comment.update({ text });
    res.status(200).json({ message: "update successful" });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const comment = await Comment.findOne({
      where: {
        id,
      },
    });
    if (!comment) {
      return res.status(400).json({ message: "Comment does not exist" });
    }

    if (comment.userId != userId) {
      return res.status(403).json({
        message: "The given userId is not the owner of the comment.",
      });
    }

    await comment.destroy();
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
