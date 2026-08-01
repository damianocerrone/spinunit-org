
(function(){
var saved=null;try{saved=localStorage.getItem('spin-mode')}catch(e){}
if(saved){document.documentElement.dataset.mode=saved}
function lab(){var m=document.documentElement.dataset.mode||
 (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 return m==='dark'?'◑ LIGHT':'◐ DARK'}
document.addEventListener('DOMContentLoaded',function(){
 var b=document.getElementById('mode');
 if(b){b.textContent=lab();
  b.addEventListener('click',function(){
   var cur=document.documentElement.dataset.mode||
    (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
   var next=cur==='dark'?'light':'dark';
   document.documentElement.dataset.mode=next;
   try{localStorage.setItem('spin-mode',next)}catch(e){}
   b.textContent=lab();});}
 // record-page gallery: crossfade every 4.5s, pause on hover, dots jump.
 // prefers-reduced-motion stops the auto-advance; dots still work.
 var rot=document.querySelector('.rot');if(!rot)return;
 var fs=rot.querySelectorAll('.rf');if(fs.length<2)return;
 var ds=rot.querySelectorAll('.rdots i'),i=0,t=null;
 var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function go(n){fs[i].classList.remove('on');if(ds[i])ds[i].classList.remove('on');
  i=(n+fs.length)%fs.length;
  fs[i].classList.add('on');if(ds[i])ds[i].classList.add('on');}
 function start(){if(!still&&!t)t=setInterval(function(){go(i+1)},4500);}
 function stop(){if(t){clearInterval(t);t=null;}}
 rot.addEventListener('pointerenter',stop);
 rot.addEventListener('pointerleave',start);
 for(var k=0;k<ds.length;k++)(function(k){
  ds[k].addEventListener('click',function(e){e.preventDefault();go(k);});})(k);
 start();});
})();
