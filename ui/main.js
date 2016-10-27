var pos = 0;
    
function gotoimg1()
{
    var x = document.getElementById('img1');
    var t = setInterval(move,15);
    function move()
    {
        if(pos<600)
        {
            x.style.left = pos+"px";
            pos+=1;
        }
        else
        {
            clearInterval(t);
        }
    }
}