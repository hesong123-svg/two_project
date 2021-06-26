(function(){
    var indexFix = document.querySelector(".indexFix");
    var fixBtnClose = indexFix.querySelector(".fixBtnClose");
    var fixBtnOpen = indexFix.querySelector(".fixBtnOpen");
   
    fixBtnOpen.onclick = function(){
        this.style.display = "none";
        fixBtnClose.style.display = "block";
        U.move(indexFix,{"right":0});
       
        
    }

    fixBtnClose.onclick = function(){
        this.style.display = "none";
        fixBtnOpen.style.display = "block";
        U.move(indexFix,{"right":-162});
        
    }

    //返回顶部
    var goTop  = document.querySelector(".offcn-itop");
    window.onscroll = function(){
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollT >= 450){       
            U.move(goTop,{"opacity":100});   
            goTop.style.display = "block";
        }else{
            U.move(goTop,{"opacity":0});
        }

    }

    var timer = null;
    goTop.onclick =function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var dis = document.documentElement.scrollTop || document.body.scrollTop;
            dis -= 20;
            if(dis <= 0){
                dis = 0;
                clearInterval(timer);
                goTop.style.display = "none";

            }
            document.documentElement.scrollTop = document.body.scrollTop = dis;

        })

        
    }
})()