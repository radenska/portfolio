'use strict';

(function(appModule) {

  function Project (opts) {
    Object.keys(opts).forEach(function(e) {
      this[e] = opts[e];
    }, this);
  }

  Project.allProjects = [];

  Project.handleHamburgerClick = function() {
    $('.hamburger').on('click', function() {
      if ($('.hamburger').css('display') === 'block') {
        if ($('nav ul').css('display') === 'none') $('nav ul').css('display','block');
        else $('nav ul').css('display','none');
      }
    });
  }

  Project.createTable = function(callback) {
    webDB.execute(
    'CREATE TABLE IF NOT EXISTS projects (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR(255) NOT NULL, ' +
      'path VARCHAR(255) NOT NULL, ' +
      'publishedOn DATETIME(20), ' +
      'description VARCHAR(10000), ' +
      'img VARCHAR(255), ' +
      'category TEXT NOT NULL);',
    callback
    );
  };

  Project.findWhere = function(field, value, callback) {
    webDB.execute(
      [
        {
          sql: 'SELECT * FROM projects WHERE ' + field + ' = ?;',
          data: [value]
        }
      ],
      callback
    );
  };

  Project.allCategories = function(callback) {
    webDB.execute('SELECT DISTINCT category FROM projects;', callback);
  };

  Project.prototype.insertRecord = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects ' +
          '(name, path, publishedOn, description, img, category) ' +
          'VALUES (?, ?, ?, ?, ?, ?);',
          'data':
          [ this.name,
            this.path,
            this.publishedOn,
            this.description,
            this.img,
            this.category],
        }
      ],
      callback
      );
  };

  Project.loadAll = function(rows) {
      Project.allProjects = rows.map(function(ele) {
        return new Project(ele);
      });
  };

  Project.fetchAll = function(callback) {
    webDB.execute(
        'SELECT * FROM projects ORDER BY publishedOn DESC',
          function(rows) {
            if (rows.length) {
              Project.loadAll(rows);
              callback();
            } else {
              $.getJSON('/data/projInfo.json', function(rawData) {
                rawData.forEach(function(item) {
                  var project = new Project(item);
                  project.insertRecord();
                });
                webDB.execute(
                  'SELECT * FROM projects ORDER BY publishedOn DESC',
                  function(rows) {
                    Project.loadAll(rows);
                    callback();
                  });
              });
            }
          });
  };


  $(document).ready(function() {
    Project.handleHamburgerClick();
  });

  appModule.Project = Project;

})(window);
