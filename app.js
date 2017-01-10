'use strict';

var navHandle = {}; //object with methods that handles clicking on the nav element
var proj = {};

proj.getProjInfo = function() {
  $.getJSON('projInfo.json') //this replaced the for ... in loop used to get the info out of the projInfo.js file
    .then(function successCallback(projInfo) {
      localStorage.projInfo = JSON.stringify(projInfo);
      location.reload();
    }, function failCallback() {
      console.log('oops, you have failed to get the data from the JSON file!');
    });
}

proj.handleETag = function() {
  var reqETag = $.ajax({
    type: 'HEAD',
    url: 'projInfo.json',
    dataType: 'json',
    success: function successCallback() {
      var headers = (reqETag.getAllResponseHeaders()).split('\n');
      var ETag;
      headers.forEach(function(val) {
        if (val.slice(0,4) === 'ETag') {
          ETag = JSON.stringify(val);
        }
      });
      if (!localStorage.ETag || localStorage.ETag !== ETag) {
        localStorage.ETag = ETag;
        proj.getProjInfo();
      }
    }
  }).fail('your HEAD request failed.');
}

proj.renderEach = function() {
  var projInfo = JSON.parse(localStorage.projInfo);
  projInfo.forEach(function(project) { //append each Proj object to the html
    var source = $('#projects-template').html();
    var renderArticle = Handlebars.compile(source);
    $('#projects').append(renderArticle(project));
  });
}

navHandle.handleNavClick = function () {
  $('.tab').on('click', function() {
    $('article').hide();
    var tempDataName = $(this).data('name');
    $('#' + tempDataName).fadeIn();
    if ($('.hamburger').css('display') === 'block') {
      $('nav ul').css('display', 'none');
    }
  });
  $('.tab:first').click();
}

navHandle.handleHamburgerClick = function() {
  $('.hamburger').on('click', function() {
    if ($('.hamburger').css('display') === 'block') {
      var displayVal = $('nav ul').css('display');
      if (displayVal === 'none') {
        $('nav ul').css('display','block');
      }
      else {
        $('nav ul').css('display','none');
      }
    }
  });
}

//these two functions handle clicking on the nav menu; in mobile mode, this includes making the ul (tabs) visible on a click as well as invisible if the person either clicks a tab or link OR they click the hamburger again; in either view, they also display and hide the appropriate content based on user click; the default is "about"
$(document).ready(function() {
  proj.handleETag();
  navHandle.handleNavClick();
  navHandle.handleHamburgerClick();
});
