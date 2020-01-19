console.log(`jonas.js loaded at ${Date()}`)

runQAQC=function(data){
    console.log(`jonas.js runQAQC function ran at ${Date()}`)
    let h=`<p>Table with ${Object.keys(data).length} columns x ${qaqc.data[Object.keys(data)[0]].length} rows</p>`
    h+='<p style="color:blue">List of variables'
    Object.keys(qaqc.data).forEach(k=>{
        h+=`<li style="color:blue">${k}</li>`
    })
    h+='</p>'
    //debugger
    // ...
    return h
}