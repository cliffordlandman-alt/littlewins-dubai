(()=>{const C=window.LW_CONFIG,L=window.LW_LISTINGS,$=s=>document.querySelector(s);
const st={q:"",age:"",cat:"",area:"",s:""};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const uniq=k=>[...new Set(L.map(x=>x[k]))].sort();
uniq("category").forEach(c=>$("#cat").add(new Option(c,c)));uniq("area").forEach(c=>$("#area").add(new Option(c,c)));
const wa=(n,t)=>`https://wa.me/${n}?text=${encodeURIComponent(t)}`;
const msg=x=>`Hi ${x.name}, I found you on LittleWins Dubai and I'd love to know more about ${x.title.toLowerCase()}.`;
function card(x){return `<article class="card${x.sample?" sample":""}"><div class="ic" aria-hidden="true">${x.emoji}</div>
<span class="badge${x.sample?" s":""}">${x.sample?"Sample":esc(x.tag)}</span><h3>${esc(x.name)}</h3><p class="sub">${esc(x.title)}</p>
<p>${esc(x.summary)}</p><div class="chips"><span>Ages ${x.ages.join(", ")}</span><span>${esc(x.setting)}</span><span>${esc(x.area)}</span></div>
<div class="acts"><button class="btn ghost" data-id="${x.id}">Details</button>${x.sample?"":`<a class="btn wa" href="${wa(x.whatsapp,msg(x))}" target="_blank" rel="noopener">WhatsApp ${esc(x.name.split(" ")[0])}</a>`}</div></article>`}
function render(){const q=st.q.toLowerCase();const r=L.filter(x=>(!q||[x.name,x.title,x.category,x.summary,x.area].join(" ").toLowerCase().includes(q))
&&(!st.age||x.ages.includes(st.age))&&(!st.cat||x.category===st.cat)&&(!st.area||x.area===st.area)&&(!st.s||x.setting===st.s));
$("#list").innerHTML=r.length?r.map(card).join(""):`<div class="empty">No matches yet — try fewer filters. 🙂<br><button type="button" class="btn clear-f" style="margin-top:12px">Clear filters</button></div>`;
$("#count").textContent=`${r.length} ${r.length===1?"listing":"listings"}`}
$("#q").addEventListener("input",e=>{st.q=e.target.value;render()});
["age","cat","area"].forEach(k=>$("#"+k).addEventListener("change",e=>{st[k]=e.target.value;render()}));
document.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>{st.s=b.dataset.s;document.querySelectorAll(".seg button").forEach(o=>o.setAttribute("aria-pressed",o===b));render()});
function reset(){Object.keys(st).forEach(k=>st[k]="");$("#q").value="";["age","cat","area"].forEach(k=>$("#"+k).value="");document.querySelectorAll(".seg button").forEach(o=>o.setAttribute("aria-pressed",o.dataset.s===""));render()}
$("#reset").onclick=reset;$("#list").addEventListener("click",e=>{if(e.target.closest(".clear-f"))reset()});
const dlg=$("#dlg");$("#list").addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(!b)return;const x=L.find(y=>y.id===b.dataset.id);
$("#dlg-body").innerHTML=`<div class="ic" aria-hidden="true">${x.emoji}</div><span class="badge${x.sample?" s":""}">${x.sample?"Sample":esc(x.tag)}</span>
<h3 id="dlg-t">${esc(x.name)}</h3><p class="sub">${esc(x.title)}${x.title.toLowerCase()===x.category.toLowerCase()?"":" · "+esc(x.category)}</p><p>${esc(x.summary)}</p><p>${esc(x.details)}</p>
<div class="chips"><span>Ages ${x.ages.join(", ")}</span><span>${esc(x.setting)}</span><span>${esc(x.area)}</span></div>
<div class="acts">${x.sample?`<p class="muted">Sample listing — not bookable.</p>`:`<a class="btn wa" href="${wa(x.whatsapp,msg(x))}" target="_blank" rel="noopener">Message on WhatsApp</a>`}</div>`;dlg.showModal()});
dlg.querySelector(".close").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
let via="wa";document.querySelectorAll("#form [data-via]").forEach(b=>b.onclick=()=>via=b.dataset.via);
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f));
const miss=["name","activity","phone"].filter(k=>!d[k].trim());["name","activity","phone"].forEach(k=>miss.includes(k)?f.elements[k].setAttribute("aria-invalid","true"):f.elements[k].removeAttribute("aria-invalid"));if(miss.length){$("#err").textContent="Please add your name, activity and phone.";f.elements[miss[0]].focus();return}
$("#err").textContent="";const t=`New LittleWins provider sign-up\nName: ${d.name}\nBusiness: ${d.business||"-"}\nActivity: ${d.activity}\nAges: ${d.ages||"-"}\nArea: ${d.area||"-"}\nPhone: ${d.phone}\nNotes: ${d.notes||"-"}`;
window.open(via==="wa"?wa(C.adminWhatsApp,t):`mailto:${C.adminEmail}?subject=${encodeURIComponent("LittleWins provider sign-up")}&body=${encodeURIComponent(t)}`,"_blank");
f.hidden=true;$("#thanks").hidden=false;$("#thanks").focus()});
render()})();
