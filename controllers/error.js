// @desc    Get a not found page
// @route   GET /404
// @access  Public
exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    docTitle: 'Page not Found',
    path: '/404',
  });
};