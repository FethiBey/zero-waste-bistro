/* =========================================================
   ZERO-WASTE BISTRO: CIRCULAR KITCHEN — v2.1 ENGINE
   ========================================================= */

const SAVE_KEY = 'zw_bistro_v2_save';

const TRANSLATIONS = {
    tr: {
        title: "Zero-Waste Bistro",
        sub: "Döngüsel Mutfak Simülatörü",
        selectChef: "Şefini Seç:",
        startBtn: "Oyuna Başla",
        continueBtn: "Kaldığın Yerden Devam Et",
        resetBtn: "Sıfırla",
        resetConfirm: "Kayıtlı ilerlemen sıfırlansın mı?",
        resetDone: "Oyun kaydı sıfırlandı!",
        dayPrefix: "Gün",
        phaseShift: "MESAİ",
        phaseEvening: "AKŞAM",
        btnAch: "Başarımlar",
        priorityLabel: "🎯 Öncelik için müşteriye dokun",
        aromaBadge: "🍵 Sabır Aroması",
        kitchenTitle: "Mutfak Tezgahı",
        tabGarden: "🌱 Bahçe",
        tabMarket: "🚜 Pazar",
        tabCompost: "♻️ Kompost",
        tabShelter: "❤️ Barınak",
        nextShiftBtn: "Mesaiye Başla ▶",
        gardenTitle: "Arka Bahçe (3x3)",
        gardenHint: "Tohum seçip toprağa dokun. Ertesi gün hasat et!",
        marketTitle: "Çiftçi Barnaby Pazarı",
        marketNpc: "Taze yerel malzemeler al veya kompostunu Barnaby'ye sat!",
        compostTitle: "Kompost İstasyonu",
        compostText: "Atıkları komposta dönüştür; ister bahçede gübre yap, ister Pazarda Çiftçi Barnaby'ye sat!",
        dumpCompostBtn: "Atıkları Komposta At (5 Atık = 1 Kompost)",
        shelterTitle: "Hayvan & İhtiyaç Barınağı",
        shelterText: "Mesai sonunda artan yemekleri israf etmeden barınağa bağışla.",
        donateBtn: "Artan Yemekleri Bağışla (+150 Puan/Tabak)",
        summaryTitle: "Mesai Sonu Raporu",
        summaryBtn: "Akşam Yönetimine Geç",
        achTitle: "Gelişim & Başarım Hatları",
        restTrack: "🏠 Restoran Hattı (Ambiyans Seçmek İçin Tıkla)",
        recipeTrack: "🍽️ Tarif Hattı",
        pauseTitle: "Oyun Duraklatıldı",
        resumeBtn: "Devam Et",
        audioOn: "Müzik: Açık 🔊",
        audioOff: "Müzik: Kapalı 🔇",
        menuBtn: "Ana Ekrana Dön",
        fertCount: "Kompost",
        fertModeOn: "Gübre Modu: AÇIK 🌾",
        fertModeOff: "Gübre Modu: KAPALI",
        scrapsLabel: "Organik Atık",
        leftoversLabel: "Artan Yemek",
        platesUnit: "Tabak",
        emptyPlot: "Boş Toprak",
        sproutPlot: "Filizlendi",
        readyPlot: "Hasat Et!",
        plantToast: "🌱 Tohum ekildi! Ertesi gün hasada hazır olacak.",
        fertilizedToast: "🌾 Kompost uygulandı! Bitki anında olgunlaştı (+Bonus).",
        harvestToast: "🧺 Hasat edildi!",
        noMoney: "Yetersiz bakiye!",
        noStock: "Malzeme yetersiz! Akşam pazardan al veya bahçeden hasat et.",
        noScraps: "En az 5 organik atık gerekiyor!",
        noCompost: "Elinde kompost yok! Önce Kompost sekmesinden üret.",
        compostSuccess: "♻️ 1 Kompost üretildi! (+50 Puan)",
        noLeftovers: "Bağışlanacak artan yemek yok.",
        donateSuccess: "❤️ Barınağa bağışlandı!",
        leftoverCreated: "🍽️ Sipariş dışı yemek: Artan Yemek olarak ayrıldı!",
        missedOrder: "😠 Müşteri bekleyemedi! -80 Puan",
        aromaTriggered: "🍵 Bitki çayı aroması müşteri sabrını 6 sn dondurdu!",
        buyBtn: "Satın Al",
        boughtToast: "🚜 Tedarik tamam!",
        barnabySellTitle: "♻️ Barnaby'ye Kompost Sat",
        barnabySellSub: "Adet: $20 + 75 Puan",
        sellOneBtn: "1 Sat (+$20)",
        sellAllBtn: "Hepsini Sat",
        compostSold: "🚜 Barnaby'ye kompost satıldı!",
        useInGardenBtn: "🌱 Bahçede Kullan",
        sellAtMarketBtn: "🚜 Barnaby'ye Sat",
        statsServed: "Servis Edilen Sipariş",
        statsEarnings: "Mesai Kazancı",
        statsScraps: "Çıkan Organik Atık",
        statsSurplus: "Artan Yemek (Bağışa Hazır)",
        statsNightNote: "Akşam panelinde atıkları kompostla, artan yemekleri barınağa bağışla!",
        overnightPenalty: "⚠️ Gece kalan atık/yemek cezası",
        overnightBonus: "🌿 Kusursuz Sıfır Atık Günü Bonusu",
        unlockedTag: "Açık",
        selectTag: "Seç",
        activeTag: "★ Aktif",
        lockedTag: "Kilitli",
        ambChanged: "Ambiyans değiştirildi:",
        ecoUnlocked: "🌿 50.000 Puan! Siyah Eco-Friendly Şef Üniformaları açıldı!",
        ptsUnit: "Puan",
        targetTag: "🎯 Hedef"
    },
    en: {
        title: "Zero-Waste Bistro",
        sub: "Circular Kitchen Simulator",
        selectChef: "Choose Your Chef:",
        startBtn: "Start Game",
        continueBtn: "Continue Game",
        resetBtn: "Reset",
        resetConfirm: "Reset all saved progress?",
        resetDone: "Save data reset!",
        dayPrefix: "Day",
        phaseShift: "SHIFT",
        phaseEvening: "EVENING",
        btnAch: "Tracks",
        priorityLabel: "🎯 Tap customer to prioritize",
        aromaBadge: "🍵 Patience Aroma",
        kitchenTitle: "Kitchen Counter",
        tabGarden: "🌱 Garden",
        tabMarket: "🚜 Market",
        tabCompost: "♻️ Compost",
        tabShelter: "❤️ Shelter",
        nextShiftBtn: "Start Shift ▶",
        gardenTitle: "Backyard Garden (3x3)",
        gardenHint: "Pick a seed and tap soil. Harvest the next day!",
        marketTitle: "Farmer Barnaby's Market",
        marketNpc: "Buy fresh local goods or sell your compost to Barnaby!",
        compostTitle: "Compost Station",
        compostText: "Turn scraps into compost — use it in your garden or sell it to Farmer Barnaby!",
        dumpCompostBtn: "Compost Scraps (5 Scraps = 1 Compost)",
        shelterTitle: "Animal & Food Shelter",
        shelterText: "Donate surplus plates at the end of your shift instead of wasting them.",
        donateBtn: "Donate Surplus (+150 Pts/Plate)",
        summaryTitle: "Shift Summary",
        summaryBtn: "Go to Evening Prep",
        achTitle: "Progression & Achievement Tracks",
        restTrack: "🏠 Restaurant Track (Tap to Switch Ambiance)",
        recipeTrack: "🍽️ Recipe Track",
        pauseTitle: "Game Paused",
        resumeBtn: "Resume",
        audioOn: "Music: ON 🔊",
        audioOff: "Music: OFF 🔇",
        menuBtn: "Main Menu",
        fertCount: "Compost",
        fertModeOn: "Fertilizer: ON 🌾",
        fertModeOff: "Fertilizer: OFF",
        scrapsLabel: "Organic Scraps",
        leftoversLabel: "Surplus Food",
        platesUnit: "Plates",
        emptyPlot: "Empty Soil",
        sproutPlot: "Sprouting",
        readyPlot: "Harvest!",
        plantToast: "🌱 Seed planted! Ready to harvest next day.",
        fertilizedToast: "🌾 Compost applied! Matured instantly (+Bonus).",
        harvestToast: "🧺 Harvested!",
        noMoney: "Not enough money!",
        noStock: "Low ingredients! Buy at Market or harvest in Garden.",
        noScraps: "Need at least 5 organic scraps!",
        noCompost: "No compost available! Produce some in the Compost tab first.",
        compostSuccess: "♻️ Produced 1 Compost! (+50 Pts)",
        noLeftovers: "No surplus dishes to donate.",
        donateSuccess: "❤️ Donated to shelter!",
        leftoverCreated: "🍽️ Extra dish saved as Surplus Food!",
        missedOrder: "😠 Customer left! -80 Pts",
        aromaTriggered: "🍵 Herbal Tea Aroma froze patience for 6s!",
        buyBtn: "Buy",
        boughtToast: "🚜 Restocked!",
        barnabySellTitle: "♻️ Sell Compost to Barnaby",
        barnabySellSub: "Each: $20 + 75 Pts",
        sellOneBtn: "Sell 1 (+$20)",
        sellAllBtn: "Sell All",
        compostSold: "🚜 Compost sold to Barnaby!",
        useInGardenBtn: "🌱 Use in Garden",
        sellAtMarketBtn: "🚜 Sell to Barnaby",
        statsServed: "Orders Served",
        statsEarnings: "Shift Earnings",
        statsScraps: "Organic Scraps Created",
        statsSurplus: "Surplus Dishes (Ready to Donate)",
        statsNightNote: "Use Evening Prep to compost scraps and donate surplus dishes!",
        overnightPenalty: "⚠️ Unhandled waste penalty",
        overnightBonus: "🌿 Perfect Zero-Waste Bonus",
        unlockedTag: "Unlocked",
        selectTag: "Select",
        activeTag: "★ Active",
        lockedTag: "Locked",
        ambChanged: "Ambiance switched:",
        ecoUnlocked: "🌿 50,000 Pts! Black Eco-Friendly Chef Uniforms unlocked!",
        ptsUnit: "Pts",
        targetTag: "🎯 Priority"
    }
};

