function gonoVote(array) {


// Check first input type
if (!Array.isArray(array)) {
    return "Invalid";
}


let havoteCount=0;
let navoteCount=0;
for(const item of array){
      
    if(item === "ha"){
        havoteCount++;
       
    
    }
  else {
        navoteCount++;
        
  }

}

if (havoteCount === navoteCount){
    return "equal";
}
else if (havoteCount >= navoteCount){
    return true;
}
else {
    return false;
}

}



console.log(gonoVote(["ha", "na", "ha", "na"]))