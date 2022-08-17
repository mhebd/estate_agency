module.exports = handlePropertyImages = (req, res, next) => {
  const files = req?.files;

  if(files) {
    req.body.images = req?.files?.images?.map(item => `./uploads/properties/${item.filename}`);
  };

  next();
}