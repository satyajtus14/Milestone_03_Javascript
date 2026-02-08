function validOtp(otp) {

  // Check first input type
  if(typeof otp !== 'string'){
    return "Invalid";
  }

  if ((otp.startsWith('ph-')) && (otp.length === 8)) {
      return true;
  } 
  else if ((otp.startsWith('ph-')) &&  (otp.length < 8)){
    return false;
  }
  else if ((!otp.startsWith('ph-'))){
    return false;
  }
  else {
      return "Thank you";
  }
}

// Sample Test Cases:
// console.log(validOtp("ph-10985"));
// console.log(validOtp("ph-1234"));
// console.log(validOtp("abc-12345"));
// console.log(validOtp(["ph-10985"]));
// console.log(validOtp(12345678));
