const form       = document.getElementById('form');
const firstname  = document.getElementById('firstname');
const lastname   = document.getElementById('lastname');
const age        = document.getElementById('age');

const email      = document.getElementById('email');
const confirmemail     = document.getElementById('confirmemail');

const password   = document.getElementById('password');
const confirmpassword  = document.getElementById('confirmpassword');



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
    const ageValue = age.value.trim();
    const confirmemailValue = confirmemail.value.trim();

    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
 
    if (firstnameValue === '') {
        // show error 
        // add error class
        setErrorFor(firstname,'first name cannot be blank');
    } else if (firstnameValue.length < 3) {
        
        setErrorFor(firstname,'first name must be more then 3 caracter');

    }
    else{
        // add success class
        setSuccessFor(firstname)
    }
//************************************************************************************************************** */

    if (lastnameValue === '') {
        // show error 
        setErrorFor(lastname,'last name cannot be blank');
        // add error class
        
    }else if (lastnameValue.length < 3) {
        
        setErrorFor(lastname,'last name must be more then 3 caracter');

    }
    else{
        // add success class
        setSuccessFor(lastname)
    }

/****************************************************************************************************** */

    if (ageValue === '') {
        // show error 
        // add error class
        setErrorFor(age,'age cannot be blank');
    } else if (ageValue < 18) {
        
        setErrorFor(age,'can not be less to 18 years');

    } else if (ageValue > 150) {
        
        setErrorFor(age,'can not be more the 150 years old');

    }
    else{
        // add success class
        setSuccessFor(age)
    }




    //******************************************************************************* */
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
    if (confirmemailValue === '') {
        // show error 
        setErrorFor(confirmemail,'email cannot be blank');
        // add error class
        
    } else if (confirmemailValue != emailValue) {
       // show error 
       setErrorFor(confirmemail,'email it is not a same');
    
    }else {
        // add success class
        setSuccessFor(confirmemail);
    
    }


    if (passwordValue === '') {
        // show error 
        setErrorFor(password,'password cannot be blank');
        // add error class
        
    } else if (!isPassword(password)) {
       // show error 
       setErrorFor(password,'password it is not valid');

    }else {
        // add success class
        setSuccessFor(password);
    }
}

/***************************
 * //var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    if(passwordValue != "" && passwordValue == confirmpasswordValue) {
            if(passwordValue.length < 6) {
            
            setErrorFor(password,'Password must contain at least six characters!');
            }else if(passwordValue == lastnameValue) {
            
            setErrorFor(password,'Password must be different from lastname!');

            }else if(!re.test(passwordValue)) {
            setErrorFor(password,"Error: password must contain at least one number (0-9)!");
            }else if(!re.test(passwordValue)) {
            setErrorFor(password,"Error: password must contain at least one lowercase letter (a-z)!");
            }else if(!re.test(passwordValue)) {
            setErrorFor(password,"Error: password must contain at least one uppercase letter (A-Z)!");
            }else{
                setSuccessFor(password);
            }
    } else {
        setErrorFor(password,'password cannot be blank');
    }
 * 
 * ************************************************************** */



  








/**************************************************************************************** */


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

function isPassword(password){
    return  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password);
           // at least one number, one lowercase and one uppercase letter
          // at least six characters that are letters, numbers or the underscore
}
 