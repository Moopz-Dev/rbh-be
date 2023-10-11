const { Op, Sequelize } = require("sequelize");
const { Card, User, Comment } = require("../models");
const CardEnum = require("../config/cardEnum");
const { getFormattedDateAndTime } = require("../utils/dateTimeFormatter");

//with pagination
exports.list = async (req, res, next) => {
  try {
    const { page } = req.query;
    const parsedPage = Number(page);
    const currentPage =
      (typeof parsedPage === "number" &&
        parsedPage > 0 &&
        Math.floor(parsedPage)) ||
      1;
    const perPage = 3;
    const offset = (currentPage - 1) * perPage;
    let cards = await Card.findAll({
      limit: Number(perPage),
      offset: Number(offset),
      attributes: ["id", "title", "status", "description", "createdAt"],
      order: [["createdAt", "desc"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username"],
        },
      ],
    });

    cards = cards.map((card) => card.toJSON());

    cards.forEach((card) => {
      const formattedDateTime = getFormattedDateAndTime(card.createdAt);
      card.createdDate = formattedDateTime[0];
      card.createdTime = formattedDateTime[1];
      delete card.createdAt;
    });

    res.status(200).json(cards);
  } catch (error) {
    next(error);
  }
};

exports.getOneCard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const card = await Card.findOne({
      where: { id },
      attributes: ["id", "title", "status", "description", "createdAt"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username", "email"],
        },
        {
          model: Comment,
          as: "comment",
          attributes: ["text", "createdAt"],
          order: [["createdAt", "asc"]],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["username"],
            },
          ],
        },
      ],
    });
    if (!card) {
      res.status(404).json({
        message: "The card does not exist. It may have already been deleted",
      });
    }

    const resp = card.toJSON();
    resp.comment.forEach((comment) => {
      const [createdDate, createdTime] = getFormattedDateAndTime(
        comment.createdAt
      );
      comment.createdDate = createdDate;
      comment.createdTime = createdTime;
      delete comment.createdAt;
    });

    const [createdDate, createdTime] = getFormattedDateAndTime(card.createdAt);
    resp.createdDate = createdDate;
    resp.createdTime = createdTime;
    delete resp.createdAt;

    res.status(200).json(resp);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description, title, status: reqBodyStatus } = req.body;

    const updateData = {};

    if (reqBodyStatus) {
      //check if in enum
      const status = CardEnum[reqBodyStatus.toUpperCase()];
      if (!status) {
        return res.status(400).json({ message: "Invalid status" });
      }
      updateData.status = status;
    }

    if (description) {
      //check for empty description
      if (!description.trim(" ")) {
        return res.status(400).json({ message: "Description cannot be empty" });
      }
      updateData.description = description;
    }

    if (title) {
      //check for empty description
      if (!title.trim(" ")) {
        return res.status(400).json({ message: "Title cannot be empty" });
      }
      updateData.title = title;
    }

    //check if card exist
    const card = await Card.findOne({ where: { id } });
    if (!card) {
      return res.status(404).json({
        message: "The card does not exist. It may have already been deleted",
      });
    }

    await card.update({
      ...updateData,
    });

    res.status(200).json({ message: "card updated" });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    //check empty
    if (!id.trim(" ")) {
      return res.status(400).json({
        message: "card ID cannot be empty",
      });
    }

    //check if card exist
    const card = await Card.findOne({ where: { id } });
    if (!card) {
      return res.status(404).json({
        message: "The card does not exist. It may have already been deleted",
      });
    }

    await Comment.destroy({ where: { cardId: card.id } });
    await card.destroy();

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

exports.add = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;

    //check if required fields are empty
    if (!userId || !title || !description) {
      return res
        .status(400)
        .json({ message: "One or more required fields are empty or null" });
    }
    const card = await Card.create({
      userId,
      title,
      description,
      status: CardEnum["TO DO"],
    });
    res.status(201).json({ message: "card created" });
  } catch (error) {
    next(error);
  }
};
