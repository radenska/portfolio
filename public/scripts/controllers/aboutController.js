
(function(mod) {
  const aboutController = {};

  aboutController.init = function() {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.
    stats.requestStats(statsView.index);
  }

  mod.aboutController = aboutController;
})(window);
