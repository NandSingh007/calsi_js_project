let result=document.getElementById('result');

function display(e) {
        result.value += e;
}
function equal() {
       let x= result.value;
       let y=eval(x);
       result.value=y;       
}
function dis() {
    result.value="";    
}
function back() {
    result.value=result.value.slice(0 , -1);     
}