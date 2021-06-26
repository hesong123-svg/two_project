(function(){
    var video = U.getId('video'); //获取视频元素
    var list = U.getClass('list_show')[0];//获取ul列表
    U.ajax({
        "type" : "get",
        "url" : "data/video.json",
        "success" : function(res){
            dealData(res)
            
        }
    })

    function dealData(res){
        var str = "";
        for(var i = 0; i < res.length; i++){ //遍历每个li
            var cur = res[i];
                //拼接li       视频路径       章节路径
            str += ` <li _src="${cur.src}">${cur.title}</li>`;
        }
        list.innerHTML = str;
        var oLi = list.children; //获取ul下的直接子元素
        for(var i = 0; i < oLi.length; i++){
            oLi[i].onmouseover = function(){
                video.src = this.getAttribute("_src");
            }
        }

    }
    //存用户名和密码
    localStorage.setItem("infor1","uname=16623305184");
})()