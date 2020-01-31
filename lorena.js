console.log(`lorena.js ran at ${Date()}`)


// runQAQC=function(data){
//   console.log(`jonas.js runQAQC function ran at ${Date()}`)
//   let h=`<p>Table with ${Object.keys(data).length} columns x ${qaqc.data[Object.keys(data)[0]].length} rows</p>`
//   h+='<p style="color:blue">List of variables'
//   Object.keys(qaqc.data).forEach(k=>{
//       h+=`<li style="color:blue">${k} (${qaqc.data[k].length} x ${typeof(qaqc.data[k][0])=='string' ? 'string' : 'number'})</li>`
//   })
//   h+='</p>'
//   h+=qaqc.saveFile(JSON.stringify(qaqc.data))
//   //debugger
//   // ...
//   return h
// }
function getColumn(table_id, col) {
        var tab = document.getElementById(table_id);
        var n = tab.rows.length;
        var i, s = null, tr, td;

        // First check that col is not less then 0
        if (col < 0) {
            return null
            console.log("null")
            alert("lore")
             // Here you could say else { return null; } if you want it to fail
              // when requested column is out of bounds. It depends.
            }}
console.log("null")

//https://stackoverflow.com/questions/22097155/javascript-get-entire-2nd-column
runQAQC= function(data){

// let txt = `<p>Variables: ${Object.keys(qaqc.data)} </p>`
// return txt
let txtFile= `<p>Data:${Object(qaqc.dataTxt)} </p>`
return txtFile
//console.log(txtFile)
}
