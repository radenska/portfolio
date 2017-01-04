'use strict'

var projArray = [];

function Proj(name, path, image, description) {
  this.name = name;
  this.path = path;
  this.description = description;
  this.img = image;
}

projInfo.prototype.toHtml = function() {
  var $newProj = $('section.invisible').clone();
  $newProj.find('h3 a').text(this.name)
  $newProj.find('h3 a').attr('href', this.path);
  $newProj.find('p').text('this.description');
  /* TODO: We also need to fill in:
  1. author name
  2. author url
  3. article title
  4. article body
  5. publication*/
  $newProj.removeClass('invisible');
  return $newProj;
};

projInfo.forEach(function(value) {
  projArray.push(new Proj(value));
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
