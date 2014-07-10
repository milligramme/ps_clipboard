#target "photoshop"

var get_clipboard = function () {
  if (!$.os.match("Macintosh")) {
    return
  }

  var clip;
  var tmp = new File(Folder.temp + "/__pdb");
  app.system("osascript -e 'do shell script \"stdout_f=" + tmp + "; export LC_CTYPE=UTF-8; pbpaste > $stdout_f\"'");
  if (tmp.open("r")) {
    clip = tmp.read();
    tmp.close();
  }
  return clip
}
