
(function(){
document.addEventListener('DOMContentLoaded',function(){
 // record-page contact sheet: the plate changes only when asked. The new
 // image is decoded BEFORE it is swapped in, so the plate never blanks.
 var gal=document.querySelector('.rgal');if(!gal)return;
 var hero=gal.querySelector('.rhero'),himg=hero&&hero.querySelector('img');
 var bs=gal.querySelectorAll('.rcs button');
 if(!hero||!himg||!bs.length)return;
 var cur=0,seq=0,prev=null;
 function pick(k){
  if(k<0||k>=bs.length)return;
  var full=bs[k].getAttribute('data-full');
  // token: click a slow image then a fast one and the slow load must NOT
  // win the swap — otherwise the plate shows an image the sheet says is
  // not selected.
  var mine=++seq;
  function show(){if(mine!==seq)return;himg.src=full;hero.setAttribute('href',full);}
  // detach the superseded loader: holding an arrow key would otherwise leave
  // one live full-size download per tile passed through
  if(prev){prev.onload=prev.onerror=null;prev.src='';}
  var pre=new Image();
  prev=pre;
  pre.onload=show;pre.onerror=show;
  pre.src=full;
  if(pre.complete)show();
  for(var j=0;j<bs.length;j++)bs[j].setAttribute('aria-pressed',j===k?'true':'false');
  cur=k;
 }
 for(var k2=0;k2<bs.length;k2++)(function(k2){
  bs[k2].addEventListener('click',function(){pick(k2)});
 })(k2);
 // left/right walk the sheet from the FOCUSED tile — starting from `cur`
 // (the selected one) jumps somewhere else when you tab in without clicking
 gal.querySelector('.rcs').addEventListener('keydown',function(e){
  var d=e.key==='ArrowRight'?1:(e.key==='ArrowLeft'?-1:0);
  if(!d)return;
  var from=-1;
  for(var i=0;i<bs.length;i++)if(bs[i]===document.activeElement){from=i;break;}
  if(from<0)from=cur;
  e.preventDefault();
  var n=(from+d+bs.length)%bs.length;
  pick(n);bs[n].focus();
 });});
})();
