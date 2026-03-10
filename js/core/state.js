/* ============================================
   SMOOTH BUILDER 5.0 - APP STATE
   ============================================ */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.core = SB5.core || {};
  const utils = SB5.core.utils;
  const storage = SB5.core.storage;
  const HistoryManager = SB5.core.history && SB5.core.history.HistoryManager;

  const MODES = ['structure', 'design', 'export'];

  const initialState = {
    mode: 'structure',
    layout: { sections: [], order: [], spacing: {} },
    brand: {
      logo: null,
      colors: { primary: '#0f766e', accent: '#f59e0b', background: '#ffffff', surface: '#f8fafc', text: '#0f172a', textLight: '#64748b', border: 'rgba(0,0,0,0.08)' },
      font: 'system', radius: 'rounded'
    },
    content: {},
    settings: {
      siteName: 'Meine Website', siteDescription: '', favicon: '🏠', language: 'de',
      consent: { enabled: true, analytics: 'none', privacyLink: '/datenschutz' },
      features: { darkModeToggle: false, stickyHeader: true, smoothScroll: true }
    },
    ui: { activeSection: null, activeElementPath: null, showGrid: true, show8pxRaster: false, sidebarTab: 'sections', builderTheme: 'light' }
  };

  const ActionTypes = {
    SET_MODE: 'SET_MODE', ADD_SECTION: 'ADD_SECTION', REMOVE_SECTION: 'REMOVE_SECTION',
    SELECT_SECTION: 'SELECT_SECTION', UPDATE_SECTION: 'UPDATE_SECTION', UPDATE_SECTION_VARIANT: 'UPDATE_SECTION_VARIANT',
    REORDER: 'REORDER', UPDATE_SPACING: 'UPDATE_SPACING',
    SET_LOGO: 'SET_LOGO', SET_COLORS: 'SET_COLORS', SET_FONT: 'SET_FONT', SET_RADIUS: 'SET_RADIUS',
    UPDATE_CONTENT: 'UPDATE_CONTENT', UPDATE_SETTINGS: 'UPDATE_SETTINGS',
    TOGGLE_GRID: 'TOGGLE_GRID', TOGGLE_8PX: 'TOGGLE_8PX', SET_SIDEBAR_TAB: 'SET_SIDEBAR_TAB',
    SET_BUILDER_THEME: 'SET_BUILDER_THEME', SET_ACTIVE_ELEMENT_PATH: 'SET_ACTIVE_ELEMENT_PATH',
    LOAD_STATE: 'LOAD_STATE', RESET_PROJECT: 'RESET_PROJECT', UNDO: 'UNDO', REDO: 'REDO'
  };

  function nextSectionId(state, type) {
    const nums = state.layout.sections.filter(s => s.type === type).map(s => { const m = String(s.id).match(/-(\d+)$/); return m ? Number(m[1]) : 0; });
    return `${type}-${nums.length ? Math.max(...nums) + 1 : 1}`;
  }

  function reducer(state, action) {
    const { type, payload } = action || {};
    switch (type) {
      case ActionTypes.SET_MODE: return { ...state, mode: MODES.includes(payload) ? payload : 'structure' };
      case ActionTypes.LOAD_STATE: return payload ? utils.deepMerge(initialState, payload) : state;
      case ActionTypes.RESET_PROJECT: { const next = utils.deepClone(initialState); next.ui.builderTheme = state.ui.builderTheme; return next; }
      case ActionTypes.ADD_SECTION: {
        const sectionType = String(payload && payload.type ? payload.type : payload || '');
        if (!sectionType) return state;
        const id = nextSectionId(state, sectionType);
        const variant = (payload && payload.variant) || 'default';
        const newSection = { id, type: sectionType, variant, enabled: true };
        const sections = [...state.layout.sections, newSection];
        const order = [...state.layout.order, id];
        const spacing = { ...state.layout.spacing, [id]: { pt: 64, pb: 64 } };
        return { ...state, layout: { ...state.layout, sections, order, spacing }, ui: { ...state.ui, activeSection: id } };
      }
      case ActionTypes.REMOVE_SECTION: {
        const id = String(payload && payload.id ? payload.id : payload);
        const sections = state.layout.sections.filter(s => s.id !== id);
        const order = state.layout.order.filter(x => x !== id);
        const spacing = { ...state.layout.spacing }; delete spacing[id];
        const content = { ...state.content }; delete content[id];
        const activeSection = state.ui.activeSection === id ? null : state.ui.activeSection;
        return { ...state, layout: { ...state.layout, sections, order, spacing }, content, ui: { ...state.ui, activeSection } };
      }
      case ActionTypes.SELECT_SECTION: return { ...state, ui: { ...state.ui, activeSection: payload || null } };
      case ActionTypes.UPDATE_SECTION: {
        const { id, ...patch } = payload || {};
        if (!id) return state;
        const sections = state.layout.sections.map(s => s.id === id ? { ...s, ...patch } : s);
        return { ...state, layout: { ...state.layout, sections } };
      }
      case ActionTypes.UPDATE_SECTION_VARIANT: {
        const { id, variant } = payload || {};
        if (!id || !variant) return state;
        const sections = state.layout.sections.map(s => s.id === id ? { ...s, variant } : s);
        return { ...state, layout: { ...state.layout, sections } };
      }
      case ActionTypes.REORDER: return { ...state, layout: { ...state.layout, order: Array.isArray(payload) ? payload : state.layout.order } };
      case ActionTypes.UPDATE_SPACING: {
        const { id, pt, pb } = payload || {};
        if (!id) return state;
        const prev = state.layout.spacing[id] || { pt: 64, pb: 64 };
        const next = { pt: pt !== undefined ? utils.clamp(pt, 0, 160) : prev.pt, pb: pb !== undefined ? utils.clamp(pb, 0, 160) : prev.pb };
        return { ...state, layout: { ...state.layout, spacing: { ...state.layout.spacing, [id]: next } } };
      }
      case ActionTypes.SET_LOGO: return { ...state, brand: { ...state.brand, logo: payload || null } };
      case ActionTypes.SET_COLORS: return { ...state, brand: { ...state.brand, colors: utils.deepMerge(state.brand.colors, payload || {}) } };
      case ActionTypes.SET_FONT: return { ...state, brand: { ...state.brand, font: String(payload || 'system') } };
      case ActionTypes.SET_RADIUS: return { ...state, brand: { ...state.brand, radius: String(payload || 'rounded') } };
      case ActionTypes.UPDATE_CONTENT: {
        const { id, ...patch } = payload || {};
        if (!id) return state;
        const prev = state.content[id] || {};
        return { ...state, content: { ...state.content, [id]: utils.deepMerge(prev, patch) } };
      }
      case ActionTypes.UPDATE_SETTINGS: return { ...state, settings: utils.deepMerge(state.settings, payload || {}) };
      case ActionTypes.TOGGLE_GRID: return { ...state, ui: { ...state.ui, showGrid: !state.ui.showGrid } };
      case ActionTypes.TOGGLE_8PX: return { ...state, ui: { ...state.ui, show8pxRaster: !state.ui.show8pxRaster } };
      case ActionTypes.SET_SIDEBAR_TAB: return { ...state, ui: { ...state.ui, sidebarTab: String(payload || 'sections') } };
      case ActionTypes.SET_BUILDER_THEME: return { ...state, ui: { ...state.ui, builderTheme: payload === 'dark' ? 'dark' : 'light' } };
      case ActionTypes.SET_ACTIVE_ELEMENT_PATH: return { ...state, ui: { ...state.ui, activeElementPath: payload || null } };
      case '__REPLACE_STATE__': return payload && typeof payload === 'object' ? payload : state;
      default: return state;
    }
  }

  function createStore(options = {}) {
    const history = HistoryManager ? new HistoryManager({ maxSize: 50 }) : null;
    const saver = storage && storage.createDebouncedSaver ? storage.createDebouncedSaver({ wait: 450 }) : null;
    let state = options.initialState ? utils.deepClone(options.initialState) : utils.deepClone(initialState);
    const listeners = new Set();
    function emit() { for (const l of listeners) l(); }
    function getState() { return state; }
    function subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
    function dispatch(action) {
      if (!action || !action.type) return;
      if (action.type === ActionTypes.UNDO && history) { const prev = history.undo(); if (prev) { state = prev; if (saver) saver.save(state); emit(); } return; }
      if (action.type === ActionTypes.REDO && history) { const next = history.redo(); if (next) { state = next; if (saver) saver.save(state); emit(); } return; }
      const next = reducer(state, action);
      if (state === next) return;
      state = next;
      if (saver) saver.save(state);
      if (history) history.record(state);
      emit();
    }
    function canUndo() { return history ? history.canUndo() : false; }
    function canRedo() { return history ? history.canRedo() : false; }
    if (history) history.init(state);
    return { getState, subscribe, dispatch, canUndo, canRedo };
  }

  function createBuilderStore() {
    let loaded = storage && storage.loadState ? storage.loadState() : null;
    const baseState = loaded ? utils.deepMerge(initialState, loaded) : initialState;
    const store = createStore({ initialState: baseState });
    try {
      const theme = store.getState().ui.builderTheme;
      if (theme === 'light') document.documentElement.classList.add('builder-light');
      else document.documentElement.classList.remove('builder-light');
    } catch (_) {}
    return store;
  }

  SB5.core.state = { MODES, ActionTypes, initialState, reducer, createStore, createBuilderStore };
})(window);
