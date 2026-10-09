/* Kuzayo DEMO DATA. All names, numbers and reviews are FAKE examples. */
window.KUZAYO = {
  categories: [
    { id: "plumber", icon: "🔧", en: "Plumbers", rw: "Abafundi b'amazi" },
    { id: "electrician", icon: "⚡", en: "Electricians", rw: "Abafundi b'amashanyarazi" },
    { id: "salon", icon: "💇🏾", en: "Salons & Barbers", rw: "Salon n'Abogoshi" },
    { id: "cleaner", icon: "🧽", en: "Cleaners", rw: "Abakora isuku", soon: true },
    { id: "tutor", icon: "📚", en: "Tutors", rw: "Abarimu bigisha", soon: true },
    { id: "mover", icon: "🚚", en: "Movers", rw: "Abimura ibintu", soon: true }
  ],
  sectors: ["Kimihurura", "Remera", "Kicukiro", "Kimironko", "Nyarutarama", "Kacyiru", "Gikondo", "Niboye"],
  providers: [
    { id: 1, name: "Jean-Claude M. (Example)", initials: "JM", color: "#2f7d4f", category: "plumber", sectors: ["Kimihurura", "Kacyiru", "Remera"], rating: 4.9, reviews: 38, jobs: 112, years: 8, from: 8000, verified: true, rdb: true, response: "~15 min", hours: "Mon–Sat 7:00–19:00", phone: "250780000001",
      bio: "Leak repairs, water tanks, geysers and bathroom fittings. I bring my own tools and spare parts.",
      services: [{ n: "Leak / tap repair", p: 8000 }, { n: "Toilet repair or install", p: 15000 }, { n: "Water tank cleaning & connection", p: 25000 }, { n: "Geyser install", p: 40000 }],
      reviewList: [{ who: "Aline K.", job: "Leak / tap repair", date: "2 Oct 2026", stars: 5, text: "Came within an hour in the rain and fixed the kitchen leak. Clear price before starting." }, { who: "Eric N.", job: "Geyser install", date: "21 Sep 2026", stars: 5, text: "Neat work, cleaned up after. Paid the deposit with MoMo, rest after the job." }, { who: "Divine U.", job: "Toilet repair", date: "4 Sep 2026", stars: 4, text: "Good job, arrived 20 minutes late but called ahead." }] },
    { id: 2, name: "Claudine U. (Example)", initials: "CU", color: "#c58b00", category: "electrician", sectors: ["Remera", "Kimironko", "Nyarutarama"], rating: 4.8, reviews: 27, jobs: 74, years: 6, from: 10000, verified: true, rdb: false, response: "~30 min", hours: "Mon–Sun 8:00–20:00", phone: "250780000002",
      bio: "Wiring, sockets, breakers, solar back-up and inverter installs for homes and small shops.",
      services: [{ n: "Socket / switch repair", p: 10000 }, { n: "Breaker / DB board fix", p: 20000 }, { n: "House rewiring (per room)", p: 45000 }, { n: "Inverter & battery install", p: 60000 }],
      reviewList: [{ who: "Patrick H.", job: "Breaker fix", date: "29 Sep 2026", stars: 5, text: "Found the fault fast. Explained everything in Kinyarwanda and English." }, { who: "Grace M.", job: "Inverter install", date: "12 Sep 2026", stars: 5, text: "Power cuts are no longer a problem. Very professional." }] },
    { id: 3, name: "Salon Keza (Example)", initials: "SK", color: "#b5476b", category: "salon", sectors: ["Kicukiro", "Niboye", "Gikondo"], rating: 4.7, reviews: 64, jobs: 230, years: 5, from: 3000, verified: true, rdb: true, response: "~10 min", hours: "Mon–Sun 8:00–21:00", phone: "250780000003",
      bio: "Braids, natural hair, nails and men's cuts. Home visits available for weddings.",
      services: [{ n: "Men's haircut", p: 3000 }, { n: "Wash & blow-dry", p: 6000 }, { n: "Box braids", p: 25000 }, { n: "Bridal home visit", p: 80000 }],
      reviewList: [{ who: "Sandrine I.", job: "Box braids", date: "5 Oct 2026", stars: 5, text: "Beautiful braids, finished on time. Booking ahead meant no waiting." }, { who: "Kevin T.", job: "Men's haircut", date: "1 Oct 2026", stars: 4, text: "Clean fade, fair price." }] },
    { id: 4, name: "Emmanuel N. (Example)", initials: "EN", color: "#3b6fb6", category: "plumber", sectors: ["Kicukiro", "Gikondo", "Niboye"], rating: 4.6, reviews: 19, jobs: 51, years: 4, from: 7000, verified: true, rdb: false, response: "~45 min", hours: "Mon–Sat 7:30–18:00", phone: "250780000004",
      bio: "Blocked drains, pipe replacement and new bathroom plumbing.",
      services: [{ n: "Blocked drain", p: 7000 }, { n: "Pipe replacement (per metre)", p: 5000 }, { n: "New bathroom plumbing", p: 120000 }],
      reviewList: [{ who: "Olivier B.", job: "Blocked drain", date: "27 Sep 2026", stars: 5, text: "Fixed it the same day." }, { who: "Chantal M.", job: "Pipe replacement", date: "10 Sep 2026", stars: 4, text: "Good price, honest about what was needed." }] },
    { id: 5, name: "Theoneste K. (Example)", initials: "TK", color: "#7a4fb5", category: "electrician", sectors: ["Kimihurura", "Kacyiru", "Kicukiro"], rating: 4.5, reviews: 15, jobs: 40, years: 10, from: 12000, verified: false, rdb: false, response: "~1 hr", hours: "Mon–Fri 8:00–17:00", phone: "250780000005",
      bio: "Commercial electrical work, CCTV and security lighting.",
      services: [{ n: "Security light install", p: 12000 }, { n: "CCTV setup (4 cameras)", p: 90000 }, { n: "Office wiring check", p: 30000 }],
      reviewList: [{ who: "Jacques R.", job: "CCTV setup", date: "18 Sep 2026", stars: 5, text: "Cameras work well, set them up on my phone too." }] },
    { id: 6, name: "Urban Fade Barbers (Example)", initials: "UF", color: "#1f6f6f", category: "salon", sectors: ["Remera", "Kimironko"], rating: 4.8, reviews: 52, jobs: 190, years: 3, from: 2500, verified: true, rdb: true, response: "~5 min", hours: "Mon–Sun 7:00–22:00", phone: "250780000006",
      bio: "Barbershop near Remera stadium (example). Fades, beard trims and kids' cuts.",
      services: [{ n: "Kids' cut", p: 2500 }, { n: "Fade + beard", p: 5000 }, { n: "Hot towel shave", p: 4000 }],
      reviewList: [{ who: "Yves G.", job: "Fade + beard", date: "6 Oct 2026", stars: 5, text: "Best fade in Remera. Booked at lunchtime, no queue." }] },
    { id: 7, name: "Aimable H. (Example)", initials: "AH", color: "#a0522d", category: "plumber", sectors: ["Remera", "Kimironko", "Nyarutarama"], rating: 4.3, reviews: 9, jobs: 22, years: 2, from: 6000, verified: true, rdb: false, response: "~20 min", hours: "Mon–Sun 6:30–20:00", phone: "250780000007",
      bio: "TVET-trained plumber (example). Quick fixes and water pump installs.",
      services: [{ n: "Tap / shower fix", p: 6000 }, { n: "Water pump install", p: 35000 }],
      reviewList: [{ who: "Josiane N.", job: "Water pump install", date: "15 Sep 2026", stars: 4, text: "Pump works great. Young but careful." }] },
    { id: 8, name: "Volt Pro Rwanda (Example)", initials: "VP", color: "#2e7d32", category: "electrician", sectors: ["Gikondo", "Niboye", "Kicukiro"], rating: 4.9, reviews: 33, jobs: 98, years: 7, from: 9000, verified: true, rdb: true, response: "~25 min", hours: "Mon–Sat 7:00–19:00", phone: "250780000008",
      bio: "Two-person team. Meter issues, cash-power, wiring and solar.",
      services: [{ n: "Cash-power meter issue", p: 9000 }, { n: "Solar panel install (small)", p: 150000 }, { n: "Fault finding", p: 15000 }],
      reviewList: [{ who: "Benjamin S.", job: "Fault finding", date: "3 Oct 2026", stars: 5, text: "Very fast, fair price, gave a receipt." }] }
  ]
};

