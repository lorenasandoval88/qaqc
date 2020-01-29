function getColumn(table_id, col) {
    var tab = document.getElementById(table_id);
    var n = tab.rows.length;
    var i, s = null, tr, td;

    // First check that col is not less then 0
    if (col < 0) {
        return null;
    }

    for (i = 0; i < n; i++) {
        tr = tab.rows[i];
        if (tr.cells.length > col) { // Check that cell exists before you try
            td = tr.cells[col];      // to access it.
            s += ' ' + td.innerText;
        } // Here you could say else { return null; } if you want it to fail
          // when requested column is out of bounds. It depends.
        }
      }
    let column=`<p>column ${getColumn(qaqc.data)}</p>`
    return txt
