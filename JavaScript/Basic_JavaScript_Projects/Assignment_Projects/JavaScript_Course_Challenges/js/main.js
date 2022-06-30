// FADE CHALLENGE
document.body.classList.add('fade-out');
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// FORM CHALLENGE
function validateForm() {
    let x = document.forms['myForm']['phoneNum'].value;
    if (x == '') {
        alert('Must enter phone number');
        return false;
    }
}

// POPUP CONTACT FORM CHALLENGE
function openForm() {
    document.getElementById('tryForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('tryForm').style.display = 'none';
}