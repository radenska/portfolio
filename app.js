'use strict';

var projArray = []; //stores project objects
var navHandle = {}; //object with methods that handles clicking on the nav element

function Proj (obj) {
  for(var key in obj)
    this[key] = obj[key];
}

function Proj

Proj.prototype.toHtml = function() { //does the actual appending to the html
  var source = $('#projects-template').html();
  var renderArticle = Handlebars.compile(source);
  var context = articles;
  return renderArticle(this);
};

projectInfo.forEach(function(ele) { //take the variable from projInfo.js and use the constructor to make each array element an object, which gets pushed to an array
  projArray.push(new Proj(ele));
});

projArray.forEach(function(project) { //append each Proj object to the html
  $('#projects').append(project.toHtml());
});

navHandle.prototype.handleNavClick (function() {
  $('.tab').on('click', function() {
    $('article').hide();
    var tempDataName = $(this).data('name');
    $('#' + tempDataName).fadeIn();
    if ($('.hamburger').css('display') === 'block') {
      $('nav ul').css('display', 'none');
    }
  });
  $('.tab:first').click();
});

navHandle.prototype.handleHamburgerClick (function() {
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
});
//these two functions handle clicking on the nav menu; in mobile mode, this includes making the ul (tabs) visible on a click as well as invisible if the person either clicks a tab or link OR they click the hamburger again; in either view, they also display and hide the appropriate content based on user click; the default is "about"
navHandle.handleNavClick();
navHandle.handleHamburgerClick();
