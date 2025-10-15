const prisma = require("../lib/prisma");

const getNotes = async (req, res, next) => {
  try {
    const notes = await prisma.note.findMany({
      where: { authorId: req.userId },
    });

    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

const searchNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const note = await prisma.note.findUnique({ where: { id } });
    if (!note) return res.status(404).json({ message: "Nota não encontrada" });
    if (note.authorId !== req.userId)
      return res.status(403).json({ message: "Acesso negado" });

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await prisma.note.create({
      data: {
        title,
        content,
        authorId: req.userId,
      },
    });

    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

const updateNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await prisma.note.findUnique({ where: { id } });
    if (!existing)
      return res.status(404).json({ message: "Nota não encontrada" });
    if (existing.authorId !== req.userId)
      return res.status(403).json({ message: "Acesso negado" });

    const { title, content } = req.body;
    const updated = await prisma.note.update({
      where: { id },
      data: { title, content },
    });

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteNote = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const existing = await prisma.note.findUnique({ where: { id } });

    if (!existing)
      return res.status(404).json({ message: "Nota não encontrada" });
    if (existing.authorId !== req.userId)
      return res.status(403).json({ message: "Acesso negado" });

    await prisma.note.delete({ where: { id } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  deleteNote,
  getNotes,
  searchNote,
  updateNote,
};
