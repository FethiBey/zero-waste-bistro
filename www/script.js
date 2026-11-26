/* =========================================================
   ZERO-WASTE BISTRO: CIRCULAR KITCHEN — v3.0 ENGINE
   ========================================================= */

const SLOTS_KEY = 'zw_bistro_v3_slots';
const MAX_SLOTS = 5;
const MAX_RESERVE = 150;
const COMPOST_SELL_PRICE = 20;
const COMPOST_SELL_POINTS = 75;
const AROMA_COST = 30;

const TRANSLATIONS = {
    tr: {
        title: "🌿 Zero-Waste Bistro",
        sub: "Döngüsel Gastronomi & Sürdürülebilir Mutfak Simülatörü",
        slotsTitle: "💾 Oyun Kayıtları (5 Slot)",
        slotsHint: "Yeni oyun için boş slota, devam etmek için kayıtlı slota tıkla",
        emptySlotLabel: "+ Boş Kayıt",
        slotPrefix: "Slot",
        deleteConfirm: "Bu kayıt slotu kalıcı olarak silinsin mi?",
        deletedToast: "Kayıt slotu silindi.",
        step1Title: "1. Şef Kimliği",
        nicknameLabel: "Oyuncu Adı",
        selectChef: "Şef Avatarı Seç",
        step2Title: "2. Başlangıç Güçlendirmesi",
        philosophySub: "Bistronun gıda israfıyla nasıl savaşacağını seç:",
        startNewBtn: "▶ Yeni Bistro Başlat",
        continueSlotBtn: "▶ Kayıtlı Oyuna Devam Et",
        defaultName: "Chef Fethi",
        dayPrefix: "Gün",
        phaseShift: "GÜNDÜZ MESAİSİ",
        phaseEvening: "AKŞAM HAZIRLIĞI",
        btnAch: "Başarımlar",
        btnChars: "Karakterler",
        aromaBtn: "💧 Sabır Aroması ($30)",
        aromaActive: "💧 Aroma Aktif!",
        pauseBtn: "⏸️ Duraklat",
        priorityLabel: "🎯 Öncelik için müşteriye dokun",
        kitchenTitle: "🍳 Mutfak Menüsü — Pişirmek için yemeğe dokun",
        scrapsShort: "Atık",
        leftoversShort: "Artan",
        tabGarden: "🌱 Bahçe",
        tabMarket: "🚜 Pazar",
        tabCompost: "♻️ Kompost",
        tabShelter: "❤️ Barınak",
        nextShiftBtn: "▶ Mesaiye Başla",
        gardenTitle: "🌱 Arka Bahçe (3x3)",
        gardenHint: "Tohum seçip toprağa dokun. Ertesi gün hasat et!",
        marketTitle: "Çiftçi Barnaby'nin Pazarı",
        marketNpc: "Taze yerel malzemeler al veya kompostunu Barnaby'ye sat!",
        compostTitle: "♻️ Kompost İstasyonu",
        compostText: "Atıkları komposta çevir; ister bahçede gübre yap, ister Pazarda Barnaby'ye sat!",
        dumpCompostBtn: "Atıkları Komposta At (5 Atık = 1 Kompost)",
        shelterTitle: "❤️ Hayvan & İhtiyaç Barınağı",
        shelterText: "Mesai sonunda artan yemekleri israf etmeden barınağa bağışla.",
        donateBtn: "Artan Yemekleri Bağışla",
        reservesTitle: "📦 Mutfak Stokları",
        meatLabel: "🥩 Et & Tavuk",
        dairyLabel: "🥛 Süt & Yumurta",
        produceLabel: "🥦 Sebze & Yeşillik",
        wasteTitle: "♻️ Atık & Sıfır İsraf",
        sideScrapsLabel: "Organik Atık:",
        sideLeftoversLabel: "Artan Yemek:",
        sideFertLabel: "Hazır Kompost:",
        sideWarn: "⚠️ Günü bitirmeden atıkları kompostla ve artan yemekleri bağışla!",
        summaryTitle: "Mesai Sonu Raporu",
        summaryBtn: "Akşam Yönetimine Geç",
        achTitle: "Gelişim & Başarım Hatları",
        restTrack: "🏠 Restoran Hattı (Ambiyans Seçmek İçin Tıkla)",
        recipeTrack: "🍽️ Tarif Hattı",
        charsTitle: "📖 Müşteri & Karakter Rehberi",
        pauseTitle: "Oyun Duraklatıldı",
        resumeBtn: "Devam Et",
        audioOn: "Müzik: Açık 🔊",
        audioOff: "Müzik: Kapalı 🔇",
        menuBtn: "Ana Ekrana Dön (Slotlara)",
        fertCount: "Hazır Kompost",
        fertModeOn: "Gübre Modu: AÇIK 🌾",
        fertModeOff: "Gübre Modu: KAPALI",
        scrapsLabel: "Organik Atık",
        leftoversLabel: "Artan Yemek",
        platesUnit: "Tabak",
        emptyPlot: "Boş Toprak",
        sproutPlot: "Filizlendi",
        readyPlot: "Hasat Et!",
        plantToast: "🌱 Tohum ekildi! Ertesi gün hasada hazır.",
        fertilizedToast: "🌾 Kompost uygulandı! Anında olgunlaştı (+Bonus).",
        harvestToast: "🧺 Hasat edildi!",
        noMoney: "Yetersiz bakiye!",
        noStock: "Malzeme yetersiz! Akşam pazardan al veya bahçeden hasat et.",
        alreadyCooking: "🔥 Bu yemek şu an ocakta pişiyor!",
        noScraps: "En az 5 organik atık gerekiyor!",
        noCompost: "Elinde hazır kompost yok!",
        compostSuccess: "♻️ 1 Kompost üretildi! (+50 Puan)",
        noLeftovers: "Bağışlanacak artan yemek yok.",
        donateSuccess: "❤️ Barınağa bağışlandı!",
        leftoverCreated: "🍽️ Sipariş dışı yemek artan olarak ayrıldı!",
        missedOrder: "😠 Müşteri bekleyemedi! Seri sıfırlandı (-80 Puan)",
        aromaTriggered: "💧 Sabır Aroması aktif! Müşteri sabrı 10 sn donduruldu!",
        teaAromaTriggered: "🍵 Bitki çayı aroması müşteri sabrını 6 sn dondurdu!",
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
        statsAutoSurplus: "Gün Sonu Kalan Tencere Yemeği",
        statsTotalSurplus: "Barınağa Hazır Toplam Artan",
        statsNightNote: "Akşam panelinde atıkları kompostla ve artan yemekleri barınağa bağışla!",
        overnightPenalty: "⚠️ Gece bırakılan atık/yemek cezası",
        overnightBonus: "🌿 Kusursuz Sıfır Atık Günü Bonusu",
        unlockedTag: "Açık",
        selectTag: "Seç",
        activeTag: "★ Aktif",
        lockedShort: "Kilitli",
        ambChanged: "Ambiyans değiştirildi:",
        ecoUnlocked: "🌿 50.000 Puan! Siyah Eco-Friendly Şef Üniforması açıldı!",
        ptsUnit: "Puan",
        targetTag: "🎯 Öncelik",
        streakLabel: "Seri",
        doubleScore: "2x Puan",
        uniformClassic: "Klasik Beyaz Üniforma",
        uniformEco: "🌿 Siyah Eko-Dostu Üniforma",
        cdLines: ["Önlükler hazır, malzemeler taze!", "Ocaklar yandı, sıfır atık başlasın!", "Kapılar açılıyor, iyi servisler!"],
        cdGo: "BAŞLA!",
        patienceText: "Sabır",
        favsText: "Favoriler"
    },
    en: {
        title: "🌿 Zero-Waste Bistro",
        sub: "Circular Gastronomy & Sustainable Kitchen Tycoon",
        slotsTitle: "💾 Save Slots (5 Careers)",
        slotsHint: "Tap an empty slot to start new, or a saved slot to continue",
        emptySlotLabel: "+ Empty Slot",
        slotPrefix: "Slot",
        deleteConfirm: "Permanently delete this save slot?",
        deletedToast: "Save slot deleted.",
        step1Title: "1. Chef Identity",
        nicknameLabel: "Player Nickname",
        selectChef: "Choose Chef Avatar",
        step2Title: "2. Starting Philosophy",
        philosophySub: "Choose how your bistro fights food waste:",
        startNewBtn: "▶ Start New Bistro",
        continueSlotBtn: "▶ Continue Saved Bistro",
        defaultName: "Chef Fethi",
        dayPrefix: "Day",
        phaseShift: "DAY SHIFT",
        phaseEvening: "EVENING PREP",
        btnAch: "Milestones",
        btnChars: "Characters",
        aromaBtn: "💧 Patience Aroma ($30)",
        aromaActive: "💧 Aroma Active!",
        pauseBtn: "⏸️ Pause",
        priorityLabel: "🎯 Tap customer to prioritize",
        kitchenTitle: "🍳 Kitchen Menu — Tap a dish to cook & serve",
        scrapsShort: "Scraps",
        leftoversShort: "Leftovers",
        tabGarden: "🌱 Garden",
        tabMarket: "🚜 Market",
        tabCompost: "♻️ Compost",
        tabShelter: "❤️ Shelter",
        nextShiftBtn: "▶ Start Shift",
        gardenTitle: "🌱 Backyard Garden (3x3)",
        gardenHint: "Pick a seed and tap soil. Harvest the next day!",
        marketTitle: "Old Barnaby's Farm Market",
        marketNpc: "Buy fresh local goods or sell your compost to Barnaby!",
        compostTitle: "♻️ Compost Station",
        compostText: "Turn scraps into compost — use in Garden or sell to Farmer Barnaby!",
        dumpCompostBtn: "Compost Scraps (5 Scraps = 1 Compost)",
        shelterTitle: "❤️ Community & Animal Shelter",
        shelterText: "Donate surplus plates at the end of your shift instead of wasting them.",
        donateBtn: "Donate Surplus Dishes",
        reservesTitle: "📦 Kitchen Reserves",
        meatLabel: "🥩 Meat & Poultry",
        dairyLabel: "🥛 Dairy & Eggs",
        produceLabel: "🥦 Produce & Veggies",
        wasteTitle: "♻️ Waste & Zero-Waste",
        sideScrapsLabel: "Organic Scraps:",
        sideLeftoversLabel: "Leftover Dishes:",
        sideFertLabel: "Ready Compost:",
        sideWarn: "⚠️ Compost scraps & donate leftovers before ending the day!",
        summaryTitle: "Shift Summary",
        summaryBtn: "Go to Evening Prep",
        achTitle: "Progression & Achievement Tracks",
        restTrack: "🏠 Restaurant Track (Tap to Switch Ambiance)",
        recipeTrack: "🍽️ Recipe Track",
        charsTitle: "📖 Customer & Character Guide",
        pauseTitle: "Game Paused",
        resumeBtn: "Resume",
        audioOn: "Music: ON 🔊",
        audioOff: "Music: OFF 🔇",
        menuBtn: "Main Menu (Save Slots)",
        fertCount: "Ready Compost",
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
        alreadyCooking: "🔥 This dish is already cooking!",
        noScraps: "Need at least 5 organic scraps!",
        noCompost: "No ready compost available!",
        compostSuccess: "♻️ Produced 1 Compost! (+50 Pts)",
        noLeftovers: "No surplus dishes to donate.",
        donateSuccess: "❤️ Donated to shelter!",
        leftoverCreated: "🍽️ Extra dish saved as Surplus Food!",
        missedOrder: "😠 Customer left! Streak reset (-80 Pts)",
        aromaTriggered: "💧 Patience Aroma active! Timers frozen for 10s!",
        teaAromaTriggered: "🍵 Herbal Tea Aroma froze patience for 6s!",
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
        statsAutoSurplus: "End-of-Day Kitchen Surplus",
        statsTotalSurplus: "Total Surplus Ready to Donate",
        statsNightNote: "Compost your scraps and donate surplus dishes in Evening Prep!",
        overnightPenalty: "⚠️ Unhandled waste penalty",
        overnightBonus: "🌿 Perfect Zero-Waste Bonus",
        unlockedTag: "Unlocked",
        selectTag: "Select",
        activeTag: "★ Active",
        lockedShort: "Locked",
        ambChanged: "Ambiance switched:",
        ecoUnlocked: "🌿 50,000 Pts! Black Eco-Friendly Chef Uniform unlocked!",
        ptsUnit: "Pts",
        targetTag: "🎯 Priority",
        streakLabel: "Streak",
        doubleScore: "2x Score",
        uniformClassic: "Classic White Uniform",
        uniformEco: "🌿 Black Eco-Friendly Uniform",
        cdLines: ["Aprons tied, fresh ingredients ready!", "Stoves hot, zero-waste kitchen ON!", "Doors opening, have a great shift!"],
        cdGo: "GO!",
        patienceText: "Patience",
        favsText: "Favorites"
    }
};

