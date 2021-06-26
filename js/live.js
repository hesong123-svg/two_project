(function () {
    var zgBox = document.querySelector('.zgBox');
    var zg_r = document.querySelector('.zg_r');
    var oUl = zg_r.getElementsByTagName('ul')[0];
    U.ajax({
        "type": "get",
        "url": "data/live.json",
        "success": function (res) {
            dealData(res);
        }
    })
    function dealData(data) {
        var str1 = ""; //用来拼接图片
        var str2 = ""; //用来拼接文字
        for (var i = 0; i < data.length; i++) {
            var cur = data[i]; //定义cur = data[i];
            if(i == 0){
                str1 += `<div class="zg show">`;//拼接图片的当前显示那张
                str2 += `<li class="on">`; //拼接li当前的高亮状态
            }else{
                str1 += `<div class="zg">`;
                str2 += `<li>`;
            }
            str1 += `<img _href="${cur.href}" src="${cur.url}" alt="">
            <span><em class="iconfont">&#xe62f;
            </em>未开始</span>
            <p>${cur.course}</p>
            </div>`;
            str2 += ` <em class="iconfont">&#xe62f;</em>
                        <span>2020-09-18  15:00:00</span>
                        <h6>${cur.title}</h6>
                    </li>`; //固定的不变，需要改变的设置${与改变的值}
                   
        }
        zgBox.innerHTML = str1;
        oUl.innerHTML = str2; 
        //选项卡
        var oDiv = zgBox.children; //获取zgBOX 下的直接子元素
        var oLi = oUl.children; //获取oUl 下的直接子元素 li
        for(var i = 0; i < oLi.length; i++){ //遍历接收到的所有的li
            oLi[i].index = i; //自定义属性
            oLi[i].onmouseover = function(){ //设置鼠标移入事件
                for(var j = 0; j < oLi.length; j++){ //排他法，清除默认样式
                    U.removeClass(oLi[j],'on');//删除带on的标签类名
                    U.removeClass(oDiv[j],'show'); //删除带show的class类名
                }
                U.addClass(this,'on'); //添加on类名
                U.addClass(oDiv[this.index],'show');//添加show类名
            }
        }

        //点击跳转事件
        var oImg = zgBox.getElementsByTagName('img');

        //遍历oImg 获取所有的img
        for(var i = 0; i < oImg.length; i++){
            oImg[i].onclick = function(){
                window.location.href = this.getAttribute("_href");
            }
        }
    }

})()

