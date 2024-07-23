const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function printPwd() {
    const length = document.getElementById('length').value;
    if (length && length > 0) {
        const password = generatePassword(parseInt(length));
        document.getElementById('stampa').innerText = password;
    } else {
        document.getElementById('stampa').innerText = 'Please enter a valid length';
    }
}
