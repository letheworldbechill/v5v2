/* ============================================
   SMOOTH BUILDER 5.0 - HISTORY (UNDO/REDO)
   ============================================ */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.core = SB5.core || {};
  const utils = SB5.core.utils || { deepClone: (v) => JSON.parse(JSON.stringify(v)) };

  class HistoryManager {
    constructor(options = {}) {
      this.maxSize = Math.max(1, Number(options.maxSize || 50));
      this.past = []; this.present = null; this.future = [];
      this._lastCoalesceKey = null; this._lastCoalesceAt = 0;
    }
    init(initialState) { this.past = []; this.future = []; this.present = utils.deepClone(initialState); }
    canUndo() { return this.past.length > 0; }
    canRedo() { return this.future.length > 0; }
    getCurrent() { return this.present ? utils.deepClone(this.present) : null; }
    clear() { this.past = []; this.future = []; this.present = null; }
    record(nextState, meta = null) {
      if (this.present === null) { this.present = utils.deepClone(nextState); return; }
      const now = Date.now();
      const coalesceKey = meta && meta.coalesceKey ? String(meta.coalesceKey) : null;
      const windowMs = meta && meta.coalesceWindowMs ? Number(meta.coalesceWindowMs) : 400;
      const shouldCoalesce = coalesceKey && this._lastCoalesceKey === coalesceKey && (now - this._lastCoalesceAt) <= windowMs && this.past.length > 0;
      if (shouldCoalesce) { this.present = utils.deepClone(nextState); this._lastCoalesceAt = now; return; }
      this.past.push(utils.deepClone(this.present));
      this.present = utils.deepClone(nextState);
      this.future = [];
      if (this.past.length > this.maxSize) this.past.shift();
      this._lastCoalesceKey = coalesceKey; this._lastCoalesceAt = coalesceKey ? now : 0;
    }
    undo() {
      if (!this.canUndo()) return null;
      const previous = this.past.pop();
      this.future.unshift(utils.deepClone(this.present));
      this.present = utils.deepClone(previous);
      this._lastCoalesceKey = null;
      return utils.deepClone(this.present);
    }
    redo() {
      if (!this.canRedo()) return null;
      const next = this.future.shift();
      this.past.push(utils.deepClone(this.present));
      this.present = utils.deepClone(next);
      this._lastCoalesceKey = null;
      return utils.deepClone(this.present);
    }
  }
  SB5.core.history = { HistoryManager };
})(window);
