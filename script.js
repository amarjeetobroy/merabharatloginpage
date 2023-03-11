// const logregBox = document.querySelector('.logreg-Box');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', () => {
//     logregBox.classList.add("active");
// });

// loginLink.addEventListener('click', () => {
//     logregBox.classList.remove("active");
// });


/* popup javascript from here*/

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}