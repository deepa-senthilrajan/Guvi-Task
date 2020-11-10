// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  //console.log(userInput);
  
  var inp = userInput[1].split(" ")
 // console.log(inp)
   var key =[];
          var value =[];
          var res =[];
  for(i=0;i<inp.length;i++)
  {
      if(!parseInt(inp[i]))
      {
         
          if(i>0)
          {
         
           key[key.length] =inp[i]
          }
        
          else if(i===0) 
          {
              key[i] = inp[i]
          }
      }
      else
      {
          if(i>1)
          {
         
         value[value.length] = (inp[i])
          }
          else if(i===1)
          {
              value[0] = inp[i]
          }
          
      }
  }
  var tempObj = {}
  value = value.map(ele => parseInt(ele))
  for(j=0;j<key.length;j++)
  {
      tempObj[key[j]] = value[j]
      
  }
  res.push(tempObj)
 // console.log(res)
 // var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
var keysSorted = Object.keys(tempObj).sort(function(a,b){return tempObj[a]-tempObj[b]})
for(k=0;k<keysSorted.length;k++)
{
console.log(keysSorted[k]); 
}
  //end-here
});
