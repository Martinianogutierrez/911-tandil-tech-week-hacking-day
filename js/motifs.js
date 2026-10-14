/* SVG motifs for sponsor / organizer tiles */
'use strict';

/* ---------- motifs ---------- */
const MOTIF={
 heat:()=>{let r='';for(let i=0;i<12;i++){const a=i*Math.PI/6,l=i%2?74:92;r+=`<line x1="${(100+Math.cos(a)*54).toFixed(1)}" y1="${(100+Math.sin(a)*54).toFixed(1)}" x2="${(100+Math.cos(a)*l).toFixed(1)}" y2="${(100+Math.sin(a)*l).toFixed(1)}"/>`}
  return `<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-spin"><g stroke="currentColor" stroke-width="11" stroke-linecap="round">${r}</g><circle cx="100" cy="100" r="36" fill="currentColor"/></g></svg>`},
 legal:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-flip"><rect x="36" y="22" width="128" height="156" rx="24" fill="currentColor"/><text x="100" y="140" text-anchor="middle" font-size="124" font-weight="700" style="font-family:var(--display);fill:var(--tb)">§</text></g></svg>`,
 layers:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-lay" fill="currentColor"><rect x="30" y="118" width="140" height="44" rx="16" opacity=".35"/><rect x="30" y="74" width="140" height="44" rx="16" opacity=".65"/><rect x="30" y="30" width="140" height="44" rx="16"/></g></svg>`,
 net:()=>{const P=[[40,60],[112,30],[162,92],[92,114],[48,162],[150,166]],L=[[0,1],[1,2],[1,3],[0,3],[3,4],[3,5],[2,5]];
  return `<svg viewBox="0 0 200 200" aria-hidden="true"><g stroke="currentColor" stroke-width="5" opacity=".6">${L.map(([a,b])=>`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}"/>`).join('')}</g><g class="m-net" fill="currentColor">${P.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="14"/>`).join('')}</g></svg>`},
 steps:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-steps" fill="currentColor">${[30,56,84,114,148].map((h,i)=>`<rect style="--j:${i}" x="${14+i*36}" y="${176-h}" width="26" height="${h}" rx="9"/>`).join('')}</g></svg>`,
 spark:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-spin"><path d="M100 14 C107 70 130 93 186 100 C130 107 107 130 100 186 C93 130 70 107 14 100 C70 93 93 70 100 14Z" fill="currentColor"/></g><circle cx="160" cy="38" r="9" fill="currentColor"/></svg>`,
 ring:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" stroke-width="10" opacity=".5"/><circle cx="100" cy="100" r="36" fill="currentColor"/><g class="m-spin"><circle cx="100" cy="28" r="14" fill="currentColor"/><circle cx="172" cy="100" r="10" fill="currentColor"/><circle cx="64" cy="162" r="12" fill="currentColor"/></g></svg>`,
 shield:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><path d="M100 14 L172 42 V100 C172 142 140 170 100 186 C60 170 28 142 28 100 V42Z" fill="currentColor"/><path class="m-chk" pathLength="1" d="M66 100 l26 26 l44 -50" fill="none" stroke="#FFE3D6" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--tb)"/></svg>`,
 swap:()=>`<svg viewBox="0 0 200 200" aria-hidden="true"><g class="m-spin" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round"><path d="M40 100 A60 60 0 0 1 146 60"/><path d="M160 100 A60 60 0 0 1 54 140"/><path d="M148 30 L152 66 L116 64" stroke-linejoin="round"/><path d="M52 170 L48 134 L84 136" stroke-linejoin="round"/></g></svg>`
};
const MARK=()=>`<img src="images/favicon.ico" alt="" aria-hidden="true">`;
