(function(){
    var search = U.getId("search");
    var btn = U.getId("btn");
    var keywords = U.getId("keywords");

    btn.onmouseover = function(){
        search.style.border = "1px solid #ccc";
        keywords.style.transition = ".5s";
        keywords.style.width = "110px";
        keywords.focus();
    }

    keywords.onblur = function(){
        search.style.border = "1px solid transparent";
        keywords.style.transition = ".5s";
        keywords.style.width = "0px";
    }

    // 返回顶部
    var TOP = document.querySelector(".off");
    var oSpan = TOP.querySelectorAll('span')
    
    window.onscroll = function(){
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollT >= 400){
            U.move(TOP,{'opacity':100});
            TOP.style.display = 'block';
        }else{
            U.move(TOP,{'opacity':0});
        }
    }

    var timer = null;
    TOP.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var dis = document.documentElement.scrollTop || document.body.scrollTop;
            dis -= 20;
            if(dis <= 0){
                dis = 0;
                clearInterval(timer);
                TOP.style.display = 'none';
            }
            document.documentElement.scrollTop = document.body.scrollTop = dis;
        })
    }
    TOP.onmouseover = function(){
        for(var i = 0; i < oSpan.length; i++){
            oSpan[0].style.display = 'none';
            oSpan[1].style.display = 'block'
            
        }
    }
})()