const PHILOSOPHIES = [
    {
        id: 'compost',
        icon: '🌱',
        nameTR: 'Kompost Ustası',
        nameEN: 'Compost Master',
        descTR: '2 hazır kompost ile başla ve her bahçe hasadında +5 bonus sebze kazan.',
        descEN: 'Start with 2 ready Compost & earn +5 bonus Produce per harvest.'
    },
    {
        id: 'shelter',
        icon: '❤️',
        nameTR: 'Barınak Kahramanı',
        nameEN: 'Shelter Hero',
        descTR: 'Barınağa yapılan her yemek bağışından +%25 bonus İtibar Puanı kazan.',
        descEN: 'Earn +25% bonus Reputation Score from every Shelter donation.'
    },
    {
        id: 'bargainer',
        icon: '🌾',
        nameTR: 'Yerel Pazarlıkçı',
        nameEN: 'Local Bargainer',
        descTR: "Çiftçi Barnaby'nin pazarında tüm alışverişlerde kalıcı %15 indirim al.",
        descEN: "Get a permanent 15% discount at Old Barnaby's Farm Market."
    }
];

const CHEFS = [
    { id: 'classic', nameTR: 'Klasik Şef', nameEN: 'Classic Chef', imgClassic: 'assets/chef_classic.jpg', imgEco: 'assets/chef_classic_eco.jpg' },
    { id: 'female', nameTR: 'Kadın Şef', nameEN: 'Female Chef', imgClassic: 'assets/chef_female_classic.jpg', imgEco: 'assets/chef_female_eco.jpg' },
    { id: 'gardener', nameTR: 'Bahçıvan', nameEN: 'Eco-Gardener', imgClassic: 'assets/chef_eco.jpg', imgEco: 'assets/chef_gardener_eco.jpg' },
    { id: 'artisan', nameTR: 'Modern Şef', nameEN: 'Modern Artisan', imgClassic: 'assets/chef_artisan.jpg', imgEco: 'assets/chef_tatted_eco.jpg' },
    { id: 'hijab', nameTR: 'Usta Şef', nameEN: 'Master Chef', imgClassic: 'assets/chef_hijab_classic.jpg', imgEco: 'assets/chef_hijab_eco.jpg' }
];

