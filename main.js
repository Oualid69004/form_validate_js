const form       = document.getElementById('form');
const firstname  = document.getElementById('firstname');
const lastname   = document.getElementById('lastname');
const email      = document.getElementById('email');
const lotonumber = document.getElementById('lotonumber');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get the values from inputs
    //trim() to remove the whitespaces 
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const lotonumberValue = lotonumber.value.trim();
 
    if (firstnameValue === '') {
        // show error 
        // add error class
        setErrorFor(firstname,'first name cannot be blank');
    } else {
        // add success class
        setSuccessFor(firstname);

    }
    if (lastnameValue === '') {
        // show error 
        setErrorFor(lastname,'last name cannot be blank');
        // add error class
        
    } else {
        // add success class
        setSuccessFor(lastname);

    }
    if (emailValue === '') {
        // show error 
        setErrorFor(email,'email cannot be blank');
        // add error class
        
    } else if (!isEmail(emailValue)) {
       // show error 
       setErrorFor(email,'email it is not valid');

    }else {
        // add success class
        setSuccessFor(email);

    }

}

function  setErrorFor(input,message){
    const formControl = input.parentElement;//div form-control
    const small = formControl.querySelector('small');//add error message inside small tag
    small.innerText = message;
    
    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;//div form-control   
 //add success class
 formControl.className = 'form-control success'
}

function isEmail(email){
  // return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/.test(email);
    
}