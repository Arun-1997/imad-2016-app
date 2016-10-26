
{
	function gototransition()
	{
		animate();
	}
	var pos = 0;
	function animate()
	{
			var x= document.getElementById('image');
			var t= setInterval(move,15);
			function move()
			{
				if(pos>260)
					clearInterval(t);
				else
				{
					pos+=1;
					x.style.top= pos+'px';
				} 
			}
	}
}