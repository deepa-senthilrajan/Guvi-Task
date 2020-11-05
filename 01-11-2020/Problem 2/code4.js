//Parsing an JSON object’s Keys

var inp= {name : 'RajiniKanth', age : 25, hasPets : true}

function printAllKeys(obj) {
 // your code here
for(let keys in inp)
{
    console.log(keys);
}
}
printAllKeys(inp)
