// (function(){
//     var dl = document.getElementById('IT');
//     var dt = IT.querySelectorAll('span')
//     var dd = IT.getElementsByTagName('dd');
//     for(var i = 0; i < dt.length; i++){
//         //console.log(dt[i])
//         dt[i].index = i;
//         dt[i].onmouseover = function(){
//             for(var j = 0; j < dt.length; j++){
//                 U.removeClass(dt[j],"on");
//                 U.removeClass(dd[j],"show")
//                 // dt[j].className = "";
//                 // dd[j].className = "";
//             }
//             // this.className = 'on';
//             // dd[this.index].className = 'show';
//             U.addClass(this,"on");
//             U.addClass(dd[this.index],"show");
//         }
//     }
// })()
!function(){document.getElementById("IT");for(var e=IT.querySelectorAll("span"),n=IT.getElementsByTagName("dd"),o=0;o<e.length;o++)e[o].index=o,e[o].onmouseover=function(){for(var o=0;o<e.length;o++)U.removeClass(e[o],"on"),U.removeClass(n[o],"show");U.addClass(this,"on"),U.addClass(n[this.index],"show")}}();