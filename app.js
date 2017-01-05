'use strict';

var projArray = [];

function Proj(individualProject) { //constructor
  this.name = individualProject.name;
  this.path = individualProject.path;
  this.description = individualProject.description;
  this.img = individualProject.img;
}

Proj.prototype.toHtml = function() { //does the actual appending to the html
  var $newProj = $('section.visible').clone();
  $newProj.find('h3 a').text(this.name)
  $newProj.find('h3 a').attr('href', this.path);
  $newProj.find('p').text(this.description);
  $newProj.removeClass('visible');
  return $newProj;
};

projectInfo.forEach(function(ele) { //take the variable from projInfo.js and use the constructor to make each array element an object, which gets pushed to an array
  projArray.push(new Proj(ele));
});

projArray.forEach(function(project) { //append each Proj object to the html
  $('#projects').append(project.toHtml());
});

function handleNavClick () {
  $('.tab').on('click', function() {
    $('article').hide();
    var tempDataName = $(this).data('name');
    $('#' + tempDataName).fadeIn();
  });
  $('.tab:first').click();
}

handleNavClick();
