'use strict';

(function(module) {
  const statsView = {};

  const ui = function() {
    let $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#stats-template').text());

  statsView.index = function() {
    ui();
    $('#about ul').append(
      stats.with('fork').map(render)
    );
  };

  module.statsView = statsView;
})(window);
