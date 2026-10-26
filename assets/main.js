(function(){
  var d=document,root=d.documentElement;
  root.classList.remove('no-js');
  var burger=d.querySelector('.hamburger'),drawer=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay');
  function setMenu(open){
    if(!burger||!drawer)return;
    drawer.classList.toggle('open',open);
    if(ov)ov.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
    drawer.setAttribute('aria-hidden',open?'false':'true');
    root.style.overflow=open?'hidden':'';
  }
  if(burger){
    burger.addEventListener('click',function(){setMenu(burger.getAttribute('aria-expanded')!=='true')});
    var cl=d.querySelector('.mob-drawer .mclose button');
    if(cl)cl.addEventListener('click',function(){setMenu(false);burger.focus()});
    if(ov)ov.addEventListener('click',function(){setMenu(false)});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'){setMenu(false)}});
    window.addEventListener('resize',function(){if(window.innerWidth>768&&window.innerWidth>980)setMenu(false)});
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
  }
  d.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var a=d.getElementById(b.getAttribute('aria-controls'));
      var open=b.getAttribute('aria-expanded')==='true';
      b.setAttribute('aria-expanded',open?'false':'true');
      a.style.maxHeight=open?'0px':a.scrollHeight+'px';
    });
  });
  window.addEventListener('resize',function(){
    d.querySelectorAll('.faq-q[aria-expanded=true]').forEach(function(b){
      var a=d.getElementById(b.getAttribute('aria-controls'));a.style.maxHeight=a.scrollHeight+'px';
    });
  });
  // keyboard support for dropdown buttons
  d.querySelectorAll('.nav-links button.navbtn').forEach(function(b){
    b.addEventListener('keydown',function(e){if(e.key==='Escape'){b.blur()}});
  });
})();
