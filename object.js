var employee={
    ename:"hari",
    dept:"hr",
    salary:25000
}
console.log(employee.ename);
console.log(employee["ename"]);
console.log(employee.salary);
employee["exp"]=2
console.log(employee);
employee.salary=30000
console.log(employee);
console.log("gender" in employee);