let fromvalueEl = document.getElementById("fromvalue");
let tovalueEl = document.getElementById("tovalue");
let countnoEl = document.getElementById("countno");
let timecounter;
let fromvalue;
let tovalue;

function startcounter(){

    fromvalue = parseInt(fromvalueEl.value);
    tovalue = parseInt(tovalueEl.value);
    
    if(isNaN(fromvalue)){
        alert("Enter From Value");
    } else if (isNaN(tovalue)) {
        alert("Enter To Value");
    }

    timecounter = setInterval(interval,1000);
}

function interval(){
    if(fromvalue <= tovalue){
        countnoEl.textContent = fromvalue;
    } else {
        clearInterval(timecounter);
    }
    fromvalue= fromvalue + 1;
}
