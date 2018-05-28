'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/getJSON/:word')
    .get(todoList.get_JSON)
  
};