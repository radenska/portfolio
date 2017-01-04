'use strict'

var projArray = [];

function Proj(projInfo) {
  this.name = projInfo.name;
  this.path = projInfo.path;
  this.description = projInfo.description;
  this.img = projInfo.img;
}

projInfo.prototype.toHtml = function() {
  var $newProj = $('section.invisible').clone();
  $newProj.find('h3 a').text(this.name)
  $newProj.find('h3 a').attr('href', this.path);
  $newProj.find('p').text('this.description');
  $newProj.removeClass('invisible');
  return $newProj;
};

projInfo.forEach(function(val) {
  projArray.push(new Proj(val));
});

projInfo.forEach(function(project) {
  $('section').append(project.toHtml());
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
