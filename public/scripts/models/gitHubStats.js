'use strict';

(function(module) {
  const stats = {};

  stats.all = {};

  stats.requestStats = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).then(data => {
      stats.all = {
        numRepos: data.length,
        numNotForked: data.filter(repo => !repo['fork']).length,
        largestRepo: data.find(repo => repo['size'] === data.map(repo => repo['size'])
                         .reduce((largest, current) => { return (current > largest) ? current : largest}))['name'],
        updatedLast: data.map(repo => repo['updated_at'])
                         .reduce((largest, current) => { return (current > largest) ? current : largest}).replace(/T/, ' at ').replace(/Z/, ' hours'),
        deployed: data.filter(repo => repo['has_pages']).length,
        totalSize: data.map(repo => repo['size'])
                       .reduce((largest, current) => { return largest + current }, 0)
      }
      callback();
    },
    err => { console.error(err) });
  };

  module.stats = stats;
})(window);
