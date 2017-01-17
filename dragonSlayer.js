//theOdinProject Javascrip Codecademy Slay the dragon excercise
//v1.0

var slaying = true;
var youHit = Math.floor(Math.random()*2);
var dmgThisRound = Math.folor(Math.random()*5+1);
var totalDamage = 0;


while(slaying){
    if(youHit = 1){
        console.log("You hit the dragon! Making " + dmgThisRound + " damage points.");
        totalDamage += dmgThisRound;
            if(totalDamage>=dragonLife){
                console.log("Dragon died.");
                slaying=false;
                }
            else{
                youHit = Math.floor(Math.random()*5+1);
                }
        
        }
    else{
        console.log("You missed, the dragon just fucked you in the arse.");
        slaying=false;
        }
    
    
    }
