const prisma = require("../lib/prisma");

const getPets = async (req, res) => {
  try {
    const pets = await prisma.pet.findMany();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Houve um erro no servidor." });
  }
};

const createPet = async (req, res) => {
  const { name, gender, race, age } = req.body;

  try {
    const createdPet = await prisma.pet.create({
      data: {
        name,
        gender,
        race,
        age,
      },
    });

    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({ message: "Houve um erro no servidor." });
  }
};

const deletePet = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedPet = await prisma.pet.delete({
      where: { id: id },
    });
    res.status(204).json(deletedPet);
  } catch (error) {
    res.status(500).json({ message: "Houve um erro no servidor." });
    console.log(error);
  }
};

module.exports = {
  getPets,
  createPet,
  deletePet,
};
