//Parsing a list of lists and convert into a JSON object:
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 var newObject = {};
for(i=0;i<arr.length;i++)
{
   //console.log(arr[i][0])
 newObject[arr[i][0]] =arr[i][1];
 
}
return newObject;
}

fromListToObject(array)
