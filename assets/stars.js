/* Anamofit shared starfield for subpages. */
(function(){
  "use strict";
  var cv = document.getElementById('stars');
  if(!cv || !cv.getContext) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ctx = cv.getContext('2d');
  var stars = [], W = 0, H = 0, yo = 0;
  var pointer = { x:-9999, y:-9999, px:-9999, py:-9999, vx:0, vy:0, active:false, energy:0 };

  function makeStar(){
    var bright = Math.random() > 0.84;
    return {
      x:Math.random() * W,
      y:Math.random() * H,
      vx:0,
      vy:0,
      z:Math.random() * 0.9 + 0.12,
      r:bright ? Math.random() * 1.15 + 0.45 : Math.pow(Math.random(), 1.9) * 0.85 + 0.08,
      phase:Math.random() * 6.283,
      bright:bright,
      tint:Math.random()
    };
  }

  function resize(){
    W = cv.width = window.innerWidth;
    H = cv.height = window.innerHeight;
    var n = Math.min(820, Math.floor(W * H / 2100));
    stars = [];
    for(var i = 0; i < n; i++) stars.push(makeStar());
  }

  function wrapStar(s){
    if(s.x < -24) s.x = W + 24; else if(s.x > W + 24) s.x = -24;
    if(s.y < -24) s.y = H + 24; else if(s.y > H + 24) s.y = -24;
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', function(){ yo = window.scrollY * 0.05; }, { passive:true });
  window.addEventListener('pointermove', function(e){
    var wasActive = pointer.active;
    pointer.vx = wasActive ? e.clientX - pointer.x : 0;
    pointer.vy = wasActive ? e.clientY - pointer.y : 0;
    pointer.px = pointer.x;
    pointer.py = pointer.y;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
    pointer.energy = Math.min(1, pointer.energy + 0.14);
  }, { passive:true });
  document.addEventListener('mouseleave', function(){ pointer.active = false; });

  window.__anamofitStars = { pointer:pointer, get count(){ return stars.length; } };

  (function loop(t){
    ctx.clearRect(0, 0, W, H);
    var radius = reduce ? 170 : 300;
    var r2 = radius * radius;
    pointer.energy *= 0.952;

    for(var i = 0; i < stars.length; i++){
      var s = stars[i];
      var sy = (s.y - yo * s.z + H) % H;
      if(pointer.active || pointer.energy > 0.01){
        var dx = s.x - pointer.x, dy = sy - pointer.y, d2 = dx * dx + dy * dy;
        if(d2 < r2){
          var d = Math.sqrt(d2) || 1;
          var falloff = Math.pow(1 - d / radius, 1.08);
          var pull = falloff * (0.16 + s.z * 0.54) * pointer.energy;
          var swirl = (reduce ? 0.14 : 0.36) * pull;
          s.vx += (dx / d) * pull * 0.64 + (-dy / d) * swirl + pointer.vx * 0.0034 * pull;
          s.vy += (dy / d) * pull * 0.64 + ( dx / d) * swirl + pointer.vy * 0.0034 * pull;
        }
      }

      s.vx *= 0.9;
      s.vy *= 0.9;
      s.x += s.vx;
      s.y += s.vy;
      wrapStar(s);

      sy = (s.y - yo * s.z + H) % H;
      var tw = 0.5 + 0.5 * Math.sin(t * 0.0012 * s.z + s.phase + s.x * 0.01);
      var speed = Math.min(1, Math.abs(s.vx) + Math.abs(s.vy));
      ctx.globalAlpha = (s.bright ? 0.34 : 0.18) + tw * (s.bright ? 0.46 : 0.32) * s.z + speed * 0.08;
      ctx.fillStyle = s.tint > 0.86 ? '#00E0FF' : (s.tint < 0.12 ? '#e7dcff' : '#cfe8ff');
      ctx.beginPath();
      ctx.arc(s.x, sy, s.r + speed * 0.08, 0, 6.283);
      ctx.fill();

      if(s.bright && tw > 0.72){
        ctx.globalAlpha *= 0.22;
        ctx.beginPath();
        ctx.arc(s.x, sy, s.r * 2.8, 0, 6.283);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  })(0);
})();
