// script.js

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Daily Horoscope Data (mock)
const horoscopes = {
  aries: "కొత్త ప్రారంభాలు మరియు ధైర్యమైన చర్యలకు ఈ రోజు అనువైన రోజు.",
  taurus: "ఒర్పు మరియు పట్టుదల ఈ రోజు మీకు ఫలితాలను తెస్తాయి.",
  gemini: "సంభాషణ ద్వారాలు తెరుస్తుంది; మీ నిజాన్ని చెప్పండి.",
  cancer: "మీ సంబంధాలను సంరక్షించండి, భావోద్వేగ సమతౌల్యం కీలకం.",
  leo: "మీ సృజనాత్మకత మెరుస్తుంది; ఆత్మవిశ్వాసంతో ముందుకు రావండి.",
  virgo: "వివరాలపై దృష్టి పెట్టండి; సమగ్రమైన నిర్వహణ విజయంలో సహాయపడుతుంది.",
  libra: "ఈ రోజు మీ నిర్ణయాలలో ఐక్యత మరియు సమతౌల్యాన్ని సాధించండి.",
  scorpio: "తీవ్రత మీ ఆకాంక్షను పెంపొందిస్తుంది; మీ అంతఃస్ఫూర్తిపై నమ్మకం ఉంచండి.",
  sagittarius: "సాహసికతకు పిలుపునిచ్చింది; అనూహ్యమైనది అంగీకరించండి.",
  capricorn: "కష్టపడి పనిచేయడం ఫలితాలను తెస్తుంది; మీ లక్ష్యాలకు కట్టుబడి ఉండండి.",
  aquarius: "నవీన ఆవిష్కరణ మరియు స్వాతంత్రత మీ రోజును నిర్వచిస్తాయి.",
  pisces: "కనులు మరియు ప్రత్యక్ష భావం మీ మార్గాన్ని సూచిస్తాయి."
};

