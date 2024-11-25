const minimum = 1;
const maximum = 10;
const ran = Math.floor(Math.random()*(maximum-minimum+1)) + minimum;
let guess;
let guessed = false;
let atempts = 0;
while(!guessed)
{
    guess = window.prompt(`Guess the number between ${minimum} & ${maximum}`);
    guess = Number(guess);
    if(isNaN(guess))
    {
        window.alert(`Please enter a number!!!!`);
    }
    else if(guess<minimum || guess>maximum)
    {
        window.alert(`Please enter a Number within the Given range!!!`);
    }
    else
    {
        if(guess===ran)
        {
            window.alert(`You guessed the Number ${guess} after ${atempts} attempts`);
            guessed = true;
        }
        else if(guess > ran)
        {
            window.alert(`The guess is too High!!!`);
        }
        else if(guess < ran)
        {
            window.alert(`The guess is too Low!!!`);
        }
        atempts++;
    }
}
