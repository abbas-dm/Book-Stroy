var login = document.getElementById("login");

function checkform() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    if(!document.getElementById("log-mail").checkValidity())
    {
        return false;
    }
    return true;
}

login.addEventListener("click", function() {
    if(checkform()) {
        if(check()) {
            localStorage.setItem('log', 1)
            location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/products.html";
        }
        else {
            alert("Details are not present, Kindly Register");
            location.href = "file:///C:/Users/JAHEER%20ABBAS/Desktop/E-Commernce/Code%20files/signup.html";
        }
    }
    else {
        alert("Please fill the valid details");
    }
})

function check() {

    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("Register")) {
            console.log("Data Got");
            let data = JSON.parse(localStorage.getItem("Register"));

            var flag = 0;

            var userMail = document.getElementById('log-mail').value;
            var userPw = document.getElementById('log-pass').value;

            for (i=0;i<Object.keys(data).length;i++){

                if(data[i].mail !== userMail || data[i].pass2 !== userPw){
                    flag = 0;
                }else {
                    flag = 1;
                    localStorage.setItem("userName", data[i].Fname);
                    return true;
                }
            }
            if(flag == 0) return false;
        }
        else {
            alert("Browser does not support Web Storage.");
        }
    }
}