const CHEFS = [
    { id: 'classic', nameTR: 'Klasik Şef', nameEN: 'Classic Chef', imgClassic: 'assets/chef_classic.jpg', imgEco: 'assets/chef_classic_eco.jpg' },
    { id: 'female', nameTR: 'Kadın Şef', nameEN: 'Female Chef', imgClassic: 'assets/chef_female_classic.jpg', imgEco: 'assets/chef_female_eco.jpg' },
    { id: 'artisan', nameTR: 'Modern Şef', nameEN: 'Modern Artisan', imgClassic: 'assets/chef_artisan.jpg', imgEco: 'assets/chef_tatted_eco.jpg' },
    { id: 'gardener', nameTR: 'Bahçıvan Şef', nameEN: 'Eco Gardener', imgClassic: 'assets/chef_eco.jpg', imgEco: 'assets/chef_gardener_eco.jpg' },
    { id: 'hijab', nameTR: 'Usta Şef', nameEN: 'Master Chef', imgClassic: 'assets/chef_hijab_classic.jpg', imgEco: 'assets/chef_hijab_eco.jpg' }
];

const RECIPES = [
    { id: 'salad', nameTR: 'Bahçe Salatası', nameEN: 'Garden Salad', img: 'assets/dish_salad.jpg', cost: { meat: 0, dairy: 0, produce: 7 }, price: 15, pts: 60, unlock: 0 },
    { id: 'juice', nameTR: 'Havuç Suyu', nameEN: 'Carrot Juice', img: 'assets/dish_juice.jpg', cost: { meat: 0, dairy: 0, produce: 5 }, price: 12, pts: 50, unlock: 0 },
    { id: 'soup', nameTR: 'Kremalı Çorba', nameEN: 'Creamy Soup', img: 'assets/dish_soup.jpg', cost: { meat: 0, dairy: 4, produce: 5 }, price: 22, pts: 80, unlock: 0 },
    { id: 'tart', nameTR: 'Sebzeli Tart', nameEN: 'Veggie Tart', img: 'assets/dish_tart.jpg', cost: { meat: 0, dairy: 8, produce: 7 }, price: 30, pts: 110, unlock: 1000 },
    { id: 'tea', nameTR: 'Bitki Çayı', nameEN: 'Herbal Tea', img: 'assets/dish_tea.jpg', cost: { meat: 0, dairy: 0, produce: 3 }, price: 18, pts: 70, unlock: 2500 },
    { id: 'stew', nameTR: 'Etli Güveç', nameEN: 'Hearty Stew', img: 'assets/dish_stew.jpg', cost: { meat: 12, dairy: 0, produce: 7 }, price: 45, pts: 160, unlock: 5000 },
    { id: 'pumpkin', nameTR: 'Balkabağı Turtası', nameEN: 'Spiced Pie', img: 'assets/dish_pumpkin.jpg', cost: { meat: 0, dairy: 8, produce: 9 }, price: 38, pts: 130, unlock: 10000 },
    { id: 'chicken', nameTR: 'Otlu Tavuk', nameEN: 'Herb Chicken', img: 'assets/dish_chicken.jpg', cost: { meat: 12, dairy: 0, produce: 5 }, price: 42, pts: 150, unlock: 20000 },
    { id: 'shepherd', nameTR: 'Çoban Turtası', nameEN: "Shepherd's Pie", img: 'assets/dish_shepherd.jpg', cost: { meat: 12, dairy: 8, produce: 7 }, price: 55, pts: 210, unlock: 35000 },
    { id: 'cheesecake', nameTR: 'Orman Cheesecake', nameEN: 'Berry Cheesecake', img: 'assets/dish_cheesecake.jpg', cost: { meat: 0, dairy: 12, produce: 9 }, price: 50, pts: 190, unlock: 50000 }
];

