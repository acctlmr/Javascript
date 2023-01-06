function validate()
{
    let username = document.getElementById('username').value;
    
    let email = document.getElementById('email').value;
    
    let password = document.getElementById('password').value;
    
    let cpassword = document.getElementById('cpassword').value;

    checkUsername(username);    
    checkEmail(email);
    checkPassword(password);
    checkPasswordMatch(password,cpassword);

}

function checkUsername(username)
{
    if (username.length >= 8)
    {
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('username_error').innerText = '';
    } else {
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText='Username must be 8 letters long'

    }
}

function checkEmail(email)
{
    
    if (email.length >= 8 && email.includes('@gmail'))
    {
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error', 'success');
        document.getElementById('email_error').innerText = '';
    } else {
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = 'Email should include @gmail and should be 8 letters long.';
    }
}

function checkPassword(password) {

    if (password.length >= 7 && password.includes('.') && password.includes('_'))
    {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('password_error').innerText = '';
    } else {
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText ='Password must be 7 letters long and should include . and _.';
    }
}

function checkPasswordMatch(password, cpassword)
{
    if (password == cpassword)
    {
        document.getElementById('cpassword').classList.add('success');
         document.getElementById('cpassword').classList.replace('error', 'success');
        document.getElementById('cpassword_error').innerText = '';
    } else {
        
         document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerText ='Passwords are not matching';
    }


}
