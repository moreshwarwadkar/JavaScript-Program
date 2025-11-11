let otp = Math.floor(Math.random()*1000000);
alert('OTP is : '+otp)

let user_otp = prompt('Enter OTP: ');

if(otp==user_otp){
    console.log('Correct OTP');
}
else{
    console.log('Wrong OTP');
}