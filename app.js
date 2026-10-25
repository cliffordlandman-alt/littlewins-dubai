(()=>{const C=window.LW_CONFIG,L=window.LW_LISTINGS,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const st={q:"",age:"",cat:"",area:"",s:""};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const uniq=k=>[...new Set(L.map(x=>x[k]))].sort();
// Category look: colour, darker text colour, icon. Unknown categories get a fallback.
const CAT={Sports:["#2BB673","#167a4b","⚽"],Swimming:["#3DA5FF","#1665b0","🏊"],Movement:["#FF5D8F","#b3214f","🤸"],Arts:["#FF7A45","#b4471a","🎨"],Music:["#8B5CF6","#5b2fc2","🎵"],STEM:["#14B8A6","#0b766b","🔬"]};
const look=c=>CAT[c]||["#FFB020","#8a5a00","⭐"];
const ANY_AREA=["Across Dubai","To be confirmed"];uniq("area").filter(c=>!ANY_AREA.includes(c)).forEach(c=>$("#area").add(new Option(c,c)));
const cats=uniq("category");
$("#cats").innerHTML=`<button type="button" class="chip" data-c="" aria-pressed="true" style="--c:#1F2A44">🌈 All</button>`+cats.map(c=>`<button type="button" class="chip" data-c="${esc(c)}" aria-pressed="false" style="--c:${look(c)[0]}">${look(c)[2]} ${esc(c)}</button>`).join("");
$("#qcats").innerHTML=cats.map(c=>`<button type="button" data-v="${esc(c)}"><b>${look(c)[2]}</b>${esc(c)}</button>`).join("")+`<button type="button" data-v=""><b>🌈</b>Everything!</button>`;
const wa=(n,t)=>`https://wa.me/${n}?text=${encodeURIComponent(t)}`;
const msg=x=>`Hi ${x.name}, I found you on LittleWins Dubai and I'd love to know more about ${x.title.toLowerCase()}.`;
// Illustrated SVG backdrop (shapes only, no photos)
const art=(x,i)=>{const s=(i*37)%100;return `<div class="art" style="--c:${look(x.category)[0]}"><svg viewBox="0 0 300 130" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<circle cx="${30+s}" cy="20" r="40" fill="#fff" opacity=".18"/><circle cx="${260-s/2}" cy="110" r="55" fill="#fff" opacity=".15"/>
<rect x="${180-s}" y="15" width="26" height="26" rx="6" fill="#fff" opacity=".22" transform="rotate(20 ${190-s} 28)"/>
<path d="M0 105 Q75 80 150 105 T300 100 V130 H0Z" fill="#fff" opacity=".25"/>
<circle cx="${90+s/3}" cy="95" r="6" fill="#fff" opacity=".5"/><circle cx="${240-s}" cy="35" r="4" fill="#fff" opacity=".6"/></svg>
<span class="em" aria-hidden="true">${x.emoji}</span></div>`};
const badge=x=>`<span class="badge${x.sample?" s":""}">${x.sample?"Sample":esc(x.tag)}</span>`;
const chips=x=>`<div class="chips"><span>Ages ${x.ages.join(", ")}</span><span>${esc(x.setting)}</span><span>${esc(x.area)}</span></div>`;
function card(x,i){return `<article class="card${x.sample?" sample":""}" data-card="${x.id}" style="--i:${i};--c2:${look(x.category)[1]}">${badge(x)}${art(x,i)}
<div class="cbody"><h3>${esc(x.name)}</h3><p class="sub">${esc(x.title)}</p><p>${esc(x.summary)}</p>${chips(x)}
<div class="acts"><button type="button" class="btn ghost" data-id="${x.id}">Details</button>${x.sample?"":`<a class="btn wa" href="${wa(x.whatsapp,msg(x))}" target="_blank" rel="noopener">💬 WhatsApp ${esc(x.name.split(" ")[0])}</a>`}</div></div></article>`}
const match=()=>{const q=st.q.toLowerCase();return L.filter(x=>(!q||[x.name,x.title,x.category,x.summary,x.area].join(" ").toLowerCase().includes(q))
&&(!st.age||x.ages.includes(st.age))&&(!st.cat||x.category===st.cat)&&(!st.area||x.area===st.area||ANY_AREA.includes(x.area))&&(!st.s||x.setting===st.s))};
function render(){const r=match();
$("#list").innerHTML=r.length?r.map(card).join(""):`<div class="empty"><span class="big-emoji" aria-hidden="true">🙈</span><h3>Oops, nothing here yet!</h3><p class="muted">No listings match all of those. Try fewer filters, or let us surprise you.</p><button type="button" class="btn clear-f">Clear filters</button></div>`;
$("#count").textContent=`${r.length} ${r.length===1?"listing":"listings"}`;return r}
function sync(){$("#q").value=st.q;$("#age").value=st.age;$("#area").value=st.area;
$$(".seg button").forEach(o=>o.setAttribute("aria-pressed",o.dataset.s===st.s));$$(".chip").forEach(o=>o.setAttribute("aria-pressed",o.dataset.c===st.cat))}
$("#q").addEventListener("input",e=>{st.q=e.target.value;render()});
["age","area"].forEach(k=>$("#"+k).addEventListener("change",e=>{st[k]=e.target.value;render()}));
$$(".seg button").forEach(b=>b.onclick=()=>{st.s=b.dataset.s;sync();render()});
$("#cats").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;st.cat=b.dataset.c;sync();b.classList.remove("bump");void b.offsetWidth;b.classList.add("bump");render();stickers(st.cat)});
function reset(){Object.keys(st).forEach(k=>st[k]="");sync();render()}
$("#reset").onclick=reset;
// Details dialog
const dlg=$("#dlg");
function openDlg(x){$("#dlg-body").innerHTML=`<div style="position:relative">${badge(x)}${art(x,1)}</div><div class="cbody" style="--c2:${look(x.category)[1]}"><h3 id="dlg-t">${esc(x.name)}</h3><p class="sub">${esc(x.title)}${x.title.toLowerCase()===x.category.toLowerCase()?"":" · "+esc(x.category)}</p><p>${esc(x.summary)}</p><p>${esc(x.details)}</p>${chips(x)}
<div class="acts">${x.sample?`<p class="muted">Sample listing — not bookable.</p>`:`<a class="btn wa" href="${wa(x.whatsapp,msg(x))}" target="_blank" rel="noopener">💬 Message on WhatsApp</a>`}</div></div>`;dlg.showModal()}
$("#list").addEventListener("click",e=>{if(e.target.closest(".clear-f"))return reset();const b=e.target.closest("[data-id]");if(b)openDlg(L.find(y=>y.id===b.dataset.id))});
dlg.querySelector(".close").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
// Surprise me
let rolling=false;
function surprise(){if(rolling)return;let r=match();if(!r.length){reset();r=L}
const btn=$("#surprise");btn.classList.remove("shake");void btn.offsetWidth;btn.classList.add("shake");
$("#browse").scrollIntoView({behavior:RM?"auto":"smooth",block:"start"});
const pick=r[Math.floor(Math.random()*r.length)],cards=$$("#list .card");
const done=()=>{cards.forEach(c=>c.classList.remove("roll"));const el=$(`[data-card="${pick.id}"]`);el.classList.add("picked");el.scrollIntoView({behavior:RM?"auto":"smooth",block:"center"});
setTimeout(()=>{el.classList.remove("picked");rolling=false;openDlg(pick);if(!RM)burst(innerWidth/2,innerHeight/3,60)},RM?0:700)};
if(RM||cards.length<2)return done();rolling=true;let n=0,steps=10+Math.floor(Math.random()*4);
(function tick(){cards.forEach(c=>c.classList.remove("roll"));cards[n%cards.length].classList.add("roll");n++;
if(n<steps)setTimeout(tick,70+n*12);else done()})()}
$("#surprise").onclick=surprise;$("#dock-surprise").onclick=surprise;
// Quiz
const qa={};const steps=$$(".qstep"),dots=$$(".dots i");
function show(i){steps.forEach((s,j)=>s.hidden=j!==i);dots.forEach((d,j)=>d.classList.toggle("on",j<=Math.min(i,2)))}
steps.slice(0,3).forEach((s,i)=>s.addEventListener("click",e=>{const b=e.target.closest("button[data-v]");if(!b)return;qa[i]=b.dataset.v;
if(i<2)return show(i+1);
Object.keys(st).forEach(k=>st[k]="");st.age=qa[0];st.cat=qa[1];st.s=qa[2];sync();let r=render();stickers(qa[1]);
let note="";if(!r.length){st.cat="";sync();r=render();note=r.length?" (we widened it to all activities)":"";if(!r.length){st.s="";sync();r=render();note=" (we widened your search)"}}
$("#qres").textContent=r.length?`🎉 We found ${r.length} ${r.length===1?"match":"matches"}${note}!`:`No matches yet — try another age.`;show(3);
if(!RM&&r.length)burst(innerWidth/2,innerHeight/2,40);
setTimeout(()=>$("#browse").scrollIntoView({behavior:RM?"auto":"smooth"}),RM?0:900)}));
$("#qagain").onclick=()=>{show(0);reset()};show(0);
// Form
let via="wa";$$("#form [data-via]").forEach(b=>b.onclick=()=>via=b.dataset.via);
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f));
const req=["name","activity","phone"],miss=req.filter(k=>!d[k].trim());req.forEach(k=>miss.includes(k)?f.elements[k].setAttribute("aria-invalid","true"):f.elements[k].removeAttribute("aria-invalid"));
if(miss.length){$("#err").textContent="Please add your name, activity and phone.";f.elements[miss[0]].focus();return}
$("#err").textContent="";const t=`New LittleWins provider sign-up\nName: ${d.name}\nBusiness: ${d.business||"-"}\nActivity: ${d.activity}\nAges: ${d.ages||"-"}\nArea: ${d.area||"-"}\nPhone: ${d.phone}\nNotes: ${d.notes||"-"}`;
window.open(via==="wa"?wa(C.adminWhatsApp,t):`mailto:${C.adminEmail}?subject=${encodeURIComponent("LittleWins provider sign-up")}&body=${encodeURIComponent(t)}`,"_blank");
f.hidden=true;$("#thanks").hidden=false;$("#thanks").focus();if(!RM){const r=$("#thanks").getBoundingClientRect();burst(r.left+r.width/2,r.top+40,120)}});

