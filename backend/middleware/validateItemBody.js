module.exports = function(req, res, next) {
  const body = {};
  [
    'title',
    'designer',
    'summary',
    'slug',
    'price',
    'image',
    'image1',
    'image2',
    'description',
  ].forEach(prop => {
    if (req.body.hasOwnProperty(prop)) {
      body[prop] = req.body[prop];
    }
  });
  req.body = body;
  next();
};
