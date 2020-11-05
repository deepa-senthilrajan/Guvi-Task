//Parsing a list and transform the first and last elements of it
var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
 var newObject ={};
    newObject[arr[0]] = arr[arr.length-1];
    
    
 
 return newObject;
}
transformFirstAndLast(arr)
