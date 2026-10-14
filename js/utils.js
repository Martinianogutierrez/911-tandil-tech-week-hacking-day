/* Shared helpers and runtime flags */
'use strict';

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const COL={green:'#8FD65F',cream:'#F6F1E4',lilac:'#E6C9FA',night:'#1E1A1D',volt:'#1000FF',sun:'#F7E11F',blue:'#2D9CFF',coral:'#FF6F59',ink:'#232323'};
const FGBY={night:'#F6F1E4',volt:'#F6F1E4',ink:'#F6F1E4'};
const REG=Date.UTC(2026,8,17,22,0,0); // 17 sep 2026 19:00 GMT-3
const past=Date.now()>=REG;
const V=(a,b)=>past?b:a;
const IG='https://instagram.com/tandiltechweek', XX='https://x.com/tandiltechweek';
