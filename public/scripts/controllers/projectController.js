(function(mod) {
  const projectController = {};

  projectController.init = function() {
    proj.handleETag();
    $('#about').hide();
    $('#projects').show();
  }

  mod.projectController = projectController;
})(window);
