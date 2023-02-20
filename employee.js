class Parent{
    m1(){
        console.log("inside parent");
    }
}



class Employee extends Parent{
    constructor (eid,name,dept,salary){
        this.eid=eid;
        this.name=name;
        this.dept=dept;
        this.salary=salary;
    }
    displayDetails(){
        console.log(this.eid,this.name,this.dept);
    }
}

var emp=new Employee(100,"hari","hr",25000)
 
emp.displayDetails()
emp.m1()