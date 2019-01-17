//dom查询封装
function $(value){
    if(document.querySelectorAll(value).length>1){
        return document.querySelectorAll(value);
    }else{
        return document.querySelector(value);
    }
}
// 简化上级或下级选择
function rel(release,value,direction)
{
    switch(direction){
        case 1:
            if(value==1){
                release=release.children;
                return release;
            }else{
                release=release.children[0];
            }
            break;
        case 0:
            release=release.parentNode;
            if(value==1){
                return release;
            }
            break;
    }
    value--;
    return rel(release,value,direction); 
}
// ajax封装方法
function ajax(method,url,data,fn){
    let htp=null;
    let json={};
    htp=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
    if(method =='get'){
        htp.open(method,url+'?'+data);
        htp.send();   
    }else{
            htp.open(method,url);
            htp.setRequestHeader('content-type','application/x-www-form-urlencoded');
            htp.send(data);
    }
    htp.onreadystatechange=function(){
        if (htp.readyState == 4 && htp.status == 200) {
            fn(htp.responseText);
        }
    }
}
