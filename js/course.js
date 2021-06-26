(function () {
    var tab2 = U.getId('tab2');
    var tab3 = U.getId('tab3');
    var tab4 = U.getId('tab4');
    var jp_xi2 = document.querySelector("#tab2 .jp .jp_xi");
    var jp_xi3 = document.querySelector("#tab3 .jp .jp_xi");
    var jp_xi4 = document.querySelector("#tab4 .jp .jp_xi");
    U.ajax({
        "type": 'get',
        "url": "data/course.json",
        "success": function (res) {
            // console.log(res)
            for (var key in res) {
                dealData(key, res[key])
            }
        }
    })

    function dealData(classify, arr) {
        var str1 = "";
        var str2 = "";
        for (var i = 0; i < arr.length; i++) {
            var cur = arr[i];
            str1 += `<li>${cur.title}</li>`
            if (i == 0) {
                str2 += `<ul class="tab_body show">`;
            } else {
                str2 += `<ul class="tab_body">`;
            }
            var list = cur.list;
            for (var j = 0; j < list.length; j++) {
                var current = list[j];
                str2 += ` <li>
                <a href="${current.href}"> <img src="${current.src}" alt=""></a>
               
                <h3>${current.title}</h3>
                <p>￥${current.price}<span>${current.time}课时<span</p>
                </li>`
            }
            str2 += `</ul>`;

        
    }
        // console.log(jp_xi);

        if(classify == "classify1"){
            tab2.querySelector(".list_title").innerHTML = str1;
            jp_xi2.innerHTML = str2;
        }else if(classify == "classify2"){
            tab3.querySelector(".list_title").innerHTML = str1;
            jp_xi3.innerHTML = str2;
        }else if(classify == "classify3"){
            tab4.querySelector(".list_title").innerHTML = str1;
            jp_xi4.innerHTML = str2;
        }

        tabFn(tab2);
        tabFn(tab3);
        tabFn(tab4);
    }
    function tabFn (parent){
        var oLi = parent.querySelector(".list_title").getElementsByTagName("li");
        var oDiv = parent.querySelectorAll(".tab_body");
        // console.log(oLi,oDiv)
        for(var i = 0; i < oLi.length; i++){
            oLi[i].index = i;
            oLi[i].onmouseover = function(){
                for(var j = 0; j < oLi.length; j++){
                    U.removeClass(oLi[j],'on');
                    U.removeClass(oDiv[j],'show');
                }
                U.addClass(this,'on');
                U.addClass(oDiv[this.index],'show')
            }
        }
    }

})()