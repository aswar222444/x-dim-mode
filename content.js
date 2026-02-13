const DIM_BASE_ID = "x-dim-base-ext";
const DIM_BTN_ID = "x-dim-option-btn";
const DIM_CLASS = "x-dim-active";

// ── Dim Theme CSS ──────────────────────────────────────────────────

const BASE_CSS = `
  /* Dim theme variables */
  html.${DIM_CLASS} {
    --xdm-bg: rgb(21, 32, 43);
    --xdm-bg-hover: rgb(30, 39, 50);
    --xdm-bg-elevated: rgb(39, 51, 64);
    --xdm-backdrop: rgba(21, 32, 43, .85);
    --xdm-text: rgb(139, 152, 165);
    --xdm-border: rgb(56, 68, 77);
  }

  /* Override X's own Lights Out theme variables */
  html.${DIM_CLASS} body.LightsOut {
    --color: var(--xdm-text);
    --border: 206 16% 26%;
    --input: 206 16% 26%;
    --border-color: var(--xdm-border);
  }

  /* Chat / DM interface (Tailwind + shadcn/Radix) */
  html.${DIM_CLASS}[data-theme="dark"],
  html.${DIM_CLASS} [data-theme="dark"] {
    --background: 215 29% 13%;
    --border: 206 16% 26%;
    --input: 206 16% 26%;
    --muted-foreground: 206 16% 55%;
    --color-background: 215 29% 13%;
    --color-gray-0: 215 29% 13%;
    --color-gray-50: 206 16% 26%;
    --color-gray-100: 206 16% 26%;
    --color-gray-700: 206 16% 60%;
    --color-gray-800: 206 16% 50%;
  }

  /* ── Black background overrides ── */

  /* Body — catches class-based black bg (e.g. Creator Studio) */
  html.${DIM_CLASS} body {
    background-color: var(--xdm-bg) !important;
  }

  /* Inline styles (covers body, divs, modals, dropdowns, etc.) */
  html.${DIM_CLASS} [style*="background-color: rgb(0, 0, 0)"],
  html.${DIM_CLASS} [style*="background-color: rgba(0, 0, 0, 1)"] {
    background-color: var(--xdm-bg) !important;
  }
  /* Elevated section cards (rgb(24,24,27) in dark mode → slightly lighter in dim) */
  html.${DIM_CLASS} [style*="background-color: rgb(24, 24, 27)"] {
    background-color: var(--xdm-bg-hover) !important;
  }
  /* Icon containers in menu rows (Premium, etc.) */
  html.${DIM_CLASS} [role="link"] > div > div:first-child div:has(> svg:only-child) {
    background-color: var(--xdm-bg-elevated) !important;
  }

  /* X utility classes for black backgrounds */
  html.${DIM_CLASS} .r-kemksi,
  html.${DIM_CLASS} .r-1niwhzg,
  html.${DIM_CLASS} .r-yfoy6g,
  html.${DIM_CLASS} .r-14lw9ot {
    background-color: var(--xdm-bg) !important;
  }
  /* Action-button hover circles — make transparent so they match any parent bg */
  html.${DIM_CLASS} .r-1niwhzg.r-sdzlij {
    background-color: transparent !important;
  }
  /* Timeline top bar */
  html.${DIM_CLASS} .r-5zmot {
    background-color: var(--xdm-backdrop) !important;
  }
  /* Tweet character counter separator */
  html.${DIM_CLASS} .r-1shrkeu {
    background-color: var(--xdm-border) !important;
  }
  /* Sidebar button hover */
  html.${DIM_CLASS} .r-1hdo0pc {
    background-color: var(--xdm-bg-hover) !important;
  }
  /* Secondary background (section cards on Premium, etc.) */
  html.${DIM_CLASS} .r-g2wdr4 {
    background-color: var(--xdm-bg-hover) !important;
  }
  html.${DIM_CLASS} .r-g2wdr4 [role="link"]:hover {
    background-color: var(--xdm-bg-elevated) !important;
  }

  /* Borders */
  html.${DIM_CLASS} .r-1kqtdi0,
  html.${DIM_CLASS} .r-1roi411 {
    border-color: var(--xdm-border) !important;
  }
  html.${DIM_CLASS} .r-2sztyj {
    border-top-color: var(--xdm-border) !important;
  }
  html.${DIM_CLASS} .r-1igl3o0,
  html.${DIM_CLASS} .r-rull8r {
    border-bottom-color: var(--xdm-border) !important;
  }
  /* Separators / dividers */
  html.${DIM_CLASS} .r-gu4em3,
  html.${DIM_CLASS} .r-1bnu78o {
    background-color: var(--xdm-border) !important;
  }

  /* Search bar icon, tweet character counter */
  html.${DIM_CLASS} .r-1bwzh9t {
    color: var(--xdm-text) !important;
  }
  /* "What's happening" text */
  html.${DIM_CLASS} .draftjs-styles_0 .public-DraftEditorPlaceholder-root,
  html.${DIM_CLASS} .public-DraftEditorPlaceholder-inner {
    color: var(--xdm-text) !important;
  }
  /* Secondary text */
  html.${DIM_CLASS} [style*="color: rgb(113, 118, 123)"],
  html.${DIM_CLASS} [style*="-webkit-line-clamp: 3; color: rgb(113, 118, 123)"],
  html.${DIM_CLASS} [style*="-webkit-line-clamp: 2; color: rgb(113, 118, 123)"] {
    color: var(--xdm-text) !important;
  }
  /* Placeholders */
  html.${DIM_CLASS} ::placeholder {
    color: var(--xdm-text) !important;
  }

  /* Tailwind classes used in chat/DM interface */
  html.${DIM_CLASS} .bg-gray-0 {
    background-color: var(--xdm-bg) !important;
  }
  html.${DIM_CLASS} .border-gray-50,
  html.${DIM_CLASS} .border-gray-100 {
    border-color: var(--xdm-border) !important;
  }

  /* Grok buttons (active) */
  html.${DIM_CLASS} [style*="border-color: rgb(47, 51, 54)"].r-1che71a {
    background-color: var(--xdm-bg-hover) !important;
  }

  /* Scanner-discovered black backgrounds */
  html.${DIM_CLASS} .xdm-dimmed {
    background-color: var(--xdm-bg) !important;
  }
  /* Scanner-discovered elevated backgrounds (e.g. section cards) */
  html.${DIM_CLASS} .xdm-dimmed-elevated {
    background-color: var(--xdm-bg-hover) !important;
  }
  /* Creator Studio icon containers (jf-element framework) */
  html.${DIM_CLASS} .jf-element:has(> span:only-child > svg:only-child) {
    background-color: var(--xdm-bg-elevated) !important;
  }
  /* Creator Studio dividers inside elevated section cards */
  html.${DIM_CLASS} .xdm-dimmed-elevated .jf-element:empty {
    background-color: var(--xdm-border) !important;
    border-color: var(--xdm-border) !important;
  }

  /* Scrollbar */
  html.${DIM_CLASS} {
    scrollbar-color: var(--xdm-border) var(--xdm-bg);
  }
`;

