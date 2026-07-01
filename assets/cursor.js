/* Anamofit custom cursor: spotlight, trailing ring, section labels, and magnetic links. */
(function(){
  "use strict";
  if (window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = ''
    + 'html, body, a, button, [data-cursor-label], .reel-card, .reel-tile, .gallery-item, .post-toggle, .filter-btn { cursor:none; }'
    + 'input, textarea, select { cursor:text; }'
    + '#c-glow,#c-aura,#c-dot,#c-ring,#c-label,#c-pulse{ position:fixed; top:0; left:0; pointer-events:none; }'
    + '#c-aura,#c-dot,#c-ring{ will-change:transform; }'
    + '#c-glow{ inset:0; z-index:45; mix-blend-mode:screen; opacity:.58; transform:none;'
    + '  background:radial-gradient(240px circle at var(--mx,-400px) var(--my,-400px), rgba(0,224,255,.075), rgba(217,123,255,.045) 32%, transparent 64%); }'
    + '#c-aura{ z-index:9998; width:78px; height:78px; margin:-39px 0 0 -39px; border-radius:9999px;'
    + '  background:radial-gradient(circle, rgba(0,224,255,.08), transparent 60%); mix-blend-mode:screen; opacity:.55; }'
    + '#c-dot,#c-ring,#c-label,#c-pulse{ z-index:9999; }'
    + '#c-dot{ width:6px; height:6px; margin:-3px 0 0 -3px; border-radius:9999px; background:#00E0FF; box-shadow:0 0 10px rgba(0,224,255,.55); }'
    + '#c-ring{ width:34px; height:34px; margin:-17px 0 0 -17px; border-radius:9999px; border:1px solid rgba(0,224,255,.42);'
    + '  box-shadow:0 0 16px rgba(0,224,255,.10), inset 0 0 12px rgba(0,224,255,.045);'
    + '  transition:width .25s ease, height .25s ease, margin .25s ease, border-color .25s ease, background-color .25s ease, opacity .25s ease; }'
    + '#c-ring.hover{ width:58px; height:58px; margin:-29px 0 0 -29px; border-color:rgba(217,123,255,.58); background-color:rgba(0,224,255,.035); }'
    + '#c-ring.down{ width:26px; height:26px; margin:-13px 0 0 -13px; border-color:rgba(255,255,255,.62); }'
    + '#c-label{ opacity:0; transform:translate(26px,-50%); font:600 10px/1 "JetBrains Mono", monospace; letter-spacing:.18em;'
    + '  text-transform:uppercase; color:#eaf8ff; padding:8px 10px; border:1px solid rgba(255,255,255,.18); border-radius:999px;'
    + '  background:rgba(5,5,5,.48); -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px); transition:opacity .18s ease; white-space:nowrap; }'
    + '#c-pulse{ width:10px; height:10px; margin:-5px 0 0 -5px; border-radius:9999px; border:1px solid rgba(0,224,255,.48); opacity:0; }'
    + '#c-pulse.on{ animation:cPulse .48s ease-out; }'
    + '@keyframes cPulse{ 0%{ opacity:.45; transform:translate(var(--px),var(--py)) scale(1); } 100%{ opacity:0; transform:translate(var(--px),var(--py)) scale(5.5); } }'
    + 'nav a{ position:relative; }'
    + 'nav a:after{ content:""; position:absolute; left:0; right:0; bottom:-7px; height:1px; background:currentColor; opacity:0; transform:scaleX(.35); transform-origin:center; transition:opacity .22s ease, transform .22s ease; }'
    + 'nav a:hover:after{ opacity:.75; transform:scaleX(1); }';
  var st=document.createElement('style');
  st.textContent=css;
  document.head.appendChild(st);

  var glow=document.createElement('div'); glow.id='c-glow';
  var aura=document.createElement('div'); aura.id='c-aura';
  var dot=document.createElement('div'); dot.id='c-dot';
  var ring=document.createElement('div'); ring.id='c-ring';
  var label=document.createElement('div'); label.id='c-label';
  var pulse=document.createElement('div'); pulse.id='c-pulse';
  document.body.appendChild(glow);
  document.body.appendChild(aura);
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.appendChild(label);
  document.body.appendChild(pulse);

  var mx=window.innerWidth/2, my=window.innerHeight/2, rx=mx, ry=my, ax=mx, ay=my;
  var HOVER='a, button, [data-cursor-label], .reel-tile, .reel-card, .gallery-item, .post-toggle, .filter-btn, input, textarea';

  function moveTo(el,x,y){
    el.style.transform='translate3d('+x+'px,'+y+'px,0)';
  }

  window.addEventListener('pointermove', function(e){
    mx=e.clientX; my=e.clientY;
    moveTo(dot,mx,my);
    label.style.transform='translate3d('+(mx+28)+'px,'+(my-8)+'px,0)';

    var zone=e.target.closest && e.target.closest('[data-cursor-label]');
    var hover=e.target.closest && e.target.closest(HOVER);
    ring.classList.toggle('hover', !!hover);
    if(zone){
      label.textContent=zone.getAttribute('data-cursor-label') || 'Explore';
      label.style.opacity='1';
      var r=zone.getBoundingClientRect();
      zone.style.setProperty('--spot-x', ((mx-r.left)/Math.max(1,r.width)*100).toFixed(2)+'%');
      zone.style.setProperty('--spot-y', ((my-r.top)/Math.max(1,r.height)*100).toFixed(2)+'%');
    } else {
      label.style.opacity='0';
    }
  }, {passive:true});

  var cursorRunning=true, glowX=null, glowY=null;
  (function loop(){
    if(document.hidden){ cursorRunning=false; return; }
    var ringEase = reduce ? 0.42 : 0.18;
    var auraEase = reduce ? 0.34 : 0.08;
    rx+=(mx-rx)*ringEase; ry+=(my-ry)*ringEase;
    ax+=(mx-ax)*auraEase; ay+=(my-ay)*auraEase;
    moveTo(ring,rx,ry);
    moveTo(aura,ax,ay);
    // Coalesce the fullscreen screen-blend glow repaint to one update per frame
    // (was repainted on every raw pointermove — can be >100/s on trackpads).
    if(glowX!==mx || glowY!==my){ glowX=mx; glowY=my; glow.style.setProperty('--mx', mx+'px'); glow.style.setProperty('--my', my+'px'); }
    requestAnimationFrame(loop);
  })();
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden && !cursorRunning){ cursorRunning=true; requestAnimationFrame(loop); }
  });

  window.addEventListener('pointerdown', function(){
    ring.classList.add('down');
    pulse.classList.remove('on');
    pulse.style.setProperty('--px', mx+'px');
    pulse.style.setProperty('--py', my+'px');
    void pulse.offsetWidth;
    pulse.classList.add('on');
  });
  window.addEventListener('pointerup', function(){ ring.classList.remove('down'); });
  document.addEventListener('mouseleave', function(){
    dot.style.opacity='0'; ring.style.opacity='0'; aura.style.opacity='0'; label.style.opacity='0'; glow.style.opacity='0';
  });
  document.addEventListener('mouseenter', function(){
    dot.style.opacity='1'; ring.style.opacity='1'; aura.style.opacity='.55'; glow.style.opacity='.58';
  });

  var magnets=document.querySelectorAll('nav a, a[href$=".html"], a[href^="#"], a[href^="mailto:"]');
  magnets.forEach(function(el){
    var rect=null;
    el.addEventListener('pointerenter', function(){
      if(reduce) return;
      rect=el.getBoundingClientRect();   // cache once per hover instead of a layout read per move
      el.style.willChange='transform';   // promote only during the interaction
    });
    el.addEventListener('pointermove', function(e){
      if(reduce || !rect) return;
      var x=e.clientX-(rect.left+rect.width/2), y=e.clientY-(rect.top+rect.height/2);
      el.style.transform='translate('+(x*0.1)+'px,'+(y*0.18)+'px)';
    });
    el.addEventListener('pointerleave', function(){
      rect=null;
      el.style.transition='transform .35s cubic-bezier(.16,1,.3,1)';
      el.style.transform='';
      setTimeout(function(){ el.style.transition=''; el.style.willChange=''; }, 350);
    });
  });
})();
