module.exports = function(req, res, next) {
  const body = {};
  [
    'title',
    'description',
    'image',
    'image1',
    'image2',
    'type',
    'cbd',
    'thc',
    'effects',
    'flavor'
  ].forEach(prop => {
    if (req.body.hasOwnProperty(prop)) {
      body[prop] = req.body[prop];
    }
  });
  req.body = body;
  next();
};