/* v2 landing content. ALL FAKE EXAMPLES for the demo. */
window.KUZAYO.promos = [
  { id: "pow", tag: "⭐ Plumber of the week", tagRw: "⭐ Umufundi w'icyumweru", title: "Jean-Claude M. (Example)", titleRw: "Jean-Claude M. (Urugero)", sub: "4.9★ · 112 jobs · replies in ~15 min", subRw: "4.9★ · akazi 112 · asubiza mu min ~15", cta: "View profile", ctaRw: "Reba umwirondoro", href: "provider.html?id=1", bg: "linear-gradient(120deg,#1E6B52,#2E8A6A)", emoji: "🔧" },
  { id: "momo10", tag: "📱 MoMo offer (example)", tagRw: "📱 Poromosiyo ya MoMo (urugero)", title: "10% off your first MoMo booking", titleRw: "10% ku itumiza rya mbere na MoMo", sub: "Demo promo · no real discount", subRw: "Igeragezwa · nta gabanuka nyaryo", cta: "Book a pro", ctaRw: "Tumiza", href: "services.html", bg: "linear-gradient(120deg,#9A3A1A,#C2512B)", emoji: "💸" },
  { id: "salon", tag: "💇🏾 Salon Sunday", tagRw: "💇🏾 Salon ku cyumweru", title: "Braids & cuts from 3,000 RWF", titleRw: "Gusuka no kogosha guhera 3,000 RWF", sub: "Salon Keza & Urban Fade (examples)", subRw: "Salon Keza na Urban Fade (ingero)", cta: "See salons", ctaRw: "Reba salon", href: "search.html?cat=salon", bg: "linear-gradient(120deg,#1F1A17,#4A3A30)", emoji: "✂️" },
  { id: "jobs", tag: "💼 Now hiring", tagRw: "💼 Barashaka abakozi", title: "New gigs posted in Kigali today", titleRw: "Akazi gashya i Kigali uyu munsi", sub: "Helpers, stylists, cleaners, tutors", subRw: "Abafasha, aba-salon, isuku, abarimu", cta: "Browse jobs", ctaRw: "Reba akazi", href: "jobs.html", bg: "linear-gradient(120deg,#2D6E8E,#3A86AA)", emoji: "📋" }
];
window.KUZAYO.jobs = [
  { id: 1, cat: "electrician", title: "Electrician helper wanted", titleRw: "Turashaka umufasha w'amashanyarazi", by: "Volt Pro Rwanda (Example)", sector: "Kicukiro", pay: 8000, per: "day", type: "Daily", posted: "2h", phone: "250780000101" },
  { id: 2, cat: "salon", title: "Salon stylist (braids)", titleRw: "Umusuka imisatsi (salon)", by: "Salon Keza (Example)", sector: "Kimihurura", pay: 120000, per: "month", type: "Full-time", posted: "5h", phone: "250780000102" },
  { id: 3, cat: "cleaner", title: "House cleaner, 3 days/week", titleRw: "Ukora isuku mu rugo, iminsi 3/icyumweru", by: "Private household (Example)", sector: "Nyarutarama", pay: 60000, per: "month", type: "Part-time", posted: "1d", phone: "250780000103" },
  { id: 4, cat: "tutor", title: "Math tutor, P6 & S3", titleRw: "Umwarimu w'imibare, P6 na S3", by: "Parent in Kimironko (Example)", sector: "Kimironko", pay: 5000, per: "hour", type: "Evenings", posted: "1d", phone: "250780000104" },
  { id: 5, cat: "plumber", title: "Plumber for 2-week site job", titleRw: "Umufundi w'amazi ibyumweru 2", by: "Remera build site (Example)", sector: "Remera", pay: 12000, per: "day", type: "Contract", posted: "3h", phone: "250780000105" },
  { id: 6, cat: "salon", title: "Barber, weekends", titleRw: "Umwogoshi, impera z'icyumweru", by: "Urban Fade Barbers (Example)", sector: "Kacyiru", pay: 7000, per: "day", type: "Weekends", posted: "2d", phone: "250780000106" },
  { id: 7, cat: "mover", title: "Moving crew member", titleRw: "Umukozi wo kwimura ibintu", by: "Kigali Movers (Example)", sector: "Gikondo", pay: 6000, per: "day", type: "Daily", posted: "6h", phone: "250780000107" }
];
window.KUZAYO.deals = [
  { provider: 3, text: "Free wash with any braids", textRw: "Koza ku buntu ku musuko wose", was: 6000, now: 4500, ends: "Sun" },
  { provider: 1, text: "Leak check + fix", textRw: "Kugenzura no gusana amazi ava", was: 10000, now: 8000, ends: "Fri" },
  { provider: 2, text: "Socket install x3", textRw: "Gushyiraho priza 3", was: 15000, now: 12000, ends: "Sat" },
  { provider: 6, text: "Cut + beard trim", textRw: "Kogosha + ubwanwa", was: 5000, now: 3500, ends: "Sun" }
];
window.KUZAYO.trending = [
  { icon: "🔥", en: "Geyser repairs", rw: "Gusana geyser", v: "+42%" },
  { icon: "⚡", en: "Cash-power fixes", rw: "Cash-power", v: "+31%" },
  { icon: "💇🏾", en: "Weekend braids", rw: "Gusuka weekend", v: "+27%" },
  { icon: "📚", en: "Exam tutors", rw: "Abarimu b'ibizamini", v: "+19%" }
];

