function finalScore (omr) {
   
       // Check first input type
       if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

   const result = {
    right: omr.right,
    wrong: omr.wrong,
    skip: omr.skip
   };

    const finalResult = Math.round(result.right - result.wrong * .5) ;
    

  const totalNumber = result.right + result.wrong + result.skip;
   if (totalNumber !== 100){
    return "Invalid";
   }

  return finalResult;
}

/*  
console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore('!@#'));
console.log(finalScore(["Raj"]));
*/