runQAQC = function(data) {
  console.log(`lorena.js ran at ${Date()}`)


let h=`<p style= "color:red">Table with ${Object.keys(data).length} columns x ${qaqc.data[Object.keys(data)[0]].length} rows uploaded</p>`
      h += `<p></p>`
  for (const col in qaqc.data){
      if (col.indexOf("") > -1) {
        missing=""
        h +=`<p style= "color:red">${col} column has missing data<p>`
}
      //columns will be called by name, not column number????
      h +=`<p style= "font-weight:bold"> INPUT FILE REQUIREMENTS (6  data groups consisting of up to 31 columns in the following format)</p>`
      h += `<p>Example input files are available via the "Download Example Input Files" link in the left panel of this page.<p/>`

      h += `<p>ID column names (12):<p/>`
        h += `<li>UniqueID - unique person identifier (Concatenation of Study Acronym, "-", and PersonID)</li>`
        h += `<li>PersonID</li>`
        h += `<li>Study</li>`
        h += `<li>contrType</li>`
        h += `<li>Status</li>`
        h += `<li>DNA_source</li>`
        h += `<li>DNA_sourceOt</li>`
        h += `<li>matchId</li>`
        h += `<li>SubStudy</li>`
        h += `<li>Studytype</li>`
        h += `<li>StudytypeOt</li>`
        h += `<li>Exclusion</li>`

      h += `<p></p>`
      h += `<p>Age column names (9):<p/>`
        h += `<li>AgeInt</li>`
        h += `<li>intDate</li>`
        h += `<li>intDate_known</li>`
        h += `<li>intDay</li>`
        h += `<li>intMonth</li>`
        h += `<li>intYear</li>`
        h += `<li>refMonth</li>`
        h += `<li>refYear</li>`
        h += `<li>AgeDiagIndex</li>`

      h += `<p></p>`
      h += `<p>Sex column name (1):<p/>`
      h += `<li>sex</li>`

      h += `<p></p>`
      h += `<p>Ethnicity column names (3): <p/>`
        h += `<li>EthnicityClass</li>`
        h += `<li>EthnicitySubClass</li>`
        h += `<li>ethnOt</li>`

      h += `<p></p>`
      h += `<p>Family history column names (3): <p/>`
        h += `<li>FamHist</li>`
        h += `<li>Fhnumber</li>`
        h += `<li>Fhscore</li>`

      h += `<p></p>`
      h += `<p>ER status column name (1): <p/>`
        h += `<li>ER_statusIndex</li>`


      h += `<p> Uploaded data: </p>`
      h += '<p style="color:blue">'

    for (const [key, value] of Object.entries(qaqc.data)) { //List of columns and rows
      h += `<li style="color:blue">${key}: ${value}</li>`
    }

    // //Col 2 BCAC_ID array
    // for (i = 0; i < Object.entries(qaqc.data)[1][1].length; i++) {
    //   console.log(Object.entries(qaqc.data)[1][1][i])
    //   if (Object.entries(qaqc.data)[1][1][i] === "") {
    //     alert("Check column BCAC_ID for missing entry")

        h += '</p>'

        h += qaqc.saveFile(JSON.stringify(qaqc.data))
        //debugger
        // ...
        return h
      }
}

//   }
// }
