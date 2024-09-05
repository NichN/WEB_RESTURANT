document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('frm').addEventListener('submit',function(event){
        event.preventDefault();
    const username = document.getElementById('textname').value;
    const email = document.getElementById('txtemail').value;
    const password = document.getElementById("password").value;
    const Cmpass = document.getElementById('cfm-password').value;
    const btn = document.getElementById("btn_submit");
    const requestms = document.getElementById('reqms');
        
    if(username && email && password && Cmpass){
        if(password === Cmpass){
            requestms.innerText = 'Thank you!';
            requestms.style.color = 'green';
            document.getElementById('reqms').reset();
        }else{
            requestms.innerText = 'password is not match!';
            requestms.style.color='red';
        }
    }else{
        requestms.innerText = 'please complete all fill!';
        requestms.style.color = 'Red';
    }

});
});