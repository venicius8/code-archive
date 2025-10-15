const prisma = require("../lib/prisma");

const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const searchProduct = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product)
      return res.status(204).json({ message: "Produto não encontrado" });

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  const { productName, category, description, priceBRL } = req.body;

  if (!productName || !category || !description || !priceBRL) {
    return res
      .status(400)
      .json({ message: "Erro ao criar produto: campo faltando" });
  }

  try {
    const postedProduct = await prisma.product.create({
      data: {
        category,
        description,
        priceBRL: parseInt(priceBRL),
        productName,
      },
    });
    res.status(201).json(postedProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;

  if (!id || isNaN(id)) res.status(400).json({ message: "ID inválido" });
  if (!Object.keys(updateData).length)
    return res.status(400).json({ message: "Nenhum dado" });

  try {
    const product = await prisma.product.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const product = await prisma.product.delete({ where: { id } });
    if (!product)
      return res.status(204).json({ message: "Produto não encontrado" });

    res.status(204).json({ message: "Produto deletado" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  searchProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
