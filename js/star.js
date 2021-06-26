(function () {
    var num = U.getId('num');
    var stars = U.getId('stars');
    var oSpan = stars.querySelectorAll('span');
    var ipt = U.getId('ipt');
    var btn = U.getId('btns');
    var sum = U.getId('sum');
    var ni = U.getId('ni');
    var content = U.getId('content');
    //星星
    for (let i = 0; i < oSpan.length; i++) {
        oSpan[i].onclick = function () {
            U.toggleClass(this, 'on'); //控制自身的星星
            for (var j = 0; j < i; j++) { //控制前面的星星亮
                U.addClass(oSpan[j], 'on')
            }
            for (var j = i + 1; j < 5; j++) { //控制后面的星星不亮
                U.removeClass(oSpan[j], 'on')
            }
        }
    }

    //发送按钮事件
    btn.onclick = function () {
        var flag = true; //如果没有星星
        var star = 0; //定义一个变量累计星星的个数
        for (var i = 0; i < oSpan.length; i++) {
            if (U.hasClass(oSpan[i], 'on')) { //如果有带on的说明不为空 
                star++;
                flag = false;
            }
        }
        if (flag) { //如果没有星星评分
            alert('请先点星星后评论');
            return;
        }

        //判断是否为空
        var val = ipt.value;
        if (val.trim() == "") {
            alert('请评论~~');
            return;
        }

        var str = "";
        str += `<li>
        <p class="user">
        <img src="images/nim2.jpg" alt="">`;
        if (!ni.checked) { //如果没有勾选匿名
            var name = localStorage.getItem("infor1").split("=")[1];
            str += `<em>${name}</em>`;
        } else {
            str += `<em>匿名评论</em>`
        }

        //拼星星
        for (var i = 0; i < oSpan.length; i++) {
            if (i < star) {
                str += `<span class="one"></span>`
            } else {
                str += `<span></span>`
            }
        }
        str += `<p>`;
        str += `<p class="user_text">${val}</p>`;
        console.log(content)
        content.innerHTML = str + content.innerHTML;

        ipt.value = "";
        //content.innerText = 0;
        var oLi = content.children;
        num.innerText = oLi.length;
    }

    //计算字符个数
    ipt.onkeyup = function () {
        var val = this.value;
        var length = val.length;
        if (length > 200) {
            val = val.substr(0, 200);
            this.value = val;
        }
        sum.innerText = 200 - length;
    }
})()