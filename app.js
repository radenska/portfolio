'use strict'

function proj(name, path, image, description) {
  this.name = name;
  this.path = path;
  this.img = image;
  this.description = description;
}

function displayProj() {
  //HAVE TO FIGURE OUT THE TABLE APPENDING - IT NO WORKEE RIGHT NOW, BUT THE TEST DOES
  // $(document).ready(function() {
    // var $newProj = $('<tr><td>' + proj.img + '</td><td>' + proj.name + '</td><td>' + proj.description +'</td></tr>');
    // var $newProj = $('<tr>testing testing</tr>');
    // $('table').append($newProj);
  var $test = $('<div>test test test</div>');
  $('section').append($test);
  // });
} //how do i call the function here immediately?

displayProj();
