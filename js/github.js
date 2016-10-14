var githubKey = require('./../.env').githubKey;
// 9ea22165bb0152d538e4abe449c33601f712d329
function Github() {
}

Github.prototype.findUser = function(username) {
  var that = this;
  var userInfo = [];
  var div = $('.info');
  $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
    var name = response.name;
        email = response.email;
        bio = response.bio,
        url = response.html_url,
        reposUrl = response.repos_url;
    userInfo.push(name,email,bio);
    that.displayInfo(userInfo, div);
    that.getRepos(reposUrl);
  });
};

Github.prototype.getRepos = function(url) {
  var that = this,
      repos= [],
      div = $('.repos');

  $.get(url + '?access_token=' + githubKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      var name = response[i].name,
          description = response[i].description,
          cloneUrl = response[i].clone_url,
          language = response[i].language,
          lastUpdate = response[i].updated_at;
      repos.push([name, description, cloneUrl, language, lastUpdate]);
    }
      that.displayInfo(repos, div);
  });
};

Github.prototype.displayInfo = function(userInfo, div) {
  userInfo.forEach(function(info) {
    if (info !== null) {
      div.append('<p>' + info + '</p>');
    }
  });
}

exports.githubModule = Github;
