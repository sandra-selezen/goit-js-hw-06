const form = document.querySelector(".login-form");

const onFormSubmit = event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);



/*
Write a script to manage the login form.

1. Form submission (form.login-form) must be processed on the submit event.
2. The page must not reload when the form is submitted.
3. If the form has empty fields, display alert saying that all fields must be filled in.
4. As soon as the user has filled in all the fields and submitted the form, 
collect the field values into an object, where the field name will be the property name and the field value will be the property value. 
Use the elements property to access form elements.
5. Display the object with the entered data in the console and 
clear the values of the form fields using the reset method.
*/
