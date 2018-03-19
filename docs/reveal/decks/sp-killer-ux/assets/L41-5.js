if (input) {
  if (input.action == 'newNote') {
    var newNote = new GlideRecord('x_snc_createnotes_note');
    newNote.newRecord();
    var id = newNote.insert();
    data.noteID = id;
    data.newNote = {
      'title': newNote.getValue('title'),
      'note': newNote.getValue('note'),
      'sys_id': newNote.getValue('sys_id')
    };
  }
}
