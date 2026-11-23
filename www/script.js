/* =========================================================
   ZERO-WASTE BISTRO: CIRCULAR KITCHEN — CORE GAME ENGINE
   ========================================================= */

const SAVE_KEY = 'zero_waste_bistro_save_v1';

// ----------------- STATIC GAME DATA -----------------

const AVATARS = {
  classic: 'assets/chef_classic.jpg',
  eco: 'assets/chef_eco.jpg',
  artisan: 'assets/chef_artisan.jpg'
};

const RECIPES = [
  { id: 'salad',      name: 'Garden Salad',    img: 'assets/dish_salad.jpg',      cost: { meat: 0,  dairy: 0,  produce: 10 }, price: 15, pts: 50,  unlock: 0 },
  { id: 'juice',      name: 'Carrot Juice',    img: 'assets/dish_juice.jpg',      cost: { meat: 0,  dairy: 0,  produce: 8  }, price: 12, pts: 40,  unlock: 0 },
  { id: 'soup',       name: 'Carrot Soup',     img: 'assets/dish_soup.jpg',       cost: { meat: 0,  dairy: 5,  produce: 8  }, price: 22, pts: 70,  unlock: 0 },
  { id: 'tart',       name: 'Apple Tart',      img: 'assets/dish_tart.jpg',       cost: { meat: 0,  dairy: 10, produce: 10 }, price: 30, pts: 100, unlock: 1000 },
  { id: 'tea',        name: 'Herbal Tea',      img: 'assets/dish_tea.jpg',        cost: { meat: 0,  dairy: 0,  produce: 6  }, price: 18, pts: 60,  unlock: 2500 },
  { id: 'stew',       name: 'Beef Stew',       img: 'assets/dish_stew.jpg',       cost: { meat: 15, dairy: 0,  produce: 10 }, price: 45, pts: 150, unlock: 5000 },
  { id: 'pumpkin',    name: 'Pumpkin Pie',     img: 'assets/dish_pumpkin.jpg',    cost: { meat: 0,  dairy: 10, produce: 12 }, price: 38, pts: 120, unlock: 10000 },
  { id: 'chicken',    name: 'Herb Chicken',    img: 'assets/dish_chicken.jpg',    cost: { meat: 15, dairy: 0,  produce: 8  }, price: 42, pts: 140, unlock: 20000 },
  { id: 'shepherd',   name: "Shepherd's Pie",  img: 'assets/dish_shepherd.jpg',   cost: { meat: 15, dairy: 10, produce: 10 }, price: 55, pts: 200, unlock: 35000 },
  { id: 'cheesecake', name: 'Berry Cake',      img: 'assets/dish_cheesecake.jpg', cost: { meat: 0,  dairy: 15, produce: 12 }, price: 50, pts: 180, unlock: 50000 }
];

const CUSTOMERS = [
  {
    id: 'kid',
    name: 'Leo (Eager Kid)',
    role: 'Neighborhood Kid',
    img: 'assets/cust_kid.jpg',
    patience: 13,
    prefs: ['juice', 'salad', 'tart', 'pumpkin', 'cheesecake'],
    bio: 'Energetic local kid who rushes in after football practice. Impatient, but fast service awards +30 bonus Reputation!'
  },
  {
    id: 'critic',
    name: 'Critic Victor',
    role: 'Gourmet Food Critic',
    img: 'assets/cust_critic.jpg',
    patience: 16,
    prefs: ['soup', 'tart', 'stew', 'chicken', 'shepherd'],
    bio: 'Strict veteran critic searching for honest farm-to-table flavor. Awards 2x Reputation if satisfied, but deducts -150 Pts if angry!'
  },
  {
    id: 'vlogger',
    name: 'Maya (Eco-Vlogger)',
    role: 'Sustainability Creator',
    img: 'assets/cust_vlogger.jpg',
    patience: 19,
    prefs: ['salad', 'juice', 'soup', 'tea', 'pumpkin'],
    bio: 'Reviews eco-friendly restaurants for thousands of followers. Leaves +$10 tip & +100 Pts if your zero-waste streak is active!'
  },
  {
    id: 'banker',
    name: 'Mr. Sterling',
    role: 'Busy Banker',
    img: 'assets/cust_banker.jpg',
    patience: 11,
    prefs: ['stew', 'chicken', 'shepherd', 'soup', 'salad'],
    bio: 'Always racing the clock on his lunch break. Very short patience, but leaves a generous +$20 tip if served quickly!'
  },
  {
    id: 'artist',
    name: 'Luna (Artist)',
    role: 'Chilled Painter',
    img: 'assets/cust_artist.jpg',
    patience: 26,
    prefs: ['salad', 'juice', 'soup', 'tart', 'tea', 'stew', 'pumpkin', 'chicken', 'shepherd', 'cheesecake'],
    bio: 'Sketches the bistro while enjoying seasonal meals. Extremely patient and happy to try any dish on your menu.'
  }
];

