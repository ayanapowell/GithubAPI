var githubKey = require('./../.env').githubKey;
// 9ea22165bb0152d538e4abe449c33601f712d329
function Github() {
}

Github.prototype.findUser = function(username) {
  var that = this;
  var userInfo = [];
  $.get('https://api.github.com/users/' + username + '?access_token=' + githubKey).then(function(response) {
    var name = response.name;
        email = response.email;
        bio = response.bio,
        url = response.html_url,
        reposUrl = response.repos_url;
    userInfo.push(name,email,bio);
    that.displayUser(userInfo);
  });
};

Github.prototype.displayUser = function(userInfo) {

};

exports.githubModule = Github;
