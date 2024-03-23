//make a function cal() here
function cal(){
    //make 3 variables html, css, js
    let HTML = document.getElementById("HTML").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
//variable for the sum
const sum = parseFloat(HTML) + parseFloat(css) + parseFloat(js);

document.getElementById("demo").innerHTML = `Total mark is =${sum}`;
//variable for the percentage
const percentage = (sum / 300) * 100;
document.getElementById("demo1").innerHTML = `Percentage is = ${percentage}`;


//conditions to be met for code to run
if(percentage >79){
    document.getElementById("demo2").innerHTML = `A`;
}


else if(percentage >= 60 && percentage <= 79){
    document.getElementById("demo2").innerHTML = `B`;
}


else if(percentage >= 49 && percentage <= 59){
    document.getElementById("demo2").innerHTML = `C`
}


else if(percentage >= 40 && percentage <= 49){
    document.getElementById("demo2").innerHTML = `D`
}

else {
    document.getElementById("demo2").innerHTML = `E`
}
}
