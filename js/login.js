(function () {
    var phone = U.getId('phone'); //手机号
    var pass = U.getId('pass'); //密码
    var confirm = U.getId('confirm'); //确认密码
    var code = U.getId('code'); //验证码
    var play = U.getId('play'); //随机验证码
    var sign = U.getId('sign'); //注册
    var yzm = document.querySelector('.yzm'); //请输入验证码
    var mains = U.getId('mains'); //大盒子
    
    //手机号验证
    phone.onblur = function () {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
        verify(this, reg);
    }
    //密码验证
    pass.onblur = function () {
        var reg = /^[a-zA-Z]\w{5,7}$/;
        verify(this, reg)
    }
    // 密码确认验证
    confirm.onblur = function () {
        verify(this);
    }
    //验证函数
    function verify(ele, reg) {
        var val = ele.value; //获取输入的内容
        var parent = ele.parentNode; //获取父节点
        var error = parent.querySelector('em'); //错误提醒
        var success = parent.querySelector('b'); //验证成功提醒
        var empty = parent.querySelector('span'); //验证为空提醒
        var aged = pass.value; //获取创建密码的value值

        if (reg) {
            if (val == "") { //如果输入内容为空的话
                U.addClass(empty, 'show');
                U.removeClass(error, 'show');
                U.removeClass(success, 'show');
            } else if (reg.test(val)) { //验证成功提醒
                U.addClass(success, 'show');
                U.removeClass(error, 'show');
                U.removeClass(empty, 'show');
            } else { //验证失败
                U.addClass(error, 'show');
                U.removeClass(success, 'show');
                U.removeClass(empty, 'show');
            }
        } else { //再次验证密码判断
            if (val == "") { //如果为空
                U.addClass(empty, 'show');
                U.removeClass(error, 'show');
                U.removeClass(success, 'show');
            } else if (val == aged) { //如果一致
                U.addClass(success, 'show');
                U.removeClass(error, 'show');
                U.removeClass(empty, 'show');
            } else { //密码不一致
                U.addClass(error, 'show');
                U.removeClass(success, 'show');
                U.removeClass(empty, 'show');
            }
        }

    }

    //随机数
    play.innerHTML = U.getRandom(10000, 99999);
    //随机数验证
    code.onblur = function () {
        var sjs = play.innerText; //获取随机数
        var val = this.value; //获取输入的内容
        if (val == "" || sjs != val) {
            U.addClass(yzm, 'show');
        } else {
            U.removeClass(yzm, 'show')
        }
    }

    //提交
    sign.onclick = function (){
        var oB = mains.querySelectorAll('b');
        for (var i = 0; i< oB.length; i++) {
            //U.hasClass 判断有没有show类名，有的话返回true，没有返回false
            
            console.log(U.hasClass(oB[i], 'show'))
            if (U.hasClass(oB[i], 'show') == false || U.hasClass(yzm, 'show')) {
                return false;
            }
        }
        //ajax发送
        var data = "uname=" + phone.value + "&pas=" + pass.value;
        U.ajax({
            "type": "get",
            "url": "data/login.txt",
            "data": data,
            "success": function (res) {
                if (res == 1) {
                    console.log(1)
                    localStorage.setItem('userInfold', data);
                    window.location.href = 'register.html';
                } else {
                    alert('用户已存在');
                }
            }
        })
    }


})()