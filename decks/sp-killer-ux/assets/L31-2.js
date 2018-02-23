(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    if (input && input.noteID) {
        var note = new GlideRecord('x_snc_createnotes_note');
        if (note.get(input.noteID)) {
            if (input.action == 'getNote') {
                data.title = note.getValue('title');
                data.note = note.getValue('note');
                data.noteID = note.getValue('sys_id');
            }
            else if (input.action == 'updateNote') {
                note.title = input.noteTitle;
                note.note = input.noteBody;
                note.update();
                data.title = note.getValue('title');
            }
        }
    }
})();