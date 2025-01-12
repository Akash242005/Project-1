let score = 0;

function game(){
    function increaseScore(points){
        score+=points;
        console.log(`+${points} pts`);
    }
    function decreseScore(points){
        score-=points;
        console.log(`-${points} pts`);
    }
    function getScore(){
        return score;
    }
    return{increaseScore,decreseScore,getScore};
}

const object = game();
object.increaseScore(4);
object.increaseScore(5);
console.log(`The Current Score is : ${object.getScore()}`);
object.decreseScore(5);
console.log(`The Current Score is : ${object.getScore()}`);
