function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
if(window.getSelection){//DOM,FF,Webkit,Chrome,IE10
selection = window.getSelection();
alert("文字复制成功！若有文字残缺请用右键复制\n转载请注明出处："+document.location.href);
 
}else if(document.getSelection){//IE10
selection= document.getSelection();
alert("文字复制成功！若有文字残缺请用右键复制\n转载请注明出处："+document.location.href);
 
}else if(document.selection){//IE6+10-
selection= document.selection.createRange().text;
alert("文字复制成功！若有文字残缺请用右键复制\n转载请注明出处："+document.location.href);
}else{
selection= "";
alert("浏览器兼容问题导致复制失败！");
}
    var pagelink = "<br /><br /> 转载请注明来源: <a href='"+document.location.href+"'>"+document.location.href+"</a>"; 
    var copy_text = selection + pagelink;
    var new_div = document.createElement('div');
    new_div.style.left='-99999px';
    new_div.style.position='absolute';
    body_element.appendChild(new_div );
    new_div.innerHTML = copy_text ;
    selection.selectAllChildren(new_div );
    window.setTimeout(function() {
        body_element.removeChild(new_div );
    },0);
}
document.body.oncopy = addLink;