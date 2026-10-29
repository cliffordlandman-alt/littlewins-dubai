// ===== LittleWins Dubai — edit this file only =====
// Replace the placeholder contacts below with real ones (international format, digits only, no + or spaces).
window.LW_CONFIG = {
  siteName: "LittleWins Dubai",
  adminWhatsApp: "971500000000",        // PLACEHOLDER: where provider sign-ups are sent
  adminEmail: "hello@example.com"       // PLACEHOLDER: email fallback for sign-ups
};

// Floating stickers shown when a parent taps a category (edit text here)
window.LW_STICKERS = {
  "Swimming": ["🏊 Coach Lindy", "★★★★★ 23 reviews"],
  "Sports":   ["⚽ Coach Tammy", "★★★★★ 23 reviews"]
};

// Listings. Set sample:true for example listings (shows a "Sample" badge).
// whatsapp: placeholder number; ages: any of "0-2","2-5","6-9","10-13"
// soon:true = new activity, no provider yet (no WhatsApp button). ages:[] = ages to confirm (matches any age filter).
// img: optional artwork background for the card.
// category: "Sports","Swimming","Movement","Arts","Music","STEM"
// setting: "At home" or "Venue"
window.LW_LISTINGS = [
  { id:"tamaryn", name:"Tamaryn Olivier", title:"At-home soccer coaching", category:"Sports", emoji:"⚽",
    ages:["2-5"], area:"Across Dubai", setting:"At home", whatsapp:"971500000001", sample:false, tag:"Pilot coach",
    summary:"Fun, engaging soccer sessions for young children with a female coach who loves helping little ones learn through play.",
    img:"img/soccer.webp", details:"Sessions come to your home or garden. Please message Tamaryn to confirm availability, location and session details." },
  { id:"lindy", name:"Lindy", title:"Swimming", category:"Swimming", emoji:"🏊",
    ages:["2-5","6-9"], area:"Across Dubai", setting:"At home", whatsapp:"971500000002", sample:false, tag:"New provider · details to confirm",
    summary:"Swimming coach listing. Contact Lindy directly to confirm ages taught, lesson format, location and availability.",
    img:"img/swimming.webp", details:"Provider details and credentials have not yet been independently verified. Please ask Lindy directly." },
  { id:"ballet", name:"Ballet", title:"Ballet", category:"Dance", emoji:"🩰", img:"img/ballet.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Tiptoes, twirls and graceful leaps. Little dancers build balance, posture and confidence through music and play.",
    details:"Ballet is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"sensory", name:"Sensory Play", title:"Sensory play", category:"Sensory", emoji:"🫧", img:"img/sensory.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Squish, pour, build and explore! Hands-on play with colours and textures that sparks curiosity and little discoveries.",
    details:"Sensory Play is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"karate", name:"Karate / Taekwondo", title:"Karate & Taekwondo", category:"Martial arts", emoji:"🥋", img:"img/karate.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Kicks, blocks and big \"Hi-yah!\"s. Kids build focus, respect and coordination while having loads of fun.",
    details:"Karate / Taekwondo is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"zumba", name:"Zumba", title:"Zumba for kids", category:"Dance", emoji:"💃", img:"img/zumba.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Dance party time! Upbeat music and easy moves to get little ones jumping, wiggling and smiling.",
    details:"Zumba is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"tiny-tumblers", name:"Tiny Tumblers", title:"Movement and balance", category:"Movement", emoji:"🤸", img:"img/gymnastics.webp",
    ages:["2-5"], area:"Al Barsha", setting:"Venue", whatsapp:"971500000003", sample:true, tag:"Example listing",
    summary:"A sample listing showing how playful movement activities for young children could look.",
    details:"Example only — not a real or bookable provider." },
  { id:"little-artists", name:"Little Artists Studio", title:"Messy art & crafts", category:"Arts", emoji:"🎨", img:"img/artists.webp",
    ages:["2-5","6-9"], area:"Jumeirah", setting:"Venue", whatsapp:"971500000004", sample:true, tag:"Example listing",
    summary:"A sample listing for painting, clay and craft sessions.",
    details:"Example only — not a real or bookable provider." },
  { id:"mini-makers", name:"Mini Makers", title:"Junior science & building", category:"STEM", emoji:"🔬", img:"img/minimakers.webp",
    ages:["6-9","10-13"], area:"Dubai Marina", setting:"At home", whatsapp:"971500000005", sample:true, tag:"Example listing",
    summary:"A sample listing for hands-on science experiments and building challenges.",
    details:"Example only — not a real or bookable provider." },
  { id:"rhythm-kids", name:"Rhythm Kids", title:"Music & movement", category:"Music", emoji:"🥁", img:"img/rhythm.webp",
    ages:["0-2","2-5"], area:"Mirdif", setting:"Venue", whatsapp:"971500000006", sample:true, tag:"Example listing",
    summary:"A sample listing for songs, drums and dance for babies and toddlers.",
    details:"Example only — not a real or bookable provider." }
];
