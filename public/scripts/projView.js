'use strict';

(function(viewModule) {

  var projView = {};
  viewModule.projView = projView;

  projView.populateFilters = function() {
    $('ul.proj').each(function() {
      var val = $(this).attr('data-category');
      var optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  projView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('ul.proj').hide();
        $(`ul[data-category="${$(this).val()}"]`).fadeIn();
      } else {
        $('ul.proj').fadeIn();
      }
    });
  };

  projView.setTeasers = function() {
    $('p *:nth-of-type(n+1)').hide();
    var readOn = 'read more';
    var showLess = 'show less';
    $('.read-on').text(readOn);
    $('#projects').on('click', '.read-on', function(e) {
      e.preventDefault();
      if ($(this).text() == readOn) $(this).text(showLess).siblings('p').find('*').fadeIn();
      else $(this).text(readOn).siblings('p').find('*').fadeOut();
    });
  };

  $(document).ready(function() {
    proj.renderEach();
    projView.populateFilters();
    projView.handleCategoryFilter();
    projView.setTeasers();
  });

})(window);
