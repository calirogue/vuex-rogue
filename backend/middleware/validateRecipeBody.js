module.exports = function(req, res, next) {
  const body = {};
  [
    'title',
    'type',
    'effects',
    'chef',
    'imagerecipe',
    'image1',
    'image2',
    'directions',
    'ingredient',
    'preptime',
    'cooktime',
    'totaltime',
    'yields',
    'description',
  ].forEach(prop => {
    if (req.body.hasOwnProperty(prop)) {
      body[prop] = req.body[prop];
    }
  });
  req.body = body;
  next();
};
