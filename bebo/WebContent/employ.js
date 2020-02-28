
function employee(employee_id, name , basic_salary){

	this.employee_id=employee_id;
this.name=name;
this.basic_salary=basic_salary;

}

var emp1= new employee("11", "ayush","20000");
var emp2= new employee("22", "jai","25000");
var emp3= new employee("33", "anshul","30000");
var emp4= new employee("44", "privesh","35000");
var emp5= new employee("55", "pawan","22000");

//console.log(emp1)

var pf,hra,in_hand_salary;

var all_employees=[];
var i,sal;

all_employees.push(emp1,emp2,emp3,emp4,emp5);
//console.log(all_employees);

for(i in all_employees)
{
pf=parseInt(0.12*all_employees[i].basic_salary);
hra=parseInt(0.50*all_employees[i].basic_salary);
        sal=parseInt(all_employees[i].basic_salary);
in_hand_salary=sal+hra-pf;

console.log("Employee id="+all_employees[i].employee_id+" Employee name="+all_employees[i].name+" Employee salary="+ in_hand_salary)

}