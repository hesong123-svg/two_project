(function(){
    var banner = document.querySelector(".banner");
    var pic = U.getId("pic");
    var page = banner.querySelector(".page");
    var leftBtn  = banner.querySelector(".leftBtn");
    var rightBtn = banner.querySelector(".rightBtn");
    U.ajax({
        "type" : "get",
        "url" : "data/banner.json",
        "success" : function(res){
            dealData(res);
        }

    })
  
    function dealData(data){
        var str1 = "";
        var str2 = "";
        for(var i = 0 ; i < data.length; i ++){
            var cur = data[i];
            str1 += `<li style="z-index:${cur.zIndex}">
                <a href="${cur.href}">
                    <img src="${cur.src}" alt="">
                </a>
            </li>`;
            if(i == 0){
                str2 += `<span class="active"></span>`;
            }else{
                str2 += `<span></span>`;
            }
        }
        pic.innerHTML = str1;
        page.innerHTML = str2;
        //轮播
        var timer = null;
        var n = 0; // 当前轮播图的下标
        var list = pic.querySelectorAll("li"); 
        var dots = page.querySelectorAll("span");
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
               U.move(list[i],{"opacity" : 0});
               dots[i].className = "";   
               list[i].style.zIndex = 0;
            }

            U.move(list[n],{"opacity" : 100});
            dots[n].className = "active";
            list[n].style.zIndex = 1;
        }

        banner.onmouseover = function(){
            leftBtn.style.opacity = rightBtn.style.opacity = 1;
            clearInterval(timer);
        }

        banner.onmouseout = function(){
            leftBtn.style.opacity = rightBtn.style.opacity = 0;
            timer = setInterval(auto,2000);
        }

        rightBtn.onclick = auto;

        leftBtn.onclick = function(){
            n -= 2;
            auto();
        }

        for(var i = 0; i < dots.length; i++){
            dots[i].index = i;
            dots[i].onmouseover = function(){
                n = this.index - 1;
                auto();
            }
        }

    }


})()