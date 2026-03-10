/* SMOOTH BUILDER 5.0 - GRID OVERLAY */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;

  function GridOverlay({ columns = 12, show8px = false }) {
    return (
      <div className="grid-overlay" aria-hidden="true">
        <div className="grid-columns">{Array.from({ length: columns }).map((_, i) => <div key={i} className="grid-column" />)}</div>
        {show8px && <div className="grid-8px" />}
      </div>
    );
  }

  SB5.components.GridOverlay = GridOverlay;
})(window);