// Floating stickers
function stickers(c){const s=(window.LW_STICKERS||{})[c];if(!s)return;$$(".sticker").forEach(e=>e.remove());
s.forEach((t,i)=>{const e=document.createElement("div");e.className="sticker"+(i?" s2":"");e.textContent=t;e.setAttribute("aria-hidden","true");
e.style[i?"right":"left"]="5%";e.style.animationDelay=(i*0.25)+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),RM?2500:4600)})}
// Tiny confetti
const cv=$("#confetti"),cx=cv.getContext("2d");let parts=[],raf=0;
function burst(x,y,n){cv.width=innerWidth;cv.height=innerHeight;const cols=["#FFD23F","#FF7A45","#FF5D8F","#3DA5FF","#2BB673","#8B5CF6"];
for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=4+Math.random()*7;parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-5,s:5+Math.random()*6,c:cols[i%6],r:Math.random()*6,life:90+Math.random()*40})}
if(!raf)raf=requestAnimationFrame(loop)}
function loop(){cx.clearRect(0,0,cv.width,cv.height);parts=parts.filter(p=>p.life-->0);
parts.forEach(p=>{p.vy+=.25;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=.2;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.globalAlpha=Math.min(1,p.life/40);cx.fillStyle=p.c;cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);cx.restore()});
raf=parts.length?requestAnimationFrame(loop):(cx.clearRect(0,0,cv.width,cv.height),0)}
// Scroll reveal
const rv=$$(".reveal");if(RM||!("IntersectionObserver" in window))rv.forEach(e=>e.classList.add("in"));
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});rv.forEach(e=>io.observe(e))}
// Hero parallax (pointer + scroll), subtle
if(!RM){const fl=$$(".fl");let mx=0,my=0,sy=0,pend=false;
const upd=()=>{pend=false;fl.forEach(f=>{const d=+f.dataset.depth;f.style.transform=`translate(${mx*d*30}px,${my*d*30+sy*d*-0.4}px)`})};
const q=()=>{if(!pend){pend=true;requestAnimationFrame(upd)}};
addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;q()},{passive:true});
addEventListener("scroll",()=>{sy=Math.min(scrollY,800);q()},{passive:true})}
render()})();
