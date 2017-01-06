'use strict';

var projView = {};

projView.populateFilters = function() {
  $('section').each(function() {
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
      $('section').hide();
      $(`section[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('section').fadeIn();
    }
  });
};


projView.setTeasers = function() {
  $('section.p *:nth-of-type(n)').hide(); // Hide elements beyond the first 2 in any article body.
  $('#articles').on('click', '.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  projView.populateFilters();
  projView.handleCategoryFilter();
  projView.setTeasers();
});