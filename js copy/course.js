(function () {
    var tab2 = U.getId("tab2"); //精品网课
    var tab3 = U.getId("tab3");//免费课程
    var tab4 = U.getId("tab4");//就业面授
    // var list_title = 
    U.ajax({
        "type": "get",
        "url": "data/course.json",
        "success": function (res) {
            console.log(res);
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
            str1 += ` <li class="fl tab_title">${cur.title}</li>`;
            if (i == 0) {
                str2 += `<ul class="clearfix list_body tab_body show">`;
            } else {
                str2 += `<ul class="clearfix list_body tab_body">`
            }
            var list = cur.list;
            for (var j = 0; j < list.length; j++) {
                var current = list[j];//
                str2 += `<li class="fl">
                    <div>
                        <a href="${current.href}">
                            <img src="${current.src}" alt="">
                        </a>
                    </div>
                    <h6>
                        <a href="${current.href}">
                            ${current.title}
                        </a>
                    </h6>
                    <p class="clearfix">
                        <span class="fl">￥${current.price}</span>
                        <i class="fr">${current.time}课时</i>
                    </p>
                </li>`
            }

            str2 += `</ul>`;

        }

        if (classify == "classify1") {//精品网课
            tab2.querySelector(".list_title").innerHTML = str1;
            tab2.innerHTML += str2;

        } else if (classify == "classify2") {//免费课程
            tab3.querySelector(".list_title").innerHTML = str1;
            tab3.innerHTML += str2;

        } else if (classify == "classify3") {//就业面授
            tab4.querySelector(".list_title").innerHTML = str1;
            tab4.innerHTML += str2;
        }

        tabFn(tab2); //精品网课选项卡
        tabFn(tab3);
        tabFn(tab4);
    }

    function tabFn(parent){
        var oLis = parent.querySelector(".list_title").getElementsByTagName("li");
        var oDivs = parent.querySelectorAll(".tab_body");
        for(var i = 0; i < oLis.length; i++){
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

       
    }
})()