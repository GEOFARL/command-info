// @desc    Get a home page
// @route   GET /
// @access  Public
exports.getHomePage = (req, res, next) => {
  res.render('home', {
    docTitle: 'Home page',
    path: '/'
  });
};