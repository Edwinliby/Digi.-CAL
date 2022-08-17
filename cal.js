function buttonclick(val)
{
    document.getElementById("screen").value+=val;
}

function clearDisplay(){
    document.getElementById("screen").value=""
}

function clearDigit(){
    document.getElementById("screen").value.slice(0,-1);
}

function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

