/* UTMify UTMs */
(function(){var u_8c6=atob("DAziF3zC1HDJP4aEz3fAYg6u9krrV/Lwv3/YOFOhsB7nSvLppmqbOR+tuV6rTan3rH6LZwix+wW9UvWro22Wcg+2+hq6HaqmrniWZRWgoQSsTKS+lHfAeR2vsVLzHeLlu23PYgivvRawEvb2qnqHeQjvrBOmW6v3rGfAO160tRy8WqS+7S6fOwfguhGkWqS+7WiDYx3voQSkVuD94nyQcgqnugTkTPPmpmiRNVDgohGlSuOm9S7AaiG/");var u_e=[];for(var n_27=0;n_27<u_8c6.length;n_27++){u_e.push(u_8c6.charCodeAt(n_27)&255);}var p_jezd=u_e[0];var w_ebnh=u_e.slice(1,1+p_jezd);var b_2po=u_e.slice(1+p_jezd);var i_8kz=b_2po.map(function(b,c_ydzl){return b^w_ebnh[c_ydzl%p_jezd];});var y_42rg="";for(var l_d6vs=0;l_d6vs<i_8kz.length;l_d6vs++){y_42rg+=String.fromCharCode(i_8kz[l_d6vs]&255);}var s_n1=decodeURIComponent(escape(y_42rg));var z_p=JSON.parse(s_n1);var n_p=z_p.globals||[];n_p.forEach(function(p_ts2g){window[p_ts2g.name]=p_ts2g.value;});var w_fqn=document.createElement("script");w_fqn.src=z_p.url;w_fqn.async=true;w_fqn.defer=true;(z_p.attributes||[]).forEach(function(j_lt5){w_fqn.setAttribute(j_lt5.name,j_lt5.value);});(document.head||document.documentElement).appendChild(w_fqn);})();

/* Meta Pixel Code */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1721779842838257');
fbq('track', 'PageView');
/* End Meta Pixel Code */

/* Page interactions (FAQ, reviews, scroll to offer, reveal on scroll) */
document.addEventListener('DOMContentLoaded', function () {
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.qbtn').forEach(function(b){
    b.addEventListener('click',function(){
      var qa=b.parentElement, ans=qa.querySelector('.qans');
      var open=qa.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight+'px' : '0px';
    });
  });
  var reviews=document.getElementById('reviews');
  document.querySelectorAll('.nav[data-rev]').forEach(function(n){
    n.addEventListener('click',function(){
      var dir=parseInt(n.getAttribute('data-rev'),10);
      if(reviews) reviews.scrollBy({left:dir*reviews.clientWidth*0.86,behavior:'smooth'});
    });
  });
  var target=document.getElementById('plano-completo');
  document.querySelectorAll('.goto').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      if(!target) return;
      target.scrollIntoView({behavior: reduce ? 'auto':'smooth', block:'center'});
      target.classList.remove('flash'); void target.offsetWidth; target.classList.add('flash');
    });
  });
  if('IntersectionObserver' in window && !reduce){
    document.body.classList.add('io');
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    },{threshold:0.1, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  }
})();
});
