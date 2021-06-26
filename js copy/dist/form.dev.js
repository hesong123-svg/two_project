"use strict";

U.addLoad(function () {
  var form = document.querySelector('.main_l form');
  var tel = form.tel;
  var pass = form.pass;
  var pass2 = form.pass2;
  var code = form.code;
  var sub = form.submit;
  var arr = [false, false, false, false]; // console.log(tel, pass, pass2, code, sub);

  var verifyCode = new GVerify("v_container");
  var re = {
    tel: /^1\d{10}$/,
    pass: /^\w{6,10}$/
  };

  tel.onblur = function () {
    var em = tel.nextElementSibling;

    if (re.tel.test(tel.value)) {
      em.innerText = '';
      U.addClass(em, 'ok');
      arr[0] = true;
    } else {
      em.innerText = '请输入正确的手机号';
      U.removeClass(em, 'ok');
    }
  };

  pass.onblur = function () {
    var em = pass.nextElementSibling;

    if (re.pass.test(pass.value)) {
      em.innerText = '';
      U.addClass(em, 'ok');
      arr[1] = true;
    } else {
      em.innerText = '请输入正确的密码';
      U.removeClass(em, 'ok');
    }
  };

  pass2.onblur = function () {
    var em = pass2.nextElementSibling;

    if (pass.value != '' && pass2.value === pass.value) {
      em.innerText = '';
      U.addClass(em, 'ok');
      arr[2] = true;
    } else {
      em.innerText = '请输入正确的密码';
      U.removeClass(em, 'ok');
    }
  };

  code.onblur = function () {
    var em = code.nextElementSibling;

    if (verifyCode.validate(code.value)) {
      em.innerText = '';
      U.addClass(em, 'ok');
      arr[3] = true;
    } else {
      em.innerText = '请输入正确的验证码';
      U.removeClass(em, 'ok');
    }
  };

  form.onsubmit = function () {
    tel.onblur();
    pass.onblur();
    pass2.onblur();
    code.onblur();
    var flag = arr.every(function (item) {
      return item;
    });
    var dataStr = 'tel=' + tel.value + '&pass=' + pass.value;

    if (flag) {
      U.ajax('get', './data/data.json', 'dataStr', function (data) {
        localStorage.setItem("tel", tel.value);
        open('index.html');
      });
    }

    return false;
  };
});