const CUSTOMERS = [
    { id: 'kid', name: 'Leo', roleTR: 'Mahalle Çocuğu', roleEN: 'Local Kid', img: 'assets/cust_kid.jpg', patience: 16, prefs: ['juice', 'salad', 'tart'] },
    { id: 'critic', name: 'Victor', roleTR: 'Gurme Eleştirmen', roleEN: 'Food Critic', img: 'assets/cust_critic.jpg', patience: 17, prefs: ['soup', 'stew', 'shepherd'] },
    { id: 'vlogger', name: 'Maya', roleTR: 'Eko-Vlogger', roleEN: 'Eco-Vlogger', img: 'assets/cust_vlogger.jpg', patience: 20, prefs: ['salad', 'juice', 'tea'] },
    { id: 'banker', name: 'Sterling', roleTR: 'Aceleci Bankacı', roleEN: 'Busy Banker', img: 'assets/cust_banker.jpg', patience: 13, prefs: ['stew', 'chicken', 'shepherd'] },
    { id: 'artist', name: 'Luna', roleTR: 'Sanatçı', roleEN: 'Local Artist', img: 'assets/cust_artist.jpg', patience: 24, prefs: ['salad', 'soup', 'tea', 'cheesecake'] }
];

const SEEDS = {
    carrot: { nameTR: 'Havuç', nameEN: 'Carrot', emoji: '🥕', cost: 10, yield: 16 },
    tomato: { nameTR: 'Domates', nameEN: 'Tomato', emoji: '🍅', cost: 12, yield: 20 },
    greens: { nameTR: 'Yeşil Sebze', nameEN: 'Fresh Greens', emoji: '🥬', cost: 14, yield: 24 }
};

const MARKET_ITEMS = [
    { type: 'meat', nameTR: 'Yerel Et', nameEN: 'Local Meat', emoji: '🥩', cost: 32, yield: 25 },
    { type: 'dairy', nameTR: 'Süt & Peynir', nameEN: 'Farm Dairy', emoji: '🥛', cost: 24, yield: 25 },
    { type: 'produce', nameTR: 'Taze Sebze', nameEN: 'Fresh Produce', emoji: '🥦', cost: 18, yield: 25 }
];

const RESTAURANT_TRACK = [
    { id: 'std', score: 0, titleTR: 'Klasik Bistro', titleEN: 'Classic Bistro', bg: 'assets/bg_restaurant.jpg', type: 'ambiance' },
    { id: 'upcycled', score: 3500, titleTR: 'Geri Dönüşüm', titleEN: 'Upcycled Bistro', bg: 'assets/bg_restaurant_upcycled.jpg', type: 'ambiance' },
    { id: 'rustic', score: 10000, titleTR: 'Rustik Ahşap', titleEN: 'Rustic Wood', bg: 'assets/bg_restaurant_rustic.jpg', type: 'ambiance' },
    { id: 'greenhouse', score: 30000, titleTR: 'Sera Restoran', titleEN: 'Greenhouse', bg: 'assets/bg_restaurant_greenhouse.jpg', type: 'ambiance' },
    { id: 'ecouniform', score: 50000, titleTR: 'Siyah Eko Üniforma', titleEN: 'Eco Uniforms', bg: 'assets/chef_classic_eco.jpg', type: 'perk' },
    { id: 'vip', score: 75000, titleTR: '%25 Pazar İndirimi', titleEN: '25% Farm VIP', bg: 'assets/bg_market.jpg', type: 'perk' }
];

const COMPOST_SELL_PRICE = 20;
const COMPOST_SELL_POINTS = 75;

// OYUN DURUMU
let activeLang = 'tr';
let activeChefIdx = 0;
let score = 0;
let money = 100;
let day = 1;
let phase = 'evening';
let timer = 30;
let reserves = { meat: 50, dairy: 50, produce: 65 };
let scraps = 0;
let leftovers = 0;
let fertilizer = 0;
let currentAmbiance = 'assets/bg_restaurant.jpg';
let gardenPlots = Array.from({ length: 9 }, () => ({ status: 'empty', seed: null, fertilized: false }));
let selectedSeed = 'carrot';
let fertilizerMode = false;
let ecoNotified = false;
let hasSave = false;

// Mesai geçici değişkenleri
let activeCustomers = [null, null, null];
let selectedPriority = null;
let isPaused = false;
let isMuted = false;
let gameInterval = null;
let spawnTimer = 0;
let activeAromaTimer = 0;
let shiftStats = { served: 0, earned: 0, scrapsMade: 0, leftoversMade: 0 };

let audioCtx = null;

function playPopSound(pitch = 520) {
    if (isMuted) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(190, audioCtx.currentTime + 0.065);
        gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.065);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.07);
    } catch (e) {}
}

function t(key) {
    return TRANSLATIONS[activeLang][key] || key;
}

function getChefName(chef) {
    return activeLang === 'tr' ? chef.nameTR : chef.nameEN;
}

function getChefImage(chef) {
    return score >= 50000 ? chef.imgEco : chef.imgClassic;
}

function getRecipeName(r) {
    return activeLang === 'tr' ? r.nameTR : r.nameEN;
}

// --- KAYIT SİSTEMİ ---
function saveGame() {
    const data = {
        activeLang, activeChefIdx, score, money, day, reserves,
        scraps, leftovers, fertilizer, currentAmbiance, gardenPlots, ecoNotified
    };
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
        hasSave = true;
    } catch (e) {}
}

