/* ============================================
   SMOOTH BUILDER PRO v4.3.1 - APP.JS
   ============================================
   Combined JavaScript: Config, Safety Layer & React App
   ============================================ */

// ============================================
// SECTION 1: CONFIGURATION & GENERATORS
// ============================================

/* ============================================
   SMOOTH BUILDER PRO v3.7 - CONFIGURATION
   ============================================
   Alle Daten, Icons, Templates und Defaults
   ============================================ */

// ============================================
// SVG ICONS
// ============================================

var Icons = {
  // UI Icons
  drag: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="2"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="9" cy="18" r="2"/><circle cx="15" cy="18" r="2"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
  trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  undo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6.36 2.64L3 13"/></svg>`,
  redo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016.36 2.64L21 13"/></svg>`,
  smartphone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  tablet: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  monitor: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  settings: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  layout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  zap: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>`,
  file: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  
  // Content Icons
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  image: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  
  // Social Icons
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  youtube: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
};

// ============================================
// COLOR PALETTES
// ============================================

var colorPalettes = [
  { name: 'Petrol & Amber', primary: '#0f766e', accent: '#d97706', description: 'Finanzen, Beratung' },
  { name: 'Navy & Gold', primary: '#1e3a5f', accent: '#ca8a04', description: 'Anwalt, Premium' },
  { name: 'Terracotta & Sand', primary: '#c2410c', accent: '#fbbf24', description: 'Handwerk, Bau' },
  { name: 'Sage & Mint', primary: '#15803d', accent: '#34d399', description: 'Gesundheit, Wellness' },
  { name: 'Graphit & Coral', primary: '#374151', accent: '#f97316', description: 'Modern, Tech' },
  { name: 'Indigo & Cyan', primary: '#4f46e5', accent: '#06b6d4', description: 'IT, Digital' },
  { name: 'Bordeaux & Gold', primary: '#881337', accent: '#fbbf24', description: 'Gastro, Luxus' },
  { name: 'Violet & Rose', primary: '#7c3aed', accent: '#ec4899', description: 'Beauty, Kreativ' },
  { name: 'Ocean & Sky', primary: '#0369a1', accent: '#38bdf8', description: 'Travel, Service' },
  { name: 'Forest & Lime', primary: '#166534', accent: '#84cc16', description: 'Natur, Bio' },
];

// ============================================
// FONT STACKS
// ============================================

var fontStacks = {
  system: {
    name: 'System (Standard)',
    value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    googleFontsHref: '',
    description: 'Schnell, DSGVO-freundlich, robust'
  },
  serif: {
    name: 'Serif (Klassisch)',
    value: "Georgia, 'Times New Roman', serif",
    body: "Georgia, 'Times New Roman', serif",
    display: "Georgia, 'Times New Roman', serif",
    googleFontsHref: '',
    description: 'Klassisch, elegant'
  },
  mono: {
    name: 'Monospace',
    value: "'SF Mono', Monaco, 'Cascadia Code', monospace",
    body: "'SF Mono', Monaco, 'Cascadia Code', monospace",
    display: "'SF Mono', Monaco, 'Cascadia Code', monospace",
    googleFontsHref: '',
    description: 'Tech, Developer'
  },

  // Referenz-Packs (orientiert an deinen aktuellen Pages)
  spark: {
    name: 'Spark (Fraunces + Plus Jakarta Sans)',
    value: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    display: "'Fraunces', ui-serif, Georgia, serif",
    googleFontsHref: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
    description: 'Premium-Modern (FutSure/Spark Look)'
  },
  instrument: {
    name: 'Instrument Sans (Swiss Clean)',
    value: "'Instrument Sans', system-ui, -apple-system, sans-serif",
    body: "'Instrument Sans', system-ui, -apple-system, sans-serif",
    display: "'Instrument Sans', system-ui, -apple-system, sans-serif",
    googleFontsHref: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap",
    description: 'Klar, technisch, präzise (City/Industrial Look)'
  },
  dmsans: {
    name: 'DM Sans (Warm Modern)',
    value: "'DM Sans', system-ui, -apple-system, sans-serif",
    body: "'DM Sans', system-ui, -apple-system, sans-serif",
    display: "'DM Sans', system-ui, -apple-system, sans-serif",
    googleFontsHref: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",
    description: 'Warm, modern (Holzbau Look)'
  },
  dmserif: {
    name: 'DM Serif + Source Sans 3 (Editorial Corporate)',
    value: "'Source Sans 3', system-ui, -apple-system, sans-serif",
    body: "'Source Sans 3', system-ui, -apple-system, sans-serif",
    display: "'DM Serif Display', ui-serif, Georgia, serif",
    googleFontsHref: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@400;600;700&display=swap",
    description: 'Editorial + Corporate (GVB Look)'
  },
  inter: {
    name: 'Inter (Product Minimal)',
    value: "'Inter', system-ui, -apple-system, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Inter', system-ui, -apple-system, sans-serif",
    googleFontsHref: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    description: 'Neutral, produktig, minimal (Strain Look)'
  }
};


// ============================================
// ELITE STYLE PRESETS (Premium Design System)
// ============================================

var eliteStylePresets = {
  signature: {
    name: 'Signature (Clean Premium)',
    description: 'Modern, ruhig, universell – ideal für die meisten Branchen.',
    neutrals: {
      bg: '#faf9f7',
      bgAlt: '#f5f4f2',
      text: '#18181b',
      textLight: '#52525b',
      textMuted: '#a8a29e',
      border: '#e7e5e4',
      borderLight: '#f5f5f4'
    },
    fx: { ambientOpacity: 0.85 },
    defaults: { fontStack: 'system', darkMode: false }
  },

  swiss: {
    name: 'Swiss Minimal',
    description: 'Typografisch streng, viel Weissraum, klare Hierarchie.',
    neutrals: {
      bg: '#ffffff',
      bgAlt: '#f7f7f8',
      text: '#0a0a0a',
      textLight: '#3f3f46',
      textMuted: '#a1a1aa',
      border: '#e4e4e7',
      borderLight: '#f4f4f5'
    },
    fx: { ambientOpacity: 0.55 },
    defaults: { fontStack: 'system', darkMode: false }
  },

  luxe: {
    name: 'Luxury Noir',
    description: 'Dunkel, hochwertig, editorial – perfekt für Premium/Luxus.',
    neutrals: {
      bg: '#0b0b0f',
      bgAlt: '#111118',
      text: '#f4f4f5',
      textLight: '#d4d4d8',
      textMuted: '#a1a1aa',
      border: '#27272a',
      borderLight: '#1f1f23'
    },
    fx: { ambientOpacity: 0.90 },
    defaults: { fontStack: 'serif', darkMode: true }
  },

  glass: {
    name: 'Glass Aurora',
    description: 'Soft gradients + Glassmorphism, wirkt modern und „high-end tech“.',
    neutrals: {
      bg: '#0b1220',
      bgAlt: '#0f172a',
      text: '#f8fafc',
      textLight: '#cbd5e1',
      textMuted: '#94a3b8',
      border: '#1f2a44',
      borderLight: '#172033'
    },
    fx: { ambientOpacity: 0.95 },
    defaults: { fontStack: 'system', darkMode: true }
  },

  editorial: {
    name: 'Editorial Serif',
    description: 'Serif-Headline, feine Kontraste – für Beratung, Kanzlei, Gastro.',
    neutrals: {
      bg: '#fbfbfa',
      bgAlt: '#f2f2ef',
      text: '#111827',
      textLight: '#374151',
      textMuted: '#9ca3af',
      border: '#e5e7eb',
      borderLight: '#f3f4f6'
    },
    fx: { ambientOpacity: 0.70 },
    defaults: { fontStack: 'serif', darkMode: false }
  }
  ,
  commerce: {
    name: 'Commerce Blue (Direct & Sharp)',
    description: 'Conversion-orientiert, klare Kontraste und schärfere Radien – ideal für E‑Commerce/Landingpages.',
    neutrals: {
      bg: '#f8f8f8',
      bgAlt: '#ffffff',
      text: '#232323',
      textLight: '#676767',
      textMuted: '#9ca3af',
      border: '#dadada',
      borderLight: '#eeeeee'
    },
    fx: { ambientOpacity: 0.55 },
    shape: { radiusSm: '2px', radiusMd: '6px', radiusLg: '10px', radiusXl: '14px' },
    defaults: { fontStack: 'system', darkMode: false }
  },
gasserwerk: {
  name: 'CLEAR-4 (Gasserwerk)',
  description: 'Ruhige Premium-Neutrals, sauberer 4px-Grid Look – ideal für Beratung, Treuhand, Services.',
  neutrals: {
    bg: '#f5f5f4',
    bgAlt: '#ececea',
    text: '#1f2937',
    textLight: '#4b5563',
    textMuted: '#9ca3af',
    border: '#e0e0de',
    borderLight: 'rgba(0, 0, 0, 0.06)'
  },
  fx: { ambientOpacity: 0.70 },
  shape: { radiusSm: '4px', radiusMd: '8px', radiusLg: '12px', radiusXl: '20px' },
  defaults: { fontStack: 'instrument', darkMode: false }
}
};

// ============================================
// INDUSTRY TEMPLATES
// ============================================

var industryTemplates = {
  // --------------------------------------------
  // GENERIC SWISS KMU (Landing)
  // --------------------------------------------
  schweizer_kmu: {
    name: 'Schweizer KMU Landing',
    icon: '🇨🇭',
    settings: {
      primaryColor: '#134e4a',
      accentColor: '#d97706',
      darkMode: false,
      fontStack: 'instrument',
      darkModeToggle: true,
      stylePreset: 'gasserwerk',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: {
        companyName: 'Musterfirma GmbH',
        logoText: 'MF',
        navItems: ['Leistungen', 'Vorteile', 'FAQ', 'Kontakt'],
        ctaText: 'Kostenlos beraten lassen'
      },
      hero: {
        title: 'Mehr Zeit fürs Kerngeschäft. Weniger Admin.',
        subtitle: 'Buchhaltung, Organisation und Backoffice – klar, effizient und zuverlässig.',
        primaryBtn: 'Kostenloses Erstgespräch',
        secondaryBtn: 'Leistungen ansehen',
        imageUrl: ''
      },
      trust: {
        items: [
          { value: 'Schweiz', label: 'Lokale Nähe' },
          { value: 'Transparent', label: 'Klare Offerten' },
          { value: 'Digital', label: 'Moderne Prozesse' },
          { value: 'Persönlich', label: 'Fixer Kontakt' }
        ]
      },
      services: {
        title: 'Unsere Leistungen',
        subtitle: 'Pragmatisch, terminsicher, passend zu Ihrem KMU.',
        items: [
          { icon: '📊', title: 'Finanzbuchhaltung', text: 'Saubere Fibu, Abstimmungen, Auswertungen – digital und nachvollziehbar.' },
          { icon: '💳', title: 'Debitoren/Kreditoren', text: 'Rechnungen, Mahnwesen, Zahlungsabgleich – mit klaren Prozessen.' },
          { icon: '🧾', title: 'Jahresabschluss', text: 'Abschluss nach OR, Vorbereitung für Steuern und Banken, sauber dokumentiert.' }
        ]
      },
      benefits: {
        title: 'Warum mit uns?',
        subtitle: 'Kompetenz, Klarheit und Verlässlichkeit.',
        items: [
          { title: 'Planbarkeit', text: 'Klare Pakete oder transparente Abrechnung – ohne Überraschungen.' },
          { title: 'Proaktive Kommunikation', text: 'Fristen, To-dos und offene Punkte werden frühzeitig adressiert.' },
          { title: 'Digitale Zusammenarbeit', text: 'Dokumente, Belege und Abstimmungen so effizient wie möglich.' }
        ]
      },
      testimonials: {
        title: 'Was Kunden schätzen',
        items: [
          { quote: 'Endlich haben wir saubere Zahlen und Ruhe bei Fristen.', author: 'K. Müller', role: 'Geschäftsführer, KMU' },
          { quote: 'Die Zusammenarbeit ist digital – aber trotzdem persönlich.', author: 'S. Meier', role: 'Inhaberin' }
        ]
      },
      faq: {
        title: 'Häufige Fragen',
        subtitle: 'Kurz beantwortet – gerne auch persönlich.',
        items: [
          { question: 'Wie läuft das Onboarding ab?', answer: 'Wir starten mit einem Erstgespräch, definieren den Umfang und richten die Zusammenarbeit (Tools, Ablage, Prozesse) ein.' },
          { question: 'Gibt es Fixpreise?', answer: 'Ja – je nach Umfang bieten wir Pakete oder eine transparente Abrechnung nach Aufwand.' },
          { question: 'Arbeitet ihr digital?', answer: 'Ja. Wir unterstützen cloudbasierte Abläufe und pragmatische digitale Prozesse.' }
        ]
      },
      cta: {
        title: 'Bereit für weniger Admin?',
        subtitle: 'Vereinbaren Sie ein kostenloses Erstgespräch. Wir melden uns zeitnah.',
        phone: '+41 00 000 00 00',
        email: 'info@example.ch'
      },
      footer: {
        companyName: 'Musterfirma GmbH',
        tagline: 'Zuverlässige Services für Schweizer KMU.',
        address: 'Musterstrasse 1, 8000 Zürich',
        phone: '+41 00 000 00 00',
        email: 'info@example.ch'
      }
    }
  },

  // --------------------------------------------
  // TREUHAND (Allround)
  // --------------------------------------------
  treuhand: {
    name: 'Treuhand (Allround)',
    icon: '🧾',
    settings: {
      primaryColor: '#1a365d',
      accentColor: '#38a169',
      darkMode: false,
      fontStack: 'instrument',
      darkModeToggle: false,
      stylePreset: 'swiss',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: {
        companyName: 'Treuhand Muster AG',
        logoText: 'TM',
        navItems: ['Leistungen', 'Ablauf', 'Team', 'FAQ', 'Kontakt'],
        ctaText: 'Erstgespräch buchen'
      },
      hero: {
        title: 'Ihr Treuhänder – persönlich. kompetent. digital.',
        subtitle: 'Buchhaltung, Steuern und Lohn – terminsicher und verständlich.',
        primaryBtn: 'Kostenloses Erstgespräch',
        secondaryBtn: 'Leistungen',
        imageUrl: ''
      },
      trust: {
        items: [
          { value: 'DSG/DSGVO', label: 'Datenschutz' },
          { value: 'Audit-Trail', label: 'Nachvollziehbar' },
          { value: 'Digital', label: 'Cloud-ready' },
          { value: 'Persönlich', label: 'Fixer Kontakt' }
        ]
      },
      authority: {
        title: 'Vertrauen & Standards',
        variant: 'badges',
        items: [
          { icon: '🏅', text: 'Verbandsmitgliedschaften (z. B. TREUHAND|SUISSE)' },
          { icon: '🎓', text: 'Aus- und Weiterbildungen (Diplome/Zertifikate)' },
          { icon: '🛡️', text: 'Berufshaftpflicht / Sorgfaltspflichten' }
        ]
      },
      services: {
        title: 'Leistungen',
        subtitle: 'Ein Treuhand-Setup, das zu Ihrem Alltag passt.',
        items: [
          { icon: '📊', title: 'Buchhaltung', text: 'Fibu, Debi/Kredi, Abschlüsse – klar strukturiert und effizient.' },
          { icon: '🧾', title: 'Steuern', text: 'Erklärungen, MWST, Planung – verständlich erklärt, sauber eingereicht.' },
          { icon: '👥', title: 'Lohn', text: 'Lohnabrechnungen, Quellensteuer, Sozialversicherungen – terminsicher.' },
          { icon: '🧠', title: 'Beratung', text: 'Gründung, Struktur, Nachfolge – pragmatisch und vorausschauend.' }
        ]
      },
      proofTable: {
        title: 'Was Sie gewinnen',
        subtitle: 'Vergleich: mit professioneller Treuhand vs. „selbst lösen“.',
        headers: ['Kriterium', 'Mit Treuhand', 'Selbst/Ad-hoc'],
        highlightColumn: 1,
        rows: [
          { criterion: 'Fristen & Compliance', us: 'Strukturierter Prozess, klare Verantwortung', other: 'Abhängig von Zeit/Know-how' },
          { criterion: 'Transparenz', us: 'Nachvollziehbar dokumentiert', other: 'Wissen verteilt / Personenabhängig' },
          { criterion: 'Entscheidungsgrundlagen', us: 'Sinnvolle Reports & Interpretation', other: 'Zahlen vorhanden, aber ohne Kontext' },
          { criterion: 'Risiko', us: 'Reduziert durch Review und Standards', other: 'Fehler-/Nachzahlungsrisiko' }
        ]
      },
      process: {
        title: 'So arbeiten wir',
        subtitle: 'Klarer Ablauf, wenig Reibung, sauberer Audit-Trail.',
        steps: [
          { num: '1', title: 'Erstgespräch', text: 'Ziele, Umfang, Fristen und Tools klären.' },
          { num: '2', title: 'Setup', text: 'Zugänge, Ablage, Prozesse und Verantwortlichkeiten definieren.' },
          { num: '3', title: 'Laufende Betreuung', text: 'Buchen, prüfen, abstimmen – mit proaktiven Hinweisen.' },
          { num: '4', title: 'Abschluss & Planung', text: 'Jahresabschluss, Steuern und Optimierungsschritte vorbereiten.' }
        ]
      },
      benefits: {
        title: 'Warum Mandanten bleiben',
        subtitle: 'Weil es im Alltag funktioniert.',
        items: [
          { title: 'Verlässlichkeit', text: 'Termine, Antworten und Ergebnisse – planbar und sauber.' },
          { title: 'Verständlichkeit', text: 'Wir übersetzen Zahlen in Entscheidungen.' },
          { title: 'Digitale Zusammenarbeit', text: 'So viel Automation wie sinnvoll – ohne Kontrollverlust.' }
        ]
      },
      team: {
        title: 'Ihr Team',
        subtitle: 'Persönliche Ansprechpartner mit Fachkompetenz.',
        members: [
          { name: 'Max Muster', role: 'Treuhandexperte', image: '', bio: 'Buchhaltung, Abschluss, Beratung.' },
          { name: 'Laura Beispiel', role: 'Steuern', image: '', bio: 'Natürliche und juristische Personen, MWST.' },
          { name: 'Noah Demo', role: 'Lohn & Sozialversicherungen', image: '', bio: 'Lohn, Quellensteuer, Deklarationen.' }
        ]
      },
      testimonials: {
        title: 'Mandantenstimmen',
        items: [
          { quote: 'Endlich ist alles sauber – und ich weiss, wo ich stehe.', author: 'A. Keller', role: 'KMU-Inhaber' },
          { quote: 'Digital, schnell und trotzdem persönlich erreichbar.', author: 'J. Steiner', role: 'Co-Founder' }
        ]
      },
      faq: {
        title: 'FAQ',
        subtitle: 'Die häufigsten Fragen zur Zusammenarbeit.',
        items: [
          { question: 'Welche Unterlagen braucht ihr?', answer: 'Je nach Umfang: Bankzugang/Exports, Belege, Verträge, Lohnstammdaten, MWST-Infos. Wir geben eine klare Checkliste.' },
          { question: 'Arbeitet ihr mit Bexio/Abacus/KLARA?', answer: 'Wir richten uns nach Ihrem Setup oder empfehlen pragmatisch eine passende Lösung.' },
          { question: 'Wie schnell kann es losgehen?', answer: 'Nach Erstgespräch und Setup typischerweise kurzfristig – abhängig von Zugängen und Datenlage.' }
        ]
      },
      cta: {
        title: 'Kostenloses Erstgespräch',
        subtitle: 'Sagen Sie uns kurz, wo Sie stehen – wir schlagen die nächsten Schritte vor.',
        phone: '+41 00 000 00 00',
        email: 'info@example.ch'
      },
      stickyCta: {
        text: 'Fragen zu Buchhaltung oder Steuern?',
        buttonText: 'Rückruf anfordern',
        phone: '+41 00 000 00 00',
        note: 'Diskret & unverbindlich'
      },
      footer: {
        companyName: 'Treuhand Muster AG',
        tagline: 'Treuhand für KMU, Start-ups und Privatpersonen.',
        address: 'Musterweg 12, 8000 Zürich',
        phone: '+41 00 000 00 00',
        email: 'info@example.ch',
        linkedin: '',
        facebook: '',
        instagram: ''
      }
    }
  },

  treuhand_kmu: {
    name: 'Treuhand für KMU',
    icon: '🏢',
    settings: {
      primaryColor: '#1a365d',
      accentColor: '#38a169',
      darkMode: false,
      fontStack: 'instrument',
      stylePreset: 'swiss',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      hero: {
        title: 'Treuhand für KMU in Ihrer Region',
        subtitle: 'Terminsicher, verständlich, digital – damit Sie Zeit fürs Kerngeschäft haben.',
        primaryBtn: 'Kostenloses Erstgespräch',
        secondaryBtn: 'Leistungen',
        imageUrl: ''
      },
      services: {
        title: 'KMU-Leistungen',
        subtitle: 'Fokus auf Alltagstauglichkeit und Terminsicherheit.',
        items: [
          { icon: '📊', title: 'Fibu & Abschluss', text: 'Sauber buchen, abstimmen und abschliessen – ohne Hektik.' },
          { icon: '🧾', title: 'Steuern & MWST', text: 'Erklärungen, Abrechnungen, Planung – strukturiert und verständlich.' },
          { icon: '👥', title: 'Lohn', text: 'Lohnläufe, Quellensteuer, Sozialversicherungen – terminsicher.' }
        ]
      }
    }
  },

  treuhand_startup: {
    name: 'Treuhand für Start-ups',
    icon: '🚀',
    settings: {
      primaryColor: '#0d9488',
      accentColor: '#38bdf8',
      darkMode: false,
      fontStack: 'spark',
      stylePreset: 'gasserwerk',
      designDensity: 'balanced',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      hero: {
        title: 'Finance & Treuhand, die mitwächst',
        subtitle: 'Setup, Reporting und Steuern – mit Cloud-Tools und pragmatischem Sparring.',
        primaryBtn: 'Kostenloses Erstgespräch',
        secondaryBtn: 'Start-up Setup',
        imageUrl: ''
      },
      services: {
        title: 'Start-up Services',
        subtitle: 'Vom Setup bis zum Reporting – skalierbar.',
        items: [
          { icon: '🧩', title: 'Tooling & Setup', text: 'Cloud-Buchhaltung, Belegfluss, Bank-Feeds – sauber aufgesetzt.' },
          { icon: '📈', title: 'Cash & Reporting', text: 'Monatliche Auswertungen, KPIs und Entscheidungsgrundlagen.' },
          { icon: '🧾', title: 'Steuern & MWST', text: 'MWST-Setup, Erklärungen, Planung – ohne Overhead.' },
          { icon: '🤝', title: 'Sparring', text: 'Finanzübersetzer für Gründerteams, Investorenfragen, Struktur.' }
        ]
      },
      proofTable: {
        title: 'Warum Start-ups uns wählen',
        subtitle: 'Weniger Reibung, mehr Klarheit.',
        headers: ['Kriterium', 'Mit uns', 'Ohne Setup'],
        highlightColumn: 1,
        rows: [
          { criterion: 'Time-to-Insights', us: 'KPIs und Reports in klaren Zyklen', other: 'Zahlen kommen spät oder gar nicht' },
          { criterion: 'Tool-Fit', us: 'Cloud-Stack passend zum Team', other: 'Tool-Wildwuchs / Medienbrüche' },
          { criterion: 'Investor Readiness', us: 'Strukturierte Daten & Unterlagen', other: 'Nacharbeiten unter Druck' }
        ]
      }
    }
  },

  treuhand_private: {
    name: 'Treuhand für Privatpersonen (HNWI)',
    icon: '🛡️',
    settings: {
      primaryColor: '#111827',
      accentColor: '#b8860b',
      darkMode: false,
      fontStack: 'serif',
      stylePreset: 'editorial',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      hero: {
        title: 'Diskret. Ganzheitlich. Langfristig.',
        subtitle: 'Steuern, Struktur, Nachfolge – mit einem Ansprechpartner und klarer Dokumentation.',
        primaryBtn: 'Vertrauliches Gespräch',
        secondaryBtn: 'Leistungen',
        imageUrl: ''
      },
      services: {
        title: 'Leistungen für Privatpersonen',
        subtitle: 'Wenn Komplexität Disziplin braucht.',
        items: [
          { icon: '🧾', title: 'Steuern', text: 'Erklärung, Planung, Optimierung – sauber dokumentiert.' },
          { icon: '🧱', title: 'Strukturen', text: 'Vermögens- und Gesellschaftsstrukturen – nachvollziehbar und robust.' },
          { icon: '🧬', title: 'Nachfolge', text: 'Vorsorge und Übergaben – proaktiv geplant.' }
        ]
      }
    }
  },

  // --------------------------------------------
  // OTHER INDUSTRIES (Fixed Schemas)
  // --------------------------------------------
  anwalt: {
    name: 'Anwaltskanzlei',
    icon: '⚖️',
    settings: {
      primaryColor: '#1e3a5f',
      accentColor: '#ca8a04',
      darkMode: false,
      fontStack: 'serif',
      stylePreset: 'editorial',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Kanzlei Muster', logoText: 'KM', navItems: ['Kompetenzen', 'Team', 'FAQ', 'Kontakt'], ctaText: 'Erstberatung' },
      hero: { title: 'Recht. Klar. Durchsetzbar.', subtitle: 'Beratung und Vertretung mit Struktur und Fokus auf Ergebnisse.', primaryBtn: 'Erstberatung', secondaryBtn: 'Kompetenzen', imageUrl: '' },
      trust: { items: [{ value: 'Vertraulich', label: 'Diskretion' }, { value: 'Präzise', label: 'Struktur' }, { value: 'Erfahren', label: 'Praxis' }, { value: 'Lokal', label: 'Region' }] },
      services: {
        title: 'Kompetenzen',
        subtitle: 'Ausgewählte Rechtsgebiete.',
        items: [
          { icon: '📄', title: 'Vertragsrecht', text: 'Erstellung, Prüfung, Verhandlung – praxisnah.' },
          { icon: '🏢', title: 'Gesellschaftsrecht', text: 'Gründung, Umstrukturierung, Governance.' },
          { icon: '⚖️', title: 'Prozessführung', text: 'Vertretung, Strategie, Durchsetzung.' }
        ]
      },
      benefits: {
        title: 'Arbeitsweise',
        subtitle: '',
        items: [
          { title: 'Klare Einschätzung', text: 'Realistische Chancen-/Risikoabwägung.' },
          { title: 'Saubere Dokumentation', text: 'Transparente Schritte und Entscheidungen.' },
          { title: 'Direkte Kommunikation', text: 'Kurz, verständlich, ohne Umwege.' }
        ]
      },
      testimonials: {
        title: 'Mandantenstimmen',
        items: [{ quote: 'Schnell, präzise und lösungsorientiert.', author: 'Mandant', role: 'Unternehmen' }]
      },
      faq: {
        title: 'FAQ',
        subtitle: '',
        items: [
          { question: 'Wie läuft die Erstberatung ab?', answer: 'Wir klären Ziele, Sachverhalt und Optionen und geben eine erste Einschätzung.' },
          { question: 'Wie werden Kosten berechnet?', answer: 'Je nach Mandat pauschal oder nach Aufwand – transparent vereinbart.' }
        ]
      },
      cta: { title: 'Erstberatung vereinbaren', subtitle: 'Vertraulich und strukturiert.', phone: '+41 00 000 00 00', email: 'info@example.ch' },
      footer: { companyName: 'Kanzlei Muster', tagline: 'Rechtsberatung in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'info@example.ch' }
    }
  },

  handwerker: {
    name: 'Handwerker',
    icon: '🔨',
    settings: {
      primaryColor: '#c2410c',
      accentColor: '#fbbf24',
      darkMode: false,
      fontStack: 'dmsans',
      stylePreset: 'signature',
      designDensity: 'balanced',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Handwerk Muster', logoText: 'HM', navItems: ['Leistungen', 'Ablauf', 'FAQ', 'Kontakt'], ctaText: 'Offerte anfragen' },
      hero: { title: 'Saubere Arbeit. Saubere Abnahme.', subtitle: 'Planung, Ausführung und Kommunikation – zuverlässig und termintreu.', primaryBtn: 'Offerte anfragen', secondaryBtn: 'Leistungen', imageUrl: '' },
      trust: { items: [{ value: 'Regional', label: 'Vor Ort' }, { value: 'Termintreu', label: 'Planbar' }, { value: 'Sauber', label: 'Dokumentiert' }, { value: 'Garantie', label: 'Nach Vereinbarung' }] },
      services: {
        title: 'Leistungen',
        subtitle: 'Von klein bis gross – sauber umgesetzt.',
        items: [
          { icon: '🧱', title: 'Umbau & Renovation', text: 'Koordination, Umsetzung, Abnahme.' },
          { icon: '🏠', title: 'Service & Reparaturen', text: 'Schnelle Hilfe bei Bedarf.' },
          { icon: '📐', title: 'Planung', text: 'Klare Offerte und transparenter Ablauf.' }
        ]
      },
      process: {
        title: 'So läuft es ab',
        subtitle: '',
        steps: [
          { num: '1', title: 'Besichtigung', text: 'Kurz vor Ort, Umfang klären.' },
          { num: '2', title: 'Offerte', text: 'Transparent, nachvollziehbar.' },
          { num: '3', title: 'Umsetzung', text: 'Termine, Kommunikation, Qualität.' },
          { num: '4', title: 'Abnahme', text: 'Sauber dokumentiert.' }
        ]
      },
      benefits: {
        title: 'Warum wir?',
        subtitle: '',
        items: [
          { title: 'Transparente Offerten', text: 'Klare Positionen und nachvollziehbare Schritte.' },
          { title: 'Saubere Kommunikation', text: 'Sie wissen, was wann passiert.' },
          { title: 'Qualitätsfokus', text: 'Saubere Abnahme und Dokumentation.' }
        ]
      },
      testimonials: { title: 'Kundenstimmen', items: [{ quote: 'Top Arbeit und klare Kommunikation.', author: 'Kundin', role: 'Privat' }] },
      faq: { title: 'FAQ', subtitle: '', items: [{ question: 'Wie schnell erhalte ich eine Offerte?', answer: 'Nach Besichtigung und Umfangs-Klärung erstellen wir zeitnah eine Offerte.' }] },
      cta: { title: 'Offerte anfragen', subtitle: 'Schnell und unverbindlich.', phone: '+41 00 000 00 00', email: 'info@example.ch' },
      footer: { companyName: 'Handwerk Muster', tagline: 'Handwerkliche Qualität in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'info@example.ch' }
    }
  },

  arzt: {
    name: 'Arztpraxis',
    icon: '🩺',
    settings: {
      primaryColor: '#15803d',
      accentColor: '#34d399',
      darkMode: false,
      fontStack: 'dmsans',
      stylePreset: 'signature',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Praxis Muster', logoText: 'PM', navItems: ['Leistungen', 'Team', 'FAQ', 'Kontakt'], ctaText: 'Termin anfragen' },
      hero: { title: 'Medizin mit Ruhe und Struktur', subtitle: 'Sprechstunden, Diagnostik und Betreuung – klar organisiert.', primaryBtn: 'Termin anfragen', secondaryBtn: 'Leistungen', imageUrl: '' },
      trust: { items: [{ value: 'Empathisch', label: 'Betreuung' }, { value: 'Strukturiert', label: 'Abläufe' }, { value: 'Modern', label: 'Praxis' }, { value: 'Erreichbar', label: 'Kontakt' }] },
      services: {
        title: 'Leistungen',
        subtitle: 'Ausgewählte Schwerpunkte.',
        items: [
          { icon: '🩻', title: 'Abklärung', text: 'Sorgfältige Diagnostik und Einordnung.' },
          { icon: '💊', title: 'Behandlung', text: 'Therapieplanung und Begleitung.' },
          { icon: '📋', title: 'Vorsorge', text: 'Check-ups und Prävention.' }
        ]
      },
      team: {
        title: 'Team',
        subtitle: 'Sprechstunde und Betreuung.',
        members: [
          { name: 'Dr. Muster', role: 'Facharzt', image: '', bio: 'Schwerpunkt: Allgemeinmedizin.' }
        ]
      },
      faq: {
        title: 'FAQ',
        subtitle: '',
        items: [
          { question: 'Wie buche ich einen Termin?', answer: 'Kontaktieren Sie uns telefonisch oder per E-Mail. Online-Buchung kann ergänzt werden.' }
        ]
      },
      cta: { title: 'Termin anfragen', subtitle: 'Wir melden uns zeitnah.', phone: '+41 00 000 00 00', email: 'info@example.ch' },
      footer: { companyName: 'Praxis Muster', tagline: 'Ihre Praxis in der Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'info@example.ch' }
    }
  },

  restaurant: {
    name: 'Restaurant',
    icon: '🍷',
    settings: {
      primaryColor: '#881337',
      accentColor: '#fbbf24',
      darkMode: false,
      fontStack: 'serif',
      stylePreset: 'editorial',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Restaurant Muster', logoText: 'RM', navItems: ['Menü', 'Ambiente', 'FAQ', 'Kontakt'], ctaText: 'Tisch reservieren' },
      hero: { title: 'Genuss mit Charakter', subtitle: 'Saisonale Küche, gute Weine, klare Handschrift.', primaryBtn: 'Reservieren', secondaryBtn: 'Menü', imageUrl: '' },
      trust: { items: [{ value: 'Saisonal', label: 'Küche' }, { value: 'Regional', label: 'Produkte' }, { value: 'Wein', label: 'Selektion' }, { value: 'Ambiente', label: 'Erlebnis' }] },
      services: {
        title: 'Highlights',
        subtitle: '',
        items: [
          { icon: '🍽️', title: 'Menü', text: 'Saisonale Klassiker und Signature Dishes.' },
          { icon: '🍷', title: 'Weine', text: 'Kuratiert – passend zum Menü.' },
          { icon: '🎉', title: 'Anlässe', text: 'Private und Business Events nach Absprache.' }
        ]
      },
      testimonials: { title: 'Gästestimmen', items: [{ quote: 'Wunderbares Menü und sehr aufmerksamer Service.', author: 'Gast', role: '' }] },
      faq: { title: 'FAQ', subtitle: '', items: [{ question: 'Kann ich online reservieren?', answer: 'Ja – oder telefonisch. Reservationstool kann ergänzt werden.' }] },
      cta: { title: 'Tisch reservieren', subtitle: 'Wir freuen uns auf Ihren Besuch.', phone: '+41 00 000 00 00', email: 'reservation@example.ch' },
      footer: { companyName: 'Restaurant Muster', tagline: 'Saisonale Küche in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'reservation@example.ch' }
    }
  },

  immobilien: {
    name: 'Immobilien',
    icon: '🏠',
    settings: {
      primaryColor: '#0369a1',
      accentColor: '#38bdf8',
      darkMode: false,
      fontStack: 'instrument',
      stylePreset: 'swiss',
      designDensity: 'airy',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Immobilien Muster', logoText: 'IM', navItems: ['Angebote', 'Services', 'FAQ', 'Kontakt'], ctaText: 'Bewertung anfragen' },
      hero: { title: 'Immobilien – klar vermarktet', subtitle: 'Bewertung, Verkauf, Verwaltung – mit Struktur und Transparenz.', primaryBtn: 'Bewertung anfragen', secondaryBtn: 'Angebote', imageUrl: '' },
      trust: { items: [{ value: 'Transparent', label: 'Prozess' }, { value: 'Marktkenntnis', label: 'Region' }, { value: 'Sauber', label: 'Dokumente' }, { value: 'Erreichbar', label: 'Kontakt' }] },
      services: {
        title: 'Services',
        subtitle: '',
        items: [
          { icon: '📈', title: 'Bewertung', text: 'Marktgerechte Einschätzung und Positionierung.' },
          { icon: '📣', title: 'Vermarktung', text: 'Exposé, Besichtigungen, Verhandlung.' },
          { icon: '🗂️', title: 'Verwaltung', text: 'STWE/Mietverwaltung nach Vereinbarung.' }
        ]
      },
      faq: { title: 'FAQ', subtitle: '', items: [{ question: 'Wie läuft eine Bewertung ab?', answer: 'Datenaufnahme, Vergleichswerte, Begehung – danach eine strukturierte Einschätzung.' }] },
      cta: { title: 'Bewertung anfragen', subtitle: 'Unverbindlich und strukturiert.', phone: '+41 00 000 00 00', email: 'info@example.ch' },
      footer: { companyName: 'Immobilien Muster', tagline: 'Immobilien-Services in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'info@example.ch' }
    }
  },

  coiffeur: {
    name: 'Coiffeur',
    icon: '💇',
    settings: {
      primaryColor: '#7c3aed',
      accentColor: '#ec4899',
      darkMode: false,
      fontStack: 'dmsans',
      stylePreset: 'signature',
      designDensity: 'balanced',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none'
    },
    components: {
      header: { companyName: 'Studio Muster', logoText: 'SM', navItems: ['Services', 'Team', 'FAQ', 'Kontakt'], ctaText: 'Termin buchen' },
      hero: { title: 'Hair & Style – mit Gefühl', subtitle: 'Schnitt, Farbe, Styling – in entspannter Atmosphäre.', primaryBtn: 'Termin buchen', secondaryBtn: 'Services', imageUrl: '' },
      trust: { items: [{ value: 'Beratung', label: 'Look' }, { value: 'Qualität', label: 'Produkte' }, { value: 'Style', label: 'Trends' }, { value: 'Relax', label: 'Atmosphäre' }] },
      services: {
        title: 'Services',
        subtitle: '',
        items: [
          { icon: '✂️', title: 'Schnitt', text: 'Passend zu Ihrem Typ.' },
          { icon: '🎨', title: 'Farbe', text: 'Von natürlich bis bold – sauber umgesetzt.' },
          { icon: '💫', title: 'Styling', text: 'Für Alltag und Anlass.' }
        ]
      },
      testimonials: { title: 'Stimmen', items: [{ quote: 'Super Beratung und top Ergebnis.', author: 'Kundin', role: '' }] },
      faq: { title: 'FAQ', subtitle: '', items: [{ question: 'Kann ich online buchen?', answer: 'Online-Buchung kann ergänzt werden – alternativ telefonisch.' }] },
      cta: { title: 'Termin buchen', subtitle: 'Wir freuen uns auf Sie.', phone: '+41 00 000 00 00', email: 'hello@example.ch' },
      footer: { companyName: 'Studio Muster', tagline: 'Coiffeur in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'hello@example.ch' }
    }
  },

  it: {
    name: 'IT & Digital',
    icon: '💻',
    settings: {
      primaryColor: '#4f46e5',
      accentColor: '#06b6d4',
      darkMode: true,
      fontStack: 'instrument',
      stylePreset: 'glass',
      designDensity: 'balanced',
      generateImpressum: true,
      generateDatenschutz: true,
      trackingPreset: 'none',
      fxOrbs: true,
      fxGlass: true,
      fxIntensity: 'medium'
    },
    components: {
      header: { companyName: 'Digital Muster', logoText: 'DM', navItems: ['Services', 'Cases', 'FAQ', 'Kontakt'], ctaText: 'Demo anfragen' },
      hero: { title: 'Build. Ship. Improve.', subtitle: 'Web, Automation und Integrationen – sauber umgesetzt und messbar.', primaryBtn: 'Demo anfragen', secondaryBtn: 'Services', imageUrl: '' },
      trust: { items: [{ value: 'API-first', label: 'Integration' }, { value: 'Performance', label: 'Speed' }, { value: 'Security', label: 'Basics' }, { value: 'Delivery', label: 'Hands-on' }] },
      services: {
        title: 'Services',
        subtitle: '',
        items: [
          { icon: '🧠', title: 'Automation', text: 'Workflows, Datenflüsse, AI-Assists – pragmatisch.' },
          { icon: '🧩', title: 'Integration', text: 'APIs, Tools, CRM – sauber verbunden.' },
          { icon: '🧱', title: 'Web', text: 'Landingpages, Websites, Portale – conversion-orientiert.' }
        ]
      },
      testimonials: { title: 'Feedback', items: [{ quote: 'Schnell geliefert und sauber integriert.', author: 'Kunde', role: 'SaaS' }] },
      faq: { title: 'FAQ', subtitle: '', items: [{ question: 'Wie startet ein Projekt?', answer: 'Discovery, Scope, Umsetzungsplan – dann iterativ liefern.' }] },
      cta: { title: 'Demo anfragen', subtitle: 'Kurz schildern, wir schlagen die nächsten Schritte vor.', phone: '+41 00 000 00 00', email: 'hello@example.ch' },
      footer: { companyName: 'Digital Muster', tagline: 'Web & Automations in Ihrer Region.', address: 'Musterstrasse 1, 8000 Zürich', phone: '+41 00 000 00 00', email: 'hello@example.ch' }
    }
  }
};

// ============================================
// DEFAULT COMPONENTS
// ============================================

var createDefaultComponents = () => ({
  header: {
    id: 'header',
    type: 'header',
    name: 'Header',
    enabled: true,
    data: {
      logoText: 'BF',
      logoUrl: '',
      companyName: 'Firmenname',
      navItems: ['Leistungen', 'Über uns', 'Kontakt'],
      ctaText: 'Anfrage',
      showDarkModeToggle: false
    }
  },
  
  hero: {
    id: 'hero',
    type: 'hero',
    name: 'Hero',
    enabled: true,
    data: {
      title: 'Headline die den Nutzen zeigt',
      subtitle: 'Ein bis zwei Sätze die erklären was Sie machen und warum der Besucher bei Ihnen richtig ist.',
      primaryBtn: 'Jetzt starten',
      secondaryBtn: 'Mehr erfahren',
      imageUrl: ''
    }
  },
  
  trust: {
    id: 'trust',
    type: 'trust',
    name: 'Trust Bar',
    enabled: true,
    data: {
      items: [
        { value: '500+', label: 'Kunden' },
        { value: '25+', label: 'Jahre Erfahrung' },
        { value: '98%', label: 'Zufriedenheit' }
      ]
    }
  },
  
  services: {
    id: 'services',
    type: 'services',
    name: 'Leistungen',
    enabled: true,
    data: {
      title: 'Unsere Leistungen',
      subtitle: 'Was wir für Sie tun können',
      items: [
        { icon: '📊', title: 'Leistung 1', text: 'Beschreibung der ersten Leistung.' },
        { icon: '💼', title: 'Leistung 2', text: 'Beschreibung der zweiten Leistung.' },
        { icon: '🎯', title: 'Leistung 3', text: 'Beschreibung der dritten Leistung.' }
      ]
    }
  },
  
  benefits: {
    id: 'benefits',
    type: 'benefits',
    name: 'Vorteile',
    enabled: true,
    data: {
      title: 'Warum wir?',
      items: [
        { title: 'Unabhängig', text: 'Wir beraten neutral und in Ihrem Interesse.' },
        { title: 'Persönlich', text: 'Ein fester Ansprechpartner für alle Fragen.' },
        { title: 'Erfahren', text: 'Über 25 Jahre Branchenerfahrung.' }
      ]
    }
  },
  
  team: {
    id: 'team',
    type: 'team',
    name: 'Team',
    enabled: false,
    data: {
      title: 'Unser Team',
      subtitle: 'Die Menschen hinter dem Erfolg',
      members: [
        { name: 'Max Muster', role: 'Geschäftsführer', image: '', bio: 'Gründer mit 20 Jahren Erfahrung.' },
        { name: 'Anna Beispiel', role: 'Beraterin', image: '', bio: 'Spezialistin für Steuerfragen.' }
      ]
    }
  },
  
  gallery: {
    id: 'gallery',
    type: 'gallery',
    name: 'Galerie',
    enabled: false,
    data: {
      title: 'Einblicke',
      subtitle: 'Impressionen aus unserem Alltag',
      images: [
        { url: '', caption: 'Bild 1' },
        { url: '', caption: 'Bild 2' },
        { url: '', caption: 'Bild 3' }
      ]
    }
  },
  
  testimonials: {
    id: 'testimonials',
    type: 'testimonials',
    name: 'Testimonials',
    enabled: true,
    data: {
      title: 'Das sagen unsere Kunden',
      items: [
        { quote: 'Die kompetente Beratung hat mir sehr geholfen. Ich kann die Firma wärmstens weiterempfehlen.', author: 'Hans P.', role: 'Zufriedener Kunde' }
      ]
    }
  },
  
  faq: {
    id: 'faq',
    type: 'faq',
    name: 'FAQ',
    enabled: false,
    data: {
      title: 'Häufige Fragen',
      subtitle: 'Antworten auf die wichtigsten Fragen',
      items: [
        { question: 'Wie läuft eine Erstberatung ab?', answer: 'In einem kostenlosen Erstgespräch lernen wir uns kennen und besprechen Ihre Situation.' },
        { question: 'Was kostet Ihre Dienstleistung?', answer: 'Die Kosten richten sich nach dem Umfang. Gerne erstellen wir Ihnen eine unverbindliche Offerte.' }
      ]
    }
  },
  

  authority: {
    id: 'authority',
    type: 'authority',
    name: 'Authority Strip',
    enabled: false,
    data: {
      title: 'Worauf Sie sich verlassen können',
      items: [
        { icon: '🏛️', text: 'Eidg. dipl. / zertifiziert (Beispiel)' },
        { icon: '🧾', text: 'Unabhängig & neutral – keine Provisionen im Fokus' },
        { icon: '🔒', text: 'Datenschutz garantiert' }
      ],
      variant: 'chips' // chips | list
    }
  },

  process: {
    id: 'process',
    type: 'process',
    name: 'Ablauf',
    enabled: false,
    data: {
      title: 'Ein Prozess, der Klarheit schafft',
      subtitle: 'Einfach, strukturiert, ohne Druck – mit messbaren Ergebnissen.',
      steps: [
        { num: '01', title: 'Erstgespräch', text: 'Ziele, Prioritäten, nächster Schritt – kurz und konkret.' },
        { num: '02', title: 'Analyse', text: 'Wir prüfen Unterlagen, Optionen, Risiken und Einsparpotenzial.' },
        { num: '03', title: 'Empfehlung', text: 'Verständliche Optionen mit Vor- und Nachteilen – ohne Fachjargon.' },
        { num: '04', title: 'Umsetzung', text: 'Wenn gewünscht: saubere Dokumentation und Begleitung.' }
      ]
    }
  },

  proofTable: {
    id: 'proofTable',
    type: 'proofTable',
    name: 'Proof Table',
    enabled: false,
    data: {
      title: 'Vergleiche Qualität, nicht Marketing',
      subtitle: 'Eine klare Vergleichstabelle macht Differenzierung messbar.',
      headers: ['Kriterium', 'Wir', 'Andere'],
      rows: [
        { criterion: 'Rohstoff deklariert', us: '✓ Ja', other: '✗ Nein' },
        { criterion: 'Transparente Methode', us: '✓ Ja', other: 'Oft unklar' },
        { criterion: 'Schweizer Produktion', us: '✓ Ja', other: 'Meist Ausland' },
        { criterion: 'Ohne unnötige Zusätze', us: '✓ Ja', other: 'Oft enthalten' }
      ],
      highlightColumn: 1 // 0|1|2
    }
  },

  stickyCta: {
    id: 'stickyCta',
    type: 'stickyCta',
    name: 'Sticky CTA',
    enabled: false,
    data: {
      text: 'Kostenloses Erstgespräch – in 15 Minuten zur Klarheit.',
      buttonText: 'Termin vereinbaren',
      phone: '078 000 00 00',
      note: 'Optional: Telefon direkt anrufen'
    }
  },

  cta: {
    id: 'cta',
    type: 'cta',
    name: 'Call to Action',
    enabled: true,
    data: {
      title: 'Bereit loszulegen?',
      subtitle: 'Kontaktieren Sie uns für ein unverbindliches Gespräch.',
      phone: '+41 31 XXX XX XX',
      email: 'info@example.ch'
    }
  },
  
  cookie: {
    id: 'cookie',
    type: 'cookie',
    name: 'Cookie Banner',
    enabled: true,
    data: {
      
      
      
      
      
      
      
      
      
      
      
      
      defaultMarketing: false,defaultStatistics: false,showSettingsButton: true,manageLinkText: 'Cookie-Einstellungen',preferencesText: 'Wählen Sie aus, welche Cookies wir verwenden dürfen. Notwendige Cookies sind immer aktiv.',preferencesTitle: 'Cookie-Einstellungen',marketingLabel: 'Marketing',statisticsLabel: 'Statistik',necessaryLabel: 'Notwendig',savePreferences: 'Speichern',openSettings: 'Einstellungen',acceptReject: 'Ablehnen',title: 'Cookie-Einstellungen',
      text: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.',
      acceptAll: 'Alle akzeptieren',
      acceptNecessary: 'Nur notwendige',
      policyLink: '/datenschutz.html'
    }
  },
  
  footer: {
    id: 'footer',
    type: 'footer',
    name: 'Footer',
    enabled: true,
    data: {
      companyName: 'Firmenname GmbH',
      tagline: 'Ihr Partner für XYZ in der Region.',
      address: 'Musterstrasse 123, 3000 Bern',
      phone: '+41 31 XXX XX XX',
      email: 'info@example.ch',
      linkedin: '',
      facebook: '',
      instagram: ''
    }
  }
});

// ============================================
// DEFAULT COMPONENT ORDER
// ============================================

var defaultComponentOrder = [
  'header',
  'hero',
  'trust',
  'authority',
  'services',
  'proofTable',
  'process',
  'benefits',
  'team',
  'gallery',
  'testimonials',
  'faq',
  'cta',
  'stickyCta',
  'footer',
  'cookie'
];

// ============================================
// DEFAULT SETTINGS
// ============================================

var defaultSettings = window.defaultSettings = {
  // Site Info
  siteName: 'Meine Website',
  siteDescription: 'Professionelle Dienstleistungen für Ihr Unternehmen.',
  
  // Colors
  primaryColor: '#134e4a',
  accentColor: '#d97706',
  
  // Color Stack Generator
  colorStack: null,
  useColorStack: false,
  
  // Appearance
  darkMode: false,
  darkModeToggle: false,
  fontStack: 'system',

  // Elite Design
  stylePreset: 'signature',        // signature | swiss | luxe | glass | editorial
  designDensity: 'balanced',       // compact | balanced | airy

  // Premium FX
  fxOrbs: false,                   // Gradient orbs background
  fxGrain: false,                  // Grain/noise texture overlay
  fxGlass: false,                  // Glassmorphism cards
  fxIntensity: 'medium',           // subtle | medium | intense

  // Tracking & Datenschutz (CH)
  trackingPreset: 'none',           // none | ga4 | matomo
  tracking: {
    ga4MeasurementId: '',
    matomoUrl: '',
    matomoSiteId: ''
  },

  // Favicon
  faviconEmoji: '🏢',
  
  // Multi-Page
  generateImpressum: false,
  generateDatenschutz: false,
  
  // Legal Info (for Impressum)
  companyLegal: {
    name: 'Firmenname GmbH',
    owner: 'Max Muster',
    address: 'Musterstrasse 123, 3000 Bern',
    email: 'info@example.ch',
    phone: '+41 31 XXX XX XX',
    uid: 'CHE-123.456.789'
  }
};

// ============================================
// COMPONENT META INFO
// ============================================

var componentMeta = {
  header: { icon: '📌', description: 'Navigation und Logo' },
  hero: { icon: '🎯', description: 'Hauptbereich mit Headline' },
  trust: { icon: '✨', description: 'Zahlen und Fakten' },
  authority: { icon: '🏅', description: 'Credentials / Vertrauen' },
  services: { icon: '🔧', description: 'Leistungen als Karten' },
  proofTable: { icon: '📊', description: 'Vergleich / Differenzierung' },
  process: { icon: '🧭', description: 'Ablauf in Schritten' },
  benefits: { icon: '✅', description: 'Vorteile mit Checkmarks' },
  team: { icon: '👥', description: 'Team-Mitglieder' },
  gallery: { icon: '🖼️', description: 'Bildergalerie' },
  testimonials: { icon: '💬', description: 'Kundenstimmen' },
  faq: { icon: '❓', description: 'Häufige Fragen' },
  cta: { icon: '📞', description: 'Kontakt-Aufruf' },
  stickyCta: { icon: '🧲', description: 'Fixer CTA-Balken' },
  footer: { icon: '📋', description: 'Fusszeile' },
  cookie: { icon: '🍪', description: 'Cookie-Hinweis' }
};

// ============================================
// EXPORTS (für Module-Umgebung)
// ============================================

// Falls in einer Module-Umgebung, exportieren
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Icons,
    colorPalettes,
    fontStacks,
    eliteStylePresets,
    industryTemplates,
    createDefaultComponents,
    defaultComponentOrder,
    defaultSettings,
    componentMeta
  };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - TOKENS GENERATOR
   ============================================
   Generiert CSS Custom Properties (Design Tokens)
   ============================================ */

/**
 * Generate complete CSS tokens from settings
 */
function generateTokensCSS(settings) {
  const cs = (settings.useColorStack && settings.colorStack) ? settings.colorStack : null;
  const modeKey = settings.darkMode ? 'dark' : 'light';
  const sem = (cs && cs.semanticTokens && cs.semanticTokens[modeKey]) ? cs.semanticTokens[modeKey] : null;

  let primaryColor = (sem && sem.primaryBg) ? sem.primaryBg : (settings.primaryColor || '#134e4a');
  let accentColor  = (sem && sem.accentBg)  ? sem.accentBg  : (settings.accentColor  || '#d97706');
  const brandPrimary = (cs && cs.primary && cs.primary[500]) ? cs.primary[500] : primaryColor;
  const brandAccent  = (cs && cs.accent && cs.accent[500])   ? cs.accent[500]  : accentColor;

  const presetKey = settings.stylePreset || 'signature';
  const preset = (typeof eliteStylePresets !== 'undefined' && eliteStylePresets[presetKey])
    ? eliteStylePresets[presetKey]
    : (typeof eliteStylePresets !== 'undefined' ? eliteStylePresets.signature : null);

  const density = settings.designDensity || 'balanced';
  const densityScale = density === 'airy' ? 1.10 : density === 'compact' ? 0.92 : 1.00;

  // Color helpers (for premium ambient gradients)
  const hexToRgb = (hex) => {
    if (!hex) return [0, 0, 0];
    const h = String(hex).replace('#', '').trim();
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(full, 16);
    if (Number.isNaN(n)) return [0, 0, 0];
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const rgbString = (hex) => hexToRgb(hex).join(' ');

  // Calculate color variations
  const primaryLight = adjustColorBrightness(primaryColor, 20);
  const primaryDark = adjustColorBrightness(primaryColor, -20);
  const accentLight = adjustColorBrightness(accentColor, 20);

  // Get font stack
  const fontStack = fontStacks[settings.fontStack] || fontStacks.system;
  const fontBody = fontStack.body || fontStack.value || fontStacks.system.value;
  const fontDisplay = fontStack.display || fontStack.value || fontBody;

  // Neutrals: choose preset or sane fallback for dark/light mismatch
  const isDark = !!settings.darkMode;
  const fallbackDark = {
    bg: '#0b0b0f',
    bgAlt: '#111118',
    text: '#f4f4f5',
    textLight: '#d4d4d8',
    textMuted: '#a1a1aa',
    border: '#27272a',
    borderLight: '#1f1f23'
  };
  const fallbackLight = {
    bg: '#faf9f7',
    bgAlt: '#f5f4f2',
    text: '#18181b',
    textLight: '#52525b',
    textMuted: '#a8a29e',
    border: '#e7e5e4',
    borderLight: '#f5f5f4'
  };

  const presetNeutrals = preset?.neutrals || fallbackLight;

  const shape = preset?.shape || { radiusSm: '4px', radiusMd: '10px', radiusLg: '14px', radiusXl: '18px' };

  const neutrals = (() => {
    if (sem) {
      return {
        bg: sem.bg,
        bgAlt: sem.bgAlt || sem.bg,
        text: sem.text,
        textLight: sem.textMuted || sem.text,
        textMuted: sem.textMuted || sem.text,
        border: sem.border || (isDark ? 'rgba(255, 255, 255, 0.1)' : '#e7e5e4'),
        borderLight: sem.borderLight || sem.border || (isDark ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f4')
      };
    }
    if (isDark) {
      // If a light preset is used with dark mode, switch to a high-end dark neutral scheme
      if (presetKey !== 'luxe' && presetKey !== 'glass') return fallbackDark;
      return presetNeutrals;
    }
    // If a dark preset is used with light mode, keep readability by switching to light neutrals
    if (presetKey === 'luxe' || presetKey === 'glass') return fallbackLight;
    return presetNeutrals;
  })();

  const ambientOpacity = (preset?.fx?.ambientOpacity ?? 0.85);
  const frame = preset?.frame || { edgeWidth: '0px', edgeA: 'transparent', edgeB: 'transparent' };

  return `/* ============================================
   DESIGN TOKENS
   Generated by Smooth Builder Pro v3.7 (Inspired Packs)
   ============================================ */

:root {
  /* Preset Meta */
  --preset: "${presetKey}";
  --density: "${density}";
  --sp-scale: ${densityScale};

  /* Brand Colors */
  --c-brand-primary: ${brandPrimary};
  --c-brand-accent: ${brandAccent};
  --c-primary: ${primaryColor};
  --c-primary-light: ${primaryLight};
  --c-primary-dark: ${primaryDark};
  --c-accent: ${accentColor};
  --c-accent-light: ${accentLight};

  /* RGB for modern alpha colors */
  --c-primary-rgb: ${rgbString(primaryColor)};
  --c-accent-rgb: ${rgbString(accentColor)};

  /* Neutral Colors (Elite) */
  --c-white: #ffffff;
  --c-white-rgb: 255 255 255;
  --c-black: #000000;
  --c-black-rgb: 0 0 0;
  --c-bg: ${neutrals.bg};
  --c-bg-alt: ${neutrals.bgAlt};
  --c-text: ${neutrals.text};
  --c-text-light: ${neutrals.textLight};
  --c-text-muted: ${neutrals.textMuted};
  --c-border: ${neutrals.border};
  --c-border-light: ${neutrals.borderLight};

  /* Surfaces */
  --c-surface: rgba(var(--c-white-rgb, 255 255 255) / 0.75);
  --c-surface-strong: rgba(var(--c-white-rgb, 255 255 255) / 0.92);

  /* Effects */
  --fx-ambient-opacity: ${ambientOpacity};

  /* Signature Frame (optional) */
  --edge-width: ${frame.edgeWidth || '0px'};
  --edge-color-a: ${frame.edgeA || 'transparent'};
  --edge-color-b: ${frame.edgeB || frame.edgeA || 'transparent'};

  /* Typography */
  --font-body: ${fontBody};
  --font-display: ${fontDisplay};

  /* Font Sizes */
  --text-xs: clamp(calc(0.75rem * var(--sp-scale)), 1vw, calc(0.8rem * var(--sp-scale)));
  --text-sm: clamp(calc(0.875rem * var(--sp-scale)), 1.2vw, calc(0.95rem * var(--sp-scale)));
  --text-base: clamp(calc(1rem * var(--sp-scale)), 1.4vw, calc(1.05rem * var(--sp-scale)));
  --text-lg: clamp(calc(1.125rem * var(--sp-scale)), 1.8vw, calc(1.25rem * var(--sp-scale)));
  --text-xl: clamp(calc(1.25rem * var(--sp-scale)), 2vw, calc(1.5rem * var(--sp-scale)));
  --text-2xl: clamp(calc(1.5rem * var(--sp-scale)), 3vw, calc(2rem * var(--sp-scale)));
  --text-3xl: clamp(calc(1.875rem * var(--sp-scale)), 4vw, calc(2.5rem * var(--sp-scale)));
  --text-4xl: clamp(calc(2rem * var(--sp-scale)), 5vw, calc(3rem * var(--sp-scale)));
  --text-5xl: clamp(calc(2.5rem * var(--sp-scale)), 6vw, calc(3.5rem * var(--sp-scale)));

  --leading-tight: 1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;
  --tracking-tight: -0.02em;

  /* Spacing (4px baseline) */
  --sp-1: calc(0.25rem * var(--sp-scale));
  --sp-2: calc(0.5rem * var(--sp-scale));
  --sp-3: calc(0.75rem * var(--sp-scale));
  --sp-4: calc(1rem * var(--sp-scale));
  --sp-5: calc(1.25rem * var(--sp-scale));
  --sp-6: calc(1.5rem * var(--sp-scale));
  --sp-8: calc(2rem * var(--sp-scale));
  --sp-10: calc(2.5rem * var(--sp-scale));
  --sp-12: calc(3rem * var(--sp-scale));
  --sp-16: calc(4rem * var(--sp-scale));
  --sp-20: calc(5rem * var(--sp-scale));
  --sp-24: calc(6rem * var(--sp-scale));
  --sp-32: calc(8rem * var(--sp-scale));

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 6px 18px rgba(0, 0, 0, 0.10);
  --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 30px 60px rgba(0, 0, 0, 0.14);

  /* Border Radius */
  --radius-sm: ${shape.radiusSm};
  --radius-md: ${shape.radiusMd};
  --radius-lg: ${shape.radiusLg};
  --radius-xl: ${shape.radiusXl};
  --radius-full: 9999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.15s;
  --duration-normal: 0.25s;
  --duration-slow: 0.4s;

  /* Container */
  --container-max: 1200px;
  --container-padding: var(--sp-6);
}

/* Dark Mode helpers: keep tokens stable, but adjust surfaces */
.dark {
  --c-surface: rgba(17, 17, 24, 0.45);
  --c-surface-strong: rgba(17, 17, 24, 0.70);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0.01ms;
    --duration-normal: 0.01ms;
    --duration-slow: 0.01ms;
  }
}`;
}
function adjustColorBrightness(hex, percent) {
  hex = hex.replace(/^#/, '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  r = Math.min(255, Math.max(0, Math.round(r + (r * percent / 100))));
  g = Math.min(255, Math.max(0, Math.round(g + (g * percent / 100))));
  b = Math.min(255, Math.max(0, Math.round(b + (b * percent / 100))));
  
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateTokensCSS, adjustColorBrightness };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - CSS GENERATOR
   ============================================
   Generiert Component Styles (components.css)
   ============================================ */

/**
 * Generate complete component CSS
 */
function generateComponentsCSS() {
  return `/* ============================================
   COMPONENT STYLES
   Generated by Smooth Builder Pro v3.7 (Inspired Packs)
   ============================================ */

/* Base Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--c-text);
  background: var(--c-bg);
  -webkit-font-smoothing: antialiased;
}

/* Signature Frame (optional: set --edge-width > 0) */
body::before,
body::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  width: var(--edge-width, 0px);
  background: linear-gradient(
    180deg,
    var(--edge-color-a, transparent) 0%,
    var(--edge-color-b, transparent) 50%,
    var(--edge-color-a, transparent) 100%
  );
  z-index: 999;
  pointer-events: none;
}
body::before { left: 0; }
body::after { right: 0; }



img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }

/* Skip Link */
.skip-link {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--sp-3) var(--sp-6);
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--radius-md);
  font-weight: 600;
  z-index: 9999;
}
.skip-link:focus { top: var(--sp-4); }

/* Container */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 calc(var(--container-padding) + var(--edge-width, 0px));
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--sp-12);
}
.section-header h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--sp-3);
}
.section-header p {
  color: var(--c-text-light);
  font-size: var(--text-lg);
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
  padding: var(--sp-4) var(--sp-6);
  font-size: var(--text-base);
  font-weight: 600;
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  transition: all 0.25s var(--ease-out);
  white-space: nowrap;
  position: relative;
}

.btn--primary {
  background: var(--c-primary);
  color: var(--c-white);
  border-color: var(--c-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.btn--primary:hover {
  background: var(--c-primary-light);
  border-color: var(--c-primary-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background: transparent;
  color: var(--c-text);
  border-color: var(--c-border);
}
.btn--secondary:hover { 
  border-color: var(--c-text);
  transform: translateY(-2px);
}

.btn--secondary-light {
  background: transparent;
  color: var(--c-white);
  border-color: rgba(255,255,255,0.3);
}
.btn--secondary-light:hover {
  border-color: var(--c-white);
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.btn--accent {
  background: var(--c-accent);
  color: var(--c-white);
  border-color: var(--c-accent);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.btn--accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--c-accent-rgb), 0.3);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: background 0.15s, border-color 0.15s;
  }
  .btn:hover {
    transform: none;
  }
}

/* ============================================
   HEADER
   ============================================ */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(var(--c-white-rgb, 255 255 255) / 0.92);
  border-bottom: 1px solid var(--c-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: var(--sp-3) 0;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  will-change: transform;
}

/* Mobile: Fixed 56px height */
@media (max-width: 768px) {
  .header {
    height: 56px;
    padding: 0;
  }
  .header__inner {
    height: 56px;
  }
}

/* Partially Persistent Header States */
.header--hidden {
  transform: translateY(-100%);
}
.header--visible {
  transform: translateY(0);
}
.header--scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.dark .header {
  background: rgba(var(--c-black-rgb, 0 0 0) / 0.85);
  border-bottom-color: rgba(255,255,255,0.1);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-6);
}

.header__brand {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}

.header__logo {
  width: 36px;
  height: 36px;
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-sm);
}

@media (min-width: 769px) {
  .header__logo {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-md);
  }
}
.header__logo img { width: 100%; height: 100%; object-fit: contain; }

.header__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--text-lg);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--sp-8);
}

.header__nav-link {
  font-size: var(--text-sm);
  color: var(--c-text-light);
  transition: color var(--duration-fast);
}
.header__nav-link:hover { color: var(--c-text); }

.header__cta {
  padding: var(--sp-3) var(--sp-5);
  font-size: var(--text-sm);
}

.header__dark-toggle {
  position: relative;
  width: 52px;
  height: 28px;
  padding: 0;
  background: #e2e8f0;
  border: 2px solid transparent;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  margin: -8px;
  padding: 8px;
  box-sizing: content-box;
}
.header__dark-toggle::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  width: 22px;
  height: 22px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
}
.header__dark-toggle::after {
  content: '';
  position: absolute;
  top: 14px;
  left: 14px;
  width: 14px;
  height: 14px;
  background: #f59e0b;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #fbbf24;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
}
.dark .header__dark-toggle { background: var(--c-primary); }
.dark .header__dark-toggle::before { transform: translateX(24px); }
.dark .header__dark-toggle::after { 
  transform: translateX(24px); 
  background: #fcd34d; 
  box-shadow: inset 4px -2px 0 0 #fbbf24;
  width: 12px;
  height: 12px;
  top: 15px;
  left: 15px;
}
.header__dark-toggle:focus-visible {
  border-color: var(--c-primary);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.3);
}

.header__toggle {
  display: none;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.header__toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--c-text);
  transition: all var(--duration-fast);
}
.header__toggle.open span:nth-child(1) { transform: rotate(45deg) translateY(5px); }
.header__toggle.open span:nth-child(2) { opacity: 0; }
.header__toggle.open span:nth-child(3) { transform: rotate(-45deg) translateY(-5px); }

.header__mobile-nav {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--c-bg);
  z-index: 99;
  padding: calc(var(--sp-20) + var(--sp-8)) var(--sp-6) var(--sp-6);
  flex-direction: column;
  gap: var(--sp-4);
}
.header__mobile-nav.open { display: flex; }
.header__mobile-link {
  display: block;
  padding: var(--sp-4);
  font-size: var(--text-xl);
  font-weight: 500;
  border-bottom: 1px solid var(--c-border);
}

@media (max-width: 768px) {
  .header__nav { display: none; }
  .header__toggle { display: flex; }
}

/* ============================================
   HERO
   ============================================ */

.hero {
  /* Account for fixed header: 56px mobile, ~64px desktop */
  padding: calc(56px + var(--sp-12)) 0 var(--sp-20);
  background: var(--c-bg-alt);
  position: relative;
  overflow: hidden;
}

/* Gradient Orbs / Ambient Light */
.hero::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -15%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(var(--c-accent-rgb), 0.12) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: float 20s ease-in-out infinite;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 5%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(var(--c-primary-rgb), 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: float 15s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero::before,
  .hero::after {
    animation: none;
  }
}

@media (min-width: 769px) {
  .hero {
    padding: calc(64px + var(--sp-16)) 0 var(--sp-24);
  }
  
  .hero::before {
    width: 600px;
    height: 600px;
  }
  
  .hero::after {
    width: 500px;
    height: 500px;
  }
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero__inner {
  display: flex;
  align-items: center;
  gap: var(--sp-12);
}

.hero__content { flex: 1; min-width: 280px; }

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: 700;
  line-height: var(--leading-tight);
  margin-bottom: var(--sp-6);
}

.hero__text {
  font-size: var(--text-lg);
  color: var(--c-text-light);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--sp-8);
  max-width: 540px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-4);
}

.hero__image {
  flex: 1;
  max-width: 500px;
  min-width: 280px;
}
.hero__image img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 900px) {
  .hero__inner { flex-direction: column; text-align: center; }
  .hero__text { margin-left: auto; margin-right: auto; }
  .hero__actions { justify-content: center; }
}

/* ============================================
   TRUST BAR
   ============================================ */

.trust {
  padding: var(--sp-10) 0;
  background: var(--c-primary);
  color: var(--c-white);
  position: relative;
  overflow: hidden;
}

/* Subtle gradient overlay */
.trust::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.trust__inner {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--sp-12);
}

.trust__item { 
  text-align: center;
  animation: fadeInUp 0.6s var(--ease-out) backwards;
}

.trust__item:nth-child(1) { animation-delay: 0.1s; }
.trust__item:nth-child(2) { animation-delay: 0.2s; }
.trust__item:nth-child(3) { animation-delay: 0.3s; }
.trust__item:nth-child(4) { animation-delay: 0.4s; }
.trust__item:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .trust__item {
    animation: none;
  }
}

.trust__value {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1;
  margin-bottom: var(--sp-2);
}
.trust__label { font-size: var(--text-sm); opacity: 0.9; }

/* ============================================
   SERVICES
   ============================================ */

.services { 
  padding: var(--sp-24) 0; 
}

.services .section-header {
  margin-bottom: var(--sp-16);
}

/* Intelligentes Grid basierend auf Item-Anzahl */
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--sp-8);
}

/* 2 Items: 2 Spalten zentriert */
.services__grid--two {
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-8) var(--sp-12);
  max-width: 800px;
  margin: 0 auto;
}

/* 3 Items: 3 Spalten */
.services__grid--three {
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-8);
  max-width: 1100px;
  margin: 0 auto;
}

/* 4 Items: 2x2 Grid mit viel Luft */
.services__grid--four {
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-8) var(--sp-12);
  max-width: 900px;
  margin: 0 auto;
}

/* 5+ Items: auto-fit */
.services__grid--many {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--sp-8);
}

@media (max-width: 768px) {
  .services__grid,
  .services__grid--two,
  .services__grid--three,
  .services__grid--four {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: var(--sp-6);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .services__grid--three {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  padding: var(--sp-8);
  background: var(--c-bg-alt);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), border-color 0.3s ease;
  position: relative;
}

/* Dezenter Lift + Accent Bar */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 0;
  background: var(--c-accent);
  border-radius: 0 0 3px 0;
  transition: height 0.3s var(--ease-out);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.service-card:hover::before {
  height: 100%;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card::before {
    transition: none;
  }
  .service-card:hover {
    transform: none;
  }
}

.service-card__icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: var(--sp-4);
  transition: transform 0.3s var(--ease-out);
}

.service-card:hover .service-card__icon {
  transform: scale(1.08) rotate(-3deg);
}

@media (min-width: 640px) {
  .service-card__icon {
    width: 52px;
    height: 52px;
    font-size: var(--text-2xl);
    margin-bottom: var(--sp-5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card__icon {
    transition: none;
  }
  .service-card:hover .service-card__icon {
    transform: none;
  }
}

.service-card h3 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--sp-3);
}

.service-card p {
  color: var(--c-text-light);
  line-height: var(--leading-relaxed);
}

/* ============================================
   BENEFITS
   ============================================ */

.benefits {
  padding: var(--sp-24) 0;
  background: var(--c-bg-alt);
}

/* Section Header mit mehr Abstand */
.benefits .section-header {
  margin-bottom: var(--sp-16);
}

/* 2-Spalten Grid mit viel Luft */
.benefits__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-8) var(--sp-16);
  max-width: 900px;
  margin: 0 auto;
}

/* Bei 3 Items: 3 Spalten */
.benefits__grid--three {
  grid-template-columns: repeat(3, 1fr);
  max-width: 1100px;
}

/* Mobile: immer 1 Spalte */
@media (max-width: 640px) {
  .benefits__grid,
  .benefits__grid--three {
    grid-template-columns: 1fr;
    gap: var(--sp-6);
  }
}

.benefit {
  display: flex;
  gap: var(--sp-4);
  align-items: flex-start;
  padding: var(--sp-4) 0;
}

.benefit__icon {
  width: 36px;
  height: 36px;
  min-width: 36px;
  background: rgba(var(--c-accent-rgb, 217 119 6) / 0.15);
  color: var(--c-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .benefit__icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
}

.benefit h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--sp-2);
}
.benefit p {
  color: var(--c-text-light);
  font-size: var(--text-sm);
}

/* ============================================
   TEAM
   ============================================ */

.team { padding: var(--sp-20) 0; }

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--sp-8);
}

.team-member { text-align: center; }

.team-member__image {
  width: 140px;
  height: 140px;
  background: var(--c-bg-alt);
  border-radius: var(--radius-full);
  margin: 0 auto var(--sp-5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text-muted);
}
.team-member__image img { width: 100%; height: 100%; object-fit: cover; }

.team-member h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--sp-1);
}
.team-member__role {
  color: var(--c-accent);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--sp-3);
}
.team-member__bio {
  color: var(--c-text-light);
  font-size: var(--text-sm);
}

/* ============================================
   GALLERY
   ============================================ */

.gallery { padding: var(--sp-20) 0; }

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--sp-4);
}

.gallery__item {
  aspect-ratio: 4/3;
  background: var(--c-bg-alt);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.gallery__item img { width: 100%; height: 100%; object-fit: cover; }
.gallery__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text-muted);
}

/* ============================================
   TESTIMONIALS
   ============================================ */

.testimonials {
  padding: var(--sp-20) 0;
  background: var(--c-bg-alt);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--sp-6);
}

.testimonial {
  padding: var(--sp-8);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
}

.testimonial__stars {
  color: var(--c-accent);
  margin-bottom: var(--sp-4);
}

.testimonial__quote {
  font-size: var(--text-lg);
  font-style: italic;
  line-height: var(--leading-relaxed);
  margin-bottom: var(--sp-6);
}

.testimonial__author {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}

.testimonial__avatar {
  width: 48px;
  height: 48px;
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--text-sm);
}

.testimonial__name { font-weight: 600; }
.testimonial__role { font-size: var(--text-sm); color: var(--c-text-muted); }

/* ============================================
   FAQ
   ============================================ */

.faq { padding: var(--sp-20) 0; }

.faq__list { max-width: 800px; margin: 0 auto; }

.faq-item { border-bottom: 1px solid var(--c-border); }

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-5) 0;
  font-size: var(--text-lg);
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after {
  content: '+';
  font-size: var(--text-2xl);
  font-weight: 300;
  color: var(--c-text-muted);
  transition: transform var(--duration-fast);
}
.faq-item[open] summary::after { transform: rotate(45deg); }

.faq-item__answer {
  padding: 0 0 var(--sp-5);
  color: var(--c-text-light);
  line-height: var(--leading-relaxed);
}

/* ============================================
   CTA
   ============================================ */

.cta {
  padding: var(--sp-20) 0;
  background: var(--c-primary);
  color: var(--c-white);
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Gradient Orbs for CTA */
.cta::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.cta::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -10%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(var(--c-accent-rgb), 0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.cta .container {
  position: relative;
  z-index: 1;
}

.cta h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--sp-3);
}

.cta p {
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--sp-8);
}

.cta__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--sp-4);
}

/* ============================================
   FOOTER
   ============================================ */

.footer {
  padding: var(--sp-16) 0 var(--sp-8);
  background: var(--c-bg-alt);
  border-top: 1px solid var(--c-border);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: var(--sp-12);
  margin-bottom: var(--sp-12);
}

.footer__brand { max-width: 280px; }

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  margin-bottom: var(--sp-4);
}
.footer__logo-icon {
  width: 40px;
  height: 40px;
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.footer__logo-text {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--text-lg);
}

.footer__tagline {
  color: var(--c-text-light);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--sp-5);
}

.footer__social {
  display: flex;
  gap: var(--sp-3);
}
.footer__social a {
  width: 40px;
  height: 40px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text-light);
  transition: all var(--duration-fast);
}
.footer__social a:hover {
  color: var(--c-primary);
  border-color: var(--c-primary);
}

.footer__column h4 {
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--sp-5);
  color: var(--c-text-muted);
}
.footer__column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.footer__column a {
  color: var(--c-text-light);
  font-size: var(--text-sm);
  transition: color var(--duration-fast);
}
.footer__column a:hover { color: var(--c-text); }

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--sp-8);
  border-top: 1px solid var(--c-border);
  font-size: var(--text-sm);
  color: var(--c-text-muted);
}

.footer__legal {
  display: flex;
  gap: var(--sp-6);
}
.footer__legal a:hover { color: var(--c-text); }

@media (max-width: 900px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; max-width: none; }
}
@media (max-width: 600px) {
  .footer__grid { grid-template-columns: 1fr; }
  .footer__bottom { flex-direction: column; gap: var(--sp-4); text-align: center; }
}

/* ============================================
   COOKIE BANNER
   ============================================ */

.cookie-banner {
  position: fixed;
  bottom: var(--sp-6);
  left: var(--sp-6);
  right: var(--sp-6);
  max-width: 540px;
  padding: var(--sp-6);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  z-index: 1000;
  overflow: hidden;
}
.cookie-banner.hidden { display: none; }

.cookie-banner h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--sp-2);
}
.cookie-banner p {
  font-size: var(--text-sm);
  color: var(--c-text-light);
  margin-bottom: var(--sp-5);
}
.cookie-banner p a {
  color: var(--c-primary);
  text-decoration: underline;
}

.cookie-banner__actions {
  display: flex;
  gap: var(--sp-3);
}
.cookie-banner__actions button {
  flex: 1;
  padding: var(--sp-3) var(--sp-4);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--duration-fast);
}
.cookie-banner__necessary {
  background: var(--c-bg-alt);
  border: 1px solid var(--c-border);
  color: var(--c-text);
}
.cookie-banner__necessary:hover { border-color: var(--c-text); }
.cookie-banner__all {
  background: var(--c-primary);
  border: 1px solid var(--c-primary);
  color: var(--c-white);
}
.cookie-banner__all:hover { background: var(--c-primary-light); }

/* ============================================
   COOKIE PREFERENCES (Swiss-grade)
   ============================================ */

.cookie-banner__actions{
  display:flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
}
.cookie-banner__actions button{
  flex: 1 1 auto;
  min-width: 120px;
  max-width: 100%;
  white-space: nowrap;
}

.cookie-banner__reject{
  background: transparent;
  border: 1px solid var(--c-border);
  color: var(--c-text);
}
.cookie-banner__reject:hover{ border-color: var(--c-text); }

.cookie-banner__settings{
  background: var(--c-bg-alt);
  border: 1px solid var(--c-border);
  color: var(--c-text);
}
.cookie-banner__settings:hover{ border-color: var(--c-text); }

/* Cookie Banner Mobile Fix */
@media (max-width: 600px) {
  .cookie-banner {
    left: var(--sp-3);
    right: var(--sp-3);
    bottom: var(--sp-3);
    padding: var(--sp-4);
    max-width: none;
  }
  .cookie-banner__actions {
    flex-direction: column;
  }
  .cookie-banner__actions button {
    width: 100%;
    min-width: unset;
  }
}

.cookie-modal{
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: var(--sp-6);
  background: rgba(0,0,0,.55);
  z-index: 1100;
}
.cookie-modal.is-open{ display:flex; }

.cookie-modal__panel{
  width: min(560px, 100%);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: var(--sp-7);
}

.cookie-modal__header{
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--sp-4);
  margin-bottom: var(--sp-5);
}
.cookie-modal__header h4{ margin:0; }
.cookie-modal__close{
  appearance:none;
  border:1px solid var(--c-border);
  background: transparent;
  color: var(--c-text);
  border-radius: var(--radius-md);
  width: 38px;
  height: 38px;
  cursor:pointer;
}
.cookie-modal__close:hover{ border-color: var(--c-text); }

.cookie-prefs{
  display:flex;
  flex-direction: column;
  gap: var(--sp-4);
  margin: var(--sp-5) 0;
}
.cookie-pref{
  display:flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  padding: var(--sp-4);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  background: var(--c-bg-alt);
}
.cookie-pref__meta{ min-width:0; }
.cookie-pref__meta strong{ display:block; }
.cookie-pref__meta span{ display:block; color: var(--c-text-muted); font-size: var(--text-sm); margin-top: 4px; }

.cookie-toggle{
  display:flex;
  align-items:center;
  gap: 10px;
  user-select:none;
}
.cookie-toggle input{ width: 18px; height: 18px; }

.cookie-modal__actions{
  display:flex;
  gap: var(--sp-3);
  margin-top: var(--sp-5);
}
.cookie-modal__actions .btn{ flex:1; }

.cookie-manage-link{
  text-decoration: underline;
  cursor:pointer;
}


/* ============================================
   LEGAL PAGES
   ============================================ */

.legal-page {
  padding: var(--sp-20) 0;
}
.legal-page h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--sp-8);
}
.legal-page h2 {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-top: var(--sp-8);
  margin-bottom: var(--sp-4);
}
.legal-page p {
  color: var(--c-text-light);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--sp-4);
}
.legal-page a {
  color: var(--c-primary);
}

/* ============================================
   ELITE POLISH (Premium Feel)
   ============================================ */

/* Ambient background glows (subtle, image-free) */
body {
  position: relative;
  isolation: isolate;
}
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: var(--fx-ambient-opacity, 0.85);
  background:
    radial-gradient(900px 500px at 10% 0%, rgb(var(--c-primary-rgb) / 0.18), transparent 60%),
    radial-gradient(800px 480px at 90% 10%, rgb(var(--c-accent-rgb) / 0.14), transparent 55%),
    radial-gradient(1100px 700px at 50% 120%, rgb(var(--c-primary-rgb) / 0.10), transparent 65%);
}

/* Crisp focus styles */
:focus-visible {
  outline: 3px solid rgb(var(--c-accent-rgb) / 0.35);
  outline-offset: 3px;
}

/* Buttons: micro-interaction + premium depth */
.btn {
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-fast), box-shadow var(--duration-fast), background var(--duration-fast), border-color var(--duration-fast);
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn:active {
  transform: translateY(0);
}

/* Cards: consistent surface treatment */
.service-card,
.team-member,
.gallery__item,
.testimonial,
.faq__item,
.cookie-banner {
  border: 1px solid var(--c-border-light);
  box-shadow: var(--shadow-sm);
}

/* Luxury mode: slightly sharper contrast */
[data-style="luxe"] .btn--secondary,
[data-style="glass"] .btn--secondary {
  border-color: var(--c-border);
}
[data-style="luxe"] .service-card,
[data-style="glass"] .service-card {
  border-color: var(--c-border);
}


/* ============================================
   STYLE PACK OVERRIDES (inspired by your sites)
   ============================================ */

/* Wood pattern (Carpenter / Holzbau) */
body[data-style="carpenter"] .hero,
body[data-style="holzbau"] .hero,
body[data-style="carpenter"] .benefits,
body[data-style="holzbau"] .benefits {
  background:
    linear-gradient(to bottom, rgba(250, 248, 245, 0.92), rgba(250, 248, 245, 0.92)),
    repeating-linear-gradient(
      90deg,
      rgba(101, 35, 0, 0.04) 0px,
      transparent 2px,
      transparent 12px,
      rgba(101, 35, 0, 0.03) 16px,
      transparent 18px,
      transparent 28px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(139, 115, 85, 0.02),
      rgba(122, 58, 26, 0.04) 150px
    );
}

/* Metal grid (City / Industry) */
body[data-style="city"] .services,
body[data-style="city"] .proof {
  background:
    linear-gradient(to bottom, rgba(248, 249, 250, 0.96), rgba(248, 249, 250, 0.96)),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 12px,
      rgba(100, 116, 139, 0.06) 12px,
      rgba(100, 116, 139, 0.06) 13px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 12px,
      rgba(100, 116, 139, 0.06) 12px,
      rgba(100, 116, 139, 0.06) 13px
    );
}

/* GVB editorial: subtle paper + red accents */
body[data-style="gvb"] .trust { background: var(--c-primary); }
body[data-style="gvb"] .benefit__icon { background: rgba(var(--c-accent-rgb, 212 165 116) / 0.22); }

/* Strain: minimal product feel (tighter radii + softer shadows) */
body[data-style="strain"] .service-card,
body[data-style="strain"] .testimonial {
  box-shadow: none;
}
body[data-style="strain"] .btn { border-radius: var(--radius-sm); }
body[data-style="strain"] .hero__image img { box-shadow: var(--shadow-md); border-radius: var(--radius-lg); }

/* Schwizer: dark neon accent handling */
body[data-style="schwizer"] .trust { background: var(--c-primary); }
body[data-style="schwizer"] .btn--primary { box-shadow: 0 10px 30px rgba(var(--c-primary-rgb, 79 208 226) / 0.25); }


/* ============================================
   PREMIUM FX SYSTEM v2.0 – AGENCY GRADE
   Swiss Precision: Gradient Orbs, Grain, Glass
   ============================================ */

/* Premium FX Tokens – Swiss Finance Grade */
:root {
  /* Orbs: weniger "Instagram", mehr "Schweizer Präzision" */
  --fx-orb-size: clamp(280px, 34vw, 520px);
  --fx-orb-blur: 120px;
  --fx-orb-opacity: 0.09;
  --fx-orb-ease: cubic-bezier(0.22, 1, 0.36, 1);
  
  /* Grain: feiner + weniger Opacity */
  --fx-grain-opacity: 0.022;
  --fx-grain-size: 240px;
  
  /* Glass: Finance-tauglich, sehr subtil */
  --fx-glass-blur: 14px;
  --fx-glass-bg: rgba(255, 255, 255, 0.78);
  --fx-glass-border: rgba(255, 255, 255, 0.22);
  
  /* Glow */
  --fx-glow-opacity: 0.10;
}

.dark {
  --fx-orb-opacity: 0.07;
  --fx-grain-opacity: 0.028;
  --fx-glow-opacity: 0.12;
  --fx-glass-bg: rgba(11, 15, 23, 0.72);
  --fx-glass-border: rgba(255, 255, 255, 0.08);
}

/* ============================================
   GRADIENT ORBS – Atmospheric Light Sources
   ============================================ */

html:has(.fx-orbs) {
  overflow-x: clip;
}

.fx-orbs {
  position: relative;
}

.fx-orbs::before,
.fx-orbs::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--fx-orb-blur));
  opacity: var(--fx-orb-opacity);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
}

/* Primary Orb - Top Right, mehr Offscreen = atmosphärischer */
.fx-orbs::before {
  width: var(--fx-orb-size);
  height: var(--fx-orb-size);
  top: -18vh;
  right: -16vw;
  background: radial-gradient(circle at center, var(--c-primary) 0%, transparent 70%);
  animation: fx-orb-float-1 34s var(--fx-orb-ease) infinite;
}

/* Accent Orb - Bottom Left, symmetrisches Gegengewicht */
.fx-orbs::after {
  width: calc(var(--fx-orb-size) * 0.85);
  height: calc(var(--fx-orb-size) * 0.85);
  bottom: -22vh;
  left: -14vw;
  background: radial-gradient(circle at center, var(--c-accent) 0%, transparent 70%);
  animation: fx-orb-float-2 44s var(--fx-orb-ease) infinite;
}

/* Third Orb: Hidden by default (Pink = Template-Look) */
.fx-orb-3 {
  display: none;
}

@keyframes fx-orb-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-4%, 6%) scale(1.03); }
  50% { transform: translate(3%, 3%) scale(0.97); }
  75% { transform: translate(-2%, -4%) scale(1.01); }
}

@keyframes fx-orb-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(6%, -5%) scale(1.04); }
  66% { transform: translate(-3%, 4%) scale(0.96); }
}

/* Orb Intensity Variants – Agency Grade */
.fx-orbs-subtle { --fx-orb-opacity: 0.06; --fx-orb-blur: 140px; }
.fx-orbs-medium { --fx-orb-opacity: 0.09; --fx-orb-blur: 120px; }
.fx-orbs-intense { --fx-orb-opacity: 0.14; --fx-orb-blur: 100px; }

/* ============================================
   GRAIN / NOISE – Premium Film Finish
   ============================================ */

.fx-grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: var(--fx-grain-opacity);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: var(--fx-grain-size) var(--fx-grain-size);
  mix-blend-mode: soft-light;
}

/* Grain Intensity Variants – Agency Grade */
.fx-grain-subtle .fx-grain-overlay { opacity: 0.018; }
.fx-grain-medium .fx-grain-overlay { opacity: 0.024; }
.fx-grain-strong .fx-grain-overlay { opacity: 0.035; }

/* ============================================
   GLASSMORPHISM – Swiss Clean
   ============================================ */

.fx-glass {
  background: var(--fx-glass-bg);
  backdrop-filter: blur(var(--fx-glass-blur));
  -webkit-backdrop-filter: blur(var(--fx-glass-blur));
  border: 1px solid var(--fx-glass-border);
  box-shadow: 
    0 1px 1px rgba(2, 6, 23, 0.04),
    0 10px 30px rgba(2, 6, 23, 0.06);
}

/* Glass Cards - Finance-tauglich, subtil */
.fx-glass-cards .service-card,
.fx-glass-cards .testimonial,
.fx-glass-cards .faq-item {
  background: var(--fx-glass-bg);
  backdrop-filter: blur(var(--fx-glass-blur));
  -webkit-backdrop-filter: blur(var(--fx-glass-blur));
  border: 1px solid var(--fx-glass-border);
  box-shadow: 
    0 1px 1px rgba(2, 6, 23, 0.04),
    0 10px 30px rgba(2, 6, 23, 0.06);
}

/* Glass Header */
.fx-glass-header .header {
  background: var(--fx-glass-bg);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--fx-glass-border);
}

/* ============================================
   AMBIENT GLOW - Section color glows
   ============================================ */

.fx-glow {
  position: relative;
}

.fx-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background: radial-gradient(
    ellipse at center top,
    rgba(var(--c-primary-rgb) / var(--fx-glow-opacity)) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}

.fx-glow > * {
  position: relative;
  z-index: 1;
}

/* Glow Variants */
.fx-glow-accent::before {
  background: radial-gradient(
    ellipse at center top,
    rgba(var(--c-accent-rgb) / var(--fx-glow-opacity)) 0%,
    transparent 70%
  );
}

.fx-glow-bottom::before {
  top: auto;
  bottom: 0;
  background: radial-gradient(
    ellipse at center bottom,
    rgba(var(--c-primary-rgb) / var(--fx-glow-opacity)) 0%,
    transparent 70%
  );
}

/* ============================================
   COMBINED PREMIUM PRESETS
   ============================================ */

/* Premium Mode: All effects combined tastefully */
body.fx-premium {
  --fx-orb-opacity: 0.12;
  --fx-grain-opacity: 0.03;
}

body.fx-premium .hero { overflow: hidden; }

body.fx-premium .hero::before,
body.fx-premium .hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--fx-orb-blur));
  opacity: var(--fx-orb-opacity);
  pointer-events: none;
  z-index: 0;
}

body.fx-premium .hero::before {
  width: var(--fx-orb-size);
  height: var(--fx-orb-size);
  top: -15%;
  right: -10%;
  background: radial-gradient(circle, var(--c-primary) 0%, transparent 70%);
  animation: fx-orb-float-1 25s ease-in-out infinite;
}

body.fx-premium .hero::after {
  width: calc(var(--fx-orb-size) * 0.7);
  height: calc(var(--fx-orb-size) * 0.7);
  bottom: 10%;
  left: -5%;
  background: radial-gradient(circle, var(--c-accent) 0%, transparent 70%);
  animation: fx-orb-float-2 30s ease-in-out infinite;
}

/* Premium Grain Overlay */
body.fx-premium::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: var(--fx-grain-opacity);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}

/* Premium Glass Cards */
body.fx-premium .service-card,
body.fx-premium .testimonial {
  background: var(--fx-glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--fx-glass-border);
}

/* ============================================
   REDUCED MOTION - Respect user preferences
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .fx-orbs::before,
  .fx-orbs::after,
  .fx-orb-3,
  body.fx-premium .hero::before,
  body.fx-premium .hero::after {
    animation: none;
  }
  
  .fx-grain-animated::before {
    animation: none;
  }
}

/* ============================================
   AGENCY POLISH – Swiss Finance Grade
   Typography, Spacing, Cards, Colors
   ============================================ */

/* Typography: Premium Rendering */
body {
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headlines: Tight Tracking + Weight Disziplin */
.hero h1,
.hero__title,
.section-header h2 {
  letter-spacing: -0.028em;
  font-weight: 650;
  line-height: 1.08;
}

/* Body Text: Ruhiger Grauton, mehr Luft */
.hero__text,
.hero p,
.service-card p,
.benefits p,
.legal-page p {
  line-height: 1.72;
  color: rgba(11, 18, 32, 0.78);
  letter-spacing: 0.002em;
}

/* Sekundärtext: Opacity-Hierarchie */
.section-header p,
.team-member p,
.testimonial__role {
  opacity: 0.82;
}

/* Spacing: Konsistente Rhythmik */
.services,
.benefits,
.team,
.testimonials,
.faq,
.cta {
  padding-top: clamp(72px, 9vh, 120px);
  padding-bottom: clamp(72px, 9vh, 120px);
}

.section-header {
  margin-bottom: clamp(28px, 4vh, 56px);
}

/* Cards: Premium Schatten-Physik */
.service-card,
.testimonial,
.cookie-banner {
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(255, 255, 255, 0.82);
  box-shadow:
    0 1px 1px rgba(2, 6, 23, 0.04),
    0 10px 30px rgba(2, 6, 23, 0.06);
  transition:
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover,
.testimonial:hover {
  transform: translateY(-3px);
  box-shadow:
    0 2px 2px rgba(2, 6, 23, 0.05),
    0 18px 46px rgba(2, 6, 23, 0.10);
  border-color: rgba(15, 118, 110, 0.18);
}

/* Buttons: Tight Feedback */
.btn {
  transition:
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    background 160ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.btn--primary:hover {
  transform: translateY(-1px);
  box-shadow:
    0 2px 10px rgba(2, 6, 23, 0.10),
    0 14px 34px rgba(15, 118, 110, 0.18);
}

/* Focus: Brand-konsistent */
:focus-visible {
  outline: 3px solid rgba(15, 118, 110, 0.28);
  outline-offset: 3px;
}

/* Nav Links: Editorial Underline */
.header__nav-link:hover,
.nav-link:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
}

/* Color System: Swiss Finance */
:root {
  --c-bg: #fbfbfc;
  --c-bg-alt: #f4f6f8;
  --c-text: #0b1220;
  --c-text-light: rgba(11, 18, 32, 0.78);
  --c-text-muted: rgba(11, 18, 32, 0.55);
  --c-border: rgba(2, 6, 23, 0.10);
  --c-border-light: rgba(2, 6, 23, 0.06);
}

/* Dark Mode: Saubere Kontraste */
.dark {
  --c-bg: #0b0f17;
  --c-bg-alt: #111827;
  --c-text: rgba(255, 255, 255, 0.92);
  --c-text-light: rgba(255, 255, 255, 0.78);
  --c-text-muted: rgba(255, 255, 255, 0.58);
  --c-border: rgba(255, 255, 255, 0.10);
  --c-border-light: rgba(255, 255, 255, 0.06);
}

.dark .service-card,
.dark .testimonial,
.dark .cookie-banner {
  background: rgba(17, 24, 39, 0.82);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .hero__text,
.dark .hero p,
.dark .service-card p {
  color: rgba(255, 255, 255, 0.78);
}


`;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateComponentsCSS };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - JS GENERATOR
   ============================================
   Generiert main.js für exportierte Websites
   ============================================ */

/**
 * Generate main.js content
 */
function generateMainJS(settings, components) {
  const hasCookie = components?.cookie?.enabled;
  const hasDarkToggle = settings.darkModeToggle;
  
  return `/* ============================================
   MAIN.JS
   Generated by Smooth Builder Pro v3.7 (Inspired Packs)
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // MOBILE MENU
  // ============================================
  
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.body;
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = menuToggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      
      // Prevent body scroll when menu is open
      body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close menu on link click
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('open');
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        body.style.overflow = '';
      });
    });
    
    // Close menu on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        menuToggle.click();
      }
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // PARTIALLY PERSISTENT HEADER (Best Practice 2025)
  // ============================================
  
  const header = document.querySelector('.header');
  
  if (header) {
    let lastScrollY = 0;
    let ticking = false;
    
    function updateHeader() {
      const currentScrollY = window.pageYOffset;
      
      // Add shadow when scrolled
      if (currentScrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      // At top - always show
      if (currentScrollY < 56) {
        header.classList.remove('header--hidden');
        header.classList.add('header--visible');
      }
      // Scrolling down - hide
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('header--hidden');
        header.classList.remove('header--visible');
      }
      // Scrolling up - show
      else if (currentScrollY < lastScrollY) {
        header.classList.remove('header--hidden');
        header.classList.add('header--visible');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    }
    
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }
    
    // Respect reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

${hasDarkToggle ? `
  // ============================================
  // DARK MODE TOGGLE
  // ============================================
  
  const darkToggle = document.getElementById('dark-toggle');
  const html = document.documentElement;
  
  // Check saved preference or system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }
  
  // Initialize
  applyTheme(getPreferredTheme());
  
  // Toggle handler
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      const current = html.classList.contains('dark') ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
` : ''}

${hasCookie ? `
  // ============================================
  // COOKIE BANNER
  // ============================================
  
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieNecessary = document.getElementById('cookie-necessary');
  
  // Check if consent was already given
  function hasConsent() {
    return localStorage.getItem('cookie-consent') !== null;
  }
  
  // Hide banner
  function hideBanner() {
    if (cookieBanner) {
      cookieBanner.classList.add('hidden');
    }
  }
  
  // Save consent
  function saveConsent(type) {
    localStorage.setItem('cookie-consent', type);
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    hideBanner();
  }
  
  // Initialize
  if (hasConsent()) {
    hideBanner();
  }
  
  // Event handlers
  if (cookieAccept) {
    cookieAccept.addEventListener('click', function() {
      saveConsent('all');
    });
  }
  
  if (cookieNecessary) {
    cookieNecessary.addEventListener('click', function() {
      saveConsent('necessary');
    });
  }
` : ''}

  // ============================================
  // INTERSECTION OBSERVER (Fade-in animations)
  // ============================================
  
  if ('IntersectionObserver' in window) {
    const fadeElements = document.querySelectorAll('.service-card, .testimonial, .team-member, .benefit');
    
    const fadeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      fadeObserver.observe(el);
    });
  }

  // ============================================
  // FOCUS VISIBLE POLYFILL (for older browsers)
  // ============================================
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

})();
`;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateMainJS };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - HTML GENERATOR
   ============================================
   Generiert HTML für index.html und Unterseiten
   ============================================ */

/**
 * Generate complete HTML document
 */
function generateFontLinksHTML(settings) {
  try {
    const stack = (typeof fontStacks !== 'undefined' && fontStacks[settings.fontStack]) ? fontStacks[settings.fontStack] : fontStacks.system;
    const href = stack?.googleFontsHref || '';
    if (!href) return '';
    return `  <!-- Fonts -->\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="${href}" rel="stylesheet">`;
  } catch (e) {
    return '';
  }
}


/**
 * v4.2 P0 (Issue 2): Generate parked tracking scripts (inert by default).
 * These scripts MUST NOT execute without consent. They are exported as:
 *   <script type="text/plain" data-consent="statistics" ...><\/script>
 *
 * Issue 3 will later "hydrate" these tags after opt-in.
 */
function generateTrackingScriptsHTML(settings) {
  const preset = settings?.trackingPreset || 'none';
  const tracking = settings?.tracking || {};

  // v4.2 P0 (Issue 2.1): Export Guard
  // Only export tracking when inputs are VALID. Otherwise behave like "No Tracking".
  const t = (v) => (typeof v === 'string' ? v.trim() : String(v || '').trim());

  const isValidGa4Id = (v) => /^G-[A-Z0-9]+$/i.test(t(v));
  const isValidHttpUrl = (v) => /^https?:\/\//i.test(t(v));
  const isValidNumeric = (v) => /^\d+$/.test(t(v));

  // No Tracking: export nothing
  if (preset === 'none') return '';

  if (preset === 'ga4') {
    const id = t(tracking.ga4MeasurementId);

    // Guard: invalid or missing ID => export nothing (safe-by-default)
    if (!id || !isValidGa4Id(id)) return '';

    const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;

    return `
  <!-- Tracking (GA4) — parked until statistics consent -->
  <script type="text/plain" data-consent="statistics" data-src="${esc(gtagSrc)}"><${'/'}script>
  <script type="text/plain" data-consent="statistics">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', ${JSON.stringify(id)}, { anonymize_ip: true });
  <${'/'}script>`;
  }

  if (preset === 'matomo') {
    const baseUrlRaw = t(tracking.matomoUrl);
    const siteIdRaw = t(tracking.matomoSiteId);

    // Guard: invalid or missing config => export nothing
    if (!baseUrlRaw || !siteIdRaw || !isValidHttpUrl(baseUrlRaw) || !isValidNumeric(siteIdRaw)) return '';

    const baseUrl = baseUrlRaw.replace(/\/+$/, '') + '/';
    const siteId = Number(siteIdRaw);
    const matomoJs = baseUrl + 'matomo.js';
    const matomoPhp = baseUrl + 'matomo.php';

    return `
  <!-- Tracking (Matomo Self-Host) — parked until statistics consent -->
  <script type="text/plain" data-consent="statistics">
    window._paq = window._paq || [];
    window._paq.push(['setTrackerUrl', ${JSON.stringify(matomoPhp)}]);
    window._paq.push(['setSiteId', ${siteId}]);
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
  <${'/'}script>
  <script type="text/plain" data-consent="statistics" data-src="${esc(matomoJs)}"><${'/'}script>`;
  }

  return '';
}



function generateHTML(components, order, settings) {
  const bodyContent = order
    .filter(id => components[id]?.enabled)
    .map(id => generateComponentHTML(components[id], settings))
    .join('\n\n');
  
  // Build Premium FX class list
  const fxClasses = [];
  const intensity = settings.fxIntensity || 'medium';
  if (settings.fxOrbs) fxClasses.push('fx-orbs', `fx-orbs-${intensity}`);
  if (settings.fxGrain) fxClasses.push('fx-grain', `fx-grain-${intensity}`);
  if (settings.fxGlass) fxClasses.push('fx-glass-cards');
  const fxClassStr = fxClasses.length ? ' ' + fxClasses.join(' ') : '';
  
  // Grain overlay element
  const grainOverlay = settings.fxGrain ? '\n  <!-- Grain Overlay -->\n  <div class="fx-grain-overlay" aria-hidden="true"></div>\n' : '';
  
  return `<!DOCTYPE html>
<html lang="de"${settings.darkMode ? ' class="dark"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${esc(settings.siteDescription)}">
  <title>${esc(settings.siteName)}</title>

  ${generateFontLinksHTML(settings)}
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${settings.faviconEmoji || '🏢'}</text></svg>">
  
  <!-- Styles -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body data-style="${esc(settings.stylePreset || 'signature')}" data-density="${esc(settings.designDensity || 'balanced')}"${fxClassStr ? ` class="${fxClassStr.trim()}"` : ''}>
  <!-- Skip Link -->
  <a href="#main" class="skip-link">Zum Inhalt springen</a>
${grainOverlay}
${bodyContent}
  
  <!-- Scripts -->
  ${generateTrackingScriptsHTML(settings)}
  <script src="js/main.js"><${'/'}script>
</body>
</html>`;
}

/**
 * Generate HTML for a single component
 */
function generateComponentHTML(component, settings) {
  const { type, data } = component;
  
  switch (type) {
    case 'header':
      return generateHeaderHTML(data, settings);
    case 'hero':
      return generateHeroHTML(data, settings);
    case 'trust':
      return generateTrustHTML(data, settings);
    case 'authority':
      return generateAuthorityHTML(data, settings);
    case 'services':
      return generateServicesHTML(data, settings);
    case 'proofTable':
      return generateProofTableHTML(data, settings);
    case 'process':
      return generateProcessHTML(data, settings);
    case 'benefits':
      return generateBenefitsHTML(data, settings);
    case 'team':
      return generateTeamHTML(data, settings);
    case 'gallery':
      return generateGalleryHTML(data, settings);
    case 'testimonials':
      return generateTestimonialsHTML(data, settings);
    case 'faq':
      return generateFaqHTML(data, settings);
    case 'cta':
      return generateCtaHTML(data, settings);
    case 'stickyCta':
      return generateStickyCtaHTML(data, settings);
    case 'footer':
      return generateFooterHTML(data, settings);
    case 'cookie':
      return generateCookieHTML(data, settings);
    default:
      return `<!-- Unknown component: ${type} -->`;
  }
}

// ============================================
// COMPONENT HTML GENERATORS
// ============================================

function generateHeaderHTML(data, settings) {
  const navItems = (data.navItems || [])
    .map(item => `        <a href="#${item.toLowerCase().replace(/\s/g, '-')}" class="header__nav-link">${esc(item)}</a>`)
    .join('\n');
  
  return `  <!-- Header -->
  <header class="header" id="header">
    <div class="container">
      <div class="header__inner">
        <a href="/" class="header__brand">
          ${data.logoUrl 
            ? `<img src="${esc(data.logoUrl)}" alt="${esc(data.companyName)}" class="header__logo">`
            : `<div class="header__logo">${esc(data.logoText)}</div>`
          }
          <span class="header__name">${esc(data.companyName)}</span>
        </a>
        
        <nav class="header__nav" id="main-nav">
${navItems}
          ${settings.darkModeToggle ? '<button class="header__dark-toggle" id="dark-toggle" aria-label="Dark Mode umschalten"></button>' : ''}
          <a href="#kontakt" class="header__cta btn btn--primary">${esc(data.ctaText)}</a>
        </nav>
        
        <button class="header__toggle" id="menu-toggle" aria-label="Menü öffnen" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav class="header__mobile-nav" id="mobile-nav" aria-hidden="true">
${navItems.replace(/header__nav-link/g, 'header__mobile-link')}
      <a href="#kontakt" class="btn btn--primary">${esc(data.ctaText)}</a>
    </nav>
  </header>`;
}

function generateHeroHTML(data, settings) {
  return `  <!-- Hero -->
  <section class="hero" id="main">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">${esc(data.title)}</h1>
          <p class="hero__text">${esc(data.subtitle)}</p>
          <div class="hero__actions">
            <a href="#kontakt" class="btn btn--primary">${esc(data.primaryBtn)}</a>
            <a href="#leistungen" class="btn btn--secondary">${esc(data.secondaryBtn)}</a>
          </div>
        </div>
        ${data.imageUrl ? `
        <div class="hero__image">
          <img src="${esc(data.imageUrl)}" alt="Hero" loading="lazy">
        </div>` : ''}
      </div>
    </div>
  </section>`;
}

function generateTrustHTML(data, settings) {
  const items = (data.items || [])
    .map(item => `        <div class="trust__item">
          <div class="trust__value">${esc(item.value)}</div>
          <div class="trust__label">${esc(item.label)}</div>
        </div>`)
    .join('\n');
  
  return `  <!-- Trust Bar -->
  <section class="trust">
    <div class="container">
      <div class="trust__inner">
${items}
      </div>
    </div>
  </section>`;
}


function generateAuthorityHTML(data, settings) {
  const variant = data.variant || 'chips';
  const items = (data.items || []).map(it => {
    const icon = it.icon ? `<span class="authority__icon">${esc(it.icon)}</span>` : `<span class="authority__icon">✅</span>`;
    return variant === 'list'
      ? `<li class="authority__item">${icon}<span>${esc(it.text || '')}</span></li>`
      : `<div class="authority__chip">${icon}<span>${esc(it.text || '')}</span></div>`;
  }).join('\n');

  return `  <!-- Authority Strip -->
  <section class="authority">
    <div class="container">
      ${data.title ? `<h2 class="authority__title">${esc(data.title)}</h2>` : ''}
      ${variant === 'list'
        ? `<ul class="authority__list">${items}</ul>`
        : `<div class="authority__chips">${items}</div>`
      }
    </div>
  </section>`;
}

function generateProcessHTML(data, settings) {
  const steps = (data.steps || []).map((s, i) => `
      <div class="process__card">
        <div class="process__num">${esc(s.num || String(i+1).padStart(2,'0'))}</div>
        <div class="process__title">${esc(s.title || '')}</div>
        <div class="process__text">${esc(s.text || '')}</div>
      </div>
  `).join('\n');

  return `  <!-- Process -->
  <section class="process" id="ablauf">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title || '')}</h2>
        <p>${esc(data.subtitle || '')}</p>
      </div>
      <div class="process__grid">
${steps}
      </div>
    </div>
  </section>`;
}

function generateProofTableHTML(data, settings) {
  const headers = (data.headers || ['Kriterium','Wir','Andere']).slice(0,3);
  const hc = Number.isInteger(data.highlightColumn) ? data.highlightColumn : 1;

  const head = headers.map((h, i) => `<th class="${i===hc ? 'is-highlight':''}">${esc(h)}</th>`).join('');
  const rows = (data.rows || []).map(r => `
        <tr>
          <td>${esc(r.criterion || '')}</td>
          <td class="${hc===1 ? 'is-highlight':''}">${esc(r.us || '')}</td>
          <td class="${hc===2 ? 'is-highlight':''}">${esc(r.other || '')}</td>
        </tr>
  `).join('\n');

  return `  <!-- Proof Table -->
  <section class="proof" id="vergleich">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title || '')}</h2>
        <p>${esc(data.subtitle || '')}</p>
      </div>

      <div class="proof__table-wrap">
        <table class="proof__table">
          <thead><tr>${head}</tr></thead>
          <tbody>
${rows}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

function generateStickyCtaHTML(data, settings) {
  const note = data.note ? `<div class="sticky-cta__note">${esc(data.note)}</div>` : '';
  const phone = data.phone ? `<a class="btn btn--ghost" href="tel:${esc(data.phone)}">${esc(data.phone)}</a>` : '';
  return `  <!-- Sticky CTA -->
  <div class="sticky-cta" role="region" aria-label="Call to action">
    <div class="container sticky-cta__inner">
      <div class="sticky-cta__text">
        <div class="sticky-cta__headline">${esc(data.text || '')}</div>
        ${note}
      </div>
      <div class="sticky-cta__actions">
        <a class="btn btn--primary" href="#kontakt">${esc(data.buttonText || 'Termin vereinbaren')}</a>
        ${phone}
      </div>
    </div>
  </div>`;
}

function generateServicesHTML(data, settings) {
  const items = (data.items || [])
    .map(item => `        <div class="service-card">
          <div class="service-card__icon">${item.icon || '📋'}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </div>`)
    .join('\n');
  
  return `  <!-- Services -->
  <section class="services" id="leistungen">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
        <p>${esc(data.subtitle)}</p>
      </div>
      <div class="services__grid">
${items}
      </div>
    </div>
  </section>`;
}

function generateBenefitsHTML(data, settings) {
  const itemsArray = data.items || [];
  const itemCount = itemsArray.length;
  
  // Grid-Klasse basierend auf Item-Anzahl
  const gridClass = itemCount === 3 ? 'benefits__grid benefits__grid--three' : 'benefits__grid';
  
  const items = itemsArray
    .map(item => `        <div class="benefit">
          <div class="benefit__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <h4>${esc(item.title)}</h4>
            <p>${esc(item.text)}</p>
          </div>
        </div>`)
    .join('\n');
  
  return `  <!-- Benefits -->
  <section class="benefits" id="vorteile">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
        ${data.subtitle ? `<p>${esc(data.subtitle)}</p>` : ''}
      </div>
      <div class="${gridClass}">
${items}
      </div>
    </div>
  </section>`;
}

function generateTeamHTML(data, settings) {
  const members = (data.members || [])
    .map(m => `        <div class="team-member">
          <div class="team-member__image">
            ${m.image ? `<img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy">` : `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`}
          </div>
          <h4>${esc(m.name)}</h4>
          <p class="team-member__role">${esc(m.role)}</p>
          ${m.bio ? `<p class="team-member__bio">${esc(m.bio)}</p>` : ''}
        </div>`)
    .join('\n');
  
  return `  <!-- Team -->
  <section class="team" id="team">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
        <p>${esc(data.subtitle)}</p>
      </div>
      <div class="team__grid">
${members}
      </div>
    </div>
  </section>`;
}

function generateGalleryHTML(data, settings) {
  const images = (data.images || [])
    .map(img => `        <div class="gallery__item">
          ${img.url ? `<img src="${esc(img.url)}" alt="${esc(img.caption)}" loading="lazy">` : '<div class="gallery__placeholder"></div>'}
        </div>`)
    .join('\n');
  
  return `  <!-- Gallery -->
  <section class="gallery">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
        <p>${esc(data.subtitle)}</p>
      </div>
      <div class="gallery__grid">
${images}
      </div>
    </div>
  </section>`;
}

function generateTestimonialsHTML(data, settings) {
  const items = (data.items || [])
    .map(item => {
      const initials = item.author.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      return `        <div class="testimonial">
          <div class="testimonial__stars">★★★★★</div>
          <p class="testimonial__quote">"${esc(item.quote)}"</p>
          <div class="testimonial__author">
            <div class="testimonial__avatar">${initials}</div>
            <div>
              <div class="testimonial__name">${esc(item.author)}</div>
              <div class="testimonial__role">${esc(item.role)}</div>
            </div>
          </div>
        </div>`;
    })
    .join('\n');
  
  return `  <!-- Testimonials -->
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
      </div>
      <div class="testimonials__grid">
${items}
      </div>
    </div>
  </section>`;
}

function generateFaqHTML(data, settings) {
  const items = (data.items || [])
    .map(item => `        <details class="faq-item">
          <summary>${esc(item.question)}</summary>
          <div class="faq-item__answer">${esc(item.answer)}</div>
        </details>`)
    .join('\n');
  
  return `  <!-- FAQ -->
  <section class="faq" id="faq">
    <div class="container">
      <div class="section-header">
        <h2>${esc(data.title)}</h2>
        <p>${esc(data.subtitle)}</p>
      </div>
      <div class="faq__list">
${items}
      </div>
    </div>
  </section>`;
}

function generateCtaHTML(data, settings) {
  return `  <!-- CTA -->
  <section class="cta" id="kontakt">
    <div class="container">
      <h2>${esc(data.title)}</h2>
      <p>${esc(data.subtitle)}</p>
      <div class="cta__actions">
        <a href="tel:${data.phone?.replace(/\s/g, '')}" class="btn btn--accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          ${esc(data.phone)}
        </a>
        <a href="mailto:${data.email}" class="btn btn--secondary-light">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          ${esc(data.email)}
        </a>
      </div>
    </div>
  </section>`;
}

function generateFooterHTML(data, settings) {
  const year = new Date().getFullYear();
  const initials = (data.companyName || 'FN').split(' ')[0].substring(0, 2).toUpperCase();
  
  return `  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">
            <div class="footer__logo-icon">${initials}</div>
            <span class="footer__logo-text">${esc(data.companyName?.split(' ')[0])}</span>
          </div>
          <p class="footer__tagline">${esc(data.tagline)}</p>
          <div class="footer__social">
            ${data.linkedin ? `<a href="${esc(data.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>` : ''}
            ${data.facebook ? `<a href="${esc(data.facebook)}" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>` : ''}
            ${data.instagram ? `<a href="${esc(data.instagram)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>` : ''}
          </div>
        </div>
        
        <div class="footer__column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Startseite</a></li>
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h4>Rechtliches</h4>
          <ul>
            <li><a href="impressum.html">Impressum</a></li>
            <li><a href="datenschutz.html">Datenschutz</a></li>
          </ul>
        </div>
        
        <div class="footer__column">
          <h4>Kontakt</h4>
          <ul>
            <li>${esc(data.address)}</li>
            <li><a href="tel:${data.phone?.replace(/\s/g, '')}">${esc(data.phone)}</a></li>
            <li><a href="mailto:${data.email}">${esc(data.email)}</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer__bottom">
        <span>© ${year} ${esc(data.companyName)}. Alle Rechte vorbehalten.</span>
        <div class="footer__legal">
          <a href="impressum.html">Impressum</a>
          <a href="datenschutz.html">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function generateCookieHTML(data, settings) {
  // Swiss-grade: category-based consent + preference center + script blocking
  return `  <!-- Cookie Banner -->
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie Hinweis">
    <h4>${esc(data.title || 'Cookie-Einstellungen')}</h4>
    <p>${esc(data.text || '')} <a href="${esc(data.policyLink || '/datenschutz.html')}" rel="noopener noreferrer">Mehr erfahren</a></p>
    <div class="cookie-banner__actions">
      <button class="cookie-banner__necessary" id="cookie-necessary" type="button">${esc(data.acceptNecessary || 'Nur notwendige')}</button>
      <button class="cookie-banner__reject" id="cookie-reject" type="button">${esc(data.acceptReject || 'Ablehnen')}</button>
      ${data.showSettingsButton !== false ? `<button class="cookie-banner__settings" id="cookie-settings" type="button">${esc(data.openSettings || 'Einstellungen')}</button>` : ``}
      <button class="cookie-banner__all" id="cookie-accept" type="button">${esc(data.acceptAll || 'Alle akzeptieren')}</button>
    </div>
  </div>

  <!-- Cookie Preference Center -->
  <div class="cookie-modal" id="cookie-modal" aria-hidden="true">
    <div class="cookie-modal__panel" role="dialog" aria-modal="true" aria-label="Cookie Einstellungen">
      <div class="cookie-modal__header">
        <div>
          <h4>${esc(data.preferencesTitle || 'Cookie-Einstellungen')}</h4>
          <p style="margin:8px 0 0;color:var(--c-text-muted);">${esc(data.preferencesText || 'Wählen Sie aus, welche Cookies wir verwenden dürfen. Notwendige Cookies sind immer aktiv.')}</p>
        </div>
        <button class="cookie-modal__close" id="cookie-modal-close" type="button" aria-label="Schliessen">×</button>
      </div>

      <div class="cookie-prefs">
        <div class="cookie-pref">
          <div class="cookie-pref__meta">
            <strong>${esc(data.necessaryLabel || 'Notwendig')}</strong>
            <span>Grundfunktionen, Sicherheit, Spracheinstellungen.</span>
          </div>
          <label class="cookie-toggle">
            <input type="checkbox" checked disabled aria-label="Notwendige Cookies aktiv">
          </label>
        </div>

        <div class="cookie-pref">
          <div class="cookie-pref__meta">
            <strong>${esc(data.statisticsLabel || 'Statistik')}</strong>
            <span>Anonyme Reichweitenmessung zur Verbesserung der Website.</span>
          </div>
          <label class="cookie-toggle">
            <input id="cookie-statistics" type="checkbox" aria-label="Statistik Cookies">
          </label>
        </div>

        <div class="cookie-pref">
          <div class="cookie-pref__meta">
            <strong>${esc(data.marketingLabel || 'Marketing')}</strong>
            <span>Personalisierung und Marketing-Tracking (optional).</span>
          </div>
          <label class="cookie-toggle">
            <input id="cookie-marketing" type="checkbox" aria-label="Marketing Cookies">
          </label>
        </div>
      </div>

      <div class="cookie-modal__actions">
        <button class="btn btn--secondary" id="cookie-save" type="button">${esc(data.savePreferences || 'Speichern')}</button>
        <button class="btn btn--primary" id="cookie-accept-all" type="button">${esc(data.acceptAll || 'Alle akzeptieren')}</button>
      </div>

      <p style="margin-top:14px;color:var(--c-text-muted);font-size:var(--text-sm);">
        <a class="cookie-manage-link" href="${esc(data.policyLink || '/datenschutz.html')}" rel="noopener noreferrer">Datenschutz</a>
        · <a class="cookie-manage-link" href="#" data-open-cookie-settings="1">${esc(data.manageLinkText || 'Cookie-Einstellungen')}</a>
      </p>
    </div>
  </div>

  <script>
  (function(){
    if (window.__sbCookieInit) return;
    window.__sbCookieInit = true;

    var KEY = 'cookie-consent-v2';
    var LEGACY = 'cookie-consent'; // older string key
    var banner = document.getElementById('cookie-banner');
    var modal = document.getElementById('cookie-modal');

    function parseConsent(raw){
      try { return JSON.parse(raw || ''); } catch(e){ return null; }
    }

    function getConsent(){
      var v2 = parseConsent(localStorage.getItem(KEY));
      if (v2 && typeof v2 === 'object') return v2;

      // Legacy compatibility: 'all' | 'necessary'
      var legacy = localStorage.getItem(LEGACY);
      if (legacy === 'all') return { necessary:true, statistics:true, marketing:true };
      if (legacy === 'necessary') return { necessary:true, statistics:false, marketing:false };

      // Default (privacy-by-default)
      return { 
        necessary: true, 
        statistics: ${data.defaultStatistics ? 'true' : 'false'}, 
        marketing: ${data.defaultMarketing ? 'true' : 'false'}
      };
    }

    function setConsent(consent){
      localStorage.setItem(KEY, JSON.stringify(consent));
      localStorage.setItem('cookie-consent-date', new Date().toISOString());
    }

    function hasStoredConsent(){
      return !!localStorage.getItem(KEY) || !!localStorage.getItem(LEGACY);
    }

    function showBanner(){ if (banner) banner.classList.remove('hidden'); }
    function hideBanner(){ if (banner) banner.classList.add('hidden'); }

    function openModal(){
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      // sync checkboxes
      var c = getConsent();
      var stats = document.getElementById('cookie-statistics');
      var mkt = document.getElementById('cookie-marketing');
      if (stats) stats.checked = !!c.statistics;
      if (mkt) mkt.checked = !!c.marketing;
    }

    function closeModal(){
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }

    function allowCategory(cat){
      var c = getConsent();
      if (cat === 'necessary') return true;
      return !!c[cat];
    }

    function hydrateScripts(){
      // Load blocked scripts
      var scripts = document.querySelectorAll('script[type="text/plain"][data-consent]');
      scripts.forEach(function(s){
        var cat = (s.getAttribute('data-consent') || '').toLowerCase();
        if (!cat) return;
        if (!allowCategory(cat)) return;

        var n = document.createElement('script');
        // copy src or inline
        var src = s.getAttribute('data-src') || s.getAttribute('src');
        if (src) n.src = src;
        if (s.hasAttribute('async')) n.async = true;
        if (s.hasAttribute('defer')) n.defer = true;
        // inline code
        if (!src) n.text = s.text || s.textContent || '';
        // replace
        s.parentNode.insertBefore(n, s);
        s.parentNode.removeChild(s);
      });

      // Unhide consent-gated elements (optional)
      document.querySelectorAll('[data-requires-consent]').forEach(function(el){
        var cat = (el.getAttribute('data-requires-consent') || '').toLowerCase();
        if (allowCategory(cat)) el.classList.remove('is-consent-hidden');
      });
    }

    function applyConsent(){
      hydrateScripts();
      // broadcast
      try{
        window.dispatchEvent(new CustomEvent('sb:consent', { detail: getConsent() }));
      }catch(e){}
    }

    // Attach handlers
    var btnAll = document.getElementById('cookie-accept');
    var btnNec = document.getElementById('cookie-necessary');
    var btnRej = document.getElementById('cookie-reject');
    var btnSet = document.getElementById('cookie-settings');
    var btnSave = document.getElementById('cookie-save');
    var btnAcceptAll = document.getElementById('cookie-accept-all');
    var btnClose = document.getElementById('cookie-modal-close');

    if (btnAll) btnAll.addEventListener('click', function(){
      setConsent({ necessary:true, statistics:true, marketing:true });
      hideBanner();
      closeModal();
      applyConsent();
    });

    if (btnAcceptAll) btnAcceptAll.addEventListener('click', function(){
      setConsent({ necessary:true, statistics:true, marketing:true });
      hideBanner();
      closeModal();
      applyConsent();
    });

    if (btnNec) btnNec.addEventListener('click', function(){
      setConsent({ necessary:true, statistics:false, marketing:false });
      hideBanner();
      closeModal();
      applyConsent();
    });

    if (btnRej) btnRej.addEventListener('click', function(){
      setConsent({ necessary:true, statistics:false, marketing:false });
      hideBanner();
      closeModal();
      applyConsent();
    });

    if (btnSet) btnSet.addEventListener('click', function(){ openModal(); });
    if (btnClose) btnClose.addEventListener('click', function(){ closeModal(); });

    if (btnSave) btnSave.addEventListener('click', function(){
      var stats = document.getElementById('cookie-statistics');
      var mkt = document.getElementById('cookie-marketing');
      setConsent({ 
        necessary:true, 
        statistics: !!(stats && stats.checked), 
        marketing: !!(mkt && mkt.checked)
      });
      hideBanner();
      closeModal();
      applyConsent();
    });

    document.addEventListener('click', function(e){
      var t = e.target;
      if (t && t.closest && t.closest('[data-open-cookie-settings]')){
        e.preventDefault();
        openModal();
      }
    });

    if (modal) {
      modal.addEventListener('click', function(e){
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') closeModal();
      });
    }

    // Initial
    if (!hasStoredConsent()) {
      showBanner();
    } else {
      hideBanner();
      applyConsent();
    }
  })();
  <\/script>`;
}

// ============================================
// LEGAL PAGES GENERATORS
// ============================================

function generateImpressumHTML(settings) {
  const legal = settings.companyLegal || {};
  return `<!DOCTYPE html>
<html lang="de"${settings.darkMode ? ' class="dark"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Impressum – ${esc(settings.siteName)}</title>
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <main class="legal-page">
    <div class="container">
      <h1>Impressum</h1>
      
      <h2>Angaben gemäss Schweizer Recht</h2>
      <p>
        <strong>${esc(legal.name)}</strong><br>
        ${esc(legal.address)}<br>
        ${legal.uid ? `UID: ${esc(legal.uid)}<br>` : ''}
      </p>
      
      <h2>Kontakt</h2>
      <p>
        Telefon: ${esc(legal.phone)}<br>
        E-Mail: ${esc(legal.email)}
      </p>
      
      <h2>Vertretungsberechtigte Person</h2>
      <p>${esc(legal.owner)}</p>
      
      <h2>Haftungsausschluss</h2>
      <p>Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
      
      <p><a href="index.html">← Zurück zur Startseite</a></p>
    </div>
  </main>
  <script src="js/main.js"><${'/'}script>
</body>
</html>`;
}

function generateDatenschutzHTML(settings) {
  const legal = settings.companyLegal || {};
  return `<!DOCTYPE html>
<html lang="de"${settings.darkMode ? ' class="dark"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datenschutz – ${esc(settings.siteName)}</title>
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <main class="legal-page">
    <div class="container">
      <h1>Datenschutzerklärung</h1>
      
      <h2>Verantwortliche Stelle</h2>
      <p>
        ${esc(legal.name)}<br>
        ${esc(legal.address)}<br>
        E-Mail: ${esc(legal.email)}
      </p>
      
      <h2>Erhebung und Verarbeitung von Daten</h2>
      <p>Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem und ähnliche Informationen.</p>
      
      <h2>Cookies</h2>
      <p>Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies können verwendet werden, um die Funktionalität der Website zu gewährleisten.</p>
      
      <h2>Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns hierfür unter der oben genannten E-Mail-Adresse.</p>
      
      <p><a href="index.html">← Zurück zur Startseite</a></p>
    </div>
  </main>
  <script src="js/main.js"><${'/'}script>
</body>
</html>`;
}

// ============================================
// HELPER: Escape HTML
// ============================================

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateHTML,
    generateComponentHTML,
    generateImpressumHTML,
    generateDatenschutzHTML
  };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - ZIP EXPORTER
   ============================================
   Erstellt ZIP-Archiv für Production Export
   ============================================ */

/**
 * Export production build as ZIP
 */


/**
 * Generate Offerte Generator (Standalone HTML) with current tokens + prefills
 */
function generateOfferteGeneratorHTML(settings) {
  const base = b64ToUtf8(__OFFERTEN_GEN_B64__);
  const tokens = generateTokensCSS(settings);
  const prefill = {
    legal: settings.companyLegal || {},
    siteName: settings.siteName || '',
    dark: !!settings.darkMode
  };
  const prefillJson = JSON.stringify(prefill).replace(/</g, '\\u003c');
  return base
    .replace('/*__SB_TOKENS__*/', tokens)
    .split('__SB_PREFILL_JSON__').join(prefillJson);
}

// ============================================
// PRODUCTION EXPORT (ZIP) – with assets + backup
// ============================================

/**
 * Extract data-URL images into /assets and rewrite component URLs.
 * Keeps export self-contained without bloating HTML.
 */
function extractDataUrlAssets(components, settings) {
  const files = [];
  const seen = new Map();

  const t = (v) => (typeof v === 'string' ? v.trim() : '');

  const simpleHash = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return Math.abs(h).toString(36);
  };

  const dataUrlToBytes = (dataUrl) => {
    const idx = dataUrl.indexOf(',');
    if (idx === -1) return null;
    const meta = dataUrl.slice(0, idx);
    const payload = dataUrl.slice(idx + 1);

    const mime = (meta.match(/^data:([^;]+)/) || [])[1] || 'application/octet-stream';
    const isBase64 = /;base64/i.test(meta);

    try {
      let bin;
      if (isBase64) {
        bin = atob(payload);
      } else {
        bin = decodeURIComponent(payload);
      }
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return { mime, bytes };
    } catch (e) {
      return null;
    }
  };

  const extFromMime = (mime) => {
    const m = String(mime || '').toLowerCase();
    if (m.includes('png')) return 'png';
    if (m.includes('jpeg') || m.includes('jpg')) return 'jpg';
    if (m.includes('webp')) return 'webp';
    if (m.includes('svg')) return 'svg';
    return 'bin';
  };

  const normalize = (dataUrl) => {
    const raw = t(dataUrl);
    if (!raw.startsWith('data:image/')) return raw;
    if (seen.has(raw)) return seen.get(raw);

    const parsed = dataUrlToBytes(raw);
    if (!parsed) return raw;

    const ext = extFromMime(parsed.mime);
    const name = `asset-${simpleHash(raw)}.${ext}`;
    const path = `assets/${name}`;
    seen.set(raw, path);
    files.push({ name, bytes: parsed.bytes });
    return path;
  };

  // Known image locations
  try {
    if (components?.header?.data?.logoUrl) {
      components.header.data.logoUrl = normalize(components.header.data.logoUrl);
    }
    if (components?.hero?.data?.imageUrl) {
      components.hero.data.imageUrl = normalize(components.hero.data.imageUrl);
    }
    if (components?.team?.data?.members?.length) {
      components.team.data.members = components.team.data.members.map(m => ({
        ...m,
        image: m.image ? normalize(m.image) : m.image
      }));
    }
    if (components?.gallery?.data?.images?.length) {
      components.gallery.data.images = components.gallery.data.images.map(img => ({
        ...img,
        url: img.url ? normalize(img.url) : img.url
      }));
    }
  } catch (e) {
    // fail-safe: if anything goes wrong, return without assets rewriting
    return { files: [] };
  }

  return { files };
}

async function exportProductionZip(components, order, settings) {
  // Ensure JSZip is available
  if (typeof JSZip === 'undefined') {
    throw new Error('JSZip is not loaded');
  }

  const zip = new JSZip();
  const folderName = sanitizeFilename(settings.siteName || 'website');
  const folder = zip.folder(folderName);

  // Clone to avoid mutating live builder state
  const safeSettings = JSON.parse(JSON.stringify(settings || {}));
  const safeOrder = Array.isArray(order) ? [...order] : [];
  const safeComponents = JSON.parse(JSON.stringify(components || {}));

  // Assets extraction (data-URLs -> /assets)
  const assets = extractDataUrlAssets(safeComponents, safeSettings);
  if (assets?.files?.length) {
    const assetsFolder = folder.folder('assets');
    assets.files.forEach(f => assetsFolder.file(f.name, f.bytes, { binary: true }));
  }

  // Generate all files
  const tokensCSS = generateTokensCSS(safeSettings);
  const componentsCSS = generateComponentsCSS();
  const mainJS = generateMainJS(safeSettings, safeComponents);
  const indexHTML = generateHTML(safeComponents, safeOrder, safeSettings);

  // Add CSS folder
  const cssFolder = folder.folder('css');
  cssFolder.file('tokens.css', tokensCSS);
  cssFolder.file('components.css', componentsCSS);

  // Add JS folder
  const jsFolder = folder.folder('js');
  jsFolder.file('main.js', mainJS);

  // Add HTML files
  folder.file('index.html', indexHTML);

  // Add Impressum if enabled
  if (safeSettings.generateImpressum) {
    const impressumHTML = generateImpressumHTML(safeSettings);
    folder.file('impressum.html', impressumHTML);
  }

  // Add Datenschutz if enabled
  if (safeSettings.generateDatenschutz) {
    const datenschutzHTML = generateDatenschutzHTML(safeSettings);
    folder.file('datenschutz.html', datenschutzHTML);
  }

  // Add Offerte Generator (Standalone Tool)
  const offerteHTML = generateOfferteGeneratorHTML(safeSettings);
  folder.file('offerte-generator.html', offerteHTML);

  // Add project backup (import-friendly)
  folder.file('backup.json', JSON.stringify({
    generator: 'Smooth Builder Pro',
    version: 'v3.7 + Treuhand Studio',
    exportedAt: new Date().toISOString(),
    settings: safeSettings,
    order: safeOrder,
    components: safeComponents
  }, null, 2));

  // Add README
  const readme = generateReadme(safeSettings, assets?.files?.length || 0);
  folder.file('README.txt', readme);

  // Generate ZIP blob
  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });

  // Trigger download
  const filename = `${folderName}-website.zip`;
  saveAs(blob, filename);

  return { success: true, filename };
}

/**
 * Generate README file
 */
function generateReadme(settings, assetsCount = 0) {
  const date = new Date().toLocaleDateString('de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const assetsLine = assetsCount ? `/assets/             - Exportierte Bilder (${assetsCount} Datei(en))\n` : '';

  return `================================================
${settings.siteName || 'Website'}
================================================

Erstellt am: ${date}
Generator: Smooth Builder Pro v3.7 + Treuhand Studio

DATEISTRUKTUR
-------------
/index.html          - Startseite
/impressum.html      - Impressum (falls aktiviert)
/datenschutz.html    - Datenschutz (falls aktiviert)
/offerte-generator.html - Offerte Tool (standalone)
/backup.json         - Projekt-Backup (Import/Restore)
${assetsLine}/css/tokens.css      - Design Tokens (Farben, Abstände, etc.)
/css/components.css  - Komponenten-Styles
/js/main.js          - JavaScript (Menü, Scroll, Consent)

DEPLOYMENT
----------
1. Alle Dateien auf Ihren Webserver hochladen
2. Fertig! Keine Konfiguration nötig.

ANPASSUNGEN
-----------
- Farben & Tokens: /css/tokens.css (CSS-Variablen am Anfang)
- Texte: Direkt in den HTML-Dateien
- Styles: /css/components.css
- Rechtstexte: impressum.html / datenschutz.html (falls aktiviert)

HINWEIS ZU TRACKING & CONSENT
-----------------------------
Tracking-Skripte werden (falls konfiguriert) standardmässig "geparkt" exportiert
und dürfen erst nach Einwilligung laden. Prüfen Sie das Consent-Setup vor Livegang.

SUPPORT
-------
Diese Website wurde mit Smooth Builder Pro erstellt.
Bei Fragen wenden Sie sich an Ihren Webdesigner.

================================================
`;
}

/**
 * Sanitize filename
 */
function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[äàâ]/g, 'a')
    .replace(/[öòô]/g, 'o')
    .replace(/[üùû]/g, 'u')
    .replace(/[éèê]/g, 'e')
    .replace(/[ß]/g, 'ss')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 50) || 'website';
}

/**
 * Export single preview HTML
 */
function exportPreviewHTML(components, order, settings) {
  const html = generatePreviewHTML(components, order, settings);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const filename = `${sanitizeFilename(settings.siteName)}-preview.html`;
  saveAs(blob, filename);
  return { success: true, filename };
}

/**
 * Export JSON backup
 */
function exportJsonBackup(components, order, settings) {
  const data = {
    version: '3.0',
    exportDate: new Date().toISOString(),
    settings,
    components,
    order
  };
  
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const filename = `${sanitizeFilename(settings.siteName)}-backup.json`;
  saveAs(blob, filename);
  return { success: true, filename };
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    exportProductionZip,
    exportPreviewHTML,
    exportJsonBackup,
    sanitizeFilename
  };
}

// Expose functions globally for Babel blocks
window.generateHTML = generateHTML;
window.generateTokensCSS = generateTokensCSS;
window.generateComponentsCSS = generateComponentsCSS;
window.generateMainJS = generateMainJS;
window.generateBodyContent = generateBodyContent;
window.generateComponentHTML = generateComponentHTML;
window.generatePreviewHTML = generatePreviewHTML;
window.exportProductionZip = exportProductionZip;
window.esc = esc;
window.escapeHtml = escapeHtml;
window.Icons = Icons;
window.defaultComponents = defaultComponents;
window.defaultSettings = defaultSettings;
window.Templates = Templates;
window.eliteStylePresets = eliteStylePresets;
window.fontStacks = fontStacks;
window.sanitizeFilename = sanitizeFilename;
window.exportPreviewHTML = exportPreviewHTML;
window.exportJsonBackup = exportJsonBackup;
window.generateFontLinksHTML = generateFontLinksHTML;
window.generateImpressumHTML = generateImpressumHTML;
window.generateDatenschutzHTML = generateDatenschutzHTML;
window.generateReadme = generateReadme;
window.adjustColorBrightness = adjustColorBrightness;

// ============================================
// SECTION 2: SAFETY LAYER
// ============================================

/**
 * SAFETY LAYER v1.0 für Smooth Builder Pro
 * =========================================
 * Erkennt und warnt bei Script-Fehlern BEVOR sie untergehen
 */

// =============================================
// 1. GLOBAL ERROR HANDLER (Runtime-Fehler)
// =============================================

window.SafetyLayer = {
  errors: [],
  warnings: [],
  initialized: false,
  
  init() {
    if (this.initialized) return;
    this.initialized = true;
    
    // Unbehandelte Exceptions
    window.onerror = (msg, url, line, col, error) => {
      this.logError({
        type: 'runtime',
        message: msg,
        location: `${url}:${line}:${col}`,
        stack: error?.stack
      });
      return false;
    };
    
    // Unbehandelte Promise Rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        type: 'promise',
        message: event.reason?.message || String(event.reason),
        stack: event.reason?.stack
      });
    });
    
    // Console.error überwachen
    const originalError = console.error;
    console.error = (...args) => {
      this.logError({
        type: 'console',
        message: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
      });
      originalError.apply(console, args);
    };
    
    console.log('[SafetyLayer] ✅ Initialized');
  },
  
  logError(err) {
    this.errors.push({ ...err, timestamp: Date.now() });
    this.updateOverlay();
    
    // Toast falls verfügbar
    if (typeof Toast !== 'undefined' && Toast.error) {
      Toast.error(`⚠️ ${err.type}: ${err.message.substring(0, 80)}...`);
    }
  },
  
  logWarning(warn) {
    this.warnings.push({ ...warn, timestamp: Date.now() });
  },
  
  getReport() {
    return {
      errors: this.errors,
      warnings: this.warnings,
      summary: `${this.errors.length} Fehler, ${this.warnings.length} Warnungen`
    };
  },
  
  clear() {
    this.errors = [];
    this.warnings = [];
    this.updateOverlay();
  },
  
  // Dev Overlay
  updateOverlay() {
    let overlay = document.getElementById('safety-layer-overlay');
    
    if (this.errors.length === 0) {
      if (overlay) overlay.style.display = 'none';
      return;
    }
    
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'safety-layer-overlay';
      overlay.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        max-width: 420px;
        max-height: 320px;
        overflow: auto;
        background: linear-gradient(135deg, rgba(220, 38, 38, 0.97), rgba(180, 30, 30, 0.97));
        color: white;
        padding: 16px;
        border-radius: 12px;
        font-family: ui-monospace, monospace;
        font-size: 12px;
        z-index: 999999;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        backdrop-filter: blur(8px);
      `;
      document.body.appendChild(overlay);
    }
    
    overlay.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.2);">
        <strong style="font-size:14px;">⚠️ ${this.errors.length} Fehler erkannt</strong>
        <div>
          <button onclick="SafetyLayer.clear()" style="background:rgba(255,255,255,0.2);border:none;color:white;cursor:pointer;padding:4px 8px;border-radius:4px;margin-right:4px;font-size:11px;">Clear</button>
          <button onclick="this.parentElement.parentElement.parentElement.style.display='none'" style="background:none;border:none;color:white;cursor:pointer;font-size:18px;line-height:1;">×</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${this.errors.slice(-5).map(e => `
          <div style="background:rgba(0,0,0,0.25);padding:10px;border-radius:6px;border-left:3px solid #fca5a5;">
            <div style="font-weight:600;color:#fecaca;margin-bottom:4px;">[${e.type}]</div>
            <div style="opacity:0.95;word-break:break-word;">${this.escapeHtml(e.message?.substring(0, 200) || 'Unknown error')}</div>
            ${e.location ? `<div style="opacity:0.6;font-size:10px;margin-top:4px;">${this.escapeHtml(e.location)}</div>` : ''}
          </div>
        `).join('')}
        ${this.errors.length > 5 ? `<div style="text-align:center;opacity:0.7;font-size:11px;">...und ${this.errors.length - 5} weitere</div>` : ''}
      </div>
    `;
    overlay.style.display = 'block';
  },
  
  escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};

// =============================================
// 2. EXPORT VALIDATOR
// =============================================

window.ExportValidator = {
  
  validate(html, settings) {
    const issues = [];
    
    issues.push(...this.checkScriptSyntax(html));
    issues.push(...this.checkTrackingConfig(settings));
    issues.push(...this.checkHTMLStructure(html));
    issues.push(...this.checkConsentIntegrity(html));
    
    return {
      valid: issues.filter(i => i.severity === 'error').length === 0,
      issues,
      errors: issues.filter(i => i.severity === 'error'),
      warnings: issues.filter(i => i.severity === 'warning')
    };
  },
  
  checkScriptSyntax(html) {
    const issues = [];
    
    const openTags = (html.match(/<script[^>]*>/gi) || []).length;
    const closeTags = (html.match(/<\/script>/gi) || []).length;
    
    if (openTags !== closeTags) {
      issues.push({
        severity: 'error',
        code: 'SCRIPT_MISMATCH',
        message: `Script-Tags nicht balanciert: ${openTags} öffnend, ${closeTags} schließend`
      });
    }
    
    return issues;
  },
  
  checkTrackingConfig(settings) {
    const issues = [];
    const preset = settings?.trackingPreset;
    const tracking = settings?.tracking || {};
    
    if (preset === 'ga4') {
      const id = (tracking.ga4MeasurementId || '').trim();
      
      if (!id) {
        issues.push({
          severity: 'warning',
          code: 'GA4_EMPTY',
          message: 'GA4 ausgewählt aber keine Measurement ID angegeben → kein Tracking im Export'
        });
      } else if (!/^G-[A-Z0-9]+$/i.test(id)) {
        issues.push({
          severity: 'error',
          code: 'GA4_INVALID',
          message: `Ungültige GA4 ID: "${id}" (Format: G-XXXXXX)`
        });
      }
    }
    
    if (preset === 'matomo') {
      const url = (tracking.matomoUrl || '').trim();
      const siteId = (tracking.matomoSiteId || '').trim();
      
      if (!url) {
        issues.push({
          severity: 'warning',
          code: 'MATOMO_URL_EMPTY',
          message: 'Matomo URL fehlt → kein Tracking im Export'
        });
      } else if (!/^https?:\/\//i.test(url)) {
        issues.push({
          severity: 'error',
          code: 'MATOMO_URL_INVALID',
          message: `URL muss mit http:// oder https:// beginnen: "${url}"`
        });
      }
      
      if (!siteId) {
        issues.push({
          severity: 'warning',
          code: 'MATOMO_ID_EMPTY',
          message: 'Matomo Site ID fehlt → kein Tracking im Export'
        });
      } else if (!/^\d+$/.test(siteId)) {
        issues.push({
          severity: 'error',
          code: 'MATOMO_ID_INVALID',
          message: `Site ID muss Zahl sein: "${siteId}"`
        });
      }
    }
    
    return issues;
  },
  
  checkHTMLStructure(html) {
    const issues = [];
    
    if (!html.includes('<!DOCTYPE html>')) {
      issues.push({ severity: 'warning', code: 'NO_DOCTYPE', message: 'DOCTYPE fehlt' });
    }
    
    if (!html.includes('viewport')) {
      issues.push({ severity: 'warning', code: 'NO_VIEWPORT', message: 'Viewport Meta-Tag fehlt' });
    }
    
    return issues;
  },
  
  checkConsentIntegrity(html) {
    const issues = [];
    
    const hasParkedScripts = html.includes('data-consent="statistics"');
    const hasConsentBanner = html.includes('cookie-banner') || html.includes('CookieBanner');
    
    if (hasParkedScripts && !hasConsentBanner) {
      issues.push({
        severity: 'warning',
        code: 'PARKED_NO_BANNER',
        message: 'Tracking-Scripts ohne Cookie-Banner (werden nie aktiviert)'
      });
    }
    
    return issues;
  }
};

// =============================================
// 3. SAFE EXPORT WRAPPER
// =============================================

window.createSafeExporter = function(exportFn, name) {
  return async function(components, order, settings) {
    console.log(`[SafeExport:${name}] Starting validation...`);
    
    // Pre-Export Validierung
    let html = '';
    try {
      html = typeof generateHTML === 'function' 
        ? generateHTML(components, order, settings)
        : (typeof generatePreviewHTML === 'function' ? generatePreviewHTML(components, order, settings) : '');
    } catch (e) {
      console.error('[SafeExport] HTML generation failed:', e);
    }
    
    const validation = ExportValidator.validate(html, settings);
    
    // Errors anzeigen
    if (!validation.valid) {
      const errorMsg = validation.errors.map(e => `• ${e.message}`).join('\n');
      
      if (typeof Toast !== 'undefined') {
        Toast.error(`Export: ${validation.errors.length} Fehler gefunden`);
      }
      
      console.error('[SafeExport] Validation errors:', validation.errors);
      
      const proceed = confirm(
        `⚠️ Export hat ${validation.errors.length} Fehler:\n\n${errorMsg}\n\nTrotzdem exportieren?`
      );
      
      if (!proceed) {
        console.log('[SafeExport] Aborted by user');
        return;
      }
    }
    
    // Warnings loggen
    if (validation.warnings.length > 0) {
      console.warn('[SafeExport] Warnings:', validation.warnings);
      if (typeof Toast !== 'undefined') {
        Toast.warning(`${validation.warnings.length} Hinweise`);
      }
    }
    
    // Export durchführen
    try {
      const result = await exportFn(components, order, settings);
      console.log(`[SafeExport:${name}] ✅ Success`);
      return result;
    } catch (err) {
      console.error(`[SafeExport:${name}] ❌ Failed:`, err);
      SafetyLayer.logError({ type: 'export', message: err.message, stack: err.stack });
      throw err;
    }
  };
};

// Auto-Init
SafetyLayer.init();

// ============================================
// SECTION 3: REACT COMPONENTS
// ============================================

/* ============================================
   SMOOTH BUILDER PRO v3.7 - STATE MANAGEMENT
   ============================================
   History, Undo/Redo, LocalStorage persistence
   ============================================ */

// ============================================
// HISTORY MANAGER
// ============================================

class HistoryManager {
  constructor(maxSize = 50) {
    this.history = [];
    this.currentIndex = -1;
    this.maxSize = maxSize;
  }
  
  /**
   * Push a new state to history
   */
  push(state) {
    // Remove any future states if we're not at the end
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }
    
    // Add new state
    this.history.push(this.deepClone(state));
    this.currentIndex++;
    
    // Limit history size
    if (this.history.length > this.maxSize) {
      this.history.shift();
      this.currentIndex--;
    }
  }
  
  /**
   * Undo - go back one state
   */
  undo() {
    if (this.canUndo()) {
      this.currentIndex--;
      return this.deepClone(this.history[this.currentIndex]);
    }
    return null;
  }
  
  /**
   * Redo - go forward one state
   */
  redo() {
    if (this.canRedo()) {
      this.currentIndex++;
      return this.deepClone(this.history[this.currentIndex]);
    }
    return null;
  }
  
  /**
   * Check if undo is possible
   */
  canUndo() {
    return this.currentIndex > 0;
  }
  
  /**
   * Check if redo is possible
   */
  canRedo() {
    return this.currentIndex < this.history.length - 1;
  }
  
  /**
   * Get current state
   */
  getCurrent() {
    if (this.currentIndex >= 0 && this.currentIndex < this.history.length) {
      return this.deepClone(this.history[this.currentIndex]);
    }
    return null;
  }
  
  /**
   * Clear all history
   */
  clear() {
    this.history = [];
    this.currentIndex = -1;
  }
  
  /**
   * Deep clone an object
   */
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================

const StorageManager = {
  KEY_PREFIX: 'smooth_builder_',
  
  /**
   * Save state to localStorage
   */
  save(key, data) {
    try {
      const fullKey = this.KEY_PREFIX + key;
      const serialized = JSON.stringify(data);
      localStorage.setItem(fullKey, serialized);
      return true;
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
      return false;
    }
  },
  
  /**
   * Load state from localStorage
   */
  load(key) {
    try {
      const fullKey = this.KEY_PREFIX + key;
      const serialized = localStorage.getItem(fullKey);
      if (serialized) {
        return JSON.parse(serialized);
      }
      return null;
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
      return null;
    }
  },
  
  /**
   * Remove item from localStorage
   */
  remove(key) {
    try {
      const fullKey = this.KEY_PREFIX + key;
      localStorage.removeItem(fullKey);
      return true;
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
      return false;
    }
  },
  
  /**
   * Clear all builder data from localStorage
   */
  clearAll() {
    try {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.KEY_PREFIX)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },
  
  /**
   * Check if localStorage is available
   */
  isAvailable() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
};

// ============================================
// STATE UTILITIES
// ============================================

const StateUtils = {
  /**
   * Generate unique ID
   */
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },
  
  /**
   * Deep merge objects
   */
  deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (source[key] instanceof Object && !Array.isArray(source[key])) {
          result[key] = this.deepMerge(result[key] || {}, source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
    
    return result;
  },
  
  /**
   * Compare two states for equality
   */
  isEqual(state1, state2) {
    return JSON.stringify(state1) === JSON.stringify(state2);
  },
  
  /**
   * Debounce function calls
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * Throttle function calls
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// ============================================
// TOAST NOTIFICATIONS
// ============================================

const Toast = {
  container: null,
  
  /**
   * Initialize toast container
   */
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  
  /**
   * Show a toast notification
   */
  show(message, type = 'info', duration = 3000) {
    this.init();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    this.container.appendChild(toast);
    
    // Auto-remove after duration
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
    
    return toast;
  },
  
  /**
   * Show success toast
   */
  success(message) {
    return this.show(message, 'success');
  },
  
  /**
   * Show error toast
   */
  error(message) {
    return this.show(message, 'error');
  },
  
  /**
   * Show info toast
   */
  info(message) {
    return this.show(message, 'info');
  }
};

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

const KeyboardShortcuts = {
  handlers: new Map(),
  initialized: false,
  
  /**
   * Initialize keyboard listener
   */
  init() {
    if (this.initialized) return;
    
    document.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      const key = this.getKeyString(e);
      const handler = this.handlers.get(key);
      
      if (handler) {
        e.preventDefault();
        handler(e);
      }
    });
    
    this.initialized = true;
  },
  
  /**
   * Register a keyboard shortcut
   */
  register(keys, handler) {
    this.init();
    this.handlers.set(keys, handler);
  },
  
  /**
   * Unregister a keyboard shortcut
   */
  unregister(keys) {
    this.handlers.delete(keys);
  },
  
  /**
   * Get key string from event
   */
  getKeyString(e) {
    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('ctrl');
    if (e.shiftKey) parts.push('shift');
    if (e.altKey) parts.push('alt');
    parts.push(e.key.toLowerCase());
    return parts.join('+');
  }
};

// ============================================
// DRAG & DROP UTILITIES
// ============================================

const DragDropUtils = {
  /**
   * Reorder array by moving item from one index to another
   */
  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  },
  
  /**
   * Get drag index from element
   */
  getDragIndex(element, y) {
    const items = Array.from(element.parentNode.children);
    const index = items.indexOf(element);
    return index;
  }
};

// ============================================
// VALIDATION HELPERS
// ============================================

const Validation = {
  /**
   * Validate email format
   */
  isEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  },
  
  /**
   * Validate phone format (Swiss)
   */
  isSwissPhone(value) {
    const pattern = /^(\+41|0)[0-9\s]{9,}$/;
    return pattern.test(value.replace(/\s/g, ''));
  },
  
  /**
   * Validate URL format
   */
  isUrl(value) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },
  
  /**
   * Validate hex color
   */
  isHexColor(value) {
    const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return pattern.test(value);
  },
  
  /**
   * Sanitize HTML (basic)
   */
  sanitizeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
  }
};

// ============================================
// EXPORTS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HistoryManager,
    StorageManager,
    StateUtils,
    Toast,
    KeyboardShortcuts,
    DragDropUtils,
    Validation
  };
}
  </script>

  <!-- React Components -->
  <script type="text/babel">
/* ============================================
   SMOOTH BUILDER PRO v3.7 - PREVIEW COMPONENTS
   ============================================
   React-Komponenten für die Live-Vorschau
   Nutzen CSS-Klassen aus preview.css
   ============================================ */

const { useState, useRef, useEffect, useCallback, useMemo } = React;

// ============================================
// COLOR STACK GENERATOR (embedded as Modal)
// ============================================
const __COLOR_GEN_B64__ = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImRlIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIj4KICA8dGl0bGU+Q29sb3IgU3RhY2sgR2VuZXJhdG9yIHYyIOKAkyBXQ0FHLUtvbmZvcm08L3RpdGxlPgogIDxzdHlsZT4KLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgQ09MT1IgU1RBQ0sgR0VORVJBVE9SIHYyIC0gV0NBRyBDT01QTElBTlQKICAgQWxsZSBLb250cmFzdHByb2JsZW1lIGF1cyBkZW0gUmVwb3J0IGJlaG9iZW4KICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCjpyb290IHsKICAvKiBGaXhlZCBDb250cmFzdCBDb2xvcnMgLSBhbGxlID49IDQuNToxICovCiAgLS1iZzogIzA5MDkwYjsKICAtLWJnLWNhcmQ6ICMxODE4MWI7CiAgLS1iZy1pbnB1dDogIzI3MjcyYTsKICAtLWJvcmRlcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTsKICAtLWJvcmRlci1ob3ZlcjogcmdiYSgyNTUsMjU1LDI1NSwwLjI0KTsKICAtLXRleHQ6ICNmYWZhZmE7CiAgLS10ZXh0LW11dGVkOiAjYTFhMWFhOyAvKiA0LjY6MSBhdWYgLS1iZyAqLwogIC0tdGV4dC1mYWludDogIzcxNzE3YTsgLyogTnVyIGbDvHIgZ3Jvw59lIFNjaHJpZnQgb2RlciBkZWtvcmF0aXZlIEVsZW1lbnRlICovCiAgLS1wcmltYXJ5OiAjODE4Y2Y4OyAvKiBIZWxsZXIgYWxzICM2MzY2ZjEgZsO8ciBiZXNzZXJlbiBLb250cmFzdCAqLwogIC0tcHJpbWFyeS1ob3ZlcjogI2E1YjRmYzsKICAtLXByaW1hcnktZGFyazogIzYzNjZmMTsKICAtLWFjY2VudDogIzM0ZDM5OTsKICAtLWFjY2VudC1kYXJrOiAjMTBiOTgxOwogIC0tZXJyb3I6ICNmODcxNzE7CiAgLS13YXJuaW5nOiAjZmJiZjI0OwogIC0tcmFkaXVzOiAxMnB4OwogIC0tc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwwLDAsMC40KTsKfQoKKiB7CiAgbWFyZ2luOiAwOwogIHBhZGRpbmc6IDA7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQoKYm9keSB7CiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjsKICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7CiAgY29sb3I6IHZhcigtLXRleHQpOwogIG1pbi1oZWlnaHQ6IDEwMHZoOwogIGxpbmUtaGVpZ2h0OiAxLjY7CiAgZm9udC1zaXplOiAxNnB4OyAvKiBCYXNlIDE2cHggZm9yIGlPUyAqLwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBIRUFERVIKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCi5oZWFkZXIgewogIHBhZGRpbmc6IDEuNXJlbSAycmVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsKICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEyOSwxNDAsMjQ4LDAuMDgpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTsKfQoKLmhlYWRlciBoMSB7CiAgZm9udC1zaXplOiAxLjc1cmVtOwogIGZvbnQtd2VpZ2h0OiA3MDA7CiAgbWFyZ2luLWJvdHRvbTogMC41cmVtOwogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4MThjZjgsICNjMDg0ZmMsICNmNDcyYjYpOwogIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OwogIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsKICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7Cn0KCi5oZWFkZXIgcCB7CiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOwogIGZvbnQtc2l6ZTogMXJlbTsKfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgTEFZT1VUCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCgouYXBwIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyOwogIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7Cn0KCkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHsKICAuYXBwIHsKICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOwogIH0KfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgU0lERUJBUgogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKLnNpZGViYXIgewogIHBhZGRpbmc6IDEuNXJlbTsKICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOwogIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQpOwogIG92ZXJmbG93LXk6IGF1dG87Cn0KCi5zZWN0aW9uIHsKICBtYXJnaW4tYm90dG9tOiAxLjVyZW07Cn0KCi5zZWN0aW9uLXRpdGxlIHsKICBmb250LXNpemU6IDAuODEyNXJlbTsKICBmb250LXdlaWdodDogNjAwOwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTsKICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7CiAgbWFyZ2luLWJvdHRvbTogMXJlbTsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAwLjVyZW07Cn0KCi5zZWN0aW9uLXRpdGxlOjphZnRlciB7CiAgY29udGVudDogJyc7CiAgZmxleDogMTsKICBoZWlnaHQ6IDFweDsKICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBVUExPQUQgWk9ORQogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKLnVwbG9hZC16b25lIHsKICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTsKICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOwogIHBhZGRpbmc6IDJyZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiBhbGwgMC4yczsKICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1pbnB1dCk7Cn0KCi51cGxvYWQtem9uZTpob3ZlciwKLnVwbG9hZC16b25lOmZvY3VzLXdpdGhpbiB7CiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKICBiYWNrZ3JvdW5kOiByZ2JhKDEyOSwxNDAsMjQ4LDAuMDgpOwp9CgoudXBsb2FkLXpvbmUgaW5wdXQgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB3aWR0aDogMXB4OwogIGhlaWdodDogMXB4OwogIG9wYWNpdHk6IDA7Cn0KCi51cGxvYWQtaWNvbiB7CiAgZm9udC1zaXplOiAyLjVyZW07CiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsKfQoKLnVwbG9hZC10ZXh0IHsKICBmb250LXNpemU6IDAuOTM3NXJlbTsKICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7Cn0KCi51cGxvYWQtdGV4dCBzdHJvbmcgewogIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKfQoKLyogTG9nbyBQcmV2aWV3ICovCi5sb2dvLXByZXZpZXcgewogIG1hcmdpbi10b3A6IDFyZW07CiAgcGFkZGluZzogMXJlbTsKICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBkaXNwbGF5OiBub25lOwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAxcmVtOwp9CgoubG9nby1wcmV2aWV3LnZpc2libGUgewogIGRpc3BsYXk6IGZsZXg7Cn0KCi5sb2dvLXByZXZpZXcgaW1nIHsKICB3aWR0aDogNjBweDsKICBoZWlnaHQ6IDYwcHg7CiAgb2JqZWN0LWZpdDogY29udGFpbjsKICBib3JkZXItcmFkaXVzOiA4cHg7CiAgYmFja2dyb3VuZDogI2ZmZjsKfQoKLmxvZ28tcHJldmlldyAuaW5mbyB7CiAgZmxleDogMTsKfQoKLmxvZ28tcHJldmlldyAuZmlsZW5hbWUgewogIGZvbnQtc2l6ZTogMC45Mzc1cmVtOwogIGZvbnQtd2VpZ2h0OiA1MDA7Cn0KCi5sb2dvLXByZXZpZXcgLmV4dHJhY3RlZCB7CiAgZm9udC1zaXplOiAwLjgxMjVyZW07CiAgY29sb3I6IHZhcigtLWFjY2VudCk7Cn0KCi5sb2dvLXByZXZpZXcgLnJlbW92ZSB7CiAgd2lkdGg6IDM2cHg7CiAgaGVpZ2h0OiAzNnB4OwogIGJvcmRlci1yYWRpdXM6IDUwJTsKICBib3JkZXI6IG5vbmU7CiAgYmFja2dyb3VuZDogcmdiYSgyNDgsMTEzLDExMywwLjIpOwogIGNvbG9yOiB2YXIoLS1lcnJvcik7CiAgY3Vyc29yOiBwb2ludGVyOwogIGZvbnQtc2l6ZTogMS4yNXJlbTsKICBsaW5lLWhlaWdodDogMTsKICB0cmFuc2l0aW9uOiBhbGwgMC4yczsKfQoKLmxvZ28tcHJldmlldyAucmVtb3ZlOmhvdmVyIHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7CiAgY29sb3I6IHdoaXRlOwp9CgovKiBFeHRyYWN0ZWQgQ29sb3JzICovCi5leHRyYWN0ZWQtY29sb3JzIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtd3JhcDogd3JhcDsKICBnYXA6IDAuNXJlbTsKICBtYXJnaW4tdG9wOiAxcmVtOwogIHBhZGRpbmc6IDFyZW07CiAgYmFja2dyb3VuZDogdmFyKC0tYmcpOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7CiAgZGlzcGxheTogbm9uZTsKfQoKLmV4dHJhY3RlZC1jb2xvcnMudmlzaWJsZSB7CiAgZGlzcGxheTogZmxleDsKfQoKLmV4dHJhY3RlZC1jb2xvciB7CiAgd2lkdGg6IDQ0cHg7CiAgaGVpZ2h0OiA0NHB4OwogIGJvcmRlci1yYWRpdXM6IDhweDsKICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsKICBjdXJzb3I6IHBvaW50ZXI7CiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7CiAgcG9zaXRpb246IHJlbGF0aXZlOwp9CgouZXh0cmFjdGVkLWNvbG9yOmhvdmVyIHsKICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7Cn0KCi5leHRyYWN0ZWQtY29sb3Iuc2VsZWN0ZWQgewogIGJvcmRlci1jb2xvcjogd2hpdGU7CiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXByaW1hcnkpOwp9CgouZXh0cmFjdGVkLWNvbG9yOjphZnRlciB7CiAgY29udGVudDogJ+Kckyc7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGluc2V0OiAwOwogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBjb2xvcjogd2hpdGU7CiAgZm9udC1zaXplOiAxcmVtOwogIG9wYWNpdHk6IDA7CiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuNSk7Cn0KCi5leHRyYWN0ZWQtY29sb3Iuc2VsZWN0ZWQ6OmFmdGVyIHsKICBvcGFjaXR5OiAxOwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBDT0xPUiBJTlBVVFMgLSBXQ0FHIEZpeGVkCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCgouY29sb3ItaW5wdXRzIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgZ2FwOiAwLjc1cmVtOwp9CgouY29sb3ItaW5wdXQtcm93IHsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAwLjc1cmVtOwogIHBhZGRpbmc6IDAuNzVyZW07CiAgYmFja2dyb3VuZDogdmFyKC0tYmctaW5wdXQpOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7CiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsKICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yczsKfQoKLmNvbG9yLWlucHV0LXJvdzpmb2N1cy13aXRoaW4gewogIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7Cn0KCi5jb2xvci1zd2F0Y2ggewogIHdpZHRoOiA0NHB4OwogIGhlaWdodDogNDRweDsKICBib3JkZXItcmFkaXVzOiA4cHg7CiAgYm9yZGVyOiBub25lOwogIGN1cnNvcjogcG9pbnRlcjsKICBmbGV4LXNocmluazogMDsKfQoKLmNvbG9yLWlucHV0LXJvdyBpbnB1dFt0eXBlPSJ0ZXh0Il0gewogIGZsZXg6IDE7CiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgYm9yZGVyOiBub25lOwogIGNvbG9yOiB2YXIoLS10ZXh0KTsKICBmb250LXNpemU6IDAuOTM3NXJlbTsKICBmb250LWZhbWlseTogJ1NGIE1vbm8nLCBNb25hY28sIG1vbm9zcGFjZTsKICBvdXRsaW5lOiBub25lOwp9CgouY29sb3ItaW5wdXQtcm93IC5sYWJlbCB7CiAgZm9udC1zaXplOiAwLjgxMjVyZW07CiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOwogIG1pbi13aWR0aDogNjBweDsKfQoKLmNvbG9yLWlucHV0LXJvdyAucmVtb3ZlLWJ0biB7CiAgd2lkdGg6IDMycHg7CiAgaGVpZ2h0OiAzMnB4OwogIGJvcmRlci1yYWRpdXM6IDZweDsKICBib3JkZXI6IG5vbmU7CiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOwogIGN1cnNvcjogcG9pbnRlcjsKICBmb250LXNpemU6IDEuMjVyZW07CiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7Cn0KCi5jb2xvci1pbnB1dC1yb3cgLnJlbW92ZS1idG46aG92ZXIgewogIGJhY2tncm91bmQ6IHJnYmEoMjQ4LDExMywxMTMsMC4yKTsKICBjb2xvcjogdmFyKC0tZXJyb3IpOwp9CgouYWRkLWNvbG9yLWJ0biB7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIGdhcDogMC41cmVtOwogIHBhZGRpbmc6IDAuNzVyZW07CiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWJvcmRlcik7CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsKICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7CiAgZm9udC1zaXplOiAwLjkzNzVyZW07CiAgY3Vyc29yOiBwb2ludGVyOwogIHRyYW5zaXRpb246IGFsbCAwLjJzOwp9CgouYWRkLWNvbG9yLWJ0bjpob3ZlciB7CiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7Cn0KCi5hZGQtY29sb3ItYnRuOmRpc2FibGVkIHsKICBvcGFjaXR5OiAwLjQ7CiAgY3Vyc29yOiBub3QtYWxsb3dlZDsKfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgT1BUSU9OUwogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKLm9wdGlvbnMtZ3JvdXAgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBnYXA6IDAuNzVyZW07Cn0KCi5vcHRpb24tcm93IHsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIHBhZGRpbmc6IDAuNzVyZW07CiAgYmFja2dyb3VuZDogdmFyKC0tYmctaW5wdXQpOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7Cn0KCi5vcHRpb24tcm93IGxhYmVsIHsKICBmb250LXNpemU6IDAuOTM3NXJlbTsKfQoKLm9wdGlvbi1yb3cgc2VsZWN0IHsKICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTsKICBib3JkZXItcmFkaXVzOiA2cHg7CiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsKICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7CiAgY29sb3I6IHZhcigtLXRleHQpOwogIGZvbnQtc2l6ZTogMC44NzVyZW07CiAgY3Vyc29yOiBwb2ludGVyOwp9Cgoub3B0aW9uLXJvdyBzZWxlY3Q6Zm9jdXMgewogIG91dGxpbmU6IG5vbmU7CiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKfQoKLyogVG9nZ2xlICovCi50b2dnbGUgewogIHdpZHRoOiA0OHB4OwogIGhlaWdodDogMjhweDsKICBib3JkZXItcmFkaXVzOiAxNHB4OwogIGJhY2tncm91bmQ6IHZhcigtLWJnKTsKICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOwogIGN1cnNvcjogcG9pbnRlcjsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7Cn0KCi50b2dnbGU6OmFmdGVyIHsKICBjb250ZW50OiAnJzsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgdG9wOiAzcHg7CiAgbGVmdDogM3B4OwogIHdpZHRoOiAyMHB4OwogIGhlaWdodDogMjBweDsKICBib3JkZXItcmFkaXVzOiA1MCU7CiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1tdXRlZCk7CiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7Cn0KCi50b2dnbGUuYWN0aXZlIHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTsKICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpOwp9CgoudG9nZ2xlLmFjdGl2ZTo6YWZ0ZXIgewogIGxlZnQ6IDIzcHg7CiAgYmFja2dyb3VuZDogd2hpdGU7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIEdFTkVSQVRFIEJVVFRPTgogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKLmdlbmVyYXRlLWJ0biB7CiAgd2lkdGg6IDEwMCU7CiAgcGFkZGluZzogMXJlbTsKICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpOwogIGJvcmRlcjogbm9uZTsKICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmspIDAlLCB2YXIoLS1wcmltYXJ5KSAxMDAlKTsKICBjb2xvcjogd2hpdGU7CiAgZm9udC1zaXplOiAxcmVtOwogIGZvbnQtd2VpZ2h0OiA2MDA7CiAgY3Vyc29yOiBwb2ludGVyOwogIHRyYW5zaXRpb246IGFsbCAwLjJzOwogIG1hcmdpbi10b3A6IDFyZW07Cn0KCi5nZW5lcmF0ZS1idG46aG92ZXIgewogIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsKICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoOTksMTAyLDI0MSwwLjQpOwp9CgouZ2VuZXJhdGUtYnRuOmFjdGl2ZSB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBNQUlOIENPTlRFTlQKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCi5tYWluIHsKICBwYWRkaW5nOiAycmVtOwogIG92ZXJmbG93LXk6IGF1dG87CiAgYmFja2dyb3VuZDogdmFyKC0tYmcpOwp9CgovKiBFbXB0eSBTdGF0ZSAqLwouZW1wdHktc3RhdGUgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIGhlaWdodDogMTAwJTsKICBtaW4taGVpZ2h0OiA0MDBweDsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOwp9CgouZW1wdHktc3RhdGUgLmljb24gewogIGZvbnQtc2l6ZTogNHJlbTsKICBtYXJnaW4tYm90dG9tOiAxcmVtOwogIG9wYWNpdHk6IDAuNTsKfQoKLmVtcHR5LXN0YXRlIGgyIHsKICBmb250LXNpemU6IDEuMjVyZW07CiAgbWFyZ2luLWJvdHRvbTogMC41cmVtOwogIGNvbG9yOiB2YXIoLS10ZXh0KTsKfQoKLmVtcHR5LXN0YXRlIHAgewogIG1heC13aWR0aDogMzAwcHg7CiAgZm9udC1zaXplOiAwLjkzNzVyZW07Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIFBBTEVUVEUgT1VUUFVUIC0gV0NBRyBGSVhFRAogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKLnBhbGV0dGUtc2VjdGlvbiB7CiAgbWFyZ2luLWJvdHRvbTogMi41cmVtOwp9CgoucGFsZXR0ZS10aXRsZSB7CiAgZm9udC1zaXplOiAxcmVtOwogIGZvbnQtd2VpZ2h0OiA2MDA7CiAgbWFyZ2luLWJvdHRvbTogMXJlbTsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAwLjc1cmVtOwp9CgoucGFsZXR0ZS10aXRsZSAuYmFkZ2UgewogIGZvbnQtc2l6ZTogMC43NXJlbTsKICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTsKICBiYWNrZ3JvdW5kOiByZ2JhKDEyOSwxNDAsMjQ4LDAuMik7CiAgY29sb3I6IHZhcigtLXByaW1hcnkpOwogIGJvcmRlci1yYWRpdXM6IDRweDsKICBmb250LXdlaWdodDogNTAwOwp9CgovKiBDb2xvciBTY2FsZSAtIFdDQUcgRml4ZWQgVGV4dCBDb2xvcnMgKi8KLmNvbG9yLXNjYWxlIHsKICBkaXNwbGF5OiBmbGV4OwogIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOwp9CgouY29sb3Itc2NhbGUgLnN0ZXAgewogIGZsZXg6IDE7CiAgYXNwZWN0LXJhdGlvOiAxOwogIG1pbi13aWR0aDogNTBweDsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBjdXJzb3I6IHBvaW50ZXI7CiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoKLmNvbG9yLXNjYWxlIC5zdGVwOmhvdmVyIHsKICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOwogIHotaW5kZXg6IDEwOwogIGJvcmRlci1yYWRpdXM6IDhweDsKfQoKLmNvbG9yLXNjYWxlIC5zdGVwIC5zaGFkZSB7CiAgZm9udC1zaXplOiAwLjc1cmVtOyAvKiBJbmNyZWFzZWQgZnJvbSAwLjY1cmVtICovCiAgZm9udC13ZWlnaHQ6IDcwMDsgLyogQm9sZGVyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi8KfQoKLmNvbG9yLXNjYWxlIC5zdGVwIC5oZXggewogIGZvbnQtc2l6ZTogMC42MjVyZW07CiAgZm9udC1mYW1pbHk6ICdTRiBNb25vJywgTW9uYWNvLCBtb25vc3BhY2U7CiAgb3BhY2l0eTogMDsKICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzOwp9CgouY29sb3Itc2NhbGUgLnN0ZXA6aG92ZXIgLmhleCB7CiAgb3BhY2l0eTogMTsKfQoKLyogQ29udHJhc3QgSW5kaWNhdG9yIEJhZGdlICovCi5jb250cmFzdC1iYWRnZSB7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogNHB4OwogIHJpZ2h0OiA0cHg7CiAgZm9udC1zaXplOiAwLjVyZW07CiAgcGFkZGluZzogMnB4IDRweDsKICBib3JkZXItcmFkaXVzOiAzcHg7CiAgZm9udC13ZWlnaHQ6IDYwMDsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXM7Cn0KCi5jb2xvci1zY2FsZSAuc3RlcDpob3ZlciAuY29udHJhc3QtYmFkZ2UgewogIG9wYWNpdHk6IDE7Cn0KCi5jb250cmFzdC1iYWRnZS5wYXNzIHsKICBiYWNrZ3JvdW5kOiByZ2JhKDUyLDIxMSwxNTMsMC45KTsKICBjb2xvcjogIzAwMDsKfQoKLmNvbnRyYXN0LWJhZGdlLmZhaWwgewogIGJhY2tncm91bmQ6IHJnYmEoMjQ4LDExMywxMTMsMC45KTsKICBjb2xvcjogIzAwMDsKfQoKLyogTmV1dHJhbHMgR3JpZCAqLwoubmV1dHJhbHMtZ3JpZCB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEzMHB4LCAxZnIpKTsKICBnYXA6IDAuNzVyZW07Cn0KCi5uZXV0cmFsLWNhcmQgewogIHBhZGRpbmc6IDFyZW07CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiBhbGwgMC4yczsKfQoKLm5ldXRyYWwtY2FyZDpob3ZlciB7CiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7Cn0KCi5uZXV0cmFsLWNhcmQgLnN3YXRjaCB7CiAgd2lkdGg6IDEwMCU7CiAgaGVpZ2h0OiA0OHB4OwogIGJvcmRlci1yYWRpdXM6IDhweDsKICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOwogIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7Cn0KCi5uZXV0cmFsLWNhcmQgLm5hbWUgewogIGZvbnQtc2l6ZTogMC44MTI1cmVtOwogIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsKICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtOwp9CgoubmV1dHJhbC1jYXJkIC52YWx1ZSB7CiAgZm9udC1zaXplOiAwLjg3NXJlbTsKICBmb250LWZhbWlseTogJ1NGIE1vbm8nLCBNb25hY28sIG1vbm9zcGFjZTsKfQoKLyogU2VtYW50aWMgQ29sb3JzICovCi5zZW1hbnRpYy1ncmlkIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiAxcmVtOwp9CgpAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHsKICAuc2VtYW50aWMtZ3JpZCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQoKLnNlbWFudGljLWNhcmQgewogIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhcmQpOwogIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7CiAgcGFkZGluZzogMXJlbTsKICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOwp9Cgouc2VtYW50aWMtY2FyZCAuaGVhZGVyIHsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZ2FwOiAwLjVyZW07CiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsKfQoKLnNlbWFudGljLWNhcmQgLmRvdCB7CiAgd2lkdGg6IDEycHg7CiAgaGVpZ2h0OiAxMnB4OwogIGJvcmRlci1yYWRpdXM6IDUwJTsKfQoKLnNlbWFudGljLWNhcmQgLmxhYmVsIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIGZvbnQtd2VpZ2h0OiA2MDA7Cn0KCi5zZW1hbnRpYy1jYXJkIC5zY2FsZSB7CiAgZGlzcGxheTogZmxleDsKICBib3JkZXItcmFkaXVzOiA2cHg7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoKLnNlbWFudGljLWNhcmQgLnNjYWxlIGRpdiB7CiAgZmxleDogMTsKICBoZWlnaHQ6IDI4cHg7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIExJVkUgUFJFVklFVyAtIFdDQUcgRklYRUQKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCi5wcmV2aWV3LXNlY3Rpb24gewogIG1hcmdpbi1ib3R0b206IDIuNXJlbTsKfQoKLnByZXZpZXctY2FyZHMgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7CiAgZ2FwOiAxcmVtOwp9CgoucHJldmlldy1jYXJkIHsKICBwYWRkaW5nOiAxLjVyZW07CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOwp9CgoucHJldmlldy1jYXJkIGg0IHsKICBmb250LXNpemU6IDFyZW07CiAgZm9udC13ZWlnaHQ6IDcwMDsKICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOwp9CgoucHJldmlldy1jYXJkIHAgewogIGZvbnQtc2l6ZTogMC45Mzc1cmVtOwogIGxpbmUtaGVpZ2h0OiAxLjY7CiAgbWFyZ2luLWJvdHRvbTogMXJlbTsKfQoKLnByZXZpZXctY2FyZCAuYnRuLXJvdyB7CiAgZGlzcGxheTogZmxleDsKICBnYXA6IDAuNXJlbTsKICBmbGV4LXdyYXA6IHdyYXA7Cn0KCi5wcmV2aWV3LWNhcmQgLmJ0biB7CiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTsKICBib3JkZXItcmFkaXVzOiA2cHg7CiAgZm9udC1zaXplOiAwLjg3NXJlbTsKICBmb250LXdlaWdodDogNjAwOwogIGJvcmRlcjogbm9uZTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7Cn0KCi5wcmV2aWV3LWNhcmQgLmJ0bjpob3ZlciB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBDU1MgT1VUUFVUCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCgouY3NzLW91dHB1dCB7CiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBvdmVyZmxvdzogaGlkZGVuOwogIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7Cn0KCi5jc3Mtb3V0cHV0IC5oZWFkZXIgewogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgcGFkZGluZzogMXJlbTsKICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsKfQoKLmNzcy1vdXRwdXQgLmhlYWRlciBoMyB7CiAgZm9udC1zaXplOiAwLjkzNzVyZW07CiAgZm9udC13ZWlnaHQ6IDYwMDsKfQoKLmNzcy1vdXRwdXQgLmFjdGlvbnMgewogIGRpc3BsYXk6IGZsZXg7CiAgZ2FwOiAwLjVyZW07Cn0KCi5jc3Mtb3V0cHV0IC5hY3Rpb25zIGJ1dHRvbiB7CiAgcGFkZGluZzogMC41cmVtIDFyZW07CiAgYm9yZGVyLXJhZGl1czogOHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7CiAgYmFja2dyb3VuZDogdmFyKC0tYmcpOwogIGNvbG9yOiB2YXIoLS10ZXh0KTsKICBmb250LXNpemU6IDAuODc1cmVtOwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7Cn0KCi5jc3Mtb3V0cHV0IC5hY3Rpb25zIGJ1dHRvbjpob3ZlciB7CiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTsKICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7Cn0KCi5jc3Mtb3V0cHV0IC5hY3Rpb25zIGJ1dHRvbi5wcmltYXJ5IHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTsKICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpOwogIGNvbG9yOiB3aGl0ZTsKfQoKLmNzcy1vdXRwdXQgcHJlIHsKICBwYWRkaW5nOiAxcmVtOwogIGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsIE1vbmFjbywgJ0Nhc2NhZGlhIENvZGUnLCBtb25vc3BhY2U7CiAgZm9udC1zaXplOiAwLjgxMjVyZW07CiAgbGluZS1oZWlnaHQ6IDEuNjsKICBvdmVyZmxvdy14OiBhdXRvOwogIG1heC1oZWlnaHQ6IDQwMHB4OwogIGNvbG9yOiB2YXIoLS10ZXh0KTsKfQoKLyogVG9hc3QgKi8KLnRvYXN0IHsKICBwb3NpdGlvbjogZml4ZWQ7CiAgYm90dG9tOiAycmVtOwogIHJpZ2h0OiAycmVtOwogIHBhZGRpbmc6IDFyZW0gMS41cmVtOwogIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7CiAgY29sb3I6ICMwMDA7IC8qIEZpeGVkOiBibGFjayB0ZXh0IG9uIGdyZWVuICovCiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBmb250LXdlaWdodDogNjAwOwogIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpOwogIHotaW5kZXg6IDEwMDA7Cn0KCi50b2FzdC52aXNpYmxlIHsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgb3BhY2l0eTogMTsKfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgQUNDRVNTSUJJTElUWSBJTVBST1ZFTUVOVFMKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCi8qIEZvY3VzIHN0YXRlcyAqLwo6Zm9jdXMtdmlzaWJsZSB7CiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpOwogIG91dGxpbmUtb2Zmc2V0OiAycHg7Cn0KCi8qIFNraXAgbGluayAqLwouc2tpcC1saW5rIHsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgdG9wOiAtMTAwcHg7CiAgbGVmdDogNTAlOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsKICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTsKICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTsKICBjb2xvcjogd2hpdGU7CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTsKICBmb250LXdlaWdodDogNjAwOwogIHotaW5kZXg6IDk5OTk7CiAgdHJhbnNpdGlvbjogdG9wIDAuM3M7Cn0KCi5za2lwLWxpbms6Zm9jdXMgewogIHRvcDogMXJlbTsKfQoKLyogUmVkdWNlZCBtb3Rpb24gKi8KQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHsKICAqLAogICo6OmJlZm9yZSwKICAqOjphZnRlciB7CiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50OwogICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50OwogICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7CiAgfQp9CiAgPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICA8YSBocmVmPSIjbWFpbkNvbnRlbnQiIGNsYXNzPSJza2lwLWxpbmsiPlp1bSBJbmhhbHQgc3ByaW5nZW48L2E+CiAgCiAgPGhlYWRlciBjbGFzcz0iaGVhZGVyIj4KICAgIDxoMT7wn46oIENvbG9yIFN0YWNrIEdlbmVyYXRvciB2MjwvaDE+CiAgICA8cD5XQ0FHLWtvbmZvcm1lIERlc2lnbi1TeXN0ZW0tRmFyYmVuIGF1cyAyLTQgRWluZ2FiZWZhcmJlbiBnZW5lcmllcmVuPC9wPgogIDwvaGVhZGVyPgoKICA8ZGl2IGNsYXNzPSJhcHAiPgogICAgPCEtLSBTaWRlYmFyIC0tPgogICAgPGFzaWRlIGNsYXNzPSJzaWRlYmFyIj4KICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbiI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbi10aXRsZSI+TG9nbyBVcGxvYWQ8L2Rpdj4KICAgICAgICA8bGFiZWwgY2xhc3M9InVwbG9hZC16b25lIiBpZD0idXBsb2FkWm9uZSIgdGFiaW5kZXg9IjAiIHJvbGU9ImJ1dHRvbiIgYXJpYS1sYWJlbD0iTG9nbyBob2NobGFkZW4iPgogICAgICAgICAgPGlucHV0IHR5cGU9ImZpbGUiIGlkPSJmaWxlSW5wdXQiIGFjY2VwdD0iaW1hZ2UvKiIgYXJpYS1kZXNjcmliZWRieT0idXBsb2FkSGVscCI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJ1cGxvYWQtaWNvbiI+8J+TpDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0idXBsb2FkLXRleHQiIGlkPSJ1cGxvYWRIZWxwIj4KICAgICAgICAgICAgPHN0cm9uZz5LbGlja2VuPC9zdHJvbmc+IG9kZXIgTG9nbyBoaWVyaGVyIHppZWhlbjxicj4KICAgICAgICAgICAgPHNtYWxsPlBORywgSlBHLCBTVkcg4oCTIG1heC4gNU1CPC9zbWFsbD4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvbGFiZWw+CiAgICAgICAgPGRpdiBjbGFzcz0ibG9nby1wcmV2aWV3IiBpZD0ibG9nb1ByZXZpZXciPgogICAgICAgICAgPGltZyBpZD0ibG9nb0ltZyIgc3JjPSIiIGFsdD0iSG9jaGdlbGFkZW5lcyBMb2dvIj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImluZm8iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWxlbmFtZSIgaWQ9ImZpbGVOYW1lIj48L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZXh0cmFjdGVkIiBpZD0iZXh0cmFjdGVkQ291bnQiPjwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJyZW1vdmUiIGlkPSJyZW1vdmVMb2dvQnRuIiBhcmlhLWxhYmVsPSJMb2dvIGVudGZlcm5lbiI+w5c8L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJleHRyYWN0ZWQtY29sb3JzIiBpZD0iZXh0cmFjdGVkQ29sb3JzIiByb2xlPSJncm91cCIgYXJpYS1sYWJlbD0iRXh0cmFoaWVydGUgRmFyYmVuIj48L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJzZWN0aW9uIj4KICAgICAgICA8ZGl2IGNsYXNzPSJzZWN0aW9uLXRpdGxlIj5NYW51ZWxsZSBFaW5nYWJlPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sb3ItaW5wdXRzIiBpZD0iY29sb3JJbnB1dHMiPjwvZGl2PgogICAgICAgIDxidXR0b24gY2xhc3M9ImFkZC1jb2xvci1idG4iIGlkPSJhZGRDb2xvckJ0biI+KyBGYXJiZSBoaW56dWbDvGdlbjwvYnV0dG9uPgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24iPgogICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24tdGl0bGUiPk9wdGlvbmVuPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib3B0aW9ucy1ncm91cCI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24tcm93Ij4KICAgICAgICAgICAgPGxhYmVsIGZvcj0ibmV1dHJhbFN0eWxlIj5OZXV0cmFsczwvbGFiZWw+CiAgICAgICAgICAgIDxzZWxlY3QgaWQ9Im5ldXRyYWxTdHlsZSI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0id2FybSI+V2FybSAoYmFzaWVyZW5kIGF1ZiBQcmltYXJ5KTwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImNvb2wiPkNvb2wgKGJhc2llcmVuZCBhdWYgUHJpbWFyeSk8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJwdXJlIj5QdXJlIEdyYXk8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbi1yb3ciPgogICAgICAgICAgICA8bGFiZWw+RGFyayBNb2RlIGdlbmVyaWVyZW48L2xhYmVsPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0b2dnbGUgYWN0aXZlIiBpZD0iZGFya01vZGVUb2dnbGUiIHJvbGU9InN3aXRjaCIgYXJpYS1jaGVja2VkPSJ0cnVlIiB0YWJpbmRleD0iMCI+PC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9Im9wdGlvbi1yb3ciPgogICAgICAgICAgICA8bGFiZWw+U2VtYW50aWMgQ29sb3JzPC9sYWJlbD4KICAgICAgICAgICAgPGRpdiBjbGFzcz0idG9nZ2xlIGFjdGl2ZSIgaWQ9InNlbWFudGljVG9nZ2xlIiByb2xlPSJzd2l0Y2giIGFyaWEtY2hlY2tlZD0idHJ1ZSIgdGFiaW5kZXg9IjAiPjwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvcHRpb24tcm93Ij4KICAgICAgICAgICAgPGxhYmVsPldDQUcgS29udHJhc3QtQ2hlY2s8L2xhYmVsPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0b2dnbGUgYWN0aXZlIiBpZD0iY29udHJhc3RUb2dnbGUiIHJvbGU9InN3aXRjaCIgYXJpYS1jaGVja2VkPSJ0cnVlIiB0YWJpbmRleD0iMCI+PC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8YnV0dG9uIGNsYXNzPSJnZW5lcmF0ZS1idG4iIGlkPSJnZW5lcmF0ZUJ0biI+CiAgICAgICAg4pyoIENvbG9yIFN0YWNrIGdlbmVyaWVyZW4KICAgICAgPC9idXR0b24+CiAgICA8L2FzaWRlPgoKICAgIDwhLS0gTWFpbiBDb250ZW50IC0tPgogICAgPG1haW4gY2xhc3M9Im1haW4iIGlkPSJtYWluQ29udGVudCI+CiAgICAgIDxkaXYgY2xhc3M9ImVtcHR5LXN0YXRlIiBpZD0iZW1wdHlTdGF0ZSI+CiAgICAgICAgPGRpdiBjbGFzcz0iaWNvbiI+8J+OqDwvZGl2PgogICAgICAgIDxoMj5Ob2NoIGtlaW5lIFBhbGV0dGUgZ2VuZXJpZXJ0PC9oMj4KICAgICAgICA8cD5MYWRlIGVpbiBMb2dvIGhvY2ggb2RlciBnaWIgbWFudWVsbCAyLTQgRmFyYmVuIGVpbiwgZGFubiBrbGlja2UgYXVmICJHZW5lcmllcmVuIi48L3A+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBpZD0icGFsZXR0ZU91dHB1dCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48L2Rpdj4KICAgIDwvbWFpbj4KICA8L2Rpdj4KCiAgPGRpdiBjbGFzcz0idG9hc3QiIGlkPSJ0b2FzdCI+S29waWVydCE8L2Rpdj4KCjxzY3JpcHQ+Ci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIENPTE9SIFNUQUNLIEdFTkVSQVRPUiB2MiAtIFdDQUcgQ09NUExJQU5UCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgovLyBTdGF0ZQpjb25zdCBzdGF0ZSA9IHsKICBjb2xvcnM6IFsKICAgIHsgaWQ6IDEsIGxhYmVsOiAnUHJpbWFyeScsIGhleDogJyMxZTNhNWYnIH0sCiAgICB7IGlkOiAyLCBsYWJlbDogJ0FjY2VudCcsIGhleDogJyNjYThhMDQnIH0KICBdLAogIGV4dHJhY3RlZENvbG9yczogW10sCiAgc2VsZWN0ZWRFeHRyYWN0ZWQ6IFtdLAogIG9wdGlvbnM6IHsKICAgIG5ldXRyYWxTdHlsZTogJ3dhcm0nLAogICAgZGFya01vZGU6IHRydWUsCiAgICBzZW1hbnRpYzogdHJ1ZSwKICAgIGNvbnRyYXN0Q2hlY2s6IHRydWUKICB9LAogIGdlbmVyYXRlZFBhbGV0dGU6IG51bGwKfTsKCmxldCBjb2xvcklkQ291bnRlciA9IDM7CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBXQ0FHIENPTlRSQVNUIFVUSUxJVElFUwovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7CiAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXGRdezJ9KShbYS1mXGRdezJ9KShbYS1mXGRdezJ9KSQvaS5leGVjKGhleCk7CiAgcmV0dXJuIHJlc3VsdCA/IHsKICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLAogICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksCiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KQogIH0gOiBudWxsOwp9CgpmdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiKSB7CiAgcmV0dXJuICcjJyArIFtyLCBnLCBiXS5tYXAoeCA9PiB7CiAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgeCkpKS50b1N0cmluZygxNik7CiAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDsKICB9KS5qb2luKCcnKTsKfQoKZnVuY3Rpb24gcmdiVG9Ic2wociwgZywgYikgewogIHIgLz0gMjU1OyBnIC89IDI1NTsgYiAvPSAyNTU7CiAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpOwogIGxldCBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyOwogIGlmIChtYXggPT09IG1pbikgewogICAgaCA9IHMgPSAwOwogIH0gZWxzZSB7CiAgICBjb25zdCBkID0gbWF4IC0gbWluOwogICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pOwogICAgc3dpdGNoIChtYXgpIHsKICAgICAgY2FzZSByOiBoID0gKChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApKSAvIDY7IGJyZWFrOwogICAgICBjYXNlIGc6IGggPSAoKGIgLSByKSAvIGQgKyAyKSAvIDY7IGJyZWFrOwogICAgICBjYXNlIGI6IGggPSAoKHIgLSBnKSAvIGQgKyA0KSAvIDY7IGJyZWFrOwogICAgfQogIH0KICByZXR1cm4geyBoOiBoICogMzYwLCBzOiBzICogMTAwLCBsOiBsICogMTAwIH07Cn0KCmZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwpIHsKICBoIC89IDM2MDsgcyAvPSAxMDA7IGwgLz0gMTAwOwogIGxldCByLCBnLCBiOwogIGlmIChzID09PSAwKSB7CiAgICByID0gZyA9IGIgPSBsOwogIH0gZWxzZSB7CiAgICBjb25zdCBodWUycmdiID0gKHAsIHEsIHQpID0+IHsKICAgICAgaWYgKHQgPCAwKSB0ICs9IDE7CiAgICAgIGlmICh0ID4gMSkgdCAtPSAxOwogICAgICBpZiAodCA8IDEvNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7CiAgICAgIGlmICh0IDwgMS8yKSByZXR1cm4gcTsKICAgICAgaWYgKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7CiAgICAgIHJldHVybiBwOwogICAgfTsKICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzOwogICAgY29uc3QgcCA9IDIgKiBsIC0gcTsKICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpOwogICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7CiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTsKICB9CiAgcmV0dXJuIHsgcjogTWF0aC5yb3VuZChyICogMjU1KSwgZzogTWF0aC5yb3VuZChnICogMjU1KSwgYjogTWF0aC5yb3VuZChiICogMjU1KSB9Owp9CgpmdW5jdGlvbiBoZXhUb0hzbChoZXgpIHsKICBjb25zdCByZ2IgPSBoZXhUb1JnYihoZXgpOwogIHJldHVybiByZ2IgPyByZ2JUb0hzbChyZ2IuciwgcmdiLmcsIHJnYi5iKSA6IG51bGw7Cn0KCmZ1bmN0aW9uIGhzbFRvSGV4KGgsIHMsIGwpIHsKICBjb25zdCByZ2IgPSBoc2xUb1JnYihoLCBzLCBsKTsKICByZXR1cm4gcmdiVG9IZXgocmdiLnIsIHJnYi5nLCByZ2IuYik7Cn0KCi8vIFdDQUcgUmVsYXRpdmUgTHVtaW5hbmNlCmZ1bmN0aW9uIGdldEx1bWluYW5jZShoZXgpIHsKICBjb25zdCByZ2IgPSBoZXhUb1JnYihoZXgpOwogIGlmICghcmdiKSByZXR1cm4gMDsKICBjb25zdCBbciwgZywgYl0gPSBbcmdiLnIsIHJnYi5nLCByZ2IuYl0ubWFwKHYgPT4gewogICAgdiAvPSAyNTU7CiAgICByZXR1cm4gdiA8PSAwLjAzOTI4ID8gdiAvIDEyLjkyIDogTWF0aC5wb3coKHYgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTsKICB9KTsKICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiOwp9CgovLyBXQ0FHIENvbnRyYXN0IFJhdGlvCmZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oaGV4MSwgaGV4MikgewogIGNvbnN0IGwxID0gZ2V0THVtaW5hbmNlKGhleDEpOwogIGNvbnN0IGwyID0gZ2V0THVtaW5hbmNlKGhleDIpOwogIGNvbnN0IGxpZ2h0ZXIgPSBNYXRoLm1heChsMSwgbDIpOwogIGNvbnN0IGRhcmtlciA9IE1hdGgubWluKGwxLCBsMik7CiAgcmV0dXJuIChsaWdodGVyICsgMC4wNSkgLyAoZGFya2VyICsgMC4wNSk7Cn0KCi8vIEdldCBXQ0FHLWNvbXBsaWFudCB0ZXh0IGNvbG9yCmZ1bmN0aW9uIGdldENvbnRyYXN0Q29sb3IoYmdIZXgsIHByZWZlcldoaXRlID0gdHJ1ZSkgewogIGNvbnN0IHdoaXRlQ29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJnSGV4LCAnI2ZmZmZmZicpOwogIGNvbnN0IGJsYWNrQ29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJnSGV4LCAnIzAwMDAwMCcpOwogIAogIC8vIFdDQUcgQUEgcmVxdWlyZXMgNC41OjEgZm9yIG5vcm1hbCB0ZXh0CiAgaWYgKHByZWZlcldoaXRlICYmIHdoaXRlQ29udHJhc3QgPj0gNC41KSByZXR1cm4gJyNmZmZmZmYnOwogIGlmIChibGFja0NvbnRyYXN0ID49IDQuNSkgcmV0dXJuICcjMDAwMDAwJzsKICBpZiAod2hpdGVDb250cmFzdCA+IGJsYWNrQ29udHJhc3QpIHJldHVybiAnI2ZmZmZmZic7CiAgcmV0dXJuICcjMDAwMDAwJzsKfQoKLy8gQ2hlY2sgaWYgY29udHJhc3QgbWVldHMgV0NBRyBBQQpmdW5jdGlvbiBtZWV0c1dDQUcoYmdIZXgsIGZnSGV4LCBpc0xhcmdlVGV4dCA9IGZhbHNlKSB7CiAgY29uc3QgcmF0aW8gPSBnZXRDb250cmFzdFJhdGlvKGJnSGV4LCBmZ0hleCk7CiAgcmV0dXJuIGlzTGFyZ2VUZXh0ID8gcmF0aW8gPj0gMyA6IHJhdGlvID49IDQuNTsKfQoKCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIFdDQUcgU0VNQU5USUMgRU5GT1JDRU1FTlQgKEFBIGRlZmF1bHRzKQovLyBCaW5kcyBnZW5lcmF0ZWQgcGFsZXR0ZSB0byBjb250cmFzdCBjb25zdHJhaW50cyBmb3IgcmVhbCBVSSBwYWlyaW5ncwovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKZnVuY3Rpb24gX2dldFNjYWxlU2hhZGVzKHNjYWxlKSB7CiAgcmV0dXJuIE9iamVjdC5rZXlzKHNjYWxlIHx8IHt9KQogICAgLm1hcChrID0+IHBhcnNlSW50KGssIDEwKSkKICAgIC5maWx0ZXIobiA9PiBOdW1iZXIuaXNGaW5pdGUobikpCiAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpOwp9CgpmdW5jdGlvbiBwaWNrRm9yZWdyb3VuZE9uKGJnSGV4LCBtaW5SYXRpbyA9IDQuNSkgewogIGNvbnN0IHdoaXRlID0gJyNmZmZmZmYnOwogIGNvbnN0IGJsYWNrID0gJyMwMDAwMDAnOwogIGNvbnN0IHJ3ID0gZ2V0Q29udHJhc3RSYXRpbyhiZ0hleCwgd2hpdGUpOwogIGNvbnN0IHJiID0gZ2V0Q29udHJhc3RSYXRpbyhiZ0hleCwgYmxhY2spOwogIC8vIFByZWZlciBvbmUgdGhhdCBwYXNzZXM7IG90aGVyd2lzZSB0aGUgYmV0dGVyIG9uZS4KICBpZiAocncgPj0gbWluUmF0aW8gJiYgcmIgPj0gbWluUmF0aW8pIHJldHVybiBydyA+PSByYiA/IHdoaXRlIDogYmxhY2s7CiAgaWYgKHJ3ID49IG1pblJhdGlvKSByZXR1cm4gd2hpdGU7CiAgaWYgKHJiID49IG1pblJhdGlvKSByZXR1cm4gYmxhY2s7CiAgcmV0dXJuIHJ3ID49IHJiID8gd2hpdGUgOiBibGFjazsKfQoKZnVuY3Rpb24gcGlja1NoYWRlRm9yQmcoc2NhbGUsIG1pblJhdGlvID0gNC41LCBwcmVmZXIgPSAnZGFya2VyJykgewogIGNvbnN0IHNoYWRlcyA9IF9nZXRTY2FsZVNoYWRlcyhzY2FsZSk7CiAgY29uc3Qgb3JkZXIgPSBwcmVmZXIgPT09ICdsaWdodGVyJyA/IHNoYWRlcyA6IHNoYWRlcy5zbGljZSgpLnJldmVyc2UoKTsKICBsZXQgYmVzdCA9IG51bGw7CiAgbGV0IGJlc3RSYXRpbyA9IC0xOwoKICBmb3IgKGNvbnN0IHMgb2Ygb3JkZXIpIHsKICAgIGNvbnN0IGJnID0gc2NhbGUgJiYgc2NhbGVbc107CiAgICBpZiAoIWJnKSBjb250aW51ZTsKICAgIGNvbnN0IGZnID0gcGlja0ZvcmVncm91bmRPbihiZywgbWluUmF0aW8pOwogICAgY29uc3QgcmF0aW8gPSBnZXRDb250cmFzdFJhdGlvKGJnLCBmZyk7CiAgICBpZiAocmF0aW8gPj0gbWluUmF0aW8pIHJldHVybiB7IHNoYWRlOiBzLCBiZywgZmcsIHJhdGlvIH07CiAgICBpZiAocmF0aW8gPiBiZXN0UmF0aW8pIHsKICAgICAgYmVzdFJhdGlvID0gcmF0aW87CiAgICAgIGJlc3QgPSB7IHNoYWRlOiBzLCBiZywgZmcsIHJhdGlvIH07CiAgICB9CiAgfQogIHJldHVybiBiZXN0Owp9CgpmdW5jdGlvbiBwaWNrU2hhZGVGb3JGZyhzY2FsZSwgYmdIZXgsIG1pblJhdGlvID0gNC41LCBwcmVmZXIgPSAnZGFya2VyJykgewogIGNvbnN0IHNoYWRlcyA9IF9nZXRTY2FsZVNoYWRlcyhzY2FsZSk7CiAgY29uc3Qgb3JkZXIgPSBwcmVmZXIgPT09ICdsaWdodGVyJyA/IHNoYWRlcyA6IHNoYWRlcy5zbGljZSgpLnJldmVyc2UoKTsKICBsZXQgYmVzdCA9IG51bGw7CiAgbGV0IGJlc3RSYXRpbyA9IC0xOwoKICBmb3IgKGNvbnN0IHMgb2Ygb3JkZXIpIHsKICAgIGNvbnN0IGZnID0gc2NhbGUgJiYgc2NhbGVbc107CiAgICBpZiAoIWZnKSBjb250aW51ZTsKICAgIGNvbnN0IHJhdGlvID0gZ2V0Q29udHJhc3RSYXRpbyhiZ0hleCwgZmcpOwogICAgaWYgKHJhdGlvID49IG1pblJhdGlvKSByZXR1cm4geyBzaGFkZTogcywgY29sb3I6IGZnLCByYXRpbyB9OwogICAgaWYgKHJhdGlvID4gYmVzdFJhdGlvKSB7CiAgICAgIGJlc3RSYXRpbyA9IHJhdGlvOwogICAgICBiZXN0ID0geyBzaGFkZTogcywgY29sb3I6IGZnLCByYXRpbyB9OwogICAgfQogIH0KICByZXR1cm4gYmVzdDsKfQoKZnVuY3Rpb24gZGVyaXZlU2VtYW50aWNUb2tlbnMocGFsZXR0ZSwgb3B0aW9ucykgewogIC8vIFdDQUcgQUEgZGVmYXVsdHM6CiAgLy8gLSBOb3JtYWwgdGV4dDogNC41OjEKICAvLyAtIExhcmdlIHRleHQgLyBVSSBncmFwaGljczogMzoxIChub3QgdXNlZCBoZXJlLCBidXQgYXZhaWxhYmxlKQogIGNvbnN0IE1JTl9URVhUID0gNC41OwoKICBjb25zdCBuZXV0cmFsc0wgPSBwYWxldHRlLm5ldXRyYWxzTGlnaHQgfHwge307CiAgY29uc3QgbmV1dHJhbHNEID0gcGFsZXR0ZS5uZXV0cmFsc0RhcmsgfHwgbnVsbDsKCiAgLy8gTElHSFQKICBjb25zdCBiZ0wgPSBuZXV0cmFsc0xbNTBdIHx8ICcjZmZmZmZmJzsKICBjb25zdCBiZ0FsdEwgPSBuZXV0cmFsc0xbMTAwXSB8fCBiZ0w7CiAgY29uc3QgdGV4dEwgPSBuZXV0cmFsc0xbOTAwXSB8fCAnIzExMTExMSc7CiAgY29uc3QgbXV0ZWRQaWNrTCA9IHBpY2tTaGFkZUZvckZnKG5ldXRyYWxzTCwgYmdMLCBNSU5fVEVYVCwgJ2RhcmtlcicpOwogIGNvbnN0IHRleHRNdXRlZEwgPSAobXV0ZWRQaWNrTCAmJiBtdXRlZFBpY2tMLmNvbG9yKSA/IG11dGVkUGlja0wuY29sb3IgOiAobmV1dHJhbHNMWzcwMF0gfHwgdGV4dEwpOwogIGNvbnN0IGJvcmRlckwgPSBuZXV0cmFsc0xbMjAwXSB8fCAnI2U1ZTdlYic7CgogIGNvbnN0IGxpbmtQaWNrTCA9IHBpY2tTaGFkZUZvckZnKHBhbGV0dGUucHJpbWFyeSwgYmdMLCBNSU5fVEVYVCwgJ2RhcmtlcicpOwogIGNvbnN0IGxpbmtMID0gKGxpbmtQaWNrTCAmJiBsaW5rUGlja0wuY29sb3IpID8gbGlua1BpY2tMLmNvbG9yIDogKHBhbGV0dGUucHJpbWFyeSAmJiAocGFsZXR0ZS5wcmltYXJ5WzcwMF0gfHwgcGFsZXR0ZS5wcmltYXJ5WzYwMF0gfHwgcGFsZXR0ZS5wcmltYXJ5WzUwMF0pKSB8fCAnIzI1NjNlYic7CiAgY29uc3QgbGlua0hvdmVyTCA9IChsaW5rUGlja0wgJiYgcGFsZXR0ZS5wcmltYXJ5ICYmIHBhbGV0dGUucHJpbWFyeVtNYXRoLm1pbig5MDAsIGxpbmtQaWNrTC5zaGFkZSArIDEwMCldKQogICAgPyBwYWxldHRlLnByaW1hcnlbTWF0aC5taW4oOTAwLCBsaW5rUGlja0wuc2hhZGUgKyAxMDApXQogICAgOiAocGFsZXR0ZS5wcmltYXJ5ICYmIChwYWxldHRlLnByaW1hcnlbODAwXSB8fCBwYWxldHRlLnByaW1hcnlbNzAwXSkpIHx8IGxpbmtMOwoKICBjb25zdCBwcmltYXJ5QnRuTCA9IHBpY2tTaGFkZUZvckJnKHBhbGV0dGUucHJpbWFyeSwgTUlOX1RFWFQsICdkYXJrZXInKSB8fCB7IGJnOiBwYWxldHRlLnByaW1hcnlbNjAwXSB8fCBwYWxldHRlLnByaW1hcnlbNzAwXSB8fCBwYWxldHRlLnByaW1hcnlbNTAwXSwgZmc6ICcjZmZmZmZmJyB9OwogIGNvbnN0IGFjY2VudEJ0bkwgPSBwaWNrU2hhZGVGb3JCZyhwYWxldHRlLmFjY2VudCwgTUlOX1RFWFQsICdkYXJrZXInKSB8fCB7IGJnOiBwYWxldHRlLmFjY2VudFs2MDBdIHx8IHBhbGV0dGUuYWNjZW50WzcwMF0gfHwgcGFsZXR0ZS5hY2NlbnRbNTAwXSwgZmc6ICcjZmZmZmZmJyB9OwoKICBjb25zdCBvdXQgPSB7CiAgICBsaWdodDogewogICAgICBiZzogYmdMLAogICAgICBiZ0FsdDogYmdBbHRMLAogICAgICB0ZXh0OiB0ZXh0TCwKICAgICAgdGV4dE11dGVkOiB0ZXh0TXV0ZWRMLAogICAgICBib3JkZXI6IGJvcmRlckwsCiAgICAgIHByaW1hcnlCZzogcHJpbWFyeUJ0bkwuYmcsCiAgICAgIG9uUHJpbWFyeTogcHJpbWFyeUJ0bkwuZmcsCiAgICAgIGFjY2VudEJnOiBhY2NlbnRCdG5MLmJnLAogICAgICBvbkFjY2VudDogYWNjZW50QnRuTC5mZywKICAgICAgbGluazogbGlua0wsCiAgICAgIGxpbmtIb3ZlcjogbGlua0hvdmVyTAogICAgfQogIH07CgogIC8vIERBUksgKG9wdGlvbmFsKQogIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGFya01vZGUgJiYgbmV1dHJhbHNEKSB7CiAgICBjb25zdCBiZ0QgPSBuZXV0cmFsc0RbOTUwXSB8fCAnIzBiMGIwZic7CiAgICBjb25zdCBiZ0FsdEQgPSBuZXV0cmFsc0RbOTAwXSB8fCBiZ0Q7CiAgICBjb25zdCB0ZXh0RCA9IG5ldXRyYWxzRFs1MF0gfHwgJyNmNWY1ZjUnOwogICAgY29uc3QgbXV0ZWRQaWNrRCA9IHBpY2tTaGFkZUZvckZnKG5ldXRyYWxzRCwgYmdELCBNSU5fVEVYVCwgJ2xpZ2h0ZXInKTsKICAgIGNvbnN0IHRleHRNdXRlZEQgPSAobXV0ZWRQaWNrRCAmJiBtdXRlZFBpY2tELmNvbG9yKSA/IG11dGVkUGlja0QuY29sb3IgOiAobmV1dHJhbHNEWzIwMF0gfHwgdGV4dEQpOwogICAgY29uc3QgYm9yZGVyRCA9IG5ldXRyYWxzRFs4MDBdIHx8ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJzsKCiAgICBjb25zdCBsaW5rUGlja0QgPSBwaWNrU2hhZGVGb3JGZyhwYWxldHRlLnByaW1hcnksIGJnRCwgTUlOX1RFWFQsICdsaWdodGVyJyk7CiAgICBjb25zdCBsaW5rRCA9IChsaW5rUGlja0QgJiYgbGlua1BpY2tELmNvbG9yKSA/IGxpbmtQaWNrRC5jb2xvciA6IChwYWxldHRlLnByaW1hcnkgJiYgKHBhbGV0dGUucHJpbWFyeVszMDBdIHx8IHBhbGV0dGUucHJpbWFyeVs0MDBdIHx8IHBhbGV0dGUucHJpbWFyeVs1MDBdKSkgfHwgJyM5M2M1ZmQnOwogICAgY29uc3QgbGlua0hvdmVyRCA9IChsaW5rUGlja0QgJiYgcGFsZXR0ZS5wcmltYXJ5ICYmIHBhbGV0dGUucHJpbWFyeVtNYXRoLm1heCg1MCwgbGlua1BpY2tELnNoYWRlIC0gMTAwKV0pCiAgICAgID8gcGFsZXR0ZS5wcmltYXJ5W01hdGgubWF4KDUwLCBsaW5rUGlja0Quc2hhZGUgLSAxMDApXQogICAgICA6IChwYWxldHRlLnByaW1hcnkgJiYgKHBhbGV0dGUucHJpbWFyeVsyMDBdIHx8IHBhbGV0dGUucHJpbWFyeVszMDBdKSkgfHwgbGlua0Q7CgogICAgY29uc3QgcHJpbWFyeUJ0bkQgPSBwaWNrU2hhZGVGb3JCZyhwYWxldHRlLnByaW1hcnksIE1JTl9URVhULCAnbGlnaHRlcicpIHx8IHsgYmc6IHBhbGV0dGUucHJpbWFyeVs1MDBdLCBmZzogcGlja0ZvcmVncm91bmRPbihwYWxldHRlLnByaW1hcnlbNTAwXSwgTUlOX1RFWFQpIH07CiAgICBjb25zdCBhY2NlbnRCdG5EID0gcGlja1NoYWRlRm9yQmcocGFsZXR0ZS5hY2NlbnQsIE1JTl9URVhULCAnbGlnaHRlcicpIHx8IHsgYmc6IHBhbGV0dGUuYWNjZW50WzUwMF0sIGZnOiBwaWNrRm9yZWdyb3VuZE9uKHBhbGV0dGUuYWNjZW50WzUwMF0sIE1JTl9URVhUKSB9OwoKICAgIG91dC5kYXJrID0gewogICAgICBiZzogYmdELAogICAgICBiZ0FsdDogYmdBbHRELAogICAgICB0ZXh0OiB0ZXh0RCwKICAgICAgdGV4dE11dGVkOiB0ZXh0TXV0ZWRELAogICAgICBib3JkZXI6IGJvcmRlckQsCiAgICAgIHByaW1hcnlCZzogcHJpbWFyeUJ0bkQuYmcsCiAgICAgIG9uUHJpbWFyeTogcHJpbWFyeUJ0bkQuZmcsCiAgICAgIGFjY2VudEJnOiBhY2NlbnRCdG5ELmJnLAogICAgICBvbkFjY2VudDogYWNjZW50QnRuRC5mZywKICAgICAgbGluazogbGlua0QsCiAgICAgIGxpbmtIb3ZlcjogbGlua0hvdmVyRAogICAgfTsKICB9CgogIHJldHVybiBvdXQ7Cn0KCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIFNDQUxFIEdFTkVSQVRJT04gLSBXQ0FHIE9QVElNSVpFRAovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKZnVuY3Rpb24gZ2VuZXJhdGVDb2xvclNjYWxlKGJhc2VIZXgpIHsKICBjb25zdCBoc2wgPSBoZXhUb0hzbChiYXNlSGV4KTsKICBpZiAoIWhzbCkgcmV0dXJuIHt9OwoKICAvLyBPcHRpbWl6ZWQgbGlnaHRuZXNzIHZhbHVlcyBmb3IgYmV0dGVyIGNvbnRyYXN0CiAgY29uc3QgbGlnaHRuZXNzTWFwID0gewogICAgNTA6IDk3LAogICAgMTAwOiA5MywKICAgIDIwMDogODUsCiAgICAzMDA6IDczLAogICAgNDAwOiA1OCwKICAgIDUwMDogNDUsCiAgICA2MDA6IDM3LAogICAgNzAwOiAyOSwKICAgIDgwMDogMjEsCiAgICA5MDA6IDE0CiAgfTsKCiAgLy8gU2F0dXJhdGlvbiBhZGp1c3RtZW50cwogIGNvbnN0IHNhdHVyYXRpb25NYXAgPSB7CiAgICA1MDogaHNsLnMgKiAwLjI1LAogICAgMTAwOiBoc2wucyAqIDAuNCwKICAgIDIwMDogaHNsLnMgKiAwLjYsCiAgICAzMDA6IGhzbC5zICogMC44LAogICAgNDAwOiBoc2wucyAqIDAuOTUsCiAgICA1MDA6IGhzbC5zLAogICAgNjAwOiBNYXRoLm1pbigxMDAsIGhzbC5zICogMS4wNSksCiAgICA3MDA6IE1hdGgubWluKDEwMCwgaHNsLnMgKiAxLjEpLAogICAgODAwOiBNYXRoLm1pbigxMDAsIGhzbC5zICogMS4xKSwKICAgIDkwMDogTWF0aC5taW4oMTAwLCBoc2wucyAqIDEuMDUpCiAgfTsKCiAgY29uc3Qgc2NhbGUgPSB7fTsKICBmb3IgKGNvbnN0IFtzaGFkZSwgbGlnaHRuZXNzXSBvZiBPYmplY3QuZW50cmllcyhsaWdodG5lc3NNYXApKSB7CiAgICBjb25zdCBzYXQgPSBzYXR1cmF0aW9uTWFwW3NoYWRlXTsKICAgIHNjYWxlW3NoYWRlXSA9IGhzbFRvSGV4KGhzbC5oLCBzYXQsIGxpZ2h0bmVzcyk7CiAgfQoKICByZXR1cm4gc2NhbGU7Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlTmV1dHJhbHMocHJpbWFyeUhleCwgc3R5bGUgPSAnd2FybScpIHsKICBjb25zdCBoc2wgPSBoZXhUb0hzbChwcmltYXJ5SGV4KTsKICBsZXQgaHVlID0gaHNsID8gaHNsLmggOiAyMjA7CiAgbGV0IHNhdHVyYXRpb24gPSAwOwoKICBpZiAoc3R5bGUgPT09ICd3YXJtJykgewogICAgc2F0dXJhdGlvbiA9IDU7CiAgICBodWUgPSAoaHVlICsgMTUpICUgMzYwOwogIH0gZWxzZSBpZiAoc3R5bGUgPT09ICdjb29sJykgewogICAgc2F0dXJhdGlvbiA9IDU7CiAgICBodWUgPSAoaHVlIC0gMTUgKyAzNjApICUgMzYwOwogIH0KCiAgcmV0dXJuIHsKICAgIGJnOiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIDk4KSwKICAgIGJnQWx0OiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIDk2KSwKICAgIGJnTXV0ZWQ6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgOTMpLAogICAgc3VyZmFjZTogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCAxMDApLAogICAgc3VyZmFjZVJhaXNlZDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCA5OSksCiAgICBib3JkZXI6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiAqIDAuOCwgODcpLAogICAgYm9yZGVyTGlnaHQ6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiAqIDAuNSwgOTIpLAogICAgdGV4dDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCA4KSwgLy8gRGFya2VyIGZvciBiZXR0ZXIgY29udHJhc3QKICAgIHRleHRMaWdodDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCAyOCksCiAgICB0ZXh0TXV0ZWQ6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgNDUpIC8vIEFkanVzdGVkIGZvciA0LjU6MSBvbiB3aGl0ZQogIH07Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlRGFya05ldXRyYWxzKHByaW1hcnlIZXgsIHN0eWxlID0gJ3dhcm0nKSB7CiAgY29uc3QgaHNsID0gaGV4VG9Ic2wocHJpbWFyeUhleCk7CiAgbGV0IGh1ZSA9IGhzbCA/IGhzbC5oIDogMjIwOwogIGxldCBzYXR1cmF0aW9uID0gMDsKCiAgaWYgKHN0eWxlID09PSAnd2FybScpIHsKICAgIHNhdHVyYXRpb24gPSA4OwogIH0gZWxzZSBpZiAoc3R5bGUgPT09ICdjb29sJykgewogICAgc2F0dXJhdGlvbiA9IDEwOwogIH0KCiAgcmV0dXJuIHsKICAgIGJnOiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIDYpLAogICAgYmdBbHQ6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgOSksCiAgICBiZ011dGVkOiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIDEzKSwKICAgIHN1cmZhY2U6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgMTEpLAogICAgc3VyZmFjZVJhaXNlZDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCAxNSksCiAgICBib3JkZXI6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiAqIDAuNiwgMjIpLAogICAgYm9yZGVyTGlnaHQ6IGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiAqIDAuNCwgMTgpLAogICAgdGV4dDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uICogMC4zLCA5NiksIC8vIEJyaWdodGVyIGZvciBjb250cmFzdAogICAgdGV4dExpZ2h0OiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24gKiAwLjMsIDc4KSwKICAgIHRleHRNdXRlZDogaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uICogMC4yLCA1NSkgLy8gNC41OjEgb24gZGFyayBiZwogIH07Cn0KCmZ1bmN0aW9uIGdlbmVyYXRlU2VtYW50aWNDb2xvcnMoKSB7CiAgcmV0dXJuIHsKICAgIHN1Y2Nlc3M6IGdlbmVyYXRlQ29sb3JTY2FsZSgnIzA1OTY2OScpLCAvLyBEYXJrZXIgZ3JlZW4KICAgIHdhcm5pbmc6IGdlbmVyYXRlQ29sb3JTY2FsZSgnI2Q5NzcwNicpLCAvLyBEYXJrZXIgYW1iZXIKICAgIGVycm9yOiBnZW5lcmF0ZUNvbG9yU2NhbGUoJyNkYzI2MjYnKSwgICAvLyBEYXJrZXIgcmVkCiAgICBpbmZvOiBnZW5lcmF0ZUNvbG9yU2NhbGUoJyMyNTYzZWInKSAgICAgLy8gRGFya2VyIGJsdWUKICB9Owp9CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBQQUxFVFRFIEdFTkVSQVRJT04KLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCmZ1bmN0aW9uIGdlbmVyYXRlUGFsZXR0ZSgpIHsKICBjb25zdCBjb2xvcnMgPSBzdGF0ZS5jb2xvcnM7CiAgaWYgKGNvbG9ycy5sZW5ndGggPCAyKSB7CiAgICBzaG93VG9hc3QoJ01pbmRlc3RlbnMgMiBGYXJiZW4gYmVuw7Z0aWd0Jyk7CiAgICByZXR1cm47CiAgfQoKICBjb25zdCBwcmltYXJ5ID0gY29sb3JzWzBdLmhleDsKICBjb25zdCBhY2NlbnQgPSBjb2xvcnNbMV0uaGV4OwogIGNvbnN0IHRlcnRpYXJ5ID0gY29sb3JzWzJdPy5oZXg7CiAgY29uc3QgcXVhdGVybmFyeSA9IGNvbG9yc1szXT8uaGV4OwoKICBjb25zdCBwYWxldHRlID0gewogICAgcHJpbWFyeTogZ2VuZXJhdGVDb2xvclNjYWxlKHByaW1hcnkpLAogICAgYWNjZW50OiBnZW5lcmF0ZUNvbG9yU2NhbGUoYWNjZW50KSwKICAgIG5ldXRyYWxzTGlnaHQ6IGdlbmVyYXRlTmV1dHJhbHMocHJpbWFyeSwgc3RhdGUub3B0aW9ucy5uZXV0cmFsU3R5bGUpLAogICAgZGVyaXZlZDoge30KICB9OwoKICBpZiAodGVydGlhcnkpIHsKICAgIHBhbGV0dGUudGVydGlhcnkgPSBnZW5lcmF0ZUNvbG9yU2NhbGUodGVydGlhcnkpOwogIH0KICBpZiAocXVhdGVybmFyeSkgewogICAgcGFsZXR0ZS5xdWF0ZXJuYXJ5ID0gZ2VuZXJhdGVDb2xvclNjYWxlKHF1YXRlcm5hcnkpOwogIH0KCiAgaWYgKHN0YXRlLm9wdGlvbnMuZGFya01vZGUpIHsKICAgIHBhbGV0dGUubmV1dHJhbHNEYXJrID0gZ2VuZXJhdGVEYXJrTmV1dHJhbHMocHJpbWFyeSwgc3RhdGUub3B0aW9ucy5uZXV0cmFsU3R5bGUpOwogIH0KCiAgaWYgKHN0YXRlLm9wdGlvbnMuc2VtYW50aWMpIHsKICAgIHBhbGV0dGUuc2VtYW50aWMgPSBnZW5lcmF0ZVNlbWFudGljQ29sb3JzKCk7CiAgfQoKICAvLyBHZW5lcmF0ZSBkZXJpdmVkIHRva2VucwogIGNvbnN0IHByaW1hcnlSZ2IgPSBoZXhUb1JnYihwYWxldHRlLnByaW1hcnlbNTAwXSk7CiAgY29uc3QgYWNjZW50UmdiID0gaGV4VG9SZ2IocGFsZXR0ZS5hY2NlbnRbNTAwXSk7CiAgCiAgcGFsZXR0ZS5kZXJpdmVkID0gewogICAgc2hhZG93Q29sb3I6IGAke3ByaW1hcnlSZ2Iucn0sICR7cHJpbWFyeVJnYi5nfSwgJHtwcmltYXJ5UmdiLmJ9YCwKICAgIHNoYWRvd1NtOiBgMCAxcHggMnB4IHJnYmEoJHtwcmltYXJ5UmdiLnJ9LCAke3ByaW1hcnlSZ2IuZ30sICR7cHJpbWFyeVJnYi5ifSwgMC4wNilgLAogICAgc2hhZG93TWQ6IGAwIDRweCAxMnB4IHJnYmEoJHtwcmltYXJ5UmdiLnJ9LCAke3ByaW1hcnlSZ2IuZ30sICR7cHJpbWFyeVJnYi5ifSwgMC4xKWAsCiAgICBzaGFkb3dMZzogYDAgMTJweCAzMnB4IHJnYmEoJHtwcmltYXJ5UmdiLnJ9LCAke3ByaW1hcnlSZ2IuZ30sICR7cHJpbWFyeVJnYi5ifSwgMC4xNSlgLAogICAgZ3JhZGllbnRQcmltYXJ5OiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwYWxldHRlLnByaW1hcnlbNTAwXX0gMCUsICR7cGFsZXR0ZS5wcmltYXJ5WzcwMF19IDEwMCUpYCwKICAgIGdyYWRpZW50QWNjZW50OiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwYWxldHRlLmFjY2VudFs1MDBdfSAwJSwgJHtwYWxldHRlLmFjY2VudFs2MDBdfSAxMDAlKWAsCiAgICBncmFkaWVudE1peGVkOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtwYWxldHRlLnByaW1hcnlbNTAwXX0gMCUsICR7cGFsZXR0ZS5hY2NlbnRbNTAwXX0gMTAwJSlgCiAgfTsKCiAgaWYgKHN0YXRlLm9wdGlvbnMuY29udHJhc3RDaGVjaykgewogICAgcGFsZXR0ZS5zZW1hbnRpY1Rva2VucyA9IGRlcml2ZVNlbWFudGljVG9rZW5zKHBhbGV0dGUsIHN0YXRlLm9wdGlvbnMpOwogIH0KCiAgc3RhdGUuZ2VuZXJhdGVkUGFsZXR0ZSA9IHBhbGV0dGU7CiAgcmVuZGVyUGFsZXR0ZShwYWxldHRlKTsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gUkVOREVSSU5HCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgpmdW5jdGlvbiByZW5kZXJQYWxldHRlKHBhbGV0dGUpIHsKICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFsZXR0ZU91dHB1dCcpOwogIGNvbnN0IGVtcHR5U3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wdHlTdGF0ZScpOwogIAogIGVtcHR5U3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsKICBvdXRwdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CgogIGxldCBodG1sID0gJyc7CgogIC8vIFByaW1hcnkgU2NhbGUKICBodG1sICs9IHJlbmRlckNvbG9yU2NhbGUoJ1ByaW1hcnkgU2NhbGUnLCBwYWxldHRlLnByaW1hcnksICdwcmltYXJ5Jyk7CiAgCiAgLy8gQWNjZW50IFNjYWxlCiAgaHRtbCArPSByZW5kZXJDb2xvclNjYWxlKCdBY2NlbnQgU2NhbGUnLCBwYWxldHRlLmFjY2VudCwgJ2FjY2VudCcpOwogIAogIC8vIFRlcnRpYXJ5L1F1YXRlcm5hcnkgaWYgcHJlc2VudAogIGlmIChwYWxldHRlLnRlcnRpYXJ5KSB7CiAgICBodG1sICs9IHJlbmRlckNvbG9yU2NhbGUoJ1RlcnRpYXJ5IFNjYWxlJywgcGFsZXR0ZS50ZXJ0aWFyeSwgJ3RlcnRpYXJ5Jyk7CiAgfQogIGlmIChwYWxldHRlLnF1YXRlcm5hcnkpIHsKICAgIGh0bWwgKz0gcmVuZGVyQ29sb3JTY2FsZSgnUXVhdGVybmFyeSBTY2FsZScsIHBhbGV0dGUucXVhdGVybmFyeSwgJ3F1YXRlcm5hcnknKTsKICB9CgogIC8vIE5ldXRyYWxzIExpZ2h0CiAgaHRtbCArPSByZW5kZXJOZXV0cmFscygnTmV1dHJhbHMgTGlnaHQgTW9kZScsIHBhbGV0dGUubmV1dHJhbHNMaWdodCk7CiAgCiAgLy8gTmV1dHJhbHMgRGFyawogIGlmIChwYWxldHRlLm5ldXRyYWxzRGFyaykgewogICAgaHRtbCArPSByZW5kZXJOZXV0cmFscygnTmV1dHJhbHMgRGFyayBNb2RlJywgcGFsZXR0ZS5uZXV0cmFsc0RhcmssIHRydWUpOwogIH0KCiAgLy8gU2VtYW50aWMgQ29sb3JzCiAgaWYgKHBhbGV0dGUuc2VtYW50aWMpIHsKICAgIGh0bWwgKz0gcmVuZGVyU2VtYW50aWNDb2xvcnMocGFsZXR0ZS5zZW1hbnRpYyk7CiAgfQoKICAvLyBMaXZlIFByZXZpZXcKICBodG1sICs9IHJlbmRlckxpdmVQcmV2aWV3KHBhbGV0dGUpOwoKICAvLyBDU1MgT3V0cHV0CiAgaHRtbCArPSByZW5kZXJDU1NPdXRwdXQocGFsZXR0ZSk7CgogIG91dHB1dC5pbm5lckhUTUwgPSBodG1sOwogIGF0dGFjaE91dHB1dExpc3RlbmVycygpOwp9CgpmdW5jdGlvbiByZW5kZXJDb2xvclNjYWxlKHRpdGxlLCBzY2FsZSwgbmFtZSkgewogIGNvbnN0IHNoYWRlcyA9IFsnNTAnLCAnMTAwJywgJzIwMCcsICczMDAnLCAnNDAwJywgJzUwMCcsICc2MDAnLCAnNzAwJywgJzgwMCcsICc5MDAnXTsKICAKICBsZXQgc3RlcHNIdG1sID0gc2hhZGVzLm1hcChzaGFkZSA9PiB7CiAgICBjb25zdCBjb2xvciA9IHNjYWxlW3NoYWRlXTsKICAgIGNvbnN0IHRleHRDb2xvciA9IGdldENvbnRyYXN0Q29sb3IoY29sb3IpOwogICAgY29uc3QgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0UmF0aW8oY29sb3IsIHRleHRDb2xvcikudG9GaXhlZCgxKTsKICAgIGNvbnN0IHdjYWdQYXNzID0gbWVldHNXQ0FHKGNvbG9yLCB0ZXh0Q29sb3IpOwogICAgCiAgICByZXR1cm4gYAogICAgICA8ZGl2IGNsYXNzPSJzdGVwIiBzdHlsZT0iYmFja2dyb3VuZDogJHtjb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07IiAKICAgICAgICAgICBkYXRhLWNvbG9yPSIke2NvbG9yfSIgdGl0bGU9IiR7Y29sb3J9IC0gS29udHJhc3Q6ICR7Y29udHJhc3RSYXRpb306MSI+CiAgICAgICAgPHNwYW4gY2xhc3M9InNoYWRlIj4ke3NoYWRlfTwvc3Bhbj4KICAgICAgICA8c3BhbiBjbGFzcz0iaGV4Ij4ke2NvbG9yfTwvc3Bhbj4KICAgICAgICAke3N0YXRlLm9wdGlvbnMuY29udHJhc3RDaGVjayA/IGAKICAgICAgICAgIDxzcGFuIGNsYXNzPSJjb250cmFzdC1iYWRnZSAke3djYWdQYXNzID8gJ3Bhc3MnIDogJ2ZhaWwnfSI+JHtjb250cmFzdFJhdGlvfToxPC9zcGFuPgogICAgICAgIGAgOiAnJ30KICAgICAgPC9kaXY+CiAgICBgOwogIH0pLmpvaW4oJycpOwoKICByZXR1cm4gYAogICAgPGRpdiBjbGFzcz0icGFsZXR0ZS1zZWN0aW9uIj4KICAgICAgPGRpdiBjbGFzcz0icGFsZXR0ZS10aXRsZSI+CiAgICAgICAgJHt0aXRsZX0KICAgICAgICA8c3BhbiBjbGFzcz0iYmFkZ2UiPjEwIFN0dWZlbjwvc3Bhbj4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbG9yLXNjYWxlIj4ke3N0ZXBzSHRtbH08L2Rpdj4KICAgIDwvZGl2PgogIGA7Cn0KCmZ1bmN0aW9uIHJlbmRlck5ldXRyYWxzKHRpdGxlLCBuZXV0cmFscywgaXNEYXJrID0gZmFsc2UpIHsKICBjb25zdCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKG5ldXRyYWxzKS5tYXAoKFtuYW1lLCBjb2xvcl0pID0+IHsKICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKS50cmltKCk7CiAgICByZXR1cm4gYAogICAgICA8ZGl2IGNsYXNzPSJuZXV0cmFsLWNhcmQiIGRhdGEtY29sb3I9IiR7Y29sb3J9Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJzd2F0Y2giIHN0eWxlPSJiYWNrZ3JvdW5kOiAke2NvbG9yfTsiPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im5hbWUiPiR7ZGlzcGxheU5hbWV9PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0idmFsdWUiPiR7Y29sb3J9PC9kaXY+CiAgICAgIDwvZGl2PgogICAgYDsKICB9KS5qb2luKCcnKTsKCiAgcmV0dXJuIGAKICAgIDxkaXYgY2xhc3M9InBhbGV0dGUtc2VjdGlvbiI+CiAgICAgIDxkaXYgY2xhc3M9InBhbGV0dGUtdGl0bGUiPgogICAgICAgICR7dGl0bGV9CiAgICAgICAgPHNwYW4gY2xhc3M9ImJhZGdlIj4ke09iamVjdC5rZXlzKG5ldXRyYWxzKS5sZW5ndGh9IFRva2Vuczwvc3Bhbj4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9Im5ldXRyYWxzLWdyaWQiPiR7aXRlbXN9PC9kaXY+CiAgICA8L2Rpdj4KICBgOwp9CgpmdW5jdGlvbiByZW5kZXJTZW1hbnRpY0NvbG9ycyhzZW1hbnRpYykgewogIGNvbnN0IGNvbG9ycyA9IFsKICAgIHsga2V5OiAnc3VjY2VzcycsIGxhYmVsOiAnU3VjY2VzcycsIGNvbG9yOiAnIzA1OTY2OScgfSwKICAgIHsga2V5OiAnd2FybmluZycsIGxhYmVsOiAnV2FybmluZycsIGNvbG9yOiAnI2Q5NzcwNicgfSwKICAgIHsga2V5OiAnZXJyb3InLCBsYWJlbDogJ0Vycm9yJywgY29sb3I6ICcjZGMyNjI2JyB9LAogICAgeyBrZXk6ICdpbmZvJywgbGFiZWw6ICdJbmZvJywgY29sb3I6ICcjMjU2M2ViJyB9CiAgXTsKCiAgY29uc3QgY2FyZHMgPSBjb2xvcnMubWFwKCh7IGtleSwgbGFiZWwsIGNvbG9yIH0pID0+IHsKICAgIGNvbnN0IHNjYWxlID0gc2VtYW50aWNba2V5XTsKICAgIGNvbnN0IHNjYWxlQ29sb3JzID0gWycyMDAnLCAnNDAwJywgJzUwMCcsICc2MDAnLCAnODAwJ10ubWFwKHMgPT4gCiAgICAgIGA8ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kOiAke3NjYWxlW3NdfTsiPjwvZGl2PmAKICAgICkuam9pbignJyk7CgogICAgcmV0dXJuIGAKICAgICAgPGRpdiBjbGFzcz0ic2VtYW50aWMtY2FyZCI+CiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImRvdCIgc3R5bGU9ImJhY2tncm91bmQ6ICR7c2NhbGVbNTAwXX07Ij48L2Rpdj4KICAgICAgICAgIDxzcGFuIGNsYXNzPSJsYWJlbCI+JHtsYWJlbH08L3NwYW4+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2NhbGUiPiR7c2NhbGVDb2xvcnN9PC9kaXY+CiAgICAgIDwvZGl2PgogICAgYDsKICB9KS5qb2luKCcnKTsKCiAgcmV0dXJuIGAKICAgIDxkaXYgY2xhc3M9InBhbGV0dGUtc2VjdGlvbiI+CiAgICAgIDxkaXYgY2xhc3M9InBhbGV0dGUtdGl0bGUiPgogICAgICAgIFNlbWFudGljIENvbG9ycwogICAgICAgIDxzcGFuIGNsYXNzPSJiYWRnZSI+NCBLYXRlZ29yaWVuPC9zcGFuPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0ic2VtYW50aWMtZ3JpZCI+JHtjYXJkc308L2Rpdj4KICAgIDwvZGl2PgogIGA7Cn0KCmZ1bmN0aW9uIHJlbmRlckxpdmVQcmV2aWV3KHBhbGV0dGUpIHsKICBjb25zdCBwID0gcGFsZXR0ZS5wcmltYXJ5OwogIGNvbnN0IGEgPSBwYWxldHRlLmFjY2VudDsKICBjb25zdCBubCA9IHBhbGV0dGUubmV1dHJhbHNMaWdodDsKICBjb25zdCBuZCA9IHBhbGV0dGUubmV1dHJhbHNEYXJrOwoKICAvLyBDYWxjdWxhdGUgcHJvcGVyIHRleHQgY29sb3JzIGZvciBidXR0b25zCiAgY29uc3QgcHJpbWFyeUJ0blRleHQgPSBnZXRDb250cmFzdENvbG9yKHBbNTAwXSk7CiAgY29uc3QgYWNjZW50QnRuVGV4dCA9IGdldENvbnRyYXN0Q29sb3IoYVs1MDBdKTsKICBjb25zdCBzZWNvbmRhcnlCdG5UZXh0ID0gZ2V0Q29udHJhc3RDb2xvcihubC5zdXJmYWNlKTsKCiAgcmV0dXJuIGAKICAgIDxkaXYgY2xhc3M9InBhbGV0dGUtc2VjdGlvbiBwcmV2aWV3LXNlY3Rpb24iPgogICAgICA8ZGl2IGNsYXNzPSJwYWxldHRlLXRpdGxlIj4KICAgICAgICDwn5SNIExpdmUgUHJldmlldwogICAgICAgICR7c3RhdGUub3B0aW9ucy5jb250cmFzdENoZWNrID8gJzxzcGFuIGNsYXNzPSJiYWRnZSI+V0NBRyBBQTwvc3Bhbj4nIDogJyd9CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJwcmV2aWV3LWNhcmRzIj4KICAgICAgICA8ZGl2IGNsYXNzPSJwcmV2aWV3LWNhcmQiIHN0eWxlPSJiYWNrZ3JvdW5kOiAke25sLnN1cmZhY2V9OyBjb2xvcjogJHtubC50ZXh0fTsgYm9yZGVyLWNvbG9yOiAke25sLmJvcmRlcn07Ij4KICAgICAgICAgIDxoNCBzdHlsZT0iY29sb3I6ICR7bmwudGV4dH07Ij5MaWdodCBNb2RlIENhcmQ8L2g0PgogICAgICAgICAgPHAgc3R5bGU9ImNvbG9yOiAke25sLnRleHRMaWdodH07Ij5EaWVzIGlzdCBlaW4gQmVpc3BpZWx0ZXh0IGluIGRlciBnZW5lcmllcnRlbiBGYXJicGFsZXR0ZS48L3A+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJidG4tcm93Ij4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIiBzdHlsZT0iYmFja2dyb3VuZDogJHtwWzUwMF19OyBjb2xvcjogJHtwcmltYXJ5QnRuVGV4dH07Ij5QcmltYXJ5IEJ1dHRvbjwvYnV0dG9uPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4iIHN0eWxlPSJiYWNrZ3JvdW5kOiAke2FbNTAwXX07IGNvbG9yOiAke2FjY2VudEJ0blRleHR9OyI+QWNjZW50IEJ1dHRvbjwvYnV0dG9uPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4iIHN0eWxlPSJiYWNrZ3JvdW5kOiAke25sLnN1cmZhY2V9OyBjb2xvcjogJHtubC50ZXh0fTsgYm9yZGVyOiAxcHggc29saWQgJHtubC5ib3JkZXJ9OyI+U2Vjb25kYXJ5IEJ1dHRvbjwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgJHtuZCA/IGAKICAgICAgICA8ZGl2IGNsYXNzPSJwcmV2aWV3LWNhcmQiIHN0eWxlPSJiYWNrZ3JvdW5kOiAke25kLnN1cmZhY2V9OyBjb2xvcjogJHtuZC50ZXh0fTsgYm9yZGVyLWNvbG9yOiAke25kLmJvcmRlcn07Ij4KICAgICAgICAgIDxoNCBzdHlsZT0iY29sb3I6ICR7bmQudGV4dH07Ij5EYXJrIE1vZGUgQ2FyZDwvaDQ+CiAgICAgICAgICA8cCBzdHlsZT0iY29sb3I6ICR7bmQudGV4dExpZ2h0fTsiPkRpZXMgaXN0IGVpbiBCZWlzcGllbHRleHQgaW4gZGVyIGdlbmVyaWVydGVuIEZhcmJwYWxldHRlLjwvcD4KICAgICAgICAgIDxkaXYgY2xhc3M9ImJ0bi1yb3ciPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4iIHN0eWxlPSJiYWNrZ3JvdW5kOiAke3BbNTAwXX07IGNvbG9yOiAke3ByaW1hcnlCdG5UZXh0fTsiPlByaW1hcnkgQnV0dG9uPC9idXR0b24+CiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0biIgc3R5bGU9ImJhY2tncm91bmQ6ICR7YVs1MDBdfTsgY29sb3I6ICR7YWNjZW50QnRuVGV4dH07Ij5BY2NlbnQgQnV0dG9uPC9idXR0b24+CiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0biIgc3R5bGU9ImJhY2tncm91bmQ6ICR7bmQuc3VyZmFjZX07IGNvbG9yOiAke25kLnRleHR9OyBib3JkZXI6IDFweCBzb2xpZCAke25kLmJvcmRlcn07Ij5TZWNvbmRhcnkgQnV0dG9uPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICBgIDogJyd9CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgYDsKfQoKZnVuY3Rpb24gcmVuZGVyQ1NTT3V0cHV0KHBhbGV0dGUpIHsKICBjb25zdCBjc3MgPSBnZW5lcmF0ZUNTU1ZhcmlhYmxlcyhwYWxldHRlKTsKICAKICByZXR1cm4gYAogICAgPGRpdiBjbGFzcz0icGFsZXR0ZS1zZWN0aW9uIj4KICAgICAgPGRpdiBjbGFzcz0iY3NzLW91dHB1dCI+CiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgICAgICAgIDxoMz7wn5OLIENTUyBWYXJpYWJsZXM8L2gzPgogICAgICAgICAgPGRpdiBjbGFzcz0iYWN0aW9ucyI+CiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz0iY29weUNTUygpIj5Lb3BpZXJlbjwvYnV0dG9uPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJwcmltYXJ5IiBvbmNsaWNrPSJkb3dubG9hZENTUygpIj5Eb3dubG9hZDwvYnV0dG9uPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJwcmltYXJ5IiBvbmNsaWNrPSJhcHBseVRvQnVpbGRlcigpIj5JbiBCdWlsZGVyIMO8YmVybmVobWVuPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8cHJlPjxjb2RlPiR7ZXNjYXBlSHRtbChjc3MpfTwvY29kZT48L3ByZT4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICBgOwp9CgpmdW5jdGlvbiBnZW5lcmF0ZUNTU1ZhcmlhYmxlcyhwYWxldHRlKSB7CiAgbGV0IGNzcyA9IGAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIENPTE9SIFNUQUNLIC0gR2VuZXJhdGVkIGJ5IENvbG9yIFN0YWNrIEdlbmVyYXRvciB2MgogICBXQ0FHIDIuMiBBQSBDb21wbGlhbnQKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwoKOnJvb3QgewogIC8qIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogICAgIFBSSU1BUlkgU0NBTEUKICAgICDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi8KYDsKCiAgLy8gUHJpbWFyeQogIE9iamVjdC5lbnRyaWVzKHBhbGV0dGUucHJpbWFyeSkuZm9yRWFjaCgoW3NoYWRlLCBjb2xvcl0pID0+IHsKICAgIGNzcyArPSBgICAtLWMtcHJpbWFyeS0ke3NoYWRlfTogJHtjb2xvcn07XG5gOwogIH0pOwogIGNzcyArPSBgICAtLWMtcHJpbWFyeTogdmFyKC0tYy1wcmltYXJ5LTUwMCk7XG5gOwogIGNzcyArPSBgICAtLWMtcHJpbWFyeS1yZ2I6ICR7aGV4VG9SZ2IocGFsZXR0ZS5wcmltYXJ5WzUwMF0pLnJ9LCAke2hleFRvUmdiKHBhbGV0dGUucHJpbWFyeVs1MDBdKS5nfSwgJHtoZXhUb1JnYihwYWxldHRlLnByaW1hcnlbNTAwXSkuYn07XG5cbmA7CgogIC8vIEFjY2VudAogIGNzcyArPSBgICAvKiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAKICAgICBBQ0NFTlQgU0NBTEUKICAgICDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbmA7CiAgT2JqZWN0LmVudHJpZXMocGFsZXR0ZS5hY2NlbnQpLmZvckVhY2goKFtzaGFkZSwgY29sb3JdKSA9PiB7CiAgICBjc3MgKz0gYCAgLS1jLWFjY2VudC0ke3NoYWRlfTogJHtjb2xvcn07XG5gOwogIH0pOwogIGNzcyArPSBgICAtLWMtYWNjZW50OiB2YXIoLS1jLWFjY2VudC01MDApO1xuYDsKICBjc3MgKz0gYCAgLS1jLWFjY2VudC1yZ2I6ICR7aGV4VG9SZ2IocGFsZXR0ZS5hY2NlbnRbNTAwXSkucn0sICR7aGV4VG9SZ2IocGFsZXR0ZS5hY2NlbnRbNTAwXSkuZ30sICR7aGV4VG9SZ2IocGFsZXR0ZS5hY2NlbnRbNTAwXSkuYn07XG5cbmA7CgogIC8vIFRlcnRpYXJ5L1F1YXRlcm5hcnkKICBpZiAocGFsZXR0ZS50ZXJ0aWFyeSkgewogICAgY3NzICs9IGAgIC8qIFRFUlRJQVJZIFNDQUxFICovXG5gOwogICAgT2JqZWN0LmVudHJpZXMocGFsZXR0ZS50ZXJ0aWFyeSkuZm9yRWFjaCgoW3NoYWRlLCBjb2xvcl0pID0+IHsKICAgICAgY3NzICs9IGAgIC0tYy10ZXJ0aWFyeS0ke3NoYWRlfTogJHtjb2xvcn07XG5gOwogICAgfSk7CiAgICBjc3MgKz0gYFxuYDsKICB9CgogIC8vIE5ldXRyYWxzIExpZ2h0CiAgY3NzICs9IGAgIC8qIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogICAgIE5FVVRSQUxTIChMaWdodCBNb2RlKQogICAgIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuYDsKICBPYmplY3QuZW50cmllcyhwYWxldHRlLm5ldXRyYWxzTGlnaHQpLmZvckVhY2goKFtuYW1lLCBjb2xvcl0pID0+IHsKICAgIGNvbnN0IHZhck5hbWUgPSBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKCk7CiAgICBjc3MgKz0gYCAgLS1jLSR7dmFyTmFtZX06ICR7Y29sb3J9O1xuYDsKICB9KTsKICBjc3MgKz0gYFxuYDsKCiAgLy8gTmV1dHJhbHMgRGFyawogIGlmIChwYWxldHRlLm5ldXRyYWxzRGFyaykgewogICAgY3NzICs9IGAgIC8qIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogICAgIE5FVVRSQUxTIChEYXJrIE1vZGUpIC0gdXNlIGluIC5kYXJrIGNsYXNzCiAgICAg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5gOwogICAgT2JqZWN0LmVudHJpZXMocGFsZXR0ZS5uZXV0cmFsc0RhcmspLmZvckVhY2goKFtuYW1lLCBjb2xvcl0pID0+IHsKICAgICAgY29uc3QgdmFyTmFtZSA9IG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKTsKICAgICAgY3NzICs9IGAgIC0tYy1kYXJrLSR7dmFyTmFtZX06ICR7Y29sb3J9O1xuYDsKICAgIH0pOwogICAgY3NzICs9IGBcbmA7CiAgfQoKICAvLyBTZW1hbnRpYwogIGlmIChwYWxldHRlLnNlbWFudGljKSB7CiAgICBjc3MgKz0gYCAgLyog4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSACiAgICAgU0VNQU5USUMgQ09MT1JTCiAgICAg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXG5gOwogICAgWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnaW5mbyddLmZvckVhY2godHlwZSA9PiB7CiAgICAgIGNzcyArPSBgICAtLWMtJHt0eXBlfTogJHtwYWxldHRlLnNlbWFudGljW3R5cGVdWzUwMF19O1xuYDsKICAgICAgY3NzICs9IGAgIC0tYy0ke3R5cGV9LWxpZ2h0OiAke3BhbGV0dGUuc2VtYW50aWNbdHlwZV1bMTAwXX07XG5gOwogICAgICBjc3MgKz0gYCAgLS1jLSR7dHlwZX0tZGFyazogJHtwYWxldHRlLnNlbWFudGljW3R5cGVdWzcwMF19O1xuYDsKICAgIH0pOwogICAgY3NzICs9IGBcbmA7CiAgfQoKICAvLyBEZXJpdmVkCiAgY3NzICs9IGAgIC8qIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgAogICAgIFNIQURPV1MgJiBHUkFESUVOVFMKICAgICDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cbmA7CiAgY3NzICs9IGAgIC0tc2hhZG93LWNvbG9yOiAke3BhbGV0dGUuZGVyaXZlZC5zaGFkb3dDb2xvcn07XG5gOwogIGNzcyArPSBgICAtLXNoYWRvdy1zbTogJHtwYWxldHRlLmRlcml2ZWQuc2hhZG93U219O1xuYDsKICBjc3MgKz0gYCAgLS1zaGFkb3ctbWQ6ICR7cGFsZXR0ZS5kZXJpdmVkLnNoYWRvd01kfTtcbmA7CiAgY3NzICs9IGAgIC0tc2hhZG93LWxnOiAke3BhbGV0dGUuZGVyaXZlZC5zaGFkb3dMZ307XG5gOwogIGNzcyArPSBgICAtLWdyYWRpZW50LXByaW1hcnk6ICR7cGFsZXR0ZS5kZXJpdmVkLmdyYWRpZW50UHJpbWFyeX07XG5gOwogIGNzcyArPSBgICAtLWdyYWRpZW50LWFjY2VudDogJHtwYWxldHRlLmRlcml2ZWQuZ3JhZGllbnRBY2NlbnR9O1xuYDsKICBjc3MgKz0gYCAgLS1ncmFkaWVudC1taXhlZDogJHtwYWxldHRlLmRlcml2ZWQuZ3JhZGllbnRNaXhlZH07XG5gOwoKICBjc3MgKz0gYH1cblxuYDsKCiAgLy8gRGFyayBtb2RlIGNsYXNzCiAgaWYgKHBhbGV0dGUubmV1dHJhbHNEYXJrKSB7CiAgICBjc3MgKz0gYC8qIERhcmsgTW9kZSBPdmVycmlkZSAqL1xuLmRhcmsge1xuYDsKICAgIE9iamVjdC5lbnRyaWVzKHBhbGV0dGUubmV1dHJhbHNEYXJrKS5mb3JFYWNoKChbbmFtZSwgY29sb3JdKSA9PiB7CiAgICAgIGNvbnN0IHZhck5hbWUgPSBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKCk7CiAgICAgIGNzcyArPSBgICAtLWMtJHt2YXJOYW1lfTogJHtjb2xvcn07XG5gOwogICAgfSk7CiAgICBjc3MgKz0gYH1cbmA7CiAgfQoKICByZXR1cm4gY3NzOwp9CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBVSSBJTlRFUkFDVElPTlMKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCmZ1bmN0aW9uIHJlbmRlckNvbG9ySW5wdXRzKCkgewogIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcklucHV0cycpOwogIGNvbnN0IGxhYmVscyA9IFsnUHJpbWFyeScsICdBY2NlbnQnLCAnVGVydGlhcnknLCAnUXVhdGVybmFyeSddOwogIAogIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdGF0ZS5jb2xvcnMubWFwKChjb2xvciwgaSkgPT4gYAogICAgPGRpdiBjbGFzcz0iY29sb3ItaW5wdXQtcm93IiBkYXRhLWlkPSIke2NvbG9yLmlkfSI+CiAgICAgIDxpbnB1dCB0eXBlPSJjb2xvciIgY2xhc3M9ImNvbG9yLXN3YXRjaCIgdmFsdWU9IiR7Y29sb3IuaGV4fSIgCiAgICAgICAgICAgICBvbmNoYW5nZT0idXBkYXRlQ29sb3IoJHtjb2xvci5pZH0sIHRoaXMudmFsdWUpIgogICAgICAgICAgICAgYXJpYS1sYWJlbD0iJHtsYWJlbHNbaV19IEZhcmJlIHfDpGhsZW4iPgogICAgICA8c3BhbiBjbGFzcz0ibGFiZWwiPiR7bGFiZWxzW2ldfTwvc3Bhbj4KICAgICAgPGlucHV0IHR5cGU9InRleHQiIHZhbHVlPSIke2NvbG9yLmhleH0iIAogICAgICAgICAgICAgb25jaGFuZ2U9InVwZGF0ZUNvbG9yKCR7Y29sb3IuaWR9LCB0aGlzLnZhbHVlKSIKICAgICAgICAgICAgIHBhdHRlcm49Il4jWzAtOUEtRmEtZl17Nn0kIgogICAgICAgICAgICAgYXJpYS1sYWJlbD0iJHtsYWJlbHNbaV19IEhleC1XZXJ0Ij4KICAgICAgJHtpID4gMSA/IGA8YnV0dG9uIGNsYXNzPSJyZW1vdmUtYnRuIiBvbmNsaWNrPSJyZW1vdmVDb2xvcigke2NvbG9yLmlkfSkiIGFyaWEtbGFiZWw9IkZhcmJlIGVudGZlcm5lbiI+w5c8L2J1dHRvbj5gIDogJyd9CiAgICA8L2Rpdj4KICBgKS5qb2luKCcnKTsKICAKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQ29sb3JCdG4nKS5kaXNhYmxlZCA9IHN0YXRlLmNvbG9ycy5sZW5ndGggPj0gNDsKfQoKZnVuY3Rpb24gdXBkYXRlQ29sb3IoaWQsIGhleCkgewogIGlmICghL14jWzAtOUEtRmEtZl17Nn0kLy50ZXN0KGhleCkpIHJldHVybjsKICBjb25zdCBjb2xvciA9IHN0YXRlLmNvbG9ycy5maW5kKGMgPT4gYy5pZCA9PT0gaWQpOwogIGlmIChjb2xvcikgewogICAgY29sb3IuaGV4ID0gaGV4OwogICAgcmVuZGVyQ29sb3JJbnB1dHMoKTsKICB9Cn0KCmZ1bmN0aW9uIGFkZENvbG9yKCkgewogIGlmIChzdGF0ZS5jb2xvcnMubGVuZ3RoID49IDQpIHJldHVybjsKICBjb25zdCBsYWJlbHMgPSBbJ1ByaW1hcnknLCAnQWNjZW50JywgJ1RlcnRpYXJ5JywgJ1F1YXRlcm5hcnknXTsKICBzdGF0ZS5jb2xvcnMucHVzaCh7CiAgICBpZDogY29sb3JJZENvdW50ZXIrKywKICAgIGxhYmVsOiBsYWJlbHNbc3RhdGUuY29sb3JzLmxlbmd0aF0sCiAgICBoZXg6ICcjNjM2NmYxJwogIH0pOwogIHJlbmRlckNvbG9ySW5wdXRzKCk7Cn0KCmZ1bmN0aW9uIHJlbW92ZUNvbG9yKGlkKSB7CiAgc3RhdGUuY29sb3JzID0gc3RhdGUuY29sb3JzLmZpbHRlcihjID0+IGMuaWQgIT09IGlkKTsKICByZW5kZXJDb2xvcklucHV0cygpOwp9CgovLyBUb2dnbGUgZnVuY3Rpb25hbGl0eQpmdW5jdGlvbiBzZXR1cFRvZ2dsZXMoKSB7CiAgWydkYXJrTW9kZVRvZ2dsZScsICdzZW1hbnRpY1RvZ2dsZScsICdjb250cmFzdFRvZ2dsZSddLmZvckVhY2goaWQgPT4gewogICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOwogICAgY29uc3Qgb3B0aW9uS2V5ID0gaWQucmVwbGFjZSgnVG9nZ2xlJywgJycpLnJlcGxhY2UoJ01vZGUnLCAnTW9kZScpOwogICAgCiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTsKICAgICAgY29uc3QgaXNBY3RpdmUgPSB0b2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTsKICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgaXNBY3RpdmUpOwogICAgICAKICAgICAgaWYgKGlkID09PSAnZGFya01vZGVUb2dnbGUnKSBzdGF0ZS5vcHRpb25zLmRhcmtNb2RlID0gaXNBY3RpdmU7CiAgICAgIGVsc2UgaWYgKGlkID09PSAnc2VtYW50aWNUb2dnbGUnKSBzdGF0ZS5vcHRpb25zLnNlbWFudGljID0gaXNBY3RpdmU7CiAgICAgIGVsc2UgaWYgKGlkID09PSAnY29udHJhc3RUb2dnbGUnKSBzdGF0ZS5vcHRpb25zLmNvbnRyYXN0Q2hlY2sgPSBpc0FjdGl2ZTsKICAgIH0pOwogICAgCiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7CiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7CiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOwogICAgICAgIHRvZ2dsZS5jbGljaygpOwogICAgICB9CiAgICB9KTsKICB9KTsKfQoKLy8gRmlsZSB1cGxvYWQKZnVuY3Rpb24gc2V0dXBGaWxlVXBsb2FkKCkgewogIGNvbnN0IHpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkWm9uZScpOwogIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVJbnB1dCcpOwogIAogIHpvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBpbnB1dC5jbGljaygpKTsKICB6b25lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gewogICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHsKICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOwogICAgICBpbnB1dC5jbGljaygpOwogICAgfQogIH0pOwoKICAvLyBSb2J1c3QgZHJhZyAmIGRyb3AgKG5vIGZsaWNrZXIgLyBubyBzdGlja3kgc3RhdGVzKQogIGxldCBkcmFnQ291bnRlciA9IDA7CgogIHpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGUpID0+IHsKICAgIGUucHJldmVudERlZmF1bHQoKTsKICAgIGRyYWdDb3VudGVyICs9IDE7CiAgICB6b25lLmNsYXNzTGlzdC5hZGQoJ2RyYWdvdmVyJyk7CiAgfSk7CgogIHpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gewogICAgZS5wcmV2ZW50RGVmYXVsdCgpOwogICAgdHJ5IHsgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JzsgfSBjYXRjaChlcnIpIHt9CiAgICB6b25lLmNsYXNzTGlzdC5hZGQoJ2RyYWdvdmVyJyk7CiAgfSk7CgogIHpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHsKICAgIGRyYWdDb3VudGVyIC09IDE7CiAgICBpZiAoZHJhZ0NvdW50ZXIgPD0gMCkgewogICAgICBkcmFnQ291bnRlciA9IDA7CiAgICAgIHpvbmUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTsKICAgIH0KICB9KTsKCiAgem9uZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHsKICAgIGUucHJldmVudERlZmF1bHQoKTsKICAgIGRyYWdDb3VudGVyID0gMDsKICAgIHpvbmUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTsKICAgIGlmIChlLmRhdGFUcmFuc2ZlciAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcyAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHsKICAgICAgaGFuZGxlRmlsZShlLmRhdGFUcmFuc2Zlci5maWxlc1swXSk7CiAgICB9CiAgfSk7CgogIAogIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsKICAgIGlmIChpbnB1dC5maWxlcy5sZW5ndGgpIHsKICAgICAgaGFuZGxlRmlsZShpbnB1dC5maWxlc1swXSk7CiAgICB9CiAgfSk7Cn0KCmZ1bmN0aW9uIGhhbmRsZUZpbGUoZmlsZSkgewogIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7CiAgICBzaG93VG9hc3QoJ051ciBCaWxkZGF0ZWllbiBlcmxhdWJ0Jyk7CiAgICByZXR1cm47CiAgfQogIAogIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7CiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTsKICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSW1nJykuc3JjID0gZS50YXJnZXQucmVzdWx0OwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZU5hbWUnKS50ZXh0Q29udGVudCA9IGZpbGUubmFtZTsKICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ29QcmV2aWV3JykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpOwogICAgICAKICAgICAgY29uc3QgY29sb3JzID0gZXh0cmFjdENvbG9yc0Zyb21JbWFnZShpbWcpOwogICAgICBzdGF0ZS5leHRyYWN0ZWRDb2xvcnMgPSBjb2xvcnM7CiAgICAgIHJlbmRlckV4dHJhY3RlZENvbG9ycyhjb2xvcnMpOwogICAgfTsKICAgIGltZy5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7CiAgfTsKICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsKfQoKZnVuY3Rpb24gZXh0cmFjdENvbG9yc0Zyb21JbWFnZShpbWcsIG51bUNvbG9ycyA9IDgpIHsKICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKICAKICBjb25zdCBtYXhTaXplID0gMTAwOwogIGNvbnN0IHNjYWxlID0gTWF0aC5taW4obWF4U2l6ZSAvIGltZy53aWR0aCwgbWF4U2l6ZSAvIGltZy5oZWlnaHQsIDEpOwogIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlOwogIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogc2NhbGU7CiAgCiAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7CiAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOwogIGNvbnN0IHBpeGVscyA9IGltYWdlRGF0YS5kYXRhOwoKICBjb25zdCBjb2xvck1hcCA9IHt9OwogIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSArPSA0KSB7CiAgICBjb25zdCByID0gTWF0aC5yb3VuZChwaXhlbHNbaV0gLyAzMikgKiAzMjsKICAgIGNvbnN0IGcgPSBNYXRoLnJvdW5kKHBpeGVsc1tpICsgMV0gLyAzMikgKiAzMjsKICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKHBpeGVsc1tpICsgMl0gLyAzMikgKiAzMjsKICAgIGNvbnN0IGEgPSBwaXhlbHNbaSArIDNdOwogICAgCiAgICBpZiAoYSA8IDEyOCkgY29udGludWU7CiAgICAKICAgIGNvbnN0IGtleSA9IGAke3J9LCR7Z30sJHtifWA7CiAgICBjb2xvck1hcFtrZXldID0gKGNvbG9yTWFwW2tleV0gfHwgMCkgKyAxOwogIH0KCiAgY29uc3Qgc29ydGVkID0gT2JqZWN0LmVudHJpZXMoY29sb3JNYXApCiAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pCiAgICAuc2xpY2UoMCwgbnVtQ29sb3JzICogMik7CgogIGNvbnN0IGNvbG9ycyA9IFtdOwogIGZvciAoY29uc3QgW2tleV0gb2Ygc29ydGVkKSB7CiAgICBjb25zdCBbciwgZywgYl0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTsKICAgIGNvbnN0IGhleCA9IHJnYlRvSGV4KHIsIGcsIGIpOwogICAgY29uc3QgaHNsID0gaGV4VG9Ic2woaGV4KTsKICAgIAogICAgLy8gRmlsdGVyIG91dCBuZWFyLXdoaXRlIGFuZCBuZWFyLWJsYWNrCiAgICBpZiAoaHNsLmwgPiA5MCB8fCBoc2wubCA8IDEwKSBjb250aW51ZTsKICAgIC8vIEZpbHRlciBkdXBsaWNhdGVzCiAgICBpZiAoY29sb3JzLnNvbWUoYyA9PiBnZXRDb250cmFzdFJhdGlvKGMsIGhleCkgPCAxLjUpKSBjb250aW51ZTsKICAgIAogICAgY29sb3JzLnB1c2goaGV4KTsKICAgIGlmIChjb2xvcnMubGVuZ3RoID49IG51bUNvbG9ycykgYnJlYWs7CiAgfQoKICByZXR1cm4gY29sb3JzOwp9CgpmdW5jdGlvbiByZW5kZXJFeHRyYWN0ZWRDb2xvcnMoY29sb3JzKSB7CiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4dHJhY3RlZENvbG9ycycpOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYWN0ZWRDb3VudCcpLnRleHRDb250ZW50ID0gYCR7Y29sb3JzLmxlbmd0aH0gRmFyYmVuIGV4dHJhaGllcnRgOwogIAogIGNvbnRhaW5lci5pbm5lckhUTUwgPSBjb2xvcnMubWFwKGNvbG9yID0+IGAKICAgIDxkaXYgY2xhc3M9ImV4dHJhY3RlZC1jb2xvciIgc3R5bGU9ImJhY2tncm91bmQ6ICR7Y29sb3J9OyIgCiAgICAgICAgIGRhdGEtY29sb3I9IiR7Y29sb3J9IiAKICAgICAgICAgb25jbGljaz0idG9nZ2xlRXh0cmFjdGVkQ29sb3IoJyR7Y29sb3J9JykiCiAgICAgICAgIHJvbGU9ImJ1dHRvbiIKICAgICAgICAgYXJpYS1wcmVzc2VkPSJmYWxzZSIKICAgICAgICAgYXJpYS1sYWJlbD0iRmFyYmUgJHtjb2xvcn0gYXVzd8OkaGxlbiI+CiAgICA8L2Rpdj4KICBgKS5qb2luKCcnKTsKICAKICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpOwp9CgpmdW5jdGlvbiB0b2dnbGVFeHRyYWN0ZWRDb2xvcihoZXgpIHsKICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5leHRyYWN0ZWQtY29sb3JbZGF0YS1jb2xvcj0iJHtoZXh9Il1gKTsKICBjb25zdCBpc1NlbGVjdGVkID0gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTsKICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGlzU2VsZWN0ZWQpOwogIAogIGlmIChpc1NlbGVjdGVkKSB7CiAgICBzdGF0ZS5zZWxlY3RlZEV4dHJhY3RlZC5wdXNoKGhleCk7CiAgICBpZiAoc3RhdGUuY29sb3JzLmxlbmd0aCA8IDQpIHsKICAgICAgY29uc3QgbGFiZWxzID0gWydQcmltYXJ5JywgJ0FjY2VudCcsICdUZXJ0aWFyeScsICdRdWF0ZXJuYXJ5J107CiAgICAgIHN0YXRlLmNvbG9ycy5wdXNoKHsKICAgICAgICBpZDogY29sb3JJZENvdW50ZXIrKywKICAgICAgICBsYWJlbDogbGFiZWxzW3N0YXRlLmNvbG9ycy5sZW5ndGhdLAogICAgICAgIGhleDogaGV4CiAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgLy8gUmVwbGFjZSBsYXN0IGNvbG9yCiAgICAgIHN0YXRlLmNvbG9yc1tzdGF0ZS5jb2xvcnMubGVuZ3RoIC0gMV0uaGV4ID0gaGV4OwogICAgfQogIH0gZWxzZSB7CiAgICBzdGF0ZS5zZWxlY3RlZEV4dHJhY3RlZCA9IHN0YXRlLnNlbGVjdGVkRXh0cmFjdGVkLmZpbHRlcihjID0+IGMgIT09IGhleCk7CiAgICBzdGF0ZS5jb2xvcnMgPSBzdGF0ZS5jb2xvcnMuZmlsdGVyKGMgPT4gYy5oZXggIT09IGhleCk7CiAgICBpZiAoc3RhdGUuY29sb3JzLmxlbmd0aCA8IDIpIHsKICAgICAgc3RhdGUuY29sb3JzLnB1c2goewogICAgICAgIGlkOiBjb2xvcklkQ291bnRlcisrLAogICAgICAgIGxhYmVsOiAnQWNjZW50JywKICAgICAgICBoZXg6ICcjY2E4YTA0JwogICAgICB9KTsKICAgIH0KICB9CiAgCiAgcmVuZGVyQ29sb3JJbnB1dHMoKTsKfQoKZnVuY3Rpb24gYXR0YWNoT3V0cHV0TGlzdGVuZXJzKCkgewogIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbG9yXScpLmZvckVhY2goZWwgPT4gewogICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIGNvbnN0IGNvbG9yID0gZWwuZGF0YXNldC5jb2xvcjsKICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29sb3IpOwogICAgICBzaG93VG9hc3QoYCR7Y29sb3J9IGtvcGllcnQhYCk7CiAgICB9KTsKICB9KTsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gVVRJTElUSUVTCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgpmdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZSkgewogIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0Jyk7CiAgdG9hc3QudGV4dENvbnRlbnQgPSBtZXNzYWdlOwogIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTsKICBzZXRUaW1lb3V0KCgpID0+IHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKSwgMjAwMCk7Cn0KCmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7CiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bJjw+IiddL2csIG0gPT4gKHsKICAgICcmJzogJyZhbXA7JywgJzwnOiAnJmx0OycsICc+JzogJyZndDsnLCAnIic6ICcmcXVvdDsnLCAiJyI6ICcmIzM5OycKICB9W21dKSk7Cn0KCmZ1bmN0aW9uIGNvcHlDU1MoKSB7CiAgY29uc3QgY3NzID0gZ2VuZXJhdGVDU1NWYXJpYWJsZXMoc3RhdGUuZ2VuZXJhdGVkUGFsZXR0ZSk7CiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY3NzKTsKICBzaG93VG9hc3QoJ0NTUyBrb3BpZXJ0IScpOwp9CgpmdW5jdGlvbiBkb3dubG9hZENTUygpIHsKICBjb25zdCBjc3MgPSBnZW5lcmF0ZUNTU1ZhcmlhYmxlcyhzdGF0ZS5nZW5lcmF0ZWRQYWxldHRlKTsKICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogJ3RleHQvY3NzJyB9KTsKICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpOwogIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7CiAgYS5ocmVmID0gdXJsOwogIGEuZG93bmxvYWQgPSAnY29sb3Itc3RhY2suY3NzJzsKICBhLmNsaWNrKCk7CiAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpOwogIHNob3dUb2FzdCgnQ1NTIGhlcnVudGVyZ2VsYWRlbiEnKTsKfQoKCmZ1bmN0aW9uIGFwcGx5VG9CdWlsZGVyKCkgewogIGlmICghc3RhdGUuZ2VuZXJhdGVkUGFsZXR0ZSkgewogICAgc2hvd1RvYXN0KCdCaXR0ZSB6dWVyc3QgZWluZSBQYWxldHRlIGdlbmVyaWVyZW4nKTsKICAgIHJldHVybjsKICB9CiAgaWYgKCF3aW5kb3cucGFyZW50IHx8IHdpbmRvdy5wYXJlbnQgPT09IHdpbmRvdykgewogICAgc2hvd1RvYXN0KCfDlmZmbmUgZGVuIEdlbmVyYXRvciBpbSBCdWlsZGVyIChNb2RhbCkgdW0genUgw7xiZXJuZWhtZW4nKTsKICAgIHJldHVybjsKICB9CgogIGNvbnN0IHAgPSBzdGF0ZS5nZW5lcmF0ZWRQYWxldHRlOwogIGNvbnN0IHBheWxvYWQgPSB7CiAgICBwYWxldHRlOiBwLAogICAgb3B0aW9uczogc3RhdGUub3B0aW9ucywKICAgIGNvbG9yczogc3RhdGUuY29sb3JzLAogICAgcmVjb21tZW5kZWQ6IHsKICAgICAgcHJpbWFyeTUwMDogcC5wcmltYXJ5ICYmIHAucHJpbWFyeVs1MDBdID8gcC5wcmltYXJ5WzUwMF0gOiBudWxsLAogICAgICBhY2NlbnQ1MDA6IHAuYWNjZW50ICYmIHAuYWNjZW50WzUwMF0gPyBwLmFjY2VudFs1MDBdIDogbnVsbAogICAgfQogIH07CgogIHRyeSB7CiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgdHlwZTogJ3NiLWNvbG9yLXN0YWNrJywgcGF5bG9hZCB9LCAnKicpOwogICAgc2hvd1RvYXN0KCdQYWxldHRlIGFuIEJ1aWxkZXIgZ2VzZW5kZXQnKTsKICB9IGNhdGNoIChlKSB7CiAgICBzaG93VG9hc3QoJ1NlbmRlbiBmZWhsZ2VzY2hsYWdlbicpOwogIH0KfQoKCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIElOSVQKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7CiAgcmVuZGVyQ29sb3JJbnB1dHMoKTsKICBzZXR1cFRvZ2dsZXMoKTsKICBzZXR1cEZpbGVVcGxvYWQoKTsKICAKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQ29sb3JCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENvbG9yKTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUGFsZXR0ZSk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUxvZ29CdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvUHJldmlldycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYWN0ZWRDb2xvcnMnKS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZUlucHV0JykudmFsdWUgPSAnJzsKICAgIHN0YXRlLmV4dHJhY3RlZENvbG9ycyA9IFtdOwogICAgc3RhdGUuc2VsZWN0ZWRFeHRyYWN0ZWQgPSBbXTsKICB9KTsKICAKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV1dHJhbFN0eWxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHsKICAgIHN0YXRlLm9wdGlvbnMubmV1dHJhbFN0eWxlID0gZS50YXJnZXQudmFsdWU7CiAgfSk7Cn0pOwo8L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+Cg==";
const __OFFERTEN_GEN_B64__ = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImRlIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIj4KICA8dGl0bGU+R2Fzc2Vyd2VyayDigJMgT2ZmZXJ0ZSBHZW5lcmF0b3I8L3RpdGxlPgogIDxsaW5rIHJlbD0iaWNvbiIgaHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PHRleHQgeT0nLjllbScgZm9udC1zaXplPSc5MCc+4pqZ77iPPC90ZXh0Pjwvc3ZnPiI+PHN0eWxlIGlkPSJzYlRva2VucyI+LypfX1NCX1RPS0VOU19fKi88L3N0eWxlPgogIDxzdHlsZT4KICAgIC5wcmV2aWV3LXJvb3QgewogICAgICAvKiBadXNhdHpmYXJiZW4gKG5pY2h0IGluIEJ1aWxkZXItVG9rZW5zKSAqLwogICAgICAtLWMtc3VjY2VzczogIzE2YTM0YTsKICAgICAgLS1jLXN1Y2Nlc3MtYmc6ICNmMGZkZjQ7CiAgICAgIC0tYy13YXJuaW5nOiAjZGMyNjI2OwogICAgICAtLWMtd2FybmluZy1iZzogI2ZlZjJmMjsKCiAgICAgIC8qIFJhZGl1cy1EZWZhdWx0cyAoZmFsbHMgaW0gVGhlbWUgbmljaHQgdm9yaGFuZGVuKSAqLwogICAgICAtLXJhZGl1cy1zbTogNnB4OwogICAgICAtLXJhZGl1cy1tZDogOHB4OwogICAgICAtLXJhZGl1cy1sZzogMTJweDsKICAgIH0KKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfQoKICAgIGJvZHkgewogICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ib2R5KTsKICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1iZyk7CiAgICAgIHBhZGRpbmc6IDEuNXJlbTsKICAgICAgbGluZS1oZWlnaHQ6IDEuNjsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dCk7CiAgICB9CgogICAgLmNvbnRhaW5lciB7CiAgICAgIG1heC13aWR0aDogMTQwMHB4OwogICAgICBtYXJnaW46IDAgYXV0bzsKICAgIH0KCiAgICAuaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgZ2FwOiAxcmVtOwogICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07CiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOwogICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYy1ib3JkZXIpOwogICAgfQoKICAgIC5oZWFkZXItbG9nbyB7CiAgICAgIHdpZHRoOiA0OHB4OwogICAgICBoZWlnaHQ6IDQ4cHg7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWMtcHJpbWFyeSk7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgIH0KCiAgICAuaGVhZGVyLXRleHQgaDEgewogICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTsKICAgICAgZm9udC1zaXplOiAxLjVyZW07CiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtOwogICAgfQoKICAgIC5oZWFkZXItdGV4dCBwIHsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dC1saWdodCk7CiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07CiAgICB9CgogICAgLyogTGF5b3V0ICovCiAgICAubGF5b3V0IHsKICAgICAgZGlzcGxheTogZ3JpZDsKICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MjBweCAxZnI7CiAgICAgIGdhcDogMS41cmVtOwogICAgfQoKICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHsKICAgICAgLmxheW91dCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9CiAgICB9CgogICAgLyogRm9ybSBQYW5lbCAqLwogICAgLmZvcm0tcGFuZWwgewogICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTsKICAgICAgcGFkZGluZzogMS41cmVtOwogICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA4KTsKICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDsKICAgICAgcG9zaXRpb246IHN0aWNreTsKICAgICAgdG9wOiAxLjVyZW07CiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTsKICAgICAgb3ZlcmZsb3cteTogYXV0bzsKICAgIH0KCiAgICAuZm9ybS10aXRsZSB7CiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpOwogICAgICBmb250LXNpemU6IDEuMTI1cmVtOwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtOwogICAgICBjb2xvcjogdmFyKC0tYy1wcmltYXJ5KTsKICAgIH0KCiAgICAuZm9ybS1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtOwogICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTsKICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWMtYm9yZGVyKTsKICAgIH0KCiAgICAuZm9ybS1zZWN0aW9uOmxhc3QtY2hpbGQgewogICAgICBib3JkZXItYm90dG9tOiBub25lOwogICAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgfQoKICAgIC5zZWN0aW9uLWxhYmVsIHsKICAgICAgZm9udC1zaXplOiAwLjdyZW07CiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQtbXV0ZWQpOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOwogICAgfQoKICAgIC5yb3cgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7CiAgICAgIGdhcDogMC43NXJlbTsKICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOwogICAgfQoKICAgIC5maWVsZCB7CiAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtOwogICAgfQoKICAgIC5maWVsZCBsYWJlbCB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICBmb250LXNpemU6IDAuOHJlbTsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dC1saWdodCk7CiAgICB9CgogICAgLmZpZWxkIGlucHV0LCAuZmllbGQgc2VsZWN0LCAuZmllbGQgdGV4dGFyZWEgewogICAgICB3aWR0aDogMTAwJTsKICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWMtYm9yZGVyKTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTsKICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTsKICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cywgYm94LXNoYWRvdyAwLjE1czsKICAgIH0KCiAgICAuZmllbGQgaW5wdXQ6Zm9jdXMsIC5maWVsZCBzZWxlY3Q6Zm9jdXMsIC5maWVsZCB0ZXh0YXJlYTpmb2N1cyB7CiAgICAgIG91dGxpbmU6IG5vbmU7CiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYy1hY2NlbnQpOwogICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNywgOTksIDIzNSwgMC4xKTsKICAgIH0KCiAgICAuZmllbGQgdGV4dGFyZWEgewogICAgICBtaW4taGVpZ2h0OiA3MHB4OwogICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgfQoKICAgIC5jaGVja2JveC1maWVsZCB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIGdhcDogMC41cmVtOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07CiAgICB9CgogICAgLmNoZWNrYm94LWZpZWxkIGlucHV0W3R5cGU9ImNoZWNrYm94Il0gewogICAgICB3aWR0aDogMTZweDsKICAgICAgaGVpZ2h0OiAxNnB4OwogICAgICBhY2NlbnQtY29sb3I6IHZhcigtLWMtYWNjZW50KTsKICAgIH0KCiAgICAuY2hlY2tib3gtZmllbGQgbGFiZWwgewogICAgICBmb250LXNpemU6IDAuODVyZW07CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQpOwogICAgICBtYXJnaW46IDA7CiAgICB9CgogICAgLmJ0bi1yb3cgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDAuNXJlbTsKICAgICAgbWFyZ2luLXRvcDogMXJlbTsKICAgIH0KCiAgICAuYnRuIHsKICAgICAgZmxleDogMTsKICAgICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTsKICAgICAgYm9yZGVyOiBub25lOwogICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pOwogICAgICBmb250LXNpemU6IDAuODc1cmVtOwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1czsKICAgIH0KCiAgICAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jLWFjY2VudCk7IGNvbG9yOiB3aGl0ZTsgfQogICAgLmJ0bi1wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYy1hY2NlbnQtbGlnaHQpOyB9CiAgICAuYnRuLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jLXN1Y2Nlc3MpOyBjb2xvcjogd2hpdGU7IH0KICAgIC5idG4tZ2hvc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jLWJnLWFsdCk7IGNvbG9yOiB2YXIoLS1jLXRleHQtbGlnaHQpOyB9CiAgICAuYnRuLWdob3N0OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYy1ib3JkZXIpOyB9CgogICAgLyogUHJldmlldyBQYW5lbCAqLwogICAgLnByZXZpZXctcGFuZWwgewogICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTsKICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICB9CgogICAgLnByZXZpZXctaGVhZGVyIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1iZy1hbHQpOwogICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07CiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIH0KCiAgICAucHJldmlldy10aXRsZSB7CiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgIGZvbnQtc2l6ZTogMC45cmVtOwogICAgfQoKICAgIC5wcmV2aWV3LWFjdGlvbnMgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDAuNXJlbTsKICAgIH0KCiAgICAucHJldmlldy1hY3Rpb25zIGJ1dHRvbiB7CiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjc1cmVtOwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7CiAgICAgIGZvbnQtc2l6ZTogMC44cmVtOwogICAgICBmb250LXdlaWdodDogNTAwOwogICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWMtcHJpbWFyeSk7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1czsKICAgIH0KCiAgICAucHJldmlldy1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWMtcHJpbWFyeS1saWdodCk7CiAgICB9CgogICAgLnByZXZpZXctY29udGVudCB7CiAgICAgIHBhZGRpbmc6IDIuNXJlbTsKICAgICAgZm9udC1zaXplOiAwLjlyZW07CiAgICAgIG1heC1oZWlnaHQ6IDg1dmg7CiAgICAgIG92ZXJmbG93LXk6IGF1dG87CiAgICB9CgogICAgLyogT2ZmZXJ0ZSBTdHlsaW5nICovCiAgICAub2ZmZXJ0ZSB7CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQpOwogICAgICBtYXgtd2lkdGg6IDcwMHB4OwogICAgICBtYXJnaW46IDAgYXV0bzsKICAgIH0KCiAgICAub2ZmZXJ0ZS1oZWFkZXIgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OwogICAgICBtYXJnaW4tYm90dG9tOiAycmVtOwogICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtOwogICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tYy1wcmltYXJ5KTsKICAgIH0KCiAgICAub2ZmZXJ0ZS1icmFuZCB7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgIGdhcDogMC43NXJlbTsKICAgIH0KCiAgICAub2ZmZXJ0ZS1sb2dvIHsKICAgICAgd2lkdGg6IDQycHg7CiAgICAgIGhlaWdodDogNDJweDsKICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1wcmltYXJ5KTsKICAgICAgY29sb3I6IHdoaXRlOwogICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpOwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgZm9udC1zaXplOiAwLjlyZW07CiAgICB9CgogICAgLm9mZmVydGUtY29tcGFueSB7CiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpOwogICAgICBmb250LXNpemU6IDEuMjVyZW07CiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtOwogICAgfQoKICAgIC5vZmZlcnRlLWNvbnRhY3QgewogICAgICBmb250LXNpemU6IDAuOHJlbTsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dC1saWdodCk7CiAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07CiAgICB9CgogICAgLm9mZmVydGUtZG9jLWluZm8gewogICAgICB0ZXh0LWFsaWduOiByaWdodDsKICAgICAgZm9udC1zaXplOiAwLjhyZW07CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQtbGlnaHQpOwogICAgfQoKICAgIC5vZmZlcnRlLXRpdGxlIHsKICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7CiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTsKICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgY29sb3I6IHZhcigtLWMtcHJpbWFyeSk7CiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsKICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07CiAgICB9CgogICAgLm9mZmVydGUtbWV0YSB7CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQtbGlnaHQpOwogICAgICBmb250LXNpemU6IDAuODVyZW07CiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTsKICAgIH0KCiAgICAub2ZmZXJ0ZS1hZGRyZXNzIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1iZy1hbHQpOwogICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07CiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7CiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTsKICAgIH0KCiAgICAub2ZmZXJ0ZS1hZGRyZXNzIHN0cm9uZyB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtOwogICAgfQoKICAgIC5vZmZlcnRlLXNlY3Rpb24gewogICAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtOwogICAgfQoKICAgIC5vZmZlcnRlLXNlY3Rpb24gaDMgewogICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTsKICAgICAgZm9udC1zaXplOiAxcmVtOwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjb2xvcjogdmFyKC0tYy1wcmltYXJ5KTsKICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsKICAgICAgcGFkZGluZy1ib3R0b206IDAuMzVyZW07CiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jLWFjY2VudCk7CiAgICB9CgogICAgLm9mZmVydGUtc2VjdGlvbiBoNCB7CiAgICAgIGZvbnQtc2l6ZTogMC45cmVtOwogICAgICBmb250LXdlaWdodDogNjAwOwogICAgICBjb2xvcjogdmFyKC0tYy10ZXh0LWxpZ2h0KTsKICAgICAgbWFyZ2luLXRvcDogMXJlbTsKICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOwogICAgfQoKICAgIC5vZmZlcnRlLWxpc3QgewogICAgICBsaXN0LXN0eWxlOiBub25lOwogICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC5vZmZlcnRlLWxpc3QgbGkgewogICAgICBwYWRkaW5nOiAwLjRyZW0gMDsKICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgZm9udC1zaXplOiAwLjlyZW07CiAgICB9CgogICAgLm9mZmVydGUtbGlzdCBsaTo6YmVmb3JlIHsKICAgICAgY29udGVudDogJ+Kckyc7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgbGVmdDogMDsKICAgICAgY29sb3I6IHZhcigtLWMtc3VjY2Vzcyk7CiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICB9CgogICAgLm9mZmVydGUtbGlzdC5uZXV0cmFsIGxpOjpiZWZvcmUgewogICAgICBjb250ZW50OiAn4oCiJzsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dC1tdXRlZCk7CiAgICB9CgogICAgLm9mZmVydGUtbGlzdC53YXJuaW5nIGxpOjpiZWZvcmUgewogICAgICBjb250ZW50OiAn4pyXJzsKICAgICAgY29sb3I6IHZhcigtLWMtd2FybmluZyk7CiAgICB9CgogICAgLyogUHJpY2UgQm94ICovCiAgICAub2ZmZXJ0ZS1wcmljZSB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWMtYmctYWx0KTsKICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYy1wcmltYXJ5KTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTsKICAgICAgcGFkZGluZzogMS4yNXJlbTsKICAgICAgbWFyZ2luOiAxLjVyZW0gMDsKICAgIH0KCiAgICAub2ZmZXJ0ZS1wcmljZS1yb3cgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwOwogICAgICBmb250LXNpemU6IDAuOXJlbTsKICAgIH0KCiAgICAub2ZmZXJ0ZS1wcmljZS10b3RhbCB7CiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOwogICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYy1ib3JkZXIpOwogICAgICBtYXJnaW4tdG9wOiAwLjVyZW07CiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07CiAgICB9CgogICAgLyogR3VhcmFudGVlIEJveCAqLwogICAgLm9mZmVydGUtZ3VhcmFudGVlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0tYy1zdWNjZXNzLWJnKTsKICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg2ZWZhYzsKICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jLXN1Y2Nlc3MpOwogICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07CiAgICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tcmFkaXVzLW1kKSB2YXIoLS1yYWRpdXMtbWQpIDA7CiAgICAgIG1hcmdpbjogMXJlbSAwOwogICAgfQoKICAgIC5vZmZlcnRlLWd1YXJhbnRlZSBzdHJvbmcgewogICAgICBjb2xvcjogIzE2NjUzNDsKICAgIH0KCiAgICAvKiBXYXJuaW5nIEJveCAqLwogICAgLm9mZmVydGUtd2FybmluZyB7CiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWMtd2FybmluZy1iZyk7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7CiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tYy13YXJuaW5nKTsKICAgICAgcGFkZGluZzogMXJlbSAxLjI1cmVtOwogICAgICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXJhZGl1cy1tZCkgdmFyKC0tcmFkaXVzLW1kKSAwOwogICAgICBtYXJnaW46IDFyZW0gMDsKICAgICAgZm9udC1zaXplOiAwLjg1cmVtOwogICAgfQoKICAgIC8qIEluZm8gQm94ICovCiAgICAub2ZmZXJ0ZS1pbmZvIHsKICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmZGJmZTsKICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jLWFjY2VudCk7CiAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTsKICAgICAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1yYWRpdXMtbWQpIHZhcigtLXJhZGl1cy1tZCkgMDsKICAgICAgbWFyZ2luOiAxcmVtIDA7CiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsKICAgIH0KCiAgICAvKiBDVEEgQm94ICovCiAgICAub2ZmZXJ0ZS1jdGEgewogICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jLXByaW1hcnkpOwogICAgICBjb2xvcjogd2hpdGU7CiAgICAgIHBhZGRpbmc6IDEuNXJlbTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICBtYXJnaW4tdG9wOiAxLjVyZW07CiAgICB9CgogICAgLm9mZmVydGUtY3RhIHN0cm9uZyB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICBmb250LXNpemU6IDFyZW07CiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsKICAgIH0KCiAgICAvKiBUZXJtcyAqLwogICAgLm9mZmVydGUtdGVybXMgewogICAgICBmb250LXNpemU6IDAuOHJlbTsKICAgICAgY29sb3I6IHZhcigtLWMtdGV4dC1saWdodCk7CiAgICAgIG1hcmdpbi10b3A6IDJyZW07CiAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07CiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7CiAgICB9CgogICAgLm9mZmVydGUtdGVybXMgaDQgewogICAgICBmb250LXNpemU6IDAuODVyZW07CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQtbGlnaHQpOwogICAgICBtYXJnaW4tdG9wOiAxcmVtOwogICAgICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtOwogICAgfQoKICAgIC8qIEZvb3RlciAqLwogICAgLm9mZmVydGUtZm9vdGVyIHsKICAgICAgbWFyZ2luLXRvcDogMnJlbTsKICAgICAgcGFkZGluZy10b3A6IDFyZW07CiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7CiAgICAgIGZvbnQtc2l6ZTogMC44cmVtOwogICAgICBjb2xvcjogdmFyKC0tYy10ZXh0LWxpZ2h0KTsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQoKICAgIC8qIFNpZ25hdHVyZSAqLwogICAgLm9mZmVydGUtc2lnbmF0dXJlIHsKICAgICAgbWFyZ2luLXRvcDogMnJlbTsKICAgICAgcGFkZGluZy10b3A6IDFyZW07CiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jLWJvcmRlcik7CiAgICB9CgogICAgLnNpZ25hdHVyZS1yb3cgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7CiAgICAgIGdhcDogMnJlbTsKICAgICAgbWFyZ2luLXRvcDogMXJlbTsKICAgIH0KCiAgICAuc2lnbmF0dXJlLWJveCB7CiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jLXByaW1hcnkpOwogICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtOwogICAgICBtaW4taGVpZ2h0OiA2MHB4OwogICAgfQoKICAgIC5zaWduYXR1cmUtbGFiZWwgewogICAgICBmb250LXNpemU6IDAuNzVyZW07CiAgICAgIGNvbG9yOiB2YXIoLS1jLXRleHQtbXV0ZWQpOwogICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtOwogICAgfQoKICAgIC8qIFBhZ2VicmVhayAqLwogICAgLnBhZ2VicmVhayB7CiAgICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7CiAgICAgIG1hcmdpbi10b3A6IDJyZW07CiAgICB9CgogICAgLyogUHJpbnQgKi8KICAgIEBtZWRpYSBwcmludCB7CiAgICAgIGJvZHkgeyBiYWNrZ3JvdW5kOiB3aGl0ZTsgcGFkZGluZzogMDsgfQogICAgICAuZm9ybS1wYW5lbCwgLnByZXZpZXctaGVhZGVyLCAuaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfQogICAgICAucHJldmlldy1wYW5lbCB7IGJveC1zaGFkb3c6IG5vbmU7IH0KICAgICAgLnByZXZpZXctY29udGVudCB7IG1heC1oZWlnaHQ6IG5vbmU7IHBhZGRpbmc6IDA7IH0KICAgICAgLmxheW91dCB7IGRpc3BsYXk6IGJsb2NrOyB9CiAgICB9CiAgPC9zdHlsZT4KPC9oZWFkPgo8Ym9keSBjbGFzcz0icHJldmlldy1yb290Ij4KCjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgPGRpdiBjbGFzcz0iaGVhZGVyIj4KICAgIDxkaXYgY2xhc3M9ImhlYWRlci1sb2dvIj5HVzwvZGl2PgogICAgPGRpdiBjbGFzcz0iaGVhZGVyLXRleHQiPgogICAgICA8aDE+R2Fzc2Vyd2VyayDigJMgT2ZmZXJ0ZSBHZW5lcmF0b3I8L2gxPgogICAgICA8cD5Td2lzcy1ncmFkZSBXZWJzaXRlcyDCtyBSZWNodHNzaWNoZXJlIE9mZmVydGVuPC9wPgogICAgPC9kaXY+CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImxheW91dCI+CgogICAgPCEtLSBGT1JNIC0tPgogICAgPGRpdiBjbGFzcz0iZm9ybS1wYW5lbCI+CiAgICAgIDxkaXYgY2xhc3M9ImZvcm0tdGl0bGUiPk5ldWUgT2ZmZXJ0ZSBlcnN0ZWxsZW48L2Rpdj4KCiAgICAgIDwhLS0gTWVpbmUgRGF0ZW4gLS0+CiAgICAgIDxkaXYgY2xhc3M9ImZvcm0tc2VjdGlvbiI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbi1sYWJlbCI+R2Fzc2Vyd2VyazwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgIDxsYWJlbD5OYW1lIC8gRmlybWE8L2xhYmVsPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJteU5hbWUiIHZhbHVlPSJHYXNzZXJ3ZXJrIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+RS1NYWlsPC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9ImVtYWlsIiBpZD0ibXlFbWFpbCIgdmFsdWU9ImluZm9AZ2Fzc2Vyd2Vyay5jaCI+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgICAgPGxhYmVsPlRlbGVmb248L2xhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0idGVsIiBpZD0ibXlQaG9uZSIgdmFsdWU9IjA3NiAyNzYgMzggODAiPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgPGxhYmVsPkFkcmVzc2U8L2xhYmVsPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJteUFkZHJlc3MiIHBsYWNlaG9sZGVyPSJTdHJhc3NlLCBQTFogT3J0Ij4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICA8bGFiZWw+SUJBTjwvbGFiZWw+CiAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9Im15SWJhbiIgcGxhY2Vob2xkZXI9IkNIMDAgMDAwMCAwMDAwIDAwMDAgMDAwMCAwIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+TVdTVC1TdGF0dXM8L2xhYmVsPgogICAgICAgICAgICA8c2VsZWN0IGlkPSJ2YXRNb2RlIj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJub25lIiBzZWxlY3RlZD5OaWNodCBNV1NULXBmbGljaHRpZzwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImV4Y2wiPlByZWlzIGV4a2wuIE1XU1Q8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJpbmNsIj5QcmVpcyBpbmtsLiBNV1NUPC9vcHRpb24+CiAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5NV1NULVNhdHogKCUpPC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9InZhdFJhdGUiIHN0ZXA9IjAuMSIgdmFsdWU9IjguMSI+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICA8bGFiZWw+TVdTVC1Oci4gLyBVSUQgKG9wdGlvbmFsKTwvbGFiZWw+CiAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9Im15VmF0TnIiIHBsYWNlaG9sZGVyPSJDSEUtMTIzLjQ1Ni43ODkgTVdTVCI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgPGxhYmVsPkdlcmljaHRzc3RhbmQ8L2xhYmVsPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJqdXJpc2RpY3Rpb24iIHZhbHVlPSJCaWVsL0JpZW5uZSI+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPCEtLSBLdW5kZSAtLT4KICAgICAgPGRpdiBjbGFzcz0iZm9ybS1zZWN0aW9uIj4KICAgICAgICA8ZGl2IGNsYXNzPSJzZWN0aW9uLWxhYmVsIj5LdW5kZTwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgIDxsYWJlbD5GaXJtZW5uYW1lPC9sYWJlbD4KICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iY2xpZW50TmFtZSIgcGxhY2Vob2xkZXI9IlRyZXVoYW5kIE11c3RlciBBRyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgPGxhYmVsPkFuc3ByZWNocGVyc29uPC9sYWJlbD4KICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iY2xpZW50Q29udGFjdCIgcGxhY2Vob2xkZXI9IkhhbnMgTXVzdGVyIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICA8bGFiZWw+QWRyZXNzZTwvbGFiZWw+CiAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9ImNsaWVudEFkZHJlc3MiIHBsYWNlaG9sZGVyPSJIYXVwdHN0cmFzc2UgMTAsIDI1MDAgQmllbCI+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPCEtLSBQcm9qZWt0IC0tPgogICAgICA8ZGl2IGNsYXNzPSJmb3JtLXNlY3Rpb24iPgogICAgICAgIDxkaXYgY2xhc3M9InNlY3Rpb24tbGFiZWwiPlN3aXNzLWdyYWRlIFBhY2thZ2U8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICA8bGFiZWw+UGFja2FnZTwvbGFiZWw+CiAgICAgICAgICA8c2VsZWN0IGlkPSJwYWNrYWdlIiBvbmNoYW5nZT0idXBkYXRlUGFja2FnZSgpIj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ibGF1bmNoIj5Td2lzcyBMYXVuY2gg4oCTIDEgTGFuZGluZ3BhZ2U8L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0icHJvIiBzZWxlY3RlZD5Td2lzcyBQcm8g4oCTIDMtNSBTZWl0ZW48L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZWxpdGUiPlN3aXNzIEVsaXRlIOKAkyBTeXN0ZW0gJiBTa2FsaWVydW5nPC9vcHRpb24+CiAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+UHJlaXMgKENIRik8L2xhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0icHJpY2UiIHZhbHVlPSI4OTAwIj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+QW56YWhsdW5nPC9sYWJlbD4KICAgICAgICAgICAgPHNlbGVjdCBpZD0iZGVwb3NpdCI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iNTAiIHNlbGVjdGVkPjUwJTwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjMwIj4zMCU8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIxMDAiPjEwMCUgKFZvcmF1c3phaGx1bmcpPC9vcHRpb24+CiAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgICAgPGxhYmVsPkxpZWZlcmZyaXN0PC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9ImRlbGl2ZXJ5IiB2YWx1ZT0iMTQiPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5FaW5oZWl0PC9sYWJlbD4KICAgICAgICAgICAgPHNlbGVjdCBpZD0iZGVsaXZlcnlVbml0Ij4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJjYWxlbmRhciIgc2VsZWN0ZWQ+S2FsZW5kZXJ0YWdlPC9vcHRpb24+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0id29yayI+QXJiZWl0c3RhZ2U8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICA8bGFiZWw+RmVlZGJhY2stUnVuZGVuPC9sYWJlbD4KICAgICAgICAgIDxzZWxlY3QgaWQ9InJldmlzaW9ucyI+CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjEiPjEgUnVuZGU8L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMiIgc2VsZWN0ZWQ+MiBSdW5kZW48L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMyI+MyBSdW5kZW48L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0idW5saW1pdGVkIj5VbmJlZ3Jlbnp0IChQcm9qZWt0cmFobWVuKTwvb3B0aW9uPgogICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgPGxhYmVsPlp1c2F0emxlaXN0dW5nZW4gKG9wdGlvbmFsKTwvbGFiZWw+CiAgICAgICAgICA8dGV4dGFyZWEgaWQ9ImV4dHJhcyIgcGxhY2Vob2xkZXI9InouQi4gRm90b3Nob290aW5nLCBUZXh0ZXJzdGVsbHVuZywgTG9nby1EZXNpZ24uLi4iPjwvdGV4dGFyZWE+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPCEtLSBNb2R1bGUgLS0+CiAgICAgIDxkaXYgY2xhc3M9ImZvcm0tc2VjdGlvbiI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbi1sYWJlbCI+TW9kdWxlPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY2hlY2tib3gtZmllbGQiPgogICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iaW5jbHVkZU9mZmVyIiBjaGVja2VkPgogICAgICAgICAgPGxhYmVsPk9mZmVydGUgKEhhdXB0ZG9rdW1lbnQpPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveC1maWVsZCI+CiAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJpbmNsdWRlU0xBIj4KICAgICAgICAgIDxsYWJlbD5Db21wbGlhbmNlIENhcmUgUmV0YWluZXIgKFdhcnR1bmcpPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8IS0tIFNMQSBTZWN0aW9uIChoaWRkZW4gYnkgZGVmYXVsdCkgLS0+CiAgICAgIDxkaXYgY2xhc3M9ImZvcm0tc2VjdGlvbiIgaWQ9InNsYVNlY3Rpb24iIHN0eWxlPSJkaXNwbGF5Om5vbmU7Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJzZWN0aW9uLWxhYmVsIj5Db21wbGlhbmNlIENhcmUgUmV0YWluZXI8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+TW9uYXRzcHJlaXMgKENIRik8L2xhYmVsPgogICAgICAgICAgICA8aW5wdXQgdHlwZT0ibnVtYmVyIiBpZD0ic2xhTW9udGhseSIgdmFsdWU9IjQ1MCI+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgICAgPGxhYmVsPkFicmVjaG51bmc8L2xhYmVsPgogICAgICAgICAgICA8c2VsZWN0IGlkPSJzbGFCaWxsaW5nIj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJtb250aGx5IiBzZWxlY3RlZD5Nb25hdGxpY2g8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJxdWFydGVybHkiPlF1YXJ0YWxzd2Vpc2U8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+UmVha3Rpb25zemVpdCAoU3R1bmRlbik8L2xhYmVsPgogICAgICAgICAgICA8c2VsZWN0IGlkPSJzbGFSZXNwb25zZSI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMjQiPjI0aDwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjQ4IiBzZWxlY3RlZD40OGg8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSI3MiI+NzJoPC9vcHRpb24+CiAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5LYW5hbDwvbGFiZWw+CiAgICAgICAgICAgIDxzZWxlY3QgaWQ9InNsYUNoYW5uZWwiPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImVtYWlsIiBzZWxlY3RlZD5FLU1haWw8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJlbWFpbF9waG9uZSI+RS1NYWlsICsgVGVsZWZvbjwvb3B0aW9uPgogICAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5VcGRhdGVzPC9sYWJlbD4KICAgICAgICAgICAgPHNlbGVjdCBpZD0ic2xhVXBkYXRlcyI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ic2VjdXJpdHkiIHNlbGVjdGVkPlNpY2hlcmhlaXRzLVVwZGF0ZXM8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJtb250aGx5Ij5Nb25hdGxpY2hlIFVwZGF0ZXM8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJub25lIj5LZWluZTwvb3B0aW9uPgogICAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+QmFja3VwczwvbGFiZWw+CiAgICAgICAgICAgIDxzZWxlY3QgaWQ9InNsYUJhY2t1cHMiPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IndlZWtseSIgc2VsZWN0ZWQ+V8O2Y2hlbnRsaWNoPC9vcHRpb24+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZGFpbHkiPlTDpGdsaWNoPC9vcHRpb24+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ibm9uZSI+S2VpbmU8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+TWluZGVzdGxhdWZ6ZWl0IChNb25hdGUpPC9sYWJlbD4KICAgICAgICAgICAgPHNlbGVjdCBpZD0ic2xhTWluVGVybSI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMCI+S2VpbmU8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIzIiBzZWxlY3RlZD4zIE1vbmF0ZTwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjYiPjYgTW9uYXRlPC9vcHRpb24+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMTIiPjEyIE1vbmF0ZTwvb3B0aW9uPgogICAgICAgICAgICA8L3NlbGVjdD4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+S8O8bmRpZ3VuZ3NmcmlzdCAoVGFnZSk8L2xhYmVsPgogICAgICAgICAgICA8c2VsZWN0IGlkPSJzbGFOb3RpY2UiPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjE0Ij4xNCBUYWdlPC9vcHRpb24+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iMzAiIHNlbGVjdGVkPjMwIFRhZ2U8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+SW5rbC4gTWludXRlbi9Nb25hdDwvbGFiZWw+CiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJudW1iZXIiIGlkPSJzbGFJbmNsdWRlZE1pbiIgdmFsdWU9IjMwIj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmllbGQiPgogICAgICAgICAgICA8bGFiZWw+WnVzYXR6c3R1bmRlIChDSEYpPC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9Im51bWJlciIgaWQ9InNsYUhvdXJseSIgdmFsdWU9IjE1MCI+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8IS0tIFJlY2h0ICYgT3B0aW9uZW4gLS0+CiAgICAgIDxkaXYgY2xhc3M9ImZvcm0tc2VjdGlvbiI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VjdGlvbi1sYWJlbCI+UmVjaHQgJiBPcHRpb25lbjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5BYm5haG1lZnJpc3QgKFRhZ2UpPC9sYWJlbD4KICAgICAgICAgICAgPHNlbGVjdCBpZD0iYWNjZXB0RGF5cyI+CiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iNSI+NTwvb3B0aW9uPgogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IjciIHNlbGVjdGVkPjc8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIxMCI+MTA8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIxNCI+MTQ8L29wdGlvbj4KICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgICAgPGxhYmVsPkFibmFobWU8L2xhYmVsPgogICAgICAgICAgICA8c2VsZWN0IGlkPSJhY2NlcHRBdXRvIj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJ5ZXMiIHNlbGVjdGVkPkF1dG9tYXRpc2NoIG5hY2ggRnJpc3Q8L29wdGlvbj4KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJubyI+TnVyIHNjaHJpZnRsaWNoPC9vcHRpb24+CiAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY2hlY2tib3gtZmllbGQiPgogICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0icG9ydGZvbGlvT2siIGNoZWNrZWQ+CiAgICAgICAgICA8bGFiZWw+UmVmZXJlbnpuZW5udW5nIGVybGF1YnQ8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImNoZWNrYm94LWZpZWxkIj4KICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImxpYWJpbGl0eUNhcCIgY2hlY2tlZD4KICAgICAgICAgIDxsYWJlbD5IYWZ0dW5nIGF1ZiBBdWZ0cmFnc3dlcnQgYmVncmVuemVuPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveC1maWVsZCI+CiAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJpbmNsdWRlQUdCIiBjaGVja2VkPgogICAgICAgICAgPGxhYmVsPkFHQiBhbHMgQW5oYW5nPC9sYWJlbD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveC1maWVsZCI+CiAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJpbmNsdWRlRGlzY2xhaW1lciIgY2hlY2tlZD4KICAgICAgICAgIDxsYWJlbD5EaXNjbGFpbWVyIGVpbmJsZW5kZW48L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDwhLS0gT2ZmZXJ0ZSAtLT4KICAgICAgPGRpdiBjbGFzcz0iZm9ybS1zZWN0aW9uIj4KICAgICAgICA8ZGl2IGNsYXNzPSJzZWN0aW9uLWxhYmVsIj5PZmZlcnRlPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZpZWxkIj4KICAgICAgICAgICAgPGxhYmVsPk9mZmVydGUtTnIuPC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJvZmZlck5yIiB2YWx1ZT0iR1ctMjAyNS0wMDEiPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJmaWVsZCI+CiAgICAgICAgICAgIDxsYWJlbD5Hw7xsdGlnIGJpczwvbGFiZWw+CiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJkYXRlIiBpZD0idmFsaWRVbnRpbCI+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJidG4tcm93Ij4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLWdob3N0IiBvbmNsaWNrPSJyZXNldEZvcm0oKSI+UmVzZXQ8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYnRuLXByaW1hcnkiIG9uY2xpY2s9InVwZGF0ZVByZXZpZXcoKSI+QWt0dWFsaXNpZXJlbjwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgoKICAgIDwhLS0gUFJFVklFVyAtLT4KICAgIDxkaXYgY2xhc3M9InByZXZpZXctcGFuZWwiPgogICAgICA8ZGl2IGNsYXNzPSJwcmV2aWV3LWhlYWRlciI+CiAgICAgICAgPHNwYW4gY2xhc3M9InByZXZpZXctdGl0bGUiPlZvcnNjaGF1PC9zcGFuPgogICAgICAgIDxkaXYgY2xhc3M9InByZXZpZXctYWN0aW9ucyI+CiAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9ImNvcHlUZXh0KCkiPvCfk4sgS29waWVyZW48L2J1dHRvbj4KICAgICAgICAgIDxidXR0b24gb25jbGljaz0id2luZG93LnByaW50KCkiPvCflqjvuI8gUERGPC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJwcmV2aWV3LWNvbnRlbnQiIGlkPSJwcmV2aWV3Ij4KICAgICAgICA8IS0tIEdlbmVyYXRlZCAtLT4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgPC9kaXY+CjwvZGl2PgoKPHNjcmlwdD4KICAvLyBTZXQgZGVmYXVsdCB2YWxpZCBkYXRlICgxNCBkYXlzKQogIGNvbnN0IHZhbGlkRGF0ZSA9IG5ldyBEYXRlKCk7CiAgdmFsaWREYXRlLnNldERhdGUodmFsaWREYXRlLmdldERhdGUoKSArIDE0KTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsaWRVbnRpbCcpLnZhbHVlID0gdmFsaWREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTsKCiAgLy8gUGFja2FnZSBkZWZpbml0aW9ucyAtIEdhc3NlcndlcmsgU3dpc3MtZ3JhZGUgUGFja2FnZXMKICBjb25zdCBwYWNrYWdlcyA9IHsKICAgIGxhdW5jaDogewogICAgICBuYW1lOiAnU3dpc3MgTGF1bmNoJywKICAgICAgcGFnZXM6ICcxIExhbmRpbmdwYWdlJywKICAgICAgcHJpY2U6IDU5MDAsCiAgICAgIGluY2x1ZGVzOiBbCiAgICAgICAgJzEgTGFuZGluZ3BhZ2UgKEhlcm8sIFRydXN0LCBTZXJ2aWNlcywgVGVzdGltb25pYWxzLCBDVEEpJywKICAgICAgICAnU3RyaWt0ZXMgMi1QYXR0ZXJuIEdyaWQtU3lzdGVtJywKICAgICAgICAnU3dpc3MgQ29uc2VudCBGb3VuZGF0aW9uIChQcmVmZXJlbmNlIENlbnRlciArIFNjcmlwdC1CbG9ja2luZyknLAogICAgICAgICdTd2lzcyBMZWdhbCBFbmdpbmUgdjQuMiAoVHJhY2tpbmcgUHJlc2V0cyArIERhdGVuc2NodXR6Z2VuZXJhdG9yKScsCiAgICAgICAgJ3JldkRTRyAvIERTR1ZPIGtvbmZvcm0nLAogICAgICAgICdSZXNwb25zaXZlIERlc2lnbiAoTW9iaWxlLWZpcnN0KScsCiAgICAgICAgJ0Jhc2lzIFNFTyAmIFBlcmZvcm1hbmNlLU9wdGltaWVydW5nJywKICAgICAgICAnRGVwbG95bWVudCArIMOcYmVyZ2FiZScKICAgICAgXSwKICAgICAgbm90SW5jbHVkZWQ6IFsKICAgICAgICAnTWVocmVyZSBVbnRlcnNlaXRlbicsCiAgICAgICAgJ0Vyd2VpdGVydGUgUHJvb2YtTW9kdWxlJywKICAgICAgICAnU3RydWt0dXJpZXJ0ZSBEYXRlbicsCiAgICAgICAgJ0NNUyAvIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0nCiAgICAgIF0KICAgIH0sCiAgICBwcm86IHsKICAgICAgbmFtZTogJ1N3aXNzIFBybycsCiAgICAgIHBhZ2VzOiAnM+KAkzUgU2VpdGVuJywKICAgICAgcHJpY2U6IDg5MDAsCiAgICAgIGluY2x1ZGVzOiBbCiAgICAgICAgJzPigJM1IFNlaXRlbiAoTGVpc3R1bmdlbiwgQnJhbmNoZW4sIEtvbnRha3QpJywKICAgICAgICAnQWxsZXMgYXVzIFN3aXNzIExhdW5jaCwgcGx1czonLAogICAgICAgICdFcndlaXRlcnRlIFByb29mLU1vZHVsZSAoQmFkZ2VzLCBLZW5uemFobGVuLCBMb2dvcyknLAogICAgICAgICdTdHJ1a3R1cmllcnRlIERhdGVuIChMb2NhbEJ1c2luZXNzLCBGQVEpJywKICAgICAgICAnMuKAkzMgRmVlZGJhY2stUnVuZGVuJywKICAgICAgICAnRGVwbG95bWVudCArIEhhbmRvdmVyLURva3VtZW50YXRpb24nCiAgICAgIF0sCiAgICAgIG5vdEluY2x1ZGVkOiBbCiAgICAgICAgJ1ZhcmlhbnQtTGlicmFyeScsCiAgICAgICAgJ0FjY2Vzc2liaWxpdHkgR2F0ZSArIFBlcmZvcm1hbmNlIEVuZ2luZScsCiAgICAgICAgJ1RydXN0ICYgU2VjdXJpdHkgUGFjayAoQ1NQLCBIZWFkZXJzKScsCiAgICAgICAgJ1F1YWxpdMOkdHNyZXBvcnQnCiAgICAgIF0KICAgIH0sCiAgICBlbGl0ZTogewogICAgICBuYW1lOiAnU3dpc3MgRWxpdGUnLAogICAgICBwYWdlczogJ1N5c3RlbSAmIFNrYWxpZXJ1bmcnLAogICAgICBwcmljZTogMTU5MDAsCiAgICAgIGluY2x1ZGVzOiBbCiAgICAgICAgJ1ZhcmlhbnQtTGlicmFyeSAoSGVybywgQ1RBLCBUcnVzdCkgKyB3aWVkZXJ2ZXJ3ZW5kYmFyZSBTZWN0aW9ucycsCiAgICAgICAgJ0FjY2Vzc2liaWxpdHkgR2F0ZSArIFBlcmZvcm1hbmNlIEVuZ2luZScsCiAgICAgICAgJ1RydXN0ICYgU2VjdXJpdHkgUGFjayAoQ1NQLCBIZWFkZXJzLCBTcGFtLVNjaHV0eiknLAogICAgICAgICdRdWFsaXTDpHRzcmVwb3J0IChBMTF5L1NFTy9Qcml2YWN5L1BlcmYpJywKICAgICAgICAnMyBGZWVkYmFjay1SdW5kZW4gKyBHby1MaXZlIFN1cHBvcnQnLAogICAgICAgICdBbGxlcyBhdXMgU3dpc3MgUHJvJwogICAgICBdLAogICAgICBub3RJbmNsdWRlZDogWwogICAgICAgICdMYXVmZW5kZSBXYXJ0dW5nIChzZXBhcmF0OiBDb21wbGlhbmNlIENhcmUgUmV0YWluZXIpJywKICAgICAgICAnQ29udGVudC1FcnN0ZWxsdW5nIChUZXh0ZSwgQmlsZGVyKScsCiAgICAgICAgJ0RvbWFpbiAmIEhvc3RpbmcgKEVtcGZlaGx1bmc6IEluZm9tYW5pYWspJwogICAgICBdCiAgICB9CiAgfTsKCiAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyKSB7CiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZVN0cik7CiAgICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcoJ2RlLUNIJywgeyBkYXk6ICcyLWRpZ2l0JywgbW9udGg6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnIH0pOwogIH0KCiAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHsKICAgIHJldHVybiBTdHJpbmcoc3RyKQogICAgICAucmVwbGFjZUFsbCgnJicsJyZhbXA7JykKICAgICAgLnJlcGxhY2VBbGwoJzwnLCcmbHQ7JykKICAgICAgLnJlcGxhY2VBbGwoJz4nLCcmZ3Q7JykKICAgICAgLnJlcGxhY2VBbGwoJyInLCcmcXVvdDsnKQogICAgICAucmVwbGFjZUFsbCgiJyIsJyYjMzk7Jyk7CiAgfQoKICBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShudW0pIHsKICAgIHJldHVybiAiQ0hGICIgKyBOdW1iZXIobnVtKS50b0xvY2FsZVN0cmluZygnZGUtQ0gnLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLnJlcGxhY2UoLycvZywgIiciKSArICIu4oCTIjsKICB9CgogIGZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2UoKSB7CiAgICBjb25zdCBwa2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnZScpLnZhbHVlOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlJykudmFsdWUgPSBwYWNrYWdlc1twa2ddLnByaWNlOwogICAgdXBkYXRlUHJldmlldygpOwogIH0KCiAgZnVuY3Rpb24gdXBkYXRlUHJldmlldygpIHsKICAgIGNvbnN0IGluY2x1ZGVPZmZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmNsdWRlT2ZmZXInKS5jaGVja2VkOwogICAgY29uc3QgaW5jbHVkZVNMQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmNsdWRlU0xBJykuY2hlY2tlZDsKCiAgICAvLyBUb2dnbGUgU0xBIHNlY3Rpb24gdmlzaWJpbGl0eQogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYVNlY3Rpb24nKS5zdHlsZS5kaXNwbGF5ID0gaW5jbHVkZVNMQSA/ICdibG9jaycgOiAnbm9uZSc7CgogICAgY29uc3QgbXlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmFtZScpLnZhbHVlIHx8ICdHYXNzZXJ3ZXJrJzsKICAgIGNvbnN0IG15RW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFbWFpbCcpLnZhbHVlIHx8ICdpbmZvQGdhc3NlcndlcmsuY2gnOwogICAgY29uc3QgbXlQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVBob25lJykudmFsdWUgfHwgJzA3NiAyNzYgMzggODAnOwogICAgY29uc3QgbXlBZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215QWRkcmVzcycpLnZhbHVlIHx8ICdbQWRyZXNzZV0nOwogICAgY29uc3QgbXlJYmFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215SWJhbicpLnZhbHVlIHx8ICdbSUJBTl0nOwoKICAgIGNvbnN0IGNsaWVudE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpZW50TmFtZScpLnZhbHVlIHx8ICdbS3VuZGVubmFtZV0nOwogICAgY29uc3QgY2xpZW50Q29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGllbnRDb250YWN0JykudmFsdWUgfHwgJyc7CiAgICBjb25zdCBjbGllbnRBZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWVudEFkZHJlc3MnKS52YWx1ZSB8fCAnW0FkcmVzc2VdJzsKCiAgICBjb25zdCBwa2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnZScpLnZhbHVlOwogICAgY29uc3QgcGtnRGF0YSA9IHBhY2thZ2VzW3BrZ107CiAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlJykudmFsdWUpIHx8IDA7CiAgICBjb25zdCB2YXRNb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhdE1vZGUnKS52YWx1ZSB8fCAnbm9uZSc7CiAgICBjb25zdCB2YXRSYXRlID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmF0UmF0ZScpLnZhbHVlKSB8fCAwOwogICAgY29uc3QgbXlWYXROciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVZhdE5yJykudmFsdWUgfHwgJyc7CiAgICBjb25zdCBqdXJpc2RpY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanVyaXNkaWN0aW9uJykudmFsdWUgfHwgJ0JpZWwvQmllbm5lJzsKCiAgICAvLyBTTEEgZmllbGRzCiAgICBjb25zdCBzbGFNb250aGx5ID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xhTW9udGhseScpPy52YWx1ZSkgfHwgNDUwOwogICAgY29uc3Qgc2xhQmlsbGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGFCaWxsaW5nJyk/LnZhbHVlIHx8ICdtb250aGx5JzsKICAgIGNvbnN0IHNsYVJlc3BvbnNlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYVJlc3BvbnNlJyk/LnZhbHVlKSB8fCA0ODsKICAgIGNvbnN0IHNsYUNoYW5uZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xhQ2hhbm5lbCcpPy52YWx1ZSB8fCAnZW1haWwnOwogICAgY29uc3Qgc2xhVXBkYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGFVcGRhdGVzJyk/LnZhbHVlIHx8ICdzZWN1cml0eSc7CiAgICBjb25zdCBzbGFCYWNrdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYUJhY2t1cHMnKT8udmFsdWUgfHwgJ3dlZWtseSc7CiAgICBjb25zdCBzbGFNaW5UZXJtID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYU1pblRlcm0nKT8udmFsdWUpIHx8IDM7CiAgICBjb25zdCBzbGFOb3RpY2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xhTm90aWNlJyk/LnZhbHVlKSB8fCAzMDsKICAgIGNvbnN0IHNsYUluY2x1ZGVkTWluID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYUluY2x1ZGVkTWluJyk/LnZhbHVlKSB8fCAzMDsKICAgIGNvbnN0IHNsYUhvdXJseSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsYUhvdXJseScpPy52YWx1ZSkgfHwgMTUwOwoKICAgIC8vIENhbGN1bGF0ZSBwcmljZXMKICAgIGNvbnN0IHJhdGUgPSBNYXRoLm1heCh2YXRSYXRlLCAwKSAvIDEwMDsKICAgIGxldCBuZXQgPSAwLCB2YXQgPSAwLCBncm9zcyA9IDA7CiAgICBpZiAodmF0TW9kZSA9PT0gJ2luY2wnICYmIHJhdGUgPiAwKSB7CiAgICAgIGdyb3NzID0gcHJpY2U7CiAgICAgIG5ldCA9IGdyb3NzIC8gKDEgKyByYXRlKTsKICAgICAgdmF0ID0gZ3Jvc3MgLSBuZXQ7CiAgICB9IGVsc2UgewogICAgICBuZXQgPSBwcmljZTsKICAgICAgdmF0ID0gKHZhdE1vZGUgPT09ICdleGNsJykgPyAobmV0ICogcmF0ZSkgOiAwOwogICAgICBncm9zcyA9IG5ldCArIHZhdDsKICAgIH0KCiAgICBjb25zdCBkZXBvc2l0UGN0ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcG9zaXQnKS52YWx1ZSk7CiAgICBjb25zdCBkZXBvc2l0ID0gZ3Jvc3MgKiAoZGVwb3NpdFBjdCAvIDEwMCk7CiAgICBjb25zdCByZXN0ID0gZ3Jvc3MgLSBkZXBvc2l0OwoKICAgIGNvbnN0IG13c3RMaW5lID0gbXlWYXROciA/IGA8YnI+PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTowLjg1cmVtO2NvbG9yOnZhcigtLWMtdGV4dC1tdXRlZCk7Ij5NV1NULU5yLjogJHtteVZhdE5yfTwvc3Bhbj5gIDogJyc7CgogICAgbGV0IHByaWNlQm94SHRtbCA9ICcnOwogICAgaWYgKHZhdE1vZGUgPT09ICdleGNsJykgewogICAgICBwcmljZUJveEh0bWwgPSBgCiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1wcmljZS1yb3ciPjxzcGFuPiR7cGtnRGF0YS5uYW1lfSAoJHtwa2dEYXRhLnBhZ2VzfSk8L3NwYW4+PHNwYW4+JHtmb3JtYXRDdXJyZW5jeShuZXQpfTwvc3Bhbj48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXByaWNlLXJvdyI+PHNwYW4+TVdTVCAoJHt2YXRSYXRlLnRvRml4ZWQoMSl9JSk8L3NwYW4+PHNwYW4+JHtmb3JtYXRDdXJyZW5jeSh2YXQpfTwvc3Bhbj48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXByaWNlLXJvdyBvZmZlcnRlLXByaWNlLXRvdGFsIj48c3Bhbj5Ub3RhbCAoaW5rbC4gTVdTVCk8L3NwYW4+PHNwYW4+JHtmb3JtYXRDdXJyZW5jeShncm9zcyl9PC9zcGFuPjwvZGl2PgogICAgICAgICR7bXdzdExpbmV9CiAgICAgIGA7CiAgICB9IGVsc2UgaWYgKHZhdE1vZGUgPT09ICdpbmNsJykgewogICAgICBwcmljZUJveEh0bWwgPSBgCiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1wcmljZS1yb3ciPjxzcGFuPiR7cGtnRGF0YS5uYW1lfSAoJHtwa2dEYXRhLnBhZ2VzfSk8L3NwYW4+PHNwYW4+JHtmb3JtYXRDdXJyZW5jeShncm9zcyl9PC9zcGFuPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtcHJpY2Utcm93Ij48c3Bhbj5OZXR0bzwvc3Bhbj48c3Bhbj4ke2Zvcm1hdEN1cnJlbmN5KG5ldCl9PC9zcGFuPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtcHJpY2Utcm93Ij48c3Bhbj5NV1NUICgke3ZhdFJhdGUudG9GaXhlZCgxKX0lKTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdEN1cnJlbmN5KHZhdCl9PC9zcGFuPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtcHJpY2Utcm93IG9mZmVydGUtcHJpY2UtdG90YWwiPjxzcGFuPlRvdGFsIChpbmtsLiBNV1NUKTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdEN1cnJlbmN5KGdyb3NzKX08L3NwYW4+PC9kaXY+CiAgICAgICAgJHttd3N0TGluZX0KICAgICAgYDsKICAgIH0gZWxzZSB7CiAgICAgIHByaWNlQm94SHRtbCA9IGAKICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXByaWNlLXJvdyI+PHNwYW4+JHtwa2dEYXRhLm5hbWV9ICgke3BrZ0RhdGEucGFnZXN9KTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdEN1cnJlbmN5KGdyb3NzKX08L3NwYW4+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1wcmljZS1yb3cgb2ZmZXJ0ZS1wcmljZS10b3RhbCI+PHNwYW4+VG90YWw8L3NwYW4+PHNwYW4+JHtmb3JtYXRDdXJyZW5jeShncm9zcyl9PC9zcGFuPjwvZGl2PgogICAgICAgIDxkaXYgc3R5bGU9ImZvbnQtc2l6ZTowLjg1cmVtO2NvbG9yOnZhcigtLWMtdGV4dC1tdXRlZCk7bWFyZ2luLXRvcDowLjI1cmVtOyI+TmljaHQgTVdTVC1wZmxpY2h0aWcgLyBrZWluIE1XU1QtQXVzd2Vpcy48L2Rpdj4KICAgICAgYDsKICAgIH0KCiAgICBjb25zdCBkZWxpdmVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxpdmVyeScpLnZhbHVlOwogICAgY29uc3QgZGVsaXZlcnlVbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGl2ZXJ5VW5pdCcpLnZhbHVlOwogICAgY29uc3QgZGVsaXZlcnlVbml0TGFiZWwgPSAoZGVsaXZlcnlVbml0ID09PSAnd29yaycpID8gJ0FyYmVpdHN0YWdlJyA6ICdLYWxlbmRlcnRhZ2UnOwoKICAgIGNvbnN0IGFjY2VwdERheXMgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0RGF5cycpLnZhbHVlKTsKICAgIGNvbnN0IGFjY2VwdEF1dG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0QXV0bycpLnZhbHVlOwoKICAgIGNvbnN0IHBvcnRmb2xpb09rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpb09rJykuY2hlY2tlZDsKICAgIGNvbnN0IGxpYWJpbGl0eUNhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWFiaWxpdHlDYXAnKS5jaGVja2VkOwogICAgY29uc3QgaW5jbHVkZUFHQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmNsdWRlQUdCJykuY2hlY2tlZDsKICAgIGNvbnN0IGluY2x1ZGVEaXNjbGFpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY2x1ZGVEaXNjbGFpbWVyJykuY2hlY2tlZDsKCiAgICBjb25zdCByZXZpc2lvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV2aXNpb25zJykudmFsdWU7CiAgICBjb25zdCByZXZpc2lvbnNUZXh0ID0gcmV2aXNpb25zID09PSAndW5saW1pdGVkJyA/ICdJbSBQcm9qZWt0cmFobWVuJyA6IHJldmlzaW9ucyArICcgUnVuZGUobiknOwogICAgY29uc3QgZXh0cmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4dHJhcycpLnZhbHVlLnRyaW0oKTsKCiAgICBjb25zdCBvZmZlck5yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29mZmVyTnInKS52YWx1ZSB8fCAnR1ctMjAyNS0wMDEnOwogICAgY29uc3QgdmFsaWRVbnRpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWxpZFVudGlsJykudmFsdWU7CgogICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZGUtQ0gnLCB7IGRheTogJzItZGlnaXQnLCBtb250aDogJzItZGlnaXQnLCB5ZWFyOiAnbnVtZXJpYycgfSk7CgogICAgY29uc3QgaW5jbHVkZXNMaXN0ID0gcGtnRGF0YS5pbmNsdWRlcy5tYXAoaXRlbSA9PiBgPGxpPiR7aXRlbX08L2xpPmApLmpvaW4oJycpOwogICAgY29uc3Qgbm90SW5jbHVkZWRMaXN0ID0gcGtnRGF0YS5ub3RJbmNsdWRlZC5tYXAoaXRlbSA9PiBgPGxpPiR7aXRlbX08L2xpPmApLmpvaW4oJycpOwoKICAgIC8vIFNMQSBIVE1MCiAgICBjb25zdCBjaGFubmVsVGV4dCA9IChzbGFDaGFubmVsID09PSAnZW1haWxfcGhvbmUnKSA/ICdFLU1haWwgKyBUZWxlZm9uJyA6ICdFLU1haWwnOwogICAgY29uc3QgdXBkYXRlc1RleHQgPSAoc2xhVXBkYXRlcyA9PT0gJ25vbmUnKSA/ICdLZWluZScgOiAoc2xhVXBkYXRlcyA9PT0gJ21vbnRobHknKSA/ICdNb25hdGxpY2ggKGJlc3QgZWZmb3J0KScgOiAnU2ljaGVyaGVpdHMtVXBkYXRlcyAoYmVzdCBlZmZvcnQpJzsKICAgIGNvbnN0IGJhY2t1cHNUZXh0ID0gKHNsYUJhY2t1cHMgPT09ICdub25lJykgPyAnS2VpbmUnIDogKHNsYUJhY2t1cHMgPT09ICdkYWlseScpID8gJ1TDpGdsaWNoIChiZXN0IGVmZm9ydCknIDogJ1fDtmNoZW50bGljaCAoYmVzdCBlZmZvcnQpJzsKICAgIGNvbnN0IGJpbGxpbmdUZXh0ID0gKHNsYUJpbGxpbmcgPT09ICdxdWFydGVybHknKSA/ICdRdWFydGFsc3dlaXNlIGltIFZvcmF1cycgOiAnTW9uYXRsaWNoIGltIFZvcmF1cyc7CiAgICBjb25zdCBtaW5UZXJtVGV4dCA9IChzbGFNaW5UZXJtID4gMCkgPyBgJHtzbGFNaW5UZXJtfSBNb25hdChlKWAgOiAnS2VpbmUnOwoKICAgIGNvbnN0IHNsYUh0bWwgPSAoaW5jbHVkZVNMQSkgPyBgCiAgICAgIDxkaXYgY2xhc3M9InBhZ2VicmVhayI+PC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtc2VjdGlvbiI+CiAgICAgICAgPGgzPkFuaGFuZyBCIOKAkyBDb21wbGlhbmNlIENhcmUgUmV0YWluZXI8L2gzPgogICAgICAgIDxwIHN0eWxlPSJmb250LXNpemU6MC45cmVtO21hcmdpbi1ib3R0b206MXJlbTsiPgogICAgICAgICAgT3B0aW9uYWxlcyBXYXJ0dW5ncy0gdW5kIFN1cHBvcnQtQWJvIGbDvHIga29udGludWllcmxpY2hlIENvbXBsaWFuY2UgdW5kIFBlcmZvcm1hbmNlLgogICAgICAgIDwvcD4KCiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1wcmljZSI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXByaWNlLXJvdyI+PHNwYW4+Q29tcGxpYW5jZSBDYXJlIFJldGFpbmVyPC9zcGFuPjxzcGFuPiR7Zm9ybWF0Q3VycmVuY3koc2xhTW9udGhseSl9L010Ljwvc3Bhbj48L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtcHJpY2Utcm93Ij48c3Bhbj5BYnJlY2hudW5nPC9zcGFuPjxzcGFuPiR7YmlsbGluZ1RleHR9PC9zcGFuPjwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8aDQ+TGVpc3R1bmdzdW1mYW5nPC9oND4KICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgIDxsaT48c3Ryb25nPlJlYWt0aW9uc3plaXQ6PC9zdHJvbmc+IGlubmVyaGFsYiAke3NsYVJlc3BvbnNlfWggKFdlcmt0YWdlKSB2aWEgJHtjaGFubmVsVGV4dH08L2xpPgogICAgICAgICAgPGxpPjxzdHJvbmc+SW5rbC4gQXVmd2FuZDo8L3N0cm9uZz4gJHtzbGFJbmNsdWRlZE1pbn0gTWludXRlbi9Nb25hdDwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5adXNhdHphdWZ3YW5kOjwvc3Ryb25nPiAke2Zvcm1hdEN1cnJlbmN5KHNsYUhvdXJseSl9L1N0dW5kZTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5VcGRhdGVzOjwvc3Ryb25nPiAke3VwZGF0ZXNUZXh0fTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5CYWNrdXBzOjwvc3Ryb25nPiAke2JhY2t1cHNUZXh0fTwvbGk+CiAgICAgICAgICA8bGk+PHN0cm9uZz5TY29wZTo8L3N0cm9uZz4gQ29uc2VudC1Nb25pdG9yaW5nLCBQZXJmb3JtYW5jZS1DaGVja3MsIGtsZWluZSBBbnBhc3N1bmdlbjwvbGk+CiAgICAgICAgPC91bD4KCiAgICAgICAgPGg0Pk5pY2h0IGVudGhhbHRlbjwvaDQ+CiAgICAgICAgPHVsIGNsYXNzPSJvZmZlcnRlLWxpc3Qgd2FybmluZyI+CiAgICAgICAgICA8bGk+TmV1ZSBGdW5rdGlvbmVuLCBSZWRlc2lnbiwgenVzw6R0emxpY2hlIFNlaXRlbjwvbGk+CiAgICAgICAgICA8bGk+UmVjaHRzYmVyYXR1bmcgKERhdGVuc2NodXR6LCBJbXByZXNzdW0pPC9saT4KICAgICAgICAgIDxsaT5Qcm9ibGVtZSBkdXJjaCBEcml0dGFuYmlldGVyL0hvc3Rpbmc8L2xpPgogICAgICAgIDwvdWw+CgogICAgICAgIDxoND5MYXVmemVpdDwvaDQ+CiAgICAgICAgPHVsIGNsYXNzPSJvZmZlcnRlLWxpc3QgbmV1dHJhbCI+CiAgICAgICAgICA8bGk+PHN0cm9uZz5NaW5kZXN0bGF1ZnplaXQ6PC9zdHJvbmc+ICR7bWluVGVybVRleHR9PC9saT4KICAgICAgICAgIDxsaT48c3Ryb25nPkvDvG5kaWd1bmdzZnJpc3Q6PC9zdHJvbmc+ICR7c2xhTm90aWNlfSBUYWdlPC9saT4KICAgICAgICA8L3VsPgogICAgICA8L2Rpdj4KICAgIGAgOiAnJzsKCiAgICAvLyBNYWluIE9mZmVydGUgSFRNTAogICAgY29uc3QgaHRtbCA9IGAKICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZSI+CiAgICAgICAgCiAgICAgICAgPCEtLSBIRUFERVIgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1oZWFkZXIiPgogICAgICAgICAgPGRpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1icmFuZCI+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1sb2dvIj5HVzwvZGl2PgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJvZmZlcnRlLWNvbXBhbnkiPkdhc3Nlcndlcms8L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLWNvbnRhY3QiPiR7bXlFbWFpbH0gwrcgJHtteVBob25lfTwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLWRvYy1pbmZvIj4KICAgICAgICAgICAgPHN0cm9uZz5PZmZlcnRlICR7b2ZmZXJOcn08L3N0cm9uZz48YnI+CiAgICAgICAgICAgICR7dG9kYXl9CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPCEtLSBUSVRFTCAtLT4KICAgICAgICA8aDEgY2xhc3M9Im9mZmVydGUtdGl0bGUiPlN3aXNzLWdyYWRlIFdlYnNpdGU8L2gxPgogICAgICAgIDxwIGNsYXNzPSJvZmZlcnRlLW1ldGEiPlBhY2thZ2U6ICR7cGtnRGF0YS5uYW1lfSDCtyBHw7xsdGlnIGJpcyAke2Zvcm1hdERhdGUodmFsaWRVbnRpbCl9PC9wPgoKICAgICAgICA8IS0tIEtVTkRFIC0tPgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtYWRkcmVzcyI+CiAgICAgICAgICA8c3Ryb25nPiR7ZXNjYXBlSHRtbChjbGllbnROYW1lKX08L3N0cm9uZz4KICAgICAgICAgICR7Y2xpZW50Q29udGFjdCA/IGVzY2FwZUh0bWwoY2xpZW50Q29udGFjdCkgKyAnPGJyPicgOiAnJ30KICAgICAgICAgICR7ZXNjYXBlSHRtbChjbGllbnRBZGRyZXNzKX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPCEtLSBMRUlTVFVOR1NVTUZBTkcgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz4xLiBMZWlzdHVuZ3N1bWZhbmc8L2gzPgogICAgICAgICAgPHA+PHN0cm9uZz4ke3BrZ0RhdGEubmFtZX08L3N0cm9uZz4gKCR7cGtnRGF0YS5wYWdlc30pPC9wPgogICAgICAgICAgPHVsIGNsYXNzPSJvZmZlcnRlLWxpc3QiPgogICAgICAgICAgICAke2luY2x1ZGVzTGlzdH0KICAgICAgICAgIDwvdWw+CiAgICAgICAgICAKICAgICAgICAgICR7ZXh0cmFzID8gYAogICAgICAgICAgPGg0Plp1c2F0emxlaXN0dW5nZW48L2g0PgogICAgICAgICAgPHA+JHtlc2NhcGVIdG1sKGV4dHJhcyl9PC9wPgogICAgICAgICAgYCA6ICcnfQogICAgICAgICAgCiAgICAgICAgICA8aDQ+TmljaHQgaW0gVW1mYW5nIGVudGhhbHRlbjwvaDQ+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCB3YXJuaW5nIj4KICAgICAgICAgICAgJHtub3RJbmNsdWRlZExpc3R9CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgoKICAgICAgICA8IS0tIENPTVBMSUFOQ0UgU1RBQ0sgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz4yLiBTd2lzcyBDb25zZW50IFN0YWNrPC9oMz4KICAgICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtZ3VhcmFudGVlIj4KICAgICAgICAgICAgPHN0cm9uZz5Td2lzcyBMZWdhbCBFbmdpbmUgdjQuMjwvc3Ryb25nPjxicj4KICAgICAgICAgICAgRWNodGVzIFByZWZlcmVuY2UgQ2VudGVyLCBTY3JpcHQtQmxvY2tpbmcgYnkgRGVmYXVsdCwgT3B0LWluIFRyYWNraW5nLCBtb2R1bGFyZSBEYXRlbnNjaHV0enNlaXRlbiDigJMgcmV2RFNHIC8gRFNHVk8ga29uZm9ybS4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPHVsIGNsYXNzPSJvZmZlcnRlLWxpc3QiPgogICAgICAgICAgICA8bGk+UHJlZmVyZW5jZSBDZW50ZXIgKE5vdHdlbmRpZywgU3RhdGlzdGlrLCBNYXJrZXRpbmcpPC9saT4KICAgICAgICAgICAgPGxpPlNjcmlwdC1CbG9ja2luZyDigJMga2VpbiBUcmFja2luZyBvaG5lIENvbnNlbnQ8L2xpPgogICAgICAgICAgICA8bGk+RGF0ZW5zY2h1dHotR2VuZXJhdG9yIChkeW5hbWlzY2gsIG1vZHVsYXIpPC9saT4KICAgICAgICAgICAgPGxpPlRyYWNraW5nIFByZXNldHMgKE5vIFRyYWNraW5nLCBHQTQgT3B0LWluLCBNYXRvbW8pPC9saT4KICAgICAgICAgIDwvdWw+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gR0FSQU5USUUgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz4zLiBMZWlzdHVuZ3NnYXJhbnRpZTwvaDM+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLWd1YXJhbnRlZSI+CiAgICAgICAgICAgIDxzdHJvbmc+UGVyZm9ybWFuY2UgKyBSZXNwb25zaXZlPC9zdHJvbmc+PGJyPgogICAgICAgICAgICBQYWdlU3BlZWQgU2NvcmUg4omlIDkwIChNb2JpbGUpIMK3IFZvbGxzdMOkbmRpZyByZXNwb25zaXZlIMK3IEtlaW5lIExheW91dC1TaGlmdHMKICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8IS0tIElOVkVTVElUSU9OIC0tPgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtc2VjdGlvbiI+CiAgICAgICAgICA8aDM+NC4gSW52ZXN0aXRpb248L2gzPgogICAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1wcmljZSI+CiAgICAgICAgICAgICR7cHJpY2VCb3hIdG1sfQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8cD48c3Ryb25nPlphaGx1bmdzcGxhbjo8L3N0cm9uZz48L3A+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPiR7ZGVwb3NpdFBjdH0lIGJlaSBBdWZ0cmFnc2VydGVpbHVuZzogPHN0cm9uZz4ke2Zvcm1hdEN1cnJlbmN5KGRlcG9zaXQpfTwvc3Ryb25nPjwvbGk+CiAgICAgICAgICAgIDxsaT4kezEwMCAtIGRlcG9zaXRQY3R9JSB2b3IgR28tTGl2ZTogPHN0cm9uZz4ke2Zvcm1hdEN1cnJlbmN5KHJlc3QpfTwvc3Ryb25nPjwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgoKICAgICAgICA8IS0tIFRJTUVMSU5FIC0tPgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtc2VjdGlvbiI+CiAgICAgICAgICA8aDM+NS4gQWJsYXVmICYgTGllZmVydW5nPC9oMz4KICAgICAgICAgIDx1bCBjbGFzcz0ib2ZmZXJ0ZS1saXN0IG5ldXRyYWwiPgogICAgICAgICAgICA8bGk+PHN0cm9uZz5MaWVmZXJmcmlzdDo8L3N0cm9uZz4gJHtkZWxpdmVyeX0gJHtkZWxpdmVyeVVuaXRMYWJlbH0gbmFjaCBFaW5nYW5nIGFsbGVyIE1hdGVyaWFsaWVuPC9saT4KICAgICAgICAgICAgPGxpPjxzdHJvbmc+RmVlZGJhY2stUnVuZGVuOjwvc3Ryb25nPiAke3JldmlzaW9uc1RleHR9PC9saT4KICAgICAgICAgICAgPGxpPjxzdHJvbmc+QWJuYWhtZWZyaXN0Ojwvc3Ryb25nPiAke2FjY2VwdERheXN9IFRhZ2UgJHthY2NlcHRBdXRvID09PSAneWVzJyA/ICcoYXV0b21hdGlzY2ggYmVpIEF1c2JsZWliZW4gdm9uIE3DpG5nZWxyw7xnZW4pJyA6ICcobnVyIHNjaHJpZnRsaWNoKSd9PC9saT4KICAgICAgICAgIDwvdWw+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLWluZm8iPgogICAgICAgICAgICBEaWUgQWJuYWhtZSBsw7ZzdCBkaWUgU2NobHVzc3phaGx1bmcgYXVzLgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gUkVDSFRFIC0tPgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtc2VjdGlvbiI+CiAgICAgICAgICA8aDM+Ni4gTnV0enVuZ3NyZWNodGU8L2gzPgogICAgICAgICAgPHVsIGNsYXNzPSJvZmZlcnRlLWxpc3QgbmV1dHJhbCI+CiAgICAgICAgICAgIDxsaT5OYWNoIHZvbGxzdMOkbmRpZ2VyIEJlemFobHVuZyBlcmjDpGx0IGRlciBLdW5kZSBhbGxlIE51dHp1bmdzcmVjaHRlIGFuIGRlciBXZWJzaXRlLjwvbGk+CiAgICAgICAgICAgIDxsaT5EZXIgS3VuZGUgaXN0IHZlcmFudHdvcnRsaWNoIGbDvHIgZGllIFJlY2h0bcOkc3NpZ2tlaXQgZGVyIGdlbGllZmVydGVuIEluaGFsdGUuPC9saT4KICAgICAgICAgICAgJHtwb3J0Zm9saW9PayA/ICc8bGk+RGVyIEF1ZnRyYWduZWhtZXIgZGFyZiBkaWUgV2Vic2l0ZSBhbHMgUmVmZXJlbnogdmVyd2VuZGVuLjwvbGk+JyA6ICc8bGk+UmVmZXJlbnpuZW5udW5nOiBuaWNodCBlcmxhdWJ0LjwvbGk+J30KICAgICAgICAgIDwvdWw+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gVkVSQU5UV09SVExJQ0hLRUlURU4gLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz43LiBWZXJhbnR3b3J0bGljaGtlaXRlbjwvaDM+CiAgICAgICAgICAKICAgICAgICAgIDxoND5HYXNzZXJ3ZXJrOjwvaDQ+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPkVyc3RlbGx1bmcgZ2Vtw6RzcyBMZWlzdHVuZ3N1bWZhbmc8L2xpPgogICAgICAgICAgICA8bGk+RWluaGFsdHVuZyBkZXIgTGVpc3R1bmdzZ2FyYW50aWU8L2xpPgogICAgICAgICAgICA8bGk+RmFjaGdlcmVjaHRlIFVtc2V0enVuZyBuYWNoIFdlYnN0YW5kYXJkPC9saT4KICAgICAgICAgICAgPGxpPkRlcGxveW1lbnQgYXVmIEt1bmRlbi1Ib3N0aW5nPC9saT4KICAgICAgICAgIDwvdWw+CgogICAgICAgICAgPGg0Pkt1bmRlOjwvaDQ+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPkxpZWZlcnVuZyBhbGxlciBNYXRlcmlhbGllbiAoVGV4dGUsIEJpbGRlciwgTG9nbyk8L2xpPgogICAgICAgICAgICA8bGk+QmVyZWl0c3RlbGx1bmcgZGVzIEhvc3RpbmctWnVnYW5nczwvbGk+CiAgICAgICAgICAgIDxsaT5SZWNodG3DpHNzaWdrZWl0IGFsbGVyIEluaGFsdGU8L2xpPgogICAgICAgICAgICA8bGk+RG9tYWluICYgbGF1ZmVuZGUgSG9zdGluZy1Lb3N0ZW48L2xpPgogICAgICAgICAgPC91bD4KCiAgICAgICAgICAke2xpYWJpbGl0eUNhcCA/IGAKICAgICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtaW5mbyI+CiAgICAgICAgICAgIDxzdHJvbmc+SGFmdHVuZzo8L3N0cm9uZz4gQmVncmVuenQgYXVmIGRlbiBBdWZ0cmFnc3dlcnQuIEtlaW5lIEhhZnR1bmcgZsO8ciBpbmRpcmVrdGUgU2Now6RkZW4gb2RlciBlbnRnYW5nZW5lbiBHZXdpbm4uCiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIGAgOiAnJ30KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPCEtLSBEQVRFTlNDSFVUWiAtLT4KICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXNlY3Rpb24iPgogICAgICAgICAgPGgzPjguIERhdGVuc2NodXR6ICYgQ29tcGxpYW5jZTwvaDM+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPkRlciBLdW5kZSBpc3QgVmVyYW50d29ydGxpY2hlciBmw7xyIEluaGFsdGUgdW5kIHJlY2h0bGljaGUgQW5nYWJlbi48L2xpPgogICAgICAgICAgICA8bGk+U3dpc3MgQ29uc2VudCBTdGFjayBpc3Qgc3RhbmRhcmRtw6Rzc2lnIGludGVncmllcnQuPC9saT4KICAgICAgICAgICAgPGxpPlRyYWNraW5nIG51ciBuYWNoIGV4cGxpeml0ZW0gT3B0LWluICh3ZW5uIGFrdGl2aWVydCkuPC9saT4KICAgICAgICAgICAgPGxpPkhvc3RpbmctRW1wZmVobHVuZzogU2Nod2VpemVyIEFuYmlldGVyICh6LkIuIEluZm9tYW5pYWspPC9saT4KICAgICAgICAgIDwvdWw+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gUkVDSFQgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz45LiBBbndlbmRiYXJlcyBSZWNodDwvaDM+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPkVzIGdpbHQgc2Nod2VpemVyaXNjaGVzIFJlY2h0LjwvbGk+CiAgICAgICAgICAgIDxsaT5HZXJpY2h0c3N0YW5kIGlzdCAke2p1cmlzZGljdGlvbn0uPC9saT4KICAgICAgICAgICAgPGxpPlZlcnRyYWdzYXJ0OiBXZXJrdmVydHJhZyBnZW3DpHNzIEFydC4gMzYzIGZmLiBPUi48L2xpPgogICAgICAgICAgPC91bD4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPCEtLSBBVUZUUkFHU0VSVEVJTFVORyAtLT4KICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXNlY3Rpb24iPgogICAgICAgICAgPGgzPjEwLiBBdWZ0cmFnc2VydGVpbHVuZzwvaDM+CiAgICAgICAgICA8cD5EaWVzZXIgQXVmdHJhZyBrb21tdCB6dXN0YW5kZSBkdXJjaDo8L3A+CiAgICAgICAgICA8dWwgY2xhc3M9Im9mZmVydGUtbGlzdCBuZXV0cmFsIj4KICAgICAgICAgICAgPGxpPlNjaHJpZnRsaWNoZSBCZXN0w6R0aWd1bmcgcGVyIEUtTWFpbCwgPHN0cm9uZz5PREVSPC9zdHJvbmc+PC9saT4KICAgICAgICAgICAgPGxpPsOcYmVyd2Vpc3VuZyBkZXIgQW56YWhsdW5nIHZvbiAke2Zvcm1hdEN1cnJlbmN5KGRlcG9zaXQpfTwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgICAgPHAgc3R5bGU9Im1hcmdpbi10b3A6MC43NXJlbTsiPk1pdCBkZXIgQXVmdHJhZ3NlcnRlaWx1bmcgYmVzdMOkdGlndCBkZXIgS3VuZGUsIGRpZXNlIE9mZmVydGUgZ2VsZXNlbiB1bmQgYWt6ZXB0aWVydCB6dSBoYWJlbi48L3A+CiAgICAgICAgICAke2luY2x1ZGVEaXNjbGFpbWVyID8gJzxwIHN0eWxlPSJmb250LXNpemU6MC44cmVtO2NvbG9yOnZhcigtLWMtdGV4dC1tdXRlZCk7bWFyZ2luLXRvcDowLjVyZW07Ij5IaW53ZWlzOiBEaWVzZSBPZmZlcnRlIGVyc2V0enQga2VpbmUgUmVjaHRzYmVyYXR1bmcuPC9wPicgOiAnJ30KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPCEtLSBDVEEgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1jdGEiPgogICAgICAgICAgPHN0cm9uZz5Qcm9qZWt0IHN0YXJ0ZW48L3N0cm9uZz4KICAgICAgICAgIEFuemFobHVuZyB2b24gJHtmb3JtYXRDdXJyZW5jeShkZXBvc2l0KX0gw7xiZXJ3ZWlzZW4gYXVmOjxicj4KICAgICAgICAgICR7bXlJYmFufSDCtyAke215TmFtZX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgJHtpbmNsdWRlQUdCID8gYAogICAgICAgIDxkaXYgY2xhc3M9InBhZ2VicmVhayI+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zZWN0aW9uIj4KICAgICAgICAgIDxoMz5BbmhhbmcgQTogQWxsZ2VtZWluZSBHZXNjaMOkZnRzYmVkaW5ndW5nZW48L2gzPgogICAgICAgICAgCiAgICAgICAgICA8ZGl2IGNsYXNzPSJvZmZlcnRlLXRlcm1zIj4KICAgICAgICAgICAgPGg0PjEuIEdlbHR1bmdzYmVyZWljaDwvaDQ+CiAgICAgICAgICAgIDxwPkRpZXNlIEFHQiBnZWx0ZW4gZsO8ciBzw6RtdGxpY2hlIFdlYmRlc2lnbi1MZWlzdHVuZ2VuIHZvbiBHYXNzZXJ3ZXJrLjwvcD4KCiAgICAgICAgICAgIDxoND4yLiBWZXJ0cmFnc2FydDwvaDQ+CiAgICAgICAgICAgIDxwPldlcmt2ZXJ0cmFnIGdlbcOkc3MgQXJ0LiAzNjMgZmYuIE9SLjwvcD4KCiAgICAgICAgICAgIDxoND4zLiBNaXR3aXJrdW5nc3BmbGljaHRlbjwvaDQ+CiAgICAgICAgICAgIDxwPkRlciBLdW5kZSBsaWVmZXJ0IEluaGFsdGUgdm9sbHN0w6RuZGlnIHVuZCByZWNodHplaXRpZy4gVmVyesO2Z2VydW5nZW4gdmVybMOkbmdlcm4gRnJpc3Rlbi48L3A+CgogICAgICAgICAgICA8aDQ+NC4gQWJuYWhtZTwvaDQ+CiAgICAgICAgICAgIDxwPk5hY2ggQWJuYWhtZSBnaWx0IGRhcyBXZXJrIGFscyBnZW5laG1pZ3QuIE3DpG5nZWwgc2luZCBpbm5lcnQgZGVyIEZyaXN0IHNjaHJpZnRsaWNoIHp1IHLDvGdlbi48L3A+CgogICAgICAgICAgICA8aDQ+NS4gw4RuZGVydW5nZW48L2g0PgogICAgICAgICAgICA8cD7DhG5kZXJ1bmdlbiBhdXNzZXJoYWxiIGRlcyBVbWZhbmdzIHdlcmRlbiBuYWNoIEF1ZndhbmQgdmVycmVjaG5ldC48L3A+CgogICAgICAgICAgICA8aDQ+Ni4gWmFobHVuZzwvaDQ+CiAgICAgICAgICAgIDxwPkJlaSBWZXJ6dWcga2FubiBHYXNzZXJ3ZXJrIExlaXN0dW5nZW4gcGF1c2llcmVuLjwvcD4KCiAgICAgICAgICAgIDxoND43LiBSZWNodGU8L2g0PgogICAgICAgICAgICA8cD5EZXIgS3VuZGUgZ2FyYW50aWVydCBkaWUgUmVjaHRtw6Rzc2lna2VpdCBnZWxpZWZlcnRlciBJbmhhbHRlLjwvcD4KCiAgICAgICAgICAgIDxoND44LiBIYWZ0dW5nPC9oND4KICAgICAgICAgICAgPHA+QmVncmVuenQgYXVmIEF1ZnRyYWdzd2VydC4gS2VpbmUgSGFmdHVuZyBmw7xyIGluZGlyZWt0ZSBTY2jDpGRlbi48L3A+CgogICAgICAgICAgICA8aDQ+OS4gUmVjaHQ8L2g0PgogICAgICAgICAgICA8cD5TY2h3ZWl6ZXJpc2NoZXMgUmVjaHQuIEdlcmljaHRzc3RhbmQ6ICR7anVyaXNkaWN0aW9ufS48L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICBgIDogJyd9CgogICAgICAgICR7c2xhSHRtbH0KCiAgICAgICAgPCEtLSBVTlRFUlNDSFJJRlQgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ib2ZmZXJ0ZS1zaWduYXR1cmUiPgogICAgICAgICAgPHAgc3R5bGU9ImZvbnQtc2l6ZTowLjg1cmVtO2NvbG9yOnZhcigtLWMtdGV4dC1tdXRlZCk7Ij5CZWkgc2NocmlmdGxpY2hlciBCZXN0w6R0aWd1bmc6PC9wPgogICAgICAgICAgPGRpdiBjbGFzcz0ic2lnbmF0dXJlLXJvdyI+CiAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2lnbmF0dXJlLWJveCI+PC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2lnbmF0dXJlLWxhYmVsIj5PcnQsIERhdHVtPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNpZ25hdHVyZS1ib3giPjwvZGl2PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNpZ25hdHVyZS1sYWJlbCI+VW50ZXJzY2hyaWZ0IEt1bmRlPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gRk9PVEVSIC0tPgogICAgICAgIDxkaXYgY2xhc3M9Im9mZmVydGUtZm9vdGVyIj4KICAgICAgICAgICR7bXlOYW1lfSDCtyAke215QWRkcmVzc308YnI+CiAgICAgICAgICAke215RW1haWx9IMK3ICR7bXlQaG9uZX08YnI+CiAgICAgICAgICA8YnI+CiAgICAgICAgICBEaWVzZSBPZmZlcnRlIGlzdCBnw7xsdGlnIGJpcyAke2Zvcm1hdERhdGUodmFsaWRVbnRpbCl9LgogICAgICAgIDwvZGl2PgoKICAgICAgPC9kaXY+CiAgICBgOwoKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3JykuaW5uZXJIVE1MID0gaW5jbHVkZU9mZmVyID8gaHRtbCA6IChpbmNsdWRlU0xBID8gYDxkaXYgY2xhc3M9Im9mZmVydGUiPiR7c2xhSHRtbH08L2Rpdj5gIDogJzxkaXYgY2xhc3M9Im9mZmVydGUiPjxwPkJpdHRlIG1pbmRlc3RlbnMgZWluIE1vZHVsIGF1c3fDpGhsZW4uPC9wPjwvZGl2PicpOwogICAgc2F2ZVN0YXRlKCk7CiAgfQoKICBmdW5jdGlvbiBjb3B5VGV4dCgpIHsKICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpOwogICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJldmlldy5pbm5lclRleHQpOwogICAgYWxlcnQoJ1RleHQga29waWVydCEnKTsKICB9CgogIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHsKICAgIGlmICghY29uZmlybSgnRm9ybXVsYXIgenVyw7xja3NldHplbj8nKSkgcmV0dXJuOwogICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2dhc3Nlcndlcmstb2ZmZXJ0ZS1zdGF0ZScpOwogICAgbG9jYXRpb24ucmVsb2FkKCk7CiAgfQoKICBmdW5jdGlvbiBzYXZlU3RhdGUoKSB7CiAgICBjb25zdCBmaWVsZHMgPSBbJ215TmFtZScsICdteUVtYWlsJywgJ215UGhvbmUnLCAnbXlBZGRyZXNzJywgJ215SWJhbicsICd2YXRNb2RlJywgJ3ZhdFJhdGUnLCAnbXlWYXROcicsICdqdXJpc2RpY3Rpb24nLAogICAgICAgICAgICAgICAgICAgICdjbGllbnROYW1lJywgJ2NsaWVudENvbnRhY3QnLCAnY2xpZW50QWRkcmVzcycsCiAgICAgICAgICAgICAgICAgICAgJ3BhY2thZ2UnLCAncHJpY2UnLCAnZGVwb3NpdCcsICdkZWxpdmVyeScsICdkZWxpdmVyeVVuaXQnLCAncmV2aXNpb25zJywgJ2V4dHJhcycsCiAgICAgICAgICAgICAgICAgICAgJ2FjY2VwdERheXMnLCAnYWNjZXB0QXV0bycsICdvZmZlck5yJywgJ3ZhbGlkVW50aWwnLAogICAgICAgICAgICAgICAgICAgICdzbGFNb250aGx5JywgJ3NsYUJpbGxpbmcnLCAnc2xhUmVzcG9uc2UnLCAnc2xhQ2hhbm5lbCcsICdzbGFVcGRhdGVzJywgJ3NsYUJhY2t1cHMnLCAnc2xhTWluVGVybScsICdzbGFOb3RpY2UnLCAnc2xhSW5jbHVkZWRNaW4nLCAnc2xhSG91cmx5J107CiAgICBjb25zdCBjaGVja2JveGVzID0gWydpbmNsdWRlT2ZmZXInLCAnaW5jbHVkZVNMQScsICdwb3J0Zm9saW9PaycsICdsaWFiaWxpdHlDYXAnLCAnaW5jbHVkZUFHQicsICdpbmNsdWRlRGlzY2xhaW1lciddOwogICAgCiAgICBjb25zdCBzdGF0ZSA9IHt9OwogICAgZmllbGRzLmZvckVhY2goZiA9PiB7CiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZik7CiAgICAgIGlmIChlbCkgc3RhdGVbZl0gPSBlbC52YWx1ZTsKICAgIH0pOwogICAgY2hlY2tib3hlcy5mb3JFYWNoKGYgPT4gewogICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGYpOwogICAgICBpZiAoZWwpIHN0YXRlW2ZdID0gZWwuY2hlY2tlZDsKICAgIH0pOwogICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhc3Nlcndlcmstb2ZmZXJ0ZS1zdGF0ZScsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7CiAgfQoKICBmdW5jdGlvbiBsb2FkU3RhdGUoKSB7CiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYXNzZXJ3ZXJrLW9mZmVydGUtc3RhdGUnKTsKICAgIGlmIChzYXZlZCkgewogICAgICBjb25zdCBzdGF0ZSA9IEpTT04ucGFyc2Uoc2F2ZWQpOwogICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChrZXkgPT4gewogICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KTsKICAgICAgICBpZiAoIWVsKSByZXR1cm47CiAgICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIGVsLmNoZWNrZWQgPSAhIXN0YXRlW2tleV07CiAgICAgICAgZWxzZSBlbC52YWx1ZSA9IHN0YXRlW2tleV07CiAgICAgIH0pOwogICAgfQogICAgdXBkYXRlUHJldmlldygpOwogIH0KCiAgLy8gQXV0by1zYXZlIG9uIGlucHV0CiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS5mb3JFYWNoKGVsID0+IHsKICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlUHJldmlldyk7CiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVQcmV2aWV3KTsKICB9KTsKCiAgLy8gSW5pdAogIGxvYWRTdGF0ZSgpOwo8L3NjcmlwdD4KCgo8c2NyaXB0PgogIC8vIFNtb290aCBCdWlsZGVyIEJyaWRnZTogVG9rZW5zICsgUHJlZmlsbAogIChmdW5jdGlvbiAoKSB7CiAgICBmdW5jdGlvbiBzZXRWYWwoaWQsIHZhbCkgewogICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuOwogICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7CiAgICAgIGlmIChlbCkgZWwudmFsdWUgPSBTdHJpbmcodmFsKTsKICAgIH0KICAgIGZ1bmN0aW9uIGFwcGx5UHJlZmlsbChwKSB7CiAgICAgIGlmICghcCkgcmV0dXJuOwogICAgICB2YXIgbGVnYWwgPSAocC5sZWdhbCB8fCB7fSk7CiAgICAgIHNldFZhbCgnbXlOYW1lJywgbGVnYWwubmFtZSB8fCBwLnNpdGVOYW1lIHx8ICcnKTsKICAgICAgc2V0VmFsKCdteUVtYWlsJywgbGVnYWwuZW1haWwgfHwgJycpOwogICAgICBzZXRWYWwoJ215UGhvbmUnLCBsZWdhbC5waG9uZSB8fCAnJyk7CiAgICAgIHNldFZhbCgnbXlBZGRyZXNzJywgbGVnYWwuYWRkcmVzcyB8fCAnJyk7CiAgICAgIHNldFZhbCgnbXlWYXROcicsIGxlZ2FsLnVpZCB8fCAnJyk7CiAgICAgIHRyeSB7IGlmICh0eXBlb2YgdXBkYXRlUHJldmlldyA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlUHJldmlldygpOyB9IGNhdGNoIChlKSB7fQogICAgfQoKICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHsKICAgICAgdmFyIGQgPSBlICYmIGUuZGF0YSA/IGUuZGF0YSA6IG51bGw7CiAgICAgIGlmICghZCB8fCAhZC50eXBlKSByZXR1cm47CgogICAgICBpZiAoZC50eXBlID09PSAnc2Itb2ZmZXItdG9rZW5zJyAmJiBkLnBheWxvYWQgJiYgdHlwZW9mIGQucGF5bG9hZC5jc3MgPT09ICdzdHJpbmcnKSB7CiAgICAgICAgdmFyIHN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiVG9rZW5zJyk7CiAgICAgICAgaWYgKHN0KSBzdC50ZXh0Q29udGVudCA9IGQucGF5bG9hZC5jc3M7CgogICAgICAgIHZhciBpc0RhcmsgPSAhIWQucGF5bG9hZC5kYXJrOwogICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgaXNEYXJrKTsKICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXctcm9vdCcpOwogICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycsIGlzRGFyayk7CiAgICAgIH0KCiAgICAgIGlmIChkLnR5cGUgPT09ICdzYi1vZmZlci1wcmVmaWxsJyAmJiBkLnBheWxvYWQpIHsKICAgICAgICBhcHBseVByZWZpbGwoZC5wYXlsb2FkKTsKICAgICAgfQogICAgfSk7CgogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHsKICAgICAgLy8gU3RhbmRhbG9uZSBleHBvcnQgcHJlZmlsbDoKICAgICAgdHJ5IHsKICAgICAgICBpZiAod2luZG93Ll9fU0JfUFJFRklMTF9fKSBhcHBseVByZWZpbGwod2luZG93Ll9fU0JfUFJFRklMTF9fKTsKICAgICAgfSBjYXRjaCAoZSkge30KICAgIH0pOwogIH0pKCk7Cjwvc2NyaXB0Pgo8c2NyaXB0PgogIC8vIFBsYWNlaG9sZGVyIGbDvHIgU3RhbmRhbG9uZSBFeHBvcnQgKHdpcmQgaW0gQnVpbGRlciBlcnNldHp0KQogIHdpbmRvdy5fX1NCX1BSRUZJTExfXyA9ICh0eXBlb2YgX19TQl9QUkVGSUxMX0pTT05fXyAhPT0gJ3VuZGVmaW5lZCcpID8gX19TQl9QUkVGSUxMX0pTT05fXyA6IG51bGw7Cjwvc2NyaXB0PgoKPC9ib2R5Pgo8L2h0bWw+Cg==";


function b64ToUtf8(b64) {
  try {
    // atob + UTF-8 decode
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    const dec = new TextDecoder('utf-8');
    return dec.decode(bytes);
  } catch (e) {
    // Fallback for older browsers
    try {
      return decodeURIComponent(escape(atob(b64)));
    } catch (e2) {
      return '';
    }
  }
}


// ============================================
// HELPER: Render Icon
// ============================================

const RenderIcon = ({ name, size = 20 }) => {
  const iconSvg = Icons[name];
  if (!iconSvg) return null;
  return <span dangerouslySetInnerHTML={{ __html: iconSvg }} />;
};

// ============================================
// HEADER COMPONENT
// ============================================

const PreviewHeader = ({ data, settings, onToggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // ESC key handler
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);
  
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);
  
  return (
    <header className="preview-header">
      <div className="preview-container">
        <div className="preview-header__inner">
          {/* Brand */}
          <a href="#" className="preview-header__brand">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt={data.companyName} className="preview-header__logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
            ) : (
              <div className="preview-header__logo">{data.logoText}</div>
            )}
            <span className="preview-header__name">{data.companyName}</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="preview-header__nav">
            {data.navItems?.map((item, i) => (
              <a key={i} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="preview-header__nav-link">
                {item}
              </a>
            ))}
            
            {settings.darkModeToggle && (
              <button 
                className="preview-header__dark-toggle" 
                aria-label={settings.darkMode ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
                aria-pressed={settings.darkMode}
                role="switch"
                data-active={settings.darkMode ? "true" : "false"}
                onClick={onToggleDarkMode}
              />
            )}
            
            <button className="preview-header__cta">{data.ctaText}</button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`preview-header__toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation with Backdrop */}
      <nav 
        id="mobile-nav"
        className={`preview-header__mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        onClick={(e) => e.target === e.currentTarget && setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="preview-header__mobile-nav-panel">
          {data.navItems?.map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="preview-btn preview-btn--primary" style={{ marginTop: 'auto' }}>
            {data.ctaText}
          </button>
        </div>
      </nav>
    </header>
  );
};

// ============================================
// HERO COMPONENT
// ============================================

const PreviewHero = ({ data, settings }) => {
  return (
    <section className="preview-hero">
      <div className="preview-container">
        <div className="preview-hero__inner">
          <div className="preview-hero__content">
            <h1 className="preview-hero__title">
              {data.title}
            </h1>
            <p className="preview-hero__text">{data.subtitle}</p>
            <div className="preview-hero__actions">
              <button className="preview-btn preview-btn--primary">{data.primaryBtn}</button>
              <button className="preview-btn preview-btn--secondary">{data.secondaryBtn}</button>
            </div>
          </div>
          
          {data.imageUrl && (
            <div className="preview-hero__image">
              <img src={data.imageUrl} alt="Hero" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TRUST BAR COMPONENT
// ============================================

const PreviewTrust = ({ data, settings }) => {
  return (
    <section className="preview-trust">
      <div className="preview-container">
        <div className="preview-trust__inner">
          {data.items?.map((item, i) => (
            <div key={i} className="preview-trust__item">
              <div className="preview-trust__value">{item.value}</div>
              <div className="preview-trust__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// SERVICES COMPONENT
// ============================================


const PreviewAuthority = ({ data }) => {
  const variant = data.variant || 'chips';
  return (
    <section className="preview-authority">
      <div className="preview-container">
        <div className="preview-section-header" style={{ marginBottom: 16 }}>
          <h2>{data.title}</h2>
        </div>
        {variant === 'list' ? (
          <ul className="preview-authority__list">
            {(data.items || []).map((it, i) => (
              <li key={i} className="preview-authority__item">
                <span className="preview-authority__icon">{it.icon || '✅'}</span>
                <span>{it.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="preview-authority__chips">
            {(data.items || []).map((it, i) => (
              <div key={i} className="preview-authority__chip">
                <span className="preview-authority__icon">{it.icon || '✅'}</span>
                <span>{it.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const PreviewProcess = ({ data }) => {
  return (
    <section className="preview-process">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

        <div className="preview-process__grid">
          {(data.steps || []).map((s, i) => (
            <div key={i} className="preview-process__card">
              <div className="preview-process__num">{s.num || String(i+1).padStart(2,'0')}</div>
              <div className="preview-process__title">{s.title}</div>
              <div className="preview-process__text">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PreviewProofTable = ({ data }) => {
  const headers = data.headers || ['Kriterium', 'Wir', 'Andere'];
  const hc = data.highlightColumn ?? 1;
  return (
    <section className="preview-proof">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

        <div className="preview-proof__tableWrap">
          <table className="preview-proof__table">
            <thead>
              <tr>
                {headers.slice(0,3).map((h, i) => (
                  <th key={i} className={i === hc ? 'is-highlight' : ''}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(data.rows || []).map((r, i) => (
                <tr key={i}>
                  <td>{r.criterion}</td>
                  <td className={hc === 1 ? 'is-highlight' : ''}>{r.us}</td>
                  <td className={hc === 2 ? 'is-highlight' : ''}>{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const PreviewStickyCta = ({ data }) => {
  return (
    <div className="preview-sticky">
      <div className="preview-sticky__inner">
        <div className="preview-sticky__text">
          <div style={{ fontWeight: 650 }}>{data.text}</div>
          {data.note ? <div style={{ opacity: .8, fontSize: '0.95em' }}>{data.note}</div> : null}
        </div>
        <div className="preview-sticky__actions">
          <a href="#kontakt" className="preview-btn preview-btn--primary">{data.buttonText || 'Termin'}</a>
          {data.phone ? <a href={`tel:${data.phone}`} className="preview-btn">{data.phone}</a> : null}
        </div>
      </div>
    </div>
  );
};

const PreviewServices = ({ data, settings }) => {
  return (
    <section className="preview-services" id="leistungen">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        
        <div className="preview-services__grid">
          {data.items?.map((item, i) => (
            <div key={i} className="preview-service-card">
              <div className="preview-service-card__icon">
                {item.icon || '📋'}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// BENEFITS COMPONENT
// ============================================

const PreviewBenefits = ({ data, settings }) => {
  const items = data.items || [];
  const gridClass = items.length === 3 
    ? 'preview-benefits__grid preview-benefits__grid--three' 
    : 'preview-benefits__grid';
  
  return (
    <section className="preview-benefits">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          {data.subtitle && <p>{data.subtitle}</p>}
        </div>
        
        <div className={gridClass}>
          {items.map((item, i) => (
            <div key={i} className="preview-benefit">
              <div className="preview-benefit__icon">
                <RenderIcon name="check" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TEAM COMPONENT
// ============================================

const PreviewTeam = ({ data, settings }) => {
  return (
    <section className="preview-team" id="team">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        
        <div className="preview-team__grid">
          {data.members?.map((member, i) => (
            <div key={i} className="preview-team-member">
              <div className="preview-team-member__image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <RenderIcon name="users" />
                )}
              </div>
              <h4>{member.name}</h4>
              <p className="preview-team-member__role">{member.role}</p>
              <p className="preview-team-member__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// GALLERY COMPONENT
// ============================================

const PreviewGallery = ({ data, settings }) => {
  return (
    <section className="preview-gallery">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        
        <div className="preview-gallery__grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {data.images?.map((img, i) => (
            <div key={i} style={{
              aspectRatio: '4/3',
              background: settings.darkMode ? 'rgba(255,255,255,0.05)' : '#e5e5e5',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {img.url ? (
                <img src={img.url} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ opacity: 0.3 }}><RenderIcon name="image" /></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS COMPONENT
// ============================================

const PreviewTestimonials = ({ data, settings }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  
  return (
    <section className="preview-testimonials">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
        </div>
        
        <div className="preview-testimonials__grid">
          {data.items?.map((item, i) => (
            <div key={i} className="preview-testimonial">
              <div className="preview-testimonial__stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j}><RenderIcon name="star" /></span>
                ))}
              </div>
              <p className="preview-testimonial__quote">"{item.quote}"</p>
              <div className="preview-testimonial__author">
                <div className="preview-testimonial__avatar">
                  {getInitials(item.author)}
                </div>
                <div>
                  <div className="preview-testimonial__name">{item.author}</div>
                  <div className="preview-testimonial__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FAQ COMPONENT
// ============================================

const PreviewFaq = ({ data, settings }) => {
  return (
    <section className="preview-faq" id="faq">
      <div className="preview-container">
        <div className="preview-section-header">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        
        <div className="preview-faq__list">
          {data.items?.map((item, i) => (
            <details key={i} className="preview-faq-item">
              <summary>{item.question}</summary>
              <div className="preview-faq-item__answer">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA COMPONENT
// ============================================

const PreviewCta = ({ data, settings }) => {
  return (
    <section className="preview-cta" id="kontakt">
      <div className="preview-container">
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
        <div className="preview-cta__actions">
          <a href={`tel:${data.phone?.replace(/\s/g, '')}`} className="preview-btn preview-btn--accent">
            <RenderIcon name="phone" />
            {data.phone}
          </a>
          <a href={`mailto:${data.email}`} className="preview-btn preview-btn--secondary">
            <RenderIcon name="mail" />
            {data.email}
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER COMPONENT
// ============================================

const PreviewFooter = ({ data, settings }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="preview-footer">
      <div className="preview-container">
        <div className="preview-footer__grid">
          {/* Brand Column */}
          <div className="preview-footer__brand">
            <div className="preview-footer__logo">
              <div className="preview-footer__logo-icon">
                {data.companyName?.substring(0, 2).toUpperCase()}
              </div>
              <span className="preview-footer__logo-text">{data.companyName?.split(' ')[0]}</span>
            </div>
            <p className="preview-footer__tagline">{data.tagline}</p>
            
            {/* Social Links */}
            <div className="preview-footer__social">
              {data.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span dangerouslySetInnerHTML={{ __html: Icons.linkedin }} />
                </a>
              )}
              {data.facebook && (
                <a href={data.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span dangerouslySetInnerHTML={{ __html: Icons.facebook }} />
                </a>
              )}
              {data.instagram && (
                <a href={data.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span dangerouslySetInnerHTML={{ __html: Icons.instagram }} />
                </a>
              )}
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div className="preview-footer__column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#">Startseite</a></li>
              <li><a href="#leistungen">Leistungen</a></li>
              <li><a href="#ueber-uns">Über uns</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div className="preview-footer__column">
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="/impressum.html">Impressum</a></li>
              <li><a href="/datenschutz.html">Datenschutz</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="preview-footer__column">
            <h4>Kontakt</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span dangerouslySetInnerHTML={{ __html: Icons.mapPin }} style={{ flexShrink: 0, marginTop: '2px', opacity: 0.6 }} />
                <span>{data.address}</span>
              </li>
              <li>
                <a href={`tel:${data.phone?.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span dangerouslySetInnerHTML={{ __html: Icons.phone }} style={{ opacity: 0.6 }} />
                  {data.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${data.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span dangerouslySetInnerHTML={{ __html: Icons.mail }} style={{ opacity: 0.6 }} />
                  {data.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="preview-footer__bottom">
          <span>© {currentYear} {data.companyName}. Alle Rechte vorbehalten.</span>
          <div className="preview-footer__legal">
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// COOKIE BANNER COMPONENT
// ============================================

const PreviewCookie = ({ data, settings }) => {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <div className="preview-cookie">
      <h4>{data.title}</h4>
      <p>
        {data.text}{' '}
        <a href={data.policyLink}>Mehr erfahren</a>
      </p>
      <div className="preview-cookie__actions">
        <button 
          className="preview-cookie__necessary"
          onClick={() => setVisible(false)}
        >
          {data.acceptNecessary}
        </button>
        <button 
          className="preview-cookie__necessary"
          onClick={() => setVisible(false)}
        >
          {data.acceptReject || "Ablehnen"}
        </button>
        <button 
          className="preview-cookie__necessary"
          onClick={() => setVisible(false)}
        >
          {data.openSettings || "Einstellungen"}
        </button>
        <button 
          className="preview-cookie__all"
          onClick={() => setVisible(false)}
        >
          {data.acceptAll}
        </button>
      </div>
    </div>
  );
};

// ============================================
// COMPONENT RENDERER MAP
// ============================================

const componentRenderers = {
  header: PreviewHeader,
  hero: PreviewHero,
  trust: PreviewTrust,
  authority: PreviewAuthority,
  services: PreviewServices,
  proofTable: PreviewProofTable,
  process: PreviewProcess,
  benefits: PreviewBenefits,
  team: PreviewTeam,
  gallery: PreviewGallery,
  testimonials: PreviewTestimonials,
  faq: PreviewFaq,
  cta: PreviewCta,
  stickyCta: PreviewStickyCta,
  footer: PreviewFooter,
  cookie: PreviewCookie
};

// ============================================
// PREVIEW ROOT COMPONENT
// ============================================

const PreviewRoot = ({ components, order, settings, onToggleDarkMode }) => {
  // Build CSS variables from settings
  const rootStyle = {
    '--c-primary': settings.primaryColor,
    '--c-primary-light': adjustColor(settings.primaryColor, 20),
    '--c-primary-dark': adjustColor(settings.primaryColor, -20),
    '--c-accent': settings.accentColor,
    '--c-accent-light': adjustColor(settings.accentColor, 20)
  };
  
  // Build class names including Premium FX
  const intensity = settings.fxIntensity || 'medium';
  const rootClasses = [
    'preview-root',
    settings.darkMode ? 'dark' : '',
    settings.fontStack !== 'system' ? `font-${settings.fontStack}` : '',
    // Premium FX Classes
    settings.fxOrbs ? 'fx-orbs' : '',
    settings.fxOrbs ? `fx-orbs-${intensity}` : '',
    settings.fxGrain ? 'fx-grain' : '',
    settings.fxGrain ? `fx-grain-${intensity}` : '',
    settings.fxGlass ? 'fx-glass-cards' : ''
  ].filter(Boolean).join(' ');
  
  return (
    <div className={rootClasses} style={rootStyle}>
      {/* Grain Overlay Element */}
      {settings.fxGrain && <div className="fx-grain-overlay" aria-hidden="true" />}
      
      {order.map(id => {
        const component = components[id];
        if (!component?.enabled) return null;
        
        const Renderer = componentRenderers[component.type];
        if (!Renderer) return null;
        
        // Pass onToggleDarkMode only to header
        const extraProps = component.type === 'header' ? { onToggleDarkMode } : {};
        
        return (
          <Renderer 
            key={id} 
            data={component.data} 
            settings={settings}
            {...extraProps} 
          />
        );
      })}
    </div>
  );
};

// ============================================
// HELPER: Adjust color brightness
// ============================================

function adjustColor(hex, percent) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  // Adjust
  r = Math.min(255, Math.max(0, r + (r * percent / 100)));
  g = Math.min(255, Math.max(0, g + (g * percent / 100)));
  b = Math.min(255, Math.max(0, b + (b * percent / 100)));
  
  // Convert back to hex
  return '#' + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, '0')).join('');
}

// ============================================
// EXPORTS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PreviewRoot,
    componentRenderers,
    PreviewHeader,
    PreviewHero,
    PreviewTrust,
    PreviewServices,
    PreviewBenefits,
    PreviewTeam,
    PreviewGallery,
    PreviewTestimonials,
    PreviewFaq,
    PreviewCta,
    PreviewFooter,
    PreviewCookie
  };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - EDITOR COMPONENTS
   ============================================
   UI-Komponenten für den Builder-Editor
   ============================================ */

// React hooks already declared above

// ============================================
// ICON COMPONENT
// ============================================

const Icon = ({ name, size = 16 }) => {
  const svg = Icons[name];
  if (!svg) return null;
  return <span dangerouslySetInnerHTML={{ __html: svg }} style={{ display: 'inline-flex', width: size, height: size }} />;
};

// ============================================
// FORM FIELDS
// ============================================

const EditorField = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="field">
    <label className="field-label">{label}</label>
    <input
      type={type}
      className="field-input"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

const EditorTextarea = ({ label, value, onChange, placeholder, rows = 3 }) => (
  <div className="field">
    <label className="field-label">{label}</label>
    <textarea
      className="field-input"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
    />
  </div>
);

const EditorCheckbox = ({ label, checked, onChange }) => (
  <label className="field-checkbox">
    <input
      type="checkbox"
      checked={checked || false}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="field-checkbox-toggle"></span>
    <span className="field-checkbox-label">{label}</span>
  </label>
);

const EditorColorPicker = ({ label, value, onChange }) => (
  <div className="field">
    <label className="field-label">{label}</label>
    <div className="field-color">
      <input
        type="color"
        className="field-color-picker"
        value={value || '#000000'}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="text"
        className="field-input"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000000"
      />
    </div>
  </div>
);

const EditorSelect = ({ label, value, onChange, options }) => (
  <div className="field">
    <label className="field-label">{label}</label>
    <select
      className="field-input field-select"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

// ============================================
// LIST EDITOR (for arrays of items)
// ============================================

const EditorList = ({ label, items, onChange, fields, maxItems = 10 }) => {
  const addItem = () => {
    if (items.length >= maxItems) return;
    const newItem = {};
    fields.forEach(f => { newItem[f.key] = f.default || ''; });
    onChange([...items, newItem]);
  };
  
  const updateItem = (index, key, value) => {
    const updated = items.map((item, i) => 
      i === index ? { ...item, [key]: value } : item
    );
    onChange(updated);
  };
  
  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };
  
  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    const updated = [...items];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    onChange(updated);
  };
  
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <div className="list-editor">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <div className="list-item-content">
              {fields.map((field, fi) => (
                field.type === 'textarea' ? (
                  <textarea
                    key={fi}
                    className="field-input"
                    value={item[field.key] || ''}
                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={2}
                  />
                ) : (
                  <input
                    key={fi}
                    type="text"
                    className="field-input"
                    value={item[field.key] || ''}
                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                    placeholder={field.placeholder}
                  />
                )
              ))}
            </div>
            <div className="list-item-actions">
              <button 
                className="btn btn-icon btn-sm btn-ghost"
                onClick={() => moveItem(index, -1)}
                disabled={index === 0}
                title="Nach oben"
              >
                ↑
              </button>
              <button 
                className="btn btn-icon btn-sm btn-ghost"
                onClick={() => moveItem(index, 1)}
                disabled={index === items.length - 1}
                title="Nach unten"
              >
                ↓
              </button>
              <button 
                className="btn btn-icon btn-sm btn-danger"
                onClick={() => removeItem(index)}
                title="Löschen"
              >
                <Icon name="trash" />
              </button>
            </div>
          </div>
        ))}
        
        {items.length < maxItems && (
          <button className="list-add" onClick={addItem}>
            <Icon name="plus" /> Hinzufügen
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================
// COMPONENT ITEM (Sidebar)
// ============================================

const ComponentItem = ({ component, isActive, onSelect, onToggle, onDragStart, onDragEnd, onDragOver }) => {
  const meta = componentMeta[component.type] || { icon: '📦', description: '' };
  
  return (
    <div
      className={`component-item ${isActive ? 'active' : ''} ${!component.enabled ? 'disabled' : ''}`}
      onClick={() => onSelect(component.id)}
      draggable
      onDragStart={(e) => onDragStart(e, component.id)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="component-drag-handle" title="Ziehen zum Sortieren">
        <Icon name="drag" />
      </div>
      
      <div className="component-info">
        <div className="component-name">
          <span style={{ marginRight: 8 }}>{meta.icon}</span>
          {component.name}
        </div>
        <div className="component-type">{meta.description}</div>
      </div>
      
      <div
        className={`component-toggle ${component.enabled ? 'on' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(component.id);
        }}
        title={component.enabled ? 'Ausblenden' : 'Einblenden'}
      />
    </div>
  );
};

// ============================================
// SIDEBAR
// ============================================

const Sidebar = ({ 
  components, 
  order, 
  activeComponent, 
  settings,
  onSelectComponent, 
  onToggleComponent,
  onReorder,
  onUpdateComponent,
  onUpdateSettings,
  onOpenTemplates,
  onOpenSettings,
  onOpenStudio,
  builderTheme,
  onToggleBuilderTheme
}) => {
  const [draggedId, setDraggedId] = useState(null);
  
  const handleDragStart = (e, id) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDragEnd = () => {
    setDraggedId(null);
  };
  
  const handleDragOver = (e, targetId) => {
    e.preventDefault();
    if (!draggedId || draggedId === targetId) return;
    
    const dragIndex = order.indexOf(draggedId);
    const hoverIndex = order.indexOf(targetId);
    
    if (dragIndex !== hoverIndex) {
      onReorder(dragIndex, hoverIndex);
    }
  };
  
  const activeComp = activeComponent ? components[activeComponent] : null;
  
  return (
    <aside className="builder-sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">S</div>
        <div className="sidebar-title">
          <h1>Smooth Builder</h1>
          <span>Pro v3.3</span>
        </div>
        <button 
          className="btn btn-icon btn-ghost"
          onClick={onToggleBuilderTheme}
          title={builderTheme === 'dark' ? 'Heller Modus' : 'Dunkler Modus'}
        >
          <Icon name={builderTheme === 'dark' ? 'sun' : 'moon'} />
        </button>
      </div>

      {/* Navigation */}
      <div className="sidebar-topnav">
        <button className="btn btn-primary" onClick={onOpenStudio}>
          <Icon name="spark" /> Treuhand Studio
        </button>
        <button className="btn" onClick={onOpenTemplates}>
          <Icon name="layout" /> Templates
        </button>
        <button className="btn" onClick={onOpenSettings}>
          <Icon name="settings" /> Einstellungen
        </button>
      </div>

      {/* Content */}
      <div className="sidebar-content">
        {/* Component List */}
        <div className="component-list">
          {order.map(id => {
            const comp = components[id];
            if (!comp) return null;
            return (
              <ComponentItem
                key={id}
                component={comp}
                isActive={activeComponent === id}
                onSelect={onSelectComponent}
                onToggle={onToggleComponent}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, id)}
              />
            );
          })}
        </div>
        
        {/* Editor Panel */}
        {activeComp && (
          <div className="editor-panel">
            <h3 className="editor-title">
              {componentMeta[activeComp.type]?.icon} {activeComp.name} bearbeiten
            </h3>
            
            <ComponentEditor
              component={activeComp}
              settings={settings}
              onUpdate={(data) => onUpdateComponent(activeComp.id, data)}
            />
          </div>
        )}
      </div>
</aside>
  );
};

// ============================================
// COMPONENT EDITOR (Dynamic per type)
// ============================================

const ComponentEditor = ({ component, settings, onUpdate }) => {
  const update = (key, value) => {
    onUpdate({ ...component.data, [key]: value });
  };
  
  switch (component.type) {
    case 'header':
      return (
        <>
          <EditorField label="Logo Text" value={component.data.logoText} onChange={(v) => update('logoText', v)} placeholder="BF" />
          <EditorField label="Logo URL (optional)" value={component.data.logoUrl} onChange={(v) => update('logoUrl', v)} placeholder="https://..." />
          <EditorField label="Firmenname" value={component.data.companyName} onChange={(v) => update('companyName', v)} />
          <EditorField label="CTA Button" value={component.data.ctaText} onChange={(v) => update('ctaText', v)} />
          <EditorList
            label="Navigation"
            items={(component.data.navItems || []).map(n => ({ text: n }))}
            onChange={(items) => update('navItems', items.map(i => i.text))}
            fields={[{ key: 'text', placeholder: 'Link-Text' }]}
            maxItems={6}
          />
        </>
      );
      
    case 'hero':
      return (
        <>
          <EditorField label="Headline" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorTextarea label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} rows={3} />
          <EditorField label="Primärer Button" value={component.data.primaryBtn} onChange={(v) => update('primaryBtn', v)} />
          <EditorField label="Sekundärer Button" value={component.data.secondaryBtn} onChange={(v) => update('secondaryBtn', v)} />
          <EditorField label="Bild URL" value={component.data.imageUrl} onChange={(v) => update('imageUrl', v)} placeholder="https://..." />
        </>
      );
      
    case 'trust':
      return (
        <EditorList
          label="Statistiken"
          items={component.data.items || []}
          onChange={(items) => update('items', items)}
          fields={[
            { key: 'value', placeholder: '500+', default: '0' },
            { key: 'label', placeholder: 'Kunden', default: 'Label' }
          ]}
          maxItems={5}
        />
      );
      


    case 'authority':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorSelect
            label="Variante"
            value={component.data.variant || 'chips'}
            onChange={(v) => update('variant', v)}
            options={[
              { value: 'chips', label: 'Chips' },
              { value: 'list', label: 'Liste' }
            ]}
          />
          <EditorList
            label="Einträge"
            items={(component.data.items || []).map(i => ({ icon: i.icon, text: i.text }))}
            onChange={(items) => update('items', items.map(it => ({ icon: it.icon, text: it.text })))}
            fields={[
              { key: 'icon', placeholder: 'Icon (z.B. 🏛️)' },
              { key: 'text', placeholder: 'Text' }
            ]}
            maxItems={6}
          />
        </>
      );

    case 'proofTable':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorTextarea label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} rows={2} />
          <EditorList
            label="Header (3 Spalten)"
            items={(component.data.headers || []).map(h => ({ text: h }))}
            onChange={(items) => update('headers', items.map(i => i.text).slice(0,3))}
            fields={[{ key: 'text', placeholder: 'Header' }]}
            maxItems={3}
          />
          <EditorSelect
            label="Highlight-Spalte"
            value={String(component.data.highlightColumn ?? 1)}
            onChange={(v) => update('highlightColumn', parseInt(v, 10))}
            options={[
              { value: '0', label: 'Kriterium' },
              { value: '1', label: 'Wir' },
              { value: '2', label: 'Andere' }
            ]}
          />
          <EditorList
            label="Zeilen"
            items={(component.data.rows || []).map(r => ({ criterion: r.criterion, us: r.us, other: r.other }))}
            onChange={(items) => update('rows', items.map(it => ({ criterion: it.criterion, us: it.us, other: it.other })))}
            fields={[
              { key: 'criterion', placeholder: 'Kriterium' },
              { key: 'us', placeholder: 'Wir' },
              { key: 'other', placeholder: 'Andere' }
            ]}
            maxItems={10}
          />
        </>
      );

    case 'process':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorTextarea label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} rows={2} />
          <EditorList
            label="Schritte"
            items={(component.data.steps || []).map(s => ({ num: s.num, title: s.title, text: s.text }))}
            onChange={(items) => update('steps', items.map(it => ({ num: it.num, title: it.title, text: it.text })))}
            fields={[
              { key: 'num', placeholder: '01' },
              { key: 'title', placeholder: 'Titel' },
              { key: 'text', placeholder: 'Beschreibung' }
            ]}
            maxItems={6}
          />
        </>
      );

    case 'services':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorField label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} />
          <EditorList
            label="Leistungen"
            items={component.data.items || []}
            onChange={(items) => update('items', items)}
            fields={[
              { key: 'icon', placeholder: '📊 Emoji', default: '📋' },
              { key: 'title', placeholder: 'Titel', default: 'Neue Leistung' },
              { key: 'text', placeholder: 'Beschreibung', type: 'textarea', default: '' }
            ]}
            maxItems={8}
          />
        </>
      );
      
    case 'benefits':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorList
            label="Vorteile"
            items={component.data.items || []}
            onChange={(items) => update('items', items)}
            fields={[
              { key: 'title', placeholder: 'Titel', default: 'Vorteil' },
              { key: 'text', placeholder: 'Beschreibung', type: 'textarea', default: '' }
            ]}
            maxItems={6}
          />
        </>
      );
      
    case 'team':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorField label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} />
          <EditorList
            label="Team-Mitglieder"
            items={component.data.members || []}
            onChange={(items) => update('members', items)}
            fields={[
              { key: 'name', placeholder: 'Name', default: 'Max Muster' },
              { key: 'role', placeholder: 'Position', default: 'Mitarbeiter' },
              { key: 'image', placeholder: 'Bild URL', default: '' },
              { key: 'bio', placeholder: 'Kurzbeschreibung', type: 'textarea', default: '' }
            ]}
            maxItems={8}
          />
        </>
      );
      
    case 'gallery':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorField label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} />
          <EditorList
            label="Bilder"
            items={component.data.images || []}
            onChange={(items) => update('images', items)}
            fields={[
              { key: 'url', placeholder: 'Bild URL', default: '' },
              { key: 'caption', placeholder: 'Bildunterschrift', default: '' }
            ]}
            maxItems={12}
          />
        </>
      );
      
    case 'testimonials':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorList
            label="Kundenstimmen"
            items={component.data.items || []}
            onChange={(items) => update('items', items)}
            fields={[
              { key: 'quote', placeholder: 'Zitat', type: 'textarea', default: '' },
              { key: 'author', placeholder: 'Name', default: 'Kunde' },
              { key: 'role', placeholder: 'Position/Ort', default: '' }
            ]}
            maxItems={6}
          />
        </>
      );
      
    case 'faq':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorField label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} />
          <EditorList
            label="Fragen & Antworten"
            items={component.data.items || []}
            onChange={(items) => update('items', items)}
            fields={[
              { key: 'question', placeholder: 'Frage', default: 'Neue Frage?' },
              { key: 'answer', placeholder: 'Antwort', type: 'textarea', default: '' }
            ]}
            maxItems={10}
          />
        </>
      );
      
    case 'cta':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorField label="Untertitel" value={component.data.subtitle} onChange={(v) => update('subtitle', v)} />
          <EditorField label="Telefon" value={component.data.phone} onChange={(v) => update('phone', v)} placeholder="+41 31 XXX XX XX" />
          <EditorField label="E-Mail" value={component.data.email} onChange={(v) => update('email', v)} placeholder="info@example.ch" />
        </>
      );
      
    case 'cookie':
      return (
        <>
          <EditorField label="Titel" value={component.data.title} onChange={(v) => update('title', v)} />
          <EditorTextarea label="Text" value={component.data.text} onChange={(v) => update('text', v)} />

          <EditorField label="Datenschutz-Link" value={component.data.policyLink} onChange={(v) => update('policyLink', v)} />

          <div className="editor-divider" />

          <EditorField label="Button: Alle akzeptieren" value={component.data.acceptAll} onChange={(v) => update('acceptAll', v)} />
          <EditorField label="Button: Ablehnen" value={component.data.acceptReject || ''} onChange={(v) => update('acceptReject', v)} />
          <EditorField label="Button: Einstellungen" value={component.data.openSettings || ''} onChange={(v) => update('openSettings', v)} />
          <EditorField label="Button: Speichern" value={component.data.savePreferences || ''} onChange={(v) => update('savePreferences', v)} />

          <div className="editor-divider" />

          <EditorField label="Label: Notwendig" value={component.data.necessaryLabel || ''} onChange={(v) => update('necessaryLabel', v)} />
          <EditorField label="Label: Statistik" value={component.data.statisticsLabel || ''} onChange={(v) => update('statisticsLabel', v)} />
          <EditorField label="Label: Marketing" value={component.data.marketingLabel || ''} onChange={(v) => update('marketingLabel', v)} />

          <EditorField
            label="Default: Statistik aktiv?"
            value={(component.data.defaultStatistics ? 'ja' : 'nein')}
            onChange={(v) => update('defaultStatistics', String(v).toLowerCase() === 'ja')}
            placeholder="ja/nein"
          />
          <EditorField
            label="Default: Marketing aktiv?"
            value={(component.data.defaultMarketing ? 'ja' : 'nein')}
            onChange={(v) => update('defaultMarketing', String(v).toLowerCase() === 'ja')}
            placeholder="ja/nein"
          />

          <div className="editor-divider" />

          <EditorField label="Preference Center Titel" value={component.data.preferencesTitle || ''} onChange={(v) => update('preferencesTitle', v)} />
          <EditorTextarea label="Preference Center Text" value={component.data.preferencesText || ''} onChange={(v) => update('preferencesText', v)} />
          <EditorField label="Footer-Link Text" value={component.data.manageLinkText || ''} onChange={(v) => update('manageLinkText', v)} />
        </>
      );
case 'stickyCta':
      return (
        <>
          <EditorField label="Text" value={component.data.text} onChange={(v) => update('text', v)} />
          <EditorField label="Button Text" value={component.data.buttonText} onChange={(v) => update('buttonText', v)} />
          <EditorField label="Telefon" value={component.data.phone} onChange={(v) => update('phone', v)} />
          <EditorField label="Hinweis (optional)" value={component.data.note} onChange={(v) => update('note', v)} />
        </>
      );

    case 'footer':
      return (
        <>
          <EditorField label="Firmenname" value={component.data.companyName} onChange={(v) => update('companyName', v)} />
          <EditorTextarea label="Tagline" value={component.data.tagline} onChange={(v) => update('tagline', v)} rows={2} />
          <EditorField label="Adresse" value={component.data.address} onChange={(v) => update('address', v)} />
          <EditorField label="Telefon" value={component.data.phone} onChange={(v) => update('phone', v)} />
          <EditorField label="E-Mail" value={component.data.email} onChange={(v) => update('email', v)} />
          <div style={{ marginTop: 16 }}>
            <span className="field-label">Social Media</span>
          </div>
          <EditorField label="LinkedIn URL" value={component.data.linkedin} onChange={(v) => update('linkedin', v)} placeholder="https://linkedin.com/..." />
          <EditorField label="Facebook URL" value={component.data.facebook} onChange={(v) => update('facebook', v)} placeholder="https://facebook.com/..." />
          <EditorField label="Instagram URL" value={component.data.instagram} onChange={(v) => update('instagram', v)} placeholder="https://instagram.com/..." />
        </>
      );
      
    default:
      return <p style={{ color: 'var(--builder-text-muted)' }}>Keine Einstellungen verfügbar.</p>;
  }
};

// ============================================
// TOOLBAR
// ============================================

const Toolbar = ({
  viewMode,
  viewport,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onViewModeChange,
  onViewportChange,
  onExport,
  onOpenOfferte,
  onImport
}) => {
  const fileInputRef = useRef(null);
  
  const handleImportClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          onImport(data);
        } catch (err) {
          Toast.error('Ungültige JSON-Datei');
        }
      };
      reader.readAsText(file);
    }
    e.target.value = '';
  };
  
  return (
    <div className="builder-toolbar">
      {/* Left: History */}
      <div className="toolbar-group">
        <button className="btn btn-icon" onClick={onUndo} disabled={!canUndo} title="Rückgängig (Ctrl+Z)">
          <Icon name="undo" />
        </button>
        <button className="btn btn-icon" onClick={onRedo} disabled={!canRedo} title="Wiederholen (Ctrl+Y)">
          <Icon name="redo" />
        </button>
      </div>
      
      <div className="toolbar-divider" />
      
      {/* Center: View Mode */}
      <div className="toolbar-group">
        <button 
          className={`btn btn-icon ${viewMode === 'preview' ? 'active' : ''}`}
          onClick={() => onViewModeChange('preview')}
          title="Vorschau"
        >
          <Icon name="eye" />
        </button>
        <button 
          className={`btn btn-icon ${viewMode === 'code' ? 'active' : ''}`}
          onClick={() => onViewModeChange('code')}
          title="Code"
        >
          <Icon name="code" />
        </button>
      </div>
      
      <div className="toolbar-divider" />
      
      {/* Viewport */}
      <div className="toolbar-group">
        <button 
          className={`btn btn-icon ${viewport === 'desktop' ? 'active' : ''}`}
          onClick={() => onViewportChange('desktop')}
          title="Desktop"
        >
          <Icon name="monitor" />
        </button>
        <button 
          className={`btn btn-icon ${viewport === 'tablet' ? 'active' : ''}`}
          onClick={() => onViewportChange('tablet')}
          title="Tablet"
        >
          <Icon name="tablet" />
        </button>
        <button 
          className={`btn btn-icon ${viewport === 'mobile' ? 'active' : ''}`}
          onClick={() => onViewportChange('mobile')}
          title="Mobile"
        >
          <Icon name="smartphone" />
        </button>
      </div>
      
      {/* Right: Actions */}
      <div className="toolbar-group" style={{ marginLeft: 'auto' }}>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button className="btn" onClick={handleImportClick} title="Projekt importieren">
          <Icon name="upload" /> Import
        </button>
        <button className="btn" onClick={onOpenOfferte} title="Offerte Generator öffnen">
          <Icon name="file" /> Offerte
        </button>
        <button className="btn btn-primary" onClick={onExport}>
          <Icon name="download" /> Export
        </button>
      </div>
    </div>
  );
};

// ============================================
// MODAL BASE
// ============================================

const Modal = ({ isOpen, onClose, title, children, size = 'md', footer }) => {
  if (!isOpen) return null;
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal modal-${size}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// TEMPLATES MODAL
// ============================================

// ============================================
// TREUHAND STUDIO (Wizard + System-Checks)
// ============================================

function toInitials(name = '') {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'TT';
  const first = parts[0][0] || '';
  const last = parts.length > 1 ? (parts[parts.length - 1][0] || '') : '';
  return (first + last).toUpperCase();
}

function buildTreuhandStudioPatch(form, components, order, settings) {
  const c = JSON.parse(JSON.stringify(components || createDefaultComponents()));
  const s = { ...(settings || defaultSettings) };
  const o = Array.isArray(order) && order.length ? [...order] : [...defaultComponentOrder];

  const companyName = form.companyName || s.siteName || 'Treuhand';
  const city = form.city || '';
  const region = [city, form.canton].filter(Boolean).join(' ');
  const persona = form.persona || 'kmu';
  const tone = form.tone || 'traditionell';

  const tonePresets = {
    traditionell: { primaryColor: '#1a365d', accentColor: '#38a169', stylePreset: 'swiss', fontStack: 'instrument', designDensity: 'airy', darkMode: false },
    modern: { primaryColor: '#0d9488', accentColor: '#38bdf8', stylePreset: 'gasserwerk', fontStack: 'instrument', designDensity: 'balanced', darkMode: false },
    premium: { primaryColor: '#111827', accentColor: '#b8860b', stylePreset: 'editorial', fontStack: 'serif', designDensity: 'airy', darkMode: false }
  };

  const personaCopy = {
    kmu: {
      title: `Ihr Treuhänder${city ? ` in ${city}` : ''} – persönlich. kompetent. digital.`,
      subtitle: 'Buchhaltung, Steuern und Lohn – terminsicher, nachvollziehbar und verständlich.',
      services: [
        { icon: '📊', title: 'Buchhaltung', text: 'Fibu, Debi/Kredi, Abstimmungen – sauber strukturiert.' },
        { icon: '🧾', title: 'Steuern', text: 'Erklärungen, MWST, Planung – verständlich erklärt.' },
        { icon: '👥', title: 'Lohn', text: 'Lohnläufe, Quellensteuer, Sozialversicherungen – terminsicher.' }
      ]
    },
    startup: {
      title: 'Finance & Treuhand, die mitwächst',
      subtitle: 'Cloud-Setup, Reporting und Steuern – pragmatisch, skalierbar, founder-friendly.',
      services: [
        { icon: '🧩', title: 'Tooling & Setup', text: 'Cloud-Buchhaltung, Belegfluss, Bankfeeds – sauber aufgesetzt.' },
        { icon: '📈', title: 'Reporting & KPIs', text: 'Monatliche Auswertungen – Zahlen als Entscheidungsgrundlage.' },
        { icon: '🧾', title: 'Steuern & MWST', text: 'MWST-Setup und Deklarationen – ohne Overhead.' },
        { icon: '🤝', title: 'Sparring', text: 'Finanzübersetzung für Gründerteams und Investorenfragen.' }
      ]
    },
    private: {
      title: 'Diskret. Ganzheitlich. Langfristig.',
      subtitle: 'Steuern, Strukturen und Nachfolge – mit klarer Dokumentation und einem Ansprechpartner.',
      services: [
        { icon: '🧾', title: 'Steuern', text: 'Erklärung, Planung, Optimierung – sauber dokumentiert.' },
        { icon: '🧱', title: 'Strukturen', text: 'Vermögens-/Gesellschaftsstrukturen – robust und nachvollziehbar.' },
        { icon: '🧬', title: 'Nachfolge', text: 'Vorsorge und Übergaben – proaktiv geplant.' }
      ]
    }
  };

  const copy = personaCopy[persona] || personaCopy.kmu;
  const tp = tonePresets[tone] || tonePresets.traditionell;

  // Settings
  s.siteName = companyName;
  s.siteDescription = form.tagline || (persona === 'startup'
    ? 'Cloud-Treuhand & Finance Ops für Start-ups.'
    : persona === 'private'
      ? 'Treuhand & Steuerberatung für Privatpersonen.'
      : 'Treuhand für KMU – Buchhaltung, Steuern, Lohn.');
  s.primaryColor = tp.primaryColor;
  s.accentColor = tp.accentColor;
  s.stylePreset = tp.stylePreset;
  s.fontStack = tp.fontStack;
  s.designDensity = tp.designDensity;
  s.darkMode = tp.darkMode;
  s.generateImpressum = true;
  s.generateDatenschutz = true;
  s.trackingPreset = form.trackingPreset || 'none';

  s.companyLegal = {
    companyName: companyName,
    legalForm: form.legalForm || '',
    address: form.address || '',
    zip: form.zip || '',
    city: form.city || '',
    canton: form.canton || '',
    country: 'Schweiz',
    phone: form.phone || '',
    email: form.email || '',
    website: form.website || '',
    uid: form.uid || ''
  };

  // Components – enable critical trust + conversion components by default
  const ensure = (key) => { if (c?.[key]) c[key].enabled = true; };
  ['header', 'hero', 'trust', 'authority', 'services', 'process', 'proofTable', 'benefits', 'team', 'testimonials', 'faq', 'cta', 'stickyCta', 'footer', 'cookie'].forEach(ensure);

  // Header
  c.header.data = {
    ...c.header.data,
    companyName,
    logoText: form.logoText || toInitials(companyName),
    navItems: ['Leistungen', 'Ablauf', 'Team', 'FAQ', 'Kontakt'],
    ctaText: form.ctaText || 'Erstgespräch'
  };

  // Hero
  c.hero.data = {
    ...c.hero.data,
    title: copy.title,
    subtitle: copy.subtitle,
    primaryBtn: form.primaryBtn || (persona === 'private' ? 'Vertrauliches Gespräch' : 'Kostenloses Erstgespräch'),
    secondaryBtn: form.secondaryBtn || 'Leistungen',
    imageUrl: c.hero.data?.imageUrl || ''
  };

  // Trust bar
  const year = String(form.yearFounded || '').trim();
  const membership = String(form.membership || '').trim();
  c.trust.data = {
    ...c.trust.data,
    items: [
      year ? { value: `Seit ${year}`, label: 'Erfahrung' } : { value: 'Sorgfalt', label: 'Standards' },
      membership ? { value: membership, label: 'Mitgliedschaft' } : { value: 'Diskret', label: 'Vertraulich' },
      { value: 'Digital', label: 'Zusammenarbeit' },
      { value: 'Nachvollziehbar', label: 'Audit-Trail' }
    ]
  };

  // Authority
  const cert = String(form.certification || '').trim();
  c.authority.data = {
    ...c.authority.data,
    title: 'Vertrauen & Standards',
    variant: 'badges',
    items: [
      { icon: '🏅', text: membership || 'Verbandsmitgliedschaften (z. B. TREUHAND|SUISSE)' },
      { icon: '🎓', text: cert || 'Aus- und Weiterbildungen (Diplome/Zertifikate)' },
      { icon: '🛡️', text: 'Berufshaftpflicht / Sorgfaltspflichten' }
    ]
  };

  // Services
  const chosenServices = Array.isArray(form.services) && form.services.length ? form.services : [];
  const serviceFallback = copy.services;
  const serviceItems = chosenServices.length
    ? chosenServices.map(sv => ({ icon: sv.icon || '✅', title: sv.title, text: sv.text || '' }))
    : serviceFallback;

  c.services.data = {
    ...c.services.data,
    title: form.servicesTitle || 'Leistungen',
    subtitle: form.servicesSubtitle || (persona === 'startup'
      ? 'Skalierbar. Cloud-ready. Verständlich.'
      : persona === 'private'
        ? 'Diskret und strukturiert.'
        : 'Pragmatisch und terminsicher.'),
    items: serviceItems
  };

  // Process
  c.process.data = {
    ...c.process.data,
    title: 'So arbeiten wir',
    subtitle: 'Klarer Ablauf, wenig Reibung, saubere Dokumentation.',
    steps: [
      { num: '1', title: 'Erstgespräch', text: 'Ziele, Umfang, Fristen und Tools klären.' },
      { num: '2', title: 'Setup', text: 'Zugänge, Ablage, Prozesse und Verantwortlichkeiten definieren.' },
      { num: '3', title: 'Laufende Betreuung', text: 'Buchen, prüfen, abstimmen – mit proaktiven Hinweisen.' },
      { num: '4', title: 'Abschluss & Planung', text: 'Jahresabschluss, Steuern und Optimierungsschritte vorbereiten.' }
    ]
  };

  // Proof table
  c.proofTable.data = {
    ...c.proofTable.data,
    title: 'Was Sie gewinnen',
    subtitle: 'Vergleich: strukturierte Treuhand-Betreuung vs. ad-hoc Selbstorganisation.',
    headers: ['Kriterium', 'Mit Treuhand', 'Ad-hoc / Selbst'],
    highlightColumn: 1,
    rows: [
      { criterion: 'Fristen & Compliance', us: 'Prozess + klare Verantwortung', other: 'Zeit-/Know-how abhängig' },
      { criterion: 'Transparenz', us: 'Nachvollziehbar dokumentiert', other: 'Wissen verteilt' },
      { criterion: 'Entscheidungen', us: 'Reports + Interpretation', other: 'Zahlen ohne Kontext' },
      { criterion: 'Risiko', us: 'Review nach Standards', other: 'Fehler-/Nachzahlungsrisiko' }
    ]
  };

  // Benefits
  c.benefits.data = {
    ...c.benefits.data,
    title: 'Warum Mandanten bleiben',
    subtitle: 'Weil es im Alltag funktioniert.',
    items: [
      { title: 'Verlässlichkeit', text: 'Termine, Antworten und Ergebnisse – planbar und sauber.' },
      { title: 'Verständlichkeit', text: 'Wir übersetzen Zahlen in Entscheidungen.' },
      { title: 'Digitale Zusammenarbeit', text: 'So viel Automation wie sinnvoll – ohne Kontrollverlust.' }
    ]
  };

  // Team + Testimonials (placeholders; encourage replacement)
  c.team.data = {
    ...c.team.data,
    title: 'Ihr Team',
    subtitle: 'Persönliche Ansprechpartner mit Fachkompetenz.',
    members: (c.team.data?.members?.length ? c.team.data.members : []).map(m => ({ ...m, image: m.image || '' }))
  };

  c.testimonials.data = {
    ...c.testimonials.data,
    title: 'Mandantenstimmen',
    items: [
      { quote: 'Endlich ist alles sauber – und ich weiss, wo ich stehe.', author: 'Mandant', role: persona === 'startup' ? 'Start-up' : 'KMU' },
      { quote: 'Digital, schnell und trotzdem persönlich erreichbar.', author: 'Mandant', role: '' }
    ]
  };

  // FAQ
  c.faq.data = {
    ...c.faq.data,
    title: 'FAQ',
    subtitle: 'Die häufigsten Fragen zur Zusammenarbeit.',
    items: [
      { question: 'Welche Unterlagen braucht ihr?', answer: 'Je nach Umfang: Bankzugang/Exports, Belege, Verträge, Lohnstammdaten, MWST-Infos. Wir geben eine klare Checkliste.' },
      { question: 'Arbeitet ihr mit Bexio/Abacus/KLARA?', answer: 'Wir richten uns nach Ihrem Setup oder empfehlen pragmatisch eine passende Lösung.' },
      { question: 'Wie startet das Mandat?', answer: 'Mit Erstgespräch und Setup. Danach definieren wir Zyklen (monatlich/vierteljährlich) und Verantwortlichkeiten.' }
    ]
  };

  // CTA
  c.cta.data = {
    ...c.cta.data,
    title: form.ctaTitle || 'Kostenloses Erstgespräch',
    subtitle: form.ctaSubtitle || 'Sagen Sie uns kurz, wo Sie stehen – wir schlagen die nächsten Schritte vor.',
    phone: form.phone || c.cta.data?.phone || '+41 00 000 00 00',
    email: form.email || c.cta.data?.email || 'info@example.ch'
  };

  // Sticky CTA
  c.stickyCta.data = {
    ...c.stickyCta.data,
    text: form.stickyText || 'Kurzfrage? Rückruf genügt.',
    buttonText: form.stickyButton || 'Rückruf',
    phone: form.phone || c.stickyCta.data?.phone || '+41 00 000 00 00',
    note: 'Diskret & unverbindlich'
  };

  // Footer
  c.footer.data = {
    ...c.footer.data,
    companyName,
    tagline: form.tagline || (persona === 'startup' ? 'Treuhand & Finance Ops für Start-ups.' : 'Treuhand für KMU, Start-ups und Privatpersonen.'),
    address: form.address || c.footer.data?.address || (region ? `Adresse, ${region}` : 'Adresse'),
    phone: form.phone || c.footer.data?.phone || '+41 00 000 00 00',
    email: form.email || c.footer.data?.email || 'info@example.ch'
  };

  // Cookie/Consent defaults
  c.cookie.data = {
    ...c.cookie.data,
    privacyLink: 'datenschutz.html',
    legalLink: 'impressum.html'
  };

  // Keep order sane (ensure important components are present)
  const mustHave = ['header','hero','trust','authority','services','proofTable','process','benefits','team','testimonials','faq','cta','stickyCta','footer','cookie'];
  const oSet = new Set(o);
  mustHave.forEach(id => { if (!oSet.has(id)) o.push(id); });

  return { components: c, settings: s, order: o };
}

const TreuhandStudioModal = ({ isOpen, onClose, components, order, settings, onApply }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(() => ({
    companyName: settings?.siteName || 'Treuhand Muster AG',
    legalForm: '',
    address: '',
    zip: '',
    city: 'Zürich',
    canton: 'ZH',
    phone: '+41 ',
    email: 'info@',
    website: '',
    uid: '',
    yearFounded: '',
    membership: 'TREUHAND|SUISSE',
    certification: '',
    persona: 'kmu',
    tone: 'traditionell',
    trackingPreset: settings?.trackingPreset || 'none',
    ctaText: 'Erstgespräch',
    primaryBtn: 'Kostenloses Erstgespräch',
    secondaryBtn: 'Leistungen',
    tagline: '',
    stickyText: 'Kurzfrage? Rückruf genügt.',
    stickyButton: 'Rückruf'
  }));

  useEffect(() => {
    if (!isOpen) return;
    setStep(0);
    setForm(prev => ({
      ...prev,
      companyName: settings?.siteName || prev.companyName,
      trackingPreset: settings?.trackingPreset || prev.trackingPreset
    }));
  }, [isOpen]);

  const update = (patch) => setForm(prev => ({ ...prev, ...patch }));

  const steps = [
    { title: 'Briefing', desc: 'Firma & Kontakt' },
    { title: 'Zielgruppe', desc: 'Persona & Tonalität' },
    { title: 'Trust', desc: 'Signale & Compliance' },
    { title: 'Go Live', desc: 'Anwenden & Nächste Schritte' }
  ];

  const preflight = () => {
    const ok = (cond) => cond ? 'ok' : 'bad';
    return [
      { label: 'Firmenname', status: ok(!!form.companyName) },
      { label: 'Kontakt (Tel/E-Mail)', status: ok(!!form.phone && !!form.email) },
      { label: 'Recht: Impressum/Datenschutz', status: ok(true) },
      { label: 'Tracking Preset', status: ok(!!form.trackingPreset) }
    ];
  };

  const handleApply = () => {
    const patch = buildTreuhandStudioPatch(form, components, order, settings);
    onApply?.(patch);
  };

  if (!isOpen) return null;

  return (
    <Modal
      title="Treuhand Studio"
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      footer={
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Abbrechen</button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              <Icon name="arrow-left" /> Zurück
            </button>
            {step < steps.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setStep(Math.min(steps.length - 1, step + 1))}>
                Weiter <Icon name="arrow-right" />
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleApply}>
                Anwenden <Icon name="check" />
              </button>
            )}
          </div>
        </div>
      }
    >
      <div className="studio-layout">
        <div className="studio-rail">
          <div className="studio-rail-title">Wizard</div>
          <div className="studio-steps">
            {steps.map((s, i) => (
              <button
                key={s.title}
                className={`studio-step ${i === step ? 'active' : ''}`}
                onClick={() => setStep(i)}
              >
                <div className="studio-step-title">{i + 1}. {s.title}</div>
                <div className="studio-step-desc">{s.desc}</div>
              </button>
            ))}
          </div>

          <div className="studio-card">
            <div className="studio-card-title">Preflight</div>
            <div className="studio-checklist">
              {preflight().map((i) => (
                <div className="studio-check" key={i.label}>
                  <span className={`pill ${i.status === 'ok' ? 'pill-ok' : 'pill-bad'}`}>{i.status === 'ok' ? 'OK' : 'Fehlt'}</span>
                  <span>{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="studio-card">
            <div className="studio-card-title">TREUH Framework</div>
            <div className="studio-muted">
              Touchpoints → Requirements → Ecosystem → User Journey → Hypothesen.
              Der Wizard setzt eine robuste Default-Struktur und Trust-Signale – danach optimieren wir Conversion und Inhalte iterativ.
            </div>
          </div>
        </div>

        <div className="studio-main">
          {step === 0 && (
            <div className="studio-section">
              <h3>Projekt-Briefing (Essentials)</h3>
              <div className="grid-2">
                <EditorField label="Unternehmen" value={form.companyName} onChange={(v) => update({ companyName: v })} />
                <EditorField label="Rechtsform (optional)" value={form.legalForm} onChange={(v) => update({ legalForm: v })} placeholder="GmbH / AG / Einzelfirma" />
                <EditorField label="Adresse" value={form.address} onChange={(v) => update({ address: v })} placeholder="Musterstrasse 1" />
                <EditorField label="PLZ" value={form.zip} onChange={(v) => update({ zip: v })} placeholder="8000" />
                <EditorField label="Ort" value={form.city} onChange={(v) => update({ city: v })} />
                <EditorField label="Kanton" value={form.canton} onChange={(v) => update({ canton: v })} placeholder="ZH" />
                <EditorField label="Telefon" value={form.phone} onChange={(v) => update({ phone: v })} placeholder="+41 ..." />
                <EditorField label="E-Mail" value={form.email} onChange={(v) => update({ email: v })} placeholder="info@..." />
                <EditorField label="Website (optional)" value={form.website} onChange={(v) => update({ website: v })} placeholder="https://..." />
                <EditorField label="UID (optional)" value={form.uid} onChange={(v) => update({ uid: v })} placeholder="CHE-..." />
              </div>
              <div className="studio-hint">
                Tipp: Nach dem Anwenden ersetzen Sie Platzhalter (Team/Testimonials) und ergänzen Sie echte Trust Signals (z. B. Diplome, Verbände, Gründungsjahr).
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="studio-section">
              <h3>Zielgruppe & Tonalität</h3>
              <div className="grid-2">
                <EditorSelect
                  label="Persona"
                  value={form.persona}
                  onChange={(v) => update({ persona: v })}
                  options={[
                    { value: 'kmu', label: 'KMU-Inhaber (Buchhaltung/Steuern/Lohn)' },
                    { value: 'startup', label: 'Start-up (Cloud & Sparring)' },
                    { value: 'private', label: 'Privatpersonen (Diskret/HNWI)' }
                  ]}
                />
                <EditorSelect
                  label="Look & Feel"
                  value={form.tone}
                  onChange={(v) => update({ tone: v })}
                  options={[
                    { value: 'traditionell', label: 'Traditionell (Navy/Green, Swiss)' },
                    { value: 'modern', label: 'Modern (Petrol/Clear, CLEAR-4)' },
                    { value: 'premium', label: 'Premium (Dark/Gold, Editorial)' }
                  ]}
                />
                <EditorField label="CTA Text (Header)" value={form.ctaText} onChange={(v) => update({ ctaText: v })} />
                <EditorField label="Claim/Tagline (optional)" value={form.tagline} onChange={(v) => update({ tagline: v })} placeholder="z. B. Treuhand für KMU in Zürich" />
              </div>

              <div className="studio-card">
                <div className="studio-card-title">Quick Wins (Conversion)</div>
                <ul className="studio-list">
                  <li>Telefon im CTA sichtbar halten (Sticky CTA aktiv).</li>
                  <li>Team-Fotos als echte Portraits ersetzen.</li>
                  <li>Testimonials nur mit Einwilligung und echten Namen/Firmen.</li>
                  <li>FAQ mit Ihren häufigsten Mandantenfragen füllen.</li>
                </ul>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="studio-section">
              <h3>Trust Signals & Compliance</h3>
              <div className="grid-2">
                <EditorField label="Gründungsjahr (optional)" value={form.yearFounded} onChange={(v) => update({ yearFounded: v })} placeholder="1998" />
                <EditorField label="Verbandsmitgliedschaft (optional)" value={form.membership} onChange={(v) => update({ membership: v })} placeholder="TREUHAND|SUISSE / EXPERTsuisse" />
                <EditorField label="Zertifizierung/Diplom (optional)" value={form.certification} onChange={(v) => update({ certification: v })} placeholder="eidg. dipl. Treuhandexperte" />
                <EditorSelect
                  label="Tracking Preset"
                  value={form.trackingPreset}
                  onChange={(v) => update({ trackingPreset: v })}
                  options={[
                    { value: 'none', label: 'Kein Tracking' },
                    { value: 'ga4', label: 'Google Analytics 4 (Consent required)' },
                    { value: 'matomo', label: 'Matomo (Consent required)' }
                  ]}
                />
              </div>

              <div className="studio-card">
                <div className="studio-card-title">Rechtliche Basis</div>
                <div className="studio-muted">
                  Der Export enthält standardmässig Impressum & Datenschutz (CH-kompatible Vorlage). Prüfen Sie diese Texte vor Livegang.
                  Tracking-Skripte werden geparkt exportiert und dürfen erst nach Einwilligung aktiv werden.
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="studio-section">
              <h3>Go Live</h3>
              <div className="studio-card">
                <div className="studio-card-title">Was passiert beim Anwenden?</div>
                <ul className="studio-list">
                  <li>Aktiviert Trust-, Prozess- und Conversion-Komponenten.</li>
                  <li>Setzt Persona-Copy, Services, Preflight Defaults.</li>
                  <li>Aktiviert Impressum/Datenschutz, Cookie/Consent.</li>
                  <li>Harmonisiert Farben/Typografie via Preset.</li>
                </ul>
              </div>

              <div className="studio-card">
                <div className="studio-card-title">Nächste Schritte (professionell)</div>
                <ol className="studio-list">
                  <li>Team/Testimonials mit echten Inhalten ersetzen.</li>
                  <li>Leistungsseiten mit konkreten Abläufen und Preismodell ergänzen.</li>
                  <li>Lokale SEO: Google Business Profile, NAP, Reviews.</li>
                  <li>Export → Preflight → Deployment → Monitoring.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

const TemplatesModal = ({ isOpen, onClose, onApply }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Branchen-Template wählen" size="lg">
      <p style={{ color: 'var(--builder-text-muted)', marginBottom: 20 }}>
        Wähle ein Template als Ausgangspunkt. Deine Änderungen werden überschrieben.
      </p>
      <div className="template-grid">
        {Object.entries(industryTemplates).map(([key, template]) => (
          <button
            key={key}
            className="template-card"
            onClick={() => {
              onApply(key);
              onClose();
            }}
          >
            <div className="template-icon">{template.icon}</div>
            <div className="template-name">{template.name}</div>
            <div className="template-colors">
              <div className="template-color" style={{ background: template.settings.primaryColor }} />
              <div className="template-color" style={{ background: template.settings.accentColor }} />
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
};

// ============================================
// SETTINGS MODAL
// ============================================

const SettingsModal = ({ isOpen, onClose, settings, onUpdate, onOpenColorGen }) => {
  // v4.2 P0: Tracking & Datenschutz (CH)
  const trackingPreset = settings.trackingPreset || 'none'; // none | ga4 | matomo
  const tracking = settings.tracking || {};
  const ga4Ok = !tracking.ga4MeasurementId || /^G-[A-Z0-9]+$/i.test(String(tracking.ga4MeasurementId).trim());
  const matomoUrlOk = !tracking.matomoUrl || /^https?:\/\//i.test(String(tracking.matomoUrl).trim());
  const matomoIdOk = !tracking.matomoSiteId || /^\d+$/.test(String(tracking.matomoSiteId).trim());

  const updateTrackingPreset = (preset) => {
    onUpdate({ ...settings, trackingPreset: preset, tracking: { ...tracking } });
  };

  const updateTracking = (patch) => {
    onUpdate({ ...settings, trackingPreset, tracking: { ...tracking, ...patch } });
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Website-Einstellungen"
      footer={
        <button className="btn btn-primary" onClick={onClose}>Schliessen</button>
      }
    >
      <h4 style={{ marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Allgemein
      </h4>
      <EditorField 
        label="Seitenname" 
        value={settings.siteName} 
        onChange={(v) => onUpdate({ ...settings, siteName: v })} 
      />
      <EditorTextarea 
        label="SEO Beschreibung" 
        value={settings.siteDescription} 
        onChange={(v) => onUpdate({ ...settings, siteDescription: v })} 
        rows={2}
      />
      <EditorField 
        label="Favicon Emoji" 
        value={settings.faviconEmoji} 
        onChange={(v) => onUpdate({ ...settings, faviconEmoji: v })} 
        placeholder="🏢"
      />
      
      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Farben
      </h4>
      <EditorColorPicker 
        label="Primärfarbe" 
        value={settings.primaryColor} 
        onChange={(v) => onUpdate({ ...settings, primaryColor: v })} 
      />
      <EditorColorPicker 
        label="Akzentfarbe" 
        value={settings.accentColor} 
        onChange={(v) => onUpdate({ ...settings, accentColor: v })} 
      />

      <div style={{ display:'flex', gap: 10, marginTop: 10, alignItems:'center', flexWrap:'wrap' }}>
        <button className="btn btn-secondary" type="button" onClick={() => onOpenColorGen && onOpenColorGen()}>
          Color Generator öffnen
        </button>
        {settings.colorStack ? (
          <span style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>
            Color Stack übernommen. Overrides: {settings.useColorStack ? 'aktiv' : 'inaktiv'}.
          </span>
        ) : (
          <span style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>
            Tipp: Erzeuge eine Palette aus Logo/Farben und übernimm sie in den Builder.
          </span>
        )}
      </div>

      {settings.colorStack ? (
        <div style={{ marginTop: 10 }}>
          <EditorField 
            label="Color Stack Overrides aktiv?"
            value={settings.useColorStack ? 'ja' : 'nein'}
            onChange={(v) => onUpdate({ ...settings, useColorStack: String(v).toLowerCase() === 'ja' })}
            placeholder="ja/nein"
          />
        </div>
      ) : null}

      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Elite Design
      </h4>
      <EditorSelect
        label="Design-Stil (Preset)"
        value={settings.stylePreset || 'signature'}
        onChange={(v) => onUpdate({ ...settings, stylePreset: v })}
        options={Object.entries(eliteStylePresets).map(([key, preset]) => ({
          value: key,
          label: `${preset.name} – ${preset.description}`
        }))}
      />
      <div style={{ height: 8 }} />
      <EditorSelect
        label="Layout-Dichte"
        value={settings.designDensity || 'balanced'}
        onChange={(v) => onUpdate({ ...settings, designDensity: v })}
        options={[
          { value: 'compact', label: 'Compact – wenig Weissraum (für datenreiche Seiten)' },
          { value: 'balanced', label: 'Balanced – Standard (empfohlen)' },
          { value: 'airy', label: 'Airy – viel Weissraum (Premium-Look)' }
        ]}
      />
      <div style={{ marginTop: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
        <button
          className="btn btn-sm"
          onClick={() => {
            const preset = eliteStylePresets[settings.stylePreset || 'signature'] || eliteStylePresets.signature;
            const next = {
              ...settings,
              darkMode: typeof preset.defaults?.darkMode === 'boolean' ? preset.defaults.darkMode : settings.darkMode,
              fontStack: preset.defaults?.fontStack || settings.fontStack
            };
            onUpdate(next);
            Toast.success('Elite-Defaults angewendet');
          }}
        >
          Elite-Defaults anwenden
        </button>
        <span style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>
          Setzt automatisch Dark Mode & Schrift passend zum Preset.
        </span>
      </div>

      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        ✨ Premium Effekte
      </h4>
      <div style={{ display: 'grid', gap: 8 }}>
        <EditorCheckbox 
          label="Gradient Orbs (animierte Farbkreise)" 
          checked={settings.fxOrbs} 
          onChange={(v) => onUpdate({ ...settings, fxOrbs: v })} 
        />
        <EditorCheckbox 
          label="Grain Texture (subtile Körnung)" 
          checked={settings.fxGrain} 
          onChange={(v) => onUpdate({ ...settings, fxGrain: v })} 
        />
        <EditorCheckbox 
          label="Glassmorphism Cards" 
          checked={settings.fxGlass} 
          onChange={(v) => onUpdate({ ...settings, fxGlass: v })} 
        />
      </div>
      {(settings.fxOrbs || settings.fxGrain || settings.fxGlass) && (
        <div style={{ marginTop: 12 }}>
          <EditorSelect
            label="Effekt-Intensität"
            value={settings.fxIntensity || 'medium'}
            onChange={(v) => onUpdate({ ...settings, fxIntensity: v })}
            options={[
              { value: 'subtle', label: 'Subtle – Kaum sichtbar, sehr dezent' },
              { value: 'medium', label: 'Medium – Ausgewogen (empfohlen)' },
              { value: 'intense', label: 'Intense – Stark sichtbar, auffällig' }
            ]}
          />
        </div>
      )}
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--builder-text-muted)' }}>
        Diese Effekte machen den Unterschied zwischen "gut" und "Premium". Grain + Orbs = Agentur-Look.
      </div>

      
      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Darstellung
      </h4>
      <EditorCheckbox 
        label="Dark Mode" 
        checked={settings.darkMode} 
        onChange={(v) => onUpdate({ ...settings, darkMode: v })} 
      />
      <div style={{ height: 8 }} />
      <EditorCheckbox 
        label="Dark Mode Toggle anzeigen (für Besucher)" 
        checked={settings.darkModeToggle} 
        onChange={(v) => onUpdate({ ...settings, darkModeToggle: v })} 
      />
      <div style={{ height: 8 }} />
      <EditorSelect
        label="Schriftart"
        value={settings.fontStack}
        onChange={(v) => onUpdate({ ...settings, fontStack: v })}
        options={Object.entries(fontStacks).map(([key, stack]) => ({
          value: key,
          label: `${stack.name} – ${stack.description}`
        }))}
      />
      
      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Zusätzliche Seiten
      </h4>
      <EditorCheckbox 
        label="Impressum generieren" 
        checked={settings.generateImpressum} 
        onChange={(v) => onUpdate({ ...settings, generateImpressum: v })} 
      />
      <div style={{ height: 8 }} />
      <EditorCheckbox 
        label="Datenschutz generieren" 
        checked={settings.generateDatenschutz} 
        onChange={(v) => onUpdate({ ...settings, generateDatenschutz: v })} 
      />

      <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
        Tracking & Datenschutz (CH)
      </h4>

      <div className="field">
        <label className="field-label">Tracking Preset</label>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ display: 'flex', gap: 10, padding: '10px 12px', border: '1px solid var(--builder-border)', borderRadius: 12, background: 'var(--builder-surface)', cursor: 'pointer' }}>
            <input type="radio" name="trackingPreset" checked={trackingPreset === 'none'} onChange={() => updateTrackingPreset('none')} />
            <div style={{ display: 'grid', gap: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--builder-text)' }}>No Tracking (empfohlen)</div>
              <div style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>Kein Analytics. Keine Requests.</div>
            </div>
          </label>

          <label style={{ display: 'flex', gap: 10, padding: '10px 12px', border: '1px solid var(--builder-border)', borderRadius: 12, background: 'var(--builder-surface)', cursor: 'pointer' }}>
            <input type="radio" name="trackingPreset" checked={trackingPreset === 'ga4'} onChange={() => updateTrackingPreset('ga4')} />
            <div style={{ display: 'grid', gap: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--builder-text)' }}>GA4 (Opt-in / Statistik)</div>
              <div style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>Wird erst nach Consent geladen.</div>
            </div>
          </label>

          <label style={{ display: 'flex', gap: 10, padding: '10px 12px', border: '1px solid var(--builder-border)', borderRadius: 12, background: 'var(--builder-surface)', cursor: 'pointer' }}>
            <input type="radio" name="trackingPreset" checked={trackingPreset === 'matomo'} onChange={() => updateTrackingPreset('matomo')} />
            <div style={{ display: 'grid', gap: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--builder-text)' }}>Matomo Self-Host (Opt-in / Statistik)</div>
              <div style={{ fontSize: 12, color: 'var(--builder-text-muted)' }}>Wird erst nach Consent geladen.</div>
            </div>
          </label>
        </div>
      </div>

      {trackingPreset === 'ga4' && (
        <div style={{ marginTop: 10 }}>
          <EditorField
            label="GA4 Measurement ID"
            value={tracking.ga4MeasurementId}
            onChange={(v) => updateTracking({ ga4MeasurementId: v })}
            placeholder="G-XXXXXXXXXX"
          />
          {!ga4Ok && (
            <div style={{ marginTop: 6, fontSize: 12, color: 'var(--builder-warning, #b45309)' }}>
              Soft-Check: GA4 ID sollte mit <b>G-</b> beginnen.
            </div>
          )}
        </div>
      )}

      {trackingPreset === 'matomo' && (
        <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
          <EditorField
            label="Matomo Base URL"
            value={tracking.matomoUrl}
            onChange={(v) => updateTracking({ matomoUrl: v })}
            placeholder="https://analytics.example.com"
          />
          {!matomoUrlOk && (
            <div style={{ marginTop: -4, fontSize: 12, color: 'var(--builder-warning, #b45309)' }}>
              Soft-Check: URL sollte mit <b>https://</b> oder <b>http://</b> beginnen.
            </div>
          )}

          <EditorField
            label="Matomo Site ID"
            value={tracking.matomoSiteId}
            onChange={(v) => updateTracking({ matomoSiteId: v })}
            placeholder="1"
          />
          {!matomoIdOk && (
            <div style={{ marginTop: -4, fontSize: 12, color: 'var(--builder-warning, #b45309)' }}>
              Soft-Check: Site ID sollte numerisch sein.
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--builder-text-muted)' }}>
        Hinweis: In v4.2 wird Analytics im Export standardmässig per Consent gesteuert (Opt-in by design). Ungültige Tracking-Werte werden beim Export automatisch ignoriert (No Tracking).
      </div>

      {(settings.generateImpressum || settings.generateDatenschutz) && (
        <>
          <h4 style={{ marginTop: 24, marginBottom: 12, fontSize: 13, color: 'var(--builder-text-muted)', textTransform: 'uppercase' }}>
            Rechtliche Angaben
          </h4>
          <EditorField 
            label="Firmenname (rechtlich)" 
            value={settings.companyLegal?.name} 
            onChange={(v) => onUpdate({ ...settings, companyLegal: { ...settings.companyLegal, name: v } })} 
          />
          <EditorField 
            label="Inhaber" 
            value={settings.companyLegal?.owner} 
            onChange={(v) => onUpdate({ ...settings, companyLegal: { ...settings.companyLegal, owner: v } })} 
          />
          <EditorField 
            label="Adresse" 
            value={settings.companyLegal?.address} 
            onChange={(v) => onUpdate({ ...settings, companyLegal: { ...settings.companyLegal, address: v } })} 
          />
          <EditorField 
            label="UID-Nummer" 
            value={settings.companyLegal?.uid} 
            onChange={(v) => onUpdate({ ...settings, companyLegal: { ...settings.companyLegal, uid: v } })} 
            placeholder="CHE-123.456.789"
          />
        </>
      )}
    </Modal>
  );
};


const ColorGeneratorModal = ({ isOpen, onClose, onApply }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (!iframe.__loaded) {
      iframe.srcdoc = b64ToUtf8(__COLOR_GEN_B64__);
      iframe.__loaded = true;
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      const data = e && e.data ? e.data : null;
      if (!data || data.type !== 'sb-color-stack') return;
      if (onApply) onApply(data.payload);
      if (onClose) onClose();
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [onApply, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Color Stack Generator"
      footer={
        <button className="btn btn-primary" onClick={onClose}>Schliessen</button>
      }
    >
      <div style={{ border: '1px solid var(--builder-border)', borderRadius: 12, overflow: 'hidden', height: '70vh' }}>
        <iframe
          ref={iframeRef}
          title="Color Stack Generator"
          style={{ width: '100%', height: '100%', border: 0, background: 'white' }}
        />
      </div>
      <p style={{ marginTop: 12, fontSize: 12, color: 'var(--builder-text-muted)' }}>
        Workflow: Palette generieren → „In Builder übernehmen“ → dann ggf. Overrides aktivieren.
      </p>
    </Modal>
  );
};

// ============================================
// OFFERTE GENERATOR MODAL
// ============================================

const OfferteGeneratorModal = ({ isOpen, onClose, settings }) => {
  const iframeRef = useRef(null);

  // Load once
  useEffect(() => {
    if (!isOpen) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (!iframe.__loaded) {
      iframe.srcdoc = b64ToUtf8(__OFFERTEN_GEN_B64__);
      iframe.__loaded = true;
    }
  }, [isOpen]);

  // Push current tokens + prefills into iframe
  useEffect(() => {
    if (!isOpen) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    const send = () => {
      try {
        iframe.contentWindow && iframe.contentWindow.postMessage({
          type: 'sb-offer-tokens',
          payload: { css: generateTokensCSS(settings), dark: !!settings.darkMode }
        }, '*');

        iframe.contentWindow && iframe.contentWindow.postMessage({
          type: 'sb-offer-prefill',
          payload: {
            legal: settings.companyLegal || {},
            siteName: settings.siteName || '',
            dark: !!settings.darkMode
          }
        }, '*');
      } catch (e) {}
    };

    // small delay to ensure iframe DOM is ready
    const t = setTimeout(send, 120);
    return () => clearTimeout(t);
  }, [isOpen, settings]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Offerte Generator"
      footer={
        <button className="btn btn-primary" onClick={onClose}>Schliessen</button>
      }
    >
      <div style={{ border: '1px solid var(--builder-border)', borderRadius: 12, overflow: 'hidden', height: '80vh' }}>
        <iframe
          ref={iframeRef}
          title="Offerte Generator"
          style={{ width: '100%', height: '100%', border: 0, background: 'white' }}
        />
      </div>
      <p style={{ marginTop: 12, fontSize: 12, color: 'var(--builder-text-muted)' }}>
        Hinweis: Das Tool übernimmt automatisch deine aktuellen Tokens und deine Firmendaten (Impressum).
      </p>
    </Modal>
  );
};




// ============================================
// EXPORT MODAL
// ============================================

const ExportModal = ({ isOpen, onClose, onExportPreview, onExportProduction, onExportJson, onExportOfferte }) => {
  const [selected, setSelected] = useState('production');
  
  const handleExport = () => {
    switch (selected) {
      case 'preview':
        onExportPreview();
        break;
      case 'production':
        onExportProduction();
        break;
      case 'json':
        onExportJson();
        break;
      case 'offerte':
        onExportOfferte();
        break;
    }
    onClose();
  };
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Projekt exportieren"
      footer={
        <>
          <button className="btn" onClick={onClose}>Abbrechen</button>
          <button className="btn btn-primary" onClick={handleExport}>
            <Icon name="download" /> Exportieren
          </button>
        </>
      }
    >
      <div className="export-options">
        <button
          className={`export-option ${selected === 'production' ? 'active' : ''}`}
          onClick={() => setSelected('production')}
        >
          <div className="export-option-icon">
            <Icon name="folder" size={24} />
          </div>
          <div className="export-option-title">Production Build</div>
          <div className="export-option-desc">ZIP mit allen Dateien, bereit für Hosting</div>
        </button>
        
        <button
          className={`export-option ${selected === 'preview' ? 'active' : ''}`}
          onClick={() => setSelected('preview')}
        >
          <div className="export-option-icon">
            <Icon name="file" size={24} />
          </div>
          <div className="export-option-title">Quick Preview</div>
          <div className="export-option-desc">Eine HTML-Datei für schnelle Demo</div>
        </button>
        
        <button
          className={`export-option ${selected === 'json' ? 'active' : ''}`}
          onClick={() => setSelected('json')}
        >
          <div className="export-option-icon">
            <Icon name="code" size={24} />
          </div>
          <div className="export-option-title">JSON Backup</div>
          <div className="export-option-desc">Konfiguration zum späteren Import</div>
        </button>

        <button
          className={`export-option ${selected === 'offerte' ? 'active' : ''}`}
          onClick={() => setSelected('offerte')}
        >
          <div className="export-option-icon">
            <Icon name="file" size={24} />
          </div>
          <div className="export-option-title">Offerte Generator</div>
          <div className="export-option-desc">Standalone HTML-Tool mit deinen aktuellen Tokens & Firmendaten</div>
        </button>
      </div>
    </Modal>
  );
};

// ============================================
// EXPORTS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Icon,
    EditorField,
    EditorTextarea,
    EditorCheckbox,
    EditorColorPicker,
    EditorSelect,
    EditorList,
    ComponentItem,
    Sidebar,
    ComponentEditor,
    Toolbar,
    Modal,
    TemplatesModal,
    SettingsModal,
    ExportModal
  };
}

/* ============================================
   SMOOTH BUILDER PRO v3.7 - MAIN APP
   ============================================
   Haupt-Applikation mit State Management
   ============================================ */

// React hooks already declared above

// ============================================
// MAIN APP COMPONENT
// ============================================

const SmoothBuilderApp = () => {
  // ============================================
  // STATE
  // ============================================
  
  // Builder theme (separate from website dark mode)
  const [builderTheme, setBuilderTheme] = useState(() => {
    return StorageManager.load('builderTheme') || 'dark';
  });
  
  // Components state
  const [components, setComponents] = useState(() => {
    const saved = StorageManager.load('components');
    return saved || createDefaultComponents();
  });
  
  // Component order
  const [order, setOrder] = useState(() => {
    const saved = StorageManager.load('order');
    return saved || defaultComponentOrder;
  });
  
  // Settings
  const [settings, setSettings] = useState(() => {
    const saved = StorageManager.load('settings');
    if (!saved) return { ...defaultSettings };
    // Merge defaults (so new fields like trackingPreset appear even for existing projects)
    return {
      ...defaultSettings,
      ...saved,
      companyLegal: { ...(defaultSettings.companyLegal || {}), ...(saved.companyLegal || {}) },
      tracking: { ...(defaultSettings.tracking || {}), ...(saved.tracking || {}) }
    };
  });

  
  // UI State
  const [activeComponent, setActiveComponent] = useState(null);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'code'
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [codeTab, setCodeTab] = useState('html'); // 'html' | 'css' | 'js'
  
  // Modals
  const [showTemplates, setShowTemplates] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showStudio, setShowStudio] = useState(false);
  const [showColorGen, setShowColorGen] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showOfferteGen, setShowOfferteGen] = useState(false);
  
  // History
  const [history] = useState(() => new HistoryManager(30));
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  
  // ============================================
  // EFFECTS
  // ============================================
  
  // Apply builder theme to document
  useEffect(() => {
    if (builderTheme === 'light') {
      document.documentElement.classList.add('builder-light');
    } else {
      document.documentElement.classList.remove('builder-light');
    }
    StorageManager.save('builderTheme', builderTheme);
  }, [builderTheme]);
  
  // Save state to localStorage (debounced)
  useEffect(() => {
    const saveState = StateUtils.debounce(() => {
      StorageManager.save('components', components);
      StorageManager.save('order', order);
      StorageManager.save('settings', settings);
    }, 500);
    saveState();
  }, [components, order, settings]);
  
  // Push to history on significant changes
  useEffect(() => {
    const state = { components, order, settings };
    history.push(state);
    setCanUndo(history.canUndo());
    setCanRedo(history.canRedo());
  }, [components, order, settings]);
  
  // Keyboard shortcuts
  useEffect(() => {
    KeyboardShortcuts.register('ctrl+z', handleUndo);
    KeyboardShortcuts.register('ctrl+y', handleRedo);
    KeyboardShortcuts.register('ctrl+shift+z', handleRedo);
    KeyboardShortcuts.register('ctrl+s', (e) => {
      e.preventDefault();
      Toast.success('Automatisch gespeichert');
    });
    
    return () => {
      KeyboardShortcuts.unregister('ctrl+z');
      KeyboardShortcuts.unregister('ctrl+y');
      KeyboardShortcuts.unregister('ctrl+shift+z');
      KeyboardShortcuts.unregister('ctrl+s');
    };
  }, []);
  
  // ============================================
  // HANDLERS
  // ============================================
  
  const toggleBuilderTheme = () => {
    setBuilderTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  const handleSelectComponent = (id) => {
    setActiveComponent(id === activeComponent ? null : id);
  };
  
  const handleToggleComponent = (id) => {
    setComponents(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        enabled: !prev[id].enabled
      }
    }));
  };
  
  const handleUpdateComponent = (id, newData) => {
    setComponents(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        data: newData
      }
    }));
  };
  
  const handleReorder = (fromIndex, toIndex) => {
    setOrder(prev => DragDropUtils.reorder(prev, fromIndex, toIndex));
  };
  
  const handleUpdateSettings = (newSettings) => {
    setSettings(newSettings);
  };
  
  const handleApplyTemplate = (templateKey) => {
    const template = industryTemplates[templateKey];
    if (!template) return;
    
    // Create new components from template
    const newComponents = createDefaultComponents();
    
    // Apply template data to components
    Object.entries(template.components).forEach(([type, data]) => {
      if (newComponents[type]) {
        newComponents[type].data = { ...newComponents[type].data, ...data };
        newComponents[type].enabled = true;
      }
    });
    
    // Apply template settings
    const newSettings = {
      ...defaultSettings,
      ...template.settings,
      siteName: template.components.header?.companyName || template.name,
      companyLegal: {
        ...defaultSettings.companyLegal,
        name: template.components.footer?.companyName || defaultSettings.companyLegal.name,
        address: template.components.footer?.address || defaultSettings.companyLegal.address,
        email: template.components.footer?.email || defaultSettings.companyLegal.email,
        phone: template.components.footer?.phone || defaultSettings.companyLegal.phone
      }
    };
    
    setComponents(newComponents);
    setSettings(newSettings);
    setActiveComponent(null);
    
    Toast.success(`Template "${template.name}" angewendet`);
  };
  
  const handleUndo = useCallback(() => {
    const state = history.undo();
    if (state) {
      setComponents(state.components);
      setOrder(state.order);
      setSettings(state.settings);
      setCanUndo(history.canUndo());
      setCanRedo(history.canRedo());
    }
  }, [history]);
  
  const handleRedo = useCallback(() => {
    const state = history.redo();
    if (state) {
      setComponents(state.components);
      setOrder(state.order);
      setSettings(state.settings);
      setCanUndo(history.canUndo());
      setCanRedo(history.canRedo());
    }
  }, [history]);
  
  const handleImport = (data) => {
    try {
      if (data.components) setComponents(data.components);
      if (data.order) setOrder(data.order);
      if (data.settings) setSettings(data.settings);
      Toast.success('Projekt importiert');
    } catch (err) {
      Toast.error('Import fehlgeschlagen');
    }
  };
  
  // ============================================
  // EXPORT HANDLERS
  // ============================================
  
  const handleExportJson = () => {
    const data = { components, order, settings, version: '3.0' };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const filename = `${settings.siteName.toLowerCase().replace(/\s+/g, '-')}-backup.json`;
    saveAs(blob, filename);
    Toast.success('JSON exportiert');
  };
  
  const handleExportPreview = () => {
    // Safety Layer: Pre-Export Validierung
    const html = generatePreviewHTML(components, order, settings);
    const validation = ExportValidator.validate(html, settings);
    
    if (!validation.valid) {
      const errorMsg = validation.errors.map(e => `• ${e.message}`).join('\n');
      const proceed = confirm(`⚠️ ${validation.errors.length} Fehler:\n\n${errorMsg}\n\nTrotzdem exportieren?`);
      if (!proceed) return;
    }
    
    if (validation.warnings.length > 0) {
      Toast.warning(`${validation.warnings.length} Hinweise (siehe Konsole)`);
      console.warn('[Export] Warnings:', validation.warnings);
    }
    
    const blob = new Blob([html], { type: 'text/html' });
    const filename = `${settings.siteName.toLowerCase().replace(/\s+/g, '-')}-preview.html`;
    saveAs(blob, filename);
    Toast.success('Preview exportiert');
  };

  const handleExportOfferte = () => {
    const html = generateOfferteGeneratorHTML(settings);
    const blob = new Blob([html], { type: 'text/html' });
    const filename = `${settings.siteName.toLowerCase().replace(/\s+/g, '-')}-offerte-generator.html`;
    saveAs(blob, filename);
    Toast.success('Offerte-Generator exportiert');
  };


  const handleExportProduction = async () => {
    // Safety Layer: Pre-Export Validierung
    try {
      const html = generateHTML(components, order, settings);
      const validation = ExportValidator.validate(html, settings);
      
      if (!validation.valid) {
        const errorMsg = validation.errors.map(e => `• ${e.message}`).join('\n');
        const proceed = confirm(`⚠️ ${validation.errors.length} Fehler:\n\n${errorMsg}\n\nTrotzdem exportieren?`);
        if (!proceed) return;
      }
      
      if (validation.warnings.length > 0) {
        Toast.warning(`${validation.warnings.length} Hinweise`);
        console.warn('[Export] Warnings:', validation.warnings);
      }
      
      Toast.info('Erstelle ZIP...');
      await exportProductionZip(components, order, settings);
      Toast.success('Production Build exportiert');
    } catch (err) {
      console.error('Export error:', err);
      SafetyLayer.logError({ type: 'export', message: err.message, stack: err.stack });
      Toast.error('Export fehlgeschlagen');
    }
  };
  
  // ============================================
  // GENERATED CODE (for code view)
  // ============================================
  
  const generatedCode = useMemo(() => {
    return {
      html: generateHTML(components, order, settings),
      css: generateTokensCSS(settings) + '\n\n' + generateComponentsCSS(),
      js: generateMainJS(settings, components)
    };
  }, [components, order, settings]);
  
  // ============================================
  // RENDER
  // ============================================
  
  return (
    <div className="builder-layout">
      {/* Sidebar */}
      <Sidebar
        components={components}
        order={order}
        activeComponent={activeComponent}
        settings={settings}
        onSelectComponent={handleSelectComponent}
        onToggleComponent={handleToggleComponent}
        onReorder={handleReorder}
        onUpdateComponent={handleUpdateComponent}
        onUpdateSettings={handleUpdateSettings}
        onOpenTemplates={() => setShowTemplates(true)}
        onOpenSettings={() => setShowSettings(true)}
        onOpenStudio={() => setShowStudio(true)}
        builderTheme={builderTheme}
        onToggleBuilderTheme={toggleBuilderTheme}
      />
      
      {/* Main Content */}
      <main className="builder-main">
        {/* Toolbar */}
        <Toolbar
          viewMode={viewMode}
          viewport={viewport}
          canUndo={canUndo}
          canRedo={canRedo}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onViewModeChange={setViewMode}
          onViewportChange={setViewport}
          onExport={() => setShowExport(true)}
          onOpenOfferte={() => setShowOfferteGen(true)}
          onImport={handleImport}
        />
        
        {/* Canvas / Preview */}
        {viewMode === 'preview' ? (
          <div className="builder-canvas">
            <div className={`preview-frame ${viewport}`}>
              <PreviewRoot
                components={components}
                order={order}
                settings={settings}
                onToggleDarkMode={() => setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }))}
              />
            </div>
          </div>
        ) : (
          <div className="code-view">
            <div className="code-header">
              <div className="code-tabs">
                <button
                  className={`code-tab ${codeTab === 'html' ? 'active' : ''}`}
                  onClick={() => setCodeTab('html')}
                >
                  index.html
                </button>
                <button
                  className={`code-tab ${codeTab === 'css' ? 'active' : ''}`}
                  onClick={() => setCodeTab('css')}
                >
                  styles.css
                </button>
                <button
                  className={`code-tab ${codeTab === 'js' ? 'active' : ''}`}
                  onClick={() => setCodeTab('js')}
                >
                  main.js
                </button>
              </div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  navigator.clipboard.writeText(generatedCode[codeTab]);
                  Toast.success('Code kopiert');
                }}
              >
                <Icon name="copy" /> Kopieren
              </button>
            </div>
            <div className="code-block">
              <pre>{generatedCode[codeTab]}</pre>
            </div>
          </div>
        )}
      </main>
{/* Modals */}
<TreuhandStudioModal
  isOpen={showStudio}
  onClose={() => setShowStudio(false)}
  components={components}
  order={order}
  settings={settings}
  onApply={(patch) => {
    if (!patch) return;
    if (patch.settings) setSettings(patch.settings);
    if (patch.components) setComponents(patch.components);
    if (patch.order) setOrder(patch.order);
    setShowStudio(false);
    Toast.success('Treuhand Studio angewendet');
  }}
/>

<TemplatesModal
        isOpen={showTemplates}
        onClose={() => setShowTemplates(false)}
        onApply={handleApplyTemplate}
      />
      
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onUpdate={handleUpdateSettings}
        onOpenColorGen={() => {
          setShowSettings(false);
          setShowColorGen(true);
        }}
      />
      
      <ExportModal
        isOpen={showExport}
        onClose={() => setShowExport(false)}
        onExportPreview={handleExportPreview}
        onExportProduction={handleExportProduction}
        onExportJson={handleExportJson}
        onExportOfferte={handleExportOfferte}
      />
      
      <ColorGeneratorModal
        isOpen={showColorGen}
        onClose={() => setShowColorGen(false)}
        onApply={(payload) => {
          if (payload && payload.recommended) {
            const newSettings = { ...settings };
            if (payload.recommended.primary500) {
              newSettings.primaryColor = payload.recommended.primary500;
            }
            if (payload.recommended.accent500) {
              newSettings.accentColor = payload.recommended.accent500;
            }
            if (payload.palette) {
              newSettings.colorStack = payload.palette;
              newSettings.useColorStack = true;
            }
            setSettings(newSettings);
            Toast.success('Farbpalette übernommen!');
          }
        }}
      />


      <OfferteGeneratorModal
        isOpen={showOfferteGen}
        onClose={() => setShowOfferteGen(false)}
        settings={settings}
      />
    </div>
  );
};

// ============================================
// HELPER: Generate Preview HTML (Single File)
// ============================================

function generatePreviewHTML(components, order, settings) {
  const tokensCSS = generateTokensCSS(settings);
  const componentsCSS = generateComponentsCSS();
  const mainJS = generateMainJS(settings, components);
  const bodyHTML = generateBodyContent(components, order, settings);
  
  // Build Premium FX class list
  const fxClasses = ['preview-root'];
  if (settings.darkMode) fxClasses.push('dark');
  if (settings.fontStack && settings.fontStack !== 'system') fxClasses.push(`font-${settings.fontStack}`);
  const intensity = settings.fxIntensity || 'medium';
  if (settings.fxOrbs) fxClasses.push('fx-orbs', `fx-orbs-${intensity}`);
  if (settings.fxGrain) fxClasses.push('fx-grain', `fx-grain-${intensity}`);
  if (settings.fxGlass) fxClasses.push('fx-glass-cards');
  
  // Grain overlay element
  const grainOverlay = settings.fxGrain ? '\n  <div class="fx-grain-overlay" aria-hidden="true"></div>\n' : '';
  
  return `<!DOCTYPE html>
<html lang="de"${settings.darkMode ? ' class="dark"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(settings.siteDescription)}">
  <title>${escapeHtml(settings.siteName)}</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${settings.faviconEmoji}</text></svg>">
  <style>
${tokensCSS}

${componentsCSS}
  </style>
</head>
<body data-style="${settings.stylePreset || 'signature'}" data-density="${settings.designDensity || 'balanced'}" class="${fxClasses.join(' ')}">
  <a href="#main" class="preview-skip-link">Zum Inhalt springen</a>
${grainOverlay}
${bodyHTML}

  <script>
${mainJS}
  <${'/'}script>
</body>
</html>`;
}

// ============================================
// HELPER: Generate Body Content
// ============================================

function generateBodyContent(components, order, settings) {
  let html = '';
  
  order.forEach(id => {
    const comp = components[id];
    if (!comp?.enabled) return;
    
    html += generateComponentHTML(comp, settings);
  });
  
  return html;
}

// ============================================
// HELPER: Escape HTML
// ============================================

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// EXPORTS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SmoothBuilderApp };
}

// ============================================
// INIT
// ============================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(SmoothBuilderApp));

// Service Worker Registration
if ('serviceWorker' in navigator) {
  (location.protocol === 'http:' || location.protocol === 'https:') && navigator.serviceWorker.register('../sw.js')
    .then(reg => console.log('SW registered:', reg.scope))
    .catch(err => console.warn('SW registration failed:', err));
}
