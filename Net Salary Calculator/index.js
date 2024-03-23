//Create function cal() here
function cal(){
//make a variable for salary
    let salary = document.getElementById("Salary").value;
//make a variable for benefits
    let benefits = document.getElementById("Benefits").value;
//make variable for gross salary
    const grossSalary = parseFloat(salary) + parseFloat(benefits);

   document.getElementById("demo").innerHTML = `Gross = ${grossSalary}`
//variable for NHIF
   let nhif = grossSalary * 0.03;
   document.getElementById("demo1").innerHTML = `NHIF = ${nhif}`;
//variable for NSSF
   let nssf = grossSalary * 0.015;
   document.getElementById("demo2").innerHTML = `NSSF = ${nssf}`;
//variable for the Net Salary
   let netSalary = grossSalary - nhif - nssf;
   document.getElementById("demo3").innerHTML = `Net salary = ${netSalary}`    
}