const NPCS = [
  {
    name: 'Old Barnaby',
    role: 'Local Organic Farmer',
    img: 'assets/npc_barnaby.jpg',
    bio: 'Third-generation farmer running the Farm Market. Champions local, low-carbon sourcing and warns chefs never to overbuy.'
  },
  {
    name: 'Clara',
    role: 'Shelter Volunteer',
    img: 'assets/npc_shelter.jpg',
    bio: 'Coordinates the Community & Animal Shelter. Turns your unserved leftover dishes into warm meals and boosts your social impact.'
  }
];

const SEEDS = {
  carrot:  { name: 'Carrot',  emoji: '🥕', cost: 10, yield: 15 },
  lettuce: { name: 'Lettuce', emoji: '🥬', cost: 10, yield: 15 },
  tomato:  { name: 'Tomato',  emoji: '🍅', cost: 10, yield: 15 },
  apple:   { name: 'Apple',   emoji: '🍎', cost: 15, yield: 20 }
};

const MILESTONES = [
  { pts: 1000,   title: 'Rustic Apple Tart',            desc: 'Unlocks Rustic Apple Tart recipe ($30 / +100 Pts).' },
  { pts: 2500,   title: 'Spiced Herbal Tea + $50',      desc: 'Unlocks Spiced Herbal Tea recipe & awards $50 grant.' },
  { pts: 5000,   title: 'Classic Beef Stew',            desc: 'Unlocks hearty Classic Beef Stew ($45 / +150 Pts).' },
  { pts: 10000,  title: 'Warm Rustic Wood Ambience',    desc: 'Upgrades restaurant interior + unlocks Pumpkin Pie.' },
  { pts: 20000,  title: 'Pro Compost & Herb Chicken',   desc: 'Compost produces 2x Fertilizer + unlocks Herb Chicken.' },
  { pts: 35000,  title: "Shepherd's Pie Recipe",        desc: "Unlocks high-profit Shepherd's Pie ($55 / +200 Pts)." },
  { pts: 50000,  title: 'Greenhouse Bistro Ambience',   desc: 'Unlocks sunlit Greenhouse theme + Berry Cheesecake.' },
  { pts: 75000,  title: 'VIP Local Partner (-25%)',     desc: 'Permanent 25% VIP discount at Farm Market.' },
  { pts: 100000, title: 'Master of Sustainable Gastronomy', desc: 'Golden Chef Trophy & ultimate Zero-Waste title!' }
];

// ----------------- MUTABLE GAME STATE -----------------

let state = createFreshState('Chef Fethi', 'classic', 'compost');
let activeCustomers = [null, null, null];
let shiftInterval = null;
let spawnCounter = 0;
let isPaused = false;
let patienceFreezeSec = 0;
let rushSec = 0;
let selectedSeed = 'carrot';
let fertilizerMode = false;

function createFreshState(nickname, avatar, perk) {
  return {
    nickname: nickname || 'Chef',
    avatar: avatar || 'classic',
    perk: perk || 'compost',
    day: 1,
    phase: 'restaurant', // 'restaurant' | 'evening'
    timeLeft: 60,
    money: 100,
    score: 0,
    streak: 0,
    combo: 0,
    reserves: { meat: 60, dairy: 60, produce: 70 },
    scraps: 0,
    compostProgress: 0,
    fertilizer: perk === 'compost' ? 2 : 0,
    goldenCompost: 0,
    leftovers: 0,
    plots: Array.from({ length: 9 }, () => ({ status: 'empty', seed: null })),
    claimedMilestones: [],
    dayStats: { served: 0, missed: 0, earned: 0, donated: 0, composted: 0 }
  };
}

// ----------------- DOM HELPERS -----------------

const $ = (id) => document.getElementById(id);

function showToast(msg, type = '') {
  const container = $('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore storage errors */ }
}

function loadSavedGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function formatTime(sec) {
  const s = Math.max(0, Math.ceil(sec));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function getMarketDiscount() {
  let disc = 0;
  if (state.perk === 'bargainer') disc += 0.15;
  if (state.score >= 75000) disc += 0.25;
  return Math.min(0.40, disc);
}

function getMarketPrice(base) {
  return Math.max(5, Math.round(base * (1 - getMarketDiscount())));
}

// ----------------- ONBOARDING SETUP -----------------

let pickedAvatar = 'classic';
let pickedPerk = 'compost';

function initOnboarding() {
  document.querySelectorAll('#avatar-grid .choice-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#avatar-grid .choice-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      pickedAvatar = btn.dataset.avatar;
    });
  });

  document.querySelectorAll('#perk-grid .perk-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#perk-grid .perk-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      pickedPerk = btn.dataset.perk;
    });
  });

  const saved = loadSavedGame();
  if (saved && saved.nickname) {
    $('btn-continue-game').classList.remove('hidden');
    $('btn-continue-game').addEventListener('click', () => {
      state = saved;
      launchGameScreen();
      if (state.phase === 'evening') {
        enterEveningPhase(false);
      } else {
        startShiftPhase();
      }
    });
  }

  $('btn-start-game').addEventListener('click', () => {
    const nick = $('input-nickname').value.trim() || 'Chef';
    state = createFreshState(nick, pickedAvatar, pickedPerk);
    saveGame();
    launchGameScreen();
    startShiftPhase();
    showToast(`Welcome, ${state.nickname}! Your Zero-Waste Bistro is open!`, 'good');
  });
}

