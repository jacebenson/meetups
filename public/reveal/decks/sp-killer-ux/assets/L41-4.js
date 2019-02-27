c.newNote = function() {
  c.server.get({
    action: 'newNote'
  }).then(function(r) {
    c.data.notes.unshift(r.data.newNote);
    c.data.noteID = r.data.noteID;
    $rootScope.noteID = c.data.noteID;
    $rootScope.$broadcast('selectNote', c.data.noteID);
  });
}