function loadGame() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return;
        const d = JSON.parse(raw);
        if (d.activeLang) activeLang = d.activeLang;
        if (typeof d.activeChefIdx === 'number' && d.activeChefIdx < CHEFS.length) activeChefIdx = d.activeChefIdx;
        if (typeof d.score === 'number') score = d.score;
        if (typeof d.money === 'number') money = d.money;
        if (typeof d.day === 'number') day = d.day;
        if (d.reserves) reserves = d.reserves;
        if (typeof d.scraps === 'number') scraps = d.scraps;
        if (typeof d.leftovers === 'number') leftovers = d.leftovers;
        if (typeof d.fertilizer === 'number') fertilizer = d.fertilizer;
        if (d.currentAmbiance) currentAmbiance = d.currentAmbiance;
        if (Array.isArray(d.gardenPlots) && d.gardenPlots.length === 9) {
            gardenPlots = d.gardenPlots.map(p => ({
                status: p.status === 'growing' ? 'ready' : (p.status || 'empty'),
                seed: SEEDS[p.seed] ? p.seed : null,
                fertilized: !!p.fertilized
            }));
        }
        ecoNotified = !!d.ecoNotified;
        hasSave = true;
    } catch (e) {}
}

function resetSaveData() {
    if (!confirm(t('resetConfirm'))) return;
    localStorage.removeItem(SAVE_KEY);
    hasSave = false;
    score = 0;
    money = 100;
    day = 1;
    reserves = { meat: 50, dairy: 50, produce: 65 };
    scraps = 0;
    leftovers = 0;
    fertilizer = 0;
    currentAmbiance = 'assets/bg_restaurant.jpg';
    gardenPlots = Array.from({ length: 9 }, () => ({ status: 'empty', seed: null, fertilized: false }));
    ecoNotified = false;
    setLanguage(activeLang);
    showToast(t('resetDone'), 'good');
}

// --- DİL & ARAYÜZ ---
function setLanguage(code) {
    activeLang = code;
    document.getElementById('langTrBtn').classList.toggle('active', code === 'tr');
    document.getElementById('langEnBtn').classList.toggle('active', code === 'en');

    const map = {
        uiTitle: 'title',
        uiSub: 'sub',
        uiSelectChef: 'selectChef',
        uiResetBtn: 'resetBtn',
        uiBtnAch: 'btnAch',
        uiPriorityLabel: 'priorityLabel',
        patienceAromaLabel: 'aromaBadge',
        uiKitchenTitle: 'kitchenTitle',
        uiTabGarden: 'tabGarden',
        uiTabMarket: 'tabMarket',
        uiTabCompost: 'tabCompost',
        uiTabShelter: 'tabShelter',
        uiNextShiftBtn: 'nextShiftBtn',
        uiGardenTitle: 'gardenTitle',
        uiGardenHint: 'gardenHint',
        uiMarketTitle: 'marketTitle',
        marketNpcText: 'marketNpc',
        uiCompostTitle: 'compostTitle',
        uiCompostText: 'compostText',
        uiDumpCompostBtn: 'dumpCompostBtn',
        uiShelterTitle: 'shelterTitle',
        uiShelterText: 'shelterText',
        uiDonateBtn: 'donateBtn',
        uiSummaryTitle: 'summaryTitle',
        uiSummaryBtn: 'summaryBtn',
        uiAchTitle: 'achTitle',
        uiRestTrack: 'restTrack',
        uiRecipeTrack: 'recipeTrack',
        uiPauseTitle: 'pauseTitle',
        uiResumeBtn: 'resumeBtn',
        uiMenuBtn: 'menuBtn'
    };

    Object.entries(map).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(key);
    });

    document.getElementById('uiStartBtn').textContent = hasSave && day > 1 ? t('continueBtn') : t('startBtn');
    updateAudioButtons();
    renderChefSelect();

    if (document.getElementById('gameScreen').classList.contains('active')) {
        updateHUD();
        renderShiftKitchen();
        renderCustomers(true);
        renderGarden();
        renderMarket();
        renderCompostOptions();
    }
    saveGame();
}

function showToast(msg, type = '') {
    const cont = document.getElementById('toast-container');
    const div = document.createElement('div');
    div.className = `toast ${type}`;
    div.textContent = msg;
    cont.appendChild(div);
    setTimeout(() => div.remove(), 2400);
}

function renderChefSelect() {
    const grid = document.getElementById('chefSelectGrid');
    grid.innerHTML = '';
    CHEFS.forEach((chef, idx) => {
        const card = document.createElement('div');
        card.className = `chef-card ${idx === activeChefIdx ? 'selected' : ''}`;
        card.onclick = () => {
            playPopSound(600);
            activeChefIdx = idx;
            renderChefSelect();
            saveGame();
        };
        card.innerHTML = `
            <img src="${getChefImage(chef)}" alt="${getChefName(chef)}">
            <span>${getChefName(chef)}</span>
        `;
        grid.appendChild(card);
    });
}

function startGame() {
    playPopSound(650);
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    document.getElementById('ambianceImg').src = currentAmbiance;

    if (day === 1 && score === 0) {
        startShift();
    } else {
        openEveningPanel();
    }
}

// --- MESAİ SİSTEMİ ---
function getShiftDuration() {
    if (day <= 3) return 30;
    if (day <= 6) return 45;
    return 60;
}

function startShift() {
    playPopSound(580);

    if (day > 1 && phase === 'evening') {
        const leftWaste = scraps + leftovers;
        if (leftWaste > 0) {
            const pen = leftWaste * 20;
            score = Math.max(0, score - pen);
            showToast(`${t('overnightPenalty')}: -${pen} ${t('ptsUnit')}`, 'bad');
        } else {
            score += 150;
            showToast(`${t('overnightBonus')}: +150 ${t('ptsUnit')}`, 'good');
        }
    }

    phase = 'restaurant';
    isPaused = false;
    timer = getShiftDuration();
    activeCustomers = [null, null, null];
    selectedPriority = null;
    spawnTimer = 0;
    activeAromaTimer = 0;
    shiftStats = { served: 0, earned: 0, scrapsMade: 0, leftoversMade: 0 };

    document.getElementById('restaurantView').classList.add('active');
    document.getElementById('managementView').classList.remove('active');
    document.getElementById('ambianceImg').src = currentAmbiance;

    const music = document.getElementById('bgMusic');
    music.currentTime = 0;
    music.volume = 0.45;
    if (!isMuted) music.play().catch(() => {});

    spawnCustomer();
    setTimeout(() => {
        if (phase === 'restaurant' && !isPaused) spawnCustomer();
    }, 1100);

    clearInterval(gameInterval);
    gameInterval = setInterval(gameTick, 250);

    updateHUD();
    renderShiftKitchen();
    renderCustomers(true);
}

