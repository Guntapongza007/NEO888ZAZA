const products=[
{name:'ไม้สักแปรรูป',en:'TEAK',cat:'ไม้แปรรูป',grade:'เกรด A',size:'1 × 6 นิ้ว',price:'สอบถามราคา',c1:'#b9855e',c2:'#754a31'},
{name:'ไม้แดง',en:'RED WOOD',cat:'ไม้แปรรูป',grade:'คัดพิเศษ',size:'1.5 × 6 นิ้ว',price:'สอบถามราคา',c1:'#8f4e36',c2:'#552d24'},
{name:'ไม้พื้นสัก',en:'TEAK FLOORING',cat:'ไม้พื้น',grade:'Select',size:'15 × 90 มม.',price:'สอบถามราคา',c1:'#c18b5d',c2:'#805333'},
{name:'ไม้ระแนง',en:'WOOD SLAT',cat:'ไม้ระแนง',grade:'Premium',size:'1 × 2 นิ้ว',price:'สอบถามราคา',c1:'#aa754e',c2:'#67442e'},
{name:'ไม้บันได',en:'STAIR TREAD',cat:'ไม้บันได',grade:'Solid',size:'ตามสั่ง',price:'สอบถามราคา',c1:'#9b6a47',c2:'#5e3c29'},
{name:'ไม้ฝาผนัง',en:'WALL PANEL',cat:'ไม้ฝา',grade:'Premium',size:'เซาะลิ้น',price:'สอบถามราคา',c1:'#c29a72',c2:'#7f5d40'}
];
let category='ทั้งหมด';
const grid=document.getElementById('productGrid'), filters=document.getElementById('filters'), search=document.getElementById('searchInput'), empty=document.getElementById('emptyState');
const categories=['ทั้งหมด',...new Set(products.map(p=>p.cat))];
function renderFilters(){filters.innerHTML=categories.map(c=>`<button class="filter ${c===category?'active':''}" data-cat="${c}">${c}</button>`).join('');document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{category=b.dataset.cat;renderFilters();renderProducts();});}
function renderProducts(){const q=search.value.trim().toLowerCase();const list=products.filter(p=>(category==='ทั้งหมด'||p.cat===category)&&(`${p.name} ${p.en} ${p.cat}`.toLowerCase().includes(q)));grid.innerHTML=list.map((p,i)=>`<article class="product-card"><div class="product-image"><div class="grain" style="--c1:${p.c1};--c2:${p.c2}"></div></div><div class="product-meta"><div><h3>${String(i+1).padStart(2,'0')} — ${p.name}</h3><p>${p.en} · ${p.grade} · ${p.size}</p></div><span class="price">${p.price}</span></div></article>`).join('');empty.style.display=list.length?'none':'block';}
search.addEventListener('input',renderProducts);document.getElementById('menuBtn').onclick=()=>document.getElementById('navLinks').classList.toggle('open');document.querySelectorAll('#navLinks a').forEach(a=>a.onclick=()=>document.getElementById('navLinks').classList.remove('open'));renderFilters();renderProducts();
