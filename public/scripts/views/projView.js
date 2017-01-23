'use strict';

(function(viewModule) {

  var projView = {};

  var render = function(project) {
    var template = Handlebars.compile($('#projects-template').text());
    return template(project);
  };

    projView.populateFilters = function() {
      var template = Handlebars.compile($('#option-template').text());
      Project.allCategories(function(rows) {
        $('#category-filter').append(
          rows.map(function(row) {
            return template({val: row.category});
          })
        );
      });
    };

    projView.handleFilters = function() {
      $('#filters').one('change', 'select', function() {
        var resource = this.id.replace('-filter', '');
        $(this).parent().siblings().children().val('');
        page('/' + resource + '/' +
          $(this).val().replace(/\W+/g, '+')
        );
      });
    };

    projView.index = function(projects) {
      $('#projects').show().siblings().hide();

      $('#projects ul').remove();
      projects.forEach(function(a) {
        $('#projects').append(render(a));
      });

      projView.populateFilters();
      projView.handleFilters();

      if ($('#projects ul').length > 1) {
        $('p *:nth-of-type(n+1)').hide();
      }
    };

  viewModule.projView = projView;
})(window);
