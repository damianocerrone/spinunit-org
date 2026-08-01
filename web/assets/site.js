
(function(){
var saved=null;try{saved=localStorage.getItem('spin-mode')}catch(e){}
if(saved){document.documentElement.dataset.mode=saved}
function lab(){var m=document.documentElement.dataset.mode||
 (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 return m==='dark'?'◑ LIGHT':'◐ DARK'}
document.addEventListener('DOMContentLoaded',function(){
 var b=document.getElementById('mode');if(!b)return;b.textContent=lab();
 b.addEventListener('click',function(){
  var cur=document.documentElement.dataset.mode||
   (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  var next=cur==='dark'?'light':'dark';
  document.documentElement.dataset.mode=next;
  try{localStorage.setItem('spin-mode',next)}catch(e){}
  b.textContent=lab();});});
})();
