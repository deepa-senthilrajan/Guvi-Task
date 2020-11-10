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

var inp = userInput[0].split("").map(data => parseInt(data))

inp.sort();

var res = [];
res[0]=2;
if(inp[0]===0)
{
    for(i=0;i<inp.length;i++)
    {
        if(inp[i]===1&&res[0]!==1)
        {
            res[0]=inp[i]
            //inp.splice(i, 1)
        }
        else
        {
            res[i+1]=inp[i]
        }
        
    }
    console.log(res.join(""))
}
else
{
    console.log(inp.join(""))
}


  //end-here
});
