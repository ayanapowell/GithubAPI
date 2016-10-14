var githubKey = require('./../.env').githubKey;
// 9ea22165bb0152d538e4abe449c33601f712d329
function Github(url) {
  this.url = null;
}

Github.prototype.getUser = function(username) {
  var that = this,
      userInfo = [];

  $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
    var name = response.name,
        email = response.email,
        bio = response.bio,
        url = response.html_url;
        reposUrl = response.repos_url;
    userInfo.push(name,email,bio);
    that.getRepos(reposUrl);
    that.displayUsers(userInfo);
  });
};

Github.prototype.getRepos = function(url) {
  var repos= [],
      that = this;
  $.get(url + '?access_token=' + githubKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      var name = response[i].name,
          description = response[i].description,
          cloneUrl = response[i].clone_url,
          language = response[i].language,
          lastUpdate = response[i].updated_at;
      repos.push([name, description, language, lastUpdate, cloneUrl]);
    }
    that.displayRepos(repos);
  });
};

Github.prototype.displayUsers = function(userInfo) {
  $('.info').empty();
  userInfo.forEach(function(info) {
    if (info !== null) {
      $('.info').append('<p>' + info + '</p>');
    }
  });
};

Github.prototype.displayRepos = function(repos) {
  $('.repos').empty();
  for (var i = 0; i < repos.length; i++) {
    if (repos[i] !== null) {
      $('.repos').append(
        "<p><span class='bold'>Project: </span>" + repos[i][0] + "</p>" +
        "<p><span class='bold'>Description </span>" + repos[i][1] + "</p>" +
        "<p><span class='bold'>Language used: </span>" + repos[i][2] + "</p>" +
        "<p><span class='bold'>Last updated: </span>" + repos[i][3] + "</p>" +
        "<p><span class='bold'>Clone at: </span>" + "<i>" + repos[i][4] + "</i></p><hr>");
    }
  }
};

exports.githubModule = Github;