// Sebze giderleri -3 düşürülmüş + her tarife özel 1.0 - 3.0 sn hazırlık süresi (prepTime)
const RECIPES = [
    { id: 'salad', nameTR: 'Bahçe Salatası', nameEN: 'Garden Salad', img: 'assets/dish_salad.jpg', cost: { meat: 0, dairy: 0, produce: 7 }, price: 15, pts: 60, unlock: 0, prepTime: 1.5 },
    { id: 'juice', nameTR: 'Havuç Suyu', nameEN: 'Carrot Juice', img: 'assets/dish_juice.jpg', cost: { meat: 0, dairy: 0, produce: 5 }, price: 12, pts: 50, unlock: 0, prepTime: 1.0 },
    { id: 'soup', nameTR: 'Kremalı Çorba', nameEN: 'Carrot Soup', img: 'assets/dish_soup.jpg', cost: { meat: 0, dairy: 4, produce: 5 }, price: 22, pts: 80, unlock: 0, prepTime: 1.8 },
    { id: 'tart', nameTR: 'Sebzeli Tart', nameEN: 'Veggie Tart', img: 'assets/dish_tart.jpg', cost: { meat: 0, dairy: 8, produce: 7 }, price: 30, pts: 110, unlock: 1000, prepTime: 2.0 },
    { id: 'tea', nameTR: 'Bitki Çayı', nameEN: 'Herbal Tea', img: 'assets/dish_tea.jpg', cost: { meat: 0, dairy: 0, produce: 3 }, price: 18, pts: 70, unlock: 2500, prepTime: 1.2 },
    { id: 'stew', nameTR: 'Etli Güveç', nameEN: 'Hearty Stew', img: 'assets/dish_stew.jpg', cost: { meat: 12, dairy: 0, produce: 7 }, price: 45, pts: 160, unlock: 5000, prepTime: 2.6 },
    { id: 'pumpkin', nameTR: 'Balkabağı Turtası', nameEN: 'Spiced Pie', img: 'assets/dish_pumpkin.jpg', cost: { meat: 0, dairy: 8, produce: 9 }, price: 38, pts: 130, unlock: 10000, prepTime: 2.2 },
    { id: 'chicken', nameTR: 'Otlu Tavuk', nameEN: 'Herb Chicken', img: 'assets/dish_chicken.jpg', cost: { meat: 12, dairy: 0, produce: 5 }, price: 42, pts: 150, unlock: 20000, prepTime: 2.5 },
    { id: 'shepherd', nameTR: 'Çoban Turtası', nameEN: "Shepherd's Pie", img: 'assets/dish_shepherd.jpg', cost: { meat: 12, dairy: 8, produce: 7 }, price: 55, pts: 210, unlock: 35000, prepTime: 3.0 },
    { id: 'cheesecake', nameTR: 'Orman Cheesecake', nameEN: 'Berry Cheesecake', img: 'assets/dish_cheesecake.jpg', cost: { meat: 0, dairy: 12, produce: 9 }, price: 50, pts: 190, unlock: 50000, prepTime: 2.8 }
];

const CUSTOMERS = [
    { id: 'kid', name: 'Leo', roleTR: 'Mahalle Çocuğu', roleEN: 'Local Kid', img: 'assets/cust_kid.jpg', patience: 18, prefs: ['juice', 'salad', 'tart'] },
    { id: 'critic', name: 'Victor', roleTR: 'Gurme Eleştirmen', roleEN: 'Food Critic', img: 'assets/cust_critic.jpg', patience: 18, prefs: ['soup', 'stew', 'shepherd'] },
    { id: 'vlogger', name: 'Maya', roleTR: 'Eco-Vlogger', roleEN: 'Eco-Vlogger', img: 'assets/cust_vlogger.jpg', patience: 21, prefs: ['salad', 'juice', 'tea'] },
    { id: 'banker', name: 'Sterling', roleTR: 'Aceleci Bankacı', roleEN: 'Busy Banker', img: 'assets/cust_banker.jpg', patience: 15, prefs: ['stew', 'chicken', 'shepherd'] },
    { id: 'artist', name: 'Luna', roleTR: 'Sanatçı', roleEN: 'Artist', img: 'assets/cust_artist.jpg', patience: 24, prefs: ['salad', 'soup', 'tea', 'cheesecake'] }
];

// Elma tamamen çıkarıldı: Havuç, Domates ve Yeşil Sebze
const SEEDS = {
    carrot: { nameTR: 'Havuç', nameEN: 'Carrot', emoji: '🥕', cost: 10, yield: 18 },
    tomato: { nameTR: 'Domates', nameEN: 'Tomato', emoji: '🍅', cost: 12, yield: 22 },
    greens: { nameTR: 'Yeşil Sebze', nameEN: 'Fresh Greens', emoji: '🥬', cost: 14, yield: 26 }
};

const MARKET_ITEMS = [
    { type: 'meat', nameTR: 'Yerel Et', nameEN: 'Local Meat', emoji: '🥩', cost: 32, yield: 30 },
    { type: 'dairy', nameTR: 'Süt & Peynir', nameEN: 'Farm Dairy', emoji: '🥛', cost: 24, yield: 30 },
    { type: 'produce', nameTR: 'Taze Sebze', nameEN: 'Fresh Produce', emoji: '🥦', cost: 18, yield: 30 }
];

const RESTAURANT_TRACK = [
    { id: 'std', score: 0, titleTR: 'Klasik Bistro', titleEN: 'Classic Bistro', bg: 'assets/bg_restaurant.jpg', type: 'ambiance' },
    { id: 'upcycled', score: 3500, titleTR: 'Geri Dönüşüm', titleEN: 'Upcycled Bistro', bg: 'assets/bg_restaurant_upcycled.jpg', type: 'ambiance' },
    { id: 'rustic', score: 10000, titleTR: 'Rustik Ahşap', titleEN: 'Rustic Wood', bg: 'assets/bg_restaurant_rustic.jpg', type: 'ambiance' },
    { id: 'greenhouse', score: 30000, titleTR: 'Sera Restoran', titleEN: 'Greenhouse', bg: 'assets/bg_restaurant_greenhouse.jpg', type: 'ambiance' },
    { id: 'ecouniform', score: 50000, titleTR: 'Siyah Eko Üniforma', titleEN: 'Eco Uniforms', bg: 'assets/chef_classic_eco.jpg', type: 'perk' },
    { id: 'vip', score: 75000, titleTR: '%25 Pazar İndirimi', titleEN: '25% Farm VIP', bg: 'assets/bg_market.jpg', type: 'perk' }
];

// GLOBAL KAYIT & SLOT DURUMU
let activeLang = 'tr';
let saveSlots = [null, null, null, null, null];
let selectedSlotIdx = 0;

// GİRİŞ EKRANI KURULUM SEÇİMLERİ
let draftChefIdx = 0;
let draftPhilosophy = 'compost';

// AKTİF OYUN DURUMU
let state = null;

// MESAİ GEÇİCİ DEĞİŞKENLERİ
let timer = 45;
let activeCustomers = [null, null, null];
let selectedPriority = null;
let cookingJobs = {}; // { [recipeId]: { recipe, total, left, targetSlot } }
let isPaused = false;
let isMuted = false;
let gameInterval = null;
let countdownInterval = null;
let spawnTimer = 0;
let activeAromaTimer = 0;
let streak = 0;
let selectedSeed = 'carrot';
let fertilizerMode = false;
let shiftStats = { served: 0, earned: 0, scrapsMade: 0, autoSurplus: 0 };

let audioCtx = null;

// --- SES EFEKTLERİ ---
function playTone(freqStart, freqEnd, duration = 0.065, vol = 0.13) {
    if (isMuted) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration + 0.01);
    } catch (e) {}
}

function playPopSound(pitch = 540) { playTone(pitch, 190, 0.06, 0.13); }
function playReadyDing() { playTone(760, 1080, 0.11, 0.14); }

function t(key) { return TRANSLATIONS[activeLang][key] || key; }
function getChefName(chef) { return activeLang === 'tr' ? chef.nameTR : chef.nameEN; }
function getRecipeName(r) { return activeLang === 'tr' ? r.nameTR : r.nameEN; }
function getChefImageByScore(chefIdx, pts) {
    const chef = CHEFS[chefIdx] || CHEFS[0];
    return pts >= 50000 ? chef.imgEco : chef.imgClassic;
}

// --- 5 SLOT KAYIT SİSTEMİ ---
function loadSlotsFromStorage() {
    try {
        const raw = localStorage.getItem(SLOTS_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.activeLang) activeLang = parsed.activeLang;
            if (Array.isArray(parsed.slots) && parsed.slots.length === MAX_SLOTS) {
                saveSlots = parsed.slots;
            }
        }
    } catch (e) {}
}

function persistSlots() {
    try {
        localStorage.setItem(SLOTS_KEY, JSON.stringify({ activeLang, slots: saveSlots }));
    } catch (e) {}
}

function saveCurrentSlot() {
    if (!state) return;
    saveSlots[selectedSlotIdx] = JSON.parse(JSON.stringify(state));
    persistSlots();
}