/* v3 MARKETPLACE (classifieds). ALL ADS, SELLERS, PHONE NUMBERS AND PRICES ARE FAKE EXAMPLES. */
window.KUZAYO.mcats = [
  { id: "vehicles", icon: "🚗", bg: "#e7efff", en: "Vehicles", rw: "Ibinyabiziga", subs: [["cars","Cars","Imodoka"],["motos","Motorbikes","Moto"],["parts","Parts & tyres","Ibyuma n'amapine"],["trucks","Trucks & buses","Amakamyo na bisi"]] },
  { id: "property", icon: "🏠", bg: "#fff1e3", en: "Property", rw: "Imitungo itimukanwa", subs: [["rent","Houses for rent","Inzu zikodeshwa"],["sale","Houses for sale","Inzu zigurishwa"],["land","Land & plots","Ibibanza"],["shops","Shops & offices","Amaduka n'ibiro"],["shortlet","Short stays","Kurara iminsi mike"]] },
  { id: "phones", icon: "📱", bg: "#eaf6ff", en: "Phones & Tablets", rw: "Telefone na Tablet", subs: [["smartphones","Smartphones","Telefone zigezweho"],["tablets","Tablets","Tablet"],["accessories","Accessories","Ibikoresho bya telefone"],["watches","Smart watches","Amasaha agezweho"]] },
  { id: "electronics", icon: "💻", bg: "#efeaff", en: "Electronics", rw: "Ibikoresho by'ikoranabuhanga", subs: [["laptops","Laptops & computers","Mudasobwa"],["tv","TV & audio","Televiziyo n'amajwi"],["solar","Solar & power","Imirasire y'izuba"],["gaming","Gaming","Imikino"]] },
  { id: "home", icon: "🛋️", bg: "#f5efe6", en: "Home, Furniture & Appliances", rw: "Ibikoresho byo mu rugo", subs: [["furniture","Furniture","Intebe n'ameza"],["kitchen","Kitchen appliances","Ibikoresho byo mu gikoni"],["beds","Beds & mattresses","Ibitanda na matela"],["decor","Decor","Imitako"]] },
  { id: "fashion", icon: "👗", bg: "#ffe9f1", en: "Fashion", rw: "Imyambaro", subs: [["women","Women's clothing","Imyenda y'abagore"],["men","Men's clothing","Imyenda y'abagabo"],["shoes","Shoes","Inkweto"],["bags","Bags & jewellery","Amasakoshi n'imitako"]] },
  { id: "beauty", icon: "💄", bg: "#fdeaea", en: "Health & Beauty", rw: "Ubuzima n'ubwiza", subs: [["skin","Skin care","Kwita ku ruhu"],["hair","Hair products","Iby'imisatsi"],["tools","Beauty tools","Ibikoresho by'ubwiza"]] },
  { id: "jobs", icon: "💼", bg: "#e6f3ea", en: "Jobs", rw: "Akazi", href: "jobs.html", subs: [] },
  { id: "services", icon: "🛠️", bg: "#fff6d6", en: "Services", rw: "Serivisi", subs: [["pros","Book a verified pro","Tumiza umufundi"],["cleaning","Cleaning","Isuku"],["events","Events & photography","Ibirori n'amafoto"],["transport","Moving & transport","Ubwikorezi"]] },
  { id: "kids", icon: "🧸", bg: "#e9f7f6", en: "Babies & Kids", rw: "Abana n'impinja", subs: [["gear","Baby gear","Ibikoresho by'impinja"],["school","School items","Ibikoresho by'ishuri"],["toys","Toys","Ibikinisho"]] },
  { id: "pets", icon: "🐕", bg: "#f3eee6", en: "Animals & Pets", rw: "Amatungo", subs: [["dogs","Dogs","Imbwa"],["poultry","Poultry","Inkoko"],["livestock","Livestock","Amatungo maremare"]] },
  { id: "agri", icon: "🌽", bg: "#eef7e3", en: "Agriculture & Food", rw: "Ubuhinzi n'ibiribwa", subs: [["produce","Fresh produce","Imyaka mishya"],["livestock","Farm animals","Amatungo yo mu murima"],["inputs","Seeds & inputs","Imbuto n'ifumbire"]] },
  { id: "commercial", icon: "🏭", bg: "#eceff3", en: "Commercial Equipment", rw: "Ibikoresho by'ubucuruzi", subs: [["catering","Catering & bakery","Imigati n'amafunguro"],["salon","Salon equipment","Ibikoresho bya salon"],["machines","Machines","Imashini"]] },
  { id: "repair", icon: "🧱", bg: "#f7ece6", en: "Repair & Construction", rw: "Ubwubatsi no gusana", subs: [["materials","Building materials","Ibikoresho by'ubwubatsi"],["tools","Tools","Ibikoresho"],["plumbing","Plumbing & electrical","Amazi n'amashanyarazi"]] },
  { id: "cvs", icon: "📄", bg: "#eef0ff", en: "Seeking Work (CVs)", rw: "Abashaka akazi (CV)", subs: [["drivers","Drivers","Abashoferi"],["office","Office & finance","Ibiro n'imari"],["domestic","Domestic & care","Abakozi bo mu rugo"]] },
  { id: "sports", icon: "⚽", bg: "#e6f4ff", en: "Sports & Outdoors", rw: "Imikino n'imyidagaduro", subs: [["bikes","Bicycles","Amagare"],["gear","Sports gear","Ibikoresho by'imikino"]] }
];
window.KUZAYO.locations = {
  kigali: ["Gikondo", "Gisozi", "Kacyiru", "Kagarama", "Kanombe", "Kicukiro", "Kimihurura", "Kimironko", "Kinyinya", "Muhima", "Niboye", "Nyamirambo", "Nyarutarama", "Remera"],
  districts: ["Huye", "Karongi", "Muhanga", "Musanze", "Nyagatare", "Rubavu", "Rusizi", "Rwamagana"]
};
window.KUZAYO.sellers = [
  { id: 1, name: "Kigali Auto Hub (Example)", initials: "KA", color: "#23407a", type: "Business", verified: true, since: 2021, reply: "~1 hr", rating: 4.7, feedback: 41, phone: "250780000201", loc: "Kicukiro" },
  { id: 2, name: "Aline's Phone Corner (Example)", initials: "AP", color: "#b5476b", type: "Business", verified: true, since: 2022, reply: "~10 min", rating: 4.9, feedback: 88, phone: "250780000202", loc: "Muhima" },
  { id: 3, name: "Eric N. (Example)", initials: "EN", color: "#3b6fb6", type: "Individual", verified: false, since: 2025, reply: "~3 hrs", rating: 4.2, feedback: 6, phone: "250780000203", loc: "Remera" },
  { id: 4, name: "Ubumwe Homes Agency (Example)", initials: "UH", color: "#a0522d", type: "Agent", verified: true, since: 2020, reply: "~30 min", rating: 4.6, feedback: 57, phone: "250780000204", loc: "Kacyiru" },
  { id: 5, name: "Nyabugogo Furniture Mart (Example)", initials: "NF", color: "#7a4fb5", type: "Business", verified: true, since: 2019, reply: "~20 min", rating: 4.5, feedback: 112, phone: "250780000205", loc: "Gisozi" },
  { id: 6, name: "Musanze Fresh Farm (Example)", initials: "MF", color: "#2e7d32", type: "Farmer", verified: true, since: 2023, reply: "~2 hrs", rating: 4.8, feedback: 29, phone: "250780000206", loc: "Musanze" },
  { id: 7, name: "Divine U. (Example)", initials: "DU", color: "#c58b00", type: "Individual", verified: true, since: 2024, reply: "~15 min", rating: 4.9, feedback: 14, phone: "250780000207", loc: "Kimironko" },
  { id: 8, name: "BuildRight Supplies (Example)", initials: "BR", color: "#8a4b2d", type: "Business", verified: true, since: 2018, reply: "~45 min", rating: 4.4, feedback: 73, phone: "250780000208", loc: "Gikondo" },
  { id: 9, name: "TechZone Rwanda (Example)", initials: "TZ", color: "#1f6f6f", type: "Business", verified: true, since: 2022, reply: "~25 min", rating: 4.6, feedback: 52, phone: "250780000209", loc: "Nyarutarama" },
  { id: 10, name: "Patrick H. (Example)", initials: "PH", color: "#5b6b3a", type: "Individual", verified: false, since: 2026, reply: "~1 day", rating: 0, feedback: 0, phone: "250780000210", loc: "Rubavu" }
];
/* [id, cat, sub, title, titleRw, price, per, loc, minutesAgo, cond, seller, emoji, hue, top, details, desc] */
(function () {
  const R = [
    [101,"vehicles","cars","Toyota RAV4 2012, automatic","Toyota RAV4 2012, automatic",14500000,"","Kicukiro",95,"used",1,"🚙",215,true,{Make:"Toyota",Model:"RAV4",Year:"2012",Mileage:"142,000 km",Transmission:"Automatic",Fuel:"Petrol"},"Well kept, serviced every 5,000 km. Valid insurance and control technique. Example ad for the demo."],
    [102,"vehicles","cars","Toyota Corolla 2008, clean","Toyota Corolla 2008, isukuye",7800000,"","Remera",380,"used",3,"🚗",0,false,{Make:"Toyota",Model:"Corolla",Year:"2008",Mileage:"198,000 km",Transmission:"Manual",Fuel:"Petrol"},"Daily driver, new tyres in August. Price slightly negotiable. Example ad."],
    [103,"vehicles","motos","TVS HLX 125 moto, 2024","Moto TVS HLX 125, 2024",1350000,"","Nyamirambo",60,"used",3,"🏍️",30,false,{Make:"TVS",Model:"HLX 125",Year:"2024",Mileage:"9,800 km",Plate:"Registered"},"Good for moto-taxi work. Yellow card and papers ready. Example ad."],
    [104,"vehicles","cars","Hyundai Tucson 2015, 4WD","Hyundai Tucson 2015, 4WD",18900000,"","Kacyiru",1500,"used",1,"🚙",150,true,{Make:"Hyundai",Model:"Tucson",Year:"2015",Mileage:"96,000 km",Transmission:"Automatic",Fuel:"Diesel"},"Imported 2022, one owner in Rwanda. Example ad."],
    [105,"vehicles","parts","Set of 4 tyres 215/65 R16","Amapine 4 215/65 R16",320000,"","Gikondo",2900,"new",1,"🛞",260,false,{Size:"215/65 R16",Quantity:"4",Fitting:"Free in Kicukiro"},"Brand-new tyres with fitting and balancing included. Example ad."],
    [201,"property","rent","3-bed house with garden, Kimironko","Inzu y'ibyumba 3 ifite ubusitani, Kimironko",650000,"month","Kimironko",120,"",4,"🏡",25,true,{Bedrooms:"3",Bathrooms:"2",Parking:"2 cars",Furnished:"No",Water:"Tank + WASAC"},"Quiet compound, 5 min to Kimironko market. 3 months upfront. Example ad."],
    [202,"property","rent","2-bed apartment, Kacyiru","Apartment y'ibyumba 2, Kacyiru",450000,"month","Kacyiru",640,"",4,"🏢",200,false,{Bedrooms:"2",Bathrooms:"1",Floor:"2nd",Furnished:"Semi",Security:"24h guard"},"Bright apartment near the main road, backup water. Example ad."],
    [203,"property","land","Plot 20x30 m with title, Rwamagana","Ikibanza 20x30 gifite icyangombwa, Rwamagana",8500000,"","Rwamagana",4300,"",4,"🗺️",95,false,{Size:"600 m²",Title:"Freehold (example)",Zoning:"Residential",Road:"Murram, 200 m"},"Flat plot near the new school. Ask for UPI number. Example ad."],
    [204,"property","shops","Shop space on main road, Muhima","Iduka ku muhanda munini, Muhima",250000,"month","Muhima",900,"",4,"🏬",320,false,{Size:"24 m²",Floor:"Ground",Power:"Cash-power"},"High foot traffic, good for phones or cosmetics. Example ad."],
    [205,"property","shortlet","Furnished studio, nightly stay","Studio ifite ibikoresho, ku ijoro",35000,"night","Remera",300,"",7,"🛏️",280,false,{Guests:"2",WiFi:"Yes",Parking:"1"},"Near Amahoro stadium. Self check-in. Example ad."],
    [301,"phones","smartphones","iPhone 13, 128GB, 88% battery","iPhone 13, 128GB, bateri 88%",650000,"","Muhima",35,"used",2,"📱",210,true,{Brand:"Apple",Storage:"128 GB",Battery:"88%",Colour:"Midnight",Warranty:"7 days shop"},"Clean, no scratches, Face ID works. Test before you pay. Example ad."],
    [302,"phones","smartphones","Samsung Galaxy A15, sealed box","Samsung Galaxy A15, mu gikarito",185000,"","Muhima",150,"new",2,"📱",230,false,{Brand:"Samsung",Storage:"128 GB",RAM:"6 GB",Warranty:"1 year (example)"},"Brand new, dual SIM. Free screen protector. Example ad."],
    [303,"phones","smartphones","Tecno Spark 20, 256GB","Tecno Spark 20, 256GB",135000,"","Nyamirambo",500,"new",2,"📱",190,false,{Brand:"Tecno",Storage:"256 GB",RAM:"8 GB"},"Big battery, fast charging. Delivery in Kigali 1,000 RWF. Example ad."],
    [304,"phones","tablets","iPad 9th gen, 64GB Wi-Fi","iPad 9th gen, 64GB Wi-Fi",320000,"","Kicukiro",2000,"used",3,"📲",250,false,{Brand:"Apple",Storage:"64 GB",Connectivity:"Wi-Fi"},"Used by a student, with cover and charger. Example ad."],
    [305,"phones","watches","Smart watch with heart-rate, black","Isaha igezweho, umukara",45000,"","Kimironko",3100,"new",7,"⌚",170,false,{Battery:"7 days",Compatible:"Android & iPhone"},"Gift-boxed, never used. Example ad."],
    [401,"electronics","laptops","HP EliteBook i5, 16GB RAM, SSD","HP EliteBook i5, 16GB RAM, SSD",380000,"","Nyarutarama",80,"used",9,"💻",205,true,{Brand:"HP",CPU:"Core i5 8th gen",RAM:"16 GB",Storage:"256 GB SSD",Screen:"14 in"},"Ex-office laptop, new battery. 1 month shop warranty. Example ad."],
    [402,"electronics","tv","43\" smart TV, Android","Televiziyo 43\" igezweho",290000,"","Nyarutarama",700,"new",9,"📺",265,false,{Size:"43 in",Type:"Smart / Android",Warranty:"1 year (example)"},"Netflix and YouTube built in. Free delivery in Kigali. Example ad."],
    [403,"electronics","solar","Solar home kit: panel, battery, 4 bulbs","Solar yo mu rugo: panneau, bateri, amatara 4",210000,"","Huye",1800,"new",9,"☀️",45,false,{Panel:"100 W",Battery:"Lithium 30 Ah",Includes:"4 bulbs, phone charging"},"Good for areas with power cuts. Installation possible. Example ad."],
    [404,"electronics","gaming","PlayStation 5 + 2 controllers","PlayStation 5 + manette 2",520000,"","Remera",2600,"used",3,"🎮",275,false,{Edition:"Disc",Controllers:"2",Games:"FIFA, 2 others"},"Works perfectly, selling because I'm travelling. Example ad."],
    [501,"home","furniture","6-seater sofa set, grey fabric","Intebe 6 zo muri salon, ivu",750000,"","Gisozi",240,"new",5,"🛋️",30,true,{Seats:"6 (3+2+1)",Material:"Fabric, hardwood frame",Delivery:"Free in Kigali"},"Made locally, 2-week delivery. Other colours available. Example ad."],
    [502,"home","kitchen","Double-door fridge, 260L","Firigo y'imiryango 2, 260L",420000,"","Gisozi",1100,"used",5,"🧊",190,false,{Capacity:"260 L",Age:"2 years",Energy:"A+"},"Cools well, small dent on side. Example ad."],
    [503,"home","kitchen","4-burner gas cooker with oven","Cuisinière ya gaz 4 n'ifuru",260000,"","Kicukiro",3500,"new",5,"🍳",15,false,{Burners:"4 gas",Oven:"Yes",Size:"60 cm"},"Includes regulator and pipe. Example ad."],
    [504,"home","beds","6x6 bed with orthopedic mattress","Igitanda 6x6 na matela",480000,"","Gisozi",4200,"new",5,"🛏️",340,false,{Size:"6x6 ft",Wood:"Mahogany (example)",Mattress:"Orthopedic"},"Price includes mattress and delivery. Example ad."],
    [601,"fashion","women","Kitenge dresses, made to measure","Amakanzu ya kitenge adodwa",18000,"","Kimironko",200,"new",7,"👗",330,false,{Sizes:"S–XXL",Delivery:"2–3 days",Fabric:"Cotton wax print"},"Choose your fabric, we sew in 3 days. Example ad."],
    [602,"fashion","shoes","Men's leather shoes, sizes 40–45","Inkweto z'uruhu z'abagabo, 40–45",35000,"","Muhima",1400,"new",2,"👞",25,false,{Sizes:"40–45",Material:"Leather",Colours:"Black, brown"},"Made in Rwanda, comfortable for office. Example ad."],
    [603,"fashion","bags","Handwoven agaseke-style bag","Isakoshi iboshye",25000,"","Nyamirambo",2300,"new",7,"👜",50,false,{Material:"Sisal & sweetgrass",Size:"Medium"},"Handmade by a women's cooperative (example). Example ad."],
    [701,"beauty","skin","Shea & avocado body lotion set","Amavuta y'umubiri ya avoka",12000,"","Remera",900,"new",7,"🧴",100,false,{Size:"3 x 250 ml",Skin:"All types"},"Locally made, no harsh chemicals. Example ad."],
    [702,"beauty","tools","Rechargeable hair clipper kit","Imashini yogosha ishyirwamo umuriro",28000,"","Kacyiru",2800,"new",2,"✂️",200,false,{Battery:"3 hours",Includes:"8 guards"},"Good for home or small barbershop. Example ad."],
    [801,"services","cleaning","Home deep cleaning, 3-bed house","Isuku yimbitse mu rugo",30000,"","Kimihurura",180,"",7,"🧽",180,false,{Team:"3 people",Duration:"5 hours",Supplies:"Included"},"Kitchen, bathrooms, windows and sofas. Book 2 days ahead. Example ad."],
    [802,"services","events","Event photography + 100 edited photos","Gufotora ibirori + amafoto 100",150000,"","Kicukiro",1000,"",3,"📸",260,false,{Coverage:"6 hours",Delivery:"5 days",Extras:"Drone (+50k)"},"Weddings, birthdays, gusaba. Example ad."],
    [803,"services","transport","Moving truck with 3 loaders","Ikamyo yimura ibintu n'abakozi 3",60000,"","Gikondo",2200,"",1,"🚚",20,false,{Truck:"3.5 tonnes",Area:"Kigali",Loaders:"3"},"Price for one trip inside Kigali. Example ad."],
    [901,"kids","gear","Baby stroller, foldable","Igare ry'umwana rikunjwa",85000,"","Kimironko",450,"used",7,"👶",300,false,{Age:"0–3 yrs",Fold:"One hand",Condition:"Like new"},"Used for 6 months only. Example ad."],
    [902,"kids","school","School bags, primary (bulk)","Amasakoshi y'ishuri (menshi)",9000,"","Muhima",3000,"new",2,"🎒",215,false,{Min:"10 pcs",Colours:"Blue, black, pink"},"Wholesale price for schools and shops. Example ad."],
    [1001,"pets","dogs","German Shepherd puppies, vaccinated","Ibibwana bya German Shepherd byakingiwe",120000,"","Kanombe",600,"",10,"🐕",35,false,{Age:"10 weeks",Vaccinated:"Yes (example)",Gender:"2 male, 1 female"},"Healthy and playful. Vet records available. Example ad."],
    [1002,"pets","poultry","Layer hens ready to lay","Inkoko zitera amagi",7500,"","Rwamagana",1300,"",6,"🐔",45,false,{Age:"18 weeks",Breed:"Layer",Min:"20 birds"},"Price per bird. Delivery to Kigali possible. Example ad."],
    [1101,"agri","produce","Irish potatoes, 50kg sack","Ibirayi, umufuka wa 50kg",22000,"","Musanze",90,"",6,"🥔",40,true,{Variety:"Kinigi",Quantity:"50 kg",Delivery:"Kigali on Fridays"},"Fresh from the farm in Musanze. Example ad."],
    [1102,"agri","produce","Hass avocados, crate of 60","Avoka Hass, agasanduku ka 60",15000,"","Muhanga",700,"",6,"🥑",100,false,{Quantity:"~60 pcs",Grade:"Export-quality (example)"},"Ripe in 3–4 days. Example ad."],
    [1103,"agri","livestock","Friesian dairy cow, 2nd calf","Inka ya Friesian itanga amata",900000,"","Nyagatare",4000,"",6,"🐄",80,false,{Milk:"~15 L/day",Age:"4 yrs",Calving:"2nd"},"Vet-checked, insured (example). Example ad."],
    [1201,"commercial","catering","Bakery oven, 2 decks, gas","Ifuru y'imigati, 2 decks, gaz",1800000,"","Gikondo",2500,"used",8,"🍞",25,false,{Decks:"2",Fuel:"Gas",Capacity:"16 trays"},"Working well, moving to bigger oven. Example ad."],
    [1202,"commercial","salon","Hydraulic barber chair","Intebe ya salon ya hydraulic",120000,"","Remera",1600,"new",8,"💈",0,false,{Base:"Steel",Colour:"Black"},"Comfortable, strong. Delivery in Kigali. Example ad."],
    [1301,"repair","materials","Cement 50kg bag (Rwandan brand)","Isima, umufuka wa 50kg",13500,"","Gikondo",150,"new",8,"🧱",30,false,{Weight:"50 kg",Min:"10 bags",Delivery:"Free over 50 bags"},"Price per bag. Example ad."],
    [1302,"repair","materials","Iron sheets, gauge 28, per piece","Amabati gauge 28, kimwe",9000,"","Gikondo",1900,"new",8,"🏗️",210,false,{Gauge:"28",Length:"3 m",Colours:"Blue, red, green"},"Pre-painted, long-lasting. Example ad."],
    [1303,"repair","tools","Electric drill + bits set","Imashini itobora n'ibikoresho",65000,"","Kicukiro",3300,"new",8,"🛠️",55,false,{Power:"750 W",Includes:"20 bits"},"6-month warranty (example). Example ad."],
    [1401,"cvs","drivers","Driver, category B & C, 6 yrs exp","Umushoferi, B na C, imyaka 6",200000,"month","Remera",300,"",3,"🧑‍✈️",210,false,{Licence:"B, C",Experience:"6 years",Languages:"Kinyarwanda, English, French"},"Looking for full-time driver job. References available. Example CV."],
    [1402,"cvs","office","Accountant (CPA student), Excel & QuickBooks","Umucungamari (CPA), Excel na QuickBooks",350000,"month","Kacyiru",1200,"",7,"🧾",250,false,{Education:"Bachelor's in Finance",Experience:"3 years",Available:"Immediately"},"Open to full-time or part-time. Example CV."],
    [1403,"cvs","domestic","Housekeeper & nanny, live-in","Umukozi wo mu rugo, arara",70000,"month","Kanombe",2700,"",10,"🧹",120,false,{Experience:"4 years",Cooking:"Yes",Languages:"Kinyarwanda, Swahili"},"Honest and caring, references from previous family. Example CV."],
    [1501,"sports","bikes","Mountain bike, 21 gears","Igare rya mountain, vitesse 21",180000,"","Rubavu",800,"used",10,"🚲",150,false,{Frame:"Aluminium, M",Gears:"21",Brakes:"Disc"},"Great for Congo Nile Trail rides. Example ad."],
    [1502,"sports","gear","Football boots, sizes 38–44","Inkweto z'umupira, 38–44",30000,"","Nyamirambo",2100,"new",2,"⚽",120,false,{Sizes:"38–44",Studs:"Firm ground"},"Several colours. Example ad."]
  ];
  window.KUZAYO.ads = R.map(a => ({ id: a[0], cat: a[1], sub: a[2], title: a[3], titleRw: a[4], price: a[5], per: a[6], loc: a[7], mins: a[8], cond: a[9], seller: a[10], emoji: a[11], hue: a[12], top: a[13], details: a[14], desc: a[15], example: true }));
})();
window.KUZAYO.promos = [
  { id: "sell", tag: "📣 Sell faster", tagRw: "📣 Gurisha vuba", title: "Post a free ad in 2 minutes", titleRw: "Tangaza ku buntu mu minota 2", sub: "Phones, cars, houses, furniture, anything", subRw: "Telefone, imodoka, inzu, ibikoresho, byose", cta: "Post ad", ctaRw: "Tangaza", href: "post.html", bg: "linear-gradient(120deg,#1E6B52,#2E8A6A)", emoji: "📣" },
  { id: "cars", tag: "🚗 Vehicles week", tagRw: "🚗 Icyumweru cy'imodoka", title: "Verified car dealers in Kigali", titleRw: "Abacuruza imodoka bagenzuwe", sub: "Example dealers · test drive first", subRw: "Ingero · gerageza mbere yo kugura", cta: "See cars", ctaRw: "Reba imodoka", href: "category.html?c=vehicles", bg: "linear-gradient(120deg,#2D6E8E,#3A86AA)", emoji: "🚙" },
  { id: "pros", tag: "🛠️ Need a pro?", tagRw: "🛠️ Ukeneye umufundi?", title: "Book a verified pro with MoMo", titleRw: "Tumiza umufundi wagenzuwe na MoMo", sub: "Plumbers, electricians, salons", subRw: "Amazi, amashanyarazi, salon", cta: "Book a pro", ctaRw: "Tumiza", href: "services.html", bg: "linear-gradient(120deg,#9A3A1A,#C2512B)", emoji: "🔧" },
  { id: "farm", tag: "🌽 Farm to Kigali", tagRw: "🌽 Kuva mu murima", title: "Fresh produce from Musanze & Muhanga", titleRw: "Imyaka mishya ya Musanze na Muhanga", sub: "Example sellers · delivery Fridays", subRw: "Ingero · bigezwa ku wa Gatanu", cta: "Shop food", ctaRw: "Gura ibiribwa", href: "category.html?c=agri", bg: "linear-gradient(120deg,#7E5A12,#A8721C)", emoji: "🥑" },
  { id: "jobs", tag: "💼 Now hiring", tagRw: "💼 Barashaka abakozi", title: "New jobs & gigs today", titleRw: "Akazi gashya uyu munsi", sub: "Helpers, stylists, cleaners, tutors", subRw: "Abafasha, aba-salon, isuku, abarimu", cta: "Browse jobs", ctaRw: "Reba akazi", href: "jobs.html", bg: "linear-gradient(120deg,#1F1A17,#4A3A30)", emoji: "📋" }
];
