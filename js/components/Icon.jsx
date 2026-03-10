/* SMOOTH BUILDER 5.0 - ICON */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;

  function Icon({ name, size = 16, className = '', style = {} }) {
    const icons = (SB5.data && SB5.data.icons) || {};
    const raw = icons[name] || null;
    if (!raw) return null;
    let svg = String(raw);
    svg = svg.replace(/width="[^"]*"/, `width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`);
    return <span className={`icon ${className}`.trim()} style={{ display: 'inline-flex', alignItems: 'center', ...style }} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
  }

  SB5.components.Icon = Icon;
})(window);