function createFreshState(nickname, chefIdx, philosophy) {
    return {
        nickname: nickname.trim() || t('defaultName'),
        chefIdx,
        philosophy,
        score: 0,
        money: 100,
        day: 1,
        phase: 'shift', // İlk gün veya kayıt açılışında mesaiye hazır
        reserves: { meat: 70, dairy: 70, produce: 85 },
        scraps: 0,
        leftovers: 0,
        fertilizer: philosophy === 'compost' ? 2 : 0,
        currentAmbiance: 'assets/bg_restaurant.jpg',
        gardenPlots: Array.from({ length: 9 }, () => ({ status: 'empty', seed: null, fertilized: false })),
        ecoNotified: false
    };
}

// --- GİRİŞ EKRANI & DİL ---
function setLanguage(code) {
    activeLang = code;
    document.getElementById('langTrBtn').classList.toggle('active', code === 'tr');
    document.getElementById('langEnBtn').classList.toggle('active', code === 'en');

    const map = {
        uiTitle: 'title',
        uiSub: 'sub',
        uiSlotsTitle: 'slotsTitle',
        uiSlotsHint: 'slotsHint',
        uiStep1Title: 'step1Title',
        uiNicknameLabel: 'nicknameLabel',
        uiSelectChef: 'selectChef',
        uiStep2Title: 'step2Title',
        uiPhilosophySub: 'philosophySub',
        uiBtnAch: 'btnAch',
        uiBtnChars: 'btnChars',
        pauseStageBtn: 'pauseBtn',
        uiPriorityLabel: 'priorityLabel',
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
        uiReservesTitle: 'reservesTitle',
        uiMeatLabel: 'meatLabel',
        uiDairyLabel: 'dairyLabel',
        uiProduceLabel: 'produceLabel',
        uiWasteTitle: 'wasteTitle',
        uiSideScrapsLabel: 'sideScrapsLabel',
        uiSideLeftoversLabel: 'sideLeftoversLabel',
        uiSideFertLabel: 'sideFertLabel',
        uiSideWarn: 'sideWarn',
        uiSummaryTitle: 'summaryTitle',
        uiSummaryBtn: 'summaryBtn',
        uiAchTitle: 'achTitle',
        uiRestTrack: 'restTrack',
        uiRecipeTrack: 'recipeTrack',
        uiCharsTitle: 'charsTitle',
        uiPauseTitle: 'pauseTitle',
        uiResumeBtn: 'resumeBtn',
        uiMenuBtn: 'menuBtn'
    };

    Object.entries(map).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = t(key);
    });

    renderStartScreen();
    updateAudioButtons();

    if (state && document.getElementById('gameScreen').classList.contains('active')) {
        updateHUD();
        renderShiftKitchen();
        renderCustomers(true);
        renderGarden();
        renderMarket();
        renderCompostOptions();
    }
    persistSlots();
}

function showToast(msg, type = '') {
    const cont = document.getElementById('toast-container');
    const div = document.createElement('div');
    div.className = `toast ${type}`;
    div.textContent = msg;
    cont.appendChild(div);
    setTimeout(() => div.remove(), 2500);
}

function renderStartScreen() {
    // 5 Save Slotu Çiz
    const bar = document.getElementById('saveSlotsBar');
    bar.innerHTML = '';

    for (let i = 0; i < MAX_SLOTS; i++) {
        const slot = saveSlots[i];
        const card = document.createElement('div');
        const isSel = i === selectedSlotIdx;

        if (!slot) {
            card.className = `slot-card empty-slot ${isSel ? 'selected' : ''}`;
            card.onclick = () => selectSlot(i);
            card.innerHTML = `
                <strong style="font-size:0.74rem;">${t('slotPrefix')} ${i + 1}</strong>
                <span style="font-size:0.66rem;">${t('emptySlotLabel')}</span>
            `;
        } else {
            const phil = PHILOSOPHIES.find(p => p.id === slot.philosophy) || PHILOSOPHIES[0];
            card.className = `slot-card ${isSel ? 'selected' : ''}`;
            card.onclick = () => selectSlot(i);
            card.innerHTML = `
                <img src="${getChefImageByScore(slot.chefIdx, slot.score)}" class="slot-avatar" alt="Chef">
                <div class="slot-info">
                    <span class="slot-name">${escapeHtml(slot.nickname)}</span>
                    <span class="slot-meta">${phil.icon} ${t('dayPrefix')} ${slot.day} • ⭐${slot.score.toLocaleString()}</span>
                </div>
                <button class="slot-del-btn" title="Sil" onclick="deleteSlot(event, ${i})">🗑️</button>
            `;
        }
        bar.appendChild(card);
    }

    const activeSlot = saveSlots[selectedSlotIdx];
    const setupPanel = document.getElementById('setupPanel');
    const nickInput = document.getElementById('nicknameInput');
    const ctaBtn = document.getElementById('startActionBtn');

    if (activeSlot) {
        setupPanel.classList.add('locked-preview');
        nickInput.value = activeSlot.nickname;
        nickInput.disabled = true;
        draftChefIdx = activeSlot.chefIdx;
        draftPhilosophy = activeSlot.philosophy;
        ctaBtn.textContent = `${t('continueSlotBtn')} (${activeSlot.nickname})`;
    } else {
        setupPanel.classList.remove('locked-preview');
        nickInput.disabled = false;
        if (!nickInput.value.trim()) nickInput.value = t('defaultName');
        ctaBtn.textContent = `${t('startNewBtn')} (${t('slotPrefix')} ${selectedSlotIdx + 1})`;
    }

    // 5 Şef Kartı
    const chefGrid = document.getElementById('chefSelectGrid');
    chefGrid.innerHTML = '';
    CHEFS.forEach((c, idx) => {
        const scorePreview = activeSlot ? activeSlot.score : 0;
        const div = document.createElement('div');
        div.className = `chef-pick-card ${idx === draftChefIdx ? 'selected' : ''}`;
        div.onclick = () => {
            if (activeSlot) return;
            playPopSound(600);
            draftChefIdx = idx;
            renderStartScreen();
        };
        div.innerHTML = `
            <img src="${getChefImageByScore(idx, scorePreview)}" alt="${getChefName(c)}">
            <span>${getChefName(c)}</span>
        `;
        chefGrid.appendChild(div);
    });

    // 3 Başlangıç Felsefesi / Güçlendirme
    const philList = document.getElementById('philosophyList');
    philList.innerHTML = '';
    PHILOSOPHIES.forEach(p => {
        const div = document.createElement('div');
        div.className = `phil-card ${p.id === draftPhilosophy ? 'selected' : ''}`;
        div.onclick = () => {
            if (activeSlot) return;
            playPopSound(580);
            draftPhilosophy = p.id;
            renderStartScreen();
        };
        div.innerHTML = `
            <div class="phil-title">${p.icon} ${activeLang === 'tr' ? p.nameTR : p.nameEN}</div>
            <div class="phil-desc">${activeLang === 'tr' ? p.descTR : p.descEN}</div>
        `;
        philList.appendChild(div);
    });
}

function selectSlot(idx) {
    playPopSound(560);
    selectedSlotIdx = idx;
    if (!saveSlots[idx]) {
        document.getElementById('nicknameInput').value = t('defaultName');
    }
    renderStartScreen();
}

function deleteSlot(ev, idx) {
    ev.stopPropagation();
    if (!confirm(t('deleteConfirm'))) return;
    saveSlots[idx] = null;
    persistSlots();
    playPopSound(320);
    showToast(t('deletedToast'));
    renderStartScreen();
}

function launchSelectedSlot() {
    playPopSound(660);
    let slotData = saveSlots[selectedSlotIdx];
    if (!slotData) {
        const nick = document.getElementById('nicknameInput').value.trim() || t('defaultName');
        slotData = createFreshState(nick, draftChefIdx, draftPhilosophy);
        saveSlots[selectedSlotIdx] = slotData;
        persistSlots();
    }

    state = JSON.parse(JSON.stringify(slotData));
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    document.getElementById('ambianceImg').src = state.currentAmbiance;
    updateHUD();

    if (state.phase === 'evening') {
        openEveningPanel();
    } else {
        // Kayıtlı oyundan mesaiye geçerken tam boy şef 3-2-1 geri sayımı
        startShiftWithCountdown(false);
    }
}

