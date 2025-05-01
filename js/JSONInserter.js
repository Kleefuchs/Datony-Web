/*
This Code was written by Samuel Brecht (Kleefuchs) in 2024 pls contact him if you want to use it.
*/

/*
Note this requires JQuery and HTMLInserter.
Note this expects an array of strings at data.html named lines (data.html.lines)
*/

class JSONInserter extends Inserter {
  set(name, path) {
    var htmlContent = "";
    $.ajax({
      async: false,
      url: path,
      success: function (jd) {
        var lines = jd.data.html.lines;
        lines.forEach((line) => {
          htmlContent += line;
        });
      },
    });
    this.entries.set(name, htmlContent);
  }
}
