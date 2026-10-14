/* Mount DOM, interactions, router, effects */
'use strict';

/* ---------- mount ---------- */
$('#dayStack').innerHTML=dayCard(DAYS.hacking,0)+dayCard(DAYS.startup,1);
$('#voicesHome').innerHTML=voices(4);
const markTile=`<div class="tile t-m rv" style="--tb:#1000FF;--tf:#F6F1E4;--i:2"><div class="t-mark"><span class="t-tag">2026</span><img src="images/favicon.ico" alt="" aria-hidden="true"></div></div>`;
$('#bento').innerHTML=ORG.slice(0,2).map((o,i)=>tile(o,i)).join('')+markTile+ORG.slice(2).map((o,i)=>tile(o,i+3)).join('');
$('#spons').innerHTML=SPON.map((o,i)=>tile(o,i)).join('');
$('#view-hacking').innerHTML=dayView(DAYS.hacking);
$('#view-startup').innerHTML=dayView(DAYS.startup);
const band=(el)=>{const t=MARQ.map(x=>`<span>${x}</span><span>✦</span>`).join('');el.innerHTML=`<div class="track">${t}</div><div class="track">${t}</div>`};
band($('#band1'));band($('#band2'));
$$('[data-split]').forEach(el=>{const t=el.textContent;el.textContent='';[...t].forEach(c=>{const s=document.createElement('span');s.textContent=c===' '?' ':c;s.setAttribute('aria-hidden','true');el.appendChild(s)})});

/* ---------- status ---------- */
function statusText(){
 const a=new Date(Date.now()-3*3600e3), day=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());
 const d1=Date.UTC(2026,9,14), d2=Date.UTC(2026,9,15);
 if(day<d1){const n=Math.round((d1-day)/864e5);return n===1?'Mañana empieza · 14 & 15 OCT.':`Faltan ${n} días · 14 & 15 OCT.`}
 if(day===d1)return 'Hoy · Hacking Day · UNICEN';
 if(day===d2)return 'Hoy · Startup Day · Distrito Avellaneda';
 return '14 & 15 OCT. 2026 · Tandil';
}
$('#status').textContent=statusText();

/* ---------- reveal ---------- */
$$('.stagger').forEach(p=>[...p.children].forEach((c,i)=>c.style.setProperty('--i',i)));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
$$('.rv').forEach(el=>io.observe(el));

/* ---------- scroll: background stages + parallax ---------- */
let ticking=false,lastBg='';
function update(){
 ticking=false;
 const probe=innerHeight*.5;
 for(const s of $$('[data-bg]')){
  const r=s.getBoundingClientRect();
  if(r.bottom>r.top&&r.top<=probe&&r.bottom>probe){
   const bg=s.dataset.bg;
   if(bg!==lastBg){lastBg=bg;const rs=document.documentElement.style;rs.setProperty('--bg',COL[bg]);rs.setProperty('--fg',s.dataset.fg||FGBY[bg]||COL.ink)}
   break;
  }
 }
 if(!reduce){const y=scrollY;$$('[data-p]').forEach(el=>{if(el.offsetParent!==null||el.closest('svg'))el.style.translate=`0 ${(y*parseFloat(el.dataset.p)).toFixed(1)}px`})}
}
function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);

/* ---------- router ---------- */
let current='home',busy=false;
const wipe=$('#wipe');
const VIEWS={home:$('#view-home'),hacking:$('#view-hacking'),startup:$('#view-startup')};
const SLUG={home:'',hacking:'hacking-day',startup:'startup-day'};
function swap(v){current=v;for(const k in VIEWS)VIEWS[k].hidden=k!==v;lastBg='';try{history.replaceState(null,'',SLUG[v]?'#'+SLUG[v]:location.pathname+location.search)}catch(e){}}
function toTarget(to,instant){
 const b=instant?'instant':'smooth';
 const el=to&&document.getElementById(to);
 if(el)el.scrollIntoView({behavior:b,block:'start'});else scrollTo({top:0,behavior:b});
}
function go(v,to){
 if(v===current){toTarget(to);return}
 if(busy)return;busy=true;
 if(reduce){swap(v);toTarget(to,true);update();busy=false;return}
 wipe.classList.remove('out');wipe.classList.add('on');
 setTimeout(()=>{swap(v);toTarget(to,true);update();wipe.classList.remove('on');wipe.classList.add('out');
  setTimeout(()=>{wipe.classList.remove('out');busy=false},800)},800);
}
const menu=$('#menu'),mb=$('#menuBtn');
function setMenu(o){menu.classList.toggle('open',o);mb.setAttribute('aria-expanded',String(o));mb.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');menu.setAttribute('aria-hidden',String(!o))}
mb.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
document.addEventListener('click',e=>{
 const a=e.target.closest('[data-go]');
 if(!a)return;
 e.preventDefault();
 const wasMenu=menu.classList.contains('open');setMenu(false);
 const run=()=>go(a.dataset.go,a.dataset.to);
 wasMenu?setTimeout(run,350):run();
});

/* ---------- tiles ---------- */
document.addEventListener('click',e=>{
 const t=e.target.closest('.tile');if(!t||e.target.closest('a'))return;
 const open=!t.classList.contains('is-open');
 $$('.tile.is-open').forEach(x=>x.classList.remove('is-open'));
 if(open)t.classList.add('is-open');
});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('tile')){e.preventDefault();e.target.click()}});
$$('.tile').forEach(t=>{
 t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5).toFixed(2));t.style.setProperty('--my',((e.clientY-r.top)/r.height-.5).toFixed(2))});
 t.addEventListener('pointerleave',e=>{t.style.setProperty('--mx',0);t.style.setProperty('--my',0);if(e.pointerType==='mouse')t.classList.remove('is-open')});
});

/* ---------- magnetic buttons + cursor ---------- */
if(fine&&!reduce){
 $$('.mag').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.translate=`${((e.clientX-r.left-r.width/2)*.08).toFixed(1)}px ${((e.clientY-r.top-r.height/2)*.06).toFixed(1)}px`});
  el.addEventListener('pointerleave',()=>{el.style.translate=''});
 });
 const cur=$('#cur');let x=0,y=0,tx=0,ty=0;
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;cur.classList.add('on');cur.classList.toggle('big',!!(e.target.closest&&e.target.closest('a,button,.tile,.voice,.mini')))},{passive:true});
 (function loop(){x+=(tx-x)*.22;y+=(ty-y)*.22;cur.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;requestAnimationFrame(loop)})();
}

/* ---------- initial hash ---------- */
try{const h=location.hash.slice(1);
 if(h==='hacking-day')swap('hacking');else if(h==='startup-day')swap('startup');
 else if(h&&document.getElementById(h))setTimeout(()=>toTarget(h,true),50);
}catch(e){}
update();