function gameTick() {
    if (isPaused || phase !== 'restaurant') return;

    timer -= 0.25;
    if (activeAromaTimer > 0) {
        activeAromaTimer = Math.max(0, activeAromaTimer - 0.25);
        document.getElementById('patienceAromaLabel').classList.toggle('hidden', activeAromaTimer <= 0);
    }

    spawnTimer += 0.25;
    if (spawnTimer >= 3.75) {
        spawnTimer = 0;
        spawnCustomer();
    }

    let changed = false;
    for (let i = 0; i < 3; i++) {
        const c = activeCustomers[i];
        if (!c) continue;
        if (activeAromaTimer <= 0) c.patienceLeft -= 0.25;

        if (c.patienceLeft <= 0) {
            activeCustomers[i] = null;
            if (selectedPriority === i) selectedPriority = null;
            score = Math.max(0, score - 80);
            showToast(t('missedOrder'), 'bad');
            changed = true;
        }
    }

    if (timer <= 0) {
        timer = 0;
        endShift();
        return;
    }

    updateHUD();
    renderCustomers(changed);
}

function spawnCustomer() {
    const emptySlots = [];
    for (let i = 0; i < 3; i++) {
        if (!activeCustomers[i]) emptySlots.push(i);
    }
    if (emptySlots.length === 0) return;

    const slot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
    const tpl = CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];
    const unlocked = RECIPES.filter(r => score >= r.unlock);
    let pool = unlocked.filter(r => tpl.prefs.includes(r.id));
    if (pool.length === 0) pool = unlocked;
    const dish = pool[Math.floor(Math.random() * pool.length)];

    activeCustomers[slot] = {
        template: tpl,
        recipe: dish,
        maxPatience: tpl.patience,
        patienceLeft: tpl.patience
    };
    renderCustomers(true);
}

function renderCustomers(rebuild = false) {
    const container = document.getElementById('ordersContainer');

    if (!rebuild) {
        for (let i = 0; i < 3; i++) {
            const c = activeCustomers[i];
            const bar = document.getElementById(`c_bar_${i}`);
            if (c && bar) {
                const pct = Math.max(0, (c.patienceLeft / c.maxPatience) * 100);
                bar.style.width = `${pct}%`;
                bar.style.backgroundColor = activeAromaTimer > 0
                    ? '#38bdf8'
                    : (pct > 50 ? '#2e7d32' : pct > 25 ? '#d97706' : '#dc2626');
            }
        }
        return;
    }

    container.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const c = activeCustomers[i];
        if (!c) {
            const spacer = document.createElement('div');
            spacer.style.visibility = 'hidden';
            container.appendChild(spacer);
            continue;
        }

        const pct = Math.max(0, (c.patienceLeft / c.maxPatience) * 100);
        const card = document.createElement('div');
        card.className = `order-card ${selectedPriority === i ? 'priority' : ''}`;
        card.onclick = () => {
            playPopSound(680);
            selectedPriority = selectedPriority === i ? null : i;
            renderCustomers(true);
        };

        const roleText = activeLang === 'tr' ? c.template.roleTR : c.template.roleEN;
        const barColor = activeAromaTimer > 0 ? '#38bdf8' : (pct > 50 ? '#2e7d32' : pct > 25 ? '#d97706' : '#dc2626');

        card.innerHTML = `
            ${selectedPriority === i ? `<span class="priority-badge">${t('targetTag')}</span>` : ''}
            <div class="order-top-pair">
                <img src="${c.template.img}" alt="${c.template.name}" class="cust-thumb">
                <img src="${c.recipe.img}" alt="${getRecipeName(c.recipe)}" class="dish-thumb">
            </div>
            <div class="order-name">${getRecipeName(c.recipe)}</div>
            <div class="order-role">${c.template.name} • ${roleText}</div>
            <div class="order-patience-bar">
                <div class="order-patience-fill" id="c_bar_${i}" style="width:${pct}%; background-color:${barColor};"></div>
            </div>
        `;
        container.appendChild(card);
    }
}

function renderShiftKitchen() {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';

    const unlocked = RECIPES.filter(r => score >= r.unlock);
    unlocked.forEach(r => {
        const canCook = reserves.produce >= r.cost.produce
            && reserves.dairy >= r.cost.dairy
            && reserves.meat >= r.cost.meat;

        const btn = document.createElement('button');
        btn.className = `recipe-btn ${canCook ? '' : 'no-stock'}`;
        btn.onclick = () => cookDish(r);

        const costs = [];
        if (r.cost.produce > 0) costs.push(`🥦${r.cost.produce}`);
        if (r.cost.dairy > 0) costs.push(`🥛${r.cost.dairy}`);
        if (r.cost.meat > 0) costs.push(`🥩${r.cost.meat}`);

        btn.innerHTML = `
            <img src="${r.img}" alt="${getRecipeName(r)}">
            <div class="recipe-info">
                <span class="recipe-name">${getRecipeName(r)}</span>
                <span class="recipe-cost">${costs.join(' ')} • $${r.price}</span>
            </div>
        `;
        grid.appendChild(btn);
    });
}

function cookDish(recipe) {
    if (reserves.produce < recipe.cost.produce || reserves.dairy < recipe.cost.dairy || reserves.meat < recipe.cost.meat) {
        playPopSound(220);
        showToast(t('noStock'), 'bad');
        return;
    }

    playPopSound(540);
    reserves.produce -= recipe.cost.produce;
    reserves.dairy -= recipe.cost.dairy;
    reserves.meat -= recipe.cost.meat;
    scraps += 1;
    shiftStats.scrapsMade += 1;

    let targetIdx = -1;
    if (selectedPriority !== null && activeCustomers[selectedPriority] && activeCustomers[selectedPriority].recipe.id === recipe.id) {
        targetIdx = selectedPriority;
    } else {
        let lowestPatience = Infinity;
        for (let i = 0; i < 3; i++) {
            const c = activeCustomers[i];
            if (c && c.recipe.id === recipe.id && c.patienceLeft < lowestPatience) {
                lowestPatience = c.patienceLeft;
                targetIdx = i;
            }
        }
    }

    if (targetIdx !== -1) {
        activeCustomers[targetIdx] = null;
        if (selectedPriority === targetIdx) selectedPriority = null;
        score += recipe.pts;
        money += recipe.price;
        shiftStats.served += 1;
        shiftStats.earned += recipe.price;

        if (recipe.id === 'tea') {
            activeAromaTimer = 6;
            document.getElementById('patienceAromaLabel').classList.remove('hidden');
            showToast(t('aromaTriggered'), 'good');
        } else {
            showToast(`+$${recipe.price} | +${recipe.pts} ${t('ptsUnit')}`, 'good');
        }
        checkScoreMilestones();
    } else {
        leftovers += 1;
        shiftStats.leftoversMade += 1;
        showToast(t('leftoverCreated'));
    }

    updateHUD();
    renderCustomers(true);
    renderShiftKitchen();
}