function launchGameScreen() {
  $('screen-onboarding').classList.remove('active');
  $('screen-game').classList.add('active');
  $('hud-avatar').src = AVATARS[state.avatar] || AVATARS.classic;
  $('hud-nickname').textContent = state.nickname;
  renderCastModal();
  updateAllUI();
}

// ----------------- PHASE 1: 60-SECOND RESTAURANT SHIFT -----------------

function startShiftPhase() {
  clearInterval(shiftInterval);
  state.phase = 'restaurant';
  state.timeLeft = 60;
  state.combo = 0;
  state.dayStats = { served: 0, missed: 0, earned: 0, donated: 0, composted: 0 };
  activeCustomers = [null, null, null];
  isPaused = false;
  patienceFreezeSec = 0;
  rushSec = 0;
  spawnCounter = 0;

  $('phase-restaurant').classList.remove('hidden');
  $('phase-evening').classList.add('hidden');
  $('end-day-box').classList.add('hidden');
  $('btn-pause').textContent = '⏸ Pause';

  updateRestaurantAmbience();
  spawnCustomer();
  setTimeout(() => { if (state.phase === 'restaurant') spawnCustomer(); }, 1800);

  updateAllUI();
  renderMenuGrid();
  renderCustomers();

  shiftInterval = setInterval(gameTick, 250);
}

function updateRestaurantAmbience() {
  const bg = $('restaurant-bg');
  if (state.score >= 50000) {
    bg.style.backgroundImage = "url('assets/bg_restaurant_greenhouse.jpg')";
  } else if (state.score >= 10000) {
    bg.style.backgroundImage = "url('assets/bg_restaurant_rustic.jpg')";
  } else {
    bg.style.backgroundImage = "url('assets/bg_restaurant.jpg')";
  }
}

function gameTick() {
  if (isPaused || state.phase !== 'restaurant') return;

  const dt = 0.25;
  state.timeLeft -= dt;

  if (patienceFreezeSec > 0) patienceFreezeSec = Math.max(0, patienceFreezeSec - dt);
  if (rushSec > 0) rushSec = Math.max(0, rushSec - dt);

  // Spawn new customers smoothly
  spawnCounter += dt;
  const spawnRate = Math.max(2.6, 4.6 - state.day * 0.15);
  if (spawnCounter >= spawnRate) {
    spawnCounter = 0;
    spawnCustomer();
  }

  // Update customer patience
  let customersChanged = false;
  for (let i = 0; i < 3; i++) {
    const c = activeCustomers[i];
    if (!c) continue;

    if (patienceFreezeSec <= 0) {
      c.patienceLeft -= dt;
    }

    if (c.patienceLeft <= 0) {
      handleCustomerLeft(i);
      customersChanged = true;
    }
  }

  if (state.timeLeft <= 0) {
    state.timeLeft = 0;
    clearInterval(shiftInterval);
    enterEveningPhase(true);
    return;
  }

  updateHUD();
  updatePowerupUI();
  if (customersChanged) {
    renderCustomers();
    renderMenuGrid();
  } else {
    updatePatienceBarsOnly();
  }
}

function getUnlockedRecipes() {
  return RECIPES.filter(r => state.score >= r.unlock);
}

function spawnCustomer() {
  const emptySlots = [];
  for (let i = 0; i < 3; i++) {
    if (!activeCustomers[i]) emptySlots.push(i);
  }
  if (emptySlots.length === 0) return;

  const slot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
  const template = CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];
  const unlocked = getUnlockedRecipes();
  const matchingPrefs = unlocked.filter(r => template.prefs.includes(r.id));
  const pool = matchingPrefs.length > 0 ? matchingPrefs : unlocked;
  const recipe = pool[Math.floor(Math.random() * pool.length)];

  activeCustomers[slot] = {
    template,
    recipe,
    maxPatience: template.patience,
    patienceLeft: template.patience
  };

  renderCustomers();
  renderMenuGrid();
}

function handleCustomerLeft(slotIndex) {
  const c = activeCustomers[slotIndex];
  if (!c) return;
  activeCustomers[slotIndex] = null;
  state.combo = 0;
  state.dayStats.missed += 1;

  const penalty = c.template.id === 'critic' ? 150 : 75;
  state.score = Math.max(0, state.score - penalty);
  showToast(`😠 ${c.template.name} left! -${penalty} Reputation`, 'bad');
  updateAllUI();
}

