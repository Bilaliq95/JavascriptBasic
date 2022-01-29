/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. */

array=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
array.sort(function(a,b){return a-b});
let newarray=[];
for(let i=0;i<array.length;i++)
{
	if(array.lastIndexOf(array[i])!==i)
	{
		let temparray=[];
		temparray=array.slice(i,array.lastIndexOf(array[i]));
		i=array.lastIndexOf(array[i]);
		temparray.push(array[i]);
		newarray.push(temparray);
	}
	else
	{
		newarray.push(array[i]);
	}
}

console.log(newarray);