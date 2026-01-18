//Method oveeloading and constructor overloading in TS




class Calculator
{

    //constructor overloading

    constructor();   //default constructor
    constructor(a:number,b:number);     //parametrized constructor

    constructor(a?:number,b?:number)
    {
        if(a!=undefined && b!=undefined)
        {
            console.log("Sum of a and b :",a+b)
        }
        else
        {
            console.log("Default constructor called");
        }
    }

    //Method Overloading

   add(a:number,b:number):number;
   add(a:number,b:number,c:number):number;

   add(a:number,b:number,c?:number):number
   {
    if(c!=undefined)
    {
        return (a+b+c);
    }
    return a+b;
   }


}

//usage- constructor overloading

let calc1=new Calculator();
let calc2=new Calculator(10,20);
//usage method overloading

console.log("Sum 2 numbers:",calc1.add(10,20));
console.log("Sum 3 numbers:",calc2.add(20,30,40));
