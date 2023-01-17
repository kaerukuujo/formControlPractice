const emailField = document.getElementById('userEmail');
const passField = document.getElementById('userPass');
const dobField = document.getElementById('dob');
const termsField = document.getElementById('t&c');

function isValid() {
    // console.log(`email valid: ${emailField.validity.valid}`);
    // console.log(`password valid: ${passField.validity.valid}`);
    // console.log(`Date of Birth valid: ${dobField.validity.valid}`);
    // console.log(`Terms and Cons valid: ${termsField.validity.valid}`);
    if(
        !emailField.validity.valid ||
        !passField.validity.valid ||
        !dobField.validity.valid || 
        !termsField.validity.valid
    ) {
        console.log('invalid submit');
    } else {
        console.log('valid submit');
        document.getElementById('subForm').submit();
    }
}

