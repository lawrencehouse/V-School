function walk(){
    /* ask user to push "w" to walk
    if (user pushed w){
        if(1 in 4){
            fight();
        } else {
            //tell user they didn't run into a monster
            //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
        }
    } else {
        tell user what's in their inventory, and their health, and then tell them to push w to walk */
}

function run(){
    if(1 in 2){
        //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    } else {
        //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    }
}

function fight(){
    /* ask user to either fight or run
    enemyCreation()
    if (user is trying to run){
        run()
    } else {
        attackEnemy()
    } */
}

function attackEnemy(){
    /* user deals random damage to enemy between a min and max amount - 20-40?
    if (damage is 35-40){
        console.log('Critical Hit!')
        enemyHealth -+ damage
    }
}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}

function enemyCreation(){

}