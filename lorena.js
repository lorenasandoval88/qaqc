runQAQC = function(data) {
  console.log(`lorena.js ran at ${Date()}`)


  for (i = 1; i < Object.keys(qaqc.data).length; i++) {
let h=`<p style= "color:red">Table with ${Object.keys(data).length} columns x ${qaqc.data[Object.keys(data)[0]].length} rows uploaded</p>`
      h +=`<p style= "font-weight:bold"> INPUT FILE REQUIREMENTS (6  data groups consisting of up to 31 columns in the following format)</p>`
      h += `<p>ID columns (12):<p/>`

      //columns will be called by name, not column number
        h += `<li>UniqueID</li>`
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
      h += `<p>Age columns (9):<p/>`
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
      h += `<p>Sex column (1):<p/>`
      h += `<li>sex</li>`

      h += `<p></p>`
      h += `<p>Ethnicity columns (3): <p/>`
        h += `<li>EthnicityClass</li>`
        h += `<li>EthnicitySubClass</li>`
        h += `<li>ethnOt</li>`

      h += `<p></p>`
      h += `<p>Family history column (3): <p/>`
        h += `<li>FamHist</li>`
        h += `<li>Fhnumber</li>`
        h += `<li>Fhscore</li>`

      h += `<p></p>`
      h += `<p>ER status column (1): <p/>`
        h += `<li>ER_statusIndex</li>`
    h += `<p></p>`
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