function checkScoreMilestones() {
    if (score >= 50000 && !ecoNotified) {
        ecoNotified = true;
        showToast(t('ecoUnlocked'), 'good');
    }
}

function endShift() {
    clearInterval(gameInterval);
    const music = document.getElementById('bgMusic');
    music.pause();
    music.currentTime = 0;

    const body = document.getElementById('summaryBody');
    body.innerHTML = `
        <div class="summary-line"><span>${t('statsServed')}</span><strong>${shiftStats.served}</strong></div>
        <div class="summary-line bonus"><span>${t('statsEarnings')}</span><strong>+$${shiftStats.earned}</strong></div>
        <div class="summary-line"><span>${t('statsScraps')}</span><strong>♻️ ${shiftStats.scrapsMade} (${scraps})</strong></div>
        <div class="summary-line highlight"><span>${t('statsSurplus')}</span><strong>🍽️ ${leftovers} ${t('platesUnit')}</strong></div>
        <p style="font-size:0.74rem; text-align:center; color:#5c3a21; font-weight:700; margin-top:4px;">${t('statsNightNote')}</p>
    `;

    document.getElementById('shiftSummaryModal').classList.add('active');
    saveGame();
}

function closeSummaryAndManage() {
    playPopSound(520);
    document.getElementById('shiftSummaryModal').classList.remove('active');
    day += 1;

    gardenPlots.forEach(plot => {
        if (plot.status === 'sprout') {
            plot.status = 'ready';
        }
    });

    openEveningPanel();
    saveGame();
}

function openEveningPanel() {
    phase = 'evening';
    document.getElementById('restaurantView').classList.remove('active');
    document.getElementById('managementView').classList.add('active');
    updateHUD();
    renderGarden();
    renderMarket();
    renderCompostOptions();
}

// --- BAHÇE ---
function renderGarden() {
    const toolbar = document.getElementById('seedToolbar');
    toolbar.innerHTML = '';
    Object.entries(SEEDS).forEach(([key, s]) => {
        const btn = document.createElement('button');
        btn.className = `seed-btn ${selectedSeed === key ? 'selected' : ''}`;
        btn.onclick = () => {
            playPopSound(600);
            selectedSeed = key;
            renderGarden();
        };
        const label = activeLang === 'tr' ? s.nameTR : s.nameEN;
        btn.textContent = `${s.emoji} ${label} ($${s.cost})`;
        toolbar.appendChild(btn);
    });

    document.getElementById('gardenFertStatus').textContent = `🌾 ${t('fertCount')}: ${fertilizer}`;
    const fertBtn = document.getElementById('uiToggleFertilizerBtn');
    fertBtn.textContent = fertilizerMode ? t('fertModeOn') : t('fertModeOff');
    fertBtn.classList.toggle('active-fert', fertilizerMode);

    const grid = document.getElementById('gardenGrid');
    grid.innerHTML = '';

    gardenPlots.forEach((plot, idx) => {
        const cell = document.createElement('div');
        cell.className = `garden-plot ${plot.status}`;
        cell.onclick = () => interactPlot(idx);

        if (plot.status === 'empty') {
            cell.innerHTML = `<span class="plot-label">${t('emptyPlot')}</span>`;
        } else if (plot.status === 'sprout') {
            const s = SEEDS[plot.seed] || SEEDS.carrot;
            cell.innerHTML = `
                <img src="assets/garden_sprout.jpg" alt="Sprout">
                <span class="plot-label">${s.emoji} ${t('sproutPlot')}</span>
            `;
        } else if (plot.status === 'ready') {
            const s = SEEDS[plot.seed] || SEEDS.carrot;
            cell.innerHTML = `
                <span class="plot-emoji">${s.emoji}</span>
                <span class="plot-label">${t('readyPlot')}</span>
            `;
        }
        grid.appendChild(cell);
    });
}

function interactPlot(idx) {
    const plot = gardenPlots[idx];

    if (plot.status === 'empty') {
        const s = SEEDS[selectedSeed];
        if (money < s.cost) {
            showToast(t('noMoney'), 'bad');
            return;
        }
        money -= s.cost;
        plot.status = 'sprout';
        plot.seed = selectedSeed;
        plot.fertilized = false;
        playPopSound(500);
        showToast(t('plantToast'), 'good');
    } else if (plot.status === 'sprout' && fertilizerMode) {
        if (fertilizer <= 0) {
            fertilizerMode = false;
            showToast(t('noCompost'), 'bad');
        } else {
            fertilizer -= 1;
            plot.status = 'ready';
            plot.fertilized = true;
            if (fertilizer <= 0) fertilizerMode = false;
            playPopSound(700);
            showToast(t('fertilizedToast'), 'good');
        }
    } else if (plot.status === 'ready') {
        const s = SEEDS[plot.seed] || SEEDS.carrot;
        const gained = s.yield + (plot.fertilized ? 10 : 0);
        reserves.produce = Math.min(100, reserves.produce + gained);
        plot.status = 'empty';
        plot.seed = null;
        plot.fertilized = false;
        playPopSound(740);
        showToast(`${t('harvestToast')} +${gained} 🥦`, 'good');
    }

    updateHUD();
    renderGarden();
    saveGame();
}

function toggleFertilizerMode() {
    if (fertilizer <= 0 && !fertilizerMode) {
        showToast(t('noCompost'), 'bad');
        return;
    }
    playPopSound(560);
    fertilizerMode = !fertilizerMode;
    renderGarden();
}

