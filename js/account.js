const accountForm = document.querySelector("#account-form");
const accountInput = document.querySelector("#account-form input");
const accountMassage = document.querySelector("#account-massage");

const savedUsenname = localStorage.getItem("Username");

if(savedUsenname === null) {
    accountForm.classList.remove("hidden");
    accountForm.addEventListener("submit", handleAccountSubmit);

} else {
    accountMassage.classList.remove("hidden");
    accountMassage.innerText = `Hello! ${savedUsenname}!`;
    todoForm.classList.remove("hidden");
}

function handleAccountSubmit(event) {
    event.preventDefault();
    const newAccount = accountInput.value;
    accountInput.value = "";
    localStorage.setItem("Username", newAccount);
    accountForm.classList.add("hidden");

    todoForm.classList.remove("hidden");
    accountMassage.innerText  = `Hello! ${newAccount}!`;
    accountMassage.classList.remove("hidden");
    
}

