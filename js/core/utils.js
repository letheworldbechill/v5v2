/* ============================================
   SMOOTH BUILDER 5.0 - CORE UTILS
   ============================================ */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.core = SB5.core || {};

  function noop() {}
  function isObject(val) { return val !== null && typeof val === 'object' && !Array.isArray(val); }
  function clamp(n, min, max) { const x = Number(n); return Number.isFinite(x) ? Math.min(max, Math.max(min, x)) : min; }

  function deepMerge(target, source) {
    const out = Array.isArray(target) ? target.slice() : { ...(target || {}) };
    if (!source) return out;
    for (const key of Object.keys(source)) {
      const s = source[key], t = out[key];
      if (isObject(t) && isObject(s)) out[key] = deepMerge(t, s);
      else out[key] = Array.isArray(s) ? s.slice() : s;
    }
    return out;
  }

  function deepClone(value) {
    try { if (typeof global.structuredClone === 'function') return global.structuredClone(value); } catch (_) {}
    return JSON.parse(JSON.stringify(value));
  }

  function safeJsonParse(str, fallback = null) {
    try { return typeof str === 'string' ? JSON.parse(str) : fallback; } catch (_) { return fallback; }
  }

  function uid(prefix = '') {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
    return prefix ? `${prefix}-${id}` : id;
  }

  function slugify(input = '') {
    return String(input).toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 80);
  }

  function escapeHtml(str) {
    return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function debounce(fn, wait = 200) {
    let t = null;
    function debounced(...args) {
      if (t) clearTimeout(t);
      t = setTimeout(() => { t = null; fn.apply(this, args); }, wait);
    }
    debounced.cancel = () => { if (t) clearTimeout(t); t = null; };
    debounced.flush = () => { if (t) { clearTimeout(t); t = null; fn.apply(this, []); } };
    return debounced;
  }

  function getByPath(obj, path, fallback) {
    if (!obj) return fallback;
    const parts = Array.isArray(path) ? path : String(path).split('.');
    let cur = obj;
    for (const p of parts) { if (cur == null) return fallback; cur = cur[p]; }
    return cur === undefined ? fallback : cur;
  }

  function setByPath(obj, path, value) {
    const parts = Array.isArray(path) ? path : String(path).split('.');
    const out = Array.isArray(obj) ? obj.slice() : { ...(obj || {}) };
    let cur = out;
    for (let i = 0; i < parts.length; i++) {
      const key = parts[i], isLast = i === parts.length - 1;
      if (isLast) cur[key] = value;
      else { cur[key] = isObject(cur[key]) ? { ...cur[key] } : {}; cur = cur[key]; }
    }
    return out;
  }

  function normalizeHex(hex) {
    let h = String(hex || '').trim();
    if (!h) return null;
    if (h[0] !== '#') h = '#' + h;
    if (h.length === 4) h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    if (!/^#[0-9a-fA-F]{6}$/.test(h)) return null;
    return h.toLowerCase();
  }

  function hexToRgb(hex) {
    const h = normalizeHex(hex);
    if (!h) return null;
    const int = parseInt(h.slice(1), 16);
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
  }

  function contrastRatio(fgHex, bgHex) {
    const fg = hexToRgb(fgHex), bg = hexToRgb(bgHex);
    if (!fg || !bg) return null;
    const lum = ({ r, g, b }) => {
      const srgb = [r, g, b].map(v => { const x = v / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    };
    const L1 = lum(fg), L2 = lum(bg);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  SB5.core.utils = { noop, isObject, clamp, deepMerge, deepClone, safeJsonParse, uid, slugify, escapeHtml, debounce, getByPath, setByPath, normalizeHex, hexToRgb, contrastRatio };
})(window);
