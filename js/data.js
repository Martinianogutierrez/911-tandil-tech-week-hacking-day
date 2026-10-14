/* Event content: days, organizers, sponsors, marquee */
'use strict';

/* ---------- data ---------- */
const DAYS={
 hacking:{key:'hacking',slug:'hacking-day',date:'14',track:'Track 01 · Ciberseguridad',name:'Hacking Day',color:'#2D9CFF',bg:'blue',
  desc:'Jornada de hacking en equipos. Juntá a tus amigos y vení a divertirte aprendiendo de ciberseguridad.',
  venue:'Campus Universitario UNICEN',short:'UNICEN · Campus',addr:'Paraje Arroyo Seco s/n, B7000 Tandil, Buenos Aires, Argentina',
  maps:'https://www.google.com/maps/search/?api=1&query=UNICEN%20-%20Campus%20Universitario&query_place_id=ChIJXTwhmjjgkJURMlmVPKCu-c8',
  other:'startup',otherLabel:'Startup Day · 15 Octubre',
  vis:'term'},
 startup:{key:'startup',slug:'startup-day',date:'15',track:'Track 02 · Startups',name:'Startup Day',color:'#FF6F59',bg:'coral',
  desc:'Vení a conocer a los que hacen. Charlas dinámicas y networking entre fundadores, venture capital y estudiantes.',
  venue:'Distrito Avellaneda',short:'Distrito Avellaneda',addr:'Av. Avellaneda 1140, B7000 Tandil, Buenos Aires, Argentina',
  maps:'https://www.google.com/maps/search/?api=1&query=Distrito%20Avellaneda&query_place_id=ChIJd4DI7SQfkZURHTIIjbDa3TE',
  other:'hacking',otherLabel:'Hacking Day · 14 Octubre',
  vis:'growth'}
};
const ORG=[
 {k:'heat',cls:'t-a',tag:'VC Fund',name:'Picante',dom:'picante.fund',url:'https://picante.fund',chip:'Venture Capital',bg:'#FF5A1F',fg:'#4B0F1E',
  desc:'Acompañan desde el principio a la nueva generación de founders latinoamericanos: AI Natives construyendo productos globales. Confían cuando nadie más confía.'},
 {k:'legal',cls:'t-b',tag:'Venture Legal',name:'Relaw',dom:'relaw.io',url:'https://relaw.io',chip:'Legal Tech',bg:'#243252',fg:'#BCD3FF',
  desc:'El partner legal de startups y empresas de tecnología. Expertise legal y visión de negocio, con acompañamiento 360° para crecer en múltiples mercados.'},
 {k:'layers',cls:'t-c',tag:'Product Studio',name:'Paisanos',dom:'paisanos.io',url:'https://paisanos.io',chip:'Product & Tech',bg:'#3ED0EB',fg:'#064B59',
  desc:'Estudio global de diseño y desarrollo de productos digitales, acompañando a startups y corporates a crear soluciones que escalan.'},
 {k:'net',cls:'t-d',tag:'Community',name:'HackTandil',dom:'hacktandil.org',url:'https://hacktandil.org',chip:'Builder Community',bg:'#B7DD18',fg:'#12503A',
  desc:'Comunidad tecnológica de Tandil que conecta desarrolladores, estudiantes, emprendedores y entusiastas a través de meetups, hackathons y eventos.'},
 {k:'steps',cls:'t-e',tag:'Tech Partner',name:'Geonosis',dom:'geonosisgroup.com',url:'https://geonosisgroup.com',chip:'Idea to Scale',bg:'#8A2058',fg:'#FFA9C0',
  desc:'El brazo tecnológico de startups y empresas, que las acompaña desde la idea hasta el scale-up. Combinando liderazgo técnico, pensamiento de producto y visión de negocio para construir soluciones digitales reales, alineadas con los objetivos de cada etapa.'},
 {k:'spark',cls:'t-f',tag:'Brand Intelligence',name:'Fardo',dom:'heyfardo.com',url:'https://heyfardo.com',chip:'AI Visibility',bg:'#C9B1F0',fg:'#3C1470',
  desc:'La primera plataforma de brand intelligence de Latam. Miden cómo aparece tu marca en ChatGPT, Gemini, Perplexity y Claude, y arman el plan para que la IA te cite y te recomiende.'}
];
const SPON=[
 {k:'ring',tag:'Sponsor',name:'Grupo Rotonda',dom:'gruporotonda.com.ar',url:'https://gruporotonda.com.ar',bg:'#F7E11F',fg:'#3B3200'},
 {k:'shield',tag:'Sponsor',name:'The Red Guild',dom:'theredguild.org',url:'https://theredguild.org',bg:'#E8352E',fg:'#FFE3D6'},
 {k:'swap',tag:'Sponsor',name:'Payoneer',dom:'payoneer.com',url:'https://www.payoneer.com',bg:'#F6F1E4',fg:'#1000FF'}
];
const MARQ=['UNICEN Campus','Distrito Avellaneda','Hacking Day','Ciberseguridad','Startup Day','Agritech & Bio','Software & AI','Venture Capital','Polo científico','Founders & Builders'];
