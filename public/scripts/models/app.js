'use strict';

(function(appModule) {
  var proj = {};

  proj.getProjInfo = function(callback) {
    $.getJSON('/data/projInfo.json') //this replaced the for ... in loop used to get the info out of the projInfo.js file
      .then(function (projInfo) {
        localStorage.projInfo = JSON.stringify(projInfo);
        callback();
      }, function () {
        console.log('oops, you have failed to get the data from the JSON file!');
      });
  }

  proj.handleETag = function() {
    var ETag;
    let reqETag = $.ajax({
      type: 'HEAD',
      url: '/data/projInfo.json',
      dataType: 'json',
      success: function () {
        (reqETag.getAllResponseHeaders()).split('\n').forEach(function(val) {
          if (val.slice(0,4) === 'ETag') ETag = JSON.stringify(val);
        });
        if (!localStorage.ETag || localStorage.ETag !== ETag) {
          localStorage.ETag = ETag;
        }
        proj.getProjInfo(proj.renderEach);
      }
    }).fail('your HEAD request failed.');
  }

  proj.renderEach = function() {
    JSON.parse(localStorage.projInfo).map(function(project) { //append each Proj object to the html
      let source = $('#projects-template').html();
      let renderArticle = Handlebars.compile(source);
      $('#projects').append(renderArticle(project));
    });
    projView.populateFilters();
    projView.handleCategoryFilter();
    projView.setTeasers();
  }

  proj.handleHamburgerClick = function() {
    $('.hamburger').on('click', function() {
      if ($('.hamburger').css('display') === 'block') {
        if ($('nav ul').css('display') === 'none') $('nav ul').css('display','block');
        else $('nav ul').css('display','none');
      }
    });
  }

  $(document).ready(function() {
    proj.handleHamburgerClick();
  });

  appModule.proj = proj;

})(window);
