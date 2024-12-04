function generatePassword(length,Lcase,Ucase,num,symb){

    const Lletters = "abcdefghijklmnopqrstuvwxyz";
    const Uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+-=";
    let temp = "";
    let final = "";

    temp += Lcase ? Lletters:"";
    temp += Ucase ? Uletters:"";
    temp += num ? numbers:"";
    temp += symb ? symbol:"";

    if(length<=0)
    {
        return "Legth sholud be atleast 1";
    }
    if(temp.length === 0)
    {
        return "Any one set of charecters shold be selected";
    }
    for(let i=0;i<length;i++)
    {
        let random = Math.floor(Math.random()*temp.length);
        final += temp[random];
    }
    return final;
}
 
const length = 12;
const Lcase = true;
const Ucase = true;
const num = true;
const symb = true;
const pass = generatePassword(length,Lcase,Ucase,num,symb);
console.log(`The generated password is : ${pass}`);
