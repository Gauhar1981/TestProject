
// this function takes callback function as a parameter in msg 
// function greet(name:string,msg:(message:string)=>void)
// {
//  console.log(name);
//  msg("Hello"); //executing callback function
// }

// //callback function-
// function showMessage(message:string)
// {
//   console.log(message);
// }

// greet("John",showMessage);

//Example 2

function sum(x:number,y:number,callback:(result:number)=>void)
{
  let result=x+y;
  callback(result)
}

//callback function
function displayResult(result:number):void
{
    console.log(result);
}

sum(10,20,displayResult);
