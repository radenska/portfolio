'use strict'

var projArray = [];

function Proj(name, path, image, description) {
  this.name = name;
  this.path = path;
  this.img = image;
  this.description = description;
}

projArray[0] = new Proj('The Cookie Stand public site', 'https://radenska.github.io/cookie-stand', '', 'The Cookie Stand public site is the customer site for a cookie store franchise. Users can learn more about the franchise, including locations, hours, and merchandise. They can also buy merchanise through an online order form.');
projArray[1] = new Proj('About Me', 'https://radenska.github.io/about_me', '', 'The about me page quizzes the user on a few aspects of my (Yana\'s) life before allowing them to see a brief site about me as well as displaying how they did on the questions.');
projArray[2] = new Proj('Bus Mall', 'https://radenska.github.io/bus-mall', '', 'This site is made for a product research team polling user choices in order to decide what to include in a merchandise catalog to be available on commuter buses.');

function displayProj() {
  //HAVE TO FIGURE OUT THE TABLE APPENDING - IT NO WORKEE RIGHT NOW, BUT THE TEST DOES
  $(document).ready(function() {
    var tbl = '<table>';
    for (var i = 0; i < projArray.length; i ++) {
      tbl += '<tr>';
      tbl += '<td>' + projArray[i].name + '</td>';
      tbl += '<td>' + projArray[i].path + '</td>';
      tbl += '<td>' + projArray[i].img + '</td>';
      tbl += '<td>' + projArray[i].description + '</td>';
    }
    tbl += '</table>';
    $(tbl).appendTo('section');
  });
}  //how do i call the function here immediately?

displayProj();
