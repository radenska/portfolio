
(function(mod) {
  const aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#about').show();
    stats.requestStats(statsView.index);
  }

  mod.aboutController = aboutController;
})(window);
