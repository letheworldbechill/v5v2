/* ============================================
   SMOOTH BUILDER 5.0 - ICONS
   ============================================ */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.data = SB5.data || {};

  const Icons = {
    plus: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    x: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4L4 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.4l3 3 6-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevronDown: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    undo: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.2 5.2H2V1M2.2 11.6a6 6 0 1 0 0-7.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    redo: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.8 5.2H14V1M13.8 11.6a6 6 0 1 1 0-7.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    download: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v7m0 0l3-3m-3 3L5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12.5h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    upload: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14V7m0 0l3 3m-3-3L5 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3.5h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    eye: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.6 8s2.2-4.4 6.4-4.4S14.4 8 14.4 8s-2.2 4.4-6.4 4.4S1.6 8 1.6 8Z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="1.9" stroke="currentColor" stroke-width="1.3"/></svg>',
    eyeOff: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M6.5 6.5a2.1 2.1 0 0 0 3 3M1.6 8s2.2-4.4 6.4-4.4c1 0 1.9.2 2.7.5M14.4 8s-.6 1.2-1.7 2.3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    settings: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.3"/><path d="M13 8a5 5 0 0 0-.1-1l1.4-1.1-.8-1.4-1.7.5a5 5 0 0 0-.8-.8l.5-1.7-1.4-.8L9 4.1a5 5 0 0 0-2 0L5.9 2.7l-1.4.8.5 1.7a5 5 0 0 0-.8.8l-1.7-.5-.8 1.4L3 8a5 5 0 0 0 0 2L1.7 11.1l.8 1.4 1.7-.5a5 5 0 0 0 .8.8l-.5 1.7 1.4.8L7 12.9a5 5 0 0 0 2 0l1.1 1.4 1.4-.8-.5-1.7a5 5 0 0 0 .8-.8l1.7.5.8-1.4L13 10a5 5 0 0 0 0-2Z" stroke="currentColor" stroke-width="1.1"/></svg>',
    sun: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 11.2A3.2 3.2 0 1 0 8 4.8a3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" stroke-width="1.3"/><path d="M8 1.7v1.7M8 12.6v1.7M1.7 8h1.7M12.6 8h1.7M3.2 3.2l1.2 1.2M11.6 11.6l1.2 1.2M12.8 3.2l-1.2 1.2M4.4 11.6l-1.2 1.2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    moon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 9.3A5.5 5.5 0 0 1 6.7 3a4.8 4.8 0 1 0 6.3 6.3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
    layout: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="4" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="2" y="8" width="5" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="9" y="8" width="5" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>',
    zap: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 1L4 9h4l-1 6 5-8H8l1-6Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    palette: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12c1.1 0 2-.9 2-2 0-.6-.3-1.1-.7-1.5-.3-.3-.5-.7-.5-1.1 0-1.1.9-2 2-2h1.2A2.8 2.8 0 0 0 14 6.3 5.9 5.9 0 0 0 8 2Z" stroke="currentColor" stroke-width="1.2"/><circle cx="5.2" cy="6.2" r="1" fill="currentColor"/><circle cx="7.4" cy="4.7" r="1" fill="currentColor"/><circle cx="10.2" cy="5.4" r="1" fill="currentColor"/></svg>',
    typography: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4V3h10v1M6 13h4M8 3v10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
    trash: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V2.8h4V4m-5 1.3v8.9m4-8.9v8.9M4.5 4.7l.6 9.7h5.8l.6-9.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    copy: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 6h8v8H6V6Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M2 10V2h8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
    file: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 1.8h5.2L12 4.6V14.2H4V1.8Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M9.2 1.8v2.8H12" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    external: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8A1.5 1.5 0 0 0 13 12.5V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M9 2h5v5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2 8 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>'
  };

  SB5.data.icons = Icons;
  global.Icons = Icons;
})(window);
