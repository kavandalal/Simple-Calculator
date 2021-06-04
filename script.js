function getHistory(){
    return document.getElementById("history").innerText;
}
function printHistory(num){
    document.getElementById("history").innerText = num;
}
function getOutput(){
    return document.getElementById("output").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("output").innerText = num;    
    }
    else{
        document.getElementById("output").innerText = getFormat(num);
    }
}
function getFormat(num){
    if(num=="-"){
        return "";
    }
   var n = Number(num);
   var val = n.toLocaleString("en");
   return val;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}

var operator = document.getElementsByClassName("op");
for(var i = 0 ; i <operator.length ;i++){
    operator[i].addEventListener('click',function(){
        if(this.innerText == "CLR"){
            printHistory("");
            printOutput("");
        }
        else if(this.id =="back"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.lenght-1);
                }
            }
            if(output!="" || history !="" ){
                output = output=="" ? 
                output : reverseNumberFormat(output);
                history = history + output ;
                if(this.id == "eq"){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.innerText;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("num");
for(var i = 0 ; i <number.length ;i++){
    number[i].addEventListener('click',function(){
        // alert('operator clicked '+this.innerText);
        var output = reverseNumberFormat(getOutput())
        if (output!=NaN){
            output = output + this.innerText;
            printOutput(output);
        }
    });
}