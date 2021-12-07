var register = document.getElementById("register");

function checkform() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    if(!document.getElementById("email").checkValidity())
    {
        return false;
    }
    return true;
}

register.addEventListener("click", function() {
    if(checkform()) {
        storeData();
        location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/login.html"
    }
    else {
        alert("Please fill the valid details");
    }
})

function storeData() {
    let notes = localStorage.getItem("Register");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    if(document.getElementById("pass").value === document.getElementById("pass2").value) {
        let RegisterData = {
            Fname: document.getElementById("fullname").value,
            mail: document.getElementById("email").value,
            number: document.getElementById("number").value,
            pass: document.getElementById("pass").value,
            pass2: document.getElementById("pass2").value
        }
    
    
        notesObj.push(RegisterData);
        localStorage.setItem('Register', JSON.stringify(notesObj));

        localStorage.setItem('log', 0);
        alert("Successfully Registered");
    }
    else {
        alert("Passwords does not match");
        return;
    }
}