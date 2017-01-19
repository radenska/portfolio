
(function(mod) {
  const aboutController = {};

  aboutController.init = function() {
    $('#projects').hide();
    $('#about').show();
    stats.requestStats(statsView.index);
  }

  mod.aboutController = aboutController;
})(window);
