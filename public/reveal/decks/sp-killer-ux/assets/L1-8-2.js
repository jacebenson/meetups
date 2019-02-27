function($rootScope,$scope) {
  /* widget controller */
  var c = this;
  c.selectItem = function(idx) {
    var id = c.data.notes[idx].sys_id;
    console.log('Note ID: ' + id);
    $rootScope.noteID = id;
    $rootScope.$broadcast('selectNote', id);
  }
}