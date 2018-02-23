(function() {
  data.notes = [];//create an array for notes
  var noteGR = new GlideRecord('x_snc_createnotes_note');
  noteGR.addQuery('user', gs.getUser().getID());
  noteGR.orderByDesc('sys_created_on');
  noteGR.query();
  while (noteGR.next()) {
	var noteObj = {};
	var fields = 'number,title,share,sys_id';
	$sp.getRecordDisplayValues(noteObj, noteGR, fields);
	//get the first 20 characters of the description
	noteObj.note = noteGR.getValue('note').slice(0,20);
	data.notes.push(noteObj);
  }
})();