function cookDish(recipeId) {
  if (state.phase !== 'restaurant' || isPaused) return;
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe || state.score < recipe.unlock) return;

  // Check Kitchen Reserves
  if (
    state.reserves.meat < recipe.cost.meat ||
    state.reserves.dairy < recipe.cost.dairy ||
    state.reserves.produce < recipe.cost.produce
  ) {
    showToast(`⚠️ Out of stock for ${recipe.name}! Restock after shift.`, 'bad');
    return;
  }

  // Consume reserves & generate organic scraps
  state.reserves.meat -= recipe.cost.meat;
  state.reserves.dairy -= recipe.cost.dairy;
  state.reserves.produce -= recipe.cost.produce;
  state.scraps += 1;

  // Find waiting customer with this order (prioritize lowest patience)
  let targetSlot = -1;
  let lowestPatience = Infinity;
  for (let i = 0; i < 3; i++) {
    const c = activeCustomers[i];
    if (c && c.recipe.id === recipe.id && c.patienceLeft < lowestPatience) {
      lowestPatience = c.patienceLeft;
      targetSlot = i;
    }
  }

  if (targetSlot === -1) {
    // Over-prepped -> becomes Leftover Dish for Shelter!
    state.leftovers += 1;
    showToast(`📦 Extra ${recipe.name} packed as Leftover for the Shelter!`, '');
    updateAllUI();
    renderMenuGrid();
    return;
  }

  // Serve Customer!
  const served = activeCustomers[targetSlot];
  activeCustomers[targetSlot] = null;
  const patienceRatio = served.patienceLeft / served.maxPatience;

  let earnedMoney = recipe.price;
  let earnedPts = recipe.pts;
  let bonusNote = '';

  // Character-specific special mechanics
  if (served.template.id === 'kid' && patienceRatio > 0.5) {
    earnedPts += 30;
    bonusNote = ' (+30 Fast Kid!)';
  } else if (served.template.id === 'critic') {
    earnedPts *= 2;
    bonusNote = ' (2x Critic!)';
  } else if (served.template.id === 'vlogger' && state.streak >= 1) {
    earnedMoney += 10;
    earnedPts += 100;
    bonusNote = ' (+Eco-Vlogger Bonus!)';
  } else if (served.template.id === 'banker' && patienceRatio > 0.5) {
    earnedMoney += 20;
    bonusNote = ' (+$20 Banker Tip!)';
  }

  // Zero-Waste Rush 2x Multiplier
  if (rushSec > 0) {
    earnedPts *= 2;
  }

  state.money += earnedMoney;
  state.score += earnedPts;
  state.dayStats.served += 1;
  state.dayStats.earned += earnedMoney;

  // Streak / Combo toward Rush
  state.combo += 1;
  if (state.combo >= 5) {
    state.combo = 0;
    rushSec = 15;
    showToast('🔥 ZERO-WASTE RUSH! 2x Score for 15 seconds!', 'good');
  } else {
    showToast(`✅ Served ${recipe.name}: +$${earnedMoney}, +${earnedPts} Pts${bonusNote}`, 'good');
  }

  checkMilestones();
  updateAllUI();
  renderCustomers();
  renderMenuGrid();
}

function renderCustomers() {
  const row = $('customers-row');
  row.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const c = activeCustomers[i];
    if (!c) {
      const empty = document.createElement('div');
      empty.style.minHeight = '10px';
      row.appendChild(empty);
      continue;
    }

    const pct = Math.max(0, (c.patienceLeft / c.maxPatience) * 100);
    const barColor = patienceFreezeSec > 0 ? '#38bdf8' : (pct > 50 ? '#4caf50' : pct > 25 ? '#f59e0b' : '#ef4444');

    const card = document.createElement('div');
    card.className = 'customer-card';
    card.innerHTML = `
      <div class="order-bubble">
        <img src="${c.recipe.img}" alt="${c.recipe.name}" />
        <span>${c.recipe.name}</span>
      </div>
      <img src="${c.template.img}" alt="${c.template.name}" class="customer-img" />
      <div class="customer-name">${c.template.name}</div>
      <div class="patience-bar">
        <div class="patience-fill" id="pbar-${i}" style="width:${pct}%; background:${barColor};"></div>
      </div>
    `;
    row.appendChild(card);
  }
}

function updatePatienceBarsOnly() {
  for (let i = 0; i < 3; i++) {
    const c = activeCustomers[i];
    const bar = $(`pbar-${i}`);
    if (!c || !bar) continue;
    const pct = Math.max(0, (c.patienceLeft / c.maxPatience) * 100);
    bar.style.width = `${pct}%`;
    bar.style.background = patienceFreezeSec > 0 ? '#38bdf8' : (pct > 50 ? '#4caf50' : pct > 25 ? '#f59e0b' : '#ef4444');
  }
}