// --- TAM BOY ŞEF 3-2-1 GERİ SAYIMI ---
function requestStartShift() {
    // Akşam panelinden mesaiye geçerken önceki günün atık/yemek kontrolü yapılır
    startShiftWithCountdown(true);
}

function startShiftWithCountdown(fromEvening) {
    playPopSound(600);
    clearInterval(gameInterval);
    clearInterval(countdownInterval);

    if (fromEvening && state.day > 1) {
        const unhandled = state.scraps + state.leftovers;
        if (unhandled > 0) {
            const pen = unhandled * 20;
            state.score = Math.max(0, state.score - pen);
            showToast(`${t('overnightPenalty')}: -${pen} ${t('ptsUnit')}`, 'bad');
        } else {
            state.score += 150;
            showToast(`${t('overnightBonus')}: +150 ${t('ptsUnit')}`, 'good');
        }
    }

    // Sahneyi arka planda hazırla
    state.phase = 'shift';
    document.getElementById('restaurantView').classList.add('active');
    document.getElementById('managementView').classList.remove('active');
    document.getElementById('ambianceImg').src = state.currentAmbiance;
    activeCustomers = [null, null, null];
    cookingJobs = {};
    selectedPriority = null;
    streak = 0;
    activeAromaTimer = 0;
    timer = getShiftDuration();
    updateHUD();
    renderShiftKitchen();
    renderCustomers(true);

    // Geri sayım kartını şefin tam hali ve mevcut kostümüyle doldur
    const isEco = state.score >= 50000;
    document.getElementById('countdownChefImg').src = getChefImageByScore(state.chefIdx, state.score);
    document.getElementById('countdownChefName').textContent = state.nickname;
    const uTag = document.getElementById('countdownUniformTag');
    uTag.textContent = isEco ? t('uniformEco') : t('uniformClassic');
    uTag.classList.toggle('eco', isEco);

    const numEl = document.getElementById('countdownNumber');
    const speechEl = document.getElementById('countdownSpeech');
    const lines = t('cdLines');
    const modal = document.getElementById('countdownModal');
    modal.classList.add('active');

    let count = 3;
    const showStep = () => {
        if (count > 0) {
            numEl.textContent = count;
            speechEl.textContent = lines[3 - count] || lines[0];
            playTone(460 + (3 - count) * 90, 320, 0.08, 0.14);
        } else {
            numEl.textContent = t('cdGo');
            playReadyDing();
        }
        numEl.style.animation = 'none';
        void numEl.offsetWidth;
        numEl.style.animation = 'popNum 0.35s ease';
    };

    showStep();
    countdownInterval = setInterval(() => {
        count -= 1;
        if (count > 0) {
            showStep();
        } else if (count === 0) {
            showStep();
        } else {
            clearInterval(countdownInterval);
            modal.classList.remove('active');
            beginActiveShift();
        }
    }, 850);
}

// --- MESAİ SİSTEMİ (1-3. gün 45 sn, 4+ gün 60 sn) ---
function getShiftDuration() {
    return state.day <= 3 ? 45 : 60;
}

function beginActiveShift() {
    isPaused = false;
    timer = getShiftDuration();
    spawnTimer = 0;
    shiftStats = { served: 0, earned: 0, scrapsMade: 0, autoSurplus: 0 };

    const music = document.getElementById('bgMusic');
    music.currentTime = 0;
    music.volume = 0.42;
    if (!isMuted) music.play().catch(() => {});

    spawnCustomer();
    setTimeout(() => {
        if (state && state.phase === 'shift' && !isPaused) spawnCustomer();
    }, 1000);

    clearInterval(gameInterval);
    gameInterval = setInterval(gameTick, 100); // 100ms pürüzsüz pişirme ve sabır akışı

    updateHUD();
    renderShiftKitchen();
    renderCustomers(true);
    saveCurrentSlot();
}

function gameTick() {
    if (!state || isPaused || state.phase !== 'shift') return;

    const dt = 0.1;
    timer -= dt;

    if (activeAromaTimer > 0) {
        activeAromaTimer = Math.max(0, activeAromaTimer - dt);
    }

    // 1. Pişen yemekleri ilerlet (1-3 saniye hazırlık)
    const jobIds = Object.keys(cookingJobs);
    if (jobIds.length > 0) {
        let finishedAny = false;
        jobIds.forEach(id => {
            const job = cookingJobs[id];
            job.left -= dt;
            if (job.left <= 0) {
                delete cookingJobs[id];
                completeCookedDish(job.recipe, job.targetSlot);
                finishedAny = true;
            } else {
                updateCookingButtonVisual(id, job);
            }
        });
        if (finishedAny) {
            renderShiftKitchen();
            renderCustomers(true);
        }
    }

    // 2. Yeni müşteri gelişi
    spawnTimer += dt;
    if (spawnTimer >= 3.8) {
        spawnTimer = 0;
        spawnCustomer();
    }

    // 3. Müşteri sabır akışı
    let customersChanged = false;
    for (let i = 0; i < 3; i++) {
        const c = activeCustomers[i];
        if (!c) continue;
        if (activeAromaTimer <= 0) c.patienceLeft -= dt;

        if (c.patienceLeft <= 0) {
            activeCustomers[i] = null;
            if (selectedPriority === i) selectedPriority = null;
            streak = 0;
            state.score = Math.max(0, state.score - 80);
            showToast(t('missedOrder'), 'bad');
            customersChanged = true;
        }
    }

    if (timer <= 0) {
        timer = 0;
        endShift();
        return;
    }

    updateHUD();
    renderCustomers(customersChanged);
    if (customersChanged) renderShiftKitchen();
}

function activatePatienceAroma() {
    if (!state || state.phase !== 'shift' || isPaused) return;
    if (activeAromaTimer > 0) return;
    if (state.money < AROMA_COST) {
        playPopSound(220);
        showToast(t('noMoney'), 'bad');
        return;
    }
    state.money -= AROMA_COST;
    activeAromaTimer = 10;
    playReadyDing();
    showToast(t('aromaTriggered'), 'good');
    updateHUD();
}

function spawnCustomer() {
    const emptySlots = [];
    for (let i = 0; i < 3; i++) {
        if (!activeCustomers[i]) emptySlots.push(i);
    }
    if (emptySlots.length === 0) return;

    const slot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
    const tpl = CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];
    const unlocked = RECIPES.filter(r => state.score >= r.unlock);
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
    renderShiftKitchen();
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
                    : (pct > 50 ? '#2e8b3c' : pct > 25 ? '#d98218' : '#c93232');
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
        const role = activeLang === 'tr' ? c.template.roleTR : c.template.roleEN;
        const barColor = activeAromaTimer > 0 ? '#38bdf8' : (pct > 50 ? '#2e8b3c' : pct > 25 ? '#d98218' : '#c93232');

        const card = document.createElement('div');
        card.className = `order-card ${selectedPriority === i ? 'priority' : ''}`;
        card.onclick = () => {
            playPopSound(680);
            selectedPriority = selectedPriority === i ? null : i;
            renderCustomers(true);
        };

        card.innerHTML = `
            ${selectedPriority === i ? `<span class="priority-badge">${t('targetTag')}</span>` : ''}
            <div class="order-dish-strip">
                <img src="${c.recipe.img}" alt="${getRecipeName(c.recipe)}" class="dish-thumb">
                <span class="order-dish-name">${getRecipeName(c.recipe)}</span>
            </div>
            <img src="${c.template.img}" alt="${c.template.name}" class="cust-thumb">
            <div class="order-cust-name">${c.template.name} (${role})</div>
            <div class="order-patience-bar">
                <div class="order-patience-fill" id="c_bar_${i}" style="width:${pct}%; background-color:${barColor};"></div>
            </div>
        `;
        container.appendChild(card);
    }
}

