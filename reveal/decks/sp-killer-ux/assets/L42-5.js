$rootScope.$on('deleteNote', function(event,data) {
  c.data.notes.splice($scope.notePos, 1);
});