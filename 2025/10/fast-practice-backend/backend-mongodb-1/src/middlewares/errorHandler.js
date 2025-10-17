const errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message:
      err.status === 404
        ? "Página não encontrada"
        : "Houve um erro no servidor",
  });
};

module.exports = errorHandler;
