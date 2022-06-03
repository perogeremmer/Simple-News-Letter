function submitEmail() {
    let email = document.getElementById("email").value;
    console.log(email.length)
    if (email.length < 1) {
        return;
    }

    document.getElementById("form-email").remove();

    let textWelcome = document.getElementById("text-finished");
    textWelcome.innerHTML = `<p class="success-message">Thank you for submitting your email, we will sent an email to your email: ${email}</p>`
    textWelcome.style.display = ""
}