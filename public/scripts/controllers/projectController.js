'use strict'

(function(mod) {
  const projectController = {};

  Project.createTable();

  projectController.index = function(ctx, next) {
    if(ctx.projects.length) {
      projView.index(ctx.projects);
    } else{
      page('/');
    }
  };

  projectController.loadById = function(ctx, next) {
    let projectData = function(project) {
      ctx.projects = project;
      next();
    };
    Project.findWhere('id', ctx.params.id, projectData);
  };

  projectController.loadByCategory = function(ctx, next) {
    let categoryData = function(projectsInCategory) {
      ctx.projects = projectsInCategory;
      next();
    };

    Project.findWhere('category', ctx.params.categoryName, categoryData);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.projects = Project.allProjects;
      next();
    };

    if (Project.allProjects.length) {
      ctx.projects = Project.allProjects;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };

  mod.projectController = projectController;
})(window);
