//theOdinProject Javascrip Codecademy Slay the dragon excercise
//v2.0
//dragonLife added, more info showed in console, damage points randomized
var slaying = true;
var youHit = Math.floor(Math.random()*4);
var dmgThisRound = Math.floor(Math.random()*5+1);
var dragonLife = 40;
console.log("A wild dragon showed up! He's got " + dragonLife + " life points. Good luck!");

while(slaying){
    if(youHit >= 1){
        console.log("You hit the dragon! Making " + dmgThisRound + " damage points.");
        
        dragonLife -= dmgThisRound;
        console.log("Dragon life: " + dragonLife + " points.");
            if(dragonLife<=0){
                console.log("Dragon died.");
                slaying=false;
                }
            else{
                youHit = Math.floor(Math.random()*5+1);
                    if(youHit>=2){
                        dmgThisRound = Math.floor(Math.random()*5+1);
                        }
                }
        
        }
    else{
        console.log("You missed, the dragon just fucked you in the arse.");
        slaying=false;
        }
    
    
    
    
    
    
    
    }