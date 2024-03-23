//Write the solutions of the toy problem and should be running for good score

//Create a function cal() that allows calculation to be done and be seen in the browser
function cal(){
    //Variable that shows speed limit
    const speedLimit = 70;

    //Variable that allows to be keyed in and identified by browser
    let speed = document.getElementById("speed").value;

    //Variable which make browser to pass NaN when the button is clicked and no value keyed in
    const sum = parseFloat(speed)

    //method that returns element with a specified value
    document.getElementById("demo").innerHTML = `Your speed is = ${sum}`;

    //Variable that makes it able to calculate lost points
    const lostPoints =  (sum - speedLimit) / 5;
    document.getElementById("demo1").innerHTML = `Total points lost = ${lostPoints}`;

    //if statement that executes a block of code when the conditioned i specify are true
    if(sum <= speedLimit){
        document.getElementById("demo2").innerHTML = `Ok`;
    }
    else if (lostPoints > 12) {
        document.getElementById("demo2").innerHTML = `License suspended`;
    }

    
}