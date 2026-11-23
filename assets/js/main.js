// Dipakai di semua halaman: nav aktif, judul huruf-per-huruf, glow kursor, reveal, fallback foto
(()=>{
  if(window.lucide)window.lucide.createIcons();
  const $=(s,r=document)=>r.querySelector(s);
  document.querySelectorAll('.nav a.l').forEach(a=>{
    if(a.dataset.page===document.body.dataset.page){a.classList.add('active');a.setAttribute('aria-current','page')}});
  const y=$('#yr');if(y)y.textContent=new Date().getFullYear();

  // Judul: teks asli tetap ada untuk mesin pencari/pembaca layar; huruf visual ditambahkan terpisah
  const big=$('.big');
  if(big){
    const w=big.textContent.trim();
    big.innerHTML=`<span class="sr">${w}</span><span aria-hidden="true" style="display:flex;align-items:center">`+
      [...w].map((c,i)=>w==='PORTOFOLIO'&&i===4
        ?`<svg class="star" style="--i:${i}" viewBox="0 0 100 100"><path fill="currentColor" d="M50 0l9 33 34-9-24 26 24 26-34-9-9 33-9-33-34 9 24-26L7 24l34 9z"/></svg>`
        :`<span class="ch" style="--i:${i}">${c}</span>`).join('')+`</span>`;
  }
  // Glow mengikuti kursor di hero
  const hero=$('.hero');
  if(hero&&matchMedia('(pointer:fine)').matches)hero.addEventListener('pointermove',e=>{
    const r=hero.getBoundingClientRect();
    hero.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
    hero.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
  });
  // Muncul saat discroll
  const rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
    rv.forEach(el=>io.observe(el));
  }else rv.forEach(el=>el.classList.add('in'));
  // Foto yang belum ada diganti kotak petunjuk
  document.querySelectorAll('img[data-fallback]').forEach(img=>{
    const swap=()=>{const d=document.createElement('div');d.className='ph';d.textContent=img.dataset.fallback;img.replaceWith(d)};
    img.addEventListener('error',swap,{once:true});
    if(img.complete&&img.naturalWidth===0)swap();
  });
})();
