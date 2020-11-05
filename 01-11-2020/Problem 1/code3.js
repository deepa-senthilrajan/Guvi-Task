var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 for(let key in obj)
{
let values = obj[key];
 console.log(key, values)
}
}
printAllValues(obj)
