let passwordInp = document.getElementById('password');
let confirmPasswordInp = document.getElementById('Cpassword');
let showPass = document.querySelector('.showPass');
let cShowPass = document.querySelector('.cShowPass');

// show password
showPass.addEventListener("click", function() {
    if (passwordInp.type === 'password') {
        passwordInp.type = 'text';
    } else {
        passwordInp.type = 'password';
    }
});

cShowPass.addEventListener("click", function() {
    if (confirmPasswordInp.type === 'password') {
        confirmPasswordInp.type = 'text';
    } else {
        confirmPasswordInp.type = 'password';
    }
});


document.getElementById("formData").addEventListener('click', function(e) {
    e.preventDefault();
    
    // password validation 
    const password = passwordInp.value;
    const confirmedPassword = confirmPasswordInp.value;

    if (password !== confirmedPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    else{
        alert("Data log succesfully")
    }

    // log data
    const Data = {
        "firstName": document.getElementById('Fname').value,
        "lastName": document.getElementById('Lname').value,
        "email": document.getElementById('email').value,
        "mobile": document.getElementById('mobile').value,
        "password": password,
        "confirmedPassword": confirmedPassword
    };

    console.log(Data);
});
