const walkingModel = require("../models/walkingModel");

const getWalking = async (req, res, next) => {
  try {
    const walking = await walkingModel.find();
    res.status(200).json(walking);
  } catch (error) {
    next(error);
  }
};

const searchWalking = async (req, res, next) => {
  try {
    const walking = await walkingModel.findById(req.params.id);
    if (!walking)
      return res.status(404).json({ message: "Atividade não encontrada" });

    res.status(200).json(walking);
  } catch (error) {
    next(error);
  }
};

/*

const updateWalking = async (req, res, next) => {
  const id = Number(req.params.id);
const updateWalking = async (req, res, next) => {
  try {
    const updated = await walkingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Atividade não encontrada" });
const deleteWalking = async (req, res, next) => {
  try {
    const deleted = await walkingModel.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Atividade não encontrada" });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
    res.status(204).json({ message: "Atividade excluída com sucesso" });
  } catch (error) {
    next(error);
  }
};

*/

const createWalking = async (req, res, next) => {
  try {
    const walking = await new walkingModel(req.body).save();
    res.status(201).json(walking);
  } catch (error) {
    next(error);
  }
};

const updateWalking = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

const deleteWalking = async (req, res, next) => {
  const id = Number(req.params.id);

  try {
    res.status(204).json({ message: "Atividade excluída com sucesso" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWalking,
  searchWalking,
  createWalking,
  updateWalking,
  deleteWalking,
};
