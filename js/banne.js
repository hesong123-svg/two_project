(function () {
    var banner = document.querySelector('#banner'); //获取banner
    var pic = U.getId('pic'); //获取所有的图片地址
    var oL = banner.querySelector('.oL'); //获取轮播点
    var leftBtn = banner.querySelector('.leftBtn'); //获取左按钮
    var rightBtn = banner.querySelector('.rightBtn'); //获取右按钮
    console.log(oL)
    U.ajax({
        'type': 'get',
        'url': 'js/banner.json',
        'success': function (res) {
            dealDat(res);
        }
    })

    function dealDat(date) {
        console.log(date);
        var str1 = ""; //用来拼接图片
        var str2 = ""; //用来拼接轮播点
        for (var i = 0; i < date.length; i++) {
            var cur = date[i]; 
            str1 += `<li style="z-index:${cur.zIndex}">
            <a href="${cur.href}">
                <img src="${cur.src}" alt="">
            </a>
            </li>`; //拼接li

            if(i == 0){ //拼接轮播点
                str2 += `<span class="active"></span>`;
            }else{
                str2 += `<span></span>`;
            }
        }
        pic.innerHTML = str1; //赋值
        oL.innerHTML = str2; //赋值
        //自动轮播
        var timer = null;
        var n = 0;
        var list = pic.querySelectorAll('li');//获取图片
        var dots = oL.querySelectorAll('span'); //获取轮播点
        timer = setInterval(auto,2000);
        function auto(){
            n++;
            if(n == list.length){
                n = 0;
            }
            if(n == -1){
                n = list.length - 1;
            }
            for(var i = 0; i < list.length; i++){
                U.move(list[i],{'opacity':0});
                dots[i].className = "";
                list[i].style.zIndex = 0;
            }
            U.move(list[n],{'opacity':100});
            dots[n].className = 'active';
            list[n].style.zIndex = 1;

            
        }
        //移入
        banner.onmouseover = function(){
            leftBtn.style.opacity = rightBtn.style.opacity = 1;
            clearInterval(timer);
        }
        //移出
        banner.onmouseout = function(){
            leftBtn.style.opacity = rightBtn.style.opacity = 0;
            timer = setInterval(auto,2000)
        }
        //右按钮
        rightBtn.onclick = auto;
        //左按钮
        leftBtn.onclick = function(){
            n -= 2;
            auto();
        }
        //轮播点
        for(var i = 0; i < dots.length; i++){
            dots[i].index = i;
            dots[i].onmouseover = function(){
                n = this.index - 1;
                auto();
            }
        }
    }
    
})()