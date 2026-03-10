/* SMOOTH BUILDER 5.0 - EXPORT MODE SIDEBAR */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.modes = SB5.modes || {};
  const React = global.React;
  const { useCallback, useState } = React;

  function ExportSidebar({ state, dispatch, SidebarSection }) {
    const settings = state?.settings || {};
    const ui = state?.ui || {};
    const ActionTypes = SB5.core.state?.ActionTypes || {};
    const [previewHtml, setPreviewHtml] = useState('');

    const updateSettings = useCallback((patch) => dispatch?.({ type: ActionTypes.UPDATE_SETTINGS, payload: patch }), [dispatch, ActionTypes]);

    const generatePreview = useCallback(() => {
      const gen = SB5.generators?.html;
      if (gen?.generateFullPage) {
        const html = gen.generateFullPage(state);
        setPreviewHtml(html);
      }
    }, [state]);

    if (ui.sidebarTab === 'code') {
      return (
        <SidebarSection title="Code Preview">
          <button type="button" className="btn btn--secondary btn--sm" onClick={generatePreview} style={{ marginBottom: 12 }}>HTML generieren</button>
          {previewHtml && <textarea className="form-textarea" style={{ height: 300, fontFamily: 'monospace', fontSize: 11 }} readOnly value={previewHtml} />}
        </SidebarSection>
      );
    }

    return (
      <>
        <SidebarSection title="Site Settings">
          <div className="form-group">
            <label className="form-label">Site Name</label>
            <input className="form-input" type="text" value={settings.siteName || ''} onChange={(e) => updateSettings({ siteName: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Beschreibung</label>
            <textarea className="form-textarea" value={settings.siteDescription || ''} onChange={(e) => updateSettings({ siteDescription: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="form-label">Sprache</label>
            <select className="form-select" value={settings.language || 'de'} onChange={(e) => updateSettings({ language: e.target.value })}>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </SidebarSection>
        <SidebarSection title="Export">
          <p className="sidebar__hint">Klicke oben auf "ZIP" um das Projekt zu exportieren.</p>
        </SidebarSection>
      </>
    );
  }

  SB5.modes.ExportSidebar = ExportSidebar;
})(window);
