// @desc    Get a home page
// @route   GET /
// @access  Public
exports.getHomePage = (req, res, next) => {
  res.render('home', {
    docTitle: 'Home page',
    path: '/'
  });
};

exports.getMaxymTsyganokPage = (req, res, next) => {
  res.render('max-1', {
    docTitle: 'Maxym Tsyganok',
    path: '/max-1'
  });
}
exports.getMaxymPoplavskiyPage = (req, res, next) => {
  res.render('max-2', {
    docTitle: 'Maxym Poplavskiy',
    path: '/max-2'
  });
}
exports.getSofiiaKovalPage = (req, res, next) => {
  res.render('sofia', {
    docTitle: 'Sofiia Koval',
    path: '/sofia'
  });
}