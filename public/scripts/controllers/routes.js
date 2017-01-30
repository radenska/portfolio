
page('/', projectController.loadAll, projectController.index);
page('/about', aboutController.index)

page('/project/:id',
  projectController.loadById,
  projectController.index);

page('/category', '/');

page('/category/:categoryName',
  projectController.loadByCategory,
  projectController.index);

page('*', function(){
  $('body').text('Not found!');
});


page(); //calls pages so the above routes are "active"
