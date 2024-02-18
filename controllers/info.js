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