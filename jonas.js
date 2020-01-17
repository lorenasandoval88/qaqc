console.log(`jonas.js loaded at ${Date()}`)

runQAQC=function(data){
    console.log(`jonas.js runQAQC function ran at ${Date()}`)
    let h=`<p>Table with ${Object.keys(data).length} columns x ${qaqc.data[Object.keys(data)[0]].length} rows</p>`
    // ...
    return h
}