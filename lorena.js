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
//https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array
//https://stackoverflow.com/questions/22097155/javascript-get-entire-2nd-column
runQAQC= function(data){
  function getColumn(table, col) {
    var column = [];
     for(var i=0; i<table.length; i++){
        column.push(table[i][col]);
     }
     return column;
               // Here you could say else { return null; } if you want it to fail
                // when requested column is out of bounds. It depends.
              }
// let txt = `<p>Variables: ${Object.keys(qaqc.data)} </p>`

let txt= qaqc.dataTxt
let txtFile= `<p>${Object(qaqc.dataTxt)} </p>`
return txt
//return getColumn(txt,1)
}

//console.log(txtFile)
