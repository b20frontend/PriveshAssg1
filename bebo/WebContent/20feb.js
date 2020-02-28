/**
 * 
 */
var str=" my name is privesh dudeja";
var arr1=Array.from(str);
var i,j,s="",s1="";
for(i=0;i<arr1.length;i++)
	{
	var newarr=Array.from(arr1[i])
	for(j=newarr.length-1;j>=0;j--)
		{
		s=s+newarr[j]
		}
	
	}
      s1=s1+" "+s;
console.log(s1)