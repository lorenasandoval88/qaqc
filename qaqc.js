console.log('qaqc.js loaded')
qaqc={}
qaqc.ui=(target='qaqcDiv')=>{
    if(typeof(target)=='string'){
        target=document.getElementById(target)
    }
    let h='<p style="color:navy">Load a <button id="loadFile" onclick="qaqc.load(this)">file</button>, <button id="loadURL" onclick="qaqc.load(this)">URL</button>, <button id="loadBox" onclick="qaqc.load(this)">Box id</button>, or , <button id="loadTxt" onclick="qaqc.load(this)">paste data as text</button></p>'
    h +='<div id="loadQAQC" style="color:blue"></div>'
    target.innerHTML=h
}

qaqc.openFile=(ev)=>{ // inspired by https://www.javascripture.com/FileReader
    var input = ev.target;
    var reader = new FileReader();
    reader.onload = function(){
      qaqc.dataTxt = reader.result;  // qaqc.dataTxt is defined here, it will be undefined by default
    };
    reader.readAsText(input.files[0]);
}

qaqc.load=el=>{
    let h=`${el.id} under development`
    switch(el.id){
        case 'loadFile':
            h=`<input type="file" id="readButton" onchange="qaqc.openFile(event)">`
            loadQAQC.innerHTML=h
        break
        default:
            console.warn(`button with id "${el.id}" not found`)
        break
    }
    loadQAQC.innerHTML=h
}


qaqc.tabulateTxt=(txt=qaqc.dataTxt)=>{
    const arr =txt.split(/[\r\n]/g).map(row=>{  // data array
        return row.split(/[,\t]/g) // split csv and tsv alike
    })
    qaqc.data={} // qaqc.data is defined here, it will be undefined by default
    labels= arr[0]
    labels.forEach((label)=>{
        qaqc.data[label]=[]
    }) 
    arr.slice(1).forEach(row=>{
        labels.forEach((label,i)=>{
            qaqc.data[label]=row[i]
        })
    })


    debugger
}