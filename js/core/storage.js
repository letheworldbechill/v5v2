/* ============================================
   SMOOTH BUILDER 5.0 - STORAGE
   ============================================ */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.core = SB5.core || {};
  const utils = SB5.core.utils || {};

  const STORAGE_KEY = 'sb5_state_v5';

  function isAvailable() {
    try { const k = '__sb5_test__'; global.localStorage.setItem(k, '1'); global.localStorage.removeItem(k); return true; } catch (_) { return false; }
  }

  function loadState() {
    if (!isAvailable()) return null;
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const env = JSON.parse(raw);
      return env && env.state ? env.state : null;
    } catch (_) { return null; }
  }

  function saveState(state) {
    if (!isAvailable()) return false;
    try {
      const env = { version: 5, savedAt: Date.now(), state: utils.deepClone ? utils.deepClone(state) : JSON.parse(JSON.stringify(state)) };
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(env));
      return true;
    } catch (_) { return false; }
  }

  function remove() { try { global.localStorage.removeItem(STORAGE_KEY); } catch (_) {} }

  function createDebouncedSaver(options = {}) {
    const wait = Number(options.wait || 500);
    const debounced = utils.debounce ? utils.debounce((state) => saveState(state), wait) : null;
    return {
      save(state) { if (debounced) debounced(state); else saveState(state); return true; },
      flush() { if (debounced && debounced.flush) debounced.flush(); },
      cancel() { if (debounced && debounced.cancel) debounced.cancel(); }
    };
  }

  SB5.core.storage = { STORAGE_KEY, isAvailable, loadState, saveState, remove, createDebouncedSaver };
})(window);
