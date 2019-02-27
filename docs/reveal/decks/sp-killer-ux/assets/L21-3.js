function($scope,$rootScope,$timeout) {
  var c = this;
  $rootScope.$on('selectNote', function(event,data) {
    console.log('Listener caught NoteID: ' + $rootScope.noteID);
  });
  c.autoExpand = function(e) { /* Resize note */
    var element = typeof e === 'object' ? e.target : document.getElementById(e);
    var scrollHeight = element.scrollHeight; //sum of padding-top and padding-bottom
    element.style.height = scrollHeight + "px";
  }
  function expand() {
    c.autoExpand('note-body');
  }
}