// --- 10 YEMEKLİK KLASİK TEZGAH + PİŞİRME SÜRESİ ---
function renderShiftKitchen() {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';

    const activeDishIds = new Set(activeCustomers.filter(Boolean).map(c => c.recipe.id));

    RECIPES.forEach(r => {
        const unlocked = state.score >= r.unlock;
        const job = cookingJobs[r.id];
        const btn = document.createElement('button');

        if (!unlocked) {
            btn.className = 'recipe-btn locked-dish';
            btn.disabled = true;
            btn.innerHTML = `
                <img src="${r.img}" alt="${getRecipeName(r)}">
                <span class="recipe-name">🔒 ${r.unlock.toLocaleString()}</span>
                <span class="recipe-cost">${t('lockedShort')}</span>
            `;
            grid.appendChild(btn);
            return;
        }

        const canCook = state.reserves.produce >= r.cost.produce
            && state.reserves.dairy >= r.cost.dairy
            && state.reserves.meat >= r.cost.meat;
        const isNeeded = activeDishIds.has(r.id);

        btn.id = `rec_btn_${r.id}`;
        btn.className = `recipe-btn ${job ? 'cooking' : (isNeeded ? 'needed' : '')} ${!job && !canCook ? 'no-stock' : ''}`;
        btn.onclick = () => startCookingDish(r);

        const costs = [];
        if (r.cost.produce > 0) costs.push(`🥦${r.cost.produce}`);
        if (r.cost.dairy > 0) costs.push(`🥛${r.cost.dairy}`);
        if (r.cost.meat > 0) costs.push(`🥩${r.cost.meat}`);

        const pct = job ? Math.min(100, ((job.total - job.left) / job.total) * 100) : 0;

        btn.innerHTML = `
            ${job ? `<div class="cook-progress-bg" id="cook_bg_${r.id}" style="width:${pct}%"></div>` : ''}
            <span class="prep-tag">⏱${r.prepTime.toFixed(1)}s</span>
            <img src="${r.img}" alt="${getRecipeName(r)}">
            <span class="recipe-name">${getRecipeName(r)}</span>
            <span class="recipe-cost">${costs.join(' ')}</span>
            ${job ? `<div class="cook-timer-pill" id="cook_tm_${r.id}">🔥 ${job.left.toFixed(1)}s</div>` : ''}
        `;
        grid.appendChild(btn);
    });
}

function updateCookingButtonVisual(recipeId, job) {
    const bg = document.getElementById(`cook_bg_${recipeId}`);
    const tm = document.getElementById(`cook_tm_${recipeId}`);
    const pct = Math.min(100, ((job.total - job.left) / job.total) * 100);
    if (bg) bg.style.width = `${pct}%`;
    if (tm) tm.textContent = `🔥 ${Math.max(0.1, job.left).toFixed(1)}s`;
}

function startCookingDish(recipe) {
    if (isPaused || state.phase !== 'shift') return;
    if (cookingJobs[recipe.id]) {
        playPopSound(260);
        showToast(t('alreadyCooking'));
        return;
    }

    if (state.reserves.produce < recipe.cost.produce
        || state.reserves.dairy < recipe.cost.dairy
        || state.reserves.meat < recipe.cost.meat) {
        playPopSound(220);
        showToast(t('noStock'), 'bad');
        return;
    }

    playPopSound(540);
    state.reserves.produce -= recipe.cost.produce;
    state.reserves.dairy -= recipe.cost.dairy;
    state.reserves.meat -= recipe.cost.meat;
    state.scraps += 1;
    shiftStats.scrapsMade += 1;

    cookingJobs[recipe.id] = {
        recipe,
        total: recipe.prepTime,
        left: recipe.prepTime,
        targetSlot: selectedPriority
    };

    updateHUD();
    renderShiftKitchen();
}

function completeCookedDish(recipe, rememberedSlot) {
    playReadyDing();

    // 1. Öncelikli müşteri (mevcut veya tıklama anındaki) bu yemeği istiyorsa ona ver
    let targetIdx = -1;
    const prefSlot = selectedPriority !== null ? selectedPriority : rememberedSlot;
    if (prefSlot !== null && activeCustomers[prefSlot] && activeCustomers[prefSlot].recipe.id === recipe.id) {
        targetIdx = prefSlot;
    } else {
        // 2. Değilse sabrı en az olan müşteriye ver
        let lowest = Infinity;
        for (let i = 0; i < 3; i++) {
            const c = activeCustomers[i];
            if (c && c.recipe.id === recipe.id && c.patienceLeft < lowest) {
                lowest = c.patienceLeft;
                targetIdx = i;
            }
        }
    }

    if (targetIdx !== -1) {
        activeCustomers[targetIdx] = null;
        if (selectedPriority === targetIdx) selectedPriority = null;
        streak += 1;
        const mult = streak >= 5 ? 2 : 1;
        const gainedPts = recipe.pts * mult;

        state.score += gainedPts;
        state.money += recipe.price;
        shiftStats.served += 1;
        shiftStats.earned += recipe.price;

        if (recipe.id === 'tea') {
            activeAromaTimer = Math.max(activeAromaTimer, 6);
            showToast(t('teaAromaTriggered'), 'good');
        } else {
            showToast(`+$${recipe.price} | +${gainedPts} ${t('ptsUnit')}${mult === 2 ? ' (2x!)' : ''}`, 'good');
        }
        checkScoreMilestones();
    } else {
        state.leftovers += 1;
        showToast(t('leftoverCreated'));
    }

    updateHUD();
}

function checkScoreMilestones() {
    if (state.score >= 50000 && !state.ecoNotified) {
        state.ecoNotified = true;
        showToast(t('ecoUnlocked'), 'good');
    }
}

function endShift() {
    clearInterval(gameInterval);
    cookingJobs = {};
    const music = document.getElementById('bgMusic');
    music.pause();
    music.currentTime = 0;

    // Madde 5: Yemek artmasa bile barınağa bağış için rastgele 1-4 tabak yiyecek artsın
    let autoSurplus = 0;
    if (state.leftovers === 0) {
        autoSurplus = Math.floor(Math.random() * 4) + 1;
        state.leftovers += autoSurplus;
    }
    shiftStats.autoSurplus = autoSurplus;

    const body = document.getElementById('summaryBody');
    body.innerHTML = `
        <div class="summary-line"><span>${t('statsServed')}</span><strong>${shiftStats.served}</strong></div>
        <div class="summary-line bonus"><span>${t('statsEarnings')}</span><strong>+$${shiftStats.earned}</strong></div>
        <div class="summary-line"><span>${t('statsScraps')}</span><strong>♻️ ${shiftStats.scrapsMade} (${state.scraps})</strong></div>
        ${autoSurplus > 0 ? `<div class="summary-line highlight"><span>${t('statsAutoSurplus')}</span><strong>🍲 +${autoSurplus} ${t('platesUnit')}</strong></div>` : ''}
        <div class="summary-line highlight"><span>${t('statsTotalSurplus')}</span><strong>🍽️ ${state.leftovers} ${t('platesUnit')}</strong></div>
        <p style="font-size:0.74rem; text-align:center; color:#6e4a2b; font-weight:700; margin-top:4px;">${t('statsNightNote')}</p>
    `;

    state.phase = 'evening';
    document.getElementById('shiftSummaryModal').classList.add('active');
    saveCurrentSlot();
}

function closeSummaryAndManage() {
    playPopSound(520);
    document.getElementById('shiftSummaryModal').classList.remove('active');
    state.day += 1;

    // Bir sonraki elde filizler hasada hazır hale gelir
    state.gardenPlots.forEach(plot => {
        if (plot.status === 'sprout') plot.status = 'ready';
    });

    openEveningPanel();
    saveCurrentSlot();
}

function openEveningPanel() {
    state.phase = 'evening';
    document.getElementById('restaurantView').classList.remove('active');
    document.getElementById('managementView').classList.add('active');
    updateHUD();
    renderGarden();
    renderMarket();
    renderCompostOptions();
}

