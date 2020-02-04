runQAQC = function(data) {
  console.log(`lorena.js ran at ${Date()}`)

  //let h = `<p>Variables: ${Object.keys(data)} </p>`
  let key_len = Object.keys(qaqc.data).length
  for (i = 1; i < key_len; i++) {

    let h = `<p> Data: </p>`
    h += '<p style="color:blue">'

    for (const [key, value] of Object.entries(qaqc.data)) { //List of columns and rows
      h += `<li style="color:blue">${key}: ${value}</li>`
    }





    //Col 2 BCAC_ID array
    for (i = 0; i < Object.entries(qaqc.data)[1][1].length; i++) {
      console.log(Object.entries(qaqc.data)[1][1][i])
      if (Object.entries(qaqc.data)[1][1][i] === "") {
        alert("Check column BCAC_ID for missing entry")

        h += '</p>'



        h += qaqc.saveFile(JSON.stringify(qaqc.data))
        //debugger
        // ...
        return h
      }
    }

  }
}
