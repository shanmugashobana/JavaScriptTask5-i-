let num1 = 5;
let num2 = 6;

let operator = "*";
if (operator === "+")
{
  console.log(num1 + num2)
}

else if (operator === "-")
{
    console.log(num1 - num2);

}
else if (operator === "*")
{
    console.log(num1 * num2);

}
else if (operator === "/")
{
     if (num2 != 0)
     {
        console.log(num1 /num2)
     }
     else
     {
        console.log("num2 cannot be zero")
     }
}
else
{
    console.log("Invalid operator")
}

// Calculator program using if else condition//