// Always update the style element — prevents stale CSS after extension reload
function ensureBaseCSS() {
  let style = document.getElementById(DIM_BASE_ID);
  if (!style) {
    style = document.createElement("style");
    style.id = DIM_BASE_ID;
    (document.head || document.documentElement).appendChild(style);
  }
  if (style.textContent !== BASE_CSS) style.textContent = BASE_CSS;
}

// Inject CSS immediately at document_start — don't wait for async storage read.
// Rules are gated by html.x-dim-active so they're inert until the class is added.
ensureBaseCSS();

function applyDim() {
  ensureBaseCSS();
  document.documentElement.classList.add(DIM_CLASS);
  if (document.body) queueScan([document.body]);
}

function removeDim() {
  document.documentElement.classList.remove(DIM_CLASS);
  // Cancel any pending scan
  if (_scanFrame) {
    cancelAnimationFrame(_scanFrame);
    _scanFrame = 0;
    _pending.clear();
  }
  // Remove scanner-applied classes (non-destructive — doesn't touch original styles)
  for (const el of document.querySelectorAll(".xdm-dimmed, .xdm-dimmed-elevated")) {
    el.classList.remove("xdm-dimmed", "xdm-dimmed-elevated");
  }
}

// ── System Theme Sync ─────────────────────────────────────────────
// Follows OS preference: dark → Dim, light → Default.
// Watches body.LightsOut (X's dark mode class) to detect theme state.

let _bodyObserver;
let _suspendedForLight = false;

function syncDimWithTheme() {
  if (!_enabled || !document.body) return;
  const hasLightsOut = document.body.classList.contains("LightsOut");
  const dimActive = document.documentElement.classList.contains(DIM_CLASS);
  if (hasLightsOut) {
    // X is in dark mode → activate dim
    _suspendedForLight = false;
    if (!dimActive) {
      applyDim();
      for (const ms of [500, 1500, 3000, 5000]) setTimeout(fullRescan, ms);
    }
  } else if (dimActive && _seenLightsOut) {
    // X switched to light mode (LightsOut was present, now removed) → suspend dim
    _suspendedForLight = true;
    removeDim();
  }
}

