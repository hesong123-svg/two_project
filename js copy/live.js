(function(){
    var zbbl = document.querySelector(".zbbl");
    var zbbr = document.querySelector(".zbbr");
    var oUl = zbbr.getElementsByTagName("ul")[0];
    U.ajax({
        "type" : "get",
        "url" : "data/limit.json",
        "success" : function(res){
            dealData(res);

        }
    })

    function dealData(data){
        var str1 = "";
        var str2 = "";
        for(var i = 0; i < data.length; i++){
            var cur = data[i];
            if(i == 0){
                str1 += `<div class="zg_zbzt pr tab_body show">`;
                str2 += `<li class="tab_title on">`;
            }else{
                str1 += `<div class="zg_zbzt pr tab_body">`
                str2 += `<li class="tab_title">`;
            }
            str1 += `<img _href="${cur.href}"  src="${cur.url}" alt="">
                <span>未开始</span>
                <p>${cur.course}</p>
            </div>`;
            str2 += ` <div>
                    <span>即将开始</span>
                    <i>${cur.time}</i>
                </div>
                <h6>${cur.title}</h6>
            </li>`
        }
     
        zbbl.innerHTML = str1;
        oUl.innerHTML = str2;

        //选项卡 
        var oDivs = zbbl.children; //show显示
        var oLis = oUl.children;//on 高亮 
        for(var i = 0;i < oLis.length; i++){
            oLis[i].index = i;
            oLis[i].onmouseover = function(){
                for(var j = 0; j < oLis.length; j++){
                    U.removeClass(oLis[j],"on");
                    U.removeClass(oDivs[j],"show");
                }
                U.addClass(this,"on");
                U.addClass(oDivs[this.index],"show");
            }
        }   

        //点击跳转
        var oImgs = zbbl.getElementsByTagName("img");
     
        for(var i = 0; i < oImgs.length; i++){
            oImgs[i].onclick = function(){
                window.location.href = this.getAttribute("_href");
            }
        }


    }
})()