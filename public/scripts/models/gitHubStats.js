'use strict';

(function(module) {
  const stats = {};

  stats.all = [];

  stats.requestStats = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      stats.all = data;
      callback();
    },
    err => { console.error(err) });
  };

  stats.with = attr => stats.all.filter(repo => !repo[attr]);

  module.stats = stats;
})(window);
