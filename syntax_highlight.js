function syntaxHighlights()
{
	var ca = document.getElementsByTagName("code");
	
	for(var i = 0; i < ca.length; i++)
	{
		var data = ca[i].innerHTML;
		
		if(ca[i].className == "code-xml")
		{
			data = data.replace(/&lt;(.*?)&gt;/g, '<span style="color: #e3bc67">&lt;$1&gt;</span>');
			ca[i].innerHTML = data;
		}
	}
}

window.addEventListener("load", syntaxHighlights);