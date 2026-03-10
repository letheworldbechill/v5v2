/* SMOOTH BUILDER 5.0 - SECTION PLACEHOLDER */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo, useCallback } = React;

  function SectionPlaceholder({ section, spacing = { pt: 64, pb: 64 }, isActive = false, onSelect, onRemove }) {
    const type = section?.type || 'section';
    const id = section?.id || '';
    const variant = section?.variant || 'default';

    // Support both old flat structure and new nested structure
    const sectionsData = SB5.data?.sections?.sections || SB5.data?.sections || {};
    const meta = useMemo(() => sectionsData[type] || null, [type, sectionsData]);
    const name = meta?.name || type;
    const icon = meta?.icon || '⬚';

    const handleSelect = useCallback(() => onSelect?.(id), [onSelect, id]);
    const handleRemove = useCallback((e) => { e.preventDefault(); e.stopPropagation(); onRemove?.(id); }, [onRemove, id]);

    return (
      <div className={`placeholder ${isActive ? 'placeholder--active' : ''}`} style={{ paddingTop: spacing.pt, paddingBottom: spacing.pb }} onClick={handleSelect} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect(); } }}>
        <div className="placeholder__inner">
          <span className="placeholder__icon">{icon}</span>
          <span className="placeholder__label">{name}</span>
          <span className="placeholder__variant">{variant}</span>
        </div>
        <button type="button" className="placeholder__remove" onClick={handleRemove}>×</button>
      </div>
    );
  }

  SB5.components.SectionPlaceholder = SectionPlaceholder;
})(window);
