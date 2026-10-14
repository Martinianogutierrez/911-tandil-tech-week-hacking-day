/* HTML builders for cards, views, etc. */
'use strict';

/* ---------- templates ---------- */
const arrow='<span class="ar">→</span>';
function tile(o,i){
 return `<article class="tile ${o.cls||''} rv" style="--tb:${o.bg};--tf:${o.fg};--i:${i}" tabindex="0" aria-label="${o.name}">
  <div class="t-front"><span class="t-tag">${o.tag}</span><h3 class="t-name">${o.name}</h3>${o.chip?`<span class="t-chip">${o.chip}</span>`:''}</div>
  <div class="t-motif">${MOTIF[o.k]()}</div>
  <div class="t-more"><div class="t-in">${o.desc?`<p>${o.desc}</p>`:''}<a class="t-link" href="${o.url}" target="_blank" rel="noopener">${o.dom} <span>↗</span></a></div></div>
 </article>`;
}
const SIL='<svg class="sil" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="72" r="40" fill="#232323"/><path d="M20 200 Q20 124 100 124 Q180 124 180 200Z" fill="#232323"/></svg>';
function voices(n){const cs=['#FF6F59','#F7E11F','#2D9CFF','#F6F1E4'];return Array.from({length:n},(_,i)=>`<div class="voice rv" style="--vc:${cs[i%4]};--i:${i}"><span class="q" aria-hidden="true">“</span><span class="lbl">Próximamente</span><span class="qm" aria-hidden="true">?</span>${SIL}</div>`).join('')}
const TERM=`<div class="term"><div class="bar"><i></i><i></i><i></i><span>hacking-day.sh</span></div><div class="tb">
 <p class="l" style="--n:25;--d:.4"><b>$</b> ./hacking-day --equipos</p>
 <p class="l" style="--n:21;--d:1.9"><b>&gt;</b> juntá a tus amigos</p>
 <p class="l" style="--n:26;--d:3.2"><b>&gt;</b> aprendé ciberseguridad</p>
 <p class="l" style="--n:23;--d:4.5"><b>&gt;</b> acceso concedido <em>[ok]</em></p><span class="caret"></span></div></div>`;
const GROWTH=`<svg class="growth" viewBox="0 0 400 300" aria-hidden="true">
 <g stroke="#232323" stroke-opacity=".18" stroke-width="2"><path d="M20 270H390M20 210H390M20 150H390M20 90H390M20 30H390"/></g>
 ${[60,95,132,172,218].map((h,i)=>`<rect class="bar" style="--i:${i}" x="${34+i*72}" y="${270-h}" width="46" height="${h}" rx="12" fill="#F6F1E4" fill-opacity="${.45+i*.1}"/>`).join('')}
 <path class="ln" pathLength="1" d="M57 200 L129 164 L201 128 L273 92 L345 44" fill="none" stroke="#232323" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
 <g class="dot"><circle class="pulse" cx="345" cy="44" r="12" fill="#F7E11F"/><circle cx="345" cy="44" r="12" fill="#F7E11F" stroke="#232323" stroke-width="5"/></g></svg>`;
const visOf=d=>d.vis==='term'?TERM:GROWTH;

function dayCard(d,k){
 return `<article class="day rv" style="--c:${d.color};--k:${k}">
  <div class="day-l">
   <div class="day-date"><span>${d.date}</span><small>Octubre</small></div>
   <div class="chips"><span class="chip">${d.short}</span><span class="chip">${d.track}</span></div>
   <h3>${d.name}</h3>
   <p class="d">${d.desc}</p>
   <div class="venue"><strong>${d.venue}</strong>
    <a class="btn ink mag" href="#${d.slug}" data-go="${d.key}">Ver jornada ${arrow}</a></div>
  </div>
  <div class="day-v">${visOf(d)}</div>
 </article>`;
}
function words(t){return t.split(' ').map((w,i)=>`<span class="w"><span style="--i:${i}">${w}</span></span>`).join(' ')}
const MAPSVG=`<svg viewBox="0 0 520 416" aria-hidden="true">
 <rect width="520" height="416" fill="#DDEFC2"/>
 <path d="M-10 300 C90 260 150 330 250 290 S430 230 540 270 V430 H-10Z" fill="#BFE0F7"/>
 <rect x="40" y="40" width="130" height="90" rx="22" fill="#B7DD18" opacity=".55"/><rect x="330" y="60" width="150" height="110" rx="26" fill="#B7DD18" opacity=".4"/>
 <g stroke="#fff" stroke-width="22" stroke-linecap="round" fill="none"><path d="M-10 190 L540 150"/><path d="M200 -10 L260 430"/><path d="M-10 90 L540 330" opacity=".7"/></g>
 <path d="M-10 190 L540 150" stroke="#FF6F59" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 14"/>
 <g transform="translate(232 170)"><ellipse class="rip" cx="0" cy="0" rx="24" ry="9" fill="#232323" opacity=".3"/>
 <g class="pin"><path d="M0 -3 C-26 -42 -34 -62 -34 -78 A34 34 0 1 1 34 -78 C34 -62 26 -42 0 -3Z" transform="translate(0 0)" fill="#232323"/><circle cx="0" cy="-78" r="13" fill="#F7E11F"/></g></g></svg>`;

function dayView(d){
 return `<section class="dhero" data-bg="${d.bg}">
  <div class="ghost" data-p="-.1" aria-hidden="true">${d.date}</div>
  <div class="wrap">
   <div class="chips"><span class="chip">${d.date} Octubre</span><span class="chip">${d.track}</span></div>
   <h1 class="dh-title" aria-label="${d.name}">${words(d.name)}</h1>
   <div class="dh-row">
    <div><p class="lead">${d.desc}</p>
     <div class="btns">${d.signup?`<a class="btn${d.key==='startup'?' blue':''} mag" href="${d.signup}" target="_blank" rel="noopener">Inscribirme ${arrow}</a>`:''}<a class="btn white mag" href="#${DAYS[d.other].slug}" data-go="${d.other}">${d.otherLabel} ${arrow}</a></div></div>
    <div class="dh-vis rv">${visOf(d)}</div>
   </div>
  </div></section>
  <section class="sec" data-bg="cream"><div class="wrap sede-grid">
   <div class="info rv"><span class="eyebrow">Sede</span><h2 class="big">${d.venue}</h2><p class="addr">${d.addr}</p>
    <span class="chip">Tandil</span>
    <a class="btn mag" href="${d.maps}" target="_blank" rel="noopener">Ver en Google Maps ${arrow}</a></div>
   <div class="map rv">${MAPSVG}</div>
  </div></section>`;
}
