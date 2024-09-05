document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('frm').addEventListener('submit',function(event){
        event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const erorms = document.getElementById("Errorms");

    if(email && password){
        erorms.innerText = 'your login succesfully';
        erorms.style.color = 'green';
        erorms.reset();
    }else{
        erorms.innerText = 'please try again';
        erorms.style.color = 'red';
    }

});
});