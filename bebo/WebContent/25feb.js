/**
 * 
 */

function student(name,clas,marks,rollno)
{
	this.name = name;
	this.clas = clas;
	this.marks = marks;
	this.rollno = rollno;
		
}

var student1 = new student("Kirti","V","60","121");
var student2 = new student("Preeti","VI","70","122");
var student3 = new student("Simran","X","50","123");
var student4 = new student("Riya","IX","65","124");
var student5 = new student("Shivani","VII","90","125");

/*if(student1.marks>student2.marks&&student1.marks>student3.marks)
	{
	console.log(student1.marks)
	}
if(student2.marks>student1.marks&&student2.marks>student3.marks)
{
console.log(student2.marks)
}
else
	{
	console.log(student3.marks)
	}



//console.log("Highest marks among 5 students is = "+Math.max(student1.marks,student2.marks,student3.marks,student4.marks,student5.marks))
*/

var allstuds=[],i;
var nam;
var clas;
var rollno;

allstuds.push(student1);
allstuds.push(student2);
allstuds.push(student3);
allstuds.push(student4);
allstuds.push(student5);
//console.log(allstuds)

var highest_marks = allstuds[0].marks;
for(i in allstuds)
	{
	if(allstuds[i].marks>highest_marks)
		{
		highest_marks=allstuds[i].marks;
		nam=allstuds[i].name;
		clas=allstuds[i].clas;
		rollno=allstuds[i].rollno;
		}
	
	
	}
	console.log("Topper is")
console.log("Name - "+nam)
console.log("Marks - "+highest_marks)
console.log("Class - "+clas)
console.log("Roll-no - " +rollno)

