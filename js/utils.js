/* Shared helpers and runtime flags */
'use strict';

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const COL={green:'#8FD65F',cream:'#F6F1E4',lilac:'#E6C9FA',night:'#1E1A1D',volt:'#1000FF',sun:'#F7E11F',blue:'#2D9CFF',coral:'#FF6F59',ink:'#232323'};
const FGBY={night:'#F6F1E4',volt:'#F6F1E4',ink:'#F6F1E4'};
