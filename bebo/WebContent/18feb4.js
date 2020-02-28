var nos=[14,2,3,56,876,45];
var i;
for(i=0; i<nos.length; i++)
	{
	if(nos[i]>nos[i+1])
		{
		nos[i+1]=nos[i]
		}
	
	}
console.log(nos[nos.length-1])


