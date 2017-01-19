'use strict';

(function(module) {
  const statsView = {};

  const ui = function() {
    let $about = $('#about');
    $about.find('ul').empty();
  };

  const render = Handlebars.compile($('#stats-template').text());

  statsView.index = function() {
    ui();
    $('#about ul').append(render(stats.all));
  };

  module.statsView = statsView;
})(window);
