function($rootScope,$scope) {
    /* widget controller */
    var c = this;
    $scope.notePos = 0;
    c.selectItem = function(idx) {
        $scope.notePos = idx;
        var id = c.data.notes[idx].sys_id;
        console.log('Note ID: ' + id);
        $rootScope.noteID = id;
        $rootScope.$broadcast('selectNote', id);
    }
    $rootScope.$on('updateTitle', function(event,data) {
        c.data.notes[$scope.notePos].title = data;
    });
}