/* SMOOTH BUILDER 5.0 - SPACING SLIDER */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo } = React;

  function SpacingSlider({ label, value, onChange, min = 0, max = 160, step = 8, presets }) {
    const v = Number.isFinite(Number(value)) ? Number(value) : 0;
    const presetList = useMemo(() => presets?.length ? presets : [{ label: 'S', value: 32 }, { label: 'M', value: 64 }, { label: 'L', value: 96 }, { label: 'XL', value: 128 }], [presets]);

    return (
      <div className="spacing-slider">
        <div className="spacing-slider__header"><label className="spacing-slider__label">{label}</label><span className="spacing-slider__value">{v}px</span></div>
        <input className="spacing-slider__range" type="range" min={min} max={max} step={step} value={v} onChange={(e) => onChange?.(Number(e.target.value))} />
        <div className="spacing-slider__presets">
          {presetList.map(p => <button key={p.label} type="button" className={`spacing-slider__preset ${v === p.value ? 'is-active' : ''}`} onClick={() => onChange?.(p.value)}>{p.label}</button>)}
        </div>
      </div>
    );
  }

  SB5.components.SpacingSlider = SpacingSlider;
})(window);
