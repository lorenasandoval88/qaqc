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
    fileInfo.innerText=new Date(input.files[0].lastModified)
    var reader = new FileReader();
    reader.onload = function(){
      qaqc.dataTxt = reader.result;  // qaqc.dataTxt is defined here, it will be undefined by default
      qaqc.tabulateTxt()
      qaqc.dataAnalysis()
    };
    reader.readAsText(input.files[0]);
}

qaqc.loadURL=async(url=inputURL.value)=>{
    qaqc.dataTxt = await (await fetch(url)).text()
    qaqc.tabulateTxt()
    qaqc.dataAnalysis()
}

qaqc.load=el=>{
    let h=`${el.id} under development`
    switch(el.id){
        case 'loadFile':
            h=`<input type="file" id="readButton" onchange="qaqc.openFile(event)">`
            h+='<pre id="fileInfo">upload file from your hard-disk</pre>'
            loadQAQC.innerHTML=h;
            setTimeout(function(){readButton.click()},100)
        break
        case 'loadURL':
            h=`URL: <input id="inputURL"> <i style="font-size:xx-large;color:green;cursor:pointer;vertical-align:bottom" class="fa fa-cloud-download" data-toggle="tooltip" data-placement="left" title="click to load file from url" onclick="qaqc.loadURL()"></i>`
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
    arr.slice(1).forEach((row,i)=>{
        labels.forEach((label,j)=>{
            qaqc.data[label][i]=row[j]
        })
    })
}

qaqc.dataAnalysis=(div="dataAnalysisDiv")=>{
    console.log(`qaqc analysis triggered at ${Date()}`)
    if(typeof(div)=='string'){div=document.getElementById(div)}
    if(qaqc.data){
        if(typeof(runQAQC)!='undefined'){
            div.innerHTML=`<h2>Report</h2>
            <p style="font-size:small;color:green">[${Date()}]</p>
            <div id="qaqcReport">${runQAQC(qaqc.data)}</div>`    
        }else{
            div.innerHTML='<h3 style="color:red">no runQAQC function found ...</h3><p style="color:red">... please chose one from the Script List above</p>'
        }
    }
}

