/* SMOOTH BUILDER 5.0 - VARIANT PICKER */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo } = React;

  function VariantPicker({ sectionType, currentVariant, onChange, label = 'Variante', variants }) {
    const type = String(sectionType || '');
    // Support both old flat structure and new nested structure
    const sectionsData = SB5.data?.sections?.sections || SB5.data?.sections || {};
    const list = useMemo(() => variants?.length ? variants : (sectionsData[type]?.variants || []), [variants, type, sectionsData]);

    if (!type || !list.length) return <div className="variant-picker"><label className="variant-picker__label">{label}</label><div className="variant-picker__empty">Keine Varianten</div></div>;

    return (
      <div className="variant-picker">
        <label className="variant-picker__label">{label}</label>
        <div className="variant-picker__grid" role="listbox">
          {list.map(v => <button key={v.id} type="button" className={`variant-option ${currentVariant === v.id ? 'active' : ''}`} onClick={() => onChange?.(v.id)} role="option" aria-selected={currentVariant === v.id}><span className="variant-option__label">{v.label || v.id}</span></button>)}
        </div>
      </div>
    );
  }

  SB5.components.VariantPicker = VariantPicker;
})(window);
