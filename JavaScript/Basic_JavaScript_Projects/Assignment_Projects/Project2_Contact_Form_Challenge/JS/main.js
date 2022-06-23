function validateForm() {
    let x = document.forms["ContactForm"]["fname", "lname", "Email"].value;
    if (x == "") {
        alert("Please fill out form entirely");
        return false;
    }
}