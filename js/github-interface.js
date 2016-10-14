var Github = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var github = new Github();
  $('#github_form').submit(function(event) {
    event.preventDefault();
    var search = $('#search').val();
    var userInfo = github.findUser(search);
  });
});
