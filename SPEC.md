# ScanAlarm - Object Recognition Alarm Clock

## Project Overview

**Project Name:** ScanAlarm  
**Type:** Progressive Web App (PWA) - Mobile-first web application  
**Core Functionality:** An alarm clock app that requires the user to scan a randomly selected household item using the device camera to stop the alarm.  
**Target Users:** People who need help waking up, those who snooze too much, or anyone wanting a physical activity to start their day.

---

## UI/UX Specification

### Layout Structure

- **Single Page Application** with multiple views
- **Views:**
  1. **Home/Clock View** - Main clock display with alarm controls
  2. **Alarm Set View** - Set alarm time
  3. **Alarm Ringing View** - Full screen alarm with scan prompt
  4. **Scan View** - Camera view with object detection

### Responsive Design
- **Mobile-first design** (primary target)
- Breakpoints: 480px (mobile), 768px (tablet), 1024px+ (desktop)
- Full viewport height utilization

### Visual Design

**Color Palette:**
- Primary: `#1a1a2e` (Deep navy background)
- Secondary: `#16213e` (Darker blue for cards)
- Accent: `#e94560` (Vibrant red/pink for alarm, buttons)
- Success: `#4ecca3` (Teal green for success states)
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0a0`

**Typography:**
- Font Family: `'Outfit', sans-serif` (Google Fonts)
- Clock Display: 72px, bold
- Headings: 24px, semi-bold
- Body: 16px, regular
- Buttons: 18px, semi-bold

**Spacing:**
- Base unit: 8px
- Container padding: 24px
- Card padding: 16px
- Element gaps: 16px

**Visual Effects:**
- Card shadows: `0 4px 20px rgba(0, 0, 0, 0.3)`
- Button hover: scale(1.05) with 0.2s transition
- Alarm pulse animation on ringing screen
- Smooth page transitions (fade/slide)

### Components

1. **Clock Display**
   - Large digital time display (HH:MM:SS)
   - AM/PM indicator
   - Current date display

2. **Alarm Time Picker**
   - Hour selector (1-12)
   - Minute selector (00-59)
   - AM/PM toggle button

3. **Alarm List Item**
   - Time display
   - On/Off toggle switch
   - Delete button
   - Item to scan display

4. **Scan Button (Main Action)**
   - Large circular button
   - Camera icon
   - Ripple effect on press

5. **Camera View**
   - Full screen camera preview
   - Overlay showing detected objects
   - Target item indicator
   - Close/cancel button

6. **Alarm Ringing Screen**
   - Pulsing red background
   - Large "SCAN TO STOP" text
   - Target item name display
   - Countdown timer
   - Emergency stop button

---

## Functionality Specification

### Core Features

1. **Real-time Clock**
   - Display current time with seconds
   - Auto-update every second
   - Show current date

2. **Alarm Management**
   - Set multiple alarms
   - Enable/disable individual alarms
   - Delete alarms
   - Persist alarms in localStorage

3. **Random Item Selection**
   - Pre-defined list of 50+ common household items
   - Each alarm gets a random item assigned
   - Items grouped by category:
     - Kitchen: cup, plate, spoon, fork, knife, glass, bowl, kettle, toaster, microwave
     - Bathroom: toothbrush, toothpaste, soap, towel, shampoo, mirror, comb, razor
     - Bedroom: pillow, blanket, phone, lamp, clock, book, glasses, remote
     - Living room: TV remote, newspaper, magazine, plant, picture frame, candle, vase
     - Office: pen, pencil, notebook, stapler, phone, glasses, keyboard, mouse
     - General: keys, wallet, glasses, hat, shoes, bag, umbrella, headphones

4. **Alarm Triggering**
   - Play alarm sound (using Web Audio API)
   - Vibrate device (if supported)
   - Show full-screen alarm view
   - Display target item to scan

5. **Object Scanning**
   - Access device camera
   - Use TensorFlow.js with MobileNet model for object detection
   - Real-time detection display
   - Match scanned object with target item
   - Provide feedback on scan results

6. **Scan to Stop**
   - When correct item detected, stop alarm
   - Show success animation
   - Log alarm as "snoozed" or "dismissed"

### User Interactions and Flows

**Flow 1: Set Alarm**
1. User taps "Add Alarm" button
2. Alarm set view appears
3. User selects hour, minute, AM/PM
4. User taps "Set Alarm"
5. Random item is assigned
6. Alarm appears in list
7. Returns to home view

**Flow 2: Alarm Rings**
1. At set time, alarm triggers
2. Alarm sound plays
3. Device vibrates (if supported)
4. Full-screen alarm view appears
5. Target item displayed prominently
6. User must scan item to stop

**Flow 3: Scan Item**
1. User taps "Scan Item" button
2. Camera view opens
3. Real-time object detection runs
4. Detected objects shown with labels
5. When target item detected:
   - Alarm stops
   - Success feedback shown
   - Returns to home view

### Data Handling

- **localStorage** for:
  - List of alarms (time, enabled, assigned item)
  - App settings (sound volume, vibration toggle)
  - Alarm history

### Edge Cases

- Camera permission denied: Show instructions to enable
- TensorFlow model fails to load: Provide manual stop option after 30 seconds
- No alarm set: Show empty state with prompt
- Multiple alarms: Queue and ring sequentially
- App closed: Use background sync or local notifications (if available)

---

## Technical Implementation

### Stack
- HTML5, CSS3, JavaScript (ES6+)
- TensorFlow.js with MobileNet for object detection
- Web Audio API for alarm sounds
- Vibration API for haptic feedback
- MediaDevices API for camera access
- Service Worker for PWA offline capability

### PWA Requirements
- manifest.json for app install
- Service worker for offline support
- HTTPS required for camera access
- Meta tags for mobile viewport

---

## Acceptance Criteria

1. ✓ Clock displays current time accurately
2. ✓ Can set, edit, and delete alarms
3. ✓ Alarms persist after page refresh
4. ✓ Alarm triggers at set time
5. ✓ Random household item assigned to each alarm
6. ✓ Camera opens for scanning
7. ✓ Object detection works in real-time
8. ✓ Alarm stops when correct item scanned
9. ✓ App can be installed as PWA
10. ✓ Works on mobile browsers (Chrome, Safari)