// --- BAHÇE (ELMASIZ, SÜRÜLMÜŞ TOPRAK + 3 FİLİZ) ---
function renderGarden() {
    if (!state) return;
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
        const bonus = state.philosophy === 'compost' ? ' (+5)' : '';
        btn.textContent = `${s.emoji} ${label} ($${s.cost})${bonus}`;
        toolbar.appendChild(btn);
    });

    document.getElementById('gardenFertStatus').textContent = `🌾 ${t('fertCount')}: ${state.fertilizer}`;
    const fertBtn = document.getElementById('uiToggleFertilizerBtn');
    fertBtn.textContent = fertilizerMode ? t('fertModeOn') : t('fertModeOff');
    fertBtn.classList.toggle('active-fert', fertilizerMode);

    const grid = document.getElementById('gardenGrid');
    grid.innerHTML = '';

    state.gardenPlots.forEach((plot, idx) => {
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
    const plot = state.gardenPlots[idx];

    if (plot.status === 'empty') {
        const s = SEEDS[selectedSeed];
        if (state.money < s.cost) {
            showToast(t('noMoney'), 'bad');
            return;
        }
        state.money -= s.cost;
        plot.status = 'sprout';
        plot.seed = selectedSeed;
        plot.fertilized = false;
        playPopSound(500);
        showToast(t('plantToast'), 'good');
    } else if (plot.status === 'sprout' && fertilizerMode) {
        if (state.fertilizer <= 0) {
            fertilizerMode = false;
            showToast(t('noCompost'), 'bad');
        } else {
            state.fertilizer -= 1;
            plot.status = 'ready';
            plot.fertilized = true;
            if (state.fertilizer <= 0) fertilizerMode = false;
            playPopSound(700);
            showToast(t('fertilizedToast'), 'good');
        }
    } else if (plot.status === 'ready') {
        const s = SEEDS[plot.seed] || SEEDS.carrot;
        const philBonus = state.philosophy === 'compost' ? 5 : 0;
        const fertBonus = plot.fertilized ? 10 : 0;
        const gained = s.yield + philBonus + fertBonus;
        state.reserves.produce = Math.min(MAX_RESERVE, state.reserves.produce + gained);
        plot.status = 'empty';
        plot.seed = null;
        plot.fertilized = false;
        playReadyDing();
        showToast(`${t('harvestToast')} +${gained} 🥦`, 'good');
    }

    updateHUD();
    renderGarden();
    saveCurrentSlot();
}

function toggleFertilizerMode() {
    if (state.fertilizer <= 0 && !fertilizerMode) {
        showToast(t('noCompost'), 'bad');
        return;
    }
    playPopSound(560);
    fertilizerMode = !fertilizerMode;
    renderGarden();
}

// --- PAZAR & BARNABY KOMPOST SATIŞI ---
function getMarketDiscountRate() {
    let disc = 0;
    if (state.philosophy === 'bargainer') disc += 0.15;
    if (state.score >= 75000) disc += 0.25;
    return Math.min(0.4, disc);
}

function renderMarket() {
    if (!state) return;
    const grid = document.getElementById('marketGrid');
    grid.innerHTML = '';

    const disc = getMarketDiscountRate();
    const badge = document.getElementById('discountBadge');
    badge.classList.toggle('hidden', disc <= 0);
    if (disc > 0) badge.textContent = `-%${Math.round(disc * 100)}`;

    MARKET_ITEMS.forEach(item => {
        const price = Math.max(1, Math.round(item.cost * (1 - disc)));
        const name = activeLang === 'tr' ? item.nameTR : item.nameEN;
        const card = document.createElement('div');
        card.className = 'market-card';
        card.innerHTML = `
            <span class="mkt-icon">${item.emoji}</span>
            <h5>${name}</h5>
            <p>+${item.yield} • $${price}</p>
            <button class="amber-btn sm-btn full-btn" onclick="buyMarketItem('${item.type}', ${price}, ${item.yield})">${t('buyBtn')}</button>
        `;
        grid.appendChild(card);
    });

    const sellBox = document.getElementById('barnabySellBox');
    const dim = state.fertilizer <= 0 ? 'opacity:0.5;' : '';
    sellBox.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:2px;">
            <strong style="font-size:0.86rem;">${t('barnabySellTitle')}</strong>
            <span style="font-size:0.72rem; color:#6e4a2b; font-weight:700;">
                🌾 ${t('fertCount')}: <b>${state.fertilizer}</b> • ${t('barnabySellSub')}
            </span>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="green-cta-btn sm-btn" style="${dim}" onclick="sellCompostToBarnaby(false)">${t('sellOneBtn')}</button>
            ${state.fertilizer > 1
                ? `<button class="amber-btn sm-btn" onclick="sellCompostToBarnaby(true)">${t('sellAllBtn')} (+$${state.fertilizer * COMPOST_SELL_PRICE})</button>`
                : ''}
        </div>
    `;
}

function buyMarketItem(type, cost, amount) {
    if (state.money < cost) {
        showToast(t('noMoney'), 'bad');
        return;
    }
    state.money -= cost;
    state.reserves[type] = Math.min(MAX_RESERVE, state.reserves[type] + amount);
    playPopSound(620);
    showToast(`${t('boughtToast')} +${amount}`, 'good');
    updateHUD();
    saveCurrentSlot();
}

function sellCompostToBarnaby(sellAll) {
    if (state.fertilizer <= 0) {
        playPopSound(220);
        showToast(t('noCompost'), 'bad');
        return;
    }
    const qty = sellAll ? state.fertilizer : 1;
    const earnedMoney = qty * COMPOST_SELL_PRICE;
    const earnedPts = qty * COMPOST_SELL_POINTS;

    state.fertilizer -= qty;
    if (state.fertilizer <= 0) fertilizerMode = false;
    state.money += earnedMoney;
    state.score += earnedPts;

    playReadyDing();
    showToast(`${t('compostSold')} +$${earnedMoney} | +${earnedPts} ${t('ptsUnit')}`, 'good');
    checkScoreMilestones();
    updateHUD();
    renderMarket();
    renderGarden();
    saveCurrentSlot();
}

// --- KOMPOST & BARINAK ---
function renderCompostOptions() {
    const row = document.getElementById('compostChoiceRow');
    if (!row) return;
    row.innerHTML = `
        <button class="amber-btn sm-btn" onclick="goUseCompostInGarden()">${t('useInGardenBtn')}</button>
        <button class="amber-btn sm-btn" onclick="goSellCompostInMarket()">${t('sellAtMarketBtn')} (+$${COMPOST_SELL_PRICE})</button>
    `;
}

function goUseCompostInGarden() {
    if (state.fertilizer > 0) fertilizerMode = true;
    switchTab('garden');
}

function goSellCompostInMarket() {
    switchTab('market');
}

function dumpScrapsToCompost() {
    if (state.scraps < 5) {
        showToast(t('noScraps'), 'bad');
        return;
    }
    state.scraps -= 5;
    state.fertilizer += 1;
    state.score += 50;
    playReadyDing();
    showToast(t('compostSuccess'), 'good');
    checkScoreMilestones();
    updateHUD();
    renderGarden();
    renderMarket();
    saveCurrentSlot();
}

function donateLeftovers() {
    if (state.leftovers <= 0) {
        showToast(t('noLeftovers'), 'bad');
        return;
    }
    const basePts = state.leftovers * 150;
    const pts = state.philosophy === 'shelter' ? Math.round(basePts * 1.25) : basePts;
    state.leftovers = 0;
    state.score += pts;
    playReadyDing();
    showToast(`${t('donateSuccess')} +${pts} ${t('ptsUnit')}`, 'good');
    checkScoreMilestones();
    updateHUD();
    saveCurrentSlot();
}

function switchTab(name) {
    playPopSound(500);
    document.querySelectorAll('.mgmt-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    document.getElementById('uiTab' + name.charAt(0).toUpperCase() + name.slice(1)).classList.add('active');
    document.getElementById(`${name}Tab`).classList.add('active');

    if (name === 'garden') renderGarden();
    if (name === 'market') renderMarket();
    if (name === 'compost') renderCompostOptions();
    updateHUD();
}

// --- HUD & 150'LİK STOK BARLARI ---
function setReserveBar(fillId, valId, value, showCap) {
    const fill = document.getElementById(fillId);
    const val = document.getElementById(valId);
    if (!fill || !val) return;
    const c = Math.max(0, Math.min(MAX_RESERVE, value));
    const pct = (c / MAX_RESERVE) * 100;
    fill.style.width = `${pct}%`;
    fill.style.backgroundColor = pct > 45 ? '#2e8b3c' : pct > 20 ? '#d98218' : '#c93232';
    val.textContent = showCap ? `${c} / ${MAX_RESERVE}` : `${c}`;
}

function updateHUD() {
    if (!state) return;
    document.getElementById('activeChefImg').src = getChefImageByScore(state.chefIdx, state.score);
    document.getElementById('chefNameDisplay').textContent = state.nickname;

    const badge = document.getElementById('hud-phase-badge');
    badge.textContent = state.phase === 'shift' ? t('phaseShift') : t('phaseEvening');
    badge.classList.toggle('evening', state.phase !== 'shift');

    const m = Math.floor(timer / 60);
    const s = Math.ceil(timer % 60);
    document.getElementById('dayDisplay').textContent = `📅 ${t('dayPrefix')} ${state.day}`;
    document.getElementById('timerDisplay').textContent = `⏱️ ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    document.getElementById('moneyDisplay').textContent = `💰 $${state.money}`;
    document.getElementById('scoreDisplay').textContent = `⭐ ${state.score.toLocaleString()}`;
    document.getElementById('streakHudVal').textContent = `🔥 ${streak}`;

    // Patience Aroma & Streak bar
    const aromaBtn = document.getElementById('aromaBtn');
    aromaBtn.classList.toggle('active-aroma', activeAromaTimer > 0);
    aromaBtn.textContent = activeAromaTimer > 0
        ? `${t('aromaActive')} (${Math.ceil(activeAromaTimer)}s)`
        : t('aromaBtn');

    const streakBar = document.getElementById('streakBarText');
    streakBar.classList.toggle('streak-hot', streak >= 5);
    streakBar.textContent = `🔥 ${t('streakLabel')}: ${Math.min(streak, 5)}/5 (${t('doubleScore')})`;

    // Stoklar / 150
    setReserveBar('bar-meat', 'val-meat', state.reserves.meat, true);
    setReserveBar('bar-dairy', 'val-dairy', state.reserves.dairy, true);
    setReserveBar('bar-produce', 'val-produce', state.reserves.produce, true);
    setReserveBar('m-bar-meat', 'm-val-meat', state.reserves.meat, false);
    setReserveBar('m-bar-dairy', 'm-val-dairy', state.reserves.dairy, false);
    setReserveBar('m-bar-produce', 'm-val-produce', state.reserves.produce, false);

    // Atık & Artanlar
    document.getElementById('sideScraps').textContent = state.scraps;
    document.getElementById('sideLeftovers').textContent = state.leftovers;
    document.getElementById('sideFertilizer').textContent = state.fertilizer;
    document.getElementById('kitchenScrapsMini').textContent = `♻️ ${t('scrapsShort')}: ${state.scraps}`;
    document.getElementById('kitchenLeftoversMini').textContent = `🍽️ ${t('leftoversShort')}: ${state.leftovers}`;

    document.getElementById('scrapsBadge').textContent = `${t('scrapsLabel')}: ${state.scraps}`;
    document.getElementById('uiFertilizerCount').textContent = `${t('fertCount')}: ${state.fertilizer} 🌾`;
    document.getElementById('leftoversBadge').textContent = `${t('leftoversLabel')}: ${state.leftovers} ${t('platesUnit')}`;

    const perPlate = state.philosophy === 'shelter' ? 188 : 150;
    document.getElementById('uiDonateBtn').textContent = `${t('donateBtn')} (+${perPlate} ${t('ptsUnit')}/${t('platesUnit')})`;

    const pct = Math.min(100, (state.scraps / 5) * 100);
    document.getElementById('compostProgressFill').style.width = `${pct}%`;
    document.getElementById('compostProgressText').textContent = `${Math.min(state.scraps, 5)} / 5`;
}

// --- ÇİFT HATLI BAŞARIMLAR & KARAKTER REHBERİ ---
function openAchievements() {
    playPopSound(580);
    if (state && state.phase === 'shift') isPaused = true;
    document.getElementById('achCurrentScore').textContent = `${state.score.toLocaleString()} ${t('ptsUnit')}`;
    renderAchievementTracks();
    document.getElementById('achievementsModal').classList.add('active');
}

function closeAchievements() {
    playPopSound(480);
    document.getElementById('achievementsModal').classList.remove('active');
    if (state && state.phase === 'shift' && !document.getElementById('pauseModal').classList.contains('active')) {
        isPaused = false;
    }
}

function renderAchievementTracks() {
    const restRow = document.getElementById('restaurantTrackNodes');
    restRow.innerHTML = '';

    RESTAURANT_TRACK.forEach((item, idx) => {
        if (idx > 0) {
            const line = document.createElement('div');
            line.className = `track-connector ${state.score >= item.score ? 'filled' : ''}`;
            restRow.appendChild(line);
        }

        const unlocked = state.score >= item.score;
        const isActive = item.type === 'ambiance' && state.currentAmbiance === item.bg;
        const title = activeLang === 'tr' ? item.titleTR : item.titleEN;

        const node = document.createElement('div');
        node.className = `track-node ${unlocked ? 'unlocked' : ''} ${isActive ? 'active-choice' : ''}`;
        if (unlocked && item.type === 'ambiance') {
            node.style.cursor = 'pointer';
            node.onclick = () => {
                playPopSound(660);
                state.currentAmbiance = item.bg;
                document.getElementById('ambianceImg').src = item.bg;
                showToast(`${t('ambChanged')} ${title}`, 'good');
                renderAchievementTracks();
                saveCurrentSlot();
            };
        }

        let tag = `<span class="node-pts">🔒 ${item.score.toLocaleString()}</span>`;
        if (isActive) tag = `<span class="node-tag gold">${t('activeTag')}</span>`;
        else if (unlocked && item.type === 'ambiance') tag = `<span class="node-tag">${t('selectTag')}</span>`;
        else if (unlocked) tag = `<span class="node-tag">${t('unlockedTag')}</span>`;

        node.innerHTML = `
            <img src="${item.bg}" alt="${title}">
            <span>${title}</span>
            ${tag}
        `;
        restRow.appendChild(node);
    });

    const recRow = document.getElementById('recipeTrackNodes');
    recRow.innerHTML = '';

    RECIPES.forEach((r, idx) => {
        if (idx > 0) {
            const line = document.createElement('div');
            line.className = `track-connector ${state.score >= r.unlock ? 'filled' : ''}`;
            recRow.appendChild(line);
        }

        const unlocked = state.score >= r.unlock;
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

function openCharactersModal() {
    playPopSound(580);
    if (state && state.phase === 'shift') isPaused = true;

    const list = document.getElementById('charactersList');
    list.innerHTML = '';
    CUSTOMERS.forEach(c => {
        const role = activeLang === 'tr' ? c.roleTR : c.roleEN;
        const favNames = c.prefs
            .map(pid => RECIPES.find(r => r.id === pid))
            .filter(Boolean)
            .map(r => getRecipeName(r))
            .join(', ');

        const card = document.createElement('div');
        card.className = 'char-guide-card';
        card.innerHTML = `
            <img src="${c.img}" alt="${c.name}">
            <div>
                <h5>${c.name} (${role})</h5>
                <p>⏱ ${t('patienceText')}: ${c.patience}s</p>
                <p>🍽 ${t('favsText')}: ${favNames}</p>
            </div>
        `;
        list.appendChild(card);
    });

    document.getElementById('charactersModal').classList.add('active');
}

function closeCharactersModal() {
    playPopSound(480);
    document.getElementById('charactersModal').classList.remove('active');
    if (state && state.phase === 'shift' && !document.getElementById('pauseModal').classList.contains('active')) {
        isPaused = false;
    }
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
    if (state && state.phase === 'shift' && !isMuted) {
        document.getElementById('bgMusic').play().catch(() => {});
    }
}

function toggleAudio() {
    isMuted = !isMuted;
    const music = document.getElementById('bgMusic');
    if (isMuted) {
        music.pause();
    } else if (state && state.phase === 'shift' && !isPaused) {
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
    clearInterval(countdownInterval);
    isPaused = false;
    cookingJobs = {};
    const music = document.getElementById('bgMusic');
    music.pause();
    music.currentTime = 0;

    saveCurrentSlot();
    document.getElementById('pauseModal').classList.remove('active');
    document.getElementById('countdownModal').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
    renderStartScreen();
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

// BAŞLATMA
document.addEventListener('DOMContentLoaded', () => {
    loadSlotsFromStorage();
    setLanguage(activeLang);
});
