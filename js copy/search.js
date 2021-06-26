(function () {
    var search = U.getClass("search")[0];
    var sub = U.getClass("sub")[0];  //搜素按钮
    var te = U.getClass("te")[0];//课程搜素框
    sub.onmouseover = function(){
        search.style.transition  = ".3s";
        search.style.width = "140px";
        search.style.border = "1px solid #ccc";
        te.style.width = "110px";
        te.style.transition = ".5s";
        te.focus();

    }

    te.onblur = function(){
        search.style.width = "17px";
        te.style.width = "0px";
        search.style.border = "1px solid transparent";
        search.style.transition  = ".5s";
        te.style.transition = ".3s";
    }

})()