function handleSubmit(){
  let  valid = true ; 

  let name = document.getElementById('fullname').value;
  let user = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let dateOfBirth = document.getElementById('dob').value

  let dobYear = new Date(dateOfBirth).getFullYear()
  let currentYear = new Date().getFullYear();

  const errorNameEl =  document.getElementById('nameCheck');
  const errorUsernameEL = document.getElementById('userCheck');
  const errorPasswordEL = document.getElementById('passwordCheck');
  const errorConfirmPasswordEL = document.getElementById('confirmCheck');
  const errordobCheckEL = document.getElementById('dobCheck')

  errorNameEl.innerHTML = ''
  errorUsernameEL.innerHTML=''
  errorPasswordEL.innerHTML = ''
  errorConfirmPasswordEL.innerHTML = ''
  errordobCheckEL.innerHTML = ''

  if(name.length < 4){
   errorNameEl.innerHTML='Full name must be at least 4 ';
   valid =  false ;
  }
  if(user.length < 6){
    errorUsernameEL.innerHTML='User name must be at least 6 ';
    valid = false ;
  }
  if(password.length < 6){
    errorPasswordEL.innerHTML='Password must be at least 6 ';
    valid = false ;
  }
  if(password !== confirmPassword){
    errorConfirmPasswordEL.innerHTML='confirm Password doesnot match ';
    valid = false ;
  }
  if (currentYear - dobYear < 18){
     errordobCheckEL.innerHTML = 'Age is less than 18 '
     valid = false;
 }
  

  return valid ;


  

}