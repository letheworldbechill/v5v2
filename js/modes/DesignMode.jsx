/* SMOOTH BUILDER 5.0 - DESIGN MODE SIDEBAR */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.modes = SB5.modes || {};
  const React = global.React;
  const { useCallback } = React;

  function DesignSidebar({ state, dispatch, SidebarSection }) {
    const brand = state?.brand || {};
    const layout = state?.layout || { sections: [], order: [] };
    const content = state?.content || {};
    const ui = state?.ui || {};
    const ActionTypes = SB5.core.state?.ActionTypes || {};

    const LogoUpload = SB5.components.LogoUpload;
    const ColorStack = SB5.components.ColorStack;
    const FontPicker = SB5.components.FontPicker;
    const RadiusPicker = SB5.components.RadiusPicker;
    const ContentEditor = SB5.components.ContentEditor;

    const setLogo = useCallback((logo) => dispatch?.({ type: ActionTypes.SET_LOGO, payload: logo }), [dispatch, ActionTypes]);
    const setColors = useCallback((colors) => dispatch?.({ type: ActionTypes.SET_COLORS, payload: colors }), [dispatch, ActionTypes]);
    const setFont = useCallback((font) => dispatch?.({ type: ActionTypes.SET_FONT, payload: font }), [dispatch, ActionTypes]);
    const setRadius = useCallback((radius) => dispatch?.({ type: ActionTypes.SET_RADIUS, payload: radius }), [dispatch, ActionTypes]);

    const activeSection = layout.sections.find(s => s.id === ui.activeSection);

    if (ui.sidebarTab === 'content') {
      if (!activeSection) {
        return (
          <SidebarSection title="Inhalt bearbeiten">
            <p className="sidebar__hint">Wähle eine Section aus, um den Inhalt zu bearbeiten.</p>
          </SidebarSection>
        );
      }
      return (
        <SidebarSection title="Inhalt bearbeiten">
          {ContentEditor ? (
            <ContentEditor
              sectionType={activeSection.type}
              content={content[activeSection.id] || {}}
              onChange={(patch) => dispatch?.({ type: ActionTypes.UPDATE_CONTENT, payload: { id: activeSection.id, ...patch } })}
            />
          ) : <p className="sidebar__hint">Content Editor lädt...</p>}
        </SidebarSection>
      );
    }

    return (
      <>
        <SidebarSection title="Logo">
          {LogoUpload ? <LogoUpload value={brand.logo} onChange={setLogo} onRemove={() => setLogo(null)} /> : <p className="sidebar__hint">Logo Upload lädt...</p>}
        </SidebarSection>
        <SidebarSection title="Farben">
          {ColorStack ? <ColorStack logo={brand.logo} colors={brand.colors} onLogoChange={setLogo} onColorsChange={setColors} /> : <p className="sidebar__hint">Color Stack lädt...</p>}
        </SidebarSection>
        <SidebarSection title="Schrift">
          {FontPicker ? <FontPicker value={brand.font} onChange={setFont} /> : <p className="sidebar__hint">Font Picker lädt...</p>}
        </SidebarSection>
        <SidebarSection title="Radius">
          {RadiusPicker ? <RadiusPicker value={brand.radius} onChange={setRadius} /> : <p className="sidebar__hint">Radius Picker lädt...</p>}
        </SidebarSection>
      </>
    );
  }

  SB5.modes.DesignSidebar = DesignSidebar;
})(window);