const zodiacSigns = [
  {
    id: "aries",
    name: "మేషం",
    dateRange: "మార్చి 21 - ఏప్రిల్ 19",
    icon: "fa-ram",
    traits: "ఆత్మవిశ్వాసపూరితులు, ధైర్యవంతులు, ఉత్సాహభరితులు",
    love: "సింహం మరియు ధనుస్సుతో అనుకూలత",
    career: "మహత్తర నాయకులు మరియు ఆవిష్కర్తలు"
  },
  {
    id: "taurus",
    name: "వృషభం",
    dateRange: "ఏప్రిల్ 20 - మే 20",
    icon: "fa-bull",
    traits: "నమ్మకమైన, ఓపికగల, ఆచరణాత్మక",
    love: "కన్యా మరియు మకరంతో అనుకూలత",
    career: "ఆర్థిక రంగంలో మరియు కళల్లో నైపుణ్యం కలిగి ఉన్నారు"
  },
  {
    id: "gemini",
    name: "మిథునం",
    dateRange: "మే 21 - జూన్ 20",
    icon: "fa-twins",
    traits: "అనుకూలించగలిగిన, ఆసక్తితో నిండిన, చతురులైన",
    love: "తుల మరియు కుంభంతో అనుకూలత",
    career: "చురుకైన కమ్యూనికేటర్లు మరియు రచయితలు"
  },
  {
    id: "cancer",
    name: "కర్కాటకం",
    dateRange: "జూన్ 21 - జూలై 22",
    icon: "fa-crab",
    traits: "భావోద్వేగభరితులు, అంతఃదృష్టిగలవారు, రక్షణాత్మకులు",
    love: "వృశ్చికం మరియు మీనతో అనుకూలత",
    career: "పరిచర్య నిపుణులు మరియు కళాకారులు"
  },
  {
    id: "leo",
    name: "సింహం",
    dateRange: "జూలై 23 - ఆగస్టు 22",
    icon: "fa-lion",
    traits: "ప్రశంసతో నిండి, హృదయపూరితులు, సృజనాత్మకులు",
    love: "మేషం మరియు ధనుస్సుతో అనుకూలత",
    career: "సహజ నాయకులు మరియు ఆర్టిస్టులు"
  },
  {
    id: "virgo",
    name: "కన్యా",
    dateRange: "ఆగస్టు 23 - సెప్టెంబరు 22",
    icon: "fa-maiden",
    traits: "విశ్లేషణాత్మకులు, దయగలవారు, కఠినపనిలో నిష్ణాతులు",
    love: "వృషభం మరియు మకరంతో అనుకూలత",
    career: "సేవా రంగంలో మరియు ఆరోగ్య సంరక్షణలో నైపుణ్యంతో ఉన్నారు"
  },
  {
    id: "libra",
    name: "తులం",
    dateRange: "సెప్టెంబరు 23 - అక్టోబరు 22",
    icon: "fa-scales",
    traits: "నాజూకత, ఆకర్షణీయత, సామాజికత",
    love: "మిథునం మరియు కుంభంతో అనుకూలత",
    career: "న్యాయవాదులు మరియు కళాకారులు"
  },
  {
    id: "scorpio",
    name: "వృశ్చికం",
    dateRange: "అక్టోబరు 23 - నవంబరు 21",
    icon: "fa-scorpion",
    traits: "ఉత్సాహంతో నిండిన, పరిష్కారశీల, ధైర్యవంతులు",
    love: "కర్కాటకం మరియు మీనతో అనుకూలత",
    career: "గవేషణ మరియు వ్యూహాత్మకతలో ప్రతిభ"
  },
  {
    id: "sagittarius",
    name: "ధనుస్సు",
    dateRange: "నవంబరు 22 - డిసెంబరు 21",
    icon: "fa-archer",
    traits: "ఆశావాది, సాహసోపేత, నిజాయితీ గలవారు",
    love: "మేషం మరియు సింహంతో అనుకూలత",
    career: "ప్రయాణ మరియు తత్వ శాస్త్ర ప్రేమికులు"
  },
  {
    id: "capricorn",
    name: "మకర",
    dateRange: "డిసెంబరు 22 - జనవరి 19",
    icon: "fa-goat",
    traits: "శ్రద్ధగలవారు, బాధ్యతాయుతులు, ఆశావహులు",
    love: "వృషభం మరియు కన్యాతో అనుకూలత",
    career: "వాణిజ్యం మరియు మేనేజ్‌మెంట్‌లో పరిపక్వత"
  },
  {
    id: "aquarius",
    name: "కుంభం",
    dateRange: "జనవరి 20 - ఫిబ్రవరి 18",
    icon: "fa-water",
    traits: "క్రాంతికారి ఆవిష్కర్తలు, స్వతంత్రవాదులు, మానవతా ప్రేమతో కూడుకున్నవారు",
    love: "మిథునం మరియు తులంతో అనుకూలత",
    career: "విజ్ఞానవేత్తలు మరియు దృష్టికోణవేత్తలు"
  },
  {
    id: "pisces",
    name: "మీనం",
    dateRange: "ఫిబ్రవరి 19 - మార్చి 20",
    icon: "fa-fish",
    traits: "కరుణాశీలులు, కళారూపప్రేమికులు, అంతఃదృష్టిగలవారు",
    love: "కర్కాటకం మరియు వృశ్చికంతో అనుకూలత",
    career: "సృజనాత్మకత మరియు ప్రకృతిపరిరక్షణ రంగాలు"
  }
];

// Replace icon with FA icon classes
const faIconMap = {
  "fa-ram": "fa-solid fa-bullhorn",
  "fa-bull": "fa-solid fa-bull",
  "fa-twins": "fa-solid fa-venus-mars",
  "fa-crab": "fa-solid fa-spider",
  "fa-lion": "fa-solid fa-dragon",
  "fa-maiden": "fa-solid fa-female",
  "fa-scales": "fa-solid fa-balance-scale",
  "fa-scorpion": "fa-solid fa-skull-crossbones",
  "fa-archer": "fa-solid fa-bow-arrow",
  "fa-goat": "fa-solid fa-mountain",
  "fa-water": "fa-solid fa-water",
  "fa-fish": "fa-solid fa-fish"
};

// For demo: Simplify icons - use zodiac symbols from Unicode or FontAwesome if available
const zodiacUnicode = {
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpio: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓"
};

function populateZodiacGrid() {
  const grid = document.getElementById('zodiac-grid');
  zodiacSigns.forEach(sign => {
    const card = document.createElement('div');
    card.classList.add('zodiac-card');
    card.innerHTML = `
      <h3>${zodiacUnicode[sign.id]} ${sign.name}</h3>
      <p><strong>తేదీ:</strong> ${sign.dateRange}</p>
      <p><strong>లక్షణాలు:</strong> ${sign.traits}</p>
      <p><strong>ప్రేమ:</strong> ${sign.love}</p>
      <p><strong>వృత్తి:</strong> ${sign.career}</p>
    `;
    grid.appendChild(card);
  });
}

