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
  $('div').append(project.toHtml());
});

// function displayProj() {
//   $(document).ready(function() {
//     var tbl = '<table>';
//     for (var i = 0; i < projArray.length; i ++) {
//       tbl += '<tr>';
//       tbl += '<td>' + projArray[i].name + '</td>';
//       tbl += '<td>' + projArray[i].path + '</td>';
//       tbl += '<td>' + projArray[i].img + '</td>';
//       tbl += '<td>' + projArray[i].description + '</td>';
//     }
//     tbl += '</table>';
//     $(tbl).appendTo('section');
//   });
// }  //how do i call the function here immediately?
// displayProj();
