#target "Photoshop"
#include "./index.jsx"

var clipboard = get_clipboard();
$.writeln(clipboard);

var doc = app.documents.add(480,480,72, "clipboard", NewDocumentMode.RGB);
// create text layer
var lay = doc.artLayers.add();
lay.kind = LayerKind.TEXT;
lay.textItem.contents = clipboard.replace(/\n/g,"\r");
