const express = require("express");
const Note = require("../models/note");

const router = express.Router();

const findLatestNote = async () => {
  const latestNote = await Note.findOne().sort("-id");

  return latestNote?.id || 0;
};

router.get("/", async (req, res) => {
  try {
    const results = await Note.find({});

    return res.status(200).send({
      data: results,
    });
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.text) {
    return res.status(400).send({
      error: "Text is required in the body",
    });
  }

  try {
    const result = await Note.create({
      ...req.body,
      id: (await findLatestNote()) + 1,
    });

    return res.status(201).send({
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
});

router.put("/", async (req, res) => {
  const { id, text } = req.body;
  if (!id || !text) {
    return res.status(400).send({
      error: "id and text are required to update a note",
    });
  }

  try {
    const note = await Note.findOne({ id });

    if (note) {
      await Note.findOneAndUpdate({ id }, { text });

      return res.status(200).send({
        message: "Note was update",
      });
    } else {
      return res.status(404).send({
        error: "Note was not found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send({
      error: "id is not valid",
    });
  }

  try {
    const note = await Note.findOne({ id });

    if (note) {
      await Note.deleteOne({
        id,
      });
      return res.status(200).send({
        message: "Note was deleted",
      });
    } else {
      return res.status(404).send({
        error: "Note was not found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      error,
    });
  }
});

module.exports = router;