function populateDailyHoroscope(date) {
  const container = document.getElementById('horoscope-container');
  container.innerHTML = ''; // Clear previous

  zodiacSigns.forEach(sign => {
    const card = document.createElement('div');
    card.classList.add('horoscope-card');
    card.innerHTML = `
      <h3>${sign.name}</h3>
      <p>${horoscopes[sign.id]}</p>
    `;
    container.appendChild(card);
  });
}

// Set max date for horoscope date input to today
const horoscopeDateInput = document.getElementById('horoscope-date');
const todayISO = new Date().toISOString().split('T')[0];
horoscopeDateInput.setAttribute('max', todayISO);
horoscopeDateInput.value = todayISO;

// On date change, update horoscope (currently static, can extend to API)
horoscopeDateInput.addEventListener('change', (e) => {
  populateDailyHoroscope(e.target.value);
});

// Initial population
populateDailyHoroscope(todayISO);
populateZodiacGrid();

// Birth Chart Calculator - simple mock
const birthChartForm = document.getElementById('birth-chart-form');
const birthChartResult = document.getElementById('birth-chart-result');

birthChartForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = birthChartForm.name.value.trim();
  const birthdate = birthChartForm.birthdate.value;
  const birthtime = birthChartForm.birthtime.value;
  const birthplace = birthChartForm.birthplace.value.trim();

  if (!name || !birthdate || !birthtime || !birthplace) {
    birthChartResult.textContent = "దయచేసి అన్ని ఖాళీలను నింపండి.";
    return;
  }

  // Mock birth chart calculation
  birthChartResult.innerHTML = `
    <h3>${name} యొక్క జన్మ చార్ట్</h3>
    <p><strong>పుట్టిన తేదీ:</strong> ${birthdate}</p>
    <p><strong>పుట్టిన సమయం:</strong> ${birthtime}</p>
    <p><strong>పుట్టిన ప్రదేశం:</strong> ${birthplace}</p>
    <p>మీ సూర్య రాశి <em>${getSunSign(birthdate)}</em>.</p>
    <p>మరింత వివరమైన జన్మ చార్ట్ లెక్కింపులు త్వరలో వస్తాయి!</p>
  `;
});

function getSunSign(dateString) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'మేషం';
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'వృషభం';
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'మిథునం';
  else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'కర్కాటకం';
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'సింహం';
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'కన్యా';
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'తులం';
  else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'వృశ్చికం';
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'ధనుస్సు';
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'మకర';
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'కుంభం';
  else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'మీనం';
  else return 'Unknown';
}

// Blog posts mock data
const blogPosts = [
  {
    title: "మీ సూర్యరాశి శక్తి",
    date: "2025-07-10",
    excerpt: "మీ సూర్యరాశి మీ వ్యక్తిత్వం మరియు జీవన మార్గంపై ఎలా ప్రభావితం చేస్తుందో తెలుసుకోండి.",
    url: "#"
  },
  {
    title: "మీ చంద్రరాశిని అర్థం చేసుకోండి",
    date: "2025-06-22",
    excerpt: "మీ చంద్రరాశితో మీ జ్యోతిష్య చార్ట్‌లోని భావోద్వేగ కేంద్రాన్ని కనుగొనండి.",
    url: "#"
  },
  {
    title: "బుధ రిట్రోగ్రేడ్: కల్పనా లేదా వాస్తవం",
    date: "2025-06-05",
    excerpt: "బుధ రిట్రోగ్రేడ్ నిజంగా అంత చెడా? జ్యోతిషశాస్త్రం ఏమనుకుంటుందో తెలుసుకోండి.",
    url: "#"
  }
];

function populateBlog() {
  const container = document.getElementById('blog-container');
  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    card.innerHTML = `
      <h3>${post.title}</h3>
      <small>${new Date(post.date).toLocaleDateString()}</small>
      <p>${post.excerpt}</p>
      <a href="${post.url}" class="btn" target="_blank" rel="noopener noreferrer">ఇంకింత చదవండి</a>
    `;
    container.appendChild(card);
  });
}

populateBlog();

// Contact Form submission - simple demo validation & alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm['contact-name'].value.trim();
  const email = contactForm['contact-email'].value.trim();
  const message = contactForm['contact-message'].value.trim();

  if (!name || !email || !message) {
    alert("దయచేసి అన్ని ఖాళీలను నింపండి.");
    return;
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("దయచేసి చెల్లనిదైన ఈమెయిల్ నమోదు చేయండి.");
    return;
  }

  alert(`ధన్యవాదాలు, ${name}! మీ సందేశం పంపబడింది.`);
  contactForm.reset();
});