/* SMOOTH BUILDER 5.0 - TOOLBAR */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo, useCallback } = React;
  const Icon = () => SB5.components.Icon;

  function Toolbar({ state, dispatch, canDesign = false, canExport = false, onExportZip }) {
    const mode = state?.mode || 'structure';
    const ui = state?.ui || {};
    const ActionTypes = SB5.core.state?.ActionTypes || {};
    const IconComp = Icon();

    const setMode = useCallback((m) => dispatch?.({ type: ActionTypes.SET_MODE, payload: m }), [dispatch, ActionTypes]);
    const toggleGrid = useCallback(() => dispatch?.({ type: ActionTypes.TOGGLE_GRID }), [dispatch, ActionTypes]);
    const toggle8px = useCallback(() => dispatch?.({ type: ActionTypes.TOGGLE_8PX }), [dispatch, ActionTypes]);
    const undo = useCallback(() => dispatch?.({ type: ActionTypes.UNDO }), [dispatch, ActionTypes]);
    const redo = useCallback(() => dispatch?.({ type: ActionTypes.REDO }), [dispatch, ActionTypes]);
    const toggleTheme = useCallback(() => dispatch?.({ type: ActionTypes.SET_BUILDER_THEME, payload: ui.builderTheme === 'light' ? 'dark' : 'light' }), [dispatch, ActionTypes, ui.builderTheme]);

    const modeTabs = useMemo(() => [
      { id: 'structure', label: 'Struktur', step: 1, enabled: true },
      { id: 'design', label: 'Design', step: 2, enabled: canDesign },
      { id: 'export', label: 'Export', step: 3, enabled: canExport }
    ], [canDesign, canExport]);

    return (
      <header className="toolbar" role="banner">
        <div className="toolbar__left">
          <div className="toolbar__brand"><span className="toolbar__brandMark">SB</span><span className="toolbar__brandText">Smooth Builder</span></div>
          <nav className="toolbar__tabs">
            {modeTabs.map(tab => (
              <button key={tab.id} type="button" className={`toolbar__tab ${mode === tab.id ? 'is-active' : ''}`} onClick={() => setMode(tab.id)} disabled={!tab.enabled}>
                <span className="toolbar__tabStep">{tab.step}</span><span className="toolbar__tabLabel">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="toolbar__right">
          <div className="toolbar__group">
            <button type="button" className="toolbar__btn" onClick={undo}>{IconComp ? <IconComp name="undo" size={16} /> : '↶'}</button>
            <button type="button" className="toolbar__btn" onClick={redo}>{IconComp ? <IconComp name="redo" size={16} /> : '↷'}</button>
          </div>
          {mode === 'structure' && (
            <div className="toolbar__group">
              <button type="button" className={`toolbar__btn ${ui.showGrid ? 'is-active' : ''}`} onClick={toggleGrid}><span className="toolbar__btnLabel">Grid</span></button>
              <button type="button" className={`toolbar__btn ${ui.show8pxRaster ? 'is-active' : ''}`} onClick={toggle8px}><span className="toolbar__btnLabel">8px</span></button>
            </div>
          )}
          {mode === 'export' && (
            <div className="toolbar__group">
              <button type="button" className="toolbar__btn toolbar__btn--primary" onClick={onExportZip}>{IconComp ? <IconComp name="download" size={16} /> : '↓'}<span className="toolbar__btnLabel">ZIP</span></button>
            </div>
          )}
          <div className="toolbar__group">
            <button type="button" className="toolbar__btn" onClick={toggleTheme}>{IconComp ? <IconComp name={ui.builderTheme === 'light' ? 'moon' : 'sun'} size={16} /> : '☀'}</button>
          </div>
        </div>
      </header>
    );
  }

  SB5.components.Toolbar = Toolbar;
})(window);
