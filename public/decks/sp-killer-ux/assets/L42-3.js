c.deleteNote = function() {
  c.server.get({
    action: 'deleteNote',
    noteID: c.data.noteID
  }).then(function(r) {
    $rootScope.$broadcast('deleteNote', c.data.noteID);
    c.data.title = '';
    c.data.note = '';
    c.data.noteID = '';
  });
}
