document.getElementById('reg').onclick=function(){
var regfrm=document.getElementById('contact');
if(regfrm.style.display=='block')
{
regfrm.style.display='none';
}
else{
regfrm.style.display='block';
}
}
document.getElementById('close').onclick=function(){
var regfrm=document.getElementById('contact');
if(regfrm.style.display=='none')
{
regfrm.style.display='block';
}
else{
regfrm.style.display='none';
}
}
function on() {
var on1=document.getElementById('overlay')
on1.style.display = "block";
}
function off() {
var on1=document.getElementById('overlay')
on1.style.display = "block";
}