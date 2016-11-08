//点击时运行
function showPic(pic){
	 //alert("点击了 -- "+pic); 
	if(!document.getElementById("photoholder")) return true;
	var src=pic.getAttribute("href");
	//alert("src--"+src);
	var photo=document.getElementById("photoholder");
	photo.setAttribute("src",src);
	//为什么两个返回不一样？？？
	if(!document.getElementById("desc")) return false;
	//设置描述
	if(pic.getAttribute("title")){
		var text=pic.getAttribute("title");
	}else{
		var text="";
	}
	var desc=document.getElementById("desc");
	//什么意思？？
	if(desc.firstChild.nodeType == 3){
		desc.firstChild.nodeValue=text;
	}
	return false;
}
//加载时运行
function insertElement(){	 
	 
	if(!document.getElementById("gallery")) return false;
	//创建photo元素
	var photoholder=document.createElement("photo");
	photoholder.setAttribute("id","photoholder");
	photoholder.setAttribute("src","images/photos/basic.jpg");
	photoholder.setAttribute("alt","show photo");
	//创建desc元素
	var desc=document.createElement("p");
	desc.setAttribute("id","desc");
	//创建text元素
	var text=document.createTextNode("choose a photo");
	//连接

	desc.appendChild(text);

	var gallery=document.getElementById("gallery");

	insertAfter(desc,gallery);

	insertAfter(photoholder,desc);



	//创建desc元素
	var ddd=document.createElement("p");
	ddd.setAttribute("id","desc");
	//创建text元素
	var ttt=document.createTextNode("choose a photo");
	//连接

	ddd.appendChild(ttt);
	
	insertAfter(ddd,photoholder);
}
//加载时运行
function linkPhoto(){
	//alert("aaa");
	var gallery=document.getElementById("gallery");
	//alert("bbbb");
	var links=gallery.getElementsByTagName("a");
	// for(var i=0;i<links.length;i++){
	// 	links[i].onclick = showPic(this);
	// }
	//上面会导致只显示目标图片？？？
	//alert("ccc");
	//alert(links.length);
	for(var i=0;i<links.length;i++){
		//alert(links[i]);
		links[i].onclick = function(){
			//alert("function---");
			return showPic(this);
		}
	}
}



addLoadEvent(insertElement);
addLoadEvent(linkPhoto);