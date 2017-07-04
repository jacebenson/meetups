(function() {
  /* populate the 'data' object */
  if (input && input.noteID) {
    var note = new GlideRecord('x_snc_createnotes_note');
    if (note.get(input.noteID)) {
      if (input.action == 'getNote') {
        data.title = note.getValue('title');
        data.note = note.getValue('note');
        data.noteID = note.getValue('sys_id');
      }
    }
  }
})();