// --- PAZAR & ÇİFTÇİ BARNABY'YE KOMPOST SATIŞI ---
function renderMarket() {
    const grid = document.getElementById('marketGrid');
    grid.innerHTML = '';

    const isVip = score >= 75000;
    document.getElementById('discountBadge').classList.toggle('hidden', !isVip);

    MARKET_ITEMS.forEach(item => {
        const price = isVip ? Math.round(item.cost * 0.75) : item.cost;
        const name = activeLang === 'tr' ? item.nameTR : item.nameEN;
        const card = document.createElement('div');
        card.className = 'market-card';
        card.innerHTML = `
            <span class="mkt-icon">${item.emoji}</span>
            <h5>${name}</h5>
            <p>+${item.yield} • $${price}</p>
            <button class="secondary-btn sm-btn full-btn" onclick="buyMarketItem('${item.type}', ${price}, ${item.yield})">${t('buyBtn')}</button>
        `;
        grid.appendChild(card);
    });

    // Barnaby Kompost Alım Kutusu
    const marketInner = document.querySelector('#marketTab .tab-inner');
    if (marketInner) {
        let sellBox = document.getElementById('barnabySellBox');
        if (!sellBox) {
            sellBox = document.createElement('div');
            sellBox.id = 'barnabySellBox';
            sellBox.className = 'npc-banner';
            sellBox.style.justifyContent = 'space-between';
            sellBox.style.flexWrap = 'wrap';
            sellBox.style.gap = '8px';
            marketInner.appendChild(sellBox);
        }

        const disabledStyle = fertilizer <= 0 ? 'opacity:0.55;' : '';
        sellBox.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:2px;">
                <strong style="font-size:0.86rem;">${t('barnabySellTitle')}</strong>
                <span style="font-size:0.72rem; color:#5c3a21; font-weight:700;">
                    🌾 ${t('fertCount')}: <b>${fertilizer}</b> • ${t('barnabySellSub')}
                </span>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button class="primary-btn sm-btn" style="${disabledStyle}" onclick="sellCompostToBarnaby(false)">${t('sellOneBtn')}</button>
                ${fertilizer > 1
                    ? `<button class="secondary-btn sm-btn" onclick="sellCompostToBarnaby(true)">${t('sellAllBtn')} (+$${fertilizer * COMPOST_SELL_PRICE})</button>`
                    : ''}
            </div>
        `;
    }
}

function buyMarketItem(type, cost, amount) {
    if (money < cost) {
        showToast(t('noMoney'), 'bad');
        return;
    }
    money -= cost;
    reserves[type] = Math.min(100, reserves[type] + amount);
    playPopSound(620);
    showToast(`${t('boughtToast')} +${amount}`, 'good');
    updateHUD();
    saveGame();
}

function sellCompostToBarnaby(sellAll = false) {
    if (fertilizer <= 0) {
        playPopSound(220);
        showToast(t('noCompost'), 'bad');
        return;
    }
    const qty = sellAll ? fertilizer : 1;
    const earnedMoney = qty * COMPOST_SELL_PRICE;
    const earnedPts = qty * COMPOST_SELL_POINTS;

    fertilizer -= qty;
    if (fertilizer <= 0) fertilizerMode = false;
    money += earnedMoney;
    score += earnedPts;

    playPopSound(720);
    showToast(`${t('compostSold')} +$${earnedMoney} | +${earnedPts} ${t('ptsUnit')}`, 'good');
    checkScoreMilestones();
    updateHUD();
    renderMarket();
    renderGarden();
    saveGame();
}

// --- KOMPOST SEKMESİ & HIZLI KULLANIM / SATIŞ SEÇENEKLERİ ---
function renderCompostOptions() {
    const body = document.querySelector('#compostTab .feature-body');
    if (!body) return;

    let row = document.getElementById('compostChoiceRow');
    if (!row) {
        row = document.createElement('div');
        row.id = 'compostChoiceRow';
        row.style.display = 'grid';
        row.style.gridTemplateColumns = '1fr 1fr';
        row.style.gap = '6px';
        body.appendChild(row);
    }

    row.innerHTML = `
        <button class="secondary-btn sm-btn" onclick="goUseCompostInGarden()">${t('useInGardenBtn')}</button>
        <button class="secondary-btn sm-btn" onclick="goSellCompostInMarket()">${t('sellAtMarketBtn')} (+$${COMPOST_SELL_PRICE})</button>
    `;
}

function goUseCompostInGarden() {
    if (fertilizer > 0) fertilizerMode = true;
    switchTab('garden');
}

function goSellCompostInMarket() {
    switchTab('market');
}

function dumpScrapsToCompost() {
    if (scraps < 5) {
        showToast(t('noScraps'), 'bad');
        return;
    }
    scraps -= 5;
    fertilizer += 1;
    score += 50;
    playPopSound(660);
    showToast(t('compostSuccess'), 'good');
    checkScoreMilestones();
    updateHUD();
    renderGarden();
    renderMarket();
    saveGame();
}

function donateLeftovers() {
    if (leftovers <= 0) {
        showToast(t('noLeftovers'), 'bad');
        return;
    }
    const pts = leftovers * 150;
    leftovers = 0;
    score += pts;
    playPopSound(720);
    showToast(`${t('donateSuccess')} +${pts} ${t('ptsUnit')}`, 'good');
    checkScoreMilestones();
    updateHUD();
    saveGame();
}

function switchTab(name) {
    playPopSound(500);
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    const btnId = 'uiTab' + name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById(btnId).classList.add('active');
    document.getElementById(`${name}Tab`).classList.add('active');

    if (name === 'garden') renderGarden();
    if (name === 'market') renderMarket();
    if (name === 'compost') renderCompostOptions();
    updateHUD();
}

// --- HUD & STOK BARLARI ---
function updateBar(fillId, valId, value) {
    const fill = document.getElementById(fillId);
    const val = document.getElementById(valId);
    if (!fill || !val) return;
    const clamped = Math.max(0, Math.min(100, value));
    fill.style.width = `${clamped}%`;
    fill.style.backgroundColor = clamped > 50 ? '#22c55e' : clamped > 20 ? '#f59e0b' : '#ef4444';
    val.textContent = clamped;
}

function updateHUD() {
    const chef = CHEFS[activeChefIdx];
    document.getElementById('activeChefImg').src = getChefImage(chef);
    document.getElementById('chefNameDisplay').textContent = getChefName(chef);
    document.getElementById('dayDisplay').textContent = `${t('dayPrefix')} ${day}`;

    const badge = document.getElementById('hud-phase-badge');
    badge.textContent = phase === 'restaurant' ? t('phaseShift') : t('phaseEvening');
    badge.classList.toggle('evening', phase !== 'restaurant');

    const m = Math.floor(timer / 60);
    const s = Math.ceil(timer % 60);
    document.getElementById('timerDisplay').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    document.getElementById('moneyDisplay').textContent = `$${money}`;
    document.getElementById('scoreDisplay').textContent = `${score.toLocaleString()} ${t('ptsUnit')}`;
    document.getElementById('shiftLeftoverMini').textContent = `🍽️ ${leftovers}`;

    updateBar('bar-meat', 'val-meat', reserves.meat);
    updateBar('bar-dairy', 'val-dairy', reserves.dairy);
    updateBar('bar-produce', 'val-produce', reserves.produce);
    updateBar('mkt-bar-meat', 'mkt-val-meat', reserves.meat);
    updateBar('mkt-bar-dairy', 'mkt-val-dairy', reserves.dairy);
    updateBar('mkt-bar-produce', 'mkt-val-produce', reserves.produce);

    document.getElementById('scrapsBadge').textContent = `${t('scrapsLabel')}: ${scraps}`;
    document.getElementById('uiFertilizerCount').textContent = `${t('fertCount')}: ${fertilizer} 🌾`;
    document.getElementById('leftoversBadge').textContent = `${t('leftoversLabel')}: ${leftovers} ${t('platesUnit')}`;

    const pct = Math.min(100, (scraps / 5) * 100);
    document.getElementById('compostProgressFill').style.width = `${pct}%`;
    document.getElementById('compostProgressText').textContent = `${Math.min(scraps, 5)} / 5`;

    renderCompostOptions();
}

// --- ÇİFT HATLI BAŞARIMLAR & AMBİYANS SEÇİMİ ---
function openAchievements() {
    playPopSound(580);
    if (phase === 'restaurant') isPaused = true;
    document.getElementById('achCurrentScore').textContent = `${score.toLocaleString()} ${t('ptsUnit')}`;
    renderAchievementTracks();
    document.getElementById('achievementsModal').classList.add('active');
}

function closeAchievements() {
    playPopSound(480);
    document.getElementById('achievementsModal').classList.remove('active');
    if (phase === 'restaurant' && !document.getElementById('pauseModal').classList.contains('active')) {
        isPaused = false;
    }
}

function renderAchievementTracks() {
    const restRow = document.getElementById('restaurantTrackNodes');
    restRow.innerHTML = '';

    RESTAURANT_TRACK.forEach((item, idx) => {
        if (idx > 0) {
            const line = document.createElement('div');
            line.className = `track-connector ${score >= item.score ? 'filled' : ''}`;
            restRow.appendChild(line);
        }

        const unlocked = score >= item.score;
        const isActive = item.type === 'ambiance' && currentAmbiance === item.bg;
        const title = activeLang === 'tr' ? item.titleTR : item.titleEN;

        const node = document.createElement('div');
        node.className = `track-node ${unlocked ? 'unlocked' : ''} ${isActive ? 'active-choice' : ''}`;
        if (unlocked && item.type === 'ambiance') {
            node.style.cursor = 'pointer';
            node.onclick = () => {
                playPopSound(660);
                currentAmbiance = item.bg;
                document.getElementById('ambianceImg').src = item.bg;
                showToast(`${t('ambChanged')} ${title}`, 'good');
                renderAchievementTracks();
                saveGame();
            };
        }

        let statusTag = `<span class="node-pts">🔒 ${item.score.toLocaleString()}</span>`;
        if (isActive) statusTag = `<span class="node-tag gold">${t('activeTag')}</span>`;
        else if (unlocked && item.type === 'ambiance') statusTag = `<span class="node-tag">${t('selectTag')}</span>`;
        else if (unlocked) statusTag = `<span class="node-tag">${t('unlockedTag')}</span>`;

        node.innerHTML = `
            <img src="${item.bg}" alt="${title}">
            <span>${title}</span>
            ${statusTag}
        `;
        restRow.appendChild(node);
    });

    const recRow = document.getElementById('recipeTrackNodes');
    recRow.innerHTML = '';

    RECIPES.forEach((r, idx) => {
        if (idx > 0) {
            const line = document.createElement('div');
            line.className = `track-connector ${score >= r.unlock ? 'filled' : ''}`;
            recRow.appendChild(line);
        }

        const unlocked = score >= r.unlock;
        const node = document.createElement('div');
        node.className = `track-node recipe-node ${unlocked ? 'unlocked' : ''}`;
        node.innerHTML = `
            <img src="${r.img}" alt="${getRecipeName(r)}">
            <span>${getRecipeName(r)}</span>
            ${unlocked
                ? `<span class="node-tag">${t('unlockedTag')}</span>`
                : `<span class="node-pts">🔒 ${r.unlock.toLocaleString()}</span>`}
        `;
        recRow.appendChild(node);
    });
}

// --- PAUSE & MÜZİK ---
function openPauseMenu() {
    playPopSound(450);
    isPaused = true;
    document.getElementById('bgMusic').pause();
    updateAudioButtons();
    document.getElementById('pauseModal').classList.add('active');
}

function resumeGame() {
    playPopSound(600);
    isPaused = false;
    document.getElementById('pauseModal').classList.remove('active');
    if (phase === 'restaurant' && !isMuted) {
        document.getElementById('bgMusic').play().catch(() => {});
    }
}

function toggleAudio() {
    isMuted = !isMuted;
    const music = document.getElementById('bgMusic');
    if (isMuted) {
        music.pause();
    } else if (phase === 'restaurant' && !isPaused) {
        music.play().catch(() => {});
    }
    updateAudioButtons();
}

function updateAudioButtons() {
    const pauseBtn = document.getElementById('uiAudioToggleBtn');
    const hudBtn = document.getElementById('muteHudBtn');
    if (pauseBtn) pauseBtn.textContent = isMuted ? t('audioOff') : t('audioOn');
    if (hudBtn) hudBtn.textContent = isMuted ? '🔇' : '🔊';
}

function returnToMainMenu() {
    playPopSound(420);
    clearInterval(gameInterval);
    isPaused = false;
    const music = document.getElementById('bgMusic');
    music.pause();
    music.currentTime = 0;

    saveGame();
    document.getElementById('pauseModal').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
    document.getElementById('uiStartBtn').textContent = hasSave ? t('continueBtn') : t('startBtn');
    renderChefSelect();
}

document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    setLanguage(activeLang);
});
