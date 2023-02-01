module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) { 
    return res.status(400).json('Some required fields are missing');
  }
  next();
};