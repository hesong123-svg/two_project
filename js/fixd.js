(function(){
    var left = U.getClass('left')[0];
    var right = U.getClass('right')[0];
    var fixed = U.getId('fixed');
    var wall = U.getClass('wall')[0];
    var fixCon = U.getClass('fixCon')[0];
    left.onclick = function(){
        fixCon.style.display = 'block'
        this.style.display = 'none';
        right.style.display = 'block';
        U.move(fixed,{'right':0})
    }
    right.onclick = function(){
        this.style.display = 'none';
        left.style.display = 'block';
        U.move(fixed,{'right':-150})


    }
})()