var log = document.getElementById("log");
var regis = document.getElementById("regis");
var logout = document.getElementById("logout");
logIn();

$(function () {
    var messages = [],
        index = 0;

    messages.push('Fashion');
    messages.push('Styles');
    messages.push('Collections');

    function cycle() {
        $('#var').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 3000);
    }
    cycle();
});

function logIn() {
    if(localStorage.getItem('log') == 1){
        log.style.display = 'none';
        regis.style.display = 'none';
        logout.style.display = 'block';
    }
}

function logOut() {
    log.style.display = 'block';
    regis.style.display = 'block';
    logout.style.display = 'none';
    document.getElementById('Username').innerHTML = "";
    localStorage.setItem('log', 0);
    localStorage.setItem('userName', '');
}