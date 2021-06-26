(function(){
    var info = localStorage.getItem("userInfold").split('&');
    var name = info[0].split("=")[1];
    var pwa = info[1].split('=')[1];
    var sub = U.getId('sub');
    var phone = U.getId('phone');
    var pass = U.getId('pass');
    var warn = U.getId('warn');
    sub.onclick = function(){
        var phoneVal = phone.value;
        var passVal = pass.value;
        if(name == phoneVal && passVal == pwa){
            window.location.href = 'index.html';
        }else{
            U.addClass(warn,'show');
        }
    }
})()