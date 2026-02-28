const HOUSEHOLD_ITEMS = [
  'cup', 'plate', 'spoon', 'fork', 'knife', 'glass', 'bowl', 'kettle', 'toaster', 'microwave',
  'toothbrush', 'toothpaste', 'soap', 'towel', 'shampoo', 'mirror', 'comb', 'razor',
  'pillow', 'blanket', 'phone', 'lamp', 'clock', 'book', 'glasses', 'remote',
  'remote control', 'newspaper', 'magazine', 'plant', 'picture frame', 'candle', 'vase',
  'pen', 'pencil', 'notebook', 'stapler', 'keyboard', 'mouse',
  'keys', 'wallet', 'hat', 'shoes', 'bag', 'umbrella', 'headphones',
  'bottle', 'can', 'food container', 'pot', 'pan', 'oven', 'refrigerator',
  'watch', 'ring', 'bracelet', 'sunglasses', 'mask',
  'shoe', 'jacket', 'scarf', 'belt',
  'laptop', 'tablet', 'charger', 'cable',
  'table', 'chair', 'couch', 'desk', 'shelf',
  'basket', 'box', 'letter', 'envelope',
  'battery', 'flashlight', 'tool', 'hammer', 'screwdriver'
];

const ITEM_ALIASES = {
  'remote control': 'remote',
  'tv remote': 'remote',
  'television remote': 'remote',
  'cellular telephone': 'phone',
  'mobile phone': 'phone',
  'mobile': 'phone',
  'pillow': 'pillow',
  'cushion': 'pillow',
  'bed pillow': 'pillow',
  'watering can': 'pot',
  'flowerpot': 'pot',
  'pot': 'pot',
  'pan': 'pan',
  'frying pan': 'pan',
  'skillet': 'pan',
  'cooking pan': 'pan',
  'bowl': 'bowl',
  'mixing bowl': 'bowl',
  'plate': 'plate',
  'dining plate': 'plate',
  'spoon': 'spoon',
  'tablespoon': 'spoon',
  'teaspoon': 'spoon',
  'fork': 'fork',
  'knife': 'knife',
  'cutlery knife': 'knife',
  'chef knife': 'knife',
  'glass': 'glass',
  'drinking glass': 'glass',
  'water glass': 'glass',
  'cup': 'cup',
  'coffee cup': 'cup',
  'mug': 'cup',
  'toothbrush': 'toothbrush',
  'toothpaste': 'toothpaste',
  'soap': 'soap',
  'bar soap': 'soap',
  'towel': 'towel',
  'hand towel': 'towel',
  'bath towel': 'towel',
  'shampoo': 'shampoo',
  'mirror': 'mirror',
  'hand mirror': 'mirror',
  'comb': 'comb',
  'hairbrush': 'comb',
  'razor': 'razor',
  'shaver': 'razor',
  'electric razor': 'razor',
  'blanket': 'blanket',
  'comforter': 'blanket',
  'duvet': 'blanket',
  'lamp': 'lamp',
  'table lamp': 'lamp',
  'desk lamp': 'lamp',
  'bedside lamp': 'lamp',
  'clock': 'clock',
  'alarm clock': 'clock',
  'watch': 'watch',
  'wristwatch': 'watch',
  'book': 'book',
  'notebook': 'notebook',
  'glasses': 'glasses',
  'eyeglasses': 'glasses',
  'spectacles': 'glasses',
  'reading glasses': 'glasses',
  'newspaper': 'newspaper',
  'magazine': 'magazine',
  'plant': 'plant',
  'houseplant': 'plant',
  'potted plant': 'plant',
  'flower': 'plant',
  'picture': 'picture frame',
  'photo': 'picture frame',
  'photograph': 'picture frame',
  'frame': 'picture frame',
  'candle': 'candle',
  'vase': 'vase',
  'flower vase': 'vase',
  'pen': 'pen',
  'ballpoint pen': 'pen',
  'pencil': 'pencil',
  'pencils': 'pencil',
  'stapler': 'stapler',
  'keyboard': 'keyboard',
  'computer keyboard': 'keyboard',
  'mouse': 'mouse',
  'computer mouse': 'mouse',
  'keys': 'keys',
  'key': 'keys',
  'keychain': 'keys',
  'wallet': 'wallet',
  'billfold': 'wallet',
  'hat': 'hat',
  'cap': 'hat',
  'baseball cap': 'hat',
  'shoes': 'shoes',
  'shoe': 'shoes',
  'sneakers': 'shoes',
  'boots': 'shoes',
  'bag': 'bag',
  'handbag': 'bag',
  'purse': 'bag',
  'backpack': 'bag',
  'umbrella': 'umbrella',
  'headphones': 'headphones',
  'headset': 'headphones',
  'earphones': 'headphones',
  'bottle': 'bottle',
  'water bottle': 'bottle',
  'can': 'can',
  'soda can': 'can',
  'food container': 'food container',
  'tupperware': 'food container',
  'container': 'food container',
  'oven': 'oven',
  'stove': 'oven',
  'microwave oven': 'microwave',
  'microwave': 'microwave',
  'refrigerator': 'refrigerator',
  'fridge': 'refrigerator',
  'refrigerator': 'refrigerator',
  'kettle': 'kettle',
  'teapot': 'kettle',
  'toaster': 'toaster',
  'toaster oven': 'toaster',
  'sunglasses': 'sunglasses',
  'shades': 'sunglasses',
  'sun glasses': 'sunglasses',
  'mask': 'mask',
  'face mask': 'mask',
  'jacket': 'jacket',
  'coat': 'jacket',
  'sweater': 'jacket',
  'scarf': 'scarf',
  'belt': 'belt',
  'watch': 'watch',
  'wristwatch': 'watch',
  'ring': 'ring',
  'bracelet': 'bracelet',
  'laptop': 'laptop',
  'notebook computer': 'laptop',
  'tablet': 'tablet',
  'ipad': 'tablet',
  'charger': 'charger',
  'phone charger': 'charger',
  'cable': 'cable',
  'usb cable': 'cable',
  'table': 'table',
  'desk': 'desk',
  'dining table': 'table',
  'chair': 'chair',
  'office chair': 'chair',
  'couch': 'couch',
  'sofa': 'couch',
  'shelf': 'shelf',
  'bookshelf': 'shelf',
  'basket': 'basket',
  'box': 'box',
  'cardboard box': 'box',
  'letter': 'letter',
  'envelope': 'envelope',
  'mail': 'letter',
  'battery': 'battery',
  'batteries': 'battery',
  'flashlight': 'flashlight',
  'torch': 'flashlight',
  'tool': 'tool',
  'tools': 'tool',
  'hammer': 'hammer',
  'screwdriver': 'screwdriver'
};

class ScanAlarmApp {
  constructor() {
    this.alarms = [];
    this.currentAlarm = null;
    this.model = null;
    this.isModelReady = false;
    this.isDetecting = false;
    this.alarmAudio = null;
    this.alarmInterval = null;
    this.emergencyTimeout = null;
    this.currentStream = null;
    
    this.init();
  }

  init() {
    this.loadAlarms();
    this.setupClock();
    this.setupEventListeners();
    this.registerServiceWorker();
    this.loadModel();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed:', err));
    }
  }

  async loadModel() {
    const statusEl = document.getElementById('model-status');
    try {
      statusEl.textContent = 'Loading AI model...';
      this.model = await mobilenet.load();
      this.isModelReady = true;
      statusEl.textContent = 'AI model ready ✓';
      statusEl.parentElement.classList.add('ready');
    } catch (error) {
      console.error('Failed to load model:', error);
      statusEl.textContent = 'AI model failed to load';
    }
  }

  loadAlarms() {
    const stored = localStorage.getItem('scanalarm_alarms');
    if (stored) {
      this.alarms = JSON.parse(stored);
    }
  }

  saveAlarms() {
    localStorage.setItem('scanalarm_alarms', JSON.stringify(this.alarms));
  }

  setupClock() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    document.getElementById('current-time').textContent = 
      `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
    
    this.checkAlarms(now);
  }

  checkAlarms(now) {
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    
    if (currentSecond !== 0) return;
    
    for (const alarm of this.alarms) {
      if (!alarm.enabled) continue;
      
      let alarmHour = alarm.hour;
      if (alarm.ampm === 'PM' && alarmHour !== 12) alarmHour += 12;
      if (alarm.ampm === 'AM' && alarmHour === 12) alarmHour = 0;
      
      if (alarmHour === currentHour && alarmMinute === currentMinute) {
        this.triggerAlarm(alarm);
        break;
      }
    }
  }

  triggerAlarm(alarm) {
    this.currentAlarm = alarm;
    
    this.playAlarmSound();
    this.vibrateDevice();
    
    this.showView('alarm-ringing-view');
    document.getElementById('target-item-name').textContent = alarm.item;
    document.getElementById('target-item-display').style.animation = 'pulse 0.5s ease-in-out infinite';
    
    this.emergencyTimeout = setTimeout(() => {
      this.stopAlarm(false);
    }, 30000);
  }

  playAlarmSound() {
    this.alarmAudio = new (window.AudioContext || window.webkitAudioContext)();
    
    const playTone = () => {
      const oscillator = this.alarmAudio.createOscillator();
      const gainNode = this.alarmAudio.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.alarmAudio.destination);
      
      oscillator.frequency.value = 880;
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.3, this.alarmAudio.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.alarmAudio.currentTime + 0.5);
      
      oscillator.start(this.alarmAudio.currentTime);
      oscillator.stop(this.alarmAudio.currentTime + 0.5);
    };
    
    this.alarmInterval = setInterval(playTone, 500);
  }

  vibrateDevice() {
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500, 200, 500]);
    }
  }

  stopAlarm(success = true) {
    if (this.alarmInterval) {
      clearInterval(this.alarmInterval);
      this.alarmInterval = null;
    }
    
    if (this.alarmAudio) {
      this.alarmAudio.close();
      this.alarmAudio = null;
    }
    
    if (this.emergencyTimeout) {
      clearTimeout(this.emergencyTimeout);
      this.emergencyTimeout = null;
    }
    
    if (success) {
      this.showSuccess();
      setTimeout(() => {
        document.getElementById('success-overlay').classList.remove('active');
        this.showView('home-view');
      }, 2000);
    } else {
      this.showView('home-view');
    }
    
    this.currentAlarm = null;
  }

  showSuccess() {
    document.getElementById('success-overlay').classList.add('active');
  }

  showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
  }

  setupEventListeners() {
    document.getElementById('add-alarm-btn').addEventListener('click', () => {
      this.showView('alarm-set-view');
      this.randomizeItem();
    });
    
    document.getElementById('back-to-home').addEventListener('click', () => {
      this.showView('home-view');
    });
    
    document.getElementById('hour-up').addEventListener('click', () => this.adjustPicker('hour', 1));
    document.getElementById('hour-down').addEventListener('click', () => this.adjustPicker('hour', -1));
    document.getElementById('minute-up').addEventListener('click', () => this.adjustPicker('minute', 1));
    document.getElementById('minute-down').addEventListener('click', () => this.adjustPicker('minute', -1));
    
    document.getElementById('ampm-am').addEventListener('click', () => this.setAmpm('AM'));
    document.getElementById('ampm-pm').addEventListener('click', () => this.setAmpm('PM'));
    
    document.getElementById('set-alarm-btn').addEventListener('click', () => this.saveAlarm());
    
    document.getElementById('scan-to-stop-btn').addEventListener('click', () => this.startScanning());
    document.getElementById('emergency-stop-btn').addEventListener('click', () => this.stopAlarm(false));
    
    document.getElementById('close-scan-btn').addEventListener('click', () => this.stopScanning());
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.currentAlarm) {
        this.checkAlarms(new Date());
      }
    });
  }

  adjustPicker(type, delta) {
    if (type === 'hour') {
      let current = parseInt(document.getElementById('hour-value').textContent);
      current = ((current - 1 + delta + 12) % 12) + 1;
      document.getElementById('hour-value').textContent = current.toString().padStart(2, '0');
    } else {
      let current = parseInt(document.getElementById('minute-value').textContent);
      current = (current + delta + 60) % 60;
      document.getElementById('minute-value').textContent = current.toString().padStart(2, '0');
    }
  }

  setAmpm(value) {
    document.getElementById('ampm-am').classList.toggle('active', value === 'AM');
    document.getElementById('ampm-pm').classList.toggle('active', value === 'PM');
  }

  getAmpm() {
    return document.getElementById('ampm-am').classList.contains('active') ? 'AM' : 'PM';
  }

  randomizeItem() {
    const randomItem = HOUSEHOLD_ITEMS[Math.floor(Math.random() * HOUSEHOLD_ITEMS.length)];
    document.getElementById('assigned-item').textContent = randomItem;
    return randomItem;
  }

  saveAlarm() {
    const hour = parseInt(document.getElementById('hour-value').textContent);
    const minute = parseInt(document.getElementById('minute-value').textContent);
    const ampm = this.getAmpm();
    const item = document.getElementById('assigned-item').textContent;
    
    const alarm = {
      id: Date.now(),
      hour,
      minute,
      ampm,
      item,
      enabled: true
    };
    
    this.alarms.push(alarm);
    this.saveAlarms();
    this.renderAlarms();
    this.showView('home-view');
  }

  deleteAlarm(id) {
    this.alarms = this.alarms.filter(a => a.id !== id);
    this.saveAlarms();
    this.renderAlarms();
  }

  toggleAlarm(id) {
    const alarm = this.alarms.find(a => a.id === id);
    if (alarm) {
      alarm.enabled = !alarm.enabled;
      this.saveAlarms();
      this.renderAlarms();
    }
  }

  renderAlarms() {
    const list = document.getElementById('alarms-list');
    const empty = document.getElementById('empty-state');
    
    if (this.alarms.length === 0) {
      empty.style.display = 'block';
      return;
    }
    
    empty.style.display = 'none';
    list.innerHTML = '';
    
    this.alarms.forEach(alarm => {
      const item = document.createElement('div');
      item.className = 'alarm-item';
      item.innerHTML = `
        <div class="alarm-info">
          <div class="alarm-time">
            ${alarm.hour}:${alarm.minute.toString().padStart(2, '0')}
            <span class="alarm-ampm">${alarm.ampm}</span>
          </div>
          <div class="alarm-item-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            ${alarm.item}
          </div>
        </div>
        <div class="alarm-actions">
          <div class="alarm-toggle ${alarm.enabled ? 'active' : ''}" data-id="${alarm.id}"></div>
          <button class="delete-alarm-btn" data-id="${alarm.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
      
      item.querySelector('.alarm-toggle').addEventListener('click', (e) => {
        this.toggleAlarm(parseInt(e.target.dataset.id));
      });
      
      item.querySelector('.delete-alarm-btn').addEventListener('click', (e) => {
        this.deleteAlarm(parseInt(e.currentTarget.dataset.id));
      });
      
      list.appendChild(item);
    });
  }

  async startScanning() {
    this.showView('scan-view');
    document.getElementById('scan-target-item').textContent = this.currentAlarm.item;
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      
      this.currentStream = stream;
      const video = document.getElementById('camera-feed');
      video.srcObject = stream;
      
      document.getElementById('scan-status').classList.add('hidden');
      
      setTimeout(() => {
        this.detectObjects();
      }, 1000);
    } catch (error) {
      console.error('Camera error:', error);
      alert('Camera access denied. Please enable camera permissions.');
      this.stopScanning();
    }
  }

  async detectObjects() {
    if (!this.isModelReady || !this.model) {
      setTimeout(() => this.detectObjects(), 500);
      return;
    }
    
    const video = document.getElementById('camera-feed');
    
    if (video.readyState !== 4) {
      requestAnimationFrame(() => this.detectObjects());
      return;
    }
    
    try {
      const predictions = await this.model.classify(video);
      this.displayPredictions(predictions);
      this.checkForMatch(predictions);
    } catch (error) {
      console.error('Detection error:', error);
    }
    
    requestAnimationFrame(() => this.detectObjects());
  }

  displayPredictions(predictions) {
    const resultsList = document.getElementById('results-list');
    const targetItem = this.currentAlarm.item.toLowerCase();
    
    if (predictions.length === 0) {
      resultsList.innerHTML = '<span class="no-detection">Point camera at an object...</span>';
      return;
    }
    
    resultsList.innerHTML = '';
    
    predictions.forEach(pred => {
      const className = pred.className.toLowerCase();
      const normalizedName = this.normalizeItemName(className);
      const isMatch = normalizedName === targetItem || this.partialMatch(normalizedName, targetItem);
      
      const span = document.createElement('span');
      span.className = `detected-item ${isMatch ? 'match' : ''}`;
      span.textContent = pred.className.split(',')[0];
      resultsList.appendChild(span);
    });
  }

  normalizeItemName(name) {
    const lower = name.toLowerCase().trim();
    if (ITEM_ALIASES[lower]) {
      return ITEM_ALIASES[lower];
    }
    return lower;
  }

  partialMatch(normalized, target) {
    return normalized.includes(target) || target.includes(normalized);
  }

  checkForMatch(predictions) {
    if (!predictions || predictions.length === 0) return;
    
    const targetItem = this.currentAlarm.item.toLowerCase();
    
    for (const pred of predictions) {
      const className = pred.className.toLowerCase();
      const normalizedName = this.normalizeItemName(className);
      
      if (normalizedName === targetItem || this.partialMatch(normalizedName, targetItem)) {
        this.handleSuccessfulScan();
        return;
      }
    }
  }

  handleSuccessfulScan() {
    this.stopScanning();
    this.stopAlarm(true);
  }

  stopScanning() {
    if (this.currentStream) {
      this.currentStream.getTracks().forEach(track => track.stop());
      this.currentStream = null;
    }
    
    document.getElementById('scan-status').classList.remove('hidden');
    this.showView('alarm-ringing-view');
  }
}

const app = new ScanAlarmApp();
app.renderAlarms();