function renderMenuGrid() {
  const grid = $('menu-grid');
  grid.innerHTML = '';
  const wantedIds = new Set(activeCustomers.filter(Boolean).map(c => c.recipe.id));

  RECIPES.forEach((r) => {
    const locked = state.score < r.unlock;
    const hasStock =
      state.reserves.meat >= r.cost.meat &&
      state.reserves.dairy >= r.cost.dairy &&
      state.reserves.produce >= r.cost.produce;

    const btn = document.createElement('button');
    btn.className = 'dish-btn';
    if (locked) btn.classList.add('locked');
    else if (!hasStock) btn.classList.add('no-stock');
    else if (wantedIds.has(r.id)) btn.classList.add('highlight');

    const costParts = [];
    if (r.cost.meat) costParts.push(`🥩${r.cost.meat}`);
    if (r.cost.dairy) costParts.push(`🥛${r.cost.dairy}`);
    if (r.cost.produce) costParts.push(`🥦${r.cost.produce}`);

    btn.innerHTML = `
      <img src="${r.img}" alt="${r.name}" />
      <div class="dish-name">${locked ? `🔒 ${r.unlock.toLocaleString()}` : r.name}</div>
      <div class="dish-cost">${locked ? 'Locked' : costParts.join(' ')}</div>
    `;

    btn.disabled = locked;
    btn.addEventListener('click', () => cookDish(r.id));
    grid.appendChild(btn);
  });
}

// ----------------- PHASE 2: EVENING MANAGEMENT -----------------

function enterEveningPhase(fromShiftEnd) {
  state.phase = 'evening';
  activeCustomers = [null, null, null];
  fertilizerMode = false;

  if (fromShiftEnd) {
    // Realistic kitchen closing surplus: 1 to 2 hot dishes left in the steamer
    const surplus = state.dayStats.served > 0 ? (Math.random() < 0.5 ? 1 : 2) : 1;
    state.leftovers += surplus;
    showToast(`🔔 Shift Over! ${surplus} closing leftover dish(es) ready for Shelter donation.`, 'good');
  }

  $('phase-restaurant').classList.add('hidden');
  $('phase-evening').classList.remove('hidden');
  $('end-day-box').classList.remove('hidden');

  switchEveningTab('garden');
  updateAllUI();
  renderGarden();
  saveGame();
}

function switchEveningTab(tabName) {
  document.querySelectorAll('.evening-tabs .tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.evening-tab').forEach((el) => {
    el.classList.toggle('active', el.id === `tab-${tabName}`);
  });
  updateEveningUI();
}

// --- GARDEN & COMPOST ---

function dumpScrapsToCompost() {
  if (state.scraps <= 0) {
    showToast('No organic scraps to compost right now.', '');
    return;
  }
  const dumped = state.scraps;
  state.compostProgress += dumped;
  state.dayStats.composted += dumped;
  state.scraps = 0;

  let produced = 0;
  const fertPerBatch = state.score >= 20000 ? 2 : 1;
  while (state.compostProgress >= 5) {
    state.compostProgress -= 5;
    state.fertilizer += fertPerBatch;
    produced += fertPerBatch;
  }

  if (produced > 0) {
    showToast(`♻️ Composted ${dumped} scraps → +${produced} Fertilizer ready!`, 'good');
  } else {
    showToast(`♻️ Dumped ${dumped} scraps into Compost Bin!`, 'good');
  }

  updateAllUI();
  renderGarden();
  saveGame();
}

function handlePlotClick(index) {
  const plot = state.plots[index];

  // Harvest ready crop
  if (plot.status === 'ready') {
    const seedInfo = SEEDS[plot.seed];
    const bonus = state.perk === 'compost' ? 1 : 0;
    const gain = seedInfo.yield + bonus;
    state.reserves.produce = Math.min(100, state.reserves.produce + gain);
    plot.status = 'empty';
    plot.seed = null;
    showToast(`🧺 Harvested ${seedInfo.name}! +${gain} Free Produce Reserve!`, 'good');
    updateAllUI();
    renderGarden();
    saveGame();
    return;
  }

  // Apply fertilizer to growing crop
  if (plot.status === 'growing') {
    if (fertilizerMode && state.fertilizer > 0) {
      state.fertilizer -= 1;
      plot.status = 'ready';
      if (state.fertilizer === 0) fertilizerMode = false;
      showToast('🌿 Fertilized! Crop matured instantly — tap to harvest!', 'good');
      updateAllUI();
      renderGarden();
      saveGame();
    } else {
      showToast('🌱 Growing! Enable Fertilizer Mode to mature now, or wait until tomorrow.', '');
    }
    return;
  }

  // Plant seed on empty soil
  if (plot.status === 'empty') {
    const seedInfo = SEEDS[selectedSeed];
    if (state.money < seedInfo.cost) {
      showToast(`Need $${seedInfo.cost} to buy ${seedInfo.name} seeds.`, 'bad');
      return;
    }
    state.money -= seedInfo.cost;
    plot.status = 'growing';
    plot.seed = selectedSeed;
    showToast(`🌱 Planted ${seedInfo.name} (-$${seedInfo.cost}).`, 'good');
    updateAllUI();
    renderGarden();
    saveGame();
  }
}

