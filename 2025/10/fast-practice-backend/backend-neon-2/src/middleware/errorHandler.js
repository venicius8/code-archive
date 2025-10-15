const errorHandler = (error, req, res, next) => {
  console.error("Erro:", error);

  if (error.code === "P2002") {
    return res.status(409).json({
      message: "Conflito: registro duplicado",
    });
  }

  if (error.code === "P2025") {
    return res.status(404).json({
      message: "Registro não encontrado",
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: "Dados inválidos",
      errors: error.errors,
    });
  }

  res.status(500).json({
    message: "Houve um erro, tente essa ação um outro dia",
  });
};

module.exports = errorHandler;
