/* Shadow Walker - professional layer: splash, PWA, portal SDK hooks, input hardening */
(()=>{
const st=document.createElement('style');
st.textContent='html,body{overscroll-behavior:none;touch-action:manipulation}'+
'#splash{position:fixed;inset:0;z-index:20;background:#05070f;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;transition:opacity .5s;color:#eafcff;font:700 clamp(26px,6vw,46px) "Chakra Petch",system-ui,sans-serif;letter-spacing:.14em;text-shadow:-2px 0 #ff2fa6,2px 0 #28f0ff}'+
'#splash i{width:170px;height:4px;background:#1a2540;border-radius:2px;overflow:hidden}'+
'#splash b{display:block;height:100%;width:0;background:#28f0ff;animation:ld 1.1s ease-out forwards}'+
'@keyframes ld{to{width:100%}}'+
'#ver{position:fixed;left:50%;bottom:3px;transform:translateX(-50%);z-index:3;font:600 11px system-ui,sans-serif;color:#7d93ad;pointer-events:none}';
document.head.appendChild(st);

const sp=document.createElement('div');sp.id='splash';sp.innerHTML='SHADOW WALKER<i><b></b></i>';document.body.appendChild(sp);
const t0=performance.now(),hide=()=>setTimeout(()=>{sp.style.opacity=0;setTimeout(()=>sp.remove(),500)},Math.max(0,1100-(performance.now()-t0)));
document.readyState==='complete'?hide():addEventListener('load',hide);

const ver=document.createElement('div');ver.id='ver';ver.textContent='v1.0 \u00b7 ALONE DEV';document.body.appendChild(ver);

addEventListener('contextmenu',e=>e.preventDefault());
addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault()},true);

const cg=()=>window.CrazyGames&&window.CrazyGames.SDK;
try{const s=cg();s&&s.init&&Promise.resolve(s.init()).catch(()=>{})}catch(e){}
let on=false;
setInterval(()=>{
  ver.hidden=G.st!=='menu';
  const p=G.st==='play'&&G.cd<=0;
  if(p!==on){on=p;try{const s=cg();s&&s.game&&(p?s.game.gameplayStart():s.game.gameplayStop())}catch(e){}}
},250);

if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