function useGoldenCompost() {
  if (state.goldenCompost <= 0) return;
  state.goldenCompost -= 1;
  state.plots.forEach((plot) => {
    if (plot.status === 'empty') {
      plot.seed = 'apple';
    }
    plot.status = 'ready';
  });
  showToast('✨ GOLDEN COMPOST! All 9 garden plots are ready to harvest!', 'good');
  updateAllUI();
  renderGarden();
  saveGame();
}

function renderGarden() {
  const grid = $('garden-grid');
  grid.innerHTML = '';

  state.plots.forEach((plot, idx) => {
    const btn = document.createElement('button');
    btn.className = `garden-plot ${plot.status}`;

    if (plot.status === 'empty') {
      btn.innerHTML = `<span class="plot-emoji">🟫</span><span class="plot-label">Plant ${SEEDS[selectedSeed].name}</span>`;
    } else if (plot.status === 'growing') {
      const s = SEEDS[plot.seed];
      btn.innerHTML = `<span class="plot-emoji">🌱</span><span class="plot-label">${s.name}<br>${fertilizerMode ? 'Tap: Fertilize!' : 'Growing...'}</span>`;
    } else {
      const s = SEEDS[plot.seed];
      btn.innerHTML = `<span class="plot-emoji">${s.emoji}</span><span class="plot-label">Harvest<br>+${s.yield + (state.perk === 'compost' ? 1 : 0)}</span>`;
    }

    btn.addEventListener('click', () => handlePlotClick(idx));
    grid.appendChild(btn);
  });
}

// --- FARM MARKET ---

function buyMarketPack(type, baseCost) {
  const price = getMarketPrice(baseCost);
  if (state.reserves[type] >= 100) {
    showToast('Reserve is already 100%! Avoid overbuying to prevent waste.', '');
    return;
  }
  if (state.money < price) {
    showToast(`Not enough money! You need $${price}.`, 'bad');
    return;
  }
  state.money -= price;
  state.reserves[type] = Math.min(100, state.reserves[type] + 25);
  showToast(`🚜 Bought ${type.toUpperCase()} pack (+25 Reserve) for $${price}!`, 'good');
  updateAllUI();
  saveGame();
}

// --- SHELTER DONATION ---

function donateLeftovers() {
  if (state.leftovers <= 0) {
    showToast('No leftover dishes to donate right now.', '');
    return;
  }
  const count = state.leftovers;
  const ptsPerDish = state.perk === 'shelter' ? 188 : 150;
  const totalPts = count * ptsPerDish;

  state.leftovers = 0;
  state.score += totalPts;
  state.dayStats.donated += count;

  showToast(`❤️ Donated ${count} dish(es) to Shelter! +${totalPts} Reputation!`, 'good');
  checkMilestones();
  updateAllUI();
  saveGame();
}

// ----------------- END DAY & PENALTY / REWARD CHECK -----------------

function endCurrentDay() {
  const wastedScraps = state.scraps;
  const wastedLeftovers = state.leftovers;
  const totalWasted = wastedScraps + wastedLeftovers;

  let wastePenalty = 0;
  let zeroWasteBonus = 0;
  let gotGolden = false;

  if (totalWasted > 0) {
    wastePenalty = totalWasted * 100;
    state.score = Math.max(0, state.score - wastePenalty);
    state.streak = 0;
    state.scraps = 0;
    state.leftovers = 0;
  } else {
    state.streak += 1;
    zeroWasteBonus = 150;
    state.score += zeroWasteBonus;
    if (state.streak % 3 === 0) {
      state.goldenCompost += 1;
      gotGolden = true;
    }
  }

  // Overnight garden growth
  state.plots.forEach((p) => {
    if (p.status === 'growing') p.status = 'ready';
  });

  const unlockedNow = checkMilestones();
  saveGame();
  updateAllUI();

  // Build Summary Modal
  $('summary-title').textContent = `📅 Day ${state.day} Report`;
  let html = `
    <div class="summary-line"><span>Dishes Served:</span><strong>${state.dayStats.served}</strong></div>
    <div class="summary-line"><span>Shift Earnings:</span><strong>+$${state.dayStats.earned}</strong></div>
    <div class="summary-line"><span>Scraps Composted:</span><strong>${state.dayStats.composted}</strong></div>
    <div class="summary-line"><span>Shelter Donations:</span><strong>${state.dayStats.donated} dishes</strong></div>
  `;

  if (wastePenalty > 0) {
    html += `
      <div class="summary-line penalty">
        <span>⚠️ Food Waste Penalty (${totalWasted} unmanaged):</span>
        <strong>-${wastePenalty} Pts</strong>
      </div>
    `;
  } else {
    html += `
      <div class="summary-line bonus">
        <span>🌿 Perfect Zero-Waste Day (Streak ${state.streak}):</span>
        <strong>+${zeroWasteBonus} Pts</strong>
      </div>
    `;
  }

  if (gotGolden) {
    html += `
      <div class="summary-line bonus">
        <span>✨ 3-Day Zero-Waste Reward:</span>
        <strong>+1 Golden Compost!</strong>
      </div>
    `;
  }

  unlockedNow.forEach((m) => {
    html += `
      <div class="summary-line bonus">
        <span>🏆 Milestone Unlocked:</span>
        <strong>${m.title}</strong>
      </div>
    `;
  });

  $('summary-body').innerHTML = html;
  $('modal-summary').classList.remove('hidden');
}

// ----------------- MILESTONES -----------------

function checkMilestones() {
  const newlyUnlocked = [];
  MILESTONES.forEach((m) => {
    if (state.score >= m.pts && !state.claimedMilestones.includes(m.pts)) {
      state.claimedMilestones.push(m.pts);
      newlyUnlocked.push(m);

      if (m.pts === 2500) {
        state.money += 50;
      }
      showToast(`🏆 Milestone Unlocked: ${m.title}!`, 'good');
    }
  });
  return newlyUnlocked;
}

function renderMilestonesModal() {
  const list = $('milestones-list');
  list.innerHTML = '';
  MILESTONES.forEach((m) => {
    const unlocked = state.score >= m.pts;
    const card = document.createElement('div');
    card.className = `milestone-card ${unlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <div class="milestone-pts">${unlocked ? '✅ UNLOCKED' : '🔒 LOCKED'} — ${m.pts.toLocaleString()} Pts</div>
      <div class="milestone-title">${m.title}</div>
      <div class="milestone-desc">${m.desc}</div>
    `;
    list.appendChild(card);
  });
}

function renderCastModal() {
  const list = $('cast-list');
  list.innerHTML = '';
  [...CUSTOMERS, ...NPCS].forEach((ch) => {
    const card = document.createElement('div');
    card.className = 'cast-card';
    card.innerHTML = `
      <img src="${ch.img}" alt="${ch.name}" />
      <div>
        <h4>${ch.name}</h4>
        <div class="cast-role">${ch.role}</div>
        <p>${ch.bio}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

// ----------------- UI SYNCHRONIZATION -----------------

function updateHUD() {
  $('hud-day').textContent = state.day;
  $('hud-timer').textContent = state.phase === 'restaurant' ? formatTime(state.timeLeft) : 'EVENING';
  $('hud-money').textContent = state.money.toLocaleString();
  $('hud-score').textContent = state.score.toLocaleString();
  $('hud-streak').textContent = state.streak;

  const badge = $('hud-phase-badge');
  if (state.phase === 'restaurant') {
    badge.textContent = 'DAY SHIFT';
    badge.classList.remove('evening');
  } else {
    badge.textContent = 'EVENING PREP';
    badge.classList.add('evening');
  }
}

function updatePowerupUI() {
  const btn = $('btn-power-patience');
  if (patienceFreezeSec > 0) {
    btn.textContent = `❄️ Frozen (${Math.ceil(patienceFreezeSec)}s)`;
    btn.disabled = true;
  } else {
    btn.innerHTML = `🍵 Patience Aroma (<span id="patience-cost">$30</span>)`;
    btn.disabled = state.money < 30;
  }

  const rush = $('rush-indicator');
  if (rushSec > 0) {
    rush.classList.add('active');
    rush.innerHTML = `🔥 2x SCORE RUSH (${Math.ceil(rushSec)}s)`;
  } else {
    rush.classList.remove('active');
    rush.innerHTML = `⚡ Streak: <strong id="combo-count">${state.combo}</strong>/5 (2x Score)`;
  }
}

function updateReserveBar(valId, barId, amount) {
  $(valId).textContent = `${amount} / 100`;
  const bar = $(barId);
  bar.style.width = `${Math.max(0, Math.min(100, amount))}%`;
  bar.classList.remove('green', 'yellow', 'red');
  if (amount >= 50) bar.classList.add('green');
  else if (amount >= 20) bar.classList.add('yellow');
  else bar.classList.add('red');
}

function updateEveningUI() {
  // Garden & Compost
  $('garden-scraps-count').textContent = state.scraps;
  $('compost-progress-fill').style.width = `${(state.compostProgress / 5) * 100}%`;
  const fertBatch = state.score >= 20000 ? 2 : 1;
  $('compost-progress-text').textContent = `${state.compostProgress} / 5 scraps → +${fertBatch} Fertilizer`;
  $('btn-dump-compost').disabled = state.scraps <= 0;

  $('fertilizer-count').textContent = state.fertilizer;
  const fBtn = $('btn-use-fertilizer');
  fBtn.textContent = `Use Fertilizer Mode: ${fertilizerMode ? 'ON' : 'OFF'}`;
  fBtn.classList.toggle('active', fertilizerMode);
  fBtn.disabled = state.fertilizer <= 0 && !fertilizerMode;

  const gBtn = $('btn-golden-compost');
  if (state.goldenCompost > 0) {
    gBtn.classList.remove('hidden');
    gBtn.textContent = `✨ Use Golden Compost (${state.goldenCompost})`;
  } else {
    gBtn.classList.add('hidden');
  }

  // Farm Market
  const discPct = Math.round(getMarketDiscount() * 100);
  const badge = $('market-discount-badge');
  if (discPct > 0) {
    badge.classList.remove('hidden');
    badge.textContent = `-${discPct}% OFF`;
  } else {
    badge.classList.add('hidden');
  }
  $('btn-buy-meat').textContent = `Buy $${getMarketPrice(35)}`;
  $('btn-buy-dairy').textContent = `Buy $${getMarketPrice(25)}`;
  $('btn-buy-veggie').textContent = `Buy $${getMarketPrice(20)}`;

  // Shelter
  $('shelter-leftovers-count').textContent = state.leftovers;
  $('donation-pts-label').textContent = `+${state.perk === 'shelter' ? 188 : 150} Reputation Score`;
  $('btn-donate-leftovers').disabled = state.leftovers <= 0;
}

function updateAllUI() {
  updateHUD();
  updatePowerupUI();

  updateReserveBar('val-meat', 'bar-meat', state.reserves.meat);
  updateReserveBar('val-dairy', 'bar-dairy', state.reserves.dairy);
  updateReserveBar('val-produce', 'bar-produce', state.reserves.produce);

  $('shift-scraps-count').textContent = state.scraps;
  $('shift-leftovers-count').textContent = state.leftovers;
  $('side-scraps').textContent = state.scraps;
  $('side-leftovers').textContent = state.leftovers;
  $('side-fertilizer').textContent = state.fertilizer;

  updateEveningUI();
}

// ----------------- EVENT LISTENERS -----------------

function initGameEvents() {
  // Power-ups & Pause
  $('btn-power-patience').addEventListener('click', () => {
    if (state.money < 30 || patienceFreezeSec > 0) return;
    state.money -= 30;
    patienceFreezeSec = 10;
    showToast('🍵 Herbal Patience Aroma! Customer patience frozen for 10s!', 'good');
    updateAllUI();
  });

  $('btn-pause').addEventListener('click', () => {
    isPaused = !isPaused;
    $('btn-pause').textContent = isPaused ? '▶ Resume' : '⏸ Pause';
    showToast(isPaused ? '⏸ Shift Paused' : '▶ Shift Resumed', '');
  });

  // Evening Tabs
  document.querySelectorAll('.evening-tabs .tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchEveningTab(btn.dataset.tab));
  });

  // Garden & Compost
  $('btn-dump-compost').addEventListener('click', dumpScrapsToCompost);
  $('btn-use-fertilizer').addEventListener('click', () => {
    if (state.fertilizer <= 0 && !fertilizerMode) return;
    fertilizerMode = !fertilizerMode;
    updateEveningUI();
    renderGarden();
  });
  $('btn-golden-compost').addEventListener('click', useGoldenCompost);

  document.querySelectorAll('#seed-toolbar .seed-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#seed-toolbar .seed-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSeed = btn.dataset.seed;
      renderGarden();
    });
  });

  // Farm Market
  $('btn-buy-meat').addEventListener('click', () => buyMarketPack('meat', 35));
  $('btn-buy-dairy').addEventListener('click', () => buyMarketPack('dairy', 25));
  $('btn-buy-veggie').addEventListener('click', () => buyMarketPack('produce', 20));

  // Shelter & End Day
  $('btn-donate-leftovers').addEventListener('click', donateLeftovers);
  $('btn-end-day').addEventListener('click', endCurrentDay);

  $('btn-next-day').addEventListener('click', () => {
    $('modal-summary').classList.add('hidden');
    state.day += 1;
    saveGame();
    startShiftPhase();
  });

  // Modals
  $('btn-open-milestones').addEventListener('click', () => {
    renderMilestonesModal();
    $('modal-milestones').classList.remove('hidden');
  });

  $('btn-open-cast').addEventListener('click', () => {
    $('modal-cast').classList.remove('hidden');
  });

  document.querySelectorAll('.btn-close-modal').forEach((btn) => {
    btn.addEventListener('click', () => {
      $(btn.dataset.close).classList.add('hidden');
    });
  });
}

// ----------------- BOOTSTRAP -----------------

document.addEventListener('DOMContentLoaded', () => {
  initOnboarding();
  initGameEvents();
});
