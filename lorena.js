

runQAQC=function(data){
  console.log(`lorena.js ran at ${Date()}`)
  let h=`<p>Variables: ${Object.keys(data)} </p>`
  h+='<p style="color:blue">Data:'
  Object.values(qaqc.data).forEach(k=>{
      h+=`<li style="color:blue">${k}</li>`
  })
  h+='</p>'
  h+=qaqc.saveFile(JSON.stringify(qaqc.data))
  //debugger
  // ...
  return h
}




//https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array
//https://stackoverflow.com/questions/22097155/javascript-get-entire-2nd-column
//test array
// var array=[[1,2,3],[4,5,6],[7,8,9]]
// runQAQC= function(data){
//   function getCol(matrix, col){
//      var column = [];
//      for(var i=0; i<matrix.length; i++){
//         column.push(matrix[i][col]);
//      }
//      return column;
//   }
//   console.log(getCol(array,2))
// }

//readFiles
// https://www.youtube.com/watch?v=ZZncFax8yNY
// function getAsText(fileToRead){
//   let reader = new FileReader()
//   reader.readAsText(fileToRead)
//   reader.onload=loadHandler
//   reader.onerror= errorHandler
// }
// function loadHandler(event){
//     let csv = event.target.results
//     processData(csv)
//
//   }
// function handleFiles(files){
//   if (windo.FileReader){
//     getAsText(files[0])
//     fileUploaded = true
//   } else
//   alert('FileReader not supported in browser')
//   }
