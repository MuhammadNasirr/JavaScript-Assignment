function subBtn(){ 
    var salary = document.getElementById('inputSalary').value;
    if (salary == ""){
        alert('Field Cannot be Empty');
    }
    else {
    document.getElementById('Box1').style.display='block';
    document.getElementById('currentSalary').innerHTML = 'Your Current Salary is ' + salary;
    var medicalExp = (salary/100)*20;
    medicalExp = medicalExp.toFixed(0);
    console.log(medicalExp);
    document.getElementById('medical').innerHTML = 'Your Medical Expense is ' + medicalExp;
    var rentExp = (salary/100)*15;
    rentExp = rentExp.toFixed(0);
    console.log(rentExp);
    document.getElementById('rent').innerHTML = 'Your Rent Allowance is ' + rentExp;
    // Number(salary);Number(medicalExp);Number(rentExp);
    var mainSalary = Number(salary)+Number(medicalExp)+Number(rentExp);
    console.log(mainSalary);
    document.getElementById('fullSalary').innerHTML = "Your Full Salary is " + mainSalary;
}
}