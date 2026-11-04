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
// activity: groups listings into one front card titled "<activity> Coaches".
// img: optional artwork background for the card.
// category: "Sports","Swimming","Movement","Arts","Music","STEM"
// setting: "At home" or "Venue"
window.LW_LISTINGS = [
  { id:"tamaryn", activity:"Soccer", name:"Tamaryn Olivier", title:"At-home soccer coaching", category:"Sports", emoji:"⚽",
    ages:["2-5"], area:"Across Dubai", setting:"At home", whatsapp:"971500000001", sample:false, tag:"Pilot coach",
    summary:"Fun, engaging soccer sessions for young children with a female coach who loves helping little ones learn through play.",
    img:"img/soccer.webp", details:"Sessions come to your home or garden. Please message Tamaryn to confirm availability, location and session details." },
  { id:"lindy", activity:"Swimming", name:"Lindy", title:"Swimming", category:"Swimming", emoji:"🏊",
    ages:["2-5","6-9","10-13"], ageLabel:"Ages 2 and above", photo:"img/lindy/lindy-avatar.webp",
    certs:[{src:"img/lindy/cert-lifeguard-card.webp",cap:"Pool Lifeguard License card — Cert. DSS-C-8421, valid 24 Aug 2025 – 23 Aug 2027"},{src:"img/lindy/cert-lifeguard.webp",cap:"Pool Lifeguard certificate (Dubai Municipality scheme) — DRASSA, Cert. DSS-C-8421, valid to 23 Aug 2027"},{src:"img/lindy/cert-first-aid.webp",cap:"Pediatric First Aid | CPR AED for child, infant and adult — HSI / DRASSA Academy, Aug 2025 – Aug 2027"},{src:"img/lindy/cert-asca-level1.webp",cap:"ASCA Level 1 — International Age Group certification, Oct 2019"},{src:"img/lindy/cert-asca-level2.webp",cap:"ASCA Level 2 — International Age Group certification, Oct 2019"},{src:"img/lindy/cert-asca-l1-foundations.webp",cap:"ASCA Level 1 Foundations of Coaching School — certificate of attendance, 15–17 Oct 2019"},{src:"img/lindy/cert-asca-l2-stroke.webp",cap:"ASCA Level 2 Stroke School — certificate of attendance, 15–17 Oct 2019"},{src:"img/lindy/cert-asca-novice.webp",cap:"ASCA Coaching the Novice Swim Team — certificate of attendance, 18 Oct 2019"},{src:"img/lindy/cert-uaesf-novice.webp",cap:"UAE Swimming Federation Coaching the Novice Swim Team — certificate of attendance, 18 Oct 2019"},{src:"img/lindy/cert-lqc-asca-2019.webp",cap:"Leaders Qualification Center & UAE Swimming Federation — ASCA coaches course, 15–18 Oct 2019, Dubai"}],
     area:"Across Dubai", setting:"At home", whatsapp:"971500000002", sample:false, tag:"New provider · details to confirm",
    summary:"Swimming coach listing. Contact Lindy directly to confirm ages taught, lesson format, location and availability.",
    img:"img/swimming.webp", details:"Provider details and credentials have not yet been independently verified. Please ask Lindy directly." },
  { id:"ballet", activity:"Ballet", name:"Ballet", title:"Ballet", category:"Dance", emoji:"🩰", img:"img/ballet.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Tiptoes, twirls and graceful leaps. Little dancers build balance, posture and confidence through music and play.",
    details:"Ballet is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"sensory", activity:"Sensory Play", name:"Sensory Play", title:"Sensory play", category:"Sensory", emoji:"🫧", img:"img/sensory.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Squish, pour, build and explore! Hands-on play with colours and textures that sparks curiosity and little discoveries.",
    details:"Sensory Play is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"karate", activity:"Karate & Taekwondo", name:"Karate / Taekwondo", title:"Karate & Taekwondo", category:"Martial arts", emoji:"🥋", img:"img/karate.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Kicks, blocks and big \"Hi-yah!\"s. Kids build focus, respect and coordination while having loads of fun.",
    details:"Karate / Taekwondo is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"zumba", activity:"Zumba", name:"Zumba", title:"Zumba for kids", category:"Dance", emoji:"💃", img:"img/zumba.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"Dance party time! Upbeat music and easy moves to get little ones jumping, wiggling and smiling.",
    details:"Zumba is a new LittleWins activity. Coach, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"tutors", activity:"Tutors", cardTitle:"Tutors", name:"Tutors", title:"Tutoring", category:"Tutoring", emoji:"📚", img:"img/tutors.webp",
    ages:[], area:"To be confirmed", setting:"To be confirmed", soon:true, tag:"New activity · coming soon",
    summary:"", details:"Tutors is a new LittleWins activity. Tutor, ages, location and timings are still to be confirmed. Check back soon!" },
  { id:"tiny-tumblers", activity:"Gymnastics", name:"Tiny Tumblers", title:"Movement and balance", category:"Movement", emoji:"🤸", img:"img/gymnastics.webp",
    ages:["2-5"], area:"Al Barsha", setting:"Venue", whatsapp:"971500000003", sample:true, tag:"Example listing",
    summary:"A sample listing showing how playful movement activities for young children could look.",
    details:"Example only — not a real or bookable provider." },
  { id:"little-artists", activity:"Arts & Crafts", name:"Little Artists Studio", title:"Messy art & crafts", category:"Arts", emoji:"🎨", img:"img/artists.webp",
    ages:["2-5","6-9"], area:"Jumeirah", setting:"Venue", whatsapp:"971500000004", sample:true, tag:"Example listing",
    summary:"A sample listing for painting, clay and craft sessions.",
    details:"Example only — not a real or bookable provider." },
  { id:"mini-makers", activity:"Science", name:"Mini Makers", title:"Junior science & building", category:"STEM", emoji:"🔬", img:"img/minimakers.webp",
    ages:["6-9","10-13"], area:"Dubai Marina", setting:"At home", whatsapp:"971500000005", sample:true, tag:"Example listing",
    summary:"A sample listing for hands-on science experiments and building challenges.",
    details:"Example only — not a real or bookable provider." },
  { id:"rhythm-kids", activity:"Music", name:"Rhythm Kids", title:"Music & movement", category:"Music", emoji:"🥁", img:"img/rhythm.webp",
    ages:["0-2","2-5"], area:"Mirdif", setting:"Venue", whatsapp:"971500000006", sample:true, tag:"Example listing",
    summary:"A sample listing for songs, drums and dance for babies and toddlers.",
    details:"Example only — not a real or bookable provider." }
];

// Activity-level description shown under each front-card title (keyed by activity).
window.LW_ACTIVITY_DESC = {
  "Soccer": "Fun, engaging soccer sessions for young children with a female coach who loves helping little ones learn through play.",
  "Swimming": "Little splashes, big achievements! LittleWins connects families with swimming coaches who help little ones build water confidence and develop swimming skills through playful, supportive lessons.",
  "Ballet": "Tiptoes, twirls and graceful leaps. Little dancers build balance, posture and confidence through music and play.",
  "Sensory Play": "Squish, pour, build and explore! Hands-on play with colours and textures that sparks curiosity and little discoveries.",
  "Karate & Taekwondo": "Kicks, blocks and big \"Hi-yah!\"s. Kids build focus, respect and coordination while having loads of fun.",
  "Zumba": "Dance party time! Upbeat music and easy moves to get little ones jumping, wiggling and smiling.",
  "Gymnastics": "Little moves, big achievements! LittleWins connects families with gymnastics coaches who help little ones explore balancing, stretching, jumping and rolling through playful activities.",
  "Arts & Crafts": "Little hands, big imaginations! LittleWins connects families with arts and crafts providers who help little ones explore colours, textures and creativity through playful projects.",
  "Science": "Little scientists, big discoveries! LittleWins connects families with science activity providers who spark curiosity through playful experiments and hands-on fun.",
  "Music": "Little voices, big rhythms! LittleWins connects families with music and movement providers who bring learning to life through singing, dancing and playful sounds."
};
