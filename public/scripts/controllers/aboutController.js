
(function(mod) {
  const aboutController = {};

  aboutController.init = function() {
    $('#projects').hide();
    $('#about').show();
  }

  mod.aboutController = aboutController;
})(window);
