/* SMOOTH BUILDER 5.0 - CANVAS */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo, useCallback } = React;

  function Canvas({ state, dispatch, viewport = 'desktop', className = '', style = {} }) {
    const mode = state?.mode || 'structure';
    const ui = state?.ui || {};
    const layout = state?.layout || { sections: [], order: [], spacing: {} };
    const ActionTypes = SB5.core.state?.ActionTypes || {};

    const GridOverlay = SB5.components.GridOverlay;
    const SectionPlaceholder = SB5.components.SectionPlaceholder;
    const PreviewRoot = SB5.preview?.PreviewRoot;

    const byId = useMemo(() => new Map((layout.sections || []).map(s => [s.id, s])), [layout.sections]);
    const orderedSections = useMemo(() => (layout.order || []).map(id => byId.get(id)).filter(Boolean), [layout.order, byId]);

    const selectSection = useCallback((id) => dispatch?.({ type: ActionTypes.SELECT_SECTION, payload: id }), [dispatch, ActionTypes]);
    const removeSection = useCallback((id) => dispatch?.({ type: ActionTypes.REMOVE_SECTION, payload: id }), [dispatch, ActionTypes]);

    if (mode === 'structure') {
      return (
        <div className={`canvas canvas--structure ${className}`} style={style}>
          <div className="canvas__surface">
            {ui.showGrid && GridOverlay && <GridOverlay columns={12} show8px={ui.show8pxRaster} />}
            <div className="canvas__stack" role="list">
              {orderedSections.map(section => <SectionPlaceholder key={section.id} section={section} spacing={layout.spacing?.[section.id] || { pt: 64, pb: 64 }} isActive={ui.activeSection === section.id} onSelect={selectSection} onRemove={removeSection} />)}
              {!orderedSections.length && <div className="canvas__empty"><div className="canvas__emptyTitle">Noch keine Sections</div><div className="canvas__emptyText">Füge links eine Section hinzu.</div></div>}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`canvas canvas--${mode} ${className}`} style={style}>
        <div className={`canvas__surface canvas__surface--${viewport}`}>
          {PreviewRoot ? <PreviewRoot state={state} dispatch={dispatch} viewport={viewport} readOnly={mode === 'export'} /> : <div className="canvas__empty"><div className="canvas__emptyTitle">Preview nicht verfügbar</div></div>}
        </div>
      </div>
    );
  }

  SB5.components.Canvas = Canvas;
})(window);