// Track whether X has ever been in dark mode this session.
// Prevents removing dim before X has finished initializing.
let _seenLightsOut = false;

function startBodyObserver() {
  if (_bodyObserver || !document.body) return;
  if (document.body.classList.contains("LightsOut")) _seenLightsOut = true;
  _bodyObserver = new MutationObserver(() => {
    if (document.body.classList.contains("LightsOut")) _seenLightsOut = true;
    syncDimWithTheme();
  });
  _bodyObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

function stopBodyObserver() {
  if (_bodyObserver) {
    _bodyObserver.disconnect();
    _bodyObserver = null;
  }
}

// ── Black Background Scanner ─────────────────────────────────────
// Catches inline black backgrounds not covered by known CSS selectors.
// Uses a CSS class (not inline styles) so toggling is instant and non-destructive.

let _scanFrame = 0;
const _pending = new Set();

function queueScan(nodes) {
  for (const n of nodes) {
    if (n && n.nodeType === 1) _pending.add(n);
  }
  if (_pending.size && !_scanFrame) {
    _scanFrame = requestAnimationFrame(flushScan);
  }
}

function flushScan() {
  _scanFrame = 0;
  if (!document.documentElement.classList.contains(DIM_CLASS)) {
    _pending.clear();
    return;
  }
  const batch = [..._pending];
  _pending.clear();
  for (const node of batch) dimSubtree(node);
}

function dimSubtree(root) {
  dimElement(root);
  for (const el of root.querySelectorAll("div,main,aside,header,nav,section,article,footer,button")) {
    dimElement(el);
  }
}

function dimElement(el) {
  if (!el || el.nodeType !== 1 || el.classList.contains("xdm-dimmed") || el.classList.contains("xdm-dimmed-elevated")) return;
  const bg = el.classList.contains("jf-element")
    ? (() => { try { return getComputedStyle(el).backgroundColor; } catch { return ""; } })()
    : el.style.backgroundColor;
  if (bg === "rgb(0, 0, 0)" || bg === "rgba(0, 0, 0, 1)") {
    el.classList.add("xdm-dimmed");
  } else if (bg === "rgb(24, 24, 27)") {
    el.classList.add("xdm-dimmed-elevated");
  }
}

// ── Display Settings Injection ─────────────────────────────────────

const CHECKMARK_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-jwli3a r-1hjwoze r-12ym1je"><g><path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path></g></svg>`;

function setSelected(btnEl) {
  btnEl.style.borderColor = "rgb(29, 155, 240)";
  btnEl.style.borderWidth = "2px";
  const circle = btnEl.querySelector('[role="radio"] > div');
  if (circle) {
    circle.style.backgroundColor = "rgb(29, 155, 240)";
    circle.style.borderColor = "rgb(29, 155, 240)";
    circle.innerHTML = CHECKMARK_SVG;
  }
  const input = btnEl.querySelector('input[type="radio"]');
  if (input) input.checked = true;
}

function setUnselected(btnEl) {
  btnEl.style.borderColor = "rgb(51, 54, 57)";
  btnEl.style.borderWidth = "1px";
  const circle = btnEl.querySelector('[role="radio"] > div');
  if (circle) {
    circle.style.backgroundColor = "rgba(0, 0, 0, 0)";
    circle.style.borderColor = "rgb(185, 202, 211)";
    circle.innerHTML = "";
  }
  const input = btnEl.querySelector('input[type="radio"]');
  if (input) input.checked = false;
}

function tryInjectDimOption() {
  if (document.getElementById(DIM_BTN_ID)) return;

  // Find the background picker by its radio inputs (language-independent)
  const bgRadio = document.querySelector('input[name="background-picker"]');
  if (!bgRadio) return;
  const radiogroup = bgRadio.closest('[role="radiogroup"]');
  if (!radiogroup) return;

  const buttons = radiogroup.querySelectorAll(':scope > div');
  if (buttons.length < 2) return;

  const defaultBtn = buttons[0];
  const lightsOutBtn = buttons[1];

  // Clone the Lights Out button as our base
  const dimBtn = lightsOutBtn.cloneNode(true);
  dimBtn.id = DIM_BTN_ID;

  // Set dim background color
  dimBtn.style.backgroundColor = "rgb(21, 32, 43)";

  // Change label to "Dim"
  const label = dimBtn.querySelector("span");
  if (label) label.textContent = "Dim";

  // Update radio input
  const input = dimBtn.querySelector('input[type="radio"]');
  if (input) {
    input.setAttribute("aria-label", "Dim");
    input.checked = false;
  }

  // Insert between Default and Lights Out
  radiogroup.insertBefore(dimBtn, lightsOutBtn);

  // Set initial visual state based on whether dim is enabled
  chrome.storage.local.get("enabled", ({ enabled }) => {
    syncSettingsButtons(!!enabled);
  });

  // ── Click handlers ──

  dimBtn.addEventListener("click", () => {
    chrome.storage.local.set({ enabled: true });
    syncSettingsButtons(true);
    activateLightsOut();
  });

  // When Default or Lights Out is clicked directly, disable Dim
  for (const nativeBtn of [defaultBtn, lightsOutBtn]) {
    nativeBtn.addEventListener("click", () => {
      if (_switchingToDim) return; // Ignore clicks triggered by dim switch
      chrome.storage.local.set({ enabled: false });
      setUnselected(dimBtn);
    });
  }
}

// ── Lights Out Helper ──────────────────────────────────────────────
// Clicks X's Lights Out radio (if the Display settings page is open) to ensure
// the correct base theme. Used by both the Dim button and the popup toggle.

let _switchingToDim = false;

function activateLightsOut() {
  const dimBtn = document.getElementById(DIM_BTN_ID);
  if (!dimBtn) return; // Settings page not open
  const radiogroup = dimBtn.closest('[role="radiogroup"]');
  if (!radiogroup) return;
  const allBtns = radiogroup.querySelectorAll(":scope > div");
  const lightsOutBtn = allBtns[allBtns.length - 1];
  if (!lightsOutBtn) return;
  const loInput = lightsOutBtn.querySelector('input[type="radio"]');
  if (loInput && !loInput.checked) {
    _switchingToDim = true;
    loInput.click();
    loInput.dispatchEvent(new Event("input", { bubbles: true }));
    loInput.dispatchEvent(new Event("change", { bubbles: true }));
    setTimeout(() => { _switchingToDim = false; }, 300);
  }
}

// ── Observer & Init ────────────────────────────────────────────────

let _enabled = false;
let observer;

function startObserver() {
  if (observer) return;
  observer = new MutationObserver((mutations) => {
    try {
      // Re-apply dim if class was removed by X (unless suspended for light mode)
      if (_enabled && !_suspendedForLight && !document.documentElement.classList.contains(DIM_CLASS)) {
        applyDim();
      }
      // Scan newly added nodes for black backgrounds
      if (_enabled && document.documentElement.classList.contains(DIM_CLASS)) {
        for (const m of mutations) {
          if (m.addedNodes.length) queueScan(m.addedNodes);
        }
      }
      // Try to inject the Dim button on the display settings page
      tryInjectDimOption();
      // Start body observer once body is available
      if (_enabled && document.body && !_bodyObserver) {
        startBodyObserver();
      }
    } catch {
      // Extension context invalidated after reload — clean up
      observer.disconnect();
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

// Re-scan the entire body to catch elements the initial scan or observer missed
function fullRescan() {
  if (_enabled && document.body) queueScan([document.body]);
}

// Init — single storage read, then use cached state
chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled === undefined) {
    _enabled = true;
    chrome.storage.local.set({ enabled: true });
  } else {
    _enabled = !!enabled;
  }

  if (_enabled) {
    // Apply dim immediately if system is dark (avoids flash of black).
    // If system is light, body observer will handle it once X sets its theme.
    const systemDark = !window.matchMedia || window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemDark) {
      applyDim();
      for (const ms of [500, 1500, 3000, 5000]) setTimeout(fullRescan, ms);
    }
  }

  startObserver();
  tryInjectDimOption();

  // Start body observer if body is already available
  if (_enabled && document.body) {
    startBodyObserver();
  }
});

// Sync the radio buttons on the Display settings page with the current state
function syncSettingsButtons(enabled) {
  const dimBtn = document.getElementById(DIM_BTN_ID);
  if (!dimBtn) return;
  const radiogroup = dimBtn.closest('[role="radiogroup"]');
  if (!radiogroup) return;
  const allBtns = radiogroup.querySelectorAll(":scope > div");
  const lightsOutBtn = allBtns[allBtns.length - 1];

  if (enabled) {
    setSelected(dimBtn);
    for (const btn of allBtns) {
      if (btn !== dimBtn) setUnselected(btn);
    }
  } else {
    setUnselected(dimBtn);
    if (lightsOutBtn) setSelected(lightsOutBtn);
  }
}

// Listen for toggle — updates cached state synchronously
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    _enabled = !!changes.enabled.newValue;
    if (_enabled) {
      _suspendedForLight = false;
      startBodyObserver();
      applyDim();
      activateLightsOut();
    } else {
      stopBodyObserver();
      removeDim();
    }
    syncSettingsButtons(_enabled);
  }
});
