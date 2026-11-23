// Halaman karya: tab kategori dibuat otomatis dari data-cat, filter, hash URL, dan jendela detail
(()=>{
  const grid=document.getElementById('grid'),bar=document.getElementById('tabs');
  const cards=[...grid.querySelectorAll('.work')];
  const names=['semua',...new Set(cards.map(c=>c.dataset.cat))];
  const count=n=>n==='semua'?cards.length:cards.filter(c=>c.dataset.cat===n).length;
  bar.innerHTML=names.map(n=>`<button class="tab" role="tab" aria-selected="false" data-n="${n}">${n}<sup>${count(n)}</sup></button>`).join('');
  const tabs=[...bar.children];
  function pick(i,push=true){
    const n=names[i];
    tabs.forEach((t,j)=>t.setAttribute('aria-selected',j===i));
    let k=0;
    cards.forEach(c=>{
      const show=n==='semua'||c.dataset.cat===n;
      c.hidden=!show;c.classList.remove('go');
      if(show){c.style.setProperty('--i',k++);void c.offsetWidth;c.classList.add('go')}
    });
    if(push)history.replaceState(null,'','#'+n);
  }
  tabs.forEach((t,i)=>{
    t.addEventListener('click',()=>pick(i));
    t.addEventListener('keydown',e=>{const d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(d){const k=(i+d+tabs.length)%tabs.length;pick(k);tabs[k].focus()}});
  });
  const start=names.indexOf(decodeURIComponent(location.hash.slice(1)));
  pick(start>0?start:0,false);
})();
