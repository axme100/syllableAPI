exports.get_JSON = function(req, res) {
  var word = req.query.id;
  console.log(req.params.word);
  res.json([1, 2, 3]);
};
