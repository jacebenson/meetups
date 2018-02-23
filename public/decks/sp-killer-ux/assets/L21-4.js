$rootScope.$on('selectNote', function(event,data) {
  c.server.get({
    action: 'getNote',
    noteID: $rootScope.noteID
  }).then(function(r) {
    c.data.title = r.data.title;
    c.data.note = r.data.note;
    c.data.noteID = r.data.noteID;
    $timeout